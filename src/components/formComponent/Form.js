import React from "react";
import { addForm } from "./form.module.css";
import FormInput from "./FormInput";
import FormInputSelect from "./FormInputSelect";

export default function Form({ handleAddFormChange, addFormSubmit }) {
	return (
		<form className={addForm} onSubmit={addFormSubmit}>
			<FormInput
				labelInfo={"Enter Name: "}
				type={"text"}
				name={"name"}
				handleAddFormChange={handleAddFormChange}
			/>
			<FormInput
				labelInfo={" Enter address: "}
				type={"text"}
				name={"address"}
				handleAddFormChange={handleAddFormChange}
			/>
			<FormInput
				labelInfo={" Enter D.O.B: "}
				type={"date"}
				name={"birthday"}
				handleAddFormChange={handleAddFormChange}
			/>

			<FormInputSelect
				labelInfo={"Enter gender: "}
				name={"gender"}
				valueList={["male", "female", "other"]}
				handleAddFormChange={handleAddFormChange}
			/>
			<FormInputSelect
				labelInfo={"Select Position: "}
				name={"position"}
				valueList={["employee", "supervisor"]}
				handleAddFormChange={handleAddFormChange}
			/>
			<FormInput
				labelInfo={"Enter Salary: $"}
				type='number'
				name='salary'
				handleAddFormChange={handleAddFormChange}
			/>
			<FormInput
				labelInfo={"Enter email: "}
				type='email'
				name='email'
				handleAddFormChange={handleAddFormChange}
			/>
			<FormInput
				labelInfo={"enter ssn: "}
				type='text'
				name='ssn'
				handleAddFormChange={handleAddFormChange}
			/>

			<button type='submit'>Add Employee</button>
		</form>
	);
}
