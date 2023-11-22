
import './about.css'

export default function About(){
    return(
        <section className="about-section"> 
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                    <h1>About me</h1>
                    <div className='bigTitle'>About me</div>
                </div>

                <div className="infos">
                    <div className="hi">
                        <h1>Hi There! I am Alcemir Macedo</h1>
                        <h2>Programmer and Graphic Design</h2>
                        <p>I am a Graphic Designer with a strong focus on Web Developer. With more then 10 years of experience in arts creation, prints, brands, visual communication and so much more. I am improving more and more about web programming, UX and UI design, front end, back end</p>
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
                        <button className='botao'>Dowload CV</button>
                    </div>
                </div>
            </div>          
            
        </section>
    )
}