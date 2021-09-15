import React,{useState, useEffect} from "react";
import '../../Form.css';
import axios from "axios";
import NavBar from "./NavBar";

export default function AddNormalService(){
    const [vNo, setVNo]= useState("");
    const [cusName, setCusName]= useState("");
    const [entryDate, setEntryDate]= useState("");
    const [handoverDate, setHandoverDate]= useState("");
    const [totalFPrice, setTotalFPrice]= useState(0);
    const [laborCost, setLaborCost]= useState("");
    const [totalCost, setTotalCost]= useState(0);

    //const [facilityCost, setFacilityCost]= useState([]);
    const [facilities, setFacilities] = useState([]);

    /*function calculation(){
        setTotalFPrice(totalFPrice = totalFPrice + facilities.facilityCost)
    }*/

    

    //const Add=()=>{
        //let sum= 0;
        //const array1 = [facilities.facilityCost];
        //facilities.foreach(facilityies => sum += facilities.facilityCost)
        /*let Arr = [facilities.facilityCost];
        const sum = Arr.reduce((result, facilityCost)=>result+facilityCost);
        console.log(sum);*/
       // setTotalFPrice(sum);
    
    //}
    

    useEffect(() => {
        function getFacilities(){

            axios.get("http://localhost:8070/nservice/").then((res)=>{
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
            totalFPrice,
            laborCost,
            totalCost
        }
        
        axios.post("http://localhost:8070/nservice/add",newNormal).then(()=>{
            alert("New Normal Service is Added to the System")
            setVNo("");
            setCusName("");
            setEntryDate("");
            setHandoverDate("");
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
        let currentNum=document.querySelector('#Fcost').value
        let sum= totalFPrice+parseInt(currentNum);
        setTotalFPrice(sum);
        document.querySelector('#Fcost').value="";
          
    }

    const calculation=(e)=>{
        e.preventDefault();
        let currentNum1=document.querySelector('#totalFPrice').value
        let currentNum2=document.querySelector('#laborCost').value
        let sum= totalCost+parseInt(currentNum1)+parseInt(currentNum2);
        setTotalCost(sum);
        //document.querySelector('#totalFPrice').value="";
        //document.querySelector('#laborCost').value="";
          
    }

    return(
        <div>
            <NavBar/>
            
        <div className="addFacilities">
        <center>
            <h2 className="text-white">SERVICE MANAGEMENT</h2>
            </center><br/>
            <form onSubmit={sendData} style={{  background: "#BBDEFB"}}>

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
                <center>
                    <h3>SERVICE MANAGEMENT</h3>
                </center>
                <div className="mb-3">
                    {
                        facilities.map(function(facilities){
                            return(
                                <table>
                                <tr>
                                    <td><label>{facilities.facilityName}</label></td>
                                    <td><label className="form-control" id="facilityCost">{facilities.facilityCost}</label></td>
                                </tr>
                                </table>
                            )
                        })
                    }
                </div>
                <div className="mb-3">
                    <label >Total Facility Price</label>
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
                <button className="btn btn-primary" onClick={calculation}>Add</button><br/><br/>
                <button type="submit" className="btn btn-primary" >SUBMIT</button>

            </form>
        </div>
        </div>
    )
}