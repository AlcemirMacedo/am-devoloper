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
                        <h1>Algumas de minhas skills são mencionadas nesta lista</h1>
                        
                        <p>É um tanto complicado pra eu ter que listar minhas habilidades de forma organizada e precisa, aliás, no mundo da informática, muito conhecimento nunca é o suficiente, mas eu sigo na luta aprendendo todos os dias.</p>
                        <p> Quando entrei no mundo da tecnologia meu objetivo sempre foi dominar as ferramentas de softwares, ter amplo conhecimento e estar sempre atualizado. Por esse motivo eu conheci uma variedade de softwares durante minha jornada de estudos e trabalhos.  As ferramentas de design gráfico foram as primeiras na minha longa lista de domínios, começando com um breve conhecimento de modelagem 3D com 3Dmax, depois passei para o Photoshop, Corel Draw, Illustrator e em pararelo a tudo isso aprendi muito sobre programação e também apromorei muito meus conhecimentos em lígua inglêsa.</p>
                        <p></p>
                        <br/>
                        
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