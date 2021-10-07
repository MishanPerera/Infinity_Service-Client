import React from  "react";
import '../../NavBar.css';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return(
     <>
    
        <ul class="nav flex-column"  class="sticky-top"><b>

            
                    <li className="nav-item" className="text-white">
                      <Link to="/Home" className="nav-link active" aria-current="page"  class="text-white">HOME</Link>
                    </li>
            
                    <li className="nav-item">
                      <Link to = "/addfacilities" className="nav-link" class="text-white"> ADD SERVICE FACILITIES</Link>
                    </li>
                    <li className="nav-item">
                      <Link to = "/facilities" className="nav-link" class="text-white"> VIEW SERVICE FACILITIES</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/addnservice" className="nav-link" class="text-white"> ADD NORMAL SERVICE</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/addfservice" className="nav-link" class="text-white"> ADD FULL SERVICE</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/searchservice" className="nav-link" class="text-white"> SERACH SERVICE</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/servicereport" className="nav-link" class="text-white">GENERATE REPORT</Link>
                    </li>
            <br/><br/>
            <li>
                <br/>
                <h6 class="text-white"> &nbsp;&nbsp; Copyright 2021 @ INFINITY <br/></h6>
                <h6 class="text-white"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All Rights Reserved</h6><br/>
            </li>
            </b>
        </ul>
     </>
  )
}