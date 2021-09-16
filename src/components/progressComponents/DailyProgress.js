/*import React, {useState, useEffect} from "react";
import axios from "axios";
import Header from "./Header";
import {Link} from "react-router-dom";

export default function DailyProgress() {

     const[entryDate, setEdate] = useState('');
    /*const[vNo, setVNo] = useState('');
    const[empNo, setEmpNo] = useState('');
    const[handoverDate, setHdate] = useState('');
    const[status, setStatus] = useState('');*/
   /*const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
   
      const getDailyProgress=async() =>{ 

        useEffect(() =>{
        await axios.get(`http://localhost:8053/progress/pro/${entryDate}`)
        .then((res)=>{
        //alert("Data Fetched Successfully!!!");
           /*setVNo(res.data.daily.vNo);
           setEmpNo(res.data.daily.empNo);
           setHdate(res.data.daily.handoverDate);
           setStatus(res.data.daily.status);*/
        /*  console.log(res.data);

          setAllData(res.data);
          setFilteredData(res.data);


      }).catch((err)=>{
          alert(err.message);
         // window.location.reload(false)
      })
      },[]);
     };


     return(
    
        <div><Header/>
        <div className="App">
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />
        </div>
        </div>
     )
     </div>
     )
/*getDailyProgress();
    return (

    
        <> 
        <center>
        <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"50px",paddingLeft:"300px",marginTop:"-600px"}}>
                <h3> Daily Progress</h3>
         <nav className="navbar">
                <div className="container-fluid">
                    <a className="navbar-brand"> </a>
                        <form className="d-flex">
                            <input className="form-control me-2" 
                            type="text" 
                            id="entryDate"
                            minLength={10} maxLength={18} value={entryDate}  placeholder="Enter date" required 
                            onChange={(e)=>{
                            setEdate(e.target.value);
                             }}/>
                            <button className="btn-light btn-outline-success" type="submit" onClick={getDailyProgress}>Search</button>&nbsp;
                        </form>
                </div>
        </nav>
        <div className="card container d-flex justify-content-center">
                    <table className="table table-hover">
            
                                <thead>
                                    <tr>
                                        <th>vehicle no</th>
                                        <th>entry date</th>
                                        <th>handover date</th>
                                        <th>emp no</th>
                                        <th>status</th>
                                       

                                    </tr>
                                </thead>
                                <tbody>
                                {
                                filteredData.map((value)=>{
                                     return( <tr>
                                                <td >{value.vNo}</td>
                                                <td >{value.entryDate} </td>
                                                <td >{value.handoverDate} </td>
                                                <td >{value.empNo} </td>
                                                <td >{value.status} </td>
                                            </tr>
                                     )
                                })
                            }
                            
                                </tbody>
                                </table>
                        </div></div>
            </center>

            <div className="container  text-white" style={{marginTop:"-400px" , paddingLeft:"400px"}}>
    <h1>WORK PROGRESS MANAGEMENT</h1>
     </div>
    </>
  )
    
}*/
