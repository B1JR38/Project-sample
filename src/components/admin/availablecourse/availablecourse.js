import React ,{useState,useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { FaEdit , FaTrash } from 'react-icons/fa';
import './availablecourse.css';
import Button from "../../web components/buttons/Button";
import AddCourse from './institutes/AddCourse';
import CourseService from '../services/CourseService';
const Availablecourses = () => {
    const [course,setcourse]=useState([]);
    useEffect(()=>{
        CourseService.getCourse().then((res)=> setcourse(res.data));
    },[]);
    const history=useNavigate();
    function editcourse(id){
        console.log(id);
        history('/editcourse/'+id);
    }
    const deletecourse=(id)=>{
        CourseService.deleteCourse(id).then(res=>{
            setcourse(course.filter(response=>response.courseId!==id));
        });
        alert('course Deleted');
    }
    return (
        <div>
            <div className='instpage'>
            <div className='search'>
                <input className='searchtext' type="text" placeholder='Search Here' ></input>
                <Button className='button' BtnName='Search' value='Search' />
            </div>
        {/* <div className='card'> */}
        <section className='container'>
            {course.map((item)=>{
                return(
                    <div className='enrolledcoursecontent' key={item}>
                        <h2>Course Name :{item.courseName} <br></br>
                        Course Duration:{item.courseduration}<br></br>
                        Available Timings:{item.coursetiming} <br></br>
                        Number of Students: {item.studentNumber} <br></br>
                        </h2>
                        <div className='button-alignment'>
                            {/* <Link to={'/editcourse/'+item.courseId} className='edit' ><FaEdit/></Link> */}
                        <FaEdit onClick={()=>editcourse(item.courseId)} style={{cursor:'pointer'}}/>
                        <FaTrash onClick={()=> deletecourse(item.courseId)} style={{cursor:'pointer'}}/>
                        </div>
                    </div>
                )
            })}
        
        {/* <div className='enrolledcoursecontent'>
        <h2>Course Name :B.E(ECE) <br></br>
            Course Duration:4 years<br></br>
            Available Timings: 9am to 4pm<br></br>
            Number of Students: 444 <br></br>
            </h2>
            <div className='button-alignment'>
            <Link to='/editcourse' className='edit'><FaEdit/></Link>
            <Link to='#' className='edit'><FaTrash/></Link>
        
            </div>
        </div> */}
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