//N.S. Jayasekara
//IT20175498
//Inventory Management Function
//Infinity Vehical Service Center

import React ,{useState} from "react";
import axios from "axios";
import '../../myStyles.css'



//creting a function for add prices to items
export default function AddPrices(){

    const [itemNo, setitemNo] = useState("");
    const [category, setcategory] = useState("");
    const [name, setname] = useState("");
    const [brand, setbrand] = useState("");
    const [sellingPrice, setsellingPrice] = useState("");

    function sendData(e){
        e.preventDefault();
           
        const newPrice={
            itemNo,
            category,
            name,
            brand,
            sellingPrice
        }

        axios.post("http://localhost:8070/price/add",newPrice).then(()=>{
            alert("Selling Price Added")
            setitemNo("");
            setcategory("");
            setname("");
            setbrand("");
            setsellingPrice("");
            window.location.reload(true);

        }).catch((err)=>{
            alert(err)
        })

        
    }

    return(

    <div>
        
        {/* <Navbar/> */}

        <div className="addpriceform" > 

            <center>
            <h5 className="text-white">ADD SELLING PRICE</h5>
            </center>
            <br></br>

            <form style={{  background: "#BBDEFB" }}  onSubmit = {sendData}>

            <br></br>
            
            <div className="form-group">
                <label for="itemNo">&nbsp;&nbsp;<strong>Item No</strong></label>
                <input type="text" className="form-control" id="itemNo" placeholder="Enter Item No" minLength={5} maxLength={6}  required value={itemNo} onChange={(e)=>{

                    setitemNo(e.target.value);

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
                <label for="category">&nbsp;&nbsp;<strong>Category</strong></label>
                <input type="text" className="form-control" id="category" placeholder="Enter Category" required value={category} onChange={(e)=>{

                setcategory(e.target.value);

                }} />
            </div>
                
                <br></br>
            <div className="form-group">
                <label for="sellingPrice">&nbsp;&nbsp;<strong>Selling Price (Rupees)</strong></label>
                <input type="number" className="form-control" id="sellingPrice" placeholder="Enter Selling Price" required value={sellingPrice} onChange={(e)=>{

                setsellingPrice(e.target.value);

                }} />
            </div>
                <br></br>

            <center>
            <button className=" fa fa-search btn btn-danger" type="submit" className="btn btn-primary">Submit</button>
            </center>
            <br></br>
            </form>
        </div>

    </div>


    )
}