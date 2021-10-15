import React from "react";

export default function FormInputSelect({
	labelInfo,
	name,
	valueList,
	handleAddFormChange,
}) {
	return (
		<div className='inputBox'>
			<label htmlFor={`${name}`}>{`${labelInfo}`}</label>
			<select onChange={handleAddFormChange} name={`${name}`}>
				{valueList.map((value, idx) => {
					return <option value={`${value}`} key={idx}>{`${value}`}</option>;
				})}
			</select>
		</div>
	);
}
