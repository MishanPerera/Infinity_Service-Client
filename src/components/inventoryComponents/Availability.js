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
    const [newQuantity, setnewQuantity] = useState(0);
  
  
  
    const  loadAvailability = () => {
     
      axios.get(`http://localhost:8070/availability/get/${itemCode}`).then((res) => {
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
  
    //creting a function for reduce used part
    const getQuantity=()=>{
      let balance=0;
      if(itemAvailability<quantity){

        setshowError(true)
      }else{
        setshowError(false)
        balance=itemAvailability-quantity;
        setnewQuantity(balance)
        updateData();
      }
      
    
    }

      //creating function to update new availability
      const updateData = async () => {
        
        const newcount = {
            itemAvailability:itemAvailability-quantity
        };

              await axios
                .put(`http://localhost:8070/availability/update/${itemCode}`, newcount)
                .then(() => {
                  alert("Successfully New Availability Updated !");
                  window.location.reload(true);
                })
                .catch((err) => {
                  alert(err);
                });
                loadAvailability();

        }
 

return (
  <div>

  <Navbar/>
    
    <div className="view">

  <center>
    <h1 className="text-white">INVENTORY MANAGEMENT</h1>
  </center>
    <br></br><br></br>
  <center>
    <h5 className="text-white">ITEM AVAILABILITY</h5>
  </center>
  <br></br>
  <br></br>
  
 

<div style={{  background: "#BBDEFB" }}>

      <div className="row g-3 align-items-center">
        <div className="itemsearchlable2">
          <div className="col-auto">
            <label for="inputitemNo"  ><strong>ITEM CODE</strong></label>
          </div>
        </div>
        <div className="itemsearch1">
          <div className="col-auto">
            <input type="text" id="inputitemNo" className="form-control" 
            minLength={6} maxLength={6} value={itemCode}  placeholder="Enter Item No" required 
            onChange={(e)=>{

              setItemCode(e.target.value);

            }}  />

        </div>
      </div>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
             <button className="btn btn-primary me-md-2" type="submit" onClick={loadAvailability}>Search Availability</button>
        </div>

       
        
        <Row>
          <Col md={1}></Col>
          <Col md={10}>

          <br></br><br></br>
        <table className="table table-striped table-light table table-hover">
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
                    readOnly={readOnly}
                    value={quantity}
                    onChange={(e) => {
                    setQuantity(e.target.value);
                    }}
                />
                </Col>
                <Col md={1}>
                       <button className="btn btn-outline-success btn-sm" onClick={activate}>Edit</button>
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
          <button className="btn btn-success" type="submit" onClick={getQuantity}>GET</button>
          </Col>
          <Col md={2}></Col>
      </Row>

      
        
         
          
      </div>

      <br></br><br></br> <br></br><br></br>

      <table className="table table-striped table-light table table-hover">
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


