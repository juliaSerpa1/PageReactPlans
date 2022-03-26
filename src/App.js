import  React  from 'react';
import { ReactDOM } from 'react-dom'
import Header from './components/Header';
import Home from './components/Home'
import Features from './components/Features';
import Princing from './components/Pricing';
import About from './components/About'
import Footer from './components/Footer';
import './App.css'



const App = () => {
    return(
      <>
        <Header/>
        <Home/>
        <Features/>
        <Princing/>
        <About/>
        <Footer/>
      </>
    )
}


export default App;
