import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import '../../Form.css';
import axios from "axios";
import NavBar from "./NavBar";
import { colors } from "@material-ui/core";

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

            <div>
                <table class="table table-hover" style={{  background: "#BBDEFB"}}>
                    <thead>
                        <tr style={{  background: "#ebebeb"}}>
                            <th class="text-center" scope="col">Service Type</th>
                            <th class="text-center" scope="col">Service Facility Name</th>
                            <th class="text-center" scope="col">Service Facility Cost (Rs)</th>
                            <th class="text-center" scope="col">UPDATE</th>
                            <th class="text-center" scope="col">DELETE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            facilities.map(function(facilities){
                                return (
                                    <tr>
                                        <td class="text-center">{facilities.serviceType}</td>
                                        <td class="text-center">{facilities.facilityName} </td>
                                        <td class="text-center">{facilities.facilityCost} </td>

                                        <td class="text-center">
                                            <Link to={"/update/"+facilities._id}>
                                                <button className="btn btn-primary btn-sm" style={{background:"#2f3e54" ,width:"100px"}} onClick={() =>setData(facilities)} ><b>EDIT</b></button>
                                            </Link>            
                                        </td>
                                        <td class="text-center" > 
                                            <button className="btn btn-primary btn-sm" style={{background:"#2f3e54", width:"100px"}} onClick={() =>  deleteFacilities(facilities._id)}><b>DELETE</b></button>
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