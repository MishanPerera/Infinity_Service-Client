import React, {useState, useEffect} from "react";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import Popup from "./Popup";
import AssignEmployee from "./AssignEmployee"
import Navbar from "./Navbar";

export default function ToDoList() {


    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);
   
    const [openPopup, setOpenPopup] = useState(false);
   
       useEffect(() => {
           function getProgresses(){
               axios("http://localhost:8070/nservice/normal")
               .then(response => {
                   //console.log(response.data)
                   setAllData(response.data);
                   setFilteredData(response.data);
               }).catch(error => {
                       alert(error.message);
               })
           }
           getProgresses();
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
       return(    
        <> 
        <div><Navbar/>
            <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"50px",paddingLeft:"300px",marginTop:"-700px"}}>
                    <center>
                        <h3> TO DO SERVICES</h3>
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
                                    <th >Entry Date</th>
                                    <th >Customer Name</th>
                                    <th >Total Cost</th>
                                    <th >Finishing Date</th>
                                    <th >Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {filteredData.map((value)=>{
                                        return(
                                            <tr> 
                                                <td>{value.vNo}</td> 
                                                <td>{value.entryDate}</td>
                                                <td>{value.cusName}</td>
                                                <td>{value.totalCost}</td>
                                                <td>{value.handoverDate}</td>
                                                <td><IconButton aria-label="add" onClick={() => {setOpenPopup(true) }}>
                                                    <AddIcon  fontSize="small" />                  
                                                    </IconButton>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div><br />
            </div>
                <Popup
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}>
                    <AssignEmployee />
                </Popup>
            <div className="container  text-white" style={{marginTop:"-700px" , paddingLeft:"400px"}}>
                <h1>WORK PROGRESS MANAGEMENT</h1>
            </div>
        </div>
        </>
    )
}

    