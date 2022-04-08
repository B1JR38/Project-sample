import React, { useState } from "react";
import Button from "../../../web components/buttons/Button";
import "./EditCourse.css";
import Input from "../../../web components/input/Input";

const EditCourse = () => {
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
    localStorage.setItem("addinstitutedata", JSON.stringify(AddInstitute));
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
            <Input
              inputType={"text"}
              inputName={"courseName"}
              inputId={"courseName"}
              inputPlaceholder={"Enter Course Name"}
              value={valuee.courseName}
              onChange={assignValues}
            ></Input>
            <br />
            <Input
              inputType={"text"}
              inputName={"studentNumber"}
              inputId={"studenttNumber"}
              inputPlaceholder={"Enter Number of students"}
              value={valuee.studenttNumber}
              onChange={assignValues}
            ></Input>
            <br />
            <Input
              inputType={"text"}
              inputName={"courseduration"}
              inputId={"courseduration"}
              inputPlaceholder={"Enter Course Duration"}
              value={valuee.courseduration}
              onChange={assignValues}
            ></Input>
            <br />
            <Input
              inputType={"text"}
              inputName={"coursetiming"}
              inputId={"coursetiming"}
              inputPlaceholder={"Enter Course Timings"}
              value={valuee.coursetiming}
              onChange={assignValues}
            ></Input>
            <br />
            <Input
              inputType={"text"}
              inputName={"courseDescription"}
              inputId={"courseDescription"}
              inputPlaceholder={"Enter Course Description"}
              value={valuee.courseDescription}
              onChange={assignValues}
            ></Input>
            <br />
            <div className="form-btn">
              <Button
                className="button-institute"
                BtnName={"Update"}
                value="Edit Course"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


export default EditCourse;
