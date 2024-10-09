import { Exo_2 } from "next/font/google";

const exo_2 = Exo_2({subsets: ["latin"], })

const Home = () => {
    return (
        <section className="flex flex-grow px-28 ">
            <div className="flex flex-col w-1/2">
                <div className="flex flex-col gap-4 mb-6">
                    <h2 className="text-3xl">Olá, eu sou o<br/><span className="font-semibold">João Maciel</span></h2>
                    <p className={`text-2xl ${exo_2.className}`}>Desenvolvedor Front-end</p>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                
            </div>
        </section>
    );
}
 
export default Home;