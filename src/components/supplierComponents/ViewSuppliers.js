import React,{useState, useEffect} from "react";
import axios from "axios";
import '../../viewStyle.css';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import '../../NavBar.css';

export default function ViewSuppliers() {

    const [suppliers, setSuppliers] = useState([]);



    useEffect(() => {
        //fetching all supplier data from the database
        axios.get("http://localhost:8070/supplier/").then((res) => {
            if (res.data.length > 0) {
                setSuppliers(res.data);
            }
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])
 

    return (

        <div>
            <NavBar/>
        
<div>
<div className="lft" >
<center><h1 className="text-white" style={{marginTop:"-30px"}}><strong>SUPPLIER MANAGEMENT</strong></h1></center><br/>
    <br></br>
    <center>
      <h5 className="text-white">VIEW SUPPLIERS DETAILS</h5>
    </center>
    <br></br>
    
    <table class="table table-bordered table-hover" style = {{background:"#BBDEFB"}}> 
         
                    <thead>
                        <tr>
                            <th>Supplier No.</th>
                            <th>Company Name</th>
                            <th>Address</th>
                            <th>Company Email</th>
                            <th>Company Phone No.</th>
                            <th>Agent Name</th>
                            <th>Agent Phone No.</th>
                            <th>Agent Email</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {
                            suppliers.map(function (f) {
                                return <tr>
                                    

                                    <td >{f.supplierNo}</td>
                                    <td >{f.companyName} </td>
                                    <td >{f.address} </td>
                                    <td >{f.companyEmail} </td>
                                    <td >{f.comPhone} </td>
                                    <td >{f.agentName} </td>
                                    <td >{f.agentPhone} </td>
                                    <td >{f.agentEmail} </td>
                                   

                                </tr>

                            })
                        }
                    </tbody>
                    </table>

</div>
</div>
</div>    
    )


}