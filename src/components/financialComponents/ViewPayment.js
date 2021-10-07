import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../Styles.css';
import Navbar from "./Navbar";


export default function ViewPayment(){

    const [payments, setpayments] = useState([]);


   


  useEffect(() => {
    function getData() {
        axios.get("http://localhost:8070/payment/").then((res) => {
            setpayments(res.data);
            
        }).catch((error) => {
            alert(error.message);
        })
    }
    getData();


}, [])
   

   return (
    <div>
    <Navbar />
  
    <div className="view" >
    <center><br></br>
    <h1 class="text-white">FINANCIAL MANAGEMENT</h1>
    </center>
    <br></br><br></br>
    <h4 class="text-white"> VIEW PAYMENT DETAILS</h4>
    <br></br><br></br>
    <div className>
    <table class="table table-striped table-hover table-sm caption-top" style={{  background: "#BBDEFB" }} >
            <thead>
            
                <tr>
                    <th class="text-center" scope="col">SERVICE DATE</th>
                    <th class="text-center" scope="col">VEHICLE NO</th>
                    <th class="text-center" scope="col">CUSTOMER NAME</th>
                    <th class="text-center" scope="col">PAYMENT(Rs)</th>

                </tr>
            </thead>


            <tbody>
            {payments.map((payments) => {
                    
                    return (
                        <tr >
                            <td class="text-center" >{payments.handoverDate}</td>
                            <td class="text-center">{payments.vNo}</td>
                            <td class="text-center">{payments.cusName}</td>
                            <td class="text-center">{payments.amount}</td>

                            
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