import { useAuth0, User } from '@auth0/auth0-react'
import './user-avatar.css'
import { Link, useNavigate } from 'react-router-dom';

type UserAvatarProps = {
    user: User;
    showDropdown?: boolean
}
function UserAvatar({ user, showDropdown }: UserAvatarProps) {
    const { logout } = useAuth0();
    const navigate = useNavigate();
    return (
        <div className='avatar'>
            <img  src={user.picture} alt={user.name + " profile picture"} />
            <div  onClick={() => navigate("/profile")} className='overlay'>{user.given_name ? user.given_name[0] : ''} {user.family_name ? user.family_name[0] : ''}</div>
            {showDropdown == true ? <div className="dropdown-content">
                <Link to={"/dashboard"}>Dashboard</Link>
                <Link to={"/profile"}>Profile</Link>

                <a onClick={() => logout()}>Logout</a>
            </div> : ""}
        </div>
    )
}

export default UserAvatar