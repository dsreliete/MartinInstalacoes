import React  from 'react';

import CaroulselImage from './CarouselImage';

const items = [
    {
        src: '/assets/images/cozinha.JPG',
        message: "COZINHA SOB MEDIDA",
        key: '1'
    },
    {
      src: '/assets/images/saladeestar.JPG',
  	message: "SALA DE ESTAR",
  	key: '2'
    },
    {
        src: '/assets/images/dormitorios.JPG',
        message: "DORMITÓRIO",
        key: '3'
    },
    {
        src: '/assets/images/banheiro.JPG',
        message: "BANHEIRO",
        key: '4'
    },
    {
        src: '/assets/images/espacocomercial.JPG',
        message: "SOLUÇÕES COMERCIAIS",
        key: '5'
    },
    {
        src: '/assets/images/espacocustomizado.JPG',
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