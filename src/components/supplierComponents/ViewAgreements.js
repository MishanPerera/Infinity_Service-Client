import React,{useState, useEffect} from "react";
import axios from "axios";
import '../../viewStyle.css';
import {Link} from "react-router-dom";
import NavBar from "./NavBar";
import '../../NavBar.css';

export default function ViewAgreements() {

    const [agreements, setAgreements] = useState([]);


    useEffect(() => {
        //fetching all agreement data from the database
        axios.get("http://localhost:8070/agreement/").then((res) => {
            if (res.data.length > 0) {
                setAgreements(res.data);
            }
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])

    return (

        <div>
            <NavBar/>

<div class="lft">
<div class="card" >
<div className="container">
<center><h1 style={{marginTop:"5px"}}><strong>SUPPLIER MANAGEMENT</strong></h1></center><br/>
<br></br>
    <center>
      <h5>VIEW AGREEMENTS DETAILS</h5>
    </center>
    <br></br>

    <table class="table table-bordered table-hover" style = {{background:"#BBDEFB"}}>
                    <thead>
                        <tr>
                            <th>Supplier No.</th>
                            <th>Company Name</th>
                            <th>Agreement Date</th>
                            <th>Valid Time Period</th>
                            <th>Item Details</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            agreements.map(function (f) {
                                return <tr>
                                    

                                    <td >{f.supplierNo}</td>
                                    <td >{f.companyName} </td>
                                    <td >{f.agreeDate} </td>
                                    <td >{f.validTimePeriod} </td>
                                    <td >{f.itemDetails} </td>

                                </tr>

                            })
                        }
                    </tbody>
                    </table>

</div>
</div>
</div>

        </div>
    
    )


}