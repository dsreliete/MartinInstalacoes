import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Directory from './DirectoryComponent';
import ContactUs from './ContactUsComponent';

const MainPage = () => {
    return (
        <>
            <div id="home">
                <Home text="HOME"/>
            </div>
            <div id="directory">
                <Directory />
            </div>
            <div id="contact-us">
                <ContactUs />
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
            
            <Footer/> 
        </div>
    );
}

export default withRouter(Main);