import { CiLocationOn, CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="bg-white sticky top-0 w-full z-50 shadow-2xl">
            <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">
                {/* Logo Section */}
                <div className="flex items-center">
                    <img src="https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png" alt="Instamart Logo" className="h-10" />
                    <div className="mr-2">
                        <h1 className="text-lg font-bold">Swiggy</h1>
                        <p className="text-sm text-gray-600">Instamart</p>
                    </div>
                    {/* Location Section */}
                    <div className="flex items-center space-x-2 text-gray-700 ml-3">
                        <CiLocationOn className="text-xl" />
                        <p className="text-sm">Delivery to Home</p>
                    </div>
                </div>

                {/* Search Bar */}
                <div>
                    <h1 className="cursor-pointer text-lg text-gray-800 hover:text-orange-500 transition duration-200">
                        <Link to="/">Home</Link>
                    </h1>
                </div>
                <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-1/3 border-1">
                    <CiSearch className="text-xl text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search for products..."
                        className="bg-transparent outline-none ml-2 w-full text-sm"
                    />
                </div>

                {/* Buttons Section */}
                <div className="flex items-center space-x-4">
                    {/* Cart Button */}
                    <button className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200 cursor-pointer">
                        <Link to="/cart">🛒 Cart</Link>
                    </button>

                    {/* Admin Page Button */}
                    <a 
                        href="https://instamart-backend-a4b5.onrender.com/admin/login/?next=/admin/"  
                        target="_blank"
                        rel="noopener noreferrer"  
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        Admin Page
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
