import {employeeData} from "../data/employeeData";

const initialState = {
    employeeData: [],
    employeeID: null
}

const leavePortalReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN_VALIDATION":
            const {employeeCredential} = action.payload;
            return {
                ...state,
                employeeData: [
                    ...employeeCredential
                ]
            }
        case "VALIDATED_EMPLOYEE_ID":
            const {validEmployeeID} = action.payload;
            return {
                ...state,
                employeeID: validEmployeeID,

            }
        case "NEW_LEAVE_APPLICATION":
            const {id, data} = action.payload;
            const updatedEmployee = state.employeeData.map((employee) => {
                if(employee.id === id) {
                    employee.leaves.push(data)
                    return employee
                }
                return employee
            })
            return {
                ...state,
                employeeData: updatedEmployee
            }

        case "EDIT_LEAVE_APPLICATION":
            const {ID, updatedData} = action.payload

            const changedEmployeedData = state.employeeData.map((employee) => {
               if(employee.id === ID) {
                   const updatedLeaves = employee.leaves.map((leave) => {
                       if(leave.leaveID === updatedData.leaveID) {
                           return updatedData;
                       }
                       return leave;
                   })
                   employee.leaves = updatedLeaves;
                   return employee
               }
               return employee
            })
            return {
                ...state,
                employeeData: changedEmployeedData
            }

        case "CANCEL_LEAVE_APPLICATION":
            const {empID, cancelLeave} = action.payload

            const newEmployeeList = employeeData.map((employee) => {
                console.log(employee.id, empID);
                if(employee.id === empID) {
                    employee.leaves = employee.leaves.filter((item) => {
                        return item.leaveID !== cancelLeave.leaveID
                    })
                    return employee
                }
                return employee
            })
            return {
                ...state,
                employeeData: newEmployeeList
            }

        default: return state
    }
}
export default leavePortalReducer;

