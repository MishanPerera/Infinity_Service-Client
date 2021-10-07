import React, {useState, useEffect} from "react";
import axios from "axios";
import NavBar from "./NavBar";
import jspdf from "jspdf";
import "jspdf-autotable"


export default function GenerateReport() {

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

        //generate report pdf code

        const generateNormalPDF = tickets => {

            const doc = new jspdf();
            const tableColumn = ["Vehicle No", "Customer Name", "Entry Date", "Handover Date","Total Facility Price","Labor Cost","Total Service Cost"];
            const tableRows = [];
        
            tickets.map(ticket => {
                const ticketData = [
                    ticket.vNo,
                    ticket.cusName,
                    ticket.entryDate,
                    ticket.handoverDate,
                    ticket.totalFPrice,
                    ticket.laborCost,
                    ticket.totalCost
                
                ];
                tableRows.push(ticketData);
            })
            doc.text("Monthly Normal Service Report", 14, 15).setFontSize(12);
            
            // right down width height
            doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
            doc.save('Monthly_Normal_Service_Report.pdf');
        };

        const generateFullPDF = tickets => {

            const doc = new jspdf();
            const tableColumn = ["Vehicle No", "Customer Name", "Entry Date", "Handover Date","Description","Total Facility Price","Labor Cost","Total Service Cost"];
            const tableRows = [];
        
            tickets.map(ticket => {
                const ticketData = [
                    ticket.vNo,
                    ticket.cusName,
                    ticket.entryDate,
                    ticket.handoverDate,
                    ticket.description,
                    ticket.totalFPrice,
                    ticket.laborCost,
                    ticket.totalCost
                
                ];
                tableRows.push(ticketData);
            })
            doc.text("Monthly Full Service Report", 14, 15).setFontSize(12);
            
            // right down width height
            doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
            doc.save('Monthly_Full_Service_Report.pdf');
        };

    return(    
        <> 
        <NavBar/>
            <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"50px",paddingLeft:"300px",marginTop:"-700px"}}>
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
                                        </tr>
                                    )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div><br />
                <center>
                <button type="print" className="btn btn-primary" onClick={() => generateNormalPDF(filteredData)}>Generate Report</button>
                </center>
            </div>
            <br></br>

            <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"50px",paddingLeft:"300px",marginTop:"10px"}}>
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
                                            <td>{value.totalCost}</td>
                                        </tr>
                                    )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div><br />
                <center>
                    <button type="print" className="btn btn-primary" onClick={() => generateFullPDF(filteredFData)}>Generate Report</button>
                </center>
            </div>
        </>
    )
}

