import React, {useState} from "react";
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import Header from "./Header";

export default function ToDoList (){ 
    
        const[vNo, setVNo] = useState('');
        const[entryDate, setEdate] = useState('');
        //const[empNo, setEmpNo] = useState('');
        const[handoverDate, setHdate] = useState('');
      //  const[status, setStatus] = useState('');
    
       
          const getService=async() =>{ 
    
            await axios.get(`http://localhost:8053/progress/service/${entryDate}`).then((res)=>{
            //alert("Data Fetched Successfully!!!");
               setVNo(res.data.progress.vNo);
               //setEmpNo(res.data.progress.empNo);
               setHdate(res.data.progress.handoverDate)
               //etStatus(res.data.progress.status)
    
          }).catch((err)=>{
              alert(err.message);
              window.location.reload(false)
          })
         }; 

    return(
        <>
        <div><Header/>
         <center>
        <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"50px",paddingLeft:"300px",marginTop:"-500px"}}>
                <h3> Progress Status</h3>
         <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand"> </a>
                        <form className="d-flex">
                            <input className="form-control me-2" 
                            type="text" 
                            id="entryDate"
                            minLength={10} maxLength={10} value={entryDate}  placeholder="Enter Entry Date" required 
                            onChange={(e)=>{
                            setEdate(e.target.value);

                             }}/>
                            <button className="btn-light btn-outline-success" type="submit" onClick={getService}>Search</button>&nbsp;
                        </form>
                </div>
        </nav>
       
         <div className="card container d-flex justify-content-center">
         <table className="table table-hover">
 
                     <thead>
                         <tr>
                             <th>vehicle no</th>
                            
                             <th>handover date</th>
                            
                            
                             <th>Edit</th>

                         </tr>
                     </thead>
                     <tbody>
                               <tr>
                                     <td >{vNo}</td>
                                     
                                     <td >{handoverDate} </td>
                                     
                                     

                             
                                     <td > <IconButton aria-label="edit" href="/add">
                                           <EditIcon fontSize="small" />
                                           </IconButton>
                                     </td>

                                 </tr>
                     </tbody>
                     </table>
            </div>
            </div>
            </center>
            <div className="container  text-white" style={{marginTop:"-600px" , paddingLeft:"400px"}}>
    <h1>WORK PROGRESS MANAGEMENT</h1>
     </div>
     </div>
        </>
)
}
    