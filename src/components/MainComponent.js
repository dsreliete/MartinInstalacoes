import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import Project from './ProjectComponent';
import AnimatedBannerImage from './AnimatedBannerImage';

const MainPage = () => {
    return (
        <>
            <div id="home">
                <Home text="HOME"/>
            </div>
            <div id="directory">
                <Directory />
            </div>
            <AnimatedBannerImage />
            <div id="projetos">
                <Project />
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