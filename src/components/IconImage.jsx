import { Image } from "@unpic/solid";

export default function IconImage(props)
{
    return (
        <button class="rounded-full outline outline-4 outline-zinc-900 bg-zinc-200 drop-shadow-lg"
        >
            <Image
                src={props.img}
                layout="constrained"
                width={200}
                height={200}
                class="rounded-full"
            ></Image>
        </button>
    )
}