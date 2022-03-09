import React,{useState} from 'react'
import Button from '../../web components/buttons/Button.jsx'
import './institute.css'

const AddInstitute=()=>{
    const[valuee,setValue]=useState({
        academyName:"",
        contactNumber:"",
        imageUrl:"",
        academyEmail:"",
        academyLocation:"",
        academyDescription:"",
    })
    const assignValues=(e)=>{
        const name=e.target.name
        const value=e.target.value
        setValue({
            ...valuee,
            [name]:value
        })
    }
    let AddInstitute=[];
    const submitting=(e)=>{
        let state={
            academyName:valuee.academyName,
            contactNumber:valuee.contactNumber,
            imageUrl:valuee.imageUrl,
            academyEmail:valuee.academyEmail,
            academyLocation:valuee.academyLocation,
            academyDescription:valuee.academyDescription
        }
        AddInstitute.push(state);
        console.log(state);
        localStorage.setItem('addinstitutedata',JSON.stringify(AddInstitute));
        e.preventDefault();
    }
    return(
        <>
        <div className='form-header'>
            <h1>Add Institute</h1>
        </div>
        <div className='form-institute'>
            <form onSubmit={submitting}>
                <input type="text" name='academyName' id="academyName" placeholder='Enter Your Institute Name' value={valuee.academyName} onChange={assignValues}></input><br/>
                <input type="text" name='contactNumber' id="contactNumber" placeholder='Enter Your Institute Contact Number' value={valuee.contactNumber} onChange={assignValues}></input><br/>
                <input type="text" name='imageUrl' id="imageUrl" placeholder='Enter Your Institute Image Url' value={valuee.imageUrl} onChange={assignValues}></input><br/>
                <input type="text" name='academyEmail' id="academyEmail" placeholder='Enter Your Institute Email-Id' value={valuee.academyEmail} onChange={assignValues}></input><br/>
                <input type="text" name='academyLocation' id="academyLocation" placeholder='Enter Your Institute Location' value={valuee.academyLocation} onChange={assignValues}></input><br/>
                <input type="text" name='academyDescription' id="academyDescription" placeholder='Enter Your Institute Description' value={valuee.academyDescription} onChange={assignValues}></input><br/>
                <div className='form-btn'>
                    <Button className="button-institute" BtnName={"Add Institute"} value="Add Institute"/>
                </div>
            </form>
        </div>
        </>
    );
};

export default AddInstitute;