import React  from 'react';
import CustomCarousel from './CustomCarouselComponent';

const items = [
    {
        src: '/assets/images/home/cozinha.png',
        message: "COZINHA SOB MEDIDA",
        key: '1'
    },
    {
        src: '/assets/images/home/saladeestar.png',
  	    message: "SALA DE ESTAR",
  	    key: '2'
    },
    {
        src: '/assets/images/home/dormitorios.png',
        message: "DORMITÓRIO",
        key: '3'
    },
    {
        src: '/assets/images/home/banheiro.png',
        message: "BANHEIRO",
        key: '4'
    },
    {
        src: '/assets/images/home/espacocomercial.png',
        message: "SOLUÇÕES COMERCIAIS",
        key: '5'
    },
    {
        src: '/assets/images/home/espacocustomizado.png',
        message: "ESPAÇOS CUSTOMIZADOS",
        key: '6'
    }
];

function Home() {
    return(
        <CustomCarousel items={items} />
    );
}

export default Home;