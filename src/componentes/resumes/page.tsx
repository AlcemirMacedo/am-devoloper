import './resume.css'
import Image from 'next/image'
import iconEdcation from './assets/education.png'
import iconExpirience from './assets/expirience.png'

export default function Resume(){
    return(
        <section className="resume-section">
            <a id='resume'></a>
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                        <h1>resume</h1>
                    <div className='bigTitle'>resume</div>
                </div>
                <section className='resume-topic'>
                    <div className='side1'>
                        <h1><span>
                            <Image 
                                src={iconExpirience}
                                alt="Expirience"
                                width={32}
                                height={28}
                            />
                            </span> Expirience</h1>
                        <ul>
                            <li>
                                <h1>Graftech Indústria Gráfica</h1>
                                <h2>2022 - 2023 | Manaus-AM</h2>
                                <p>Final Art and Graphic Designer</p>
                            </li>
                            <li>
                                <h1>SEJUSC (Secrertaria de Justiça e Cidadania)</h1>
                                <h2>2014 - 2015 | Manaus-AM</h2>
                                <p>Graphic Designer</p>
                            </li>
                            <li className='last-li'>
                                <h1>Graftech Indústria Gráfica</h1>
                                <h2>2014 - 2015 | Manaus-AM</h2>
                                <p>Final Art and Graphic Designer</p>
                            </li>
                        </ul>
                    </div>
                    <div className='side2'>
                        <h1><span>
                            <Image 
                                src={iconEdcation}
                                alt="Education"
                                width={32}
                                height={28}
                            />
                            </span>Education</h1>
                        <ul>
                            <li>
                                <h1>Senior Publicidade</h1>
                                <h2>2010 - 2012 | Manaus-AM</h2>
                                <p>Web Design and Art Assistant</p>
                            </li>
                            <li>
                                <h1>Brasil Note Bebidas</h1>
                                <h2>2006 - 2009 | Manaus-AM</h2>
                                <p>External Salesman</p>
                            </li>
                            <li className='last-li'>
                                <h1>Marinha do Brasil</h1>
                                <h2>2000 - 2005 | Manaus-AM</h2>
                                <p>Marinheiro QS</p>
                            </li>
                        </ul>
                    </div>

                </section>
            </div>
        </section>
    )
}