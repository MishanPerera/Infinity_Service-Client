import React, {useState,useEffect} from "react";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Navbar from "./Navbar";

export default function DeletePostpone() {

    const[vNo, setVNo] = useState('');
    const[handoverDate, setHdate] = useState('');
    const[reason, setReason] = useState('');
  

    const deletePostpone=(vNo) =>{
        axios.delete(`http://localhost:8070/postpone/delete/${vNo}`).then(()=>{
          alert("Success");
        window.location.reload(false);
        })
      }
      const getPostpone=async() =>{ 

        await axios.get(`http://localhost:8070/postpone/get/${vNo}`).then((res)=>{
         
           
           setHdate(res.data.postpone.handoverDate);
           setReason(res.data.postpone.reason);

      }).catch((err)=>{
          alert(err.message);
          window.location.reload(false)
      })
     }; 
     

     const [search, setProgress] = useState([]);

     useEffect(() => {
  
          //fetching all progress from the database
          axios.get("http://localhost:8070/postpone/view").then((res) => {
              if (res.data.length > 0) {
                  setProgress(res.data);
              }
          }).catch((e) => {
              console.log(e);
          })
      }, [])
    return (

        <> 
        <div><Navbar/>
        <center>
        <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"30px",paddingLeft:"300px",marginTop:"-400px"}}>
       
            <div>
                <h3> Delete Postpone Services</h3>
            </div>
            <nav className="navbar">
                <div className="container-fluid">
                    
                        <form className="d-flex">
                            <input className="form-control me-2" type="text"   id="vNo"
                            minLength={12} maxLength={12} value={vNo}  placeholder="Enter vehicle No" required 
                            onChange={(e)=>{
                            setVNo(e.target.value);}}
                            />
                            <button className="btn-light btn-outline-success" type="submit"  onClick={getPostpone}>Search</button>&nbsp;
                        </form>
                </div>
</nav>
                 <div className="card container d-flex justify-content-center">
                    <table className="table  table-hover">
                            
                                <thead>
                                    <tr>
                                        <th >Vehicle Number</th>
                                        <th>Finishing Date</th>
                                        <th>Reason</th>
                                        <th>Delete</th>

                                    </tr>
                                </thead>
                                <tbody>
                                   
                                             <tr>
                                                <td >{vNo}</td>
                                                <td >{handoverDate} </td>
                                                <td >{reason} </td>

                                                <td > <IconButton aria-label="delete"  onClick={() => deletePostpone(`${vNo}`)}>
                                                      <DeleteIcon fontSize="small" />
                                                    </IconButton>
                                                </td>
                                            </tr>
                                
                                </tbody>
                                </table>
                   
                </div>
            </div></center>
           

    <center>
    <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"30px",paddingLeft:"300px",marginTop:"-650px"}}>
   <h2>Service Postpone List</h2>
             <div className="card container d-flex justify-content-center">
                <table className="table  table-hover">
                        
                            <thead>
                                <tr>
                                    <th>Vehicle Number</th>
                                    <th>Finishing Date</th>
                                    <th>Reason</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    search.map(function (f) {
                                        return <tr>
                                            
                                            <td >{f.vNo}</td>
                                            <td >{f.handoverDate} </td>
                                            <td >{f.reason} </td>
                                            </tr>
                                    })
                                }
                           </tbody>
                </table>
               
            </div>
        </div>
        </center>
        <div className="container  text-white" style={{marginTop:"-300px" , paddingLeft:"400px"}}>
        <h1>WORK PROGRESS MANAGEMENT</h1>
         </div></div>
</>
  )
}


