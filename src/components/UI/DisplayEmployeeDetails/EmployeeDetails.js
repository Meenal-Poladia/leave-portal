import {useSelector} from "react-redux";
import {employeeData} from "../../../data/employeeData";
import './DisplayEmployeeDetails.css'
import Button from "@mui/material/Button";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import ApplyLeavePopUp from "./ApplyLeavePopUp/ApplyLeavePopUp";
import {useState} from "react";

const DisplayEmployeeDetails = () => {
    const authenticatedID = useSelector((state) => state.leavePortalReducer.employeeID);
    const [showModal, setShowModal] = useState(false)
    const navigate = useNavigate();

    const findEmployeeDetails = () => {
        return employeeData.find((item) => authenticatedID === item.id);
    }
    const employee = findEmployeeDetails();

    const handleAppliedLeaves = () => {
        navigate("/leaves");
    }

    const handleApplyForLeave = () => {
        setShowModal(true);
    }

    // function closeModal() {
    //     setShowModal(false);
    // }

    return (
        <section className="employee-details">
           <div className="employee-card">
               <h3 className="heading">Employee Details</h3>
               <div className="employee-info">
                    <div className="row">
                        <span className="employee-info-font"> Name: </span>
                        <span className="employee-info-font"> { employee.username } </span>
                    </div>
                    <div className="row">
                        <span className="employee-info-font"> Position: </span>
                        <span className="employee-info-font"> { employee.position } </span>
                    </div>
                    <div className="row">
                        <span className="employee-info-font"> Nationality: </span>
                        <span className="employee-info-font"> { employee.nationality } </span>
                    </div>
                    <div className="row">
                        <span className="employee-info-font"> Contact Number: </span>
                        <span className="employee-info-font"> { employee.contactNumber } </span>
                    </div>
                   <div className="row">
                       <span className="employee-info-font"> Applied Leaves: </span>
                       <span className="employee-info-font"> { employee.appliedLeaves } </span>
                   </div>
               </div>
               <div className="leave-btn-group">
                   <Button
                       type="submit"
                       variant="contained"
                       className="submit-button"
                       onClick={handleAppliedLeaves}
                       sx={{
                           mt: 3,
                           mb: 2
                       }}>
                       Applied Leaves
                   </Button>
                   <Button
                       type="submit"
                       variant="contained"
                       className="submit-button"
                       onClick={handleApplyForLeave}
                       sx={{
                           mt: 3,
                           mb: 2
                       }}>
                       Apply Leaves
                   </Button>
               </div>
           </div>
            {showModal && <ApplyLeavePopUp
                showModal={showModal}
                // closeModal={closeModal}
                id={employee.id}
            />}
        </section>
    )
}
export default DisplayEmployeeDetails;