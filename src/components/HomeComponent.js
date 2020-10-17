import React  from 'react';

import CaroulselImage from './CarouselImage';

const items = [
    {
        src: '/assets/images/cozinha.png',
        message: "COZINHA SOB MEDIDA",
        key: '1'
    },
    {
      src: '/assets/images/saladeestar.png',
  	message: "SALA DE ESTAR",
  	key: '2'
    },
    {
        src: '/assets/images/dormitorios.png',
        message: "DORMITÓRIO",
        key: '3'
    },
    {
        src: '/assets/images/banheiro.png',
        message: "BANHEIRO",
        key: '4'
    },
    {
        src: '/assets/images/espacocomercial.png',
        message: "SOLUÇÕES COMERCIAIS",
        key: '5'
    },
    {
        src: '/assets/images/espacocustomizado.png',
        message: "ESPAÇOS CUSTOMIZADOS",
        key: '6'
    }
];

function Home(props) {
    return(
        <CaroulselImage items={items} />
    );
}

export default Home;