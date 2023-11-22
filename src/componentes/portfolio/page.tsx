import './portfolio.css'
import Image from 'next/image'
import imgPort1 from './img/portfolio1.jpg'
import imgPort2 from './img/portfolio2_lg.jpg'
import imgPort3 from './img/portfolio3_lg.jpg'
import imgPort4 from './img/portfolio4_lg.jpg'
import imgPort5 from './img/portfolio5_lg.jpg'
import imgPort6 from './img/portfolio6_lg.jpg'


export default function Portfolio(){
    return(
        <section className="portfolio-section">
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                        <h1>portfolio</h1>
                    <div className='bigTitle'>portfolio</div>
                </div>

                <section className='box-portfolio'>
                    <div className='box'>
                        <div className='mask-port'>
                            <h2>PRODUCT DESIGN</h2>
                            <span>Design / Marketing</span>
                        </div>
                       <Image
                            src={imgPort1}
                            alt='portfolio1'
                            width={320}
                            height={283}
                        />
                    </div>
                    <div className='box'>
                        <div className='mask-port'>
                            <h2>PRODUCT DESIGN</h2>
                            <span>Design / Marketing</span>
                        </div>
                        <Image
                            src={imgPort2}
                            alt='portfolio1'
                            width={320}
                            height={283}
                        />
                    </div>
                    <div className='box'>
                        <div className='mask-port'>
                            <h2>PRODUCT DESIGN</h2>
                            <span>Design / Marketing</span>
                        </div>
                        <Image
                            src={imgPort3}
                            alt='portfolio1'
                            width={320}
                            height={283}
                        />
                    </div>
                    <div className='box'>
                        <div className='mask-port'>
                            <h2>PRODUCT DESIGN</h2>
                            <span>Design / Marketing</span>
                        </div>
                        <Image
                            src={imgPort4}
                            alt='portfolio1'
                            width={320}
                            height={283}
                        />
                    </div>
                    <div className='box'>
                        <div className='mask-port'>
                            <h2>PRODUCT DESIGN</h2>
                            <span>Design / Marketing</span>
                        </div>
                        <Image
                            src={imgPort5}
                            alt='portfolio1'
                            width={320}
                            height={283}
                        />
                    </div>
                    <div className='box'>
                        <div className='mask-port'>
                            <h2>PRODUCT DESIGN</h2>
                            <span>Design / Marketing</span>
                        </div>
                        <Image
                            src={imgPort6}
                            alt='portfolio1'
                            width={320}
                            height={283}
                        />
                    </div>

                    
                </section>
            </div>
        </section>
    )
}