import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './commons/Navbar';
import Footer from './commons/Footer';
import Home from './components/Home';
import About from "./components/About";
import Contact from "./components/Contact";
import VirtualTour from "./components/VirtualTour";
function App(){
    return( 
        <Router>
            <div className="Home">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/About" component={About} />
                    <Route exact path="/Contact" component={Contact} />
                    <Route exact path="/VirtualTour" component={VirtualTour} />
                    
                </Switch>
            </div>
            <Footer/>           
        </Router>
    );
}
export default App;