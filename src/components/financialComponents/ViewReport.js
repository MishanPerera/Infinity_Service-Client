import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../Styles.css';
//import profit from "../../../BACKEND/models/profit";
import jspdf from 'jspdf';
import "jspdf-autotable";
import Navbar from "./Navbar";

export default function ViewReport(){

    const [reports, setreports] = useState([]);
    const [total, settotal] = useState('');
    const [income, settotalIncome] = useState('');
    const [orderCost, settotalOrderCost] = useState('');
    const [salary, settotalSalary] = useState('');
    const [otherExpenses, settotalOtherExpenses] = useState('');
    



   


  useEffect(() => {
    function getData() {
        axios.get("http://localhost:8070/profit/").then((res) => {
            console.log(res.data);
            setreports(res.data);
           
            let totalIncome = 0;
            let totalOrderCost = 0;
            let totalSalary = 0;
            let totalOtherExpenses = 0;

            res.data.map(Array => {
                totalIncome += Array.income;
                totalOrderCost += Array.orderCost;
                totalSalary += Array.salary;
                totalOtherExpenses += Array.otherExpenses;



            })
            
            settotalIncome(totalIncome);
            settotalOrderCost(totalOrderCost);
            settotalSalary(totalSalary);
            settotalOtherExpenses(totalOtherExpenses);
            


        }).catch((error) => {
            alert(error.message);
        })
    }
    getData();


});


const getTotal = () => {
    let total = 0; 
    total = income -orderCost-salary-otherExpenses;
    settotal (total);

}

//generate pdf code

const generatePDF = tickets => {


    const doc = new jspdf();

    const tableColumn = ["DATE", "TOTAL INCOME(Rs)", "TOTAL ORDER COST(Rs)", "TOTAL SALARY(Rs)","TOTAL UTILITY EXPENSES(Rs)","DAILY PROFIT(Rs)"];

    const tableRows = [];



    tickets.map(ticket => {

        const ticketData = [

            ticket.date,

            ticket.income,

            ticket.orderCost,

            ticket.salary,

            ticket.otherExpenses,

            ticket.totalProfit

           

        ];

        tableRows.push(ticketData);

    })

    doc.text("Profit Report", 14, 15).setFontSize(12);

    // right down width height

    doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });

    doc.save(`Profit_Report.pdf`);

  };
   

   return (
    <div>
    <Navbar />
  
    <div className="viewreport" >
    <center>
    <h1 class="text-white">FINANCIAL MANAGEMENT</h1>
    </center>
    <br></br><br></br>
    <h5 class="text-white">PROFIT REPORT</h5>
    <br></br>
    <div>
        <table class ="table table-striped table-hover table-sm caption-top" style={{  background: "#BBDEFB", width:"99%", marginLeft:"10px", height: "250px"}} >
            <thead>
                <tr>
                    <th class="text-center" scope="col"> DATE</th>
                    <th class="text-center" scope="col">TOTAL INCOME(Rs)</th>
                    <th class="text-center" scope="col">TOTAL ORDER COST(Rs)</th>
                    <th class="text-center" scope="col">TOTAL SALARY(Rs)</th>
                    <th class="text-center" scope="col">TOTAL UTILITY EXPENSES(Rs)</th>
                    <th class="text-center" scope="col">DAILY PROFIT(Rs)</th>

                </tr>
            </thead>


            <tbody>
            {reports.map((reports) => {
                    
                    return (
                        <tr >
                            <td class="text-center" >{reports.date}</td>
                            <td class="text-center">{reports.income}</td>
                            <td class="text-center">{reports.orderCost}</td>
                            <td class="text-center">{reports.salary}</td>
                            <td class="text-center">{reports.otherExpenses}</td>
                            <td class="text-center">{reports.totalProfit}</td>

                            
                        </tr>
                    );
                    
                })}
                
            </tbody>     
        </table>
        <center><button className="btn btn-primary" onClick={getTotal}>Monthly Profit</button><br/><br/></center>
        <center><button type="Print" class="btn btn-primary" onClick={() => generatePDF(reports)}>Generate Report</button></center><br/>

        <table className="table table-striped table-light table table-hover">

      <tbody>

            <tr>

              <td>TOTAL MONTHY INCOME(Rs) : </td>

              <td>{income
}</td>

            </tr>

            <tr>

              <td> TOTAL MONTHLY ORDER COST(Rs)   :</td>

              <td>{orderCost}</td>

            </tr>

            <tr>

              <td>TOTAL MONTHLY SALARY(Rs)    :</td>

              <td>{salary}</td>

            </tr>

            <tr>

              <td>TOTAL MONTHLY UTILITY EXPENSES(Rs)       :</td>

              <td>{otherExpenses}</td>

            </tr>

            <tr>

              <td>MONTHLY PROFIT(Rs)       :</td>

              <td>{total}</td>

            </tr>



          </tbody>

           

      </table>

        <br></br>
    </div>

</div>
</div>


   );
}