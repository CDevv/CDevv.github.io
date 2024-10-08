import { useParams } from "@solidjs/router";
import { get, getProjectGallery, getProjectLinks } from "../lib/Service";
import { createEffect, createResource, createSignal, For, onMount, Show, Suspense } from "solid-js";
import GalleryImage from "../components/GalleryImage";
import SocialButton from "../components/SocialButton";

import github from "../assets/github-mark-white.svg";
import { createStore } from "solid-js/store";

import nodejsLogo from "../assets/nodejs.png";
import codemirrorLogo from "../assets/codemirror.svg";
import electronLogo from "../assets/electron.png";
import csharpLogo from "../assets/csharp.png";
import godotLogo from "../assets/godot.svg";

const data = {
    nodejs: nodejsLogo,
    codemirror: codemirrorLogo,
    electron: electronLogo,
    csharp: csharpLogo,
    godot: godotLogo,
}

async function fetchProject(id)
{
    const result = get(id);
    return result;
}

async function fetchProjectLinks(id)
{
    const result = getProjectLinks(id);
    return result;
}

async function fetchProjectGallery(id)
{
    const result = getProjectGallery(id);
    return result;
}

export default function Project(props)
{
    const params = useParams();
    const [project] = createResource(params.id, fetchProject);
    const [projectLinks] = createResource(params.id, fetchProjectLinks);
    const [projectGallery] = createResource(params.id, fetchProjectGallery);
    const [linksStore, setLinksStore] = createStore([]);
    const [galleryStore, setGalleryStore] = createStore([]);
    const [loaded, setLoaded] = createSignal(false);
    
    onMount(() => {
        project();
        projectLinks();
        projectGallery();
        console.log(project());
    })

    createEffect(() => {
        console.log(projectLinks());
        
        if (projectLinks.state === "ready" && projectGallery.state === "ready" && !loaded()) {
            projectLinks().forEach((item) => {
                addLink(item.name, item.link);
            });
            projectGallery().forEach((item) => {
                addGalleryImg(item);
            });
            setLoaded(true);
        }
    })

    const addLink = (name, link) => {
        setLinksStore([...linksStore, {name: name, link: link}]);
    }

    const addGalleryImg = (item) => {
        setGalleryStore([...galleryStore, {item}]);
    }

    return (
        <>
            <div>
                <Suspense fallback={<p>Loading..</p>}>
                    <Show when={project.loading}>
                        <p>Loading..</p>
                    </Show>
                    <Switch>
                        <Match when={project.error}>
                            <p>Error: {project.error}</p>
                        </Match>
                        <Match when={project()}>
                            <div class="flex flex-cols">
                                <div class="p-4">
                                    <GalleryImage img={project().mainImg} width={350} height={250}></GalleryImage>
                                </div>
                                <div class="p-4">
                                    <h1 class="text-xl">{project().name}</h1>
                                    <p>{project().desc}</p>
                                </div>
                            </div>   
                            <div class="flex flex-row gap-4">
                                <div class="p-4">
                                    <p>Made with:</p>
                                    <div class="flex flex-rows gap-4">                                      
                                        <Show when={linksStore} fallback={<p>Loading..</p>}>
                                            <For each={linksStore}>                                             
                                                {(item) => {
                                                    return (
                                                        <SocialButton img={data[item.name]} href={item.link}></SocialButton>
                                                    )
                                                }}
                                            </For>                                          
                                        </Show>
                                    </div>
                                </div>
                                <div class="p-4">
                                    <p>GitHub repo:</p>
                                    <SocialButton img={github} href={project().github}></SocialButton>
                                </div>
                            </div>
                            <div class="p-4">
                                <div class="flex grid grid-cols-2">
                                    <For each={galleryStore}>
                                        {(item) => {
                                            return <GalleryImage img={item.item}></GalleryImage>
                                        }}
                                    </For>
                                </div>
                            </div>
                        </Match>
                    </Switch>
                </Suspense>
            </div>
        </>
    )
}