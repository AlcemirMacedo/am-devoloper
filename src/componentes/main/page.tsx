import Link from 'next/link'

import './banner.css'
import Image from 'next/image'
import imgGit from './assets/github.png'
import imgLinkedin from './assets/linkedin.png'
import imgInstagram from './assets/instagram.png'


export default function Banner(){

    return(
        <main>
            <a id='home'></a>
           <div className='mask'>
            <h1 className='h1-fade'>ALCEMIR<br/>MACEDO</h1>
                <div className='container-main'>
                    <div className="banner">
                        <h2>Olá, sou</h2>
                        <h1>alcemir macedo</h1>
                        <span>Desenvolvedor Web e de Design Gráfico Freelancer</span>
                        <Link href={'https://wa.me/qr/IIS2RHRNJC6YN1'} target='blank'><button className='botao'>Contrate-me</button></Link>
                    </div>
                    <div className='social-nav'>
                        <div className='barra-vert'>
                            <Link href={'https://github.com/AlcemirMacedo'} target='_blank'>
                                <div className='circ'>
                                    <Image 
                                        src={imgGit}
                                        alt="Github"
                                        width={29}
                                        height={29}
                                    />
                                </div>
                            </Link>
                            <Link href={'https://br.linkedin.com/in/alcemir-alcemir-615496110'} target='_blank'>
                                <div className='circ'>
                                    <Image 
                                        src={imgLinkedin}
                                        alt="Linkedin"
                                        width={29}
                                        height={29}
                                    />
                                </div>
                            </Link>
                            <Link href={'https://www.instagram.com/alcemirmacedo34/'} target='_blank'>
                                <div className='circ'>
                                    <Image 
                                        src={imgInstagram}
                                        alt="Instagram"
                                        width={29}
                                        height={29}
                                    />
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                </div>
           </div>
        </main>
    )
}