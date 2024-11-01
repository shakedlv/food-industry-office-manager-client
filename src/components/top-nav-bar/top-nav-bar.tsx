import { Link } from 'react-router-dom'
import './top-nav-bar.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';
import UserAvatar from '../user-avatar/user-avatar';

function TopNavBar() {
    const { loginWithRedirect, user } = useAuth0();
    useEffect(() => {
        console.table(user);
    }, [user != null])

    return (
        <>
            <nav>
                <Link className='logo' to="/">KITCHENFLOW</Link>

                <div className='center'>
                    <Link to="/#about">About Us</Link>
                    <Link to="/#services">Our Services</Link>
                    <Link to="/#products">Our Products</Link>
                    <Link to="/pricing">Pricing</Link>

                </div>

                <div className='right'>
                    {user == null ?
                        <button className='login-btn' onClick={() => loginWithRedirect()}>Log In</button> :
                        <UserAvatar user={user} />
                    }
                </div>
            </nav>
        </>
    )
}

export default TopNavBar