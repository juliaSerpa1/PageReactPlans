import  React  from 'react';
import { ReactDOM } from 'react-dom'
import Header from './components/Header';
import Home from './components/Home'
import Features from './components/Features';
import './App.css'

const App = () => {
    return(
      <>
        <Header/>
        <Home/>
        <Features/>
      </>
    )
}


export default App;
