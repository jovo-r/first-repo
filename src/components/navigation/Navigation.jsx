import { Link } from "react-router-dom"
import './navigation.style.css'

const Navigation = () => {
    return (
        <div className="navigation">
            <div className="navigation_wrapper">
                <span>React course</span>
                <nav className="navigation_list">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/team">Team</Link>
                    <Link to="/contact">Contact</Link>
                    {/* <Link to="/users">Users</Link> */}
                </nav>
            </div>
        </div>
    )
};

export default Navigation;