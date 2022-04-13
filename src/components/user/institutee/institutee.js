import React , {useState} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import '../institutee/institutee.css';
import Rating from '@mui/material/Rating';
import Button from "../../web components/buttons/Button";
import data from './data';
import Navbar from '../../navbar/Navbar'
import Enrolledcourse from '../enrolledcourse/enrolledCourse'
const InstitutePagee=()=>{
    const[filter,setfilter]=useState("");
    const searchfilter=(event)=>{
        setfilter(event.target.value);
    }
    //const displaysearch=filter.length>0;
    const dataSearch=data.instituteData.filter((val)=>{
        return(val.name.includes(filter))
    })
    // console.log(dataSearch);
    return(
        <div>
        <div className='Navbar2'>
            <Link to='/user/institutepage' className='instnav'>Institutes</Link>
            <Link to='/user/enrolledCourse' className='instnav'>Enrolled Courses</Link>
        </div>
        <div className='instpage'>
        <div className='search'>
                <input className='searchtext' type="text" placeholder='Search Here' value={filter} onChange={searchfilter}></input>
                <Button className='button' BtnName='Search' value='Search' />
            </div>
        <section className='container'>
            {dataSearch.map((item)=>{
                return(
                    <div>
                    <div className='card' key={item}>
                    <img className='img instimg' src={item.img} alt="Institute"/>
                    <center><a><Link to='/user/availablecourse' className='link'>{item.name}</Link></a></center>
                    <div className='rating'>
                        <p>Place:{item.place}</p>
                        <Rating name="size-small" defaultValue={item.rating} size="small" />
                    </div>
                    
                </div>
                
                </div>
                )
            })}
            
        </section>
        </div>
        </div>
    )
}
export default InstitutePagee;