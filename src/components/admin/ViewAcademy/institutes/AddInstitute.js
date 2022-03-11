import React, { useState } from "react";
import Button from "../../../web components/buttons/Button.jsx";
import Input from "../../../web components/input/Input.jsx";
import "./addInstitute.css";

const AddInstitute = () => {
  const [valuee, setValue] = useState({
    academyName: "",
    contactNumber: "",
    imageUrl: "",
    academyEmail: "",
    academyLocation: "",
    academyDescription: "",
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
      academyName: valuee.academyName,
      contactNumber: valuee.contactNumber,
      imageUrl: valuee.imageUrl,
      academyEmail: valuee.academyEmail,
      academyLocation: valuee.academyLocation,
      academyDescription: valuee.academyDescription,
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
          <h1>Add Institute</h1>
        </div>
        <div className="form-input-container">
          <form onSubmit={submitting}>
            <Input
              inputType={"text"}
              inputName={"academyName"}
              inputId={"academyName"}
              inputPlaceholder={"Enter Your Institute Name"}
              value={valuee.academyName}
              onChange={assignValues}
            ></Input>
            <br />
            <Input
              inputType={"text"}
              inputName={"contactNumber"}
              inputId={"contactNumber"}
              inputPlaceholder={"Enter Your Institute Contact Number"}
              value={valuee.contactNumber}
              onChange={assignValues}
            ></Input>
            <br />
            <Input
              inputType={"text"}
              inputName={"imageUrl"}
              inputId={"imageUrl"}
              inputPlaceholder={"Enter Your Institute Image Url"}
              value={valuee.imageUrl}
              onChange={assignValues}
            ></Input>
            <br />
            <Input
              inputType={"text"}
              inputName={"academyEmail"}
              inputId={"academyEmail"}
              inputPlaceholder={"Enter Your Institute Email-Id"}
              value={valuee.academyEmail}
              onChange={assignValues}
            ></Input>
            <br />
            <Input
              inputType={"text"}
              inputName={"academyLocation"}
              inputId={"academyLocation"}
              inputPlaceholder={"Enter Your Institute Location"}
              value={valuee.academyLocation}
              onChange={assignValues}
            ></Input>
            <br />
            <Input
              inputType={"text"}
              inputName={"academyDescription"}
              inputId={"academyDescription"}
              inputPlaceholder={"Enter Your Institute Description"}
              value={valuee.academyDescription}
              onChange={assignValues}
            ></Input>
            <br />
            <div className="form-btn">
              <Button
                className="button-institute"
                BtnName={"Add"}
                value="Add Institute"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddInstitute;
