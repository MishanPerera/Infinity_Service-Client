import React,{useState} from "react";
import axios from "axios";
import '../../addStyle.css'
import NavBar from "./NavBar";
import '../../NavBar.css';

export default function AddAgreement(){

    const [supplierNo, setSupplierNo] = useState("");
    const [companyName, setCompanyName] = useState("");
    const [agreeDate, setAgreeDate] = useState("");
    const [validTimePeriod, setValidTimePeriod] = useState("");
    const [itemDetails, setItemDetails] = useState("");

    function sentData(e){
        e.preventDefault();
        
        const newAgreement ={
            supplierNo,
            companyName,
            agreeDate,
            validTimePeriod,
            itemDetails
        }

        axios.post("http://localhost:8070/agreement/add",newAgreement).then(()=>{
            alert("Agreement Added")
            window.location.reload(false);
            setSupplierNo("");
            setCompanyName("");
            setAgreeDate("");
            setValidTimePeriod("");
            setItemDetails("");
            
        }).catch((err)=>{
            alert(err)
        })
        
    }

    return(

        <div>
            <NavBar/>
        
        <div class="lft">
        <center>
            <h1 className="text-white" style={{marginTop:"-30px"}}>SUPPLIER MANAGEMENT</h1>
            </center><br/>
            <center>
      <h5 className="text-white"  >ADD AGREEMENT</h5>
    </center>
        <div className="container">
        
         
       
    <br></br>

       
       <div style={{  background: "#BBDEFB", width:"1000px", marginLeft:"-40px" }}><br></br>
        <form onSubmit={sentData}>
        <br></br>
            <div className="form-group">
                <label for="SupplierNo" className="label" style={{marginLeft:"6px"}}>Supplier No. : </label>
                <input type="text" class="form-control" id="SupplierNo" placeholder="Enter Supplier Number"
                onChange={(e)=>{
                    setSupplierNo(e.target.value);
                }}/>
            </div>
                    <br/>
            <div class="form-group">
                <label for="CompanyName" className="label" style={{marginLeft:"6px"}}>Company Name : </label>
                <input type="text" className="form-control" id="CompanyName" placeholder="Enter Company Name"
                onChange={(e)=>{
                    setCompanyName(e.target.value);
                }}/>
            </div>
                    <br/>
            <div className="form-group">
                <label for="AgreeDate" className="label" style={{marginLeft:"6px"}}>Agreement Date : </label>
                <input type="date" className="form-control" id="AgreeDate" placeholder="Enter Agreement Date"
                onChange={(e)=>{
                    setAgreeDate(e.target.value);
                }}/>
            </div>
                    <br/>
            <div class="form-group">
                <label for="ValidTimePeriod" className="label" style={{marginLeft:"6px"}}>Valid Time Period : </label>
                <input type="text" class="form-control" id="ValidTimePeriod" placeholder="Enter Valid Time Period"
                onChange={(e)=>{
                    setValidTimePeriod(e.target.value);
                }}/>
            </div>
                    <br/>
            <div className="form-group">
                <label for="ItemDetails" className="label" style={{marginLeft:"6px"}}>Item Details: </label>
                <input type="text" className="form-control" id="ItemDetails" placeholder="Enter Item Details"
                onChange={(e)=>{
                    setItemDetails(e.target.value);
                }}/>
            </div>
                    <br/>
            <center><button type="submit" class="btn btn-primary">Submit</button></center><br/>

        </form>
        
        </div> 
        </div>
        </div>
        </div>
        
    )
}