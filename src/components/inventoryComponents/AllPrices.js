//N.S. Jayasekara
//IT20175498
//Inventory Management Function
//Infinity Vehical Service Center

import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../myStyles.css'
import  Navbar  from './Navbar';


//View  All Prices 
export default function AllPrices(){

    const [prices, setPrices] = useState([]);


// + adding the use
  useEffect(() => {
    function getData() {
        axios.get("http://localhost:8070/price/").then((res) => {
            setPrices(res.data);
           
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
    <center><h5 className="text-white">SELLING PRICE DETAILS</h5></center>
    <br></br>
    <div>
        <table className="table table-striped table-hover table-sm caption-top" style={{  background: "#BBDEFB" }} >
            <thead>
                <tr>
                    <th className="text-center" scope="col">ITEM NO</th>
                    <th className="text-center" scope="col">CATEGORY</th>
                    <th className="text-center" scope="col">NAME</th>
                    <th className="text-center" scope="col">BRAND</th>
                    <th className="text-center" scope="col">SELLING PRICE (Rs)</th>
                </tr>
            </thead>


            <tbody>
            {prices.map((prices) => {
                    
                return (
                    <tr >
                            
                        <td className="text-center" >{prices.itemNo}</td>
                        <td className="text-center">{prices.category}</td>
                        <td className="text-center">{prices.name}</td>
                        <td className="text-center">{prices.brand}</td>
                        <td className="text-center">{prices.sellingPrice}</td>
                            
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