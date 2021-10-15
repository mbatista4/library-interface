import React from "react";

export default function NavBar() {
	return (
		<div className='nav-app'>
			<h1>Nav</h1>
			<ul>
				<li>
					<a href='/'>home</a>
				</li>
				<li>
					<a href='/employees'>view employees</a>
				</li>
			</ul>
		</div>
	);
}
