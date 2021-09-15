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

//Search Selling price
//Update Selling price
//Delete item 

  export default function  SearchItems() {
    
      
        const [itemCode, setItemCode] = useState('');
        const [itemNo, setItemNo] = useState('');
        const [category, setCategory] = useState('');
        const [name, setName] = useState('');
        const [brand, setBrand] = useState('');
        const [sellingPrice, setSellingPrice] = useState('');
        const [readOnly, setreadOnly] = useState(true);
      
    
//creting a method for retrieve data

    const  loadItemDetails = async () => {
      await axios.get(`http://localhost:8070/price/get/${itemCode}`).then((res) => {
          console.log(res)
        
              setItemNo(res.data.price.itemNo);
              setCategory(res.data.price.category);
              setName(res.data.price.name);
              setBrand(res.data.price.brand);
              setSellingPrice(res.data.price.sellingPrice);
        
      }).catch((err) => {
        window.alert('Item not found!')
        alert(err.message)
      })
    };
  

//creting a method for set readonly
    const activate=()=>{
        setreadOnly(false)
    }


//creting a method for update selling price

    const onSubmit = async (e) => {
        e.preventDefault();
    
        const newprice = {
            itemNo,
            category,
            name,
            brand,
            sellingPrice
        };
        console.log(newprice)
    
              await axios
                .put(`http://localhost:8070/price/update/${itemCode}`, newprice)
                .then(() => {
                  alert("Price updated Successfully");
                  window.location.reload(true);
                })
                .catch((err) => {
                  alert(err);
                });
            };


//creting a method for delete items

      const  onDelete = async () => {
      
              await axios
                .delete(`http://localhost:8070/price/delete/${itemCode}`)
                .then(() => {
                  window.alert('Do you want to delete the selected item?')
                  alert("Item Deleted Successfully");
                  window.location.reload(true);
                })
                .catch((err) => {
                  alert(err);
                });
            };



  return (

    <div>

    <Navbar/>
    
    
          <div className="view">

                <center>
                  <h1 class="text-white">INVENTORY MANAGEMENT</h1>
                </center>
                  <br></br>
                <center>
                  <h5 class="text-white">ITEM DETAILS</h5>
                </center>
                <br></br>
            
          

                  <div style={{  background: "#BBDEFB" }}>


                          
                          <div class="row g-3 align-items-center">
                          <div className="itemsearchlable">
                            <div class="col-auto">
                              <label for="inputitemCode"  ><strong>ITEM CODE</strong></label>
                              </div>
                              </div>
                            <div className="itemsearch">
                            <div class="col-auto">
                              <input type="text" id="inputitemCode" class="form-control" 
                                minLength={6} maxLength={6} value={itemCode}  placeholder="Enter Item No" required 
                                onChange={(e)=>{

                                  setItemCode(e.target.value);

                              }}  />

                            </div>
                                </div>
                                  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                  <button class="btn btn-primary me-md-2" type="submit" onClick={loadItemDetails}>Search Supplier</button>
                                </div>
                              <br></br><br></br>
                            
                              
                          </div>

                              <br></br><br></br> 
                                <Row>
                                    <Col md={1}></Col>
                                    <Col md={10}>
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
                                                    onChange={(e) => {
                                                    setItemNo(e.target.value);
                                                    }}
                                                />
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>NAME    :</td>
                                                <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="itemNo"
                                                        readOnly
                                                        value={name}
                                                        onChange={(e) => {
                                                        setItemNo(e.target.value);
                                                        }}
                                                />
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>CATEGORY    :</td>
                                                    <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="itemNo"
                                                        readOnly
                                                        value={category}
                                                        onChange={(e) => {
                                                        setItemNo(e.target.value);
                                                        }}
                                                />
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>BRAND       :</td>
                                                    <td>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="itemNo"
                                                        readOnly
                                                        value={brand}
                                                        onChange={(e) => {
                                                        setItemNo(e.target.value);
                                                        }}
                                                />
                                                </td>
                                                </tr>
                                                <tr>
                                                    <td>SELLING PRICE       :</td>
                                                    <td>
                                                      <Row>
                                                      <Col md={11}>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="itemNo"
                                                        readOnly={readOnly}
                                                        value={sellingPrice}
                                                        onChange={(e) => {
                                                        setSellingPrice(e.target.value);
                                                        }}
                                                    />
                                                </Col>
                                                <Col md={1}>
                                                      <button class="btn btn-outline-success btn-sm" onClick={activate}>Edit</button>
                                                </Col>
                                                </Row>
                                                </td>
                                                </tr>
                                    
                                        </tbody>
                              
                                    </table>



                          </Col>
                          <Col md={1}></Col>
                          </Row>
                          <br></br>
                        
                      
                        <Row>
                            <Col md={9}></Col>
                            <Col md={1}>
                            <button class="btn btn-primary me-md-2" type="submit" onClick={onSubmit}>Update</button>
                            </Col>
                            <Col md={1}>
                            <button class="btn btn-danger" type="submit" onClick={onDelete}>Delete</button>
                            </Col>
                            <Col md={1}></Col>
                        </Row>
                        
                        <br/>
                          
                  </div>
            </div>
            </div>
        );
    }


