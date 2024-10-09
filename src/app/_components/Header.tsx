import Links from "./Links";
import { SquareTerminal } from "lucide-react";

const Header = () => {
    return (
        <header className="flex py-8 px-24 justify-between border-b-[1px] border-blue-700">
            <div>
                <h2 className="text-3xl text-blue-700 font-semibold flex items-center gap-2">
                    <span><SquareTerminal size={35}/></span>
                    João Maciel
                </h2>
            </div>
            
            <nav className=" gap-8 hidden">
                <Links text="Home"/>
                <Links text="Projetos" href="projects"/>
                <Links text="Sobre mim" href="about"/>
                <Links text="Techs" href="skills"/>
            </nav>
        </header>
    );
}
 
export default Header;