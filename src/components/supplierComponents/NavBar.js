import React from  "react";
import '../../NavBar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
    
        <ul class="nav flex-column"  class="sticky-top"><b>

            
                    <li className="nav-item" className="text-white">
                      <Link to="/" className="nav-link active" aria-current="page"  class="text-white">HOME</Link>
                    </li>
            
                    <li className="nav-item">
                      <a className="nav-link" href="/add1" class="text-white"> ADD SUPPLIER</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="view2" class="text-white"> VIEW SUPPLIER DETAILS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/s1" class="text-white"> SEARCH SUPPLIER DETAILS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/add2" class="text-white"> ADD AGREEMENT</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="view1" class="text-white"> VIEW AGREEMENT DETAILS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/s2" class="text-white"> SEARCH AGREEMENT </a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/add3" class="text-white"> ADD ORDER DETAILS</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="/s3" class="text-white"> SEARCH ORDER DETAILS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="view3" class="text-white"> GENERATE REPORT</a>
                    </li>
            <br/><br/>
            <li>
                <h6 class="text-white"> &nbsp;&nbsp; Copyright 2021 @ INFINITY <br/></h6>
                <h6 class="text-white"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All Rights Reserved</h6><br/>
            </li>
            </b>
        </ul>
  )
}

export default Navbar;