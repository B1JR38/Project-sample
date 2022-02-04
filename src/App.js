import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <div>
      <Navbar />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/signup' element={<Signup/>} />
            <Route path='/login' element={<Login/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
