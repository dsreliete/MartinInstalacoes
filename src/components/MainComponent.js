import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import AboutUs from './AboutusComponent';
import Portfolio from './PortfolioComponent';
import ParallaxBannerImage from './ParalaxBannerImage';
import Clients from './ClientsComponent';
import FloatNavBar from './FloatNavBarComponent';

const MainPage = () => {
    return (
        <>
            <div id="home">
                <Home/>
            </div>
            <div id="quemsomos">
                <AboutUs />
            </div>
            <div id="portfolio">
                <Portfolio />
            </div>
            <div id="clientes">
                <Clients />
            </div>
            <ParallaxBannerImage />
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
            <FloatNavBar />
        </div>
    );
}

export default withRouter(Main);