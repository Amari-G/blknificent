import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        // returns a promise
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    // effect hook that fetches products
    // dependency array is empty so that it only runs on render
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    );
};

export default App;
