import devices from "../../../public/Devices.gif"
import Image from "next/image";

const Home = () => {
    return (
        <section className="flex">
            <div>
                <h2>Olá, eu sou João Victor, Desenvolvedor Front-end, com a paixão por desenvolvimento de aplicações web e construção de API's</h2>
            </div>
            <div>
                <Image src={devices} alt="imagem computador flutuando"  unoptimized/>
            </div>
        </section>
    );
}
 
export default Home;