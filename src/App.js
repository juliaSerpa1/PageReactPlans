import  React  from 'react';
import Header from './components/Header';
import Home from './components/Home'
import './App.css'
import backgroundImage from './assets/liquidabstract3D.png'

const App = () => {
    return(
      <>
        <div className='App cover-container'>
        <Header/>
          <div className='homeBackground'>
            <img src={backgroundImage}></img>
          </div>
          <Home />
        </div>  
      </>
    )
}


export default App;
