import { useState } from "react";
import { LuGift } from "react-icons/lu";

const Home = ({ addToCart, updateCartQuantity, cartItems }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const categories = [
        { emoji: "🛒", label: "All" },
        { emoji: "🍎", label: "Fruits" },
        { emoji: "🥕", label: "Vegetables" },
        { emoji: "🥛", label: "Dairy" },
        { emoji: "🍿", label: "Snacks" }
    ];

    const products = [
        { id: 1, name: "Fresh Bananas", category: "Fruits", weight: "1kg", rating: 4.3, price: 40, oldPrice: 50, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/959f3368e153e4cf3475e41318b33f8b" },
        { id: 2, name: "Fresh Mangoes", category: "Fruits", weight: "2 pieces", rating: 4.1, price: 129, oldPrice: 161, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/3/27/77ff698a-4a24-497c-8f22-60b9efce9a17_freshfruits_TO89IABYPG_MN.png" },
        { id: 3, name: "Carrots", category: "Vegetables", weight: "500g", rating: 4.0, price: 34, oldPrice: 43, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/d00087f08bdd05844c83e1beb6c6b87e" },
        { id: 4, name: "Beetroot", category: "Vegetables", weight: "500g", rating: 4.1, price: 19, oldPrice: 24, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/2c16f47d900ff298b17c4e95fe1d755c" },
        { id: 5, name: "Tomato", category: "Vegetables", weight: "500g", rating: 4.3, price: 17, oldPrice: 24, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/4a50a7b9bb1791dc454235a8943fcb90" },
        { id: 6, name: "Nandini Pasteurised Toned Milk", category: "Dairy", weight: "500ml", rating: 4.0, price: 24, oldPrice: 30, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/coxeba6jvi6vnjkktboa" },
        { id: 7, name: "Heritage Toned Milk", category: "Dairy", weight: "500ml", rating: 4.4, price: 26, oldPrice: 35, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/55832205672c90f343587b3675b64dfa" },
        { id: 8, name: "Heritage Curd", category: "Dairy", weight: "475g", rating: 4.0, price: 33, oldPrice: 35, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/10/10/8de3af6b-1377-4e35-9653-315cddad3ac1_22387.png" },
        { id: 9, name: "Bingo Originals", category: "Snacks", weight: "85g x 3", rating: 4.6, price: 100, oldPrice: 150, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/NI_CATALOG/IMAGES/CIW/2024/6/20/08919263-f51a-4f7a-9024-03b438a6f9cd_chipsnachosandpopcorn_6AQDVKXQM0_MN.png" },
        { id: 10, name: "Soya Sticks", category: "Snacks", weight: "200g", rating: 4.3, price: 54, oldPrice: 80, image: "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/50976db6f3134f9b80519c14f5cf844d" }
    ];

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(product => product.category === selectedCategory);
    return (
        <div className="py-3">
            {/* Promo Section */}
            <section className="bg-gradient-to-r from-orange-500 to-red-500 py-8 mt-2">
                <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between items-center px-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-orange-400 rounded-full p-3 flex items-center justify-center">
                            <LuGift className="text-white text-3xl" />
                        </div>
                        <div>
                            <h1 className="text-xl font-bold text-white">Super Savings Week!</h1>
                            <p className="text-sm text-gray-100">Up to 30% off on fresh groceries</p>
                        </div>
                    </div>
                    <div className="flex space-x-6">
                        <div className="text-center">
                            <h1 className="text-lg font-bold text-white">FREE</h1>
                            <p className="text-sm text-gray-100">Delivery on ₹99+</p>
                        </div>
                        <div className="text-center">
                            <h1 className="text-lg font-bold text-white">30%</h1>
                            <p className="text-sm text-gray-100">Max Discount</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Category Selection */}
            <div className="bg-white shadow-sm py-4 mb-5">
                <div className="max-w-screen-xl mx-auto flex justify-start space-x-4">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(category.label)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium cursor-pointer transition duration-200 ${
                                selectedCategory === category.label
                                    ? "bg-orange-500 text-white"
                                    : "bg-gray-100 hover:bg-orange-200 border border-gray-300"
                            }`}
                        >
                            <span className="text-lg">{category.emoji}</span>
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>
            </div>
            
            <div className="max-w-screen-xl mx-auto flex flex-col justify-start mb-10">
                <h1 className="text-2xl font-bold text-gray-800">Fresh Products</h1>
                <p className="text-md text-gray-600">Get doorstep delivery in just 10-15 minutes!</p>
            </div>

            {/* Product Grid */}
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => {
                    const cartItem = cartItems.find(item => item.id === product.id);
                    const quantity = cartItem ? cartItem.quantity : 0;

                    return (
                        <div key={product.id} className="p-4 rounded-lg shadow-md flex flex-col">
                            <img src={product.image} alt={product.name} className="h-50 object-cover rounded-md" />
                            <div className="mt-4 text-start flex flex-col gap-1">
                                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                                <p className="text-sm text-gray-600">{product.weight}</p>
                                <p className="text-sm font-semibold">⭐ {product.rating}</p>
                                <h1 className="text-lg font-bold text-red-500">
                                    <span className="line-through text-gray-500">₹{product.oldPrice}</span> ₹{product.price}
                                </h1>
                            </div>

                            {/* Quantity Controls */}
                            <div className="mt-4 text-center">
                                {quantity > 0 ? (
                                    <div className="flex items-center justify-center space-x-4">
                                        <button 
                                            onClick={() => updateCartQuantity(product.id, -1)}
                                            className="bg-gray-300 px-3 py-1 rounded-lg"
                                        >
                                            -
                                        </button>
                                        <span className="text-lg font-bold">{quantity}</span>
                                        <button 
                                            onClick={() => updateCartQuantity(product.id, 1)}
                                            className="bg-gray-300 px-3 py-1 rounded-lg"
                                        >
                                            +
                                        </button>
                                    </div>
                                ) : (
                                    <button 
                                        onClick={() => addToCart(product)}
                                        className="text-orange-500 border-orange-500 border font-bold px-4 py-2 rounded-lg w-full hover:bg-orange-500 hover:text-white transition duration-200 cursor-pointer"
                                    >
                                        + ADD
                                    </button>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Home;
