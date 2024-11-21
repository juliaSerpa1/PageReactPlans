import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Solutions from './pages/Solutions';
import Plans from './pages/Plans';
import About from './pages/About';
import './App.css';

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/solutions' element={<Solutions />} />
                <Route path='/plans' element={<Plans />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </Router>
    )
}

export default App;