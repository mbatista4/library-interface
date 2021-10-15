import React from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

export default function Table({ headerList, data }) {
	return (
		<table>
			<TableHead list={headerList} />
			<TableBody personList={data} />
		</table>
	);
}
