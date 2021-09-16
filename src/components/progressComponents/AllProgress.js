import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";

export default function AllProgress(){

    const [stat, setProgresses] = useState([]);

    useEffect(() =>{
       function getProgresses(){
           axios.get("http://localhost:8053/progress/")
           .then((res) =>{

               //console.log(res.data);
               setProgresses(res.data);
               
           }).catch((err)=>{
               alert(err.message);
           })
       }
       getProgresses();
    },[])


return(    
    <> 
<div><Header/>
      <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"50px",paddingLeft:"300px",marginTop:"-600px"}}>
          <center>
                <h3> All Progress</h3>
                </center>
       <div>
            <button type="button" className="btn btn-secondary btn-sm" href="/pro/:entryDate">Daily Progress</button>
        </div>&nbsp;&nbsp;&nbsp;
        <div className="card container d-flex justify-content-center">
                    <table className="table table-hover">
             
                <thead>
                    <tr>
                    <th scope="col">Vehicle No</th>
                    <th scope="col">Entry Date</th>
                    <th scope="col">Employee Number</th>
                    <th scope="col">Status</th>
                    <th scope="col">Finishing Date</th>
                    </tr>
                </thead>

                <tbody >
                    {stat.map(get => (

                    <tr>
                        <td key={get.vNo}>{get.vNo}</td>
                        <td key={get.entryDate}>{get.entryDate}</td>
                        <td key={get.empNo}>{get.empNo}</td>
                        <td key={get.status}>{get.status}</td>
                        <td key={get.handoverDate}>{get.handoverDate}</td>
                    </tr>
                    ))} 
                </tbody>
           </table>
           </div>
           </div>
           <div className="container  text-white" style={{marginTop:"-600px" , paddingLeft:"400px"}}>
    <h1>WORK PROGRESS MANAGEMENT</h1>
     </div>
     </div>
   </>
    )
}