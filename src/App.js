import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import EmployeeTable from "./components/EmployeeTables";
import NavBar from "./components/NavBar";

function App() {
	return (
		<Router>
			<div className='App'>
				<NavBar />
				<Switch>
					<Route exact path='/'>
						<Home name={"hello"} />
					</Route>
					<Route exact path='/employees'>
						<EmployeeTable />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

const Home = ({ hello }) => {
	const [counter, setCounter] = useState([]);
	useEffect(() => {
		let count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
		setCounter(count);
		console.log("here");
	}, []);

	return (
		<div>
			<h1>Home page</h1>
			<h2>hello {hello}</h2>
		</div>
	);
};

export default App;
