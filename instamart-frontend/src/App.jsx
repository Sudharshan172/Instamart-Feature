import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
    // Load cart from localStorage or initialize empty array
    const [cartItems, setCartItems] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        return storedCart ? JSON.parse(storedCart) : [];
    });

    // Save cart to localStorage whenever it updates
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add item to cart or update quantity
    const addToCart = (product) => {
        setCartItems((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    // Update item quantity in cart
    const updateCartQuantity = (id, amount) => {
        setCartItems((prevCart) => {
            return prevCart.map((item) => 
                item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
            );
        });
    };

    // Remove item from cart
    const removeFromCart = (id) => {
        setCartItems((prevCart) => prevCart.filter(item => item.id !== id));
    };

    return (
        <Router>
            <Navbar />
            <main className="flex-grow">
                <Routes>
                    <Route path="/" element={<Home addToCart={addToCart} updateCartQuantity={updateCartQuantity} cartItems={cartItems} />} />
                    <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} updateCartQuantity={updateCartQuantity} />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
