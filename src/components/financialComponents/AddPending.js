import React, {useState} from "react";
import axios from "axios";
import '../../Styles.css';
import Navbar from "./Navbar";

export default function AddPending(){

    const [month, setmonth] = useState("");
    const [billName, setbillName] = useState("")


    function sendData(e){
        e.preventDefault();
           
        const newPending={
            month,
            billName
 
        }
        
        axios.post("http://localhost:8070/pending/add",newPending).then(()=>{
            alert("Pending Added")
            setmonth("");
            setbillName("");

        }).catch((err)=>{
            alert(err)
        })
    }
    return(
        <div>
        <Navbar />
        <div className="addpendingform" > 
                <center><br></br>
        <h1 class="text-white">FINANCIAL MANAGEMENT</h1>
        </center>
        <br></br><br></br>

        <h5 class="text-white">ADD PENDING LIST</h5>

        <br></br>

        <form style={{  background: "#BBDEFB" }}  onSubmit = {sendData}>

        <br></br>
        
        <div className="form-group">
            <label for="month">&nbsp;&nbsp;<strong>Month</strong></label>
            <input type="text" className="form-control" id="month" placeholder="Enter Month" required value={month} onChange={(e)=>{

            setmonth(e.target.value);

            }} />
        </div>

        <br></br>
        <div className="form-group">
            <label for="billName">&nbsp;&nbsp;<strong> Name</strong></label>
            <input type="text" className="form-control" id="billName" placeholder="Enter Bill Names"  required value={billName} onChange={(e)=>{

            setbillName(e.target.value);

            }} />
        </div>
            <br></br>

        <br></br>
 
    <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
     </div>
    </form>
</div> 
</div>
    )    
}
