import React from 'react';
import { Route, Switch } from 'react-router-dom';
import OurCompany from './components/OurCompany/OurCompany';
import Services from './components/Services/Services';
import ContactUs from './components/ContactUs/ContactUs';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ArticlesPage from './components/Articles/Articles';

const Routes = () => (
    <Switch>
        <Route exact path='/'><Home /></Route>
        <Route exact path='/our-company'><OurCompany /></Route>
        <Route exact path='/services'><Services /></Route>
        <Route exact path='/contact-us'><ContactUs /></Route>
        <Route exact path='/articles'><ArticlesPage /></Route>
        <Route><NotFound /></Route>
    </Switch>
);

export default Routes;