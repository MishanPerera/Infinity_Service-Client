//N.S. Jayasekara
//IT20175498
//Inventory Management Function
//Infinity Vehical Service Center

import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import axios from "axios";
import {Row,Col} from "reactstrap";
import '../../myStyles.css'
import  Navbar  from './Navbar';

  //creting a method for view quantity of a number
  export default function Availability() {

       
  
    const [itemCode, setItemCode] = useState('');
    const [itemNo, setItemNo] = useState('');
    const [category, setCategory] = useState('');
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [date, setDate] = useState('');
    const [itemAvailability, setItemAvailability] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [readOnly, setreadOnly] = useState(true);
    const [showError, setshowError] = useState(false);
  
  
    const  loadAvailability = async () => {
      debugger
      await axios.get(`http://localhost:8070/availability/get/${itemCode}`).then((res) => {
        console.log(res.data)
        let total=0;

        res.data.count.map(item=>{
            total+=item.itemAvailability;
        })

        
        setItemNo(res.data.count[0].itemNo);
        setCategory(res.data.count[0].category);
        setName(res.data.count[0].name);
        setBrand(res.data.count[0].brand);
        setDate(res.data.count[0].date);
        setItemAvailability(total);
     
        
      }).catch((err) => {
        alert(err.message)
      })
    };

    const activate=()=>{
        setreadOnly(false)
    }
  
    //creting a method for reduce used part
    const getQuantity=()=>{
      let balance=0;
     if(itemAvailability<quantity){
      setshowError(true)
     }else{
      setshowError(false)
      balance=itemAvailability-quantity;
     }
  }
 

return (
  <div>

  <Navbar/>
    
    <div className="view">

  <center>
    <h1 class="text-white">INVENTORY MANAGEMENT</h1>
  </center>
    <br></br><br></br>
  <center>
    <h5 class="text-white">ITEM AVAILABILITY</h5>
  </center>
  <br></br>
  <br></br>
  
 

<div style={{  background: "#BBDEFB" }}>

      <div class="row g-3 align-items-center">
      <div className="itemsearchlable2">
        <div class="col-auto">
          <label for="inputitemNo"  ><strong>ITEM CODE</strong></label>
          </div>
          </div>
        <div className="itemsearch1">
        <div class="col-auto">
          <input type="text" id="inputitemNo" class="form-control" 
            minLength={6} maxLength={6} value={itemCode}  placeholder="Enter Item No" required 
            onChange={(e)=>{

              setItemCode(e.target.value);

          }}  />

        </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
             <button class="btn btn-primary me-md-2" type="submit" onClick={loadAvailability}>Search Availability</button>
        </div>

       
        
        <Row>
          <Col md={1}></Col>
          <Col md={10}>

          <br></br><br></br>
        <table class="table table-striped table-light table table-hover">
        <tbody>
              <tr>
                <td>ITEM NO: </td>
                <td>
                <input
                    type="text"
                    className="form-control"
                    id="itemNo"
                    readOnly
                    value={itemNo}
                   
                />
                </td>
              </tr>
              <tr>
                <td>NAME    :</td>
                <td>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    readOnly
                    value={name}
                   
                />
                </td>
              </tr>
              <tr>
                <td>QUANTITY    :</td>
                <td>
                <Row>
                  <Col md={11}>
                <input
                    type="text"
                    className="form-control"
                    id="quantity"
                    readOnly
                    value={quantity}
                    onChange={(e) => {
                    setQuantity(e.target.value);
                    }}
                />
                </Col>
                <Col md={1}>
                       <button class="btn btn-outline-success btn-sm" onClick={activate}>Edit</button>
                   </Col>
                </Row>
                {showError?
                <Row>
                  <label style={{color:"red"}}>Invalid quantity!</label>
                </Row>
                :null}
                </td>
              </tr>


              </tbody>
              </table>
        </Col>
        <Col md={1}></Col>
        </Row>

        <Row>
          <Col md={5}></Col>
          <Col md={5}>
          <button class="btn btn-success" type="submit" onClick={getQuantity}>GET</button>
          </Col>
          <Col md={2}></Col>
      </Row>

      
        
         
          
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
              <td>BRAND       :</td>
              <td>{brand}</td>
            </tr>
            <tr>
              <td>DATE       :</td>
              <td>{date}</td>
            </tr>
            <tr>
              <td>AVAILABILITY       :</td>
              <td>{itemAvailability}</td>
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


