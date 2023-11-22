import './skills.css'
export default function Skills(){
    return(
        <section className="skills-section">
            <div className="container">
                <div className="title">                    
                    <div className="line"></div>
                        <h1>my skills</h1>
                    <div className='bigTitle'>my skills</div>
                </div>
                <section className='skills-topic'>
                    <div className='box box1'>
                        <h1>All the skills that I have in that field of work are mentioned.</h1>
                        
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores.</p><br/>
                        <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                    </div>
                    <div className='box box2'>
                        <h2>GRAPHIC DESIGN</h2>                        
                        <div className='skill'>
                            <span className='skill-name'>Corel Draw</span>
                            <span className='line1 corel'></span>
                        </div>
                        
                        <div className='skill'>
                            <span className='skill-name'>Adobe Illustrator</span>
                            <span className='line1 illustrator'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name'>Adobe Photoshop</span>
                            <span className='line1 photoshop'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name'>Figma</span>
                            <span className='line1 figma'></span>
                        </div>
                        <div className='skill last'>
                            <span className='skill-name'>Blender</span>
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
                            <span className='skill-name'>ReactJS</span>
                            <span className='line1 react'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name'>NextJS</span>
                            <span className='line1 next'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name'>MySql</span>
                            <span className='line1 mysql'></span>
                        </div>
                        <div className='skill'>
                            <span className='skill-name'>Firebase</span>
                            <span className='line1 firebase'></span>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}