import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Cart, Products, Navbar } from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    const fetchProducts = async () => {
        // returns a promise
        const { data } = await commerce.products.list();

        setProducts(data);
    };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);

        setCart(item.cart);
    };

    // effect hook that fetches products
    // dependency array is empty so that it only runs on render
    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Products
                                products={products}
                                onAddToCart={handleAddToCart}
                            />
                        }
                    />
                    <Route path="/cart" element={<Cart cart={cart} />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
