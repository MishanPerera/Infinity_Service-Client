import React, { useState} from "react";
import axios from "axios";
import '../../Form.css';
import NavBar from "./NavBar";



  
export default function  SearchService() {
    
  
    const [vNo, setVNo]= useState("");
    const [cusName, setCusName]= useState("");
    const [entryDate, setEntryDate]= useState("");
    const [handoverDate, setHandoverDate]= useState("");
    const [totalFPrice, setTotalFPrice]= useState("");
    const [laborCost, setLaborCost]= useState("");
    const [totalCost, setTotalCost]= useState("");
  
    
  
    const  loadNormalService = async () => {
      await axios.get(`http://localhost:8070/nservice/search/${entryDate}`).then((res) => {

        
        setVNo(res.data.normalServices.vNo);
        setCusName(res.data.normalServices.cusName);
        setHandoverDate(res.data.normalServices.handoverDate);
        setTotalFPrice(res.data.normalServices.totalFPrice);
        setLaborCost(res.data.normalServices.laborCost);
        setTotalCost(res.data.normalServices.totalCost);
        console.log(res);
        
      }).catch((err) => {
        alert(err.message)
      })
    };
  

  return (
    <div>
      <NavBar/>
    
      <div className="view">

      <center>
            <h2 className="text-white">SERVICE MANAGEMENT</h2>
            </center>
      <br></br>
    <center>
      <h5 className="text-white">NORMAL SERVICE DETAILS</h5>
    </center>
    <br></br>
    
   

<div style={{  background: "#BBDEFB" }}>

        <div className="row g-3 align-items-center">
      
          <div className="normalsearch">
          <div class="col-auto">
            <input type="text" id="inputentryDate" class="form-control" 
              minLength={10} maxLength={10} value={entryDate}  placeholder="DD-MM-YYYY" required 
              onChange={(e)=>{

                setEntryDate(e.target.value);

            }}  />

          </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
               <button class="btn btn-primary me-md-2" type="submit" onClick={loadNormalService}>SEARCH</button>
          </div>
          <br></br><br></br>
           
            
        </div>

        <br></br>

        <table class="table table-striped table-light table table-hover">
        <tbody>
              <tr>
                <td>Vehicle No:</td>
                <td>{vNo}</td>
              </tr>
              <tr>
                <td>Customer Name:</td>
                <td>{cusName}</td>
              </tr>
              <tr>
                <td>Handover Date:</td>
                <td>{handoverDate}</td>
              </tr>
              <tr>
                <td>Total Facility Price:</td>
                <td>{totalFPrice}</td>
              </tr>
              <tr>
                <td>Labor Cost:</td>
                <td>{laborCost}</td>
              </tr>
              <tr>
                <td>Total Service Cost</td>
                <td>{totalCost}</td>
              </tr>
              
            </tbody>
             
        </table>

      

        </div>
    </div>
    </div>
  );
}