import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>THE DOJO BLOG</h1>
        <div className="link">
        <Link to="/">HOME</Link>
        <Link to="/create">ADD BLOG</Link>
        </div>
        </nav>
     );
}
 
export default Navbar;