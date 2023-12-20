import './skills.css'
export default function Skills(){
    return(
        <section className="skills-section">
            <a id='skills'></a>
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                        <h1>skills</h1>
                    <div className='bigTitle'>skills</div>
                </div>
                <section className='skills-topic'>
                    <div className='box box1'>
                        <h1>Some of my skills are mentioned in this list</h1>
                        
                        <p>When I entered the world of technology, my goal was always to master the tools, have extensive knowledge of software and always be up to date. Graphic design tools were the first in my long list of domains, starting with a brief knowledge of 3D modeling with 3Dmax, then I put it aside because it is a paid program and difficult to maintain, so I moved on to Photoshop and I delved deeper into its tools, but in Photoshop, a lot of knowledge is never enough.</p><br/>
                        <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                    </div>
                    <div className='box box2'>
                        <h2>GRAPHIC DESIGN</h2>                        
                        <div className='skill'>
                            <span className='skill-name'>Corel Draw</span>
                            <span className='line1 corel'></span>
                        </div>
                        
                        <div className='skill'>
                            <span className='skill-name' translate='no'>Adobe Illustrator</span>
                            <span className='line1 illustrator'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name' translate='no'>Adobe Photoshop</span>
                            <span className='line1 photoshop'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name' translate='no'>Figma</span>
                            <span className='line1 figma'></span>
                        </div>
                        <div className='skill last'>
                            <span className='skill-name' translate='no'>Blender</span>
                            <span className='line1 blender'></span>
                        </div>
                        <h2>PROGRAMMING - FRONT END DEVELOPER</h2>
                        <div className='skill'>
                            <span className='skill-name'>Javascript</span>
                            <span className='line1 javascript'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name'>HTML</span>
                            <span className='line1 html'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name'>CSS</span>
                            <span className='line1 css'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name' translate='no'>ReactJS</span>
                            <span className='line1 react'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name' translate='no'>NextJS</span>
                            <span className='line1 next'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name' translate='no'>MySql</span>
                            <span className='line1 mysql'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name' translate='no'>Firebase</span>
                            <span className='line1 firebase'></span>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}