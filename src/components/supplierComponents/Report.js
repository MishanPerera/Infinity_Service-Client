import React,{useState, useEffect} from "react";
import axios from "axios";
import '../../viewStyle.css';
import {Link} from "react-router-dom";
import jspdf from 'jspdf'
import "jspdf-autotable"
import NavBar from "./NavBar";
import '../../NavBar.css';

export default function Report() {

    const [orders, setOrders] = useState([]); 


    useEffect(() => {
        //fetching all order data from the database
        axios.get("http://localhost:8070/order/").then((res) => {
            if (res.data.length > 0) {
                setOrders(res.data);
            }
        }).catch((err) => {
            console.log(err.message);
        })

    }, [])


    //generate pdf code

    const generatePDF = tickets => {

        const doc = new jspdf();
        const tableColumn = ["Order No.", "Supplier No.", "Order Date", "Item Codes","Cost (Rs)","Payment Date"];
        const tableRows = [];
    
        tickets.map(ticket => {
            const ticketData = [
                ticket.orderNo,
                ticket.supplierNo,
                ticket.orderDate,
                ticket.itemCodes,
                ticket.cost,
                ticket.paymentDate
               
            ];
            tableRows.push(ticketData);
        })
        doc.text("Supplier Purchasing Report", 14, 15).setFontSize(12);
        // right down width height
        doc.autoTable(tableColumn, tableRows, { styles: { fontSize: 8, }, startY: 35 });
        doc.save(`Supplier_purchasing_report_.pdf`);
      };


    return (

        <div>
        <NavBar/>

<div class="lft">
<div class="card" >
<div className="container">
<center><h1><strong>SUPPLIER MANAGEMENT</strong></h1></center><br/>
    <br></br>
    <center>
      <h5>SUPPLIER PURCHASING REPORT</h5>
    </center>
    <br></br>
    
    <table class="table table-bordered table-hover" style = {{background:"#BBDEFB"}}>

                    <thead>
                        <tr>
                            <th>Order No.</th>
                            <th>Supplier No.</th>
                            <th>Order Date</th>
                            <th>Item Codes</th>
                            <th>Cost (Rs)</th>
                            <th>Payment Date</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(function (f) {
                                return <tr>
                                    

                                    <td >{f.orderNo}</td>
                                    <td >{f.supplierNo} </td>
                                    <td >{f.orderDate} </td>
                                    <td >{f.itemCodes} </td>
                                    <td >{f.cost} </td>
                                    <td >{f.paymentDate} </td>

                                </tr>

                            })
                        }
                    </tbody>
                    </table>

                <br/>
            <center><button type="Print" class="btn btn-primary" onClick={() => generatePDF(orders)}>Generate Report</button></center><br/>
</div>
</div>
</div>

        </div>

    )    
}        