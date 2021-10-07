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
    //fetching all the stock details
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
    <h1 className="text-white">INVENTORY MANAGEMENT</h1>
    </center>
    <br></br><br></br>
    <center><h5 className="text-white">STOCK DETAILS</h5></center>
    <br></br>
    <div>
        <table className="table table-striped table-hover table-sm caption-top" style={{  background: "#BBDEFB" }} >
            <thead>
                <tr>
                    <th className="text-center" scope="col">ITEM NO</th>
                    <th className="text-center" scope="col">STOCK NO</th>
                    <th className="text-center" scope="col">CATEGORY</th>
                    <th className="text-center" scope="col">NAME</th>
                    <th className="text-center" scope="col">BRAND</th>
                    <th className="text-center" scope="col">DATE</th>
                    <th className="text-center" scope="col">VOLUME (ml)</th>
                    <th className="text-center" scope="col">QUANTITY</th>
                    <th className="text-center" scope="col">SUPPLIER NAME</th>
                    <th className="text-center" scope="col">BUYING PRICE (Rs)</th>
                </tr>
            </thead>


            <tbody>
            {items.map((items) => {
                    
                return (
                    <tr >
                        <td className="text-center" >{items.itemNo}</td>
                        <td className="text-center">{items.stockNo}</td>
                        <td className="text-center">{items.category}</td>
                        <td className="text-center">{items.name}</td>
                        <td className="text-center">{items.brand}</td>
                        <td className="text-center">{items.date}</td>
                        <td className="text-center">{items.volume}</td>
                        <td className="text-center">{items.quantity}</td>
                        <td className="text-center">{items.supplierName}</td>
                        <td className="text-center">{items.buyingPrice}</td>
                            
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