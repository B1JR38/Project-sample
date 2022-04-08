import React from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FaEdit , FaTrash } from 'react-icons/fa';
import './availablecourse.css';
import Button from "../../web components/buttons/Button";
import AddCourse from './institutes/AddCourse';
const Availablecourses = () => {
  
    return (
        <div>
            <div className='instpage'>
            <div className='search'>
                <input className='searchtext' type="text" placeholder='Search Here' ></input>
                <Button className='button' BtnName='Search' value='Search' />
            </div>
        {/* <div className='card'> */}
        <section className='container'>
        <div className='enrolledcoursecontent'>
            <h2>Course Name :B.E(ECE) <br></br>
            Course Duration:4 years<br></br>
            Available Timings: 9am to 4pm<br></br>
            Number of Students: 444 <br></br>
            </h2>
            <div className='button-alignment'>
            <a href='/editcourse' className='edit'><FaEdit/></a>
            <a href='#' className='edit'><FaTrash/></a>
            </div>
        </div>
        <div className='enrolledcoursecontent'>
        <h2>Course Name :B.E(ECE) <br></br>
            Course Duration:4 years<br></br>
            Available Timings: 9am to 4pm<br></br>
            Number of Students: 444 <br></br>
            </h2>
            <div className='button-alignment'>
            <Link to='/editcourse' className='edit'><FaEdit/></Link>
            <Link to='#' className='edit'><FaTrash/></Link>
        
            </div>
        </div>
        </section>
        <div className='button2'>
            <Link to="/addcourse">
            <Button className="link" BtnName={"Add"} id="f-addinst" />
            </Link>
        </div>
        </div>
      </div>
    )
  }
  
  export default Availablecourses