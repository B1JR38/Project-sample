import React , {useState} from 'react';
import { Link , useHistory} from 'react-router-dom';
import { FaEdit , FaTrash } from 'react-icons/fa';
import '../institutee/institutee.css';
import Rating from '@mui/material/Rating';
import Button from "../../web components/buttons/Button";
import data from './data';
import EditInstitute from '../ViewAcademy/institutes/EditInstitute';
import Navbar from '../../navbar/Navbar'
const InstitutePage=()=>{
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
            <Link to='/institutepage' className='instnav'>Institutes</Link>
            <Link to='/availablecourse' className='instnav'>Courses</Link>
            <Link to='/' className='instnav'>Students</Link>
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
                    <center><a href='#0'>{item.name}</a></center>
                    <div className='rating'>
                        <p>Place:{item.place}</p>
                        <Link to='/editInstitute' className='link'><FaEdit/></Link>
                        <Link to='#' className='link'><FaTrash/></Link>
                        <Rating name="size-small" defaultValue={item.rating} size="small" />
                    </div>
                    
                </div>
                </div>
                )
            })}
            
        </section>
        <div className='button2'>
            <Link to="/addInstitute">
            <Button className="link" BtnName={"Add"} id="f-addinst" />
            </Link>
        </div>
        </div>
        </div>
    )
}
export default InstitutePage;