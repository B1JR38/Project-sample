import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { FaAngellist, FaGenderless, FaHandScissors } from 'react-icons/fa'
// import {Link} from 'react-router-dom'
import Button from "../../../web components/buttons/Button.jsx";
import Input from "../../../web components/input/Input.jsx";
import StudentService from "../../services/StudentService.js";
import "./course.css";

const Course = () => {
  const history=useNavigate();
  const [valuee, setValue] = useState({
    firstName: "",
    lastName: "",
    gender: "",
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
      gender: valuee.gender,
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
    StudentService.addStudent(state).then(res=>{
        history('/student');
    })
    // localStorage.setItem("coursedata", JSON.stringify(courses));
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
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter Your FirstName"
                  value={valuee.firstName}
                  onChange={assignValues}
                ></input>
                <br />
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter Your LastName"
                  value={valuee.lastName}
                  onChange={assignValues}
                ></input>
                <br />
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  placeholder="Enter Your Gender"
                  value={valuee.gender}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="fatherName"
                  id="fatherName"
                  placeholder="Enter Your FatherName"
                  value={valuee.fatherName}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Enter Your PhoneNumber"
                  value={valuee.phoneNumber}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="alternateNumber"
                  id="alternateNumber"
                  placeholder="Enter Your Alternate Number"
                  value={valuee.alternateNumber}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="emailId"
                  id="emailId"
                  placeholder="Enter Your Email-ID"
                  value={valuee.emailId}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="motherName"
                  id="motherName"
                  placeholder="Enter Your MotherName"
                  value={valuee.motherName}
                  onChange={assignValues}
                ></input>
                <br />
              </div>
              <div className="form2">
                <input
                  type="text"
                  name="age"
                  id="age"
                  placeholder="Enter Your Age"
                  value={valuee.age}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="marks"
                  id="marks"
                  placeholder="Enter Your SSC/HSC Marks"
                  value={valuee.marks}
                  onChange={assignValues}
                ></input>
                <br />
                <input
                  type="text"
                  name="houseNo"
                  id="houseNo"
                  placeholder="Enter House No"
                  value={valuee.houseNo}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="areaName"
                  id="areaName"
                  placeholder="Enter Area Name"
                  value={valuee.areaName}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="pincode"
                  id="pincode"
                  placeholder="Enter Pincode"
                  value={valuee.pincode}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="streetName"
                  id="streetName"
                  placeholder="Enter Street Name"
                  value={valuee.streetName}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="state"
                  id="state"
                  placeholder="Enter State"
                  value={valuee.state}
                  onChange={assignValues}
                ></input>
                <br />

                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  placeholder="Enter Nationality"
                  value={valuee.nationality}
                  onChange={assignValues}
                ></input>
                <br />
              </div>
              <div className="form-btn1">
              <button className='button' onClick={()=>{alert('Student Added')}}><span>{'Enroll'} </span></button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
