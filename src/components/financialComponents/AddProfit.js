import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../Styles.css';
import Navbar from "./Navbar";

export default function AddProfit(){

    const [date, setdate] = useState("");
    const [income, setincome] = useState("");
    const [orderCost, setorderCost] = useState("");
    const [salary, setsalary] = useState("");
    const [otherExpenses, setotherExpenses] = useState("");
    const [totalProfit, settotalProfit] = useState("");

    function sendData(e){
        e.preventDefault();
           
        const newProfit={
            date,
            income,
            orderCost,
            salary,
            otherExpenses,
            totalProfit
        }
        
        axios.post("http://localhost:8070/profit/add",newProfit).then(()=>{
            alert("Profit Added")
            setdate("");
            setincome("");
            setorderCost("");
            setsalary("");
            setotherExpenses("");
            settotalProfit("");
            window.location.reload(true);

        }).catch((err)=>{
            alert(err)
        })
    }
    useEffect(()=>{

        document.querySelector('#totalProfit').value="";

    },[])
    const calculation=(e)=>
    {
        e.preventDefault();

        let income = parseInt(document.getElementById('income').value);
        let orderCost = parseInt(document.getElementById('orderCost').value);   
        let salary = parseInt(document.getElementById('salary').value);
        let otherExpenses = parseInt(document.getElementById('otherExpenses').value);

        
        let sum = document.getElementById('totalProfit').value = income-(orderCost+salary+otherExpenses);
        settotalProfit(sum);
    }

    return(
        <div>
        <Navbar />
        <div className="addprofitform" > 

        <center><br></br>
        <h1 class="text-white">FINANCIAL MANAGEMENT</h1>
        </center>
        <br></br><br></br>
        <h5 class="text-white">ADD PROFIT DETAILS</h5>

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
            <label for="income">&nbsp;&nbsp;<strong>Total Income(Rs)</strong></label>
            <input type="text" className="form-control" id="income" placeholder="Enter Value"  required value={income} onChange={(e)=>{

            setincome(e.target.value);

            }} />
        </div>
            <br></br>
        <div className="form-group">
            <label for="orderCost">&nbsp;&nbsp;<strong>Total OrderCost(Rs)</strong></label>
            <input type="text" className="form-control" id="orderCost" placeholder="Enter Value"   required value={orderCost} onChange={(e)=>{

            setorderCost(e.target.value);

            }} />
        </div>
           
            <br></br>
        <div className="form-group">
            <label for="salary">&nbsp;&nbsp;<strong>Total Salary(Rs)</strong></label>
            <input type="text" className="form-control" id="salary" placeholder="Enter Value" required value={salary} onChange={(e)=>{

            setsalary(e.target.value);

            }} />
        </div>
            
            <br></br>
        <div className="form-group">
            <label for="otherExpenses">&nbsp;&nbsp;<strong>Total Other Expenses(Rs) </strong></label>
            <input type="text" className="form-control" id="otherExpenses" placeholder="Enter Value" required value={otherExpenses} onChange={(e)=>{

            setotherExpenses(e.target.value);

            }} />
        </div>

        <br></br>
        <div className="form-group">
            <label for="totalProfit">&nbsp;&nbsp;<strong> Profit(Rs)</strong></label>
            <input type="number" className="form-control" id="totalProfit" placeholder="Enter Value" required value={totalProfit} onChange={(e)=>{

            settotalProfit(e.target.value);

            }} />
        </div>

        <br></br>
            <center>
        <button className="btn btn-primary" onClick={calculation}>Calculate Profit</button><br/><br/>

    <div className="col-12">
        <button className="btn btn-primary" type="submit">Submit form</button>
        
     </div>
     </center>
    </form>
</div> 
</div>
    )    
}
