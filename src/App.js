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
import EditCourse from './components/admin/availablecourse/institutes/EditCourse';
import EnrollCourse from './components/user/Enrollcourse/course';
import UserLogin from './components/user/userlogin/login';
import Student from './components/admin/Students/Student';
import Editstudent from './components/admin/ViewAcademy/Enrolledcourse/editstudent';

import { Switch } from '@mui/material';

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
             <Route path='/admin/login' element={<Login/>} success={success} fail={fail} />
             <Route path='/user/institutepage' element={<InstitutePagee/>}  />
             <Route path='/user/enrolledcourse' element={<Enrolledcourse/>}  />
             <Route path='/user/availablecourse/:id' element={<Availablecourse/>}  />
             <Route path='/user/enrollcourse/:id' element={<EnrollCourse/>}/>
             <Route path='/user/login' element={<UserLogin/>} success={success} fail={fail} />
             {/* <Route path="/institutes" element={<Institute />} /> */}
            <Route path="/enrollCourse" element={<Course />} />
            <Route path="/addinstitute" element={<AddInstitute />} />
            <Route path="/editinstitute/:instituteId" element={<EditInstitute />} />
            <Route path="/institutepage" element={<InstitutePage/>} />
            <Route path="/availablecourse" element={<Availablecourses/>} />
            <Route path="/addcourse" element={<AddCourse/>}/>
            <Route path="/editcourse/:courseId" element={<EditCourse/>}/>
            <Route path="/student" element={<Student/>}/>
            <Route path="/editstudent/:studentId" element={<Editstudent/>}/>
           </Routes>
         </div>
       </div>
     </Router>
     <ToastContainer theme='colored'/>
   </>
  );
}

export default App;
