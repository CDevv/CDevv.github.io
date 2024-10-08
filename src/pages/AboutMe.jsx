import IconImage from "../components/IconImage";
import SocialButton from "../components/SocialButton";
import logo from "../assets/pfp.png";
import csharp from "../assets/csharp.png";
import godot from "../assets/godot.svg";
import javasc from "../assets/JavaScript-logo.png";
import nodejs from "../assets/nodejs.png";
import python from "../assets/python.png";
import lua from "../assets/Lua-Logo_128x128.png";

export default function AboutMe()
{
    return (
        <>
            <div class="flex flex-row">
                <div class="p-4 max-w-[30%]">
                    <IconImage img={logo}></IconImage>
                </div>
                <div class="p-4 max-w-[70%]">
                    <p>Hello! My name is CDevv and I am a 17 year old student who likes 
                        programming and game development! Currently I am making my first game. :D

                        
                    </p>
                    <br></br>
                    <p>
                        I use the following technologies:
                    </p>
                    <div class="flex flex-row gap-1">
                        <SocialButton img={csharp} href="https://learn.microsoft.com/en-us/dotnet/csharp/"></SocialButton>
                        <SocialButton img={godot} href="https://godotengine.org/"></SocialButton>
                        <SocialButton img={javasc} href="#"></SocialButton>
                        <SocialButton img={nodejs} href="https://nodejs.org/en"></SocialButton>
                        <SocialButton img={python} href="https://www.python.org/"></SocialButton>
                        <SocialButton img={lua} href="https://www.lua.org/"></SocialButton>
                    </div>
                    <br></br>
                    <p>
                        I mostly work in C# though!
                    </p>
                </div>
            </div>
        </>
    )
}