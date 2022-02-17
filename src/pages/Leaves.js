import '../App.css';
import LeaveTable from "../components/LeaveTable/LeaveTable";
import {useDispatch} from "react-redux";
import {showHeaderAndFooter} from "../actions";

function Leaves() {
    const dispatch = useDispatch();

    dispatch((showHeaderAndFooter(true)))
    return (
        <>
            <LeaveTable/>
        </>
    );
}

export default Leaves;