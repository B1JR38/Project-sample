import React, { useState,useEffect } from "react";
import Button from "../../../web components/buttons/Button";
import "./editInstitute.css";
import Input from "../../../web components/input/Input";
import InstituteService from "../../services/InstituteService";
import { useNavigate, useParams } from "react-router-dom";

const EditInstitute = () => {
  const history=useNavigate();
  const id=useParams();
  // console.log(id);
  const instid=id.instituteId;
  // console.log(instid);
  const [valuee, setValue] = useState({
    instituteId:instid,
    academyName: "",
    contactNumber: "",
    imageUrl: "",
    academyEmail: "",
    academyLocation: "",
    academyDescription: "",
  });
  useEffect(()=>{
    // console.log(instid);
      InstituteService.getinstitutebyid(instid).then(res=>{
        console.log(res.data);
          setValue({
            instituteId:instid,
            academyName:res.data.academyName,
            contactNumber:res.data.contactNumber,
            imageUrl:res.data.imageUrl,
            academyEmail:res.data.academyEmail,
            academyLocation:res.data.academyLocation,
            academyDescription:res.data.academyDescription,
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

  let EditInstitute = [];
  const submitting = (e) => {
    let state = {
      instituteId:instid,
      academyName: valuee.academyName,
      contactNumber: valuee.contactNumber,
      imageUrl: valuee.imageUrl,
      academyEmail: valuee.academyEmail,
      academyLocation: valuee.academyLocation,
      academyDescription: valuee.academyDescription,
    };
    EditInstitute.push(state);
    console.log(state);
    InstituteService.editInstitute(state,instid).then(res=>{
      history('/institutepage');
    })
    // localStorage.setItem("editinstitutedata", JSON.stringify(EditInstitute));
    e.preventDefault();
  };
  return (
    <div className="main-container">
      <div className="signup-container">
        <div className="form-header">
          <h1>Edit Institute</h1>
        </div>
        <div className="form-input-container">
          <form onSubmit={submitting}>
            <input
              type="text"
              name="academyName"
              id="academyName"
              placeholder="Enter Your Institute Name"
              value={valuee.academyName}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="contactNumber"
              id="contactNumber"
              placeholder="Enter Your Institute Contact Number"
              value={valuee.contactNumber}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="imageUrl"
              id="imageUrl"
              placeholder="Enter Your Institute Image Url"
              value={valuee.imageUrl}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="academyEmail"
              id="academyEmail"
              placeholder="Enter Your Institute Email-Id"
              value={valuee.academyEmail}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="academyLocation"
              id="academyLocation"
              placeholder="Enter Your Institute Location"
              value={valuee.academyLocation}
              onChange={assignValues}
            ></input>
            <br />
            <input
              type="text"
              name="academyDescription"
              id="academyDescription"
              placeholder="Enter Your Institute Description"
              value={valuee.academyDescription}
              onChange={assignValues}
            ></input>
            <br />
            <div className="form-btn">
            <button className='button' onClick={()=>{alert('Institute Updated')}}><span>{'Update'} </span></button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditInstitute;
