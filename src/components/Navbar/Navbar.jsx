import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Badge,
    MenuItem,
    Menu,
    Typography,
} from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

import logo from "../../assets/blknificent_logo.png";
import useStyles from "./styles.js";

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <img
                        src={logo}
                        alt="Commerce.js"
                        height="50px"
                        className={classes.image}
                    />
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton
                            aria-label="Show cart items"
                            color="inherit"
                        >
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    );
};

export default Navbar;
