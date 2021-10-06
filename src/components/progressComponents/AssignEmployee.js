import React, {useState,useEffect} from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function AddEmployee(){

    const[vNo, setVNo] = useState("");
    const[entryDate, setEdate] = useState("");
    const[empNo, setEmpNo] = useState("");
    const[handoverDate, setHdate] = useState("");
    const[status, setStatus] = useState("");

    function sendData(e){
        e.preventDefault();

        const newAssignment ={
            vNo,
            entryDate,
            empNo,
            handoverDate,
            status
        }

       axios.post("http://localhost:8070/progress/add",newAssignment).then(()=>{ 
            alert("Employee Added Succesfully !!");
            window.location="/all";
        }).catch((err)=>{
            alert(err)
        })
      
    }

  
    return(
        <>
<div><Navbar/>
        <div className = "d-flex justify-content-center container w-50 text-white" style={{background:"#BBDEFB",paddingTop:"50px",paddingBottom:"10px",paddingRight:"50px",paddingLeft:"50px",marginTop:"-700px"}}>
            <form className ="form-control row mb-3" onSubmit={sendData}>
                <center>
                    <h1>Assign Employees</h1>
                </center>
                <div className="mb-3">
                    <label htmlFor="vNo" className="form-label">Vehicle No</label>
                    <input type="text" className="form-control" id="vNo" placeholder="WP KA-6270"  pattern="^[A-Z]{2}\s[A-Z]{2,3}[\-][0-9]{4}$" value={vNo} required
                    onChange={(e)=>{
                    setVNo(e.target.value);  
                    }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="entryDate" className="form-label">Entry Date</label>
                    <input type="date" className="form-control" id="entryDate" name="date" placeholder="DD-MM-YYY" required
                    onChange={(e)=>{
                    setEdate(e.target.value);
                }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="empNo" className="form-label">Employee Number</label>
                    <input type="text" className="form-control" id="empNo" placeholder="Emp******"  required
                    onChange={(e)=>{
                    setEmpNo(e.target.value);
                }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="handoverDate" className="form-label">Finishing Date</label>
                    <input type="date" className="form-control" id="handoverDate" placeholder="DD-MM-YYY" required
                    onChange={(e)=>{
                    setHdate(e.target.value);
                }}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <input type="text" className="form-control" id="status"  required
                    onChange={(e)=>{
                    setStatus(e.target.value);
                }}/>
                </div>&nbsp;
            <center>
            <button type="submit" className="btn btn-secondary btn-success">ASSIGN EMPLOYEES</button>
            </center> 
            </form>
        </div>
            <div className="container  text-white" style={{marginTop:"-800px" , paddingLeft:"400px"}}>
                <h1>WORK PROGRESS MANAGEMENT</h1>
            </div>
        </div>
        </>
    )       
} 

