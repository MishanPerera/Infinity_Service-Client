import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../Styles.css';
import Navbar from "./Navbar";

export default function ViewPending(){

    const [month, setmonth] = useState('');
    const [billName, setbillName] = useState('');
    const [mon, setmon] = useState('');


 
  const  loadItemDetails = async () => {      
    await axios.get(`http://localhost:8070/pending/get/${mon}`).then((res) => {          
        console.log(res)                     
        setmonth(res.data.pendings.month);             
        setbillName(res.data.pendings.billName);                  
        }).catch((err) => {    
        window.alert('Pending not found!')    
        alert(err.message)      })    };



   
const onSubmit = async (e) => {
    e.preventDefault();

    const newpending = {
        month,
        billName
    };
    console.log(newpending)

    await axios
      .put(`http://localhost:8070/pending/update/${mon}`, newpending)
      .then(() => {
        alert("Pending list updated Successfully");
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const  onDelete = async () => {
  
    await axios
      .delete(`http://localhost:8070/pending/delete/${mon}`)
      .then(() => {
        alert("Pending List Deleted Successfully");
        window.location.reload(true);
      })
      .catch((err) => {
        alert(err);
      });
  };
   return (
    <div>
    <Navbar />

  
    <div className="viewpending" >
    <center><br></br>
    <h1 class="text-white">FINANCIAL MANAGEMENT</h1>
    </center>
    <br></br><br></br>
    <h5 class="text-white">VIEW PENDING LIST</h5>
    <br></br>
    <div style={{ background: "#BBDEFB"}}>
    <div class="row g-3 align-items-center">
                          <div className="pendingsearchlable">
                            <div class="col-auto">
                              <label for="inputmon"  ><strong> MONTH </strong></label>
                              </div>
                              </div>
                            <div className="pendingsearch">
                            <div class="col-auto">
                              <input type="text" id="inputmon" class="form-control" 
                                value={mon}  placeholder="Enter month" required 
                                onChange={(e)=>{

                                  setmon(e.target.value);
                                  


                              }}  />

                            </div>
                                </div>
                                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                  <button class="btn btn-primary me-md-2" type="submit" onClick={loadItemDetails}>Search Month</button>
                                </div>
                              <br></br><br></br>
                            
                              
                          </div>
        <br></br> <br></br> 
         
        <table class="table table-bordered">
         
        <table style={{  background:"white",width:"98%", marginLeft:"10px", height: "250px"}} >
            <thead>
                <tr>
                    <th class="text-center" scope="col">MONTH</th>
                    <th class="text-center" scope="col">NAME</th>
        <br></br> <br></br> <br></br> 
         
                </tr>
            </thead>


            <tbody>
           
                    
                    
                        <tr >
                            <td class="text-center" >
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="month"
                            
                                    value={month}
                                    onChange={(e) => {
                                    setmonth(e.target.value);
                                    }}
                                    />


                                    </td>
                                    <td class="text-center" >
                                    <input
                                    type="text"
                                    className="form-control"
                                    id="billName"
                            
                                    value={billName}
                                    onChange={(e) => {
                                    setbillName(e.target.value);
                                    }}
                                    />
                                    </td>
                            
                            
                        </tr>
                    
                    
                
            </tbody>
             
        </table>
        </table>
      
        <br></br>
        <center>
        <button class="btn btn-primary me-md-2" type="submit" onClick={onSubmit}>Update</button>
        <button class="btn btn-danger" type="submit" style={{  marginLeft:"100px" }}   onClick={onDelete}>Delete</button>
        <br></br> <br></br> <br></br> 
        <br></br> <br></br> <br></br> 
        <br></br> <br></br> <br></br> 
        <br></br> <br></br> <br></br> 
        <br></br> <br></br> <br></br> 
        <br></br> <br></br> <br></br> 
        <br></br> <br></br> <br></br> 
        </center>
    </div>
   
</div>
</div>

);
}