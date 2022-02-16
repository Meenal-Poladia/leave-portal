const initialState = {
    employeeData: 0,
    appliedLeaves: 0,
    applyLeaves: 0,
}

const leavePortal = (state = initialState, action) => {
    switch (action.payload) {
        case "LOGIN_VALIDATION":
            const {employeeCredentials} = action.payload;
            const employeeCredential = employeeCredentials.map((data) => {
                return data
            })
            return {
                ...state,
                employeeData: employeeCredential
            }
        default: return state
    }
}
export default leavePortal;