import '../App.css';
import EmployeeDetails from "../components/EmployeeDetails/EmployeeDetails";
import {showHeaderAndFooter} from "../actions";
import {useDispatch} from "react-redux";

function Dashboard() {
    const dispatch = useDispatch();

    dispatch((showHeaderAndFooter(true)))

    return (
        <div>
            <EmployeeDetails/>
        </div>
    );
}

export default Dashboard;