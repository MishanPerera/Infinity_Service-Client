import React from  "react";
import '../../NavBar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
     <>
    
        <ul class="nav flex-column"  class="sticky-top"><b>

                    <li className="nav-item">
                      <Link to = "/" className="nav-link" class="text-white"> Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to = "/addpayment" className="nav-link" class="text-white">Add Payment Details</Link>
                    </li>
                    <li className="nav-item">
                      <Link to = "/viewpayment" className="nav-link" class="text-white">View Payment Details</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/addpending" className="nav-link" class="text-white"> Add Pending List</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/viewpending" className="nav-link" class="text-white"> View Pending List</Link>
                    </li>
                    <li className="nav-item">
                      <Link to = "/addutility" className="nav-link" class="text-white"> Add Utility Expenses</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/addprofit" className="nav-link" class="text-white"> Generate Profit</Link>
                      
                    </li>
                    <li className="nav-item">
                    <Link to = "/viewreport" className="nav-link" class="text-white"> Monthly Profit Report</Link>
                      
                    </li>
            <br/><br/>
            <li>
                <h6 class="text-white"> &nbsp;&nbsp; Copyright 2021 @ INFINITY <br/></h6>
                <h6 class="text-white"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All Rights Reserved</h6><br/>
            </li>
            </b>
        </ul>
     </>
  )
}

export default Navbar;