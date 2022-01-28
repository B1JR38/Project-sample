//import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/signup/Signup';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <Signup />
      </div>
      <div className="footer-pos">
       <Footer />
      </div>
    </div>
  );
}

export default App;
