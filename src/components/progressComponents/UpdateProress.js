import React,{useEffect, useState} from "react";
import axios from "axios";
//import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

export default function UpdateProgress(){

    const[vNo, setVNo] = useState('');
    const[empNo, setEmpNo] = useState('');
    const[handoverDate, setHdate] = useState('');
    const[status, setStatus] = useState('');
    const[entryDate, setEdate] = useState('');

    useEffect(() =>{
        
        setEmpNo(localStorage.getItem('Employee'))
        setHdate(localStorage.getItem('HandoverDate'))
        setStatus(localStorage.getItem('Status'));
        setVNo(localStorage.getItem('VehicleNo'));
        setEdate(localStorage.getItem('EntryDate'));
   

    }, [] );

    const updateAPIData = (d) => {
        axios.put(`http://localhost:8053/progress/edit/${vNo}`, {
       
         empNo,
         handoverDate,
         entryDate,
         status,
         vNo  

        })
        //window.location.reload(false);
        window.location="/";
    }
    
      
    //let history = useHistory();
    const setData = () => {
   
    localStorage.setItem('VehicleNo',vNo);
}

    return(
        <>
        <div className = "d-flex justify-content-center container w-50 text-white" style={{background:"#BBDEFB",paddingTop:"50px",paddingBottom:"20px",paddingRight:"50px",paddingLeft:"50px",marginTop:"-700px"}}>
        <form className ="form-control row mb-3">
        <center>
            <h1>Update Progress</h1>
             </center>

        <div className="mb-3">
                <label for="vNo" class="form-label">Vehicle Number</label>
                <input type="text" class="form-control" id="vNo" value={vNo} readonly
                onChange={(e)=> {
                
                    setVNo(e.target.value);
      
                }}/>
            </div>
            
            <div class="mb-3">
                <label for="handoverDate" class="form-label">Finishing Date</label>
                <input type="text" class="form-control" id="handoverDate" value={handoverDate}
                onChange={(e)=> {
      
                    setHdate(e.target.value);
      
                }}/>
            </div>
       
            <div class="mb-3">
                <label for="status" class="form-label">Progress Status</label>
                <input type="text" class="form-control" id="status" value={status} 
                onChange={(e)=> {
      
                    setStatus(e.target.value);
                }}/>
            </div>
            <center> 
            <Link to={"/progress"}><button type="submit" class="btn btn-primary" onClick={(d)=>{updateAPIData(d);}}>UPDATE</button></Link>&nbsp;&nbsp;&nbsp;

            <Link to={"/addp"}><button type="submit" class="btn btn-primary" onClick={() =>setData()} >POSTPONE</button></Link>
        </center>
        </form>    
    
       </div>     
       <div className="container  text-white" style={{marginTop:"-600px" , paddingLeft:"400px"}}>
    <h1>WORK PROGRESS MANAGEMENT</h1>
     </div>
     </>
    )
}