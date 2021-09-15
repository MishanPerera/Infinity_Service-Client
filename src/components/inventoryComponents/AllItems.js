//N.S. Jayasekara
//IT20175498
//Inventory Management Function
//Infinity Vehical Service Center

import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../myStyles.css'
import  Navbar  from './Navbar';

//View  All Items in database
export default function AllItems(){

    const [items, setItems] = useState([]);


   


  // + adding the use
  useEffect(() => {
    function getData() {
        axios.get("http://localhost:8070/inventory/").then((res) => {
            setItems(res.data);
            
        }).catch((error) => {
            alert(error.message);
        })
    }
    getData();


}, [])
   

   return (
    <div>

    <Navbar/>

  
    <div className="view" >
    <center>
    <h1 class="text-white">INVENTORY MANAGEMENT</h1>
    </center>
    <br></br><br></br>
    <center><h5 class="text-white">STOCK DETAILS</h5></center>
    <br></br>
    <div>
        <table class="table table-striped table-hover table-sm caption-top" style={{  background: "#BBDEFB" }} >
            <thead>
                <tr>
                    <th class="text-center" scope="col">ITEM NO</th>
                    <th class="text-center" scope="col">STOCK NO</th>
                    <th class="text-center" scope="col">CATEGORY</th>
                    <th class="text-center" scope="col">NAME</th>
                    <th class="text-center" scope="col">BRAND</th>
                    <th class="text-center" scope="col">DATE</th>
                    <th class="text-center" scope="col">VOLUME (ml)</th>
                    <th class="text-center" scope="col">QUANTITY</th>
                    <th class="text-center" scope="col">SUPPLIER NAME</th>
                    <th class="text-center" scope="col">BUYING PRICE (Rs)</th>
                </tr>
            </thead>


            <tbody>
            {items.map((items) => {
                    
                    return (
                        <tr >
                            <td class="text-center" >{items.itemNo}</td>
                            <td class="text-center">{items.stockNo}</td>
                            <td class="text-center">{items.category}</td>
                            <td class="text-center">{items.name}</td>
                            <td class="text-center">{items.brand}</td>
                            <td class="text-center">{items.date}</td>
                            <td class="text-center">{items.volume}</td>
                            <td class="text-center">{items.quantity}</td>
                            <td class="text-center">{items.supplierName}</td>
                            <td class="text-center">{items.buyingPrice}</td>
                            
                        </tr>
                    );
                    
                })}
            </tbody>
             
        </table>
        <br></br>
    </div>

</div>
</div>


   );
}