import './contact.css'
import Image from 'next/image'


export default function Contact(){
    return(
        <section className="contact-section">
            
            <div className="container">
                <div className="title">                   <a id='contact'></a>
                    <div className="line"></div>
                        <h1>contact me</h1>
                    <div className='bigTitle'>contact me</div>
                </div>
                <section className='contact-topic'>
                    <div className='side1'>
                        <form>
                            <h1>Just say hello!</h1>
                            <input type='text' value="Your Name" />
                            <input type='email' value="Your Email" />
                            <input type='text' value="Subject" />
                            <textarea value="Messenger"></textarea>
                            <button className='botao'>Send Messenger</button>
                        </form>
                    </div>
                    <div className='side2'>
                       <h1>Contact Info</h1>
                    </div>

                </section>
            </div>
        </section>
    )
}