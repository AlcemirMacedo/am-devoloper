
import Image from 'next/image'
import profilePic from './img/logo.png'
import Link from 'next/link'
import './header.css'


export default function Header(){


    return( 
      
        <header>
            <div className='container'>
                <div className="logo">
                    <Link href="/">
                        <Image className='img-logo'
                            src={profilePic}
                            alt="Alcemir Macedo"
                        />
                    </Link>
                    
                </div>
                <nav className='nav-list'>
                    <div id='menu-mobile'>
                        <label htmlFor='toggle'>
                            <div className='line1'></div>
                            <div className='line1'></div>
                            <div className='line1'></div>
                        </label>
                    </div>
                    <input type="checkbox" id="toggle"></input>
                    <ul id='exibir'>
                        <li><a href='#home'>home</a></li>
                        <li><a href='#about'>about me</a></li>
                        <li><a href='#service'>services</a></li>
                        <li><a href='#skills'>skills</a></li>
                        <li><a href='#resume'>resume</a></li>
                        <li><a href='#portfolio'>portfolio</a></li>
                        <li><a href='#reviews'>reviews</a></li>
                        <li><a href='#blog'>videos</a></li>
                        <li><a href='#contact'>contact</a></li>
                    </ul>
                        
                    
                </nav>
                <div className='cellPhone'>
                    <span>+55 92 98430-4514</span>
                </div>
            </div>
            

        </header>
    )
}