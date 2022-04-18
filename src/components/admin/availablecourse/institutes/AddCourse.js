import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../web components/buttons/Button.jsx";
import Input from "../../../web components/input/Input.jsx";
import CourseService from '../../services/CourseService';
import "./AddCourse.css";

const AddCourse = () => {
  const history=useNavigate();
  const [valuee, setValue] = useState({
    courseName: "",
    studentNumber: "",
    courseduration: "",
    coursetiming: "",
    courseDescription: "",
  });
  const assignValues = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue({
      ...valuee,
      [name]: value,
    });
  };
  let AddInstitute = [];
  const submitting = (e) => {
    let state = {
      courseName: valuee.courseName,
      studentNumber: valuee.studentNumber,
      courseduration: valuee.courseduration,
      coursetiming: valuee.coursetiming,
      courseDescription: valuee.courseDescription,
    };
    AddInstitute.push(state);
    console.log(state);
    CourseService.addCourse(state).then(res=>{
      history('/availablecourse');
    })
    // localStorage.setItem("addinstitutedata", JSON.stringify(AddInstitute));
    e.preventDefault();
  };
  return (
    <div className="main-container">
      <div className="signup-container">
        <div className="form-header">
          <h1>Add Course</h1>
        </div>
        <div className="form-input-container">
          <form onSubmit={submitting}>
            <input
              type="text"
              name="courseName"
              id="courseName"
              placeholder="Enter Your Course Name"
              value={valuee.courseName}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="studentNumber"
              id="studenttNumber"
              placeholder="Enter Number of students"
              value={valuee.studenttNumber}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="courseduration"
              id="courseduration"
              placeholder="Enter Course Duration"
              value={valuee.courseduration}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="coursetiming"
              id="coursetiming"
              placeholder="Enter Course Timings"
              value={valuee.coursetiming}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="courseDescription"
              id="courseDescription"
              placeholder="Enter Course Description"
              value={valuee.courseDescription}
              onChange={assignValues}
            ></input>
            <br />
            <div className="form-btn">
            <button className='button' onClick={()=>{alert('Course Added')}}><span>{'Add'} </span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCourse;
