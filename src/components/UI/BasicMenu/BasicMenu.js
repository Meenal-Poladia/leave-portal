import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import {BsThreeDotsVertical} from "react-icons/bs";
import ApplyLeaveModal from "../../ApplyLeaveModal/ApplyLeaveModal";
import {useDispatch, useSelector} from "react-redux";
import {cancelLeaveApplication} from "../../../actions";

const BasicMenu = ({data}) => {
    console.log(data);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const authenticatedID = useSelector((state) => state.leavePortalReducer.employeeID);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [updateLeaves, setUpdateLeaves] = useState(false)
    const dispatch = useDispatch()

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCancel = () => {
        console.log(`Cancelled pressed`, data);
        dispatch((cancelLeaveApplication(authenticatedID, data)))
        handleClose()
    }

    const handleUpdate = () => {
        setUpdateLeaves(true);
        handleClose()
    }

    const closeModal = () => {
        setUpdateLeaves(false)
    }

        return (
            <div>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <BsThreeDotsVertical/>
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleUpdate}>Update Leave</MenuItem>
                    <MenuItem onClick={handleCancel}>Cancel Leave</MenuItem>
                </Menu>
                {updateLeaves &&
                <ApplyLeaveModal
                    showModal={updateLeaves}
                    id={authenticatedID}
                    closeModal={closeModal}
                    data={data}
                    isNewApplication={false}
                />}
            </div>
        )
}
export default BasicMenu;