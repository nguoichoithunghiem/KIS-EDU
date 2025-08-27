import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-green-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">My Website</h1>
            <ul className="flex gap-4">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
