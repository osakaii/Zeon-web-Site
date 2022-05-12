import './App.css';
import './util.css'
import Header from './Common/Header/Header';
import Footer from './Common/Footer/Footer';
import { Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path = '/' element = { <MainPage/> }/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
