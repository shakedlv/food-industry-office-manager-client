import { Link } from 'react-router-dom'
import './top-nav-bar.css'
function TopNavBar() {
    return (
        <>
            <nav>
                <Link className='logo' to="/">KITCHENFLOW</Link>

                <div className='center'>
                    <Link to="/#aboutus">About Us</Link>
                    <Link to="/#services">Our Services</Link>
                    <Link to="/#products">Our Products</Link>
                    <Link to="/pricing">Pricing</Link>

                </div>

                <div className='right'>
                    <button className='login-btn'>Log In</button>
                </div>
            </nav>
        </>
    )
}

export default TopNavBar