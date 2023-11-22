
import Image from 'next/image'
import profilePic from './img/logo.png'

import './header.css'

export default function Header(){
    return(
        <header>
            <div className='container'>
                <div className="logo">
                    <Image 
                        src={profilePic}
                        alt="Alcemir Macedo"
                        width={203}
                        height={60}
                    />
                </div>
                <nav>
                    <ul>
                        <li>home</li>
                        <li>about me</li>
                        <li>resume</li>
                        <li>porfolio</li>
                        <li>blog</li>
                        <li>contact</li>
                    </ul>
                </nav>
                <div className='cellPhone'>
                    <span>+55 92 98430-4514</span>
                </div>
            </div>

        </header>
    )
}