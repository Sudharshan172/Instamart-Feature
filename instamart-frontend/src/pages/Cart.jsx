import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart }) => {
    const navigate = useNavigate();
    const [applyFreeCash, setApplyFreeCash] = useState(false);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountedPrice = applyFreeCash ? totalPrice - 100 : totalPrice; // Deduct ₹100 if checked

    const handleCheckout = async () => {
        const orderData = {
            cartItems: cartItems,
            totalPrice: discountedPrice,
        };

        const response = await fetch("http://127.0.0.1:8000/orders/checkout/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });

        const result = await response.json();
        if (response.ok) {
            alert("Order Placed Successfully!");
            navigate("/"); // Redirect to home page
        } else {
            alert("Checkout failed! Please try again.");
        }
    };

    return (
        <div className="max-w-screen-xl mx-auto py-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart</h1>

            {cartItems.length === 0 ? (
                <p className="text-gray-600">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                    {cartItems.map(item => (
                        <div key={item.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
                            <img src={item.image} alt={item.name} className="h-full w-full rounded-md" />
                            <h2 className="text-lg font-semibold text-gray-800 mt-2">{item.name}</h2>
                            <p className="text-sm text-gray-600">₹{item.price * item.quantity}</p>

                            {/* Remove Button */}
                            <button 
                                onClick={() => removeFromCart(item.id)} 
                                className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Apply Free Cash Checkbox */}
            {cartItems.length > 0 && (
                <div className="mt-6 text-center">
                    <label className="flex items-center justify-center space-x-2 text-gray-700">
                        <input 
                            type="checkbox" 
                            checked={applyFreeCash} 
                            onChange={() => setApplyFreeCash(!applyFreeCash)}
                            className="cursor-pointer accent-orange-500"
                        />
                        <span className="text-lg font-medium">Apply Free Cash ₹100</span>
                    </label>

                    {/* Total Price Section */}
                    <h2 className="text-xl font-bold mt-4">Total: ₹{discountedPrice}</h2>
                    <button 
                        onClick={handleCheckout} 
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-200 mt-4"
                    >
                        Checkout
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;
