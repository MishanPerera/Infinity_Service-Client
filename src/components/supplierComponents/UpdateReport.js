import React,{ useState, useEffect } from 'react';
import axios from 'axios'
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom'
import '../../addStyle.css'
import NavBar from "./NavBar";
import '../../NavBar.css';

export default function UpdateReport(){
    const { id } = useParams();

    const [orderNo, setOrderNo]= useState("");
    const [supplierNo, setSupplierNo]= useState("");
    const [orderDate, setOrderDate]= useState("");
    const [itemCodes, setItemCodes]= useState("");
    const [cost, setCost]= useState("");
    const [paymentDate, setPaymentDate]= useState("");

    useEffect(() =>{
        
        setOrderNo(localStorage.getItem('Ono'))
        setSupplierNo(localStorage.getItem('OID'))
        setOrderDate(localStorage.getItem('Odate'))
        setItemCodes(localStorage.getItem('Ocodes'));
        setCost(localStorage.getItem('Otype'));
        setPaymentDate(localStorage.getItem('Opdate'));

    }, [] );

    const makeAPIData = (d) => {
        axios.put(`http://localhost:8070/order/update/${supplierNo}`, {
            orderNo,
            supplierNo,
            orderDate,
            itemCodes,
            cost,
            paymentDate,
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
      <h5 className="text-white">EDIT SUPPLIER DETAILS</h5>
    </center>
    <br></br>        

    <div style={{  background: "#BBDEFB",  width:"1000px", marginLeft:"-40px" }}>
        <br></br>

        <div className="mb-3">
        <label for="orderNo" class="form-label"style={{marginLeft:"6px"}}><strong>Order No.</strong></label>
                <input type="text" class="form-control" id="orderNo" value={orderNo}
                onChange={(e)=> {
      
                    setOrderNo(e.target.value);
      
                }}/>
            </div>

        <div class="mb-3">
                <label for="supplierNo" class="form-label"style={{marginLeft:"6px"}}><strong>Supplier No.</strong></label>
                <input type="text" class="form-control" id="supplierNo" value={supplierNo}
                onChange={(e)=> {
      
                    setSupplierNo(e.target.value);
      
                }}/>
            </div>
       
            <div class="mb-3">
                <label for="orderDate" class="form-label"style={{marginLeft:"6px"}}><strong>Order Date</strong></label>
                <input type="date" class="form-control" id="orderDate" value={orderDate}
                onChange={(e)=> {
      
                    setOrderDate(e.target.value);
      
                }}
                />
            </div>
       
            <div class="mb-3">
                <label for="itemCodes" class="form-label"style={{marginLeft:"6px"}}><strong>Item Codes</strong></label>
                <input type="text" class="form-control" id="itemCodes" value={itemCodes} 
                onChange={(e)=> {
      
                    setItemCodes(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="cost" class="form-label"style={{marginLeft:"6px"}}><strong>Cost (Rs)</strong></label>
                <input type="text" class="form-control" id="cost" value={cost} 
                onChange={(e)=> {
      
                    setCost(e.target.value);
                }}/>
            </div>

            <div class="mb-3">
                <label for="paymentDate" class="form-label"style={{marginLeft:"6px"}}><strong>Payment Date</strong></label>
                <input type="date" class="form-control" id="paymentDate" value={paymentDate} 
                onChange={(e)=> {
      
                    setPaymentDate(e.target.value);
                }}/>
            </div>

            <Link to={"/view3"}><button type="submit" class="btn btn-primary" style={{marginLeft:"10px"}} onClick={(d)=>{makeAPIData(d);}}>UPDATE</button></Link>
            <br></br>
            </div>
        </form>
        </div>
        </div>
       </div>
    )
}