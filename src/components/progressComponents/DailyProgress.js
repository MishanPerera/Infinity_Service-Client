import React, {useState, useEffect} from "react";
import axios from "axios";
import jspdf from "jspdf";
import "jspdf-autotable"



export default function DailyProgress() {

    const [allData,setAllData] = useState([]);
    const [filteredData,setFilteredData] = useState([]);

 
   useEffect(() => {
        function getProgresses(){
            axios("http://localhost:8070/progress/")
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

        //generate report pdf code

        const generatePDF = tickets => {

            const doc = new jspdf();
            const tableColumn = ["vehicle no", "entry date", "handover date", "emp no","status"];
            const tableRows = [];
        
            tickets.map(ticket => {
                const ticketData = [
                    ticket.vNo,
                    ticket.entryDate,
                    ticket.handoverDate,
                    ticket.empNo,
                    ticket.status
                
                ];
                tableRows.push(ticketData);
            })
            doc.text("Daily Progress Report", 14, 15).setFontSize(12);
            // right down width height
            doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
            doc.save('Daily_Progress_report_.pdf');
        };

    return(    
        <> 
            <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"50px",paddingLeft:"300px",marginTop:"-700px"}}>
                <center>
                    <h3> Daily Progress</h3>
                </center>&nbsp;&nbsp;&nbsp;         
                    <div>
                        <label>Search:</label>
                                <input type="date" onChange={(event) =>handleSearch(event)} />
                    </div><br />
                    <div className="card container d-flex justify-content-center">
                        
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                <th >Vehicle No</th>
                                <th >Entry Date</th>
                                <th >Employee Number</th>
                                <th >Status</th>
                                <th >Finishing Date</th>
                                </tr>
                            </thead>

                            <tbody>
                                {filteredData.map((value)=>{
                                    return(
                                        <tr> 
                                            <td>{value.vNo}</td> 
                                            <td>{value.entryDate}</td>
                                            <td>{value.empNo}</td>
                                            <td>{value.status}</td>
                                            <td>{value.handoverDate}</td>
                                        </tr>
                                    )
                                    })
                                    }
                            </tbody>
                        </table>
                    </div><br />
                <center>
                    <button type="print" className="btn btn-primary" onClick={() => generatePDF(filteredData)}>Generate Report</button>
                </center>
            </div>
            <div className="container  text-white" style={{marginTop:"-780px" , paddingLeft:"400px"}}>
                <h1>WORK PROGRESS MANAGEMENT</h1>
            </div>
        </>
    )
}
