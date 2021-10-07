import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import '../../SearchStyle.css';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import '../../NavBar.css';


  
  export default function  SearchAgreement() {
    
  
    const [supplierNo, setSupplierNo]= useState("");
    const [companyName, setCompanyName]= useState("");
    const [agreeDate, setAgreeDate]= useState("");
    const [validTimePeriod, setValidTimePeriod]= useState("");
    const [itemDetails, setItemDetails]= useState("");
  
    
  
    const  loadAgreementDetails = async () => {
      await axios.get(`http://localhost:8070/agreement/get/${supplierNo}`).then((res) => {

        
        setSupplierNo(res.data.user.supplierNo);
        setCompanyName(res.data.user.companyName);
        setAgreeDate(res.data.user.agreeDate);
        setValidTimePeriod(res.data.user.validTimePeriod);
        setItemDetails(res.data.user.itemDetails);
        
      }).catch((err) => {
        alert(err.message)
      })
    };
  

    const deleteAgreement=(supplierNo) =>{
        axios.delete(`http://localhost:8070/agreement/delete/${supplierNo}`).then(()=>{
          alert("Success");
        window.location.reload(false);
        })
      }
       
    const setData = () => {
       
        localStorage.setItem('AID',supplierNo)
        localStorage.setItem('Aname',companyName)
        localStorage.setItem('Adate',agreeDate);
        localStorage.setItem('Atype',validTimePeriod);
        localStorage.setItem('Alist',itemDetails);
    }

  return (
    
    <div>
            <NavBar/>
    
    <div class="lft">
<div className="container"></div>
<center><h1 className="text-white" style={{marginTop:"-30px"}}>SUPPLIER MANAGEMENT</h1></center><br/>

    
    <center>
      <h5 className="text-white">AGREEMENT DETAILS</h5>
    </center>
    <br></br>

<div style={{  background: "#BBDEFB",  width:"1000px", marginLeft:"-40px"  }}>
  

        <div class="row g-3 align-items-center">
        <div className="supplierearchlable">
          <div class="col-auto">
          <br></br>
            <label for="inputsupplierNo"  ><strong>Supplier No.</strong></label>
            </div>
            </div>
          <div className="suppliersearch">
          <div class="col-auto">
            <input type="text" id="inputSupplierNo" class="form-control" 
              minLength={6} maxLength={6} value={supplierNo}  placeholder="Enter supplier No" required 
              onChange={(e)=>{

                setSupplierNo(e.target.value);

            }}  />

          </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
               <button class="btn btn-primary me-md-2" type="submit" onClick={loadAgreementDetails}>Search Agreement</button>
          </div>
          <br></br>
           
            
        </div>

        <br></br><br></br> 

        <table class="table table-striped table-light table table-hover">
        <tbody>
              <tr>
                <td>Supplier No: </td>
                <td>{supplierNo}</td>
              </tr>
              <tr>
                <td>Company Name:</td>
                <td>{companyName}</td>
              </tr>
              <tr>
                <td>Agreement Date:</td>
                <td>{agreeDate}</td>
              </tr>
              <tr>
                <td>Valid Time Period:</td>
                <td>{validTimePeriod}</td>
              </tr>
              <tr>
                <td>Item Details:</td>
                <td>{itemDetails}</td>
              </tr>
            </tbody>
             
        </table>
        <br></br>
        <center><button type="button" class="btn btn-primary" onClick={() =>  deleteAgreement(`${supplierNo}`)} style={{float:"left", marginLeft:"280px", width:"150px"}}>Delete</button></center>
        <center><Link to={"/UpdateAgreement/" +supplierNo}><button type="button" class="btn btn-primary" onClick={() =>setData()} style={{marginLeft:"-200px", width:"150px"}} >Edit</button></Link></center><br/>
        <br></br>
        <br></br>
        <br></br>
      

        </div>
    </div>
    </div>
  );
}