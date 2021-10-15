import React, { useState } from "react";
import "../App.css";
import Table from "./tableComponent/Table";
import { app_container } from "../App.module.css";
import Form from "./formComponent/Form";

export default function EmployeeTables() {
	const [employees, setEmployees] = useState([]);
	const [addFormData, setAddFormData] = useState({
		id: employees.length + 1,
		name: "",
		address: "",
		birthday: "",
		gender: "male",
		position: "employee",
		salary: "",
		email: "",
		ssn: "",
	});

	const nameList = [
		"ID",
		"Name",
		"address",
		"Birthday",
		"Gender",
		"Position",
		"Salary",
		"email",
		"SSN",
	];

	const handleAddFormChange = (e) => {
		e.preventDefault();

		const fieldName = e.target.getAttribute("name");
		const fieldValue = e.target.value;

		const newFormData = { ...addFormData };
		newFormData[fieldName] = fieldValue;

		setAddFormData(newFormData);
	};

	const addFormSubmit = (e) => {
		e.preventDefault();

		const newEmployee = {
			id: employees.length + 1,
			name: addFormData.name,
			address: addFormData.address,
			birthday: addFormData.birthday,
			gender: addFormData.gender,
			position: addFormData.position,
			salary: `$ ${addFormData.salary}`,
			email: addFormData.email,
			ssn: addFormData.ssn,
		};

		console.log(newEmployee);

		const newEmployees = [...employees, newEmployee];
		setEmployees(newEmployees);
	};

	return (
		<div className={app_container}>
			<h1>Employee Table</h1>
			<Table headerList={nameList} data={employees} />
			<h2>Add a contact</h2>
			<Form
				addFormSubmit={addFormSubmit}
				handleAddFormChange={handleAddFormChange}
			/>
		</div>
	);
}
