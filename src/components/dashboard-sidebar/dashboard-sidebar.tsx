import { useAuth0 } from '@auth0/auth0-react'
import UserAvatar from '../user-avatar/user-avatar'
import './dashboard-sidebar.css'
import {
    MdOutlineSpaceDashboard, MdOutlineInventory, MdOutlineReceipt
    , MdOutlineAnalytics
} from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";

function DashboardSidebar() {
    const { user } = useAuth0();
    return (
        <aside className='sidebar'>
            <ul>
                <li>
                    <MdOutlineSpaceDashboard size={32} />
                    <span>Dashboard</span>
                </li>
                <li>
                    <MdOutlineInventory size={32} />
                    <span>Inventory</span>
                </li>
                <li>
                    <MdOutlineReceipt size={32} />
                    <span>Recipes</span>
                </li>
                <li>
                    <MdOutlineAnalytics size={32} />
                    <span>Analytics</span>
                </li>
                <li>
                    <RiCalendarScheduleLine size={32} />
                    <span>Schedule</span>
                </li>
            </ul>
            <div>
                {user ? <UserAvatar user={user} /> : ""}

            </div>
        </aside>
    )
}

export default DashboardSidebar