import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutUs from './AboutusComponent';
import Portfolio from './PortfolioComponent';
import AnimatedBannerImage from './AnimatedBannerImage';

const MainPage = () => {
    return (
        <>
            <div id="home">
                <Home text="HOME"/>
            </div>
            <div id="quemsomos">
                <AboutUs />
            </div>
            <AnimatedBannerImage />
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="clientes">
                <Home text="Clientes"/>
            </div>
        </>
    );
}

function Main() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={MainPage} />
            </Switch>
            <div id="contato">
                <Footer/>
            </div> 
        </div>
    );
}

export default withRouter(Main);