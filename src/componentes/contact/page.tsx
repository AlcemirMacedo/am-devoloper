import './contact.css'
import { FormEvent } from 'react'
import Image from 'next/image'
import phoneContact from './assets/phone.png'
import emailContact from './assets/email.png'
import locationContact from './assets/location.png'
import imgGit from './assets/github.png'
import imgLinkedin from './assets/linkedin.png'
import imgInstagram from './assets/instagram.png'


export default function Contact(){
    return(
        <section className="contact-section">
            
            <div className="container">
                <div className="title">
                    <a id='contact'></a>
                    <div className="line"></div>
                        <h1>contact me</h1>
                    <div className='bigTitle'>contact me</div>
                </div>
                <section className='contact-topic'>
                   
                    <div className='side2'>
                       <h1>Contact Info</h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla tincidunt id faucibus sed suscipit feugiat.</p>
                       <section>
                        <div className='icon'>
                            <Image
                                src={emailContact}
                                alt='email'
                                width={19}
                                height={15}
                            />
                        </div>
                        <div>
                            <h2>Email</h2>
                            <p>alcemirmacedo@gmail.com</p>
                        </div>    
                       </section>                       
                       <section>
                        <div className='icon'>
                            <Image
                                src={phoneContact}
                                alt='phobe'
                                width={15}
                                height={21}
                            />
                        </div>
                        <div>
                            <h2>Cell Phone</h2>
                            <p>+ 55 92 98430-4514</p>
                        </div>    
                       </section>
                       <section>
                        <div className='icon'>
                            <Image
                                src={locationContact}
                                alt='email'
                                width={15}
                                height={21}
                            />
                        </div>
                        <div>
                            <h2>Adress</h2>
                            <p>Manaus-AM, Brazil</p>
                        </div>    
                       </section>
                       <p>Visite my social profile and get connected</p>
                       <div className='social-nav-hori'>
                            <div className='barra-hori'>
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

                </section>
            </div>
        </section>
    )
}