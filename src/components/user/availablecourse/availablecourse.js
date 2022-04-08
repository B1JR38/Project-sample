import React from 'react'
import './availablecourse.css';
import Button from "../../web components/buttons/Button";

const Availablecourse = () => {
  
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
            <button className='enrollbutton' id='enrollbutton'>Enrol Me</button>
            </div>
        </div>
        <div className='enrolledcoursecontent'>
        <h2>Course Name :B.E(ECE) <br></br>
            Course Duration:4 years<br></br>
            Available Timings: 9am to 4pm<br></br>
            Number of Students: 444 <br></br>
            </h2>
            <div className='button-alignment'>
            <button className='enrollbutton' id='enrollbutton'>Enrol Me</button>
            </div>
        </div>
        </section>
        </div>
      </div>
    )
  }
  
  export default Availablecourse