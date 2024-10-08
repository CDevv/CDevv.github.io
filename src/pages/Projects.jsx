import ProjectCard from "../components/ProjectCard";
import tree from "../assets/tree.jpg";
import { createEffect, createResource, For, Index, Match, onMount, Switch } from "solid-js";
import useDbContext from "../components/DbContext";
import { createStore } from "solid-js/store";
import { getAll } from "../lib/Service";

async function fetchProjects(source, { value, refetching }) {
    const response = await getAll();
    return response;
}

export default function Projects() {
    const [projects] = createResource({}, fetchProjects);

    onMount(() => {
        projects();       
    })

    createEffect(() => {
        console.log(projects());
    })

    return (
        <>
            <Show when={projects.loading}>
                <p>Loading..</p>
            </Show>
            <Switch>
                <Match when={projects.error}>
                    <p>Error: {projects.error}</p>
                </Match>
                <Match when={projects()}>
                    <div class="flex justify-center">
                        <div class="flex justify-between grid grid-cols-[max-content_max-content] max-w-fit place-items-center gap-5 p-2">
                            <For each={projects()}>
                                {(item, i) => (
                                    <ProjectCard id={i()} title={item.name} img={item.mainImg}></ProjectCard>
                                )}
                            </For>
                        </div>
                    </div>

                </Match>
            </Switch>
        </>
    )
}