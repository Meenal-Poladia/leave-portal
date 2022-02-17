import {Route, Routes} from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import Leaves from "./pages/Leaves";

const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Login/>} exact/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/leaves" element={<Leaves/>}/>
            </Routes>
        </>
    )
}
export default Routing;