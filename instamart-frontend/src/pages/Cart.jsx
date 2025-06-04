import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems, removeFromCart, clearCart }) => {
    const navigate = useNavigate();
    const [applyFreeCash, setApplyFreeCash] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountedPrice = applyFreeCash ? totalPrice - 100 : totalPrice;

    const handleCheckout = async () => {
        const orderData = {
            cartItems,
            totalPrice: discountedPrice,
        };

        const response = await fetch("https://instamart-backend-a4b5.onrender.com/orders/checkout/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData),
        });

        const result = await response.json();
        if (response.ok) {
            setShowModal(true);
            clearCart();  // Show the modal on success
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

                    <h2 className="text-xl font-bold mt-4">Total: ₹{discountedPrice}</h2>
                    <button 
                        onClick={handleCheckout} 
                        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-200 mt-4"
                    >
                        Checkout
                    </button>
                </div>
            )}

            {/* Modal Component */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
                        <h2 className="text-xl font-bold text-green-500">Order Placed Successfully!</h2>
                        <p className="mt-2 text-gray-600">Thank you for shopping with us.</p>

                        {/* Display Order Summary */}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Order Summary</h3>
                            <div className="mt-2 text-gray-700">
                                {cartItems.map(item => (
                                    <div key={item.id} className="flex justify-between py-2">
                                        <span>{item.name}</span>
                                        <span>{item.quantity}x ₹{item.price}</span>
                                    </div>
                                ))}
                            </div>
                            <h3 className="mt-4 text-xl font-bold">Total Amount: ₹{discountedPrice}</h3>
                        </div>

                        <button 
                            onClick={() => { setShowModal(false); navigate("/"); }} 
                            className="mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        >
                            Go to Home
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Cart;
