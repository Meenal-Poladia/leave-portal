import * as React from 'react';
import Button from "@mui/material/Button";
import {useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {leaveApplication} from "../../actions";
import ReactDOM from "react-dom";
import Modal from 'react-modal';

const ApplyLeaveModal = ({showModal, id, closeModal}) => {
    //UseState, dispatch and useRef
    const [startDate, setStartDate] = useState(null);
    const leaveDescriptionRef = useRef();
    const endLeaveDateRef = useRef();
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
        setStartDate(e.target.value)
    }

    const dateToYMD = (date) => {
        let d = date.getDate();
        let m = date.getMonth() + 1;
        let y = date.getFullYear();
        return '' + y + '-' + (m<=9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    }

    const handleLeaveApplication = (e) => {
        e.preventDefault();
        const description = leaveDescriptionRef.current.value;
        const endDate = endLeaveDateRef.current.value;
        const applicationDate = dateToYMD(new Date())
        const status = "Pending";
        dispatch(leaveApplication(id, startDate, endDate, description, applicationDate, status))
        closeModal()
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
                          ref={leaveDescriptionRef}
                          maxLength="250"
                          minLength="3"
                          placeholder="Enter the reason for leave here"
                          required>
                </textarea>
                <div>
                    <label htmlFor="start">Leave From:</label>
                    <input type="date"
                           id="start"
                           name="leave-start"
                           onChange={(e)=> showLeaveStartValue(e)}
                           min={currentDate}
                    />
                    <label htmlFor="end">Leave To:</label>
                    <input type="date"
                           id="end"
                           name="leave-end"
                           ref={endLeaveDateRef}
                           min={startDate}
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
            </form>
        </Modal>,
        document.getElementById("modal-root")
    )
}
export default ApplyLeaveModal;