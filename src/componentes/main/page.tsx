import './banner.css'
import Image from 'next/image'
import imgGit from './assets/github.png'
import imgLinkedin from './assets/linkedin.png'
import imgInstagram from './assets/instagram.png'



export default function Banner(){

    return(
        <main>
           <div className='mask'>
            <h1 className='h1-fade'>ALCEMIR<br/>MACEDO</h1>
                <div className='container-main'>
                    <div className="banner">
                        <h2>Hello, i m</h2>
                        <h1>alcemir macedo</h1>
                        <span>Web Developer & Graphic Design Freelancer</span>
                        <button className='botao'>Hire Me</button>
                    </div>
                    <div className='social-nav'>
                        <div className='barra-vert'>
                            <div className='circ'>
                                <Image 
                                    src={imgGit}
                                    alt="Github"
                                    width={29}
                                    height={29}
                                />
                            </div>
                            <div className='circ'>
                                <Image 
                                    src={imgLinkedin}
                                    alt="Linkedin"
                                    width={29}
                                    height={29}
                                />
                            </div>
                            <div className='circ'>
                                <Image 
                                    src={imgInstagram}
                                    alt="Instagram"
                                    width={29}
                                    height={29}
                                />
                            </div>
                        </div>
                    </div>
                    
                </div>
           </div>
        </main>
    )
}