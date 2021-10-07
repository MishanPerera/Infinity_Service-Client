import React,{useState} from "react";
import axios from "axios";
import '../../addStyle.css'
import NavBar from "./NavBar";
import '../../NavBar.css';

export default function AddOrder(){

    const [orderNo, setOrderNo] = useState("");
    const [supplierNo, setSupplierNo] = useState("");
    const [itemCodes, setItemCodes] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [cost, setCost] = useState("");
    const [paymentDate, setPaymentDate] = useState("");

    function sentData(e){
        e.preventDefault();
        
        const newOrder ={
            orderNo,
            supplierNo,
            itemCodes,
            orderDate,
            cost,
            paymentDate
        }

        axios.post("http://localhost:8070/order/add",newOrder).then(()=>{
            alert("Order Added")
            window.location.reload(false);
            setOrderNo("");
            setSupplierNo("");
            setItemCodes("");
            setOrderDate("");
            setCost("");
            setPaymentDate("");
            
        }).catch((err)=>{
            alert(err)
        })
        
    }

    return(
        
        <div>
            <NavBar/>

        <div class="lft">

        <div className="container">  
        <center>
            <h1 className="text-white" style={{marginTop:"-30px"}}>SUPPLIER MANAGEMENT</h1>
            </center><br/>
            <center>
      <h5 className="text-white"  >ADD ORDER</h5>
    </center>
    <br></br>
       <div style={{  background: "#BBDEFB", width:"1000px", marginLeft:"-40px"  }}><br></br>
        <form onSubmit={sentData}>
           <br></br> 
        <div className="form-group">
                <label for="OrderNo" className="label" style={{marginLeft:"6px"}}>Order No. : </label> <br/> 
                <input type="text" class="form-control" id="OrderNO" placeholder="Enter Order Number"
                onChange={(e)=>{
                    setOrderNo(e.target.value);
                }}/>
            </div>
                    <br/>
            
                    <div class="form-group">
                <label for="supplierNo" className="label" style={{marginLeft:"6px"}}>Supplier No. : </label> <br/>
                <input type="text" className="form-control" id="supplierNo" placeholder="Enter Supplier No."
                onChange={(e)=>{
                    setSupplierNo(e.target.value);
                }}/>
            </div>
                    <br/>

            <div class="form-group">
                <label for="ItemCodes" className="label" style={{marginLeft:"6px"}}>Item Codes : </label>
                <input type="text" className="form-control" id="ItemCodes" placeholder="Enter Item Codes"
                onChange={(e)=>{
                    setItemCodes(e.target.value);
                }}/>
            </div>
                    <br/>
            <div className="form-group">
                <label for="OrderDate" className="label" style={{marginLeft:"6px"}}>Order Date : </label>
                <input type="date" className="form-control" id="OrderDate" placeholder="Enter Order Date"
                onChange={(e)=>{
                    setOrderDate(e.target.value);
                }}/>
            </div>
                    <br/>
            <div class="form-group">
                <label for="cost" className="label" style={{marginLeft:"6px"}}>Cost (Rs): </label>
                <input type="text" class="form-control" id="cost" placeholder="Enter Cost"
                onChange={(e)=>{
                    setCost(e.target.value);
                }}/>
            </div>
                    <br/>
            <div className="form-group">
                <label for="PaymentDate" className="label" style={{marginLeft:"6px"}}>Payment Date: </label>
                <input type="date" className="form-control" id="PaymentDate" placeholder="Enter Item Details"
                onChange={(e)=>{
                    setPaymentDate(e.target.value);
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