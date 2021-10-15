import React from "react";

export default function FormInput({
	labelInfo,
	type,
	name,
	handleAddFormChange,
}) {
	return (
		<div className='inputBox'>
			<label htmlFor='input'>{labelInfo}</label>
			<input
				type={`${type}`}
				name={`${name}`}
				onChange={handleAddFormChange}
				required='required'
				{...(type === "number" ? { step: 0.01 } : {})}
			/>
		</div>
	);
}
