import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import '../../Form.css';
import axios from "axios";
import NavBar from "./NavBar";

export default function ServiceFacilities() {

    const [facilities, setFacilities] = useState([]);

    useEffect(() => {
        //fetching all facilities from the database
        function getData(){
            axios.get("http://localhost:8070/facility/").then((res) => {
                setFacilities(res.data);
            }).catch((e) => {
                alert(e.message);
            })

        }
        getData();

    }, [])

    
    const setData = (facilities) => {
      let{_id,serviceType,facilityName,facilityCost} = facilities;
      localStorage.setItem('ID',_id);
      localStorage.setItem('Type',serviceType);
      localStorage.setItem('Name',facilityName);
      localStorage.setItem('Cost',facilityCost);

    }

    const deleteFacilities=(fid) =>{
        axios.delete(`http://localhost:8070/facility/delete/${fid}`).then(()=>{
            alert("Deleted Successfully");
            window.location.reload(false);
        }).catch((e) => {
            alert(e.message);
        })
        
    }


    
    return (
        <div>
            <NavBar/>
        <div className="view" >
            <center>
            <h2 className="text-white">SERVICE MANAGEMENT</h2>
            </center><br/>

            <div className="card" >
                <table class="table table-bordered" style={{  background: "#BBDEFB" }}>
                    <thead>
                        <tr>
                            <th>Service Type</th>
                            <th>Service Facility Name</th>
                            <th>Service Facility Cost (Rs)</th>
                            <th>UPDATE</th>
                            <th>DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            facilities.map(function(facilities){
                                return (
                                    <tr>
                                        <td >{facilities.serviceType}</td>
                                        <td >{facilities.facilityName} </td>
                                        <td >{facilities.facilityCost} </td>

                                        <td >
                                            <Link to={"/update/"+facilities._id}><button onClick={() =>setData(facilities)} >UPDATE</button></Link>            
                                        </td>
                                        <td > 
                                            <button onClick={() =>  deleteFacilities(facilities._id)}>DELETE</button>
                                        </td>

                                    </tr>
                                );

                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
        </div>
    )
}