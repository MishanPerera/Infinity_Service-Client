import React,{useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import '../../Form.css';
import NavBar from './NavBar';

export default function UpdateFacility(){

    const [serviceType, setServiceType]= useState("");
    const [facilityName, setFacilityName]= useState("");
    const [facilityCost, setFacilityCost]= useState("");
    const [fid, setFid]= useState(null);

    useEffect(() =>{
        
        setFid(localStorage.getItem('ID'))
        setServiceType(localStorage.getItem('Type'))
        setFacilityName(localStorage.getItem('Name'));
        setFacilityCost(localStorage.getItem('Cost'));

    }, [] );

    const updateAPIData = () => {
        axios.put(`http://localhost:8070/facility/update/${fid}`, {
            serviceType,
            facilityName,
            facilityCost,
        })
        window.location="/facilities";
    }
        

    return(
        <div>
            <NavBar/>
        <div className="addFacilities">
        <center>
            <h2 className="text-white">SERVICE MANAGEMENT</h2>
            </center><br/>
            <form className="Form" style={{  background: "#BBDEFB"}}>
        
                <div id="addfac">
                    <label className="falabel"for="serviceType"><b>Service Type</b></label>
                    <input className="form-select" id="serviceType"  value={serviceType} readOnly
                    onChange={(e)=>{
                        setServiceType(e.target.value);
                    }}/>
                </div>

                <div  id="addfac"className="mb-3">
                    <label className="falabel" for="facilityName"><b>Service Name</b></label>
                    <input type="text" className="form-control" id="facilityName" value={facilityName} readOnly
                    onChange={(e)=>{
                        setFacilityName(e.target.value);
                    }}/>
                </div>

                <div id="addfac" className="mb-3">
                    <label className="falabel" for="facilityCost"><b>Service Facility Cost (Rs)</b></label>
                    <input type="number" className="form-control" id="facilityCost" value={facilityCost}
                    onChange={(e)=>{
                        setFacilityCost(e.target.value);
                    }}/>
                </div>
                <Link to={"/facilities"}><button type="submit" id="btnsubmit" className="btn btn-primary" onClick={()=>{updateAPIData();}}><b>SUBMIT</b></button></Link>

            </form>
        </div>
        </div>

    )
}