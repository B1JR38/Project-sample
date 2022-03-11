import React , {useState} from 'react';
import '../institutee/institutee.css';
import Rating from '@mui/material/Rating';
// import Button from "../../web components/buttons/Button";
import data from '../data';
const InstitutePagee=()=>{
    const[filter,setfilter]=useState("");
    const searchfilter=(event)=>{
        setfilter(event.target.value);
    }
    const displaysearch=filter.length>0;
    const dataSearch=data.instituteData.filter((val)=>{
        return(val.name.includes(filter))
    })
    // console.log(dataSearch);
    return(
        <div className='instpage'>
        <div className='search'>
                <input type="text" placeholder='Search Here' value={filter} onChange={searchfilter}></input>
                <input type="button" className="button" value="Search" />
            </div>
        <section className='container'>
            {dataSearch.map((item)=>{
                return(
                    <div>
                    <div className='card' key={item}>
                    <img className='img instimg' src={item.img} alt="Institute"/>
                    <center><a href=''>{item.name}</a></center>
                    <div className='rating'>
                        <p>Place:{item.place}</p>
                        <Rating name="size-small" defaultValue={2} size="small" />
                    </div>
                    
                </div>
                
                </div>
                )
            })}
            
        </section>
        </div>
    )
}
export default InstitutePagee;