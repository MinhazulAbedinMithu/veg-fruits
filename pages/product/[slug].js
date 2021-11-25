import React from "react";
import {
	Button,
	Card,
	Grid,
	Link,
	List,
	ListItem,
	Typography,
} from "@material-ui/core";
import NextLink from "next/link";
// import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
// import data from "../../utils/data";
import db from "../../utils/db";
import Product from "../../models/Product";

export default function ProductDetails(props) {
	const { product } = props;
	// const router = useRouter();
	// const { slug } = router.query;
	// const product = data.products.find((pd) => pd.slug === slug);
	if (!product) {
		return (
			<div>
				<Typography>404 - Product not Found</Typography>
			</div>
		);
	}
	return (
		<Layout title={product.name} description={product.description}>
			<NextLink href="/" passHref>
				<Link>
					<Typography>Back to Home</Typography>
				</Link>
			</NextLink>
			<Grid container spacing={2}>
				<Grid item md={6} xs={12}>
					<Image
						src={product.image}
						alt={product.name}
						height={300}
						width={300}
						layout="responsive"
					/>
				</Grid>
				<Grid item md={3} xs={12}>
					<List>
						<ListItem>
							<Typography component="h1">{product.name}</Typography>
						</ListItem>
						<ListItem>
							<Typography>Category: {product.category}</Typography>
						</ListItem>
						<ListItem>
							<Typography>
								Rating: {product.rating} stars ({product.numReviews} reviews)
							</Typography>
						</ListItem>
						<ListItem>
							<Typography>Description: {product.description}</Typography>
						</ListItem>
					</List>
				</Grid>
				<Grid item md={3} xs={12}>
					<Card>
						<List>
							<ListItem>
								<Grid container spacing={1}>
									<Grid item md={6}>
										<Typography>Price </Typography>
									</Grid>
									<Grid item md={6}>
										<Typography>{product.price}</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Grid container spacing={1}>
									<Grid item md={6}>
										<Typography>Status </Typography>
									</Grid>
									<Grid item md={6}>
										<Typography>
											{product.countStock > 1 ? "In Stock" : "Unavailable"}
										</Typography>
									</Grid>
								</Grid>
							</ListItem>
							<ListItem>
								<Button fullWidth variant="contained" color="primary">
									Add to Cart
								</Button>
							</ListItem>
						</List>
					</Card>
				</Grid>
			</Grid>
		</Layout>
	);
}

export async function getServerSideProps(context) {
	const { params } = context;
	const { slug } = params;

	await db.connect();
	const product = await Product.findOne({ slug }).lean();
	await db.disconnect();
	return {
		props: {
			product: db.convertDocToObj(product),
		},
	};
}
