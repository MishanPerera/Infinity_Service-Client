//N.S. Jayasekara
//IT20175498
//Inventory Management Function
//Infinity Vehical Service Center

import React ,{useEffect, useState} from "react";
import axios from "axios";
import '../../myStyles.css'


//creting a method for add data to stock
export default function AddItems(){
    
    const [itemNo, setitemNo] = useState("");
    const [stockNo, setstockNo] = useState("");
    const [category, setcategory] = useState("");
    const [name, setname] = useState("");
    const [brand, setbrand] = useState("");
    const [date, setdate] = useState("");
    const [volume, setvolume] = useState("");
    const [quantity, setquantity] = useState("");
    const [supplierName, setsupplierName] = useState("");
    const [buyingPrice, setbuyingPrice] = useState("");


    function sendData(e){
        e.preventDefault();
           

   
    
        const newStock={
            itemNo,
            stockNo,
            category,
            name,
            brand,
            date,
            volume,
            quantity,
            supplierName,
            buyingPrice
        }

        axios.post("http://localhost:8070/inventory/add",newStock).then(()=>{
            alert("Stock Added")
            setitemNo("");
            setstockNo("");
            setcategory("");
            setname("");
            setbrand("");
            setdate("");
            setvolume("");
            setquantity("");
            setsupplierName("");
            setbuyingPrice("");
            window.location.reload(true);

        }).catch((err)=>{
            alert(err)
        })

           

//creting a method for add data to Quantity

            axios.post("http://localhost:8070/availability/add",newStock).then(()=>{
            alert("Quantity Updated")
        })
        .catch((err) => {
            alert(err);
          });
        }    

    return(

        <div>

        {/* <Navbar/> */}
    
        <div className="additemsform" >

            <center>
            <h5 class="text-white">ADD NEW STOCKS</h5>
            </center>
            <br></br>

            <form style={{  background: "#BBDEFB" }}  onSubmit = {sendData}>
            
            <br></br>

            <div className="form-group">
                <label for="itemNo">&nbsp;&nbsp;<strong>Item No</strong></label>
                <input type="text" className="form-control" id="itemNo" placeholder="Enter Item No" minLength={5} maxLength={6}  required value={itemNo} onChange={(e)=>{

                    setitemNo(e.target.value);

                }}  />
            </div>
                <br></br>
            <div className="form-group">
                <label for="stockNo">&nbsp;&nbsp;<strong>Stock No</strong></label>
                <input type="text" className="form-control" id="stockNo" placeholder="Enter Stock No" minLength={4} maxLength={4}  required value={stockNo} onChange={(e)=>{

                    setstockNo(e.target.value);

                }} />
            </div>
                <br></br>
            <div className="form-group">
                <label for="category">&nbsp;&nbsp;<strong>Category</strong></label>
                <input type="text" className="form-control" id="category" placeholder="Enter Category" required value={category} onChange={(e)=>{

                setcategory(e.target.value);

                }} />
            </div>
                <br></br>
            <div className="form-group">
                <label for="name">&nbsp;&nbsp;<strong>Name</strong></label>
                <input type="text" className="form-control" id="name" placeholder="Enter Item Name" minLength={5} maxLength={30}  required value={name} onChange={(e)=>{

                setname(e.target.value);

                }} />
            </div>
                <br></br>
            <div className="form-group">
                <label for="brand">&nbsp;&nbsp;<strong>Brand</strong></label>
                <input type="text" className="form-control" id="brand" placeholder="Enter Brand" minLength={5} maxLength={30}  required value={brand} onChange={(e)=>{

                setbrand(e.target.value);

                }} />
            </div>
                <br></br>
            <div className="form-group">
                <label for="date">&nbsp;&nbsp;<strong>Date</strong></label>
                <input type="date" className="form-control" id="date" placeholder="Enter Date" required value={date} onChange={(e)=>{

                setdate(e.target.value);

                }} />
            </div>
                <br></br>
            <div className="form-group">
                <label for="volume">&nbsp;&nbsp;<strong>Volume (ml)</strong></label>
                <input type="number" className="form-control" id="volume" placeholder="Enter Volume" required value={volume} onChange={(e)=>{

                setvolume(e.target.value);

                }}/>
            </div>
                <br></br>
            <div className="form-group">
                <label for="quantity">&nbsp;&nbsp;<strong>Quantity</strong></label>
                <input type="number" className="form-control" id="quantity" placeholder="Enter Quantity" required value={quantity} onChange={(e)=>{

                setquantity(e.target.value);

                }} />
            </div>
                <br></br>
            <div className="form-group">
                <label for="supplierName">&nbsp;&nbsp;<strong>Supplier Name</strong></label>
                <input type="text" className="form-control" id="supplierName" placeholder="Enter Supplier Name" minLength={5} maxLength={30}  required value={supplierName} onChange={(e)=>{

                setsupplierName(e.target.value);

                }} />
            </div>
                <br></br>
            <div className="form-group">
                <label for="buyingPrice">&nbsp;&nbsp;<strong>Buying Price (Rupees)</strong></label>
                <input type="number" className="form-control" id="buyingPrice" placeholder="Enter Buying Price"  required value={buyingPrice} onChange={(e)=>{

                setbuyingPrice(e.target.value);

                }} />
            </div>
                <br></br>
            
            <center>
            <button class=" fa fa-search btn btn-danger" type="submit" className="btn btn-primary" >Submit</button>
            </center>            
            <br></br>
                     
            <br></br>
            </form>
        </div>

        </div>
 
 )

}
