
import './about.css'
import Link from 'next/link'

export default function About(){
    return(
        <section className="about-section"> 
        <a id="about"></a>
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                    <h1>about me</h1>
                    <div className='bigTitle'>about me</div>
                    
                </div>

                <div className="infos">    
                    <div className="hi">
                        <h1>Hello! I'm Alcemir Macedo</h1>
                        <h2>Web Developer & Graphic Design Freelancer</h2>
                        <p>I am a Graphic Designer with a strong focus on Web Developer. With more then 10 years of experience in arts creation, prints, brands, visual communication and so much more. I am improving more and more about Web Programming, UX and UI Design, Front End, Back End</p>
                    </div>                
                    <div className="infos-desc">
                        <ul>
                            <li>Birthday: Jan 08, 1981</li>
                            <li>Phone: .55 92 98430-4514</li>
                            <li>Email: alcemirmacedo@gmail.com</li>
                            <li>From: Manaus, AM, Brazil</li>
                            <li>Languages: Portuguese & English</li>
                            <li>Freelancer:  Avaliable</li>                           
                        </ul>
                        <Link href={'https://drive.google.com/file/d/1o09UEJSmWe9xTiY40KV4HNIzN_4jA-i6/view?usp=drive_link'} target='blank'><button className='botao'>Dowload CV</button></Link>
                    </div>
                </div>
            </div>          
            
        </section>
    )
}