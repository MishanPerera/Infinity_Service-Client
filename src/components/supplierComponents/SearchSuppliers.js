import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import '../../SearchStyle.css';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import '../../NavBar.css';


  
  export default function  SearchSuppliers() {
    
  
    const [supplierNo, setSupplierNo]= useState("");
    const [companyName, setCompanyName]= useState("");
    const [address, setAddress]= useState("");
    const [companyEmail, setCompanyEmail]= useState("");
    const [comPhone, setComPhone]= useState("");
    const [agentName, setAgentName]= useState("");
    const [agentPhone, setAgentPhone]= useState("");
    const [agentEmail, setAgentEmail]= useState("");
  
    
  
    const  loadSupplierDetails = async () => {
      await axios.get(`http://localhost:8070/supplier/get/${supplierNo}`).then((res) => {

        
        setSupplierNo(res.data.user.supplierNo);
        setCompanyName(res.data.user.companyName);
        setAddress(res.data.user.address);
        setCompanyEmail(res.data.user.companyEmail);
        setComPhone(res.data.user.comPhone);
        setAgentName(res.data.user.agentName);
        setAgentPhone(res.data.user.agentPhone);
        setAgentEmail(res.data.user.agentEmail);
        
      }).catch((err) => {
        alert(err.message)
      })
    };
  

    const deleteSupplier=(supplierNo) =>{
        axios.delete(`http://localhost:8070/supplier/delete/${supplierNo}`).then(()=>{
          alert("Success");
        window.location.reload(false);
        })
      }
       
    const setData = () => {
       
        localStorage.setItem('ID',supplierNo)
        localStorage.setItem('name',companyName)
        localStorage.setItem('address',address);
        localStorage.setItem('email',companyEmail);
        localStorage.setItem('phone',comPhone);
        localStorage.setItem('aname',agentName);
        localStorage.setItem('aphone',agentPhone);
        localStorage.setItem('aemail',agentEmail);
    }

  return (
    
    <div>
            <NavBar/>
    
    <div class="lft">
<div className="container"></div>
<center><h1 className="text-white" style={{marginTop:"-30px"}}>SUPPLIER MANAGEMENT</h1></center><br/>

    
    <center>
      <h5 className="text-white">SUPPLIER DETAILS</h5>
    </center>
    <br></br>
   

<div style={{  background: "#BBDEFB",  width:"1000px", marginLeft:"-40px" }}>

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
               <button class="btn btn-primary me-md-2" type="submit" onClick={loadSupplierDetails}>Search Supplier</button>
          </div>
          <br></br><br></br>
           
            
        </div>

        <br></br>

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
                <td>Address:</td>
                <td>{address}</td>
              </tr>
              <tr>
                <td>Company Email:</td>
                <td>{companyEmail}</td>
              </tr>
              <tr>
                <td>Company Phone No:</td>
                <td>{comPhone}</td>
              </tr>
              <tr>
                <td>Agent Name:</td>
                <td>{agentName}</td>
              </tr>
              <tr>
                <td>Agent Phone No:</td>
                <td>{agentPhone}</td>
              </tr>
              <tr>
                <td>Agent Email:</td>
                <td>{agentEmail}</td>
              </tr>
            </tbody>
             
        </table>
        <br></br>
        <div>
        <center><button type="button" class="btn btn-primary" onClick={() =>  deleteSupplier(`${supplierNo}`)} style={{float:"left", marginLeft:"280px", width:"150px"}}>Delete</button></center>
        <center><Link to={"/UpdateSupplier/" +supplierNo}><button type="button" class="btn btn-primary" onClick={() =>setData()} style={{marginLeft:"-200px", width:"150px"}}>Edit</button></Link></center><br/>
        </div>
        <br></br>
        <br></br>
        <br></br>
      

        </div>
    </div>
  </div>
  );
}