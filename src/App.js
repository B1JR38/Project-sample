import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/user/signup/Signup';
import AdminSignup from './components/admin/signup/AdminSignup';
import Login from './components/login/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// test import Institute from './components/web components/institute/Institute';
// test import InstituteList from './components/web components/instituteList/InstituteList';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import InstitutePagee from './components/user/institutee/institutee';
import InstitutePage from '../src/components/admin/institutee/institutee';
import Enrolledcourse from '../src/components/user/enrolledcourse/enrolledCourse';
import Institute from "./components/admin/ViewAcademy/institutes/institute";
import Course from "./components/admin/ViewAcademy/Enrolledcourse/course";
import AddInstitute from "./components/admin/ViewAcademy/institutes/AddInstitute";
import EditInstitute from "./components/admin/ViewAcademy/institutes/EditInstitute"; 
import Availablecourse from "../src/components/user/availablecourse/availablecourse";
import Availablecourses from "./components/admin/availablecourse/availablecourse";
import AddCourse from './components/admin/availablecourse/institutes/AddCourse';
import EditCourse from './components/admin/availablecourse/institutes/EditCourse
import { Switch } from '@mui/material';
import Enrolledcourse from './components/user/enrolledcourse/enrolledCourse'; 
//import useToken from './components/web components/token/useToken';
//import Course from './components/admin/ViewAcademy/Enrolledcourse/Course'
import Institute from './components/admin/ViewAcademy/institutes/Institute';

function App() {
  const success = () => toast.success('Login Successful!!')
  const fail = (err) => toast.error(err)

/*
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }
*/
  return (
     <>
     <Router>
       <div>
       <Navbar />
         <div className="App">
           {/* <Switch> */}
           <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/admin/signup' element={<AdminSignup/>} success={success} fail={fail} />
             <Route path='/user/signup' element={<Signup/>} success={success} fail={fail} />
             <Route path='/login' element={<Login/>} success={success} fail={fail} />
             <Route path='/user/institutepage' element={<InstitutePagee/>}  />
             <Route path='/user/enrolledcourse' element={<Enrolledcourse/>}  />
             <Route path='/user/availablecourse' element={<Availablecourse/>}  />
             <Route path="/institutes" element={<Institute />} />
            <Route path="/enrollCourse" element={<Course />} />
            <Route path="/addInstitute" element={<AddInstitute />} />
            <Route path="/editInstitute" element={<EditInstitute />} />
            <Route path="/institutepage" element={<InstitutePage/>} />
            <Route path="/availablecourse" element={<Availablecourses/>} />
            <Route path="/addcourse" element={<AddCourse/>}/>
            <Route path="/editcourse" element={<EditCourse/>}/>
             <Route path='/admin/institute' element={<Institute />}  />

           </Routes>
           {/* </Switch> */}
         </div>
       </div>
     </Router>
     <ToastContainer theme='colored'/>
   </>
  );
}

export default App;
