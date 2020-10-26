import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import ImportPage from "./components/import/ImportPage";
import UpdatePage from "./components/update/UpdatePage";
import OrderWell from "./components/orderwell/OrderWell";
import Turnover from "./components/turnover/Turnover";
//import PageNotFound from "./components/PageNotFound";

library.add(faUpload);

function App() {
	return (
		<div className="app">
			<Router>
				<Navbar />
				<ToastContainer hideProgressBar={true} autoClose={3000} />

				<div className="wrapper">
					<Route exact path="/" component={Homepage} />
					<Route path="/update" component={UpdatePage} />
					<Route path="/import/" component={ImportPage} />
					<Route path="/turnover" component={Turnover} />
					<Route path="/orderwell/" component={OrderWell} />
				</div>
			</Router>
		</div>
	);
}

export default App;