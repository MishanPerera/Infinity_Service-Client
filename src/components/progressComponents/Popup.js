import React from 'react'
import { Dialog, DialogTitle, DialogContent} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';

export default function Popup(props) {

    const {openPopup} = props;

    return (
       
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>Assign Employee</div>
            </DialogTitle >

                <DialogContent>
                    If you Want to assign Employee for this job?
                    <IconButton aria-label="add">
                        <Link to={"/add"}>     
                            <br />
                            <button type="submit" className="btn btn-secondary btn-success"><AddIcon  fontSize="small" />  ASSIGN EMPLOYEES</button>
                        </Link>
                    </IconButton>
                </DialogContent>
        </Dialog>
    )
}