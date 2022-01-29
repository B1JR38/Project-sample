import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <div className="App">
          <Routes>
            <Route path='/signup' element={<Signup/>} />
            <Route path='/' element={<Login/>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
