import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import Project from './ProjectComponent';

const MainPage = () => {
    return (
        <>
            <div id="home">
                <Home text="HOME"/>
            </div>
            <div id="directory">
                <Directory />
            </div>
            <div id="project">
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
            <div id="contact-us">
                <Footer/>
            </div> 
        </div>
    );
}

export default withRouter(Main);