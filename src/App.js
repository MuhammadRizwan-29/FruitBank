import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home />} />
        <Route path='/home' element = {<Home />} />
        <Route path='*' element = {<div><h1>Error - 404</h1></div>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
