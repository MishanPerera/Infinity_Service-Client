//N.S. Jayasekara
//IT20175498
//Inventory Management Function
//Infinity Vehical Service Center

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import '../../myStyles.css'
import  Navbar  from './Navbar';



  //creting a method for stock report
  export default function  StockReport() {
    
  
    const [month, setMonth] = useState('');
    const [itemNo, setItemNo] = useState('');
    const [category, setCategory] = useState('');
    const [stockNo, setStockNo] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
  
  
    const  loadReport = async () => {
      await axios.get(`http://localhost:8070/inventory/report/${month}`).then((res) => {

        
        setItemNo(res.data.user.itemNo);
        setCategory(res.data.user.category);
        setStockNo(res.data.user.stockNo);
        setName(res.data.user.name);
        setBrand(res.data.user.name);
        setQuantity(res.data.user.quantity);
        
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
            <label for="inputmonth"  ><strong>MONTH</strong></label>
            </div>
            </div>
          <div className="itemsearch">
          <div class="col-auto">
            <input type="text" id="inputmonth" class="form-control" 
              minLength={4} maxLength={10} value={month}  placeholder="Enter Month" required 
              onChange={(e)=>{

                setMonth(e.target.value);

            }}  />

          </div>
          </div>
          <div class="d-grid gap-2 d-md-flex justify-content-md-end">
               <button class="btn btn-primary me-md-2" type="submit" onClick={loadReport}>GENERATE</button>
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


