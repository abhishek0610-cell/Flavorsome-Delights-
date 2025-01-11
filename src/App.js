import './App.css';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import Contact from './components/contact';
import Home from './components/Home';

import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <Router>

    <div className="App"  >
    <Navbar/>
    <Routes>
      <Route path='/' element={ <Home/>}></Route>
      <Route path='/Recipe' element={ <Recipe/>}></Route>
      <Route path='/contact' element={ <Contact/>}></Route>
     
    </Routes>
    </div>
    </Router>

  );
}

export default App;
