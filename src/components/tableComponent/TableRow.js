import React from "react";

export default function TableRow({ person }) {
	return (
		<tr>
			<td>{person.id}</td>
			<td>{person.name}</td>
			<td>{person.address}</td>
			<td>{person.birthday}</td>
			<td>{person.gender}</td>
			<td>{person.position}</td>
			<td>{person.salary}</td>
			<td>{person.email}</td>
			<td>{person.ssn}</td>
		</tr>
	);
}
