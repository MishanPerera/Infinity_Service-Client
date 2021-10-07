//N.S. Jayasekara
//IT20175498
//Inventory Management Function
//Infinity Vehical Service Center

import React, { useState, useEffect } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import { Link } from "react-router-dom";
import  Navbar  from './Navbar';

export default function StockReport() {
  const [inventory, setInventory] = useState([]);
  

//function to get data
  useEffect(() => {
    function getData() {
        axios.get("http://localhost:8070/inventory/").then((res) => {
            setInventory(res.data);
            
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
        <center>
          <h5 className="text-white">STOCK DETAILS REPORT</h5>
        </center>
      <br></br>
      <div class="component-body">
        
      <div className="container-fluid">
        <div class = "d-flex justify-content-center px-auto">
          <MaterialTable style={{background:"#BBDEFB"}}
            title="Details of Inventory"
          
              columns={[
                {
                  title: "Item No",
                  field: "itemNo",
                  type: "string",
                },
                { title: "Stock No", 
                  field: "stockNo", 
                  type: "string" 
                },
                { title: "Category",
                  field: "category", 
                  type: "string" 
                },
                { title: "Name", 
                  field: "name", 
                  type: "string" 
                },
                { title: "Brand", 
                  field: "brand", 
                  type: "string" 
                },
                { title: "Date", 
                  field: "date", 
                  type: "string" 
                },
                { title: "Volume", 
                  field: "volume", 
                  type: "string" 
                },
                { title: "Quantity", 
                  field: "quantity", 
                  type: "number" 
                },      
                {
                  title: "Supplier Name",
                  field: "supplierName",
                  type: "string",
                },
                { title: "Buying Price", 
                  field: "buyingPrice", 
                  type: "number" },
                
              
          
          ]}
          data={inventory}
          options={{
            sorting: true,
            actionsColumnIndex: -1,
            exportButton: true,
          }}
        />
          </div>
      </div>
      </div>
    </div>
  </div>
  );
  
}
