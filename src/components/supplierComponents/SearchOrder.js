import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import '../../SearchStyle.css';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import '../../NavBar.css';


  
  export default function  SearchOrder() {
    
  
    const [orderNo, setOrderNo] = useState("");
    const [supplierNo, setSupplierNo] = useState("");
    const [itemCodes, setItemCodes] = useState("");
    const [orderDate, setOrderDate] = useState("");
    const [cost, setCost] = useState("");
    const [paymentDate, setPaymentDate] = useState("");
  
    
  
    const  loadOrderDetails = async () => {
      await axios.get(`http://localhost:8070/order/get/${supplierNo}`).then((res) => {

        setOrderNo(res.data.user.orderNo);
        setSupplierNo(res.data.user.supplierNo);
        setItemCodes(res.data.user.itemCodes);
        setOrderDate(res.data.user.orderDate);
        setCost(res.data.user.cost);
        setPaymentDate(res.data.user.paymentDate);
        
      }).catch((err) => {
        alert(err.message)
      })
    };
  

    const deleteOrder=(supplierNo) =>{
        axios.delete(`http://localhost:8070/order/delete/${supplierNo}`).then(()=>{
          alert("Success");
        window.location.reload(false);
        })
      }
       
    const setData = () => {
       
        localStorage.setItem('Ono',orderNo);
        localStorage.setItem('OID',supplierNo);
        localStorage.setItem('Odate',orderDate);
        localStorage.setItem('Ocodes',itemCodes);
        localStorage.setItem('Otype',cost);
        localStorage.setItem('Opdate',paymentDate);
    }

  return (
    
    <div>
            <NavBar/>
    
    <div class="lft">
<div className="container"></div>
<center><h1 className="text-white" style={{marginTop:"-30px"}}>SUPPLIER MANAGEMENT</h1></center><br/>

    
    <center>
      <h5 className="text-white">ORDER DETAILS</h5>
    </center>
    <br></br>

<div style={{  background: "#BBDEFB",  width:"1000px", marginLeft:"-40px"  }}>

        <div class="row g-3 align-items-center">
        <div className="orderrearchlable">
          <div class="col-auto">
          <br></br>
            <label for="inputsupplierNo"  ><strong>Supplier No.</strong></label>
            </div>
            </div>
          <div className="ordersearch">
          <div class="col-auto">
            <input type="text" id="inputSupplierNo" class="form-control" 
              minLength={6} maxLength={6} value={supplierNo}  placeholder="Enter supplier No" required 
              onChange={(e)=>{

                setSupplierNo(e.target.value);

            }}  />

          </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
               <button class="btn btn-primary me-md-2" type="submit" onClick={loadOrderDetails}>Search Supplier</button>
          </div>
          <br></br><br></br>
           
            
        </div>

        <br></br><br></br> 

        <table class="table table-striped table-light table table-hover">
        <tbody>

              <tr>
                <td>Order No:</td>
                <td>{orderNo}</td>
              </tr>
              <tr>
                <td>Supplier No: </td>
                <td>{supplierNo}</td>
              </tr>
              
              <tr>
                <td>Order Date:</td>
                <td>{orderDate}</td>
              </tr>
              <tr>
                <td>Item Codes:</td>
                <td>{itemCodes}</td>
              </tr>
              <tr>
                <td>Cost (Rs):</td>
                <td>{cost}</td>
              </tr>
              <tr>
                <td>Payment Date:</td>
                <td>{paymentDate}</td>
              </tr>
            </tbody>
             
        </table>
        <br></br>
        <center><button type="button" class="btn btn-primary" onClick={() =>  deleteOrder(`${supplierNo}`)} style={{float:"left", marginLeft:"280px", width:"150px"}}>Delete</button></center>
        <center><Link to={"/UpdateReport/" +supplierNo}><button type="button" class="btn btn-primary" onClick={() =>setData()} style={{marginLeft:"-200px", width:"150px"}} >Edit</button></Link></center><br/>
        <br></br>
        <br></br>
        <br></br>
      

        </div>
    </div>
    </div>
  );
}