import React from  "react";
import '../../NavBar.css';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return(
     <>
     <div style={{marginTop:"5px"}}>
        <ul className="nav flex-column"  className="sticky-top"><b>
                    <li className="nav-item" className="text-white">
                      <a className="nav-link active" aria-current="page" href="/ServiceFacilities" className="text-white">HOME</a>
                    </li>
                    <li className="nav-item">
                      <Link to = "/add" className="nav-link" className="text-white"> ASSIGN EMPLOYEES</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/service/:date" className="nav-link" className="text-white"> VIEW TODO SERVICES</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/search/:vNo" className="nav-link" className="text-white"> VIEW PROGRESS</Link>
                    </li>
                    <li className="nav-item">
                    <Link to = "/get/:vNo" className="nav-link" className="text-white">DELETE POSTPONED</Link>
                    </li>
                    <li className="nav-item">
                    <Link to= "/pro/:entryDate" className="nav-link" className="text-white">GENERATE REPORT</Link>
                    </li>
                    <li className="nav-item">
                    <Link to= "/" className="nav-link" className="text-white">ALL PROGRESS</Link>
                    </li>
            <br/><br/><br/><br/><br/>
            <li>
                <h6 className="text-white"> &nbsp;&nbsp;&nbsp;&nbsp; Copyright 2021 @ INFINITY <br/></h6>
                <h6 className="text-white"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; All Rights Reserved</h6><br/>
            </li>
            </b>
        </ul>
     </div>
     </>
  )
}

 
