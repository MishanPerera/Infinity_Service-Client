import React, {useState} from "react";
import axios from "axios";
import Navbar from "./Navbar";

export default function PostponeService(){

    const[vNo, setVNo] = useState("");
    const[handoverDate, setHdate] = useState("");
    const[reason, setReason] = useState("");


    function Postpone(e){
        e.preventDefault();
        //alert("If you want to Postpone service? ");

      
        const newPostpone ={

            vNo,
            handoverDate,
            reason

        }
 
            axios.post("http://localhost:8070/postpone/addp",newPostpone).then(()=>{
            alert("Postponed Added Succesfully !!");
            window.location="/get/:vNo";

        }).catch((err)=>{
            alert(err)
        })
        
        //window.location="/get/:vNo";
    }
   
        
    return(
<>
<div><Navbar/>
        <div className = "d-flex justify-content-center container w-50 text-white" style={{background:"#BBDEFB",paddingTop:"50px",paddingBottom:"10px",paddingRight:"50px",paddingLeft:"50px",marginTop:"-700px"}}>
                
           <form className ="form-control row mb-3"onSubmit={Postpone}>
                <center>
               <h1>Service Postpone</h1>
                </center>
               <div className="mb-3">
                   <label htmlFor="vNo" className="form-label">Vehicle No</label>
                   <input type="text" className="form-control" id="vNo" placeholder="WP KA-6270" 
                   onChange={(e)=>{
                        setVNo(e.target.value);
                       
                   }} />
               </div>
             
               <div className="mb-3">
                   <label htmlFor="handoverDate" className="form-label">Finishing Date</label>
                   <input type="text" className="form-control" id="handoverDate" placeholder="dd/mm/yr"
                   onChange={(e)=>{
                       setHdate(e.target.value);
                  }}/>
               </div>
                <div className="mb-3">
                   <label htmlFor="reason" className="form-label">Reason</label>
                   <input type="text" className="form-control" id="reason" 
                   onChange={(e)=>{
                       setReason(e.target.value);
                  }}/>
                </div>
              <center>
               <button type="submit" className="btn btn-primary">Postponed</button>&nbsp;&nbsp;&nbsp;
               </center>
           </form>
           
        </div>
        <div className="container  text-white" style={{marginTop:"-600px" , paddingLeft:"400px"}}>
    <h1>WORK PROGRESS MANAGEMENT</h1>
     </div></div>
        </>
       )
    }
    