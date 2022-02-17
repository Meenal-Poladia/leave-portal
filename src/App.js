import './App.css';
import "./pages/Leaves";
import "./pages/Dashboard";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Routing from "./Routing";
import {employeeCredential} from "./actions";
import {useDispatch} from "react-redux";
import {employeeData} from "./data/employeeData";

function App() {
    const dispatch = useDispatch()
    dispatch(employeeCredential(employeeData))

  return (
      <Router>
          <div className="App">
              <Routing/>
          </div>
      </Router>
  );
}

export default App;
