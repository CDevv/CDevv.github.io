import Navbar from "./Navbar";

export default function Layout(props) {
    return (
        <>
            <header class="min-h-[10vh]">
                <Navbar></Navbar>
            </header>
            <div class="bg-zinc-800 text-slate-300 min-h-[80vh]">
                {props.children}
            </div>
            <footer class="bg-zinc-950 text-slate-300 min-h-[10vh]">
                <p class="size-full text-center">Don't lose hope!</p>
            </footer>
        </>
    );
}