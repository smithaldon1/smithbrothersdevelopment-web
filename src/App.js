import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation/Navigation';
import Routes from './Routes';

const App = () => (
    <>
        <Navigation className="App container"/>
        <Routes />
    </>
);

export default App;