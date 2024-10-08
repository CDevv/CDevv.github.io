import SocialButton from "../components/SocialButton";
import github from "../assets/github-mark-white.svg";
import email from "../assets/mail.png";

export default function Contact()
{
    return (
        <>
            <div class="p-4 text-center">
                <p>You can contact me here!</p>
                <br></br>
                <div class="flex flex-row gap-2 place-content-center">
                    <SocialButton href="https://github.com/CDevv" img={github}></SocialButton>
                    <SocialButton href="mailto:cdevyt@gmail.com" img={email}></SocialButton>
                </div>
            </div>
        </>
    )
}