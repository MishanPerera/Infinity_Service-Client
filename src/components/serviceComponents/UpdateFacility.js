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
        <form className="addFacilities" style={{  background: "#BBDEFB" }}>
            <div className="mb-3">
                <label for="serviceType" class="form-label">Service Type</label>
                <input type="text" class="form-control" id="serviceType" value={serviceType} readOnly
                onChange={(e)=> {
      
                    setServiceType(e.target.value);
      
                }}/>
            </div>
       
            <div class="mb-3">
                <label for="facilityName" class="form-label">Service Name</label>
                <input type="text" class="form-control" id="facilityName" value={facilityName} readOnly
                onChange={(e)=> {
      
                    setFacilityName(e.target.value);
      
                }}/>
            </div>
       
            <div class="mb-3">
                <label for="facilityCost" class="form-label">Service Facility Cost (Rs)</label>
                <input type="text" class="form-control" id="facilityCost" value={facilityCost} 
                onChange={(e)=> {
      
                    setFacilityCost(e.target.value);
                }}/>
            </div>
       <center>
            <Link to={"/facilities"}><button type="submit" class="btn btn-primary" onClick={()=>{updateAPIData();}}>UPDATE</button></Link></center>
        </form>
        </div>

    )
}