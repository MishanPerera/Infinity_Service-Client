import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../Styles.css';
import Navbar from "./Navbar";

export default function AddUtility(){

    const [date, setdate] = useState("");
    const [electricity, setelectricity] = useState("");
    const [water, setwater] = useState("");
    const [telephone, settelephone] = useState("");
    const [repair, setrepair] = useState("");
    const [billTotal, setbillTotal] = useState("");

    function sendData(e){
        e.preventDefault();
           
        const newUtility={
            date,
            electricity,
            water,
            telephone,
            repair,
            billTotal
        }
        
        axios.post("http://localhost:8070/utility/add",newUtility).then(()=>{
            alert("Utility Added")
            setdate("");
            setelectricity("");
            setwater("");
            settelephone("");
            setrepair("");
            setbillTotal("");
            window.location.reload(true);

        }).catch((err)=>{
            alert(err)
        })
    }
    
        useEffect(()=>{

        document.querySelector('#billTotal').value="";

        

    },[])

  /*  const calculation=(e)=>{

        e.preventDefault();

        let currentNum1=document.querySelector('electricity').value

        let currentNum2=document.querySelector('water').value

        let currentNum3=document.querySelector('telephone').value

        let currentNum4=document.querySelector('repair').value

        let sum= billTotal+parseInt(currentNum1)+parseInt(currentNum2)+parseInt(currentNum3)+parseInt(currentNum4);

        setbillTotal(sum);

    }*/
    const calculation=(e)=>
    {
        e.preventDefault();

        let electricity = parseInt(document.getElementById('electricity').value);
        let water = parseInt(document.getElementById('water').value);   
        let telephone = parseInt(document.getElementById('telephone').value);
        let repair = parseInt(document.getElementById('repair').value);

        
        let sum = document.getElementById('billTotal').value = electricity+water+telephone+repair;
        //let sum= billTotal+electricity+water+telephone+repair;
        setbillTotal(sum);
    }

    return(

        <div>
        <Navbar />

        <div className="addutilityform" > 
        <center><br></br>
        <h1 class="text-white">FINANCIAL MANAGEMENT</h1>
        </center>
        <br></br><br></br>

        <h5 class="text-white">ADD UTILITY EXPENSES</h5>

        <br></br>

        <form style={{  background: "#BBDEFB" }}  onSubmit = {sendData}>

        <br></br>
        
        <div className="form-group">
            <label for="date">&nbsp;&nbsp;<strong>Date</strong></label>
            <input type="date" className="form-control" id="date" placeholder="Enter Date" required value={date} onChange={(e)=>{

            setdate(e.target.value);

            }} />
        </div>

        <br></br>
        <div className="form-group">
            <label for="electricity">&nbsp;&nbsp;<strong>Electricity Bill(Rs)</strong></label>
            <input type="text" className="form-control" id="electricity" placeholder="Enter Value"  required value={electricity} onChange={(e)=>{

            setelectricity(e.target.value);

            }} />
        </div>
            <br></br>
        <div className="form-group">
            <label for="water">&nbsp;&nbsp;<strong>Water Bill(Rs)</strong></label>
            <input type="text" className="form-control" id="water" placeholder="Enter Value"   required value={water} onChange={(e)=>{

            setwater(e.target.value);

            }} />
        </div>
           
            <br></br>
        <div className="form-group">
            <label for="telephone">&nbsp;&nbsp;<strong>Telephone Bill(Rs)</strong></label>
            <input type="text" className="form-control" id="telephone" placeholder="Enter Value" required value={telephone} onChange={(e)=>{

            settelephone(e.target.value);

            }} />
        </div>
            
            <br></br>
        <div className="form-group">
            <label for="repair">&nbsp;&nbsp;<strong>Repair Bills(Rs) </strong></label>
            <input type="text" className="form-control" id="repair" placeholder="Enter Value" required value={repair} onChange={(e)=>{

            setrepair(e.target.value);

            }} />
        </div>

        <br></br>
        <div className="form-group">
            <label for="billTotal">&nbsp;&nbsp;<strong>Total Bill Price(Rs)</strong></label>
            <input type="number" className="form-control" id="billTotal" value = {billTotal} placeholder="Enter Value" required value={billTotal} onChange={(e)=>{

            setbillTotal(e.target.value);

            }} />
        </div>

        <br></br>
            
        <center>
        <button className="btn btn-primary" onClick={calculation}>View Total</button><br/><br/>
        </center>
 
    <div className="col-12">
        <center>
        <button className="btn btn-primary" type="submit">Submit form</button>
        </center>

     </div>
    </form>
</div> 
</div>
    )    
}
