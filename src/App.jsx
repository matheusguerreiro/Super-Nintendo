// sass
import './App.sass';

// react-router-dom
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import Emulators from './pages/Emulators/Emulators';
import Roms from './pages/Roms/Roms';
import History from './pages/History/History';

// components
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Nav />
        <Main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/emulators' element={<Emulators />} />
            <Route path='/roms' element={<Roms />} />
            <Route path='/history' element={<History />} />
          </Routes>
        </Main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
