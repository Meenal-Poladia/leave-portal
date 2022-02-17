import './App.css';
import "./pages/Leaves";
import "./pages/Dashboard";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Routing from "./Routing";
import {employeeCredential} from "./actions";
import {useDispatch, useSelector} from "react-redux";
import {employeeData} from "./data/employeeData";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import {useEffect, useState} from "react";

function App() {
    const value = useSelector((state) => state.leavePortalReducer.showHeaderAndFooter);
    const [showHeaderAndFooter, setShowHeaderAndFooter] = useState(false);
    const dispatch = useDispatch()

    useEffect(() => {
        setShowHeaderAndFooter(value);
    }, [value])

    dispatch(employeeCredential(employeeData))

  return (
      <Router>
          <div className="App">
              {showHeaderAndFooter && <Header/> }
              <Routing/>
              {showHeaderAndFooter && <Footer/>}
          </div>
      </Router>
  );
}

export default App;
