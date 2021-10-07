import React, {useState} from "react";
import axios from "axios";
import '../../Styles.css';
import Navbar from "./Navbar";

export default function AddPayment(){

    const [handoverDate, sethandoverDate] = useState("");
    const [vNo, setvNo] = useState("");
    const [cusName, setcusName] = useState("");
    const [amount, setamount] = useState("");

    function sendData(e){
        e.preventDefault();
           
        const newPayment={
            handoverDate,
            vNo,
            cusName,
            amount
        }
        
        axios.post("http://localhost:8070/payment/add",newPayment).then(()=>{
            alert("Payment Added")
            sethandoverDate("");
            setvNo("");
            setcusName("");
            setamount("");
            window.location.reload(true);

        }).catch((err)=>{
            alert(err)
        })
    }
    return(
      <div>
     
       <div className="addpayment">
        <br></br> 
         <h4 class="text-white"> ADD PAYMENT DETAILS </h4>
         <br></br><br></br>
           <form className="row g-3 needs-validation" novalidate   style={{  background: "#BBDEFB" }}  onSubmit = {sendData}>
  <div className="table table-striped">
    <label for="handoverDate" className="form-label">Service Date</label>
    <input type="date" className="form-control" id="handoverDate" value={handoverDate} required onChange={(e)=>{

    sethandoverDate(e.target.value);}}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
  <div className="table table-striped">
    <label for="vNo" className="form-label">Vehicle No</label>
    <input type="text" className="form-control" id="vNo" value={vNo} required onChange={(e)=>{

    setvNo(e.target.value);}}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="table table-striped">
    <label for="cusName" className="form-label">Customer Name</label>
<input type="text" className="form-control" id="cusName" value={cusName} required onChange={(e)=>{

    setcusName(e.target.value);}}/>
    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  <div className="table table-striped">
    <label for="amount" className="form-label">Payment(Rs)</label>
    <input type="text" className="form-control" id="amount" value={amount} required onChange={(e)=>{

    setamount(e.target.value);}}/>

    <div className="valid-feedback">
      Looks good!
    </div>
  </div>
  
 <br></br>
 <center>
  <div className="col-12">
    <button className="btn btn-primary" type="submit">SUBMIT</button>
  </div>
  </center>
</form>
       </div> 
       </div>
    )    
}
