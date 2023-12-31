
import './about.css'
import Link from 'next/link'

export default function About(){
    return(
        <section className="about-section"> 
        <a id="about"></a>
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                    <h1>sobre mim</h1>
                    <div className='bigTitle'>Sobre mim</div>
                    
                </div>

                <div className="infos">    
                    <div className="hi">
                        <h1>Olá! me chamo Alcemir</h1>
                        <h2>Web Developer & Graphic Design Freelancer</h2>
                        <p>Sou Designer Gráfico com forte foco em  Desenolvimento  Web Front-end. Tenho mais de 10 anos de experiência em criação de artes, estampas, marcas, comunicação visual e linguagens de programação. Estou aprimorando cada vez mais em Programação Web, UX e UI Design, Front End e Back End</p>
                    </div>                
                    <div className="infos-desc">
                        <ul>
                            <li>Data de nascimento: Jan/1981</li>
                            <li>Celular: .55 92 98430-4514</li>
                            <li>Email: alcemirmacedo@gmail.com</li>
                            <li>De: Manaus, AM, Brazil</li>
                            <li>Idiomas: Português e Inglês</li>
                            <li>Freelancer:  Disponível</li>                           
                        </ul>
                        <Link href={'https://drive.google.com/file/d/1o09UEJSmWe9xTiY40KV4HNIzN_4jA-i6/view?usp=drive_link'} target='blank'><button className='botao'>Baixar Currículo</button></Link>
                    </div>
                </div>
            </div>          
            
        </section>
    )
}