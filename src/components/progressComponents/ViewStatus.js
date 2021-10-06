import React, {useState} from "react";
import axios from "axios";
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import {Link} from 'react-router-dom';

export default function ViewProgress() {

    const[vNo, setVNo] = useState('');
    const[entryDate, setEdate] = useState('');
    const[empNo, setEmpNo] = useState('');
    const[handoverDate, setHdate] = useState('');
    const[status, setStatus] = useState('');

   
        const getProgress=async() =>{ 

            await axios.get(`http://localhost:8070/progress/search/${vNo}`).then((res)=>{
            setEdate(res.data.progress.entryDate);
            setEmpNo(res.data.progress.empNo);
            setHdate(res.data.progress.handoverDate)
            setStatus(res.data.progress.status)
            alert("Data Fetched Successfully!!!");

            }).catch(()=>{
                alert("Invalid Vehiche No.Please Enter the Valid Vehicle No.");
                window.location.reload(false)
            })
        };

        const setData = () => {
        
            localStorage.setItem('VehicleNo',vNo);
            localStorage.setItem('HandoverDate',handoverDate);
            localStorage.setItem('Employee',empNo);
            localStorage.setItem('Status',status);
            localStorage.setItem('EntryDate',entryDate);
            window.location.reload(true);
        }
        
    return (
        <> 
            <center>
                <div style={{background:"#BBDEFB",paddingTop:"20px",paddingBottom:"20px",paddingRight:"50px",paddingLeft:"300px",marginTop:"-600px"}}>
                    <h3> Progress Status</h3>
                        <nav className="navbar">
                                <div className="container-fluid">
                                    <a className="navbar-brand"> </a>
                                        <form className="d-flex">
                                            <input className="form-control me-2" 
                                                type="text" 
                                                id="vNo"
                                                minLength={12} maxLength={12} value={vNo}  placeholder="Enter vehicle No" required 
                                                onChange={(e)=>{
                                                setVNo(e.target.value);
                                             }}/>
                                                <button className="btn-light btn-outline-success" type="submit" onClick={getProgress}>Search</button>&nbsp;
                                        </form>
                                </div>
                        </nav>
                    <div className="card container d-flex justify-content-center">
                            <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Vehicle No</th>
                                            <th>Entry Date</th>
                                            <th>Finishing Date</th>
                                            <th>Employee No</th>
                                            <th>Status</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td >{vNo}</td>
                                            <td >{entryDate}</td>
                                            <td >{handoverDate}</td>
                                            <td >{empNo}</td>
                                            <td >{status}</td>
                                            <td ><IconButton aria-label="edit" onClick={() =>setData()}>
                                                        <Link to={"/edit/:vNo"}> 
                                                            <EditIcon fontSize="small" />
                                                        </Link>
                                                </IconButton>
                                            </td>
                                        </tr>
                                    </tbody>
                            </table>
                    </div>
                </div>
            </center>
            <div className="container  text-white" style={{marginTop:"-550px" , paddingLeft:"400px"}}>
                <h1>WORK PROGRESS MANAGEMENT</h1>    
            </div>
        </>
    )
}




