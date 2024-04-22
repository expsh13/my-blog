import React from "react";
import { Account } from "../components/Account/Account";
import { Login } from "../components/Login/Login";

export const Header = () => {
	return (
		<div>
			<Login />
			<Account />
		</div>
	);
};
