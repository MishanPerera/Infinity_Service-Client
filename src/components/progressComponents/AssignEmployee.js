import React, {useState} from "react";
import axios from "axios";
import Header from "./Header";

export default function AddEmployee(){

    const[vNo, setVNo] = useState("");
    const[entryDate, setEdate] = useState("");
    const[empNo, setEmpNo] = useState("");
    const[handoverDate, setHdate] = useState("");
    const[status, setStatus] = useState("");

    function sendData(e){
        e.preventDefault();
        //alert("If you want to add Employee? ");

      
        const newAssignment ={

            vNo,
            entryDate,
            empNo,
            handoverDate,
            status

        }

       axios.post("http://localhost:8053/progress/add",newAssignment).then(()=>{ 
            alert("Employee Added Succesfully !!");
             
        }).catch((err)=>{
            alert(err)
        })
       window.location="/";
    }
    
    return(
        <>
        <div><Header/>
     <div className = "d-flex justify-content-center container w-50 text-white" style={{background:"#BBDEFB",paddingTop:"50px",paddingBottom:"10px",paddingRight:"50px",paddingLeft:"50px",marginTop:"-700px"}}>
        <form className ="form-control row mb-3" onSubmit={sendData}>
             <center>
            <h1>Assign Employees</h1>
             </center>
            <div className="mb-3">
                <label htmlFor="vNo" className="form-label">Vehicle No</label>
                <input type="text" className="form-control" id="vNo" placeholder="WP KA:6270" 
                onChange={(e)=>{
                     setVNo(e.target.value);
                    
                }} />

            </div>
            <div className="mb-3">
                <label htmlFor="entryDate" className="form-label">Entry Date</label>
                <input type="text" className="form-control" id="entryDate" name="date" placeholder="DD-MM-YYY" 
                onChange={(e)=>{
                    setEdate(e.target.value);
               }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="empNo" className="form-label">Employee Number</label>
                <input type="text" className="form-control" id="empNo" placeholder="Emp******"
                onChange={(e)=>{
                    setEmpNo(e.target.value);
               }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="handoverDate" className="form-label">Finishing Date</label>
                <input type="text" className="form-control" id="handoverDate" placeholder="DD-MM-YYY"
                onChange={(e)=>{
                    setHdate(e.target.value);
               }}/>
            </div>
            <div className="mb-3">
                <label htmlFor="status" className="form-label">Status</label>
                <input type="text" className="form-control" id="status" 
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
     </div></div>
     </>
    )
            
    }