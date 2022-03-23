import React from 'react';
import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

function App() {
    let { pathname } = useLocation();
    
    return (
        <div className="app">
            { pathname != "/" ? <Navigation/> : "" }
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/about" element={ <About/> }/>
                <Route path="/projects" element={ <Projects/> } />
                <Route path="/contact" element={ <Contact/> } />
            </Routes>
        </div>
    );
}

export default App;
