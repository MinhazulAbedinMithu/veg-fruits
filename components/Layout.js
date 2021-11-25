import React, { useContext } from "react";
import Head from "next/head";
import NavLink from "next/link";
import {
	AppBar,
	Container,
	createMuiTheme,
	ThemeProvider,
	createTheme,
	CssBaseline,
	Link,
	Toolbar,
	Typography,
	Switch,
} from "@material-ui/core";
import useStyles from "../utils/styles";
import { Store } from "../utils/Store";
import { dark } from "@material-ui/core/styles/createPalette";
import Cookies from "js-cookie";

const Layout = ({ title, description, children }) => {
	const { state, dispatch } = useContext(Store);
	const { darkMode } = state;

	const theme = createMuiTheme({
		Typography: {
			h1: {
				fontSize: "25px",
			},
			h2: {
				fontSize: "20px",
			},
		},
		palette: {
			type: darkMode ? "dark" : "light",

			primary: {
				main: "#74FF00",
			},
			secondary: {
				main: "#00E4FF",
			},
		},
	});
	const classes = useStyles();
	const handleDarkMode = () => {
		dispatch({type: darkMode ? 'DARK_MODE_OFF' : 'DARK_MODE_ON'});
		const newDarkMode = !darkMode;
		Cookies.set('darkMode', newDarkMode ? 'ON' : 'OFF');
	}

	return (
		<ThemeProvider theme={theme}>
			<Head>
				<title>{title ? `${title} | Veg-Fruits` : "Veg-Fruits"}</title>
				{description && <meta name="description" content={description}></meta>}
			</Head>
			<CssBaseline />
			<AppBar position="static" className={classes.navbar}>
				<Toolbar>
					<NavLink href="/" passHref>
						<Link>
							<Typography className={classes.brand} component="h1">
								Veg Fruits
							</Typography>
						</Link>
					</NavLink>
					<div className={classes.grow}></div>
					<div className="menuList">
						<NavLink href="/shop" passHref>
							<Link>Shop</Link>
						</NavLink>
						<NavLink href="/cart" passHref>
							<Link>Cart</Link>
						</NavLink>
						<NavLink href="/login" passHref>
							<Link>Login</Link>
						</NavLink>
					</div>
					<div className="darkMode">
						<Switch checked={darkMode} onChange={handleDarkMode}></Switch>
					</div>
				</Toolbar>
			</AppBar>
			<Container className={classes.main}>{children}</Container>
			<footer className={classes.footer}>
				<Typography>All right reserved by Minhazul Abedin.</Typography>
			</footer>
		</ThemeProvider>
	);
};

export default Layout;
