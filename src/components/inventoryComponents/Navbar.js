import React from  "react";
import '../../NavBar.css';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
     <>
    
        <ul class="nav flex-column"  class="sticky-top"><b>

            
                    <li className="nav-item" className="text-white">
                      <a className="nav-link active" aria-current="page" href="#" class="text-white">Home</a>
                    </li>
            
                    <li className="nav-item">
                      <Link to = "/additems" className="nav-link" class="text-white"> ADD STOCKS</Link>
                    </li>
                    <li className="nav-item">
                      <Link to = "/addprices" className="nav-link" class="text-white"> ADD PRICE</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/searchitems" className="nav-link" class="text-white"> VIEW ITEM</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/searchsupplier" className="nav-link" class="text-white"> VIEW SUPPLIER</Link>
                    </li>
                    <li className="nav-item">
                      <Link to = "/searchavailability" className="nav-link" class="text-white"> AVAILABILITY</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/date" className="nav-link" class="text-white"> GENERATE STOCK REPORT</Link>
                      
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