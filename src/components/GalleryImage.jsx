import { Image } from "@unpic/solid";
import { A } from "@solidjs/router";

export default function GalleryImage(props)
{
    return (
        <button class="p-2 rounded-lg bg-zinc-900">
            <Image
                    src={props.img}
                    layout="constrained"
                    width={props.width}
                    height={props.height}
                ></Image>
        </button>
    )
}