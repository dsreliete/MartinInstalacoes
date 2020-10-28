import React  from 'react';


function Aboutus() {
    return(
        <div className="aboutus-container">
            <div className="row m-5">
                <div className="col-6 text">
                    <p>A <span style={{color: '#795548'}}> MARTIN</span> <spam style={{color: '#009688'}}>INSTALAÇÕES</spam> produz móveis sob medida com acabamento em alto padrão e excelência no atendimento.</p>
                    <p>Contamos com mais de 15 anos de experiência realizando variados projetos com soluções customizadas para atender com beleza e sofisticação nossos clientes.</p>
                    <p>Possuímos know-how para para execução de projetos residenciais e comerciais com requinte e atenção aos detalhes que garante satisfação de nossos clientes.</p>
                    <p>Trabalhamos com matéria-prima de alta qualidade o que propicia um acabamento de alto padrão em todos os produtos e serviços oferecidos.</p>
                    <p>Oferecemos ainda projetos customizados para melhor atender às necessidades dos nossos clientes.</p>
                    <p>Visite nossa galeria de fotos e nossas redes sociais para melhor conhecer nosso trabalho.</p>
                </div>
                <div className="col-6 align-self-center">
                    <div className="row justify-content-center">
                        <div className="photos">
                            <img src={'/assets/images/about/saladejogo.JPG'} height='190' width='140' alt=''></img>
                        </div>
                        <div className="photos">
                            <img src={'/assets/images/about/barzinho.JPG'} height='190' width='140' alt=''></img>
                        </div>
                        <div className="photos">
                            <img src={'/assets/images/about/banheiro2.JPG'} height='190' width='140' alt=''></img>
                        </div>
                    </div>
                    <div className=" row justify-content-center">
                        <div className="photos">
                            <img src={'/assets/images/about/saladeestar2.JPG'} height='190' width='140' alt=''></img>
                        </div>
                        <div className="photos">
                            <img src={'/assets/images/about/cozinha2.JPG'} height='190' width='140' alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Aboutus;