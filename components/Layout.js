import React from "react";
import Head from "next/head";
import {
	AppBar,
	Container,
	CssBaseline,
	Toolbar,
	Typography,
} from "@material-ui/core";

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Veg-Fruits</title>
			</Head>
			<AppBar position="static">
				<Toolbar>
					<Typography>Veg Fruits</Typography>
				</Toolbar>
			</AppBar>
			<Container>{children}</Container>
			<footer>
				<Typography>All right reserved by Minhazul Abedin.</Typography>
			</footer>
		</div>
	);
};

export default Layout;
