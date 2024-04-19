import devices from "../../../public/Devices.gif"
import Image from "next/image";
import { Exo_2 } from "next/font/google";

const exo_2 = Exo_2({subsets: ["latin"], })

const Home = () => {
    return (
        <section className="flex flex-col w-1/2 mt-9">
            <div className="flex flex-col gap-4 mb-6">
                <h2 className="text-3xl">Olá, eu sou o<br/><span className="font-semibold">João Maciel</span></h2>
                <p className={`text-2xl ${exo_2.className}`}>Desenvolvedor Front-end</p>
            </div>
            {/* <div>
                <Image src={devices} alt="imagem computador flutuando"  unoptimized/>
            </div> */}
            <div>
                <p className="text-md">
                    Sou um programador front-end apaixonado pela arte de criar e solucionar problemas através do código. Embora eu esteja no início da minha jornada profissional na área de tecnologia, trago comigo um conjunto robusto de habilidades técnicas e interpessoais das minhas experiencias profissionais antigas, que me permitem contribuir de maneira significativa para projetos e equipes,
                    faço muitos projetos usando React.js, Next.js e Node.js, sou muito apaixonado por tecnologia e programação, gosto de me manter atualizado e sou bastante proativo nos meus projetos, gosto muito de criar projetos novos usando coisas que aprendi.
                    Gosto bastante de psicologia e neurociências e gosto muito de ler livros 
                </p>
            </div>
        </section>
    );
}
 
export default Home;