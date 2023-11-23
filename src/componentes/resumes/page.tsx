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
                                alt="Alcemir Macedo"
                                width={32}
                                height={28}
                            />
                            </span> Expirience</h1>
                        <ul>
                            <li>
                                <h1>Freelancer</h1>
                                <h2>Manaus-AM</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                            </li>
                            <li>
                                <h1>Freelancer</h1>
                                <h2>Manaus-AM</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                            </li>
                            <li className='last-li'>
                                <h1>Freelancer</h1>
                                <h2>Manaus-AM</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                            </li>
                        </ul>
                    </div>
                    <div className='side2'>
                        <h1><span>
                            <Image 
                                src={iconEdcation}
                                alt="Alcemir Macedo"
                                width={32}
                                height={28}
                            />
                            </span>Education</h1>
                        <ul>
                            <li>
                                <h1>Freelancer</h1>
                                <h2>Manaus-AM</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                            </li>
                            <li>
                                <h1>Freelancer</h1>
                                <h2>Manaus-AM</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                            </li>
                            <li className='last-li'>
                                <h1>Freelancer</h1>
                                <h2>Manaus-AM</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.</p>
                            </li>
                        </ul>
                    </div>

                </section>
            </div>
        </section>
    )
}