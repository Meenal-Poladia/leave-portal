import * as React from 'react';
import Button from "@mui/material/Button";
import { useState} from "react";
import {useDispatch} from "react-redux";
import {editLeaveApplication, newLeaveApplication} from "../../actions";
import ReactDOM from "react-dom";
import Modal from 'react-modal';

const ApplyLeaveModal = ({showModal, id, closeModal, type, data, isNewApplication}) => {
    //UseState, dispatch and useRef
    const [startDate, setStartDate] = useState(null);
    const [errorMessage, setErrorMessage] = useState(false)
    const dispatch = useDispatch();

    //Style for Modal
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    //Variables declared
    const currentDate = new Date().toISOString().split("T")[0];

    //Functions Declared
    const showLeaveStartValue = (e) => {
        data.startDate = e.target.value
        setStartDate(e.target.value);
    }

    const dateToYMD = (date) => {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    }

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * (1000 - 1 + 1) + 1);
    }

    const handleDescriptionChange = (e) => {
        data.description = e.target.value;
    }

    const handleEndDateChange = (e) => {
        data.endDate = e.target.value
    }

    const handleLeaveApplication = (e) => {
        e.preventDefault();
        console.log(data.description)
        console.log(data.startDate)
        console.log(data.endDate)
        if(data.description === undefined || data.startDate === undefined || data.endDate === undefined) {
            setErrorMessage(true)
            return
        } else {
            data.applicationDate = dateToYMD(new Date());
            data.status = "Pending";
            data.leaveID = generateRandomNumber()
            if(isNewApplication) dispatch(newLeaveApplication(id, data))
            dispatch(editLeaveApplication(id, data))
            closeModal()
        }

    }

    return ReactDOM.createPortal(
        <Modal
            isOpen={showModal}
            style={customStyles}
            onRequestClose={closeModal}
            ariaHideApp={false}
            contentLabel="Leave Portal Modal">
            <form>
                <label htmlFor="leave">Description about your leave:</label>
                <textarea id="leave"
                          name="leave"
                          rows="5"
                          cols="33"
                          autoCapitalize="sentences"
                          autoCorrect="on"
                          defaultValue={isNewApplication ? "" : data.description}
                          onChange={(e) => handleDescriptionChange(e)}
                          maxLength="250"
                          minLength="3"
                          placeholder="Enter the reason for leave here"
                          required>
                </textarea>
                <div>
                    <label htmlFor="leave-start">Leave From:</label>
                    <input type="date"
                           id="leave-start"
                           name="leave-start"
                           defaultValue={data.startDate}
                           onChange={(e)=> showLeaveStartValue(e)}
                           min={currentDate}
                           required
                    />
                    <label htmlFor="leave-end">Leave To:</label>
                    <input type="date"
                           id="leave-end"
                           name="leave-end"
                           defaultValue={data.endDate}
                           onChange={(e) => handleEndDateChange(e)}
                           min={startDate}
                           required
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    className="submit-button"
                    onClick={handleLeaveApplication}
                    sx={{
                        mt: 3,
                        mb: 2
                    }}>
                    Submit Application
                </Button>
                {errorMessage &&
                <h4>Please fill all the details to proceed</h4>}
            </form>
        </Modal>,
        document.getElementById("modal-root")
    )
}
export default ApplyLeaveModal;