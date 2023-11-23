import './reviews.css'
import Image from 'next/image'
import imgClient from './img/client1.png'

export default function Reviews(){
    return(
        <section className="reviews-section">
            <a id='reviews'></a>
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                        <h1>reviews</h1>
                    <div className='bigTitle'>reviews</div>
                </div>

                <section className='box-reviews'>
                    <div className='box'>
                        <div className='box-top'>
                            <p>“Lorem ipsum dolor sittem metamngcing elit, per sed do eiusmo teimpor sittem elit inuning utsed sittem do eiusmod.”</p>
                            
                        </div>
                        <span></span>
                        <div className='img-rvw'>
                            <Image
                                src={imgClient}
                                alt='client'
                                width={90}
                                height={90}
                            />
                        </div>
                        <h2>Richard Miles</h2>
                        <p>Chaiman</p>
                    </div>
                    <div className='box'>
                        <div className='box-top'>
                            <p>“Lorem ipsum dolor sittem metamngcing elit, per sed do eiusmo teimpor sittem elit inuning utsed sittem do eiusmod.”</p>
                            
                        </div>
                        <span></span>
                        <div className='img-rvw'>
                            <Image
                                src={imgClient}
                                alt='client'
                                width={90}
                                height={90}
                            />
                        </div>
                        <h2>Richard Miles</h2>
                        <p>Chaiman</p>
                    </div>
                    <div className='box'>                       
                        <div className='box-top'>
                            <p>“Lorem ipsum dolor sittem metamngcing elit, per sed do eiusmo teimpor sittem elit inuning utsed sittem do eiusmod.”</p>
                            
                        </div>
                        <span></span>
                        <div className='img-rvw'>
                            <Image
                                src={imgClient}
                                alt='client'
                                width={90}
                                height={90}
                            />
                        </div>
                        <h2>Richard Miles</h2>
                        <p>Chaiman</p>                    
                    </div>
                    
                    
                </section>
            </div>
        </section>
    )
}