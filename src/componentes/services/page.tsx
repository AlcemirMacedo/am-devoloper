import './service.css';
import Image from 'next/image';
import iconService from './assets/icones.png'
import iconVectoring from './assets/vectoring.png'
import iconLight from './assets/light.png'
import iconPrint from './assets/printing.png'
import iconModeling from './assets/3d-modeling.png'
import iconVideo from './assets/iconvideo.png'


export default function Service(){
    return(
        <section className="service-section">
            <a id='service'></a>
            <div className="container">
                
                <div className="title">                    
                    <div className="line"></div>
                        <h1>Serviços</h1>
                    <div className='bigTitle'>Serviços</div>
                </div>

                <section className='box-service'>
                    <div className='box'>
                        <div className='box-vct'>
                           <Image
                            src={iconService}
                            alt="Landing Page"
                            width={45}
                            height={45}
                           />
                        </div>
                        <h2>Landing Pages e Web Sites</h2>
                        <p>Desenvolvimento de Landing Pages e Web Sites Institucionais</p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'>
                            <Image
                                src={iconVectoring}
                                alt="Vectoring"
                                width={45}
                                height={45}
                            />
                        </div>
                        <h2>Vetorização</h2>
                        <p>Vetorização de logo e desenvolvimento de marcas</p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'>
                            <Image
                                src={iconLight}
                                alt="Light"
                                width={45}
                                height={45}
                            />
                        </div>
                        <h2>Criação de Artes</h2>
                        <p>
                            Artes Gráficas para mídias sociais e campanhas publicitárias
                        </p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'>
                            <Image
                                src={iconPrint}
                                alt="Printing"
                                width={45}
                                height={45}
                            />
                        </div>
                        <h2>Impressos</h2>
                        <p>Cartões de Visita, Calendários, Agendas e Panfletos</p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'>
                            <Image
                                src={iconModeling}
                                alt="Printing"
                                width={45}
                                height={45}
                            />
                        </div>
                        <h2>Modelagem 3D</h2>
                        <p>Criação de estruturas 3D para palcos e projetos de arquitetura</p>
                    </div>
                    <div className='box'>
                        <div className='box-vct'>
                            <Image
                                src={iconVideo}
                                alt="Printing"
                                width={45}
                                height={35}
                            />
                        </div>
                        <h2>Edição de Vídeo</h2>
                        <p>Edição de vídeos para comerciais, stores e apresentações</p>
                    </div>

                    
                </section>
            </div>
        </section>
    )
}