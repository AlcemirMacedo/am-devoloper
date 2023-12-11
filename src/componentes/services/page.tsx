import './service.css';
import Image from 'next/image';
import iconService from './assets/icones.png'
import iconVectoring from './assets/vectoring.png'


export default function Service(){
    return(
        <section className="service-section">
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                        <h1>Serviços</h1>
                    <div className='bigTitle'>Serviços</div>
                </div>

                <section className='box-service'>
                    <div className='box'>
                        <div className='box-vct'>
                           <Image
                            src={iconService}
                            alt="Landing Page"
                            width={45}
                            height={45}
                           />
                        </div>
                        <h2>Landig Pages & Web Sites Developement</h2>
                        <p>I can develop an elegant Landing Page for your business or even an institutional website with more complex functionalities.</p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'>
                            <Image
                                src={iconVectoring}
                                alt="Vectoring"
                                width={45}
                                height={45}
                            />
                        </div>
                        <h2>Vectoring</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'></div>
                        <h2>Sketches</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'></div>
                        <h2>Sketches</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'></div>
                        <h2>Sketches</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'></div>
                        <h2>Sketches</h2>
                        <p>Lorem ipsum dolor sittem ametamn elit, per sed do eiusmoad teimpor sittem elit inuning utsed sittem.</p>
                    </div>

                    
                </section>
            </div>
        </section>
    )
}