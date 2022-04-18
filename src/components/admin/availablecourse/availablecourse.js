import React ,{useState,useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { FaEdit , FaTrash } from 'react-icons/fa';
import './availablecourse.css';
import Button from "../../web components/buttons/Button";
import AddCourse from './institutes/AddCourse';
import CourseService from '../services/CourseService';
import EditCourse from './institutes/EditCourse';
const Availablecourses = () => {
    const [course,setcourse]=useState([]);
    const[filter,setfilter]=useState("");
    const searchfilter=(event)=>{
        setfilter(event.target.value);
    }
    useEffect(()=>{
        CourseService.getCourse().then((res)=> setcourse(res.data));
    },[]);
    const history=useNavigate();
    const dataSearch=course.filter((val)=>{
        return(val.courseName.includes(filter))
    })
    const editcourse=(id,item)=>{
        console.log(id);
        history('/editcourse/'+id);
        localStorage.setItem('coursedetails',JSON.stringify(item));
        console.log(item);
        EditCourse({course});
    }
    const deletecourse=(id)=>{
        CourseService.deleteCourse(id).then(res=>{
            setcourse(course.filter(response=>response.courseId!==id));
        });
        alert('course Deleted');
    }
    return (
        <div>
            <div className='Navbar2'>
            <Link to='/institutepage' className='instnav'>Institutes</Link>
            <Link to='/availablecourse' className='instnav'>Courses</Link>
            <Link to='/student' className='instnav'>Students</Link>
        </div>
            <div className='instpage'>
            <div className='search'>
                <input className='searchtext' type="text" placeholder='Search Here' value={filter} onChange={searchfilter}></input>
                <Button className='button' BtnName='Search' value='Search' />
            </div>
        {/* <div className='card'> */}
        <section className='container'>
            {dataSearch.map((item)=>{
                return(
                    <div className='enrolledcoursecontent' key={item}>
                        <h2>Course Name :{item.courseName} <br></br>
                        Course Duration:{item.courseduration}<br></br>
                        Available Timings:{item.coursetiming} <br></br>
                        Number of Students: {item.studentNumber} <br></br>
                        </h2>
                        <div className='button-alignment'>
                            {/* <Link to={'/editcourse/'+item.courseId} className='edit' ><FaEdit/></Link> */}
                        <FaEdit onClick={()=>editcourse(item.courseId,item)} style={{cursor:'pointer'}}/>
                        <FaTrash onClick={()=> deletecourse(item.courseId)} style={{cursor:'pointer'}}/>
                        </div>
                    </div>
                )
            })}
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