import IconImage from "../components/IconImage";
import SocialButton from "../components/SocialButton";
import logo from "../assets/pfp.png";
import github from "../assets/github-mark-white.svg";

export default function Home(props)
{
    return (
        <div class="p-10 font-sans text-slate-300 flex flex-col justify-center gap-2">
            <div class="grow-0 flex justify-center">
                <IconImage img={logo}></IconImage>
            </div>
            <h1 class="self-center text-lg font-semibold">Hello!</h1>
            <p class="self-center">Welcome to my portfolio!</p>        
            <div class="self-center">
                <SocialButton href="https://github.com/CDevv" img={github}></SocialButton>
            </div>
        </div>
    )
}