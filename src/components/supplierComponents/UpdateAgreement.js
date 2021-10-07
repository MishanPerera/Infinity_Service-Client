import React,{ useState, useEffect } from 'react';
import axios from 'axios'
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom'
import '../../SearchStyle.css';
import NavBar from "./NavBar";
import '../../NavBar.css';

export default function UpdateAgreement(){
    const { id } = useParams();

    const [supplierNo, setSupplierNo]= useState("");
    const [companyName, setCompanyName]= useState("");
    const [agreeDate, setAgreeDate]= useState("");
    const [validTimePeriod, setValidTimePeriod]= useState("");
    const [itemDetails, setItemDetails]= useState("");

    useEffect(() =>{
        
        setSupplierNo(localStorage.getItem('AID'))
        setCompanyName(localStorage.getItem('Aname'))
        setAgreeDate(localStorage.getItem('Adate'));
        setValidTimePeriod(localStorage.getItem('Atype'));
        setItemDetails(localStorage.getItem('Alist'));

    }, [] );

    const EditAPIData = (d) => {
        axios.put(`http://localhost:8070/agreement/edit/${supplierNo}`, {
            supplierNo,
            companyName,
            agreeDate,
            validTimePeriod,
            itemDetails,
        }).then(()=>{
            alert("Updated details successfully");
          window.location.reload(false);
          })
    }
    
      
    let history = useHistory();
        

    return(

        <div>
            <NavBar/>

        <div className="lft">
        <div className="container">
        <form className="addAgreements">
        <center><h1 className="text-white" style={{marginTop:"-30px"}}><strong>SUPPLIER MANAGEMENT</strong></h1></center><br/>
    <br></br>
    <center>
      <h5 className="text-white">EDIT AGREEMENT DETAILS</h5>
    </center>
    <br></br>

    <div style={{  background: "#BBDEFB",  width:"1000px", marginLeft:"-40px" }}>
        <br></br>

        <div className="mb-3">
                <label for="supplierNo" class="form-label"style={{marginLeft:"6px"}}><strong>supplier No.</strong></label>
                <input type="text" class="form-control" id="supplierNo" value={supplierNo}
                onChange={(e)=> {
      
                    setSupplierNo(e.target.value);
      
                }}/>
            </div>
       
            <div class="mb-3">
                <label for="companyName" class="form-label"style={{marginLeft:"6px"}}><strong>Company Name</strong></label>
                <input type="text" class="form-control" id="companyName" value={companyName}
                onChange={(e)=> {
      
                    setCompanyName(e.target.value);
      
                }}
                />
            </div>
       
            <div class="mb-3">
                <label for="agreeDate" class="form-label"style={{marginLeft:"6px"}}><strong>Agreement Date</strong></label>
                <input type="date" class="form-control" id="agreeDate" value={agreeDate} 
                onChange={(e)=> {
      
                    setAgreeDate(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="validTimePeriod" class="form-label"style={{marginLeft:"6px"}}><strong>Valid Time Period</strong></label>
                <input type="text" class="form-control" id="validTimePeriod" value={validTimePeriod} 
                onChange={(e)=> {
      
                    setValidTimePeriod(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="itemDetails" class="form-label"style={{marginLeft:"6px"}}><strong>Item Details</strong></label>
                <input type="text" class="form-control" id="itemDetails" value={itemDetails} 
                onChange={(e)=> {
      
                    setItemDetails(e.target.value);
                }}/>
            </div>
            
            <Link to={"/view1"}><button type="submit" class="btn btn-primary" style={{marginLeft:"10px"}} onClick={(d)=>{EditAPIData(d);}}>UPDATE</button></Link>
            </div>
        </form>
        </div>
        </div>
       </div>
    )
}




