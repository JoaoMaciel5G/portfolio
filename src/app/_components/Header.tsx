import Link from "next/link";

const Header = () => {
    return (
        <header className="flex py-8 justify-between px-60">
            <div>
                <h2 className="text-3xl text-blue-700 font-semibold">
                    Joao Maciel
                </h2>
            </div>
            <nav className="flex gap-8">
                <div>
                    <Link href="/work" className="text-lg hover:opacity-70">Projetos</Link>
                </div>
                <div>
                    <Link href="/about" className="text-lg hover:opacity-70">Sobre mim</Link>
                </div>
            </nav>
        </header>
    );
}
 
export default Header;