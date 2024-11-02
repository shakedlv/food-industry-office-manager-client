import { Link } from 'react-router-dom'
import './top-nav-bar.css'
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';
import UserAvatar from '../user-avatar/user-avatar';
import { MdMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";

function TopNavBar() {
    const { loginWithRedirect, user } = useAuth0();
    useEffect(() => {
        console.table(user);
    }, [user != null])

    const ToggleMobileNavBar = () => {
        var element = document.getElementById("mobile-nav-bar");
        if (element == null) {
            return;
        }

        if (element.className === "mobile-nav-bar") {
            element.className += " show";
        } else {
            element.className = "mobile-nav-bar";
        }
    }
    return (
        <>
            <nav>
                <Link className='logo' to="/">KITCHENFLOW</Link>

                <div className='center hide-small'>
                    <Link to="/#about">About Us</Link>
                    <Link to="/#services">Our Services</Link>
                    <Link to="/#products">Our Products</Link>
                    <Link to="/pricing">Pricing</Link>

                </div>

                <div className='right hide-small'>
                    {user == null ?
                        <button className='login-btn' onClick={() => loginWithRedirect()}>Log In</button> :
                        <UserAvatar user={user} showDropdown={true} />
                    }
                </div>
                <div className='right show-small'>
                    <MdMenu size={48} onClick={() => ToggleMobileNavBar()} />

                </div>
                <div className='mobile-nav-bar ' id="mobile-nav-bar">
                    <div className='title'><Link className='logo' to="/" onClick={() => ToggleMobileNavBar()}>KITCHENFLOW</Link> <IoMdClose size={48} onClick={() => ToggleMobileNavBar()} /> </div>
                    <Link to="/#about" onClick={() => ToggleMobileNavBar()}>About Us</Link>
                    <Link to="/#services" onClick={() => ToggleMobileNavBar()}>Our Services</Link>
                    <Link to="/#products" onClick={() => ToggleMobileNavBar()}>Our Products</Link>
                    <Link to="/pricing" onClick={() => ToggleMobileNavBar()}>Pricing</Link>
                    <hr />
                    {user != null ? <>
                        <Link to="/dashboard" onClick={() => ToggleMobileNavBar()}>dashboard</Link>
                        <hr /></> : ""}
                    <div className='center'>
                        {user == null ?
                            <button className='login-btn solid' onClick={() => loginWithRedirect()}>Log In</button> :
                            <UserAvatar user={user} showDropdown={true} />
                        }
                    </div>
                </div>
            </nav>
        </>
    )
}

export default TopNavBar