import '../App.css';
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import EmployeeDetails from "../components/EmployeeDetails/EmployeeDetails";

function Dashboard() {

    return (
        <div className="page-layout">
            <Header/>
            <EmployeeDetails/>
            <Footer/>
        </div>
    );
}

export default Dashboard;