import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/user/signup/Signup';
import AdminSignup from './components/admin/signup/AdminSignup';
import Login from './components/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

function App() {
  const success = () => toast.success('Login Successful!!')
  const fail = (err) => toast.error(err)
  return (
    <>
    <Router>
      <div>
      <Navbar />
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/admin/signup' element={<AdminSignup/>} success={success} fail={fail} />
            <Route path='/user/signup' element={<Signup/>} success={success} fail={fail} />
            <Route path='/login' element={<Login/>} success={success} fail={fail} />
          </Routes>
        </div>
      </div>
    </Router>
    <ToastContainer theme='colored'/>
  </>
  );
}

export default App;
