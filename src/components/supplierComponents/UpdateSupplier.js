import React,{ useState, useEffect } from 'react';
import axios from 'axios'
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom'
import '../../addStyle.css'
import NavBar from "./NavBar";
import '../../NavBar.css';

export default function UpdateSupplier(){
    const { id } = useParams();

    const [supplierNo, setSupplierNo]= useState("");
    const [companyName, setCompanyName]= useState("");
    const [address, setAddress]= useState("");
    const [companyEmail, setCompanyEmail]= useState("");
    const [comPhone, setComPhone]= useState("");
    const [agentName, setAgentName]= useState("");
    const [agentPhone, setAgentPhone]= useState("");
    const [agentEmail, setAgentEmail]= useState("");

    useEffect(() =>{
        
        setSupplierNo(localStorage.getItem('ID'))
        setCompanyName(localStorage.getItem('name'))
        setAddress(localStorage.getItem('address'));
        setCompanyEmail(localStorage.getItem('email'));
        setComPhone(localStorage.getItem('phone'));
        setAgentName(localStorage.getItem('aname'));
        setAgentPhone(localStorage.getItem('aphone'));
        setAgentEmail(localStorage.getItem('aemail'));

    }, [] );

    const updateAPIData = (d) => {
        axios.put(`http://localhost:8070/supplier/update/${supplierNo}`, {
            
            address,
            companyEmail,
            comPhone,
            agentName,
            agentPhone,
            agentEmail,
        }) .then(()=>{
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
        <form className="addsuppliers">
        <center><h1 className="text-white" style={{marginTop:"-30px"}}><strong>SUPPLIER MANAGEMENT</strong></h1></center><br/>
    <br></br>
    <center>
      <h5 className="text-white">EDIT SUPPLIER DETAILS</h5>
    </center>
    <br></br>
    
    <div style={{  background: "#BBDEFB",  width:"1000px", marginLeft:"-40px" }}>
        <br></br>

        <div className="form-group">
                <label for="supplierNo" class="form-label" style={{marginLeft:"6px"}}><strong>Supplier No.</strong></label>
                <input type="text" class="form-control" id="supplierNo" value={supplierNo}
                onChange={(e)=> {
      
                    setSupplierNo(e.target.value);
      
                }}/>
            </div>
       
            <div class="mb-3">
                <label for="companyName" class="form-label" style={{marginLeft:"6px"}}><strong>Company Name</strong></label>
                <input type="text" class="form-control" id="companyName" value={companyName}
                onChange={(e)=> {
      
                    setCompanyName(e.target.value);
      
                }}
                />
            </div>
       
            <div class="mb-3">
                <label for="address" class="form-label" style={{marginLeft:"6px"}}><strong>Address</strong></label>
                <input type="text" class="form-control" id="address" value={address} 
                onChange={(e)=> {
      
                    setAddress(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="companyEmail" class="form-label" style={{marginLeft:"6px"}}><strong>Company Email</strong></label>
                <input type="email" class="form-control" id="companyEmail" value={companyEmail} 
                onChange={(e)=> {
      
                    setCompanyEmail(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="comPhone" class="form-label" style={{marginLeft:"6px"}}><strong>Company Phone No.</strong></label>
                <input type="text" class="form-control" id="comPhone" minLength={10} maxLength={10} value={comPhone} 
                onChange={(e)=> {
      
                    setComPhone(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="agentName" class="form-label" style={{marginLeft:"6px"}}><strong>Agent Name</strong></label>
                <input type="text" class="form-control" id="agentName" value={agentName} 
                onChange={(e)=> {
      
                    setAgentName(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="agentPhone" class="form-label" style={{marginLeft:"6px"}}><strong>Agent Phone No.</strong></label>
                <input type="text" class="form-control" id="agentPhone" minLength={10} maxLength={10} value={agentPhone} 
                onChange={(e)=> {
      
                    setAgentPhone(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="agentEmail" class="form-label" style={{marginLeft:"6px"}}><strong>Agent Email</strong></label>
                <input type="email" class="form-control" id="agentEmail" value={agentEmail} 
                onChange={(e)=> {
      
                    setAgentEmail(e.target.value);
                }}/>
            </div>

            <Link to={"/view2"}><button type="submit" class="btn btn-primary" style={{marginLeft:"10px"}} onClick={(d)=>{updateAPIData(d);}}>UPDATE</button></Link>

            <br></br>

            </div>
        </form>
        </div>
        </div>
</div>
    )
}
