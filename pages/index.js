import NextLink from "next/link";
import {
	Button,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Typography,
} from "@material-ui/core";
import Layout from "../components/Layout";
import data from "../utils/data";

export default function Home() {
	return (
		<Layout>
			<h1>All Products</h1>
			<Grid container spacing={2}>
				{data.products.map((product) => (
					<Grid item md={3} key={product.name}>
						<Card>
							<NextLink href={`product/${product.slug}`} passHref>
								<CardActionArea>
									<CardMedia
										component="img"
										image={product.image}
										title={product.name}
									></CardMedia>
									<CardContent>
										<Typography>{product.name}</Typography>
									</CardContent>
								</CardActionArea>
							</NextLink>
							<CardActions>
								<Typography>${product.price}</Typography>
								<Button size="small" variant="outlined" color="primary">
									Add to cart
								</Button>
							</CardActions>
						</Card>
					</Grid>
				))}
			</Grid>
		</Layout>
	);
}
