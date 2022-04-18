import React , {useState,useEffect} from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { FaEdit , FaTrash } from 'react-icons/fa';
import '../institutee/institutee.css';
import Rating from '@mui/material/Rating';
import Button from "../../web components/buttons/Button";
import data from './data';
import EditInstitute from '../ViewAcademy/institutes/EditInstitute';
import Navbar from '../../navbar/Navbar'
import InstituteService from '../services/InstituteService';
const InstitutePage=()=>{
    const[institutes,setinstitutes]=useState([]);
    // const institutes={};
    const[filter,setfilter]=useState("");
    const history=useNavigate();
    const editinstitute=(id)=>{
            history('/editinstitute/'+id);
    }
    const deleteinstitute=(id)=>{
        InstituteService.deleterInstitute(id).then(res=>{
            setinstitutes(institutes.filter(response=>response.instituteId!==id));
        });
        alert('institute deleted');
    }
    const addinstitute=()=>{
        history('/addinstitute');
    }
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

    // console.log(dataSearch);
    
    return(
        <div>
        <div className='Navbar2'>
            <Link to='/institutepage' className='instnav'>Institutes</Link>
            <Link to='/availablecourse' className='instnav'>Courses</Link>
            <Link to='/student' className='instnav'>Students</Link>
        </div>
        <div className='instpage'>
        <div className='search'>
                {/* <input className='searchtext' type="text" placeholder='Search Here' value={filter} onChange={searchfilter}></input> */}
                <input className='searchtext' type="text" placeholder='Search Here' value={filter} onChange={searchfilter}></input>
                <Button className='button' BtnName='Search' value='Search' />
            </div>
        <section className='container'>
            {dataSearch.map((item)=>{
                return(
                    <div>
                    <div className='card' key={item}>
                    <img className='img instimg' src={item.imageUrl} alt="Institute"/>
                    <center><a href='#0'>{item.academyName}</a></center>
                    <div className='rating'>
                        <p>Place:{item.academyLocation}</p>
                        {/* <Link to='admin/editinstitute' className='link'><FaEdit/></Link> */}
                        <FaEdit onClick={()=>editinstitute(item.instituteId)} style={{cursor:'pointer'}}/>
                        <FaTrash onClick={()=>deleteinstitute(item.instituteId)} style={{cursor:'pointer'}}/>
                        {/* <Link to='#' className='link'><FaTrash/></Link> */}
                        <Rating name="size-small" defaultValue={4} size="small" />
                    </div>
                    
                </div>
                </div>
                )
            })}
            
        </section>
        <div className='button2'>
            {/* <Link to="/addinstitute">
            <Button className="link" BtnName={"Add"} id="f-addinst" />
            </Link> */}
            <button className='button' onClick={addinstitute}><span>{'Add'} </span></button>
        </div>
        </div>
        </div>
    )
}
export default InstitutePage;