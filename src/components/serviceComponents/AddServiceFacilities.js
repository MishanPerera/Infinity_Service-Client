import React,{useState} from "react";
import '../../Form.css';
import axios from "axios";
import NavBar from "./NavBar";

export default function AddServiceFacilities(){
    const [serviceType, setServiceType]= useState("");
    const [facilityName, setFacilityName]= useState("");
    const [facilityCost, setFacilityCost]= useState("");

    function sendData(e){
        e.preventDefault();

        const newFacility = {
            serviceType,
            facilityName,
            facilityCost
        }
        
        axios.post("http://localhost:8070/facility/add",newFacility).then(()=>{
            alert("New Service Facility is Added to the System")
            setServiceType("");
            setFacilityName("");
            setFacilityCost("");
            window.location.reload(true);

        }).catch((err)=>{
            alert(err)

        })
    }

    return(
        <div>
            <NavBar/>
        <div className="addFacilities">
        <center>
            <h2 className="text-white">SERVICE MANAGEMENT</h2>
            </center><br/>
            <form onSubmit={sendData} style={{  background: "#BBDEFB"}}>
        
                <div className="col-auto">
                    <label for="serviceType">Service Type</label>
                    <select className="form-select" id="serviceType"
                    onChange={(e)=>{
                        setServiceType(e.target.value);
                    }}>
                    <option selected>Select Type</option>
                    <option value="Normal">Normal</option>
                    <option value="Full">Full</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label for="facilityName">Service Name</label>
                    <input type="text" className="form-control" id="facilityName" placeholder="Type Service Facility Name" required 
                    onChange={(e)=>{
                        setFacilityName(e.target.value);
                    }}/>
                </div>

                <div className="mb-3">
                    <label for="facilityCost">Service Facility Cost (Rs)</label>
                    <input type="text" className="form-control" id="facilityCost" placeholder="200"
                    onChange={(e)=>{
                        setFacilityCost(e.target.value);
                    }}/>
                </div>

                <button type="submit" className="btn btn-primary">SUBMIT</button>

            </form>
        </div>
        </div>
    )
}