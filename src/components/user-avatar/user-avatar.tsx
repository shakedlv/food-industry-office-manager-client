import { useAuth0, User } from '@auth0/auth0-react'
import './user-avatar.css'

type UserAvatarProps = {
    user: User;
}
function UserAvatar({ user }: UserAvatarProps) {
    const { logout} = useAuth0();

    return (
        <div className='avatar'>
            <img src={user.picture} alt={user.name + " profile picture"} />
            <div className='overlay'>{user.given_name ? user.given_name[0] : ''} {user.family_name ? user.family_name[0] : ''}</div>
            <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
    )
}

export default UserAvatar