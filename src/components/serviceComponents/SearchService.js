import React, {useState, useEffect} from "react";
import axios from "axios";
import NavBar from "./NavBar";


export default function SearchService() {

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
    const [allFData,setAllFData] = useState([]);
    const [filteredFData,setFilteredFData] = useState([]);

 
    useEffect(() => {
        function getNormalServices(){
            axios("http://localhost:8070/nservice/normal").then(response => {
                //console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.data);
            }).catch(error => {
                alert(error.message);
            })
        }
        getNormalServices();
    }, [])

    useEffect(() => {
      function getFullServices(){
          axios("http://localhost:8070/fservice/full").then(response => {
              //console.log(response.data)
              setAllFData(response.data);
              setFilteredFData(response.data);
          }).catch(error => {
              alert(error.message);
          })
      }
      getFullServices();
    }, [])

    const handleSearch = (event) =>{
    
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);

        result = allData.filter((data) => {
             return data.entryDate.search(value) != -1;
        });
        setFilteredData(result);
    }

    const handleFSearch = (event) =>{
    
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);
  
        result = allFData.filter((data) => {
              return data.entryDate.search(value) != -1;
        });
        setFilteredFData(result);
    } 
          
    const cancelNormalService=(sid) =>{
          axios.delete(`http://localhost:8070/nservice/cancel/${sid}`).then(()=>{
              alert("Cancel Normal Service Succesfully!");
              window.location.reload(false);
          }).catch((e) => {
              alert(e.message);
          })
            
    }
    
    const cancelFullService=(sid) =>{
        axios.delete(`http://localhost:8070/fservice/cancel/${sid}`).then(()=>{
            alert("Cancel Full Service Succesfully!");
            window.location.reload(false);
        }).catch((e) => {
            alert(e.message);
        })
        
    }

    return(    
        <> 
        <NavBar/>
            <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"500px",paddingRight:"50px",paddingLeft:"300px",marginTop:"-700px"}}>
                <center>
                    <h3> NORMAL SERVICE</h3>
                </center>&nbsp;&nbsp;&nbsp;         
                    <div>
                        <label>Search:</label>
                                <input type="text" onChange={(event) =>handleSearch(event)} />
                    </div><br />
                    <div className="card container d-flex justify-content-center">
                        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th >Vehicle No</th>
                                <th >Customer Name</th>
                                <th >Entry Date</th>
                                <th >Handover Date</th>
                                <th >Total Facility Price</th>
                                <th >Labor Cost</th>
                                <th >Total Service Cost</th>
                                <th >CANCEL</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredData.map((value)=>{
                                    return(
                                        <tr> 
                                            <td>{value.vNo}</td> 
                                            <td>{value.cusName}</td> 
                                            <td>{value.entryDate}</td>
                                            <td>{value.handoverDate}</td>
                                            <td>{value.totalFPrice}</td>
                                            <td>{value.laborCost}</td>
                                            <td>{value.totalCost}</td>
                                            <td><button className="btn btn-primary btn-sm" style={{background:"#2f3e54", width:"100px"}} onClick={() =>  cancelNormalService(value._id)}><b>CANCEL</b></button></td>
                                        </tr>
                                    )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div><br />
                <center>
                    
                </center>
            </div>
            <br></br>
            <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"500px",paddingRight:"50px",paddingLeft:"300px",marginTop:"10px"}}>
                <center>
                    <h3> FULL SERVICE</h3>
                </center>&nbsp;&nbsp;&nbsp;         
                    <div>
                        <label>Search:</label>
                                <input type="text" onChange={(event) =>handleFSearch(event)} />
                    </div><br />
                    <div className="card container d-flex justify-content-center">
                        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th >Vehicle No</th>
                                <th >Customer Name</th>
                                <th >Entry Date</th>
                                <th >Handover Date</th>
                                <th >Description</th>
                                <th >Total Facility Price</th>
                                <th >Labor Cost</th>
                                <th >Total Service Cost</th>
                                <th >CANCEL</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredFData.map((value)=>{
                                    return(
                                        <tr> 
                                            <td>{value.vNo}</td> 
                                            <td>{value.cusName}</td> 
                                            <td>{value.entryDate}</td>
                                            <td>{value.handoverDate}</td>
                                            <td>{value.description}</td>
                                            <td>{value.totalFPrice}</td>
                                            <td>{value.laborCost}</td>
                                            <td>{value.totalCost}</td><td><button className="btn btn-primary btn-sm" style={{background:"#2f3e54", width:"100px"}} onClick={() =>  cancelFullService(value._id)}><b>CANCEL</b></button></td>
                                        </tr>
                                    )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div><br />
                <center>
                    
                </center>
            </div>
        </>
    )
}