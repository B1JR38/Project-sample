import React, { useEffect, useState } from "react";
import { FaEdit , FaTrash } from 'react-icons/fa';
import StudentService from "../services/StudentService";
import '../Students/student.css';
const Student=()=>{
    const[student,setstudent]=useState([]);
    const deletestudent=(id)=>{
        StudentService.deleteStudent(id).then(res=>{
            setstudent(student.filter(response=>response.studentId!==id));
        });
        alert('student Deleted');
    }
    useEffect(()=>{
            StudentService.getStudent().then((res)=>{
                setstudent(res.data);
            });
    },[]);
    return(
        <div className="table-container">
            <h1 className="heading">Student Details</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Name</th>
                        <th>EmailId</th>
                        <th>Mobile Number</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {student.map((item)=>{
                        return(
                            <tr key={item}>
                                <td>{item.studentId}</td>
                                <td>{item.firstName}</td>
                                <td>{item.emailId}</td>
                                <td>{item.phoneNumber}</td>
                                <td style={{cursor:'pointer'}}><FaEdit /><FaTrash onClick={()=>deletestudent(item.studentId)}/></td>
                            </tr>
                        )
                    })}
                    
                </tbody>
            </table>
        </div>
    );
}
export default Student;