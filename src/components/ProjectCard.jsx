import { Image } from "@unpic/solid";
import { A } from "@solidjs/router";

export default function ProjectCard(props)
{
    return (
        <>
            <div class="rounded-lg inline-block bg-zinc-700 max-w-[350px] drop-shadow-lg">
                <Image
                    src={props.img}
                    layout="fixed"
                    width={350}
                    height={250}
                    class="rounded-tl-lg rounded-tr-lg"
                ></Image>
                <div class="p-2">
                    <h1 class="font-bold text-xl">{props.title}</h1>
                    <A href={`./${props.id}`}>
                        <button class="p-1 rounded-lg transition ease-in delay-100 bg-zinc-900 hover:bg-zinc-950"
                        >Details</button>
                    </A>
                </div>
            </div>
        </>
    )
}