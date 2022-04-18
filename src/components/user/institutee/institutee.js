import React , {useState,useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { FaEdit , FaTrash } from 'react-icons/fa';
import '../institutee/institutee.css';
import Rating from '@mui/material/Rating';
import Button from "../../web components/buttons/Button";
import data from './data';
import Navbar from '../../navbar/Navbar'
import InstituteService from '../../admin/services/InstituteService';
const InstitutePagee=()=>{
    const history=useNavigate();
    const[institutes,setinstitutes]=useState([]);
    // const institutes={};
    const[filter,setfilter]=useState("");
    const searchfilter=(event)=>{
        setfilter(event.target.value);
    }
    useEffect(()=>{
        InstituteService.getInstitute().then((res)=>{
        setinstitutes(res.data);
        
            // institutes.add(res.data);
        });
    },[]);
    //const displaysearch=filter.length>0;

    const dataSearch=institutes.filter((val)=>{
        return(val.academyName.includes(filter))
    })
    const coursepage=(id)=>{
        history('/user/availablecourse/'+id);
    }

    // console.log(dataSearch);
    
    return(
        <div>
        <div className='Navbar2'>
            <Link to='/user/institutepage' className='instnav'>Institutes</Link>
            <Link to='/user/enrolledcourse' className='instnav'>Enrolled Courses</Link>
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
                    <img className='img instimg' src={item.imageUrl} alt="Institute"/>
                    <center><a style={{cursor:'pointer'}} onClick={()=>coursepage(item.instituteId)}>{item.academyName}</a></center>
                    <div className='rating'>
                        <p>Place:{item.academyLocation}</p>
                        <p>id:{item.instituteId}</p>
                        <Rating name="size-small" defaultValue={4} size="small" />
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