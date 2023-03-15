import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

//pages
import Home from './pages/Home/Home';
import Photos from './pages/Photos/Photos';

//components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/photos' element={<Photos />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
