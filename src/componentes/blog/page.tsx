import './blog.css'
import Image from 'next/image'
import imgBlog1 from './img/blog1.jpg'
import imgBlog2 from './img/blog2.jpg'
import imgBlog3 from './img/blog3.jpg'


export default function Blog(){
    return(
        <section className="blog-section">
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                        <h1>blog</h1>
                    <div className='bigTitle'>last news</div>
                </div>

                <section className='box-blog'>
                    <div className='box'>
                        <Image
                            src={imgBlog1}
                            alt='imgBlog1'
                            width={350}
                            height={209}
                        />
                        <p>By:Admin | 10/10/2023</p>
                        <span>What are the latest trends in Graphic
design according to you?</span>
                    </div>
                    <div className='box'>
                        <Image
                            src={imgBlog2}
                            alt='imgBlog2'
                            width={350}
                            height={209}
                        />
                        <p>By:Admin | 10/10/2023</p>
                        <span>What are the latest trends in Graphic
design according to you?</span>
                    </div>
                    <div className='box'>
                        <Image
                            src={imgBlog3}
                            alt='imgBlog3'
                            width={330}
                            height={209}
                        />
                        <p>By:Admin | 10/10/2023</p>
                        <span>What are the latest trends in Graphic
design according to you?</span>
                    </div>
                    
                </section>
            </div>
        </section>
    )
}