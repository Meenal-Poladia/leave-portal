export const employeeCredential = (employeeCredential) => {
    return {
        type: "LOGIN_VALIDATION",
        payload: {
            employeeCredential: employeeCredential,
        }
    }
}

export const validatedEmployeeID = (id) => {
    return {
        type: "VALIDATED_EMPLOYEE_ID",
        payload: {
            validEmployeeID: id
        }
    }
}

export const newLeaveApplication = (id, data) => {
    return {
        type: "NEW_LEAVE_APPLICATION",
        payload: {
            id,
            data
        }
    }
}

export const editLeaveApplication = (ID, updatedData) => {
    return {
        type: "EDIT_LEAVE_APPLICATION",
        payload: {
            ID,
            updatedData
        }
    }
}

export const cancelLeaveApplication = (empID, cancelLeave) => {
    return {
        type: "CANCEL_LEAVE_APPLICATION",
        payload: {
            empID,
            cancelLeave
        }
    }
}