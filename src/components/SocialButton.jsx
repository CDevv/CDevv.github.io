import { Image } from "@unpic/solid";
import { A } from "@solidjs/router";

export default function SocialButton(props)
{
    return (
        <>   
            <A target="_blank" href={props.href}>
                <button class="transition-all ease-in delay-100 p-2 rounded-lg bg-zinc-900 hover:bg-zinc-950">
                        <Image
                            src={props.img}
                            layout="constrained"
                            width={48}
                            height={48}
                            class="transition-all ease-in delay-100 bg-transparent p-0 hover:p-0.5"
                        ></Image>
                </button>
            </A>
        </>
    )
}