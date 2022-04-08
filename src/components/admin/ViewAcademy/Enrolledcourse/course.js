
import React, { useState } from "react";
// import { FaAngellist, FaGenderless, FaHandScissors } from 'react-icons/fa'
// import {Link} from 'react-router-dom'
import Button from "../../../web components/buttons/Button.jsx";
import Input from "../../../web components/input/Input.jsx";
import "./course.css";

const Course = () => {
  const [valuee, setValue] = useState({
    firstName: "",
    lastName: "",
    Gender: "",
    fatherName: "",
    phoneNumber: "",
    alternateNumber: "",
    motherName: "",
    emailId: "",
    age: "",
    marks: "",
    houseNo: "",
    streetName: "",
    areaName: "",
    pincode: "",
    state: "",
    nationality: "",
  });
  const assignValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue({
      ...valuee,
      [name]: value,
    });
  };
  let courses = [];
  const submitting = (e) => {
    let state = {
      firstName: valuee.firstName,
      lastName: valuee.lastName,
      Gender: valuee.Gender,
      fatherName: valuee.fatherName,
      phoneNumber: valuee.phoneNumber,
      alternateNumber: valuee.alternateNumber,
      motherName: valuee.motherName,
      emailId: valuee.emailId,
      age: valuee.age,
      marks: valuee.marks,
      houseNo: valuee.houseNo,
      streetName: valuee.streetName,
      areaName: valuee.areaName,
      pincode: valuee.pincode,
      state: valuee.state,
      nationality: valuee.nationality,
    };
    courses.push(state);
    console.log(state);
    localStorage.setItem("coursedata", JSON.stringify(courses));
    e.preventDefault();
  };
  return (
    <div className="main-container">
      <div className="course-container">
        <div className="form-header">
          <h1>Course Enrollment</h1>
        </div>
        <div className="form-span">
          <div className="form-input-container">
            <form onSubmit={submitting}>
              <div className="form1">
                <Input
                  inputType={"text"}
                  inputName={"firstName"}
                  inputId={"firstName"}
                  inputPlaceholder={"Enter Your FirstName"}
                  value={valuee.firstName}
                  onChange={assignValues}
                ></Input>
                <br />
                <Input
                  inputType={"text"}
                  inputName={"lastName"}
                  inputId={"lastName"}
                  inputPlaceholder={"Enter Your LastName"}
                  value={valuee.lastName}
                  onChange={assignValues}
                ></Input>
                <br />
                <Input
                  inputType={"text"}
                  inputName={"Gender"}
                  inputId={"Gender"}
                  inputPlaceholder={"Enter Your Gender"}
                  value={valuee.Gender}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"fatherName"}
                  inputId={"fatherName"}
                  inputPlaceholder={"Enter Your FatherName"}
                  value={valuee.fatherName}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"phoneNumber"}
                  inputId={"phoneNumber"}
                  inputPlaceholder={"Enter Your PhoneNumber"}
                  value={valuee.phoneNumber}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"alternateNumber"}
                  inputId={"alternateNumber"}
                  inputPlaceholder={"Enter Your Alternate Number"}
                  value={valuee.alternateNumber}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"emailId"}
                  inputId={"emailId"}
                  inputPlaceholder={"Enter Your Email-ID"}
                  value={valuee.emailId}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"motherName"}
                  inputId={"motherName"}
                  inputPlaceholder={"Enter Your MotherName"}
                  value={valuee.motherName}
                  onChange={assignValues}
                ></Input>
                <br />
              </div>
              <div className="form2">
                <Input
                  inputType={"text"}
                  inputName={"age"}
                  inputId={"age"}
                  inputPlaceholder={"Enter Your Age"}
                  value={valuee.age}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"marks"}
                  inputId={"marks"}
                  inputPlaceholder={"Enter Your SSC/HSC Marks"}
                  value={valuee.marks}
                  onChange={assignValues}
                ></Input>
                <br />
                <Input
                  inputType={"text"}
                  inputName={"houseNo"}
                  inputId={"houseNo"}
                  inputPlaceholder={"Enter House No"}
                  value={valuee.houseNo}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"areaName"}
                  inputId={"areaName"}
                  inputPlaceholder={"Enter Area Name"}
                  value={valuee.areaName}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"pincode"}
                  inputId={"pincode"}
                  inputPlaceholder={"Enter Pincode"}
                  value={valuee.pincode}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"streetName"}
                  inputId={"streetName"}
                  inputPlaceholder={"Enter Street Name"}
                  value={valuee.streetName}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"state"}
                  inputId={"state"}
                  inputPlaceholder={"Enter State"}
                  value={valuee.state}
                  onChange={assignValues}
                ></Input>
                <br />

                <Input
                  inputType={"text"}
                  inputName={"nationality"}
                  inputId={"nationality"}
                  inputPlaceholder={"Enter Nationality"}
                  value={valuee.nationality}
                  onChange={assignValues}
                ></Input>
                <br />
              </div>
              <div className="form-btn1">
                <Button
                  className="button"
                  BtnName={"Enroll"}
                  value="Enroll Now"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;

import React,{useState} from 'react'
//import Card from '@material-ui/core/Card'
// import { FaAngellist, FaGenderless, FaHandScissors } from 'react-icons/fa'
// import {Link} from 'react-router-dom'
import Button from '../../web components/buttons/Button.jsx'
import './course.css';

const Course=()=>{
    const[valuee,setValue]=useState({
        firstName:"",
        lastName:"",
        Gender:"",
        fatherName:"",
        phoneNumber:"",
        alternateNumber:"",
        motherName:"",
        emailId:"",
        age:"",
        marks:"",
        houseNo:"",
        streetName:"",
        areaName:"",
        pincode:"",
        state:"",
        nationality:"",
    })
    const assignValues=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setValue({
            ...valuee,
            [name]:value
        })
    }
    let courses=[];
    const submitting=(e)=>{
        let state={
        firstName:valuee.firstName,
        lastName:valuee.lastName,
        Gender:valuee.Gender,
        fatherName:valuee.fatherName,
        phoneNumber:valuee.phoneNumber,
        alternateNumber:valuee.alternateNumber,
        motherName:valuee.motherName,
        emailId:valuee.emailId,
        age:valuee.age,
        marks:valuee.marks,
        houseNo:valuee.houseNo,
        streetName:valuee.streetName,
        areaName:valuee.areaName,
        pincode:valuee.pincode,
        state:valuee.state,
        nationality:valuee.nationality,
        }
        courses.push(state);
        console.log(state);
        localStorage.setItem('coursedata',JSON.stringify(courses));
        e.preventDefault();
    }
    return(
    <>
    <div className="form-header">
        <h1>Course Enrollment</h1>
    </div>
    <div className='form'>
        <form onSubmit={submitting}>
            <div className='form1'>
                <input type="text" name="firstName" id="firstName" placeholder='Enter Your FirstName' value={valuee.firstName} onChange={assignValues}></input><br/>
                <input type="text" name="lastName" id="lastName" placeholder='Enter Your LastName' value={valuee.lastName} onChange={assignValues}></input><br/>
                <input type="text" name="Gender" id="Gender" placeholder='Enter Your Gender' value={valuee.Gender} onChange={assignValues}></input><br/>
                <input type="text" name="fatherName" id="fatherName" placeholder='Enter Your FatherName' value={valuee.fatherName} onChange={assignValues}></input><br/>
                <input type="text" name="phoneNumber" id="phoneNumber" placeholder='Enter Your PhoneNumber' value={valuee.phoneNumber} onChange={assignValues}></input><br/>
                <input type="text" name="alternateNumber" id="alternateNumber" placeholder='Enter Your AlterNate Number' value={valuee.alternateNumber} onChange={assignValues}></input><br/>
                <input type="text" name="emailId" id="emailId" placeholder='Enter Your Email-ID' value={valuee.emailId} onChange={assignValues}></input><br/>
                <input type="text" name="motherName" id="motherName" placeholder='Enter Your MotherName' value={valuee.motherName} onChange={assignValues}></input><br/>
                <input type="text" name="age" id="age" placeholder='Enter Your Age' value={valuee.age} onChange={assignValues}></input><br/>
                <input type="text" name="marks" id="marks" placeholder='Enter Your SSC/HSC Marks' value={valuee.marks} onChange={assignValues}></input><br/>
            </div>
            <div className='form2'>
                    <input type="text" name="houseNo" id="houseNo" placeholder="Enter House No" value={valuee.houseNo} onChange={assignValues}></input><br/>
                    <input type="text" name="areaName" id="areaName" placeholder="Enter Area Name" value={valuee.areaName} onChange={assignValues}></input><br/>
                    <input type="text" name="pincode" id="pincode" placeholder="Enter Pincode" value={valuee.pincode} onChange={assignValues}></input><br/>
                    <input type="text" name="streetName" id="streetName" placeholder="Enter Street Name" value={valuee.streetName} onChange={assignValues}></input><br/>
                    <input type="text" name="state" id="state" placeholder="Enter State" value={valuee.state} onChange={assignValues}></input><br/>
                    <input type="text" name="nationality" id="nationality" placeholder="Enter Nationality" value={valuee.nationality} onChange={assignValues}></input><br/>
            </div>
            <div className="form-btn1">
                <Button className="button" BtnName={"Enroll Now"} value="Enroll Now"/>
            </div> 
        </form>
    </div>
    </>
    );
};

export default Course;

