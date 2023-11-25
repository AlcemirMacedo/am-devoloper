
import Image from 'next/image'
import profilePic from './img/logo.png'

import './header.css'

export default function Header(){
    return(
        <header>
            <div className='container'>
                <div className="logo">
                    <Image className='img-logo'
                        src={profilePic}
                        alt="Alcemir Macedo"
                    />
                </div>
                <nav className='nav-list'>
                    <div className='menu-mobile'>
                        <div className='line1'></div>
                        <div className='line1'></div>
                        <div className='line1'></div>
                    </div>
                    <ul>
                        <li><a href='#home'>home</a></li>
                        <li><a href='#about'>about me</a></li>
                        <li><a href='#resume'>resume</a></li>
                        <li><a href='#portfolio'>portfolio</a></li>
                        <li><a href='#reviews'>reviews</a></li>
                        <li><a href='#blog'>blog</a></li>
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