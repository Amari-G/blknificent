import React from "react";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import useStyles from "./styles";

const Products = ({ products }) => {
    const classes = useStyles();

    console.log(products);

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {
                    // Map each product in the array to a Product component
                    products.map((product) => (
                        <Grid
                            item
                            key={product.id}
                            xs={12}
                            sm={6}
                            md={4}
                            lg={3}
                        >
                            <Product product={product} />
                        </Grid>
                    ))
                }
            </Grid>
        </main>
    );
};

export default Products;