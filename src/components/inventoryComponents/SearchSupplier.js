//N.S. Jayasekara
//IT20175498
//Inventory Management Function
//Infinity Vehical Service Center

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import '../../myStyles.css'
import  Navbar  from './Navbar';


  //creting a function for search suppliers
  export default function  SearchSupplier() {
    
  
    const [itemCode, setItemCode] = useState('');
    const [itemNo, setItemNo] = useState('');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [supplierName, setSupplierName] = useState('');
  
    
  
    const  loadSellerDetails = async () => {
      await axios.get(`http://localhost:8070/inventory/get/${itemCode}`).then((res) => {

        
        setItemNo(res.data.user.itemNo);
        setCategory(res.data.user.category);
        setName(res.data.user.name);
        setSupplierName(res.data.user.supplierName);
        
      }).catch((err) => {
        alert(err.message)
      })
    };
  

  return (

    <div>

    <Navbar/>
    
    
      <div className="view">

          <center>
            <h1 class="text-white">INVENTORY MANAGEMENT</h1>
          </center>
            <br></br><br></br>
          <center>
            <h5 class="text-white">SUPPLIER DETAILS</h5>
          </center>
          <br></br>
          <br></br>
    
   

    <div style={{  background: "#BBDEFB" }}>

        <div class="row g-3 align-items-center">
        <div className="itemsearchlable">
          <div class="col-auto">
            <label for="inputitemNo"  ><strong>ITEM CODE</strong></label>
          </div>
        </div>
        <div className="itemsearch">
        <div class="col-auto">
            <input type="text" id="inputitemNo" class="form-control" 
              minLength={6} maxLength={6} value={itemCode}  placeholder="Enter Item No" required 
              onChange={(e)=>{

              setItemCode(e.target.value);

            }}  />

          </div>
        </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
               <button class="btn btn-primary me-md-2" type="submit" onClick={loadSellerDetails}>Search Supplier</button>
          </div>
          <br></br><br></br>
           
            
        </div>

        <br></br><br></br> <br></br><br></br>

        <table class="table table-striped table-light table table-hover">
          <tbody>
              <tr>
                <td>ITEM NO: </td>
                <td>{itemNo}</td>
              </tr>
              <tr>
                <td>NAME    :</td>
                <td>{name}</td>
              </tr>
              <tr>
                <td>CATEGORY    :</td>
                <td>{category}</td>
              </tr>
              <tr>
                <td>SUPPLIER NAME       :</td>
                <td>{supplierName}</td>
              </tr>
              
          </tbody>
             
        </table>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      

        </div>
    </div>
  </div>
  );
}


