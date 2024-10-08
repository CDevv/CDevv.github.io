import { A } from "@solidjs/router";

export default function NavItem(props)
{
    return (
        <A href={props.href} class="text-slate-300 bg-zinc-900 hover:text-slate-400 hover:bg-zinc-800">
            <button class="m-4 font-sans text-xl"
            >{props.text}</button>
        </A>
    )
}