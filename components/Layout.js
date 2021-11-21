import React from "react";
import Head from "next/head";
import {
	AppBar,
	Container,
	CssBaseline,
	Toolbar,
	Typography,
} from "@material-ui/core";
import useStyles from "../utils/styles";

const Layout = ({ children }) => {
  const classes = useStyles();

	return (
		<div>
			<Head>
				<title>Veg-Fruits</title>
			</Head>
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<Typography>Veg Fruits</Typography>
				</Toolbar>
			</AppBar>
			<Container className={classes.main}>{children}</Container>
			<footer className={classes.footer}>
				<Typography>All right reserved by Minhazul Abedin.</Typography>
			</footer>
		</div>
	);
};

export default Layout;
