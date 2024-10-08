import NavItem from "./NavItem";

export default function Navbar(props)
{
    return (
        <div class="bg-zinc-900 flex justify-center items-center min-h-[10vh]">
            <NavItem text="Home" href="/"></NavItem>
            <NavItem text="About Me" href="/about-me"></NavItem>
            <NavItem text="CV" href="/cv"></NavItem>
            <NavItem text="Projects" href="/projects"></NavItem>
            <NavItem text="Contacts" href="/contacts"></NavItem>
        </div>
    )
}