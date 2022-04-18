import React, { useState,useEffect } from "react";
import { useNavigate,useParams,withRouter } from "react-router-dom";
import Button from "../../../web components/buttons/Button";
import "./EditCourse.css";
import Input from "../../../web components/input/Input";
import axios from "axios";
import CourseService from "../../services/CourseService";

const EditCourse = () => {
  const courseId=useParams();
  const history=useNavigate();
  // console.log(courseId);
  const id=courseId.courseId;
  const [valuee, setValue] = useState({
    courseId:id,
    courseName: "",
    studentNumber: "",
    courseduration: "",
    coursetiming: "",
    courseDescription: "",
  });
  useEffect(()=>{
    // console.log(id);
      CourseService.getcoursebyid(id).then(res=>{
        console.log(res.data);
          setValue({
            id:id,
            courseName:res.data.courseName,
            studentNumber:res.data.studentNumber,
            courseduration:res.data.courseduration,
            coursetiming:res.data.coursetiming,
            courseDescription:res.data.courseDescription
          });
      })
      .catch((error)=>{
        console.log('Error - '+error);
      });
  },[])
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
    e.preventDefault();
    let state = {
      courseId:id,
      courseName: valuee.courseName,
      studentNumber: valuee.studentNumber,
      courseduration: valuee.courseduration,
      coursetiming: valuee.coursetiming,
      courseDescription: valuee.courseDescription,
    };
    AddInstitute.push(state);
    // console.log(state);
    // console.log(id);
    // console.log(valuee.courseId);
    // console.log(state.courseId);
    CourseService.editCourse(state,id).then(res=>{
      history('/availablecourse');
    });
    // localStorage.setItem("addinstitutedata", JSON.stringify(AddInstitute));
    e.preventDefault();
  };
  return (
    <div className="main-container">
      <div className="signup-container">
        <div className="form-header">
          <h1>Edit Course</h1>
        </div>
        <div className="form-input-container">
          <form onSubmit={submitting}>
            <input
              type="text"
              name="courseName"
              id="courseName"
              placeholder="Enter Course Name"
              value={valuee.courseName}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="studentNumber"
              id="studenttNumber"
              placeholder="Enter Number of students"
              value={valuee.studentNumber}
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
            <button className='button' onClick={()=>{alert('Course Updated')}}><span>{'Update'} </span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default EditCourse;
