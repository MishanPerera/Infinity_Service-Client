import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../Styles.css';
import Navbar from "./Navbar";


export default function ViewService(){

    const [fullservices, setfullservices] = useState([]);


   
    useEffect(() => {

        function getFacilities(){



            axios.get("http://localhost:8070/payment/finance/").then((res)=>{

                    console.log(res);

                    setfullservices(res.data);

            }).catch((err)=>{

            alert(err.message);

            })



        }

        getFacilities();



    },[])

 /* useEffect(() => {
    function getData() {
        axios.get("http://localhost:8070/nservice/").then((res) => {
            setfullservices(res.data);
            
        }).catch((error) => {
            alert(error.message);
        })
    }
    getData();


}, [])*/
   

   return (

    <div>
        <Navbar />
  
    <div className="view" >
    <center><br></br>
    <h1 class="text-white">FINANCIAL MANAGEMENT</h1>
    </center>
    <br></br><br></br>
    <h4 class="text-white"> VIEW SERVICE DETAILS</h4>
    <br></br><br></br>
    <div className>
    <table class="table table-striped table-hover table-sm caption-top" style={{  background: "#BBDEFB" }} >
            <thead>
            
                <tr>
                    <th class="text-center" scope="col">VEHICLE NO</th>
                    <th class="text-center" scope="col">SERVICE DATE</th>
                    <th class="text-center" scope="col">CUSTOMER NAME</th>
                    <th class="text-center" scope="col">PAYMENT(Rs)</th>

                </tr>
            </thead>


            <tbody>
            {fullservices.map((fullservices) => {
                    
                    return (
                        <tr >
                            <td class="text-center" >{fullservices.vNo}</td>
                            <td class="text-center">{fullservices.entryDate}</td>
                            <td class="text-center">{fullservices.cusName}</td>
                            <td class="text-center">{fullservices.totalCost}</td>

                            
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