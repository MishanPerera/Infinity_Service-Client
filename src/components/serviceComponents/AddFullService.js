import React,{useState, useEffect} from "react";
import '../../Form.css';
import axios from "axios";
import NavBar from "./NavBar";

export default function AddFullService(){

    const [vNo, setVNo]= useState("");
    const [cusName, setCusName]= useState("");
    const [entryDate, setEntryDate]= useState("");
    const [handoverDate, setHandoverDate]= useState("");
    const [description, setDescription]= useState("");
    const [totalFPrice, setTotalFPrice]= useState(0);
    const [laborCost, setLaborCost]= useState("");
    const [totalCost, setTotalCost]= useState(0);

    const [facilities, setFacilities] = useState([]);

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);


    useEffect(() => {
        function getPrice() {
            axios.get("http://localhost:8070/price/").then((response) => {
                setAllData(response.data);
                setFilteredData(response.data);
               
            }).catch((error) => {
                alert(error.message);
            })
        }
        getPrice();
    
    
    }, [])

    const handleSearch = (event) =>{
    
        let value = event.target.value.toLowerCase();
        let result = [];
        console.log(value);

        result = allData.filter((data) => {
             return data.category.search(value) != -1;
        });
        setFilteredData(result);
    }
    

    useEffect(() => {
        function getFacilities(){

            axios.get("http://localhost:8070/fservice/").then((res)=>{
                    console.log(res);
                    setFacilities(res.data);
            }).catch((err)=>{
            alert(err.message);
            })

        }
        getFacilities();

    },[])

    function sendData(e){
        e.preventDefault();

        const newNormal = {
            vNo,
            cusName,
            entryDate,
            handoverDate,
            description,
            totalFPrice,
            laborCost,
            totalCost
        }
        
        axios.post("http://localhost:8070/fservice/add",newNormal).then(()=>{
            alert("New Full Service is Added to the System")
            setVNo("");
            setCusName("");
            setEntryDate("");
            setHandoverDate("");
            setDescription("");
            setTotalFPrice("");
            setLaborCost("");
            setTotalCost("");
            window.location.reload(true);

        }).catch((err)=>{
            alert(err)

        })
    }

    useEffect(()=>{
        document.querySelector('#totalFPrice').value="";
    },[])

    useEffect(()=>{
        document.querySelector('#totalCost').value="";
    },[]) 

    const Add=(e)=>{
        e.preventDefault();
        let currentNum=document.getElementById('Fcost').value
        let sum= totalFPrice+parseInt(currentNum);
        setTotalFPrice(sum);
        document.getElementById('Fcost').value="";
          
    }

    const calculation=(e)=>{
        e.preventDefault();
        let currentNum1=parseInt(document.getElementById('totalFPrice').value);
        let currentNum2=parseInt(document.getElementById('laborCost').value);
        
        let sum = document.getElementById('totalCost').value = currentNum1+currentNum2;

        setTotalCost(sum);
          
    }

    return(
        <div>
            <NavBar/>

            
        <div className="addFacilities">
            
            
        <center>
            <h2 className="text-white">SERVICE MANAGEMENT</h2>
            </center><br/>

            <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"200px",paddingRight:"50px",paddingLeft:"300px",marginTop:"10px"}}>
                <center>
                    <h3> SELLING PRICE DETAILS</h3>
                </center>&nbsp;&nbsp;&nbsp;         
                    <div>
                        <label>Search:</label>
                                <input type="text" onChange={(event) =>handleSearch(event)} />
                    </div><br />
                    <div className="card container d-flex justify-content-center">
                        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th >Item Name</th>
                                <th >Brand</th>
                                <th >Price</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredData.map((value)=>{
                                    return(
                                        <tr> 
                                            <td>{value.name}</td> 
                                            <td>{value.brand}</td> 
                                            <td>{value.sellingPrice}</td>
                                        </tr>
                                    )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div><br />
            </div>
            <br></br>
            
            <form className="nForm" onSubmit={sendData} style={{  background: "#BBDEFB", marginTop:"10px"}}>

                <div className="mb-3">
                    <label forhtml="vNo">Vehicle No</label>
                    <input type="text" className="form-control" id="vNo" placeholder="WP CDC-2341" required
                    minLength={10} maxLength={11}
                    onChange={(e)=>{
                        setVNo(e.target.value);
                    }}/>
                </div>

                <div className="mb-3">
                    <label forhtml="cusName">Customer Name</label>
                    <input type="text" className="form-control" id="cusName" placeholder="Enter Customer Name" required
                    onChange={(e)=>{
                        setCusName(e.target.value);
                    }}/>
                </div>

                <div className="mb-3">
                    <label for="entryDate">Entry Date</label>
                    <input type="text" className="form-control" id="entryDate" placeholder="11-08-2021" required
                    minLength={10} maxLength={10}
                    onChange={(e)=>{
                        setEntryDate(e.target.value);
                    }}/>
                </div>

                <div className="mb-3">
                    <label for="handoverDate">Handover Date</label>
                    <input type="text" className="form-control" id="handoverDate" placeholder="12-08-2021" required
                    minLength={10} maxLength={10}
                    onChange={(e)=>{
                        setHandoverDate(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="description">Description</label>
                    <textarea type="text" className="form-control" id="description" placeholder="Type Description" required
                    onChange={(e)=>{
                        setDescription(e.target.value);
                    }}/>
                </div>
                <center>
                    <h3>SERVICE FACILITIES</h3>
                </center>
                <div className="mb-3">
                    {
                        facilities.map(function(facilities){
                            return(
                                <table>
                                <tr>
                                    <td><label >{facilities.facilityName}</label></td>
                                    <td><label className="form-control" id="facilityCost">{facilities.facilityCost}</label></td>
                                </tr>
                                </table>
                            )
                        })
                    }
                </div>
                <div className="mb-3">
                    <label >Facility Price</label>
                    <input type="text" className="form-control" id="Fcost" placeholder="Enter Facility Cost"/>
                </div>
                <button className="btn btn-primary" onClick={Add}>Add</button>
                <div className="mb-3">
                    <label for="totalFPrice">Total Service Price</label>
                    <input type="text" className="form-control" id="totalFPrice" value={totalFPrice} readOnly required
                    onChange={(e)=>{
                        setTotalFPrice(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="laborCost">Labor Cost</label>
                    <input type="text" className="form-control" id="laborCost" placeholder="Enter Labor Cost" required
                    onChange={(e)=>{
                        setLaborCost(e.target.value);
                    }}/>
                </div>
                <div className="mb-3">
                    <label for="totalCost">Total Service Cost</label>
                    <input type="text" className="form-control" id="totalCost" value={totalCost} readOnly required 
                    onChange={(e)=>{
                        setTotalCost(e.target.value);
                    }}/>
                </div>
                <button className="btn btn-primary" onClick={calculation}>CALCULATE</button><br/><br/>
               <center> <button type="submit" className="btn btn-primary" >SUBMIT</button></center>

            </form>
        </div>
            
        </div>
    )
}