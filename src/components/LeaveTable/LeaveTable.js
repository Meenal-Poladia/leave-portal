import {useSelector} from "react-redux";
import "./LeaveTable.css";
import BasicMenu from "../UI/BasicMenu/BasicMenu";
import {MdDoneOutline} from "react-icons/md";

const LeaveTable = () => {
    const employeeData = useSelector((state) => state.leavePortalReducer.employeeData);
    const employeeID = useSelector((state) => state.leavePortalReducer.employeeID);

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * (1000 - 1 + 1) + 1);
    }

    const findEmployee = () => {
        return employeeData.find((data) => {
           return data.id === employeeID
        })
    }

    const foundEmployee = findEmployee();
    const leaves = foundEmployee.leaves;

    return (
        <section className="leave-table">
            <table>
                <caption className="heading">Employees Leaves Details</caption>
                <thead>
                    <tr>
                        <th>Leave Application Date/s</th>
                        <th>Leave Date/s</th>
                        <th>Reason for the leave</th>
                        <th>Status of the leave</th>
                        <th>Updates</th>
                    </tr>
                </thead>
                {
                    leaves.map((data) => {
                        return (
                            <tbody key={generateRandomNumber()}>
                                <tr>
                                    <td>{data.applicationDate}</td>
                                    <td>{data.startDate} to {data.endDate}</td>
                                    <td>{data.description}</td>
                                    <td>{data.status}</td>
                                    <td>{data.status === "Pending"
                                        ?
                                        <BasicMenu data={data}/>
                                        :
                                        <MdDoneOutline/>
                                    }</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
        </section>
    )
}
export default LeaveTable