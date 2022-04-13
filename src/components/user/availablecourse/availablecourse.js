import React ,{useState,useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { FaEdit , FaTrash } from 'react-icons/fa';
import './availablecourse.css';
import Button from "../../web components/buttons/Button";
import CourseService from '../../admin/services/CourseService';
const Availablecourse = () => {
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
    return (
        <div>
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
                    </div>
                )
            })}
        </section>
        </div>
      </div>
    )
  }
  
  export default Availablecourse