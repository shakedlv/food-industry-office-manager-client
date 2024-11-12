import { useAuth0 } from '@auth0/auth0-react'
import UserAvatar from '../user-avatar/user-avatar'
import './dashboard-sidebar.css'
import {
    MdOutlineSpaceDashboard, MdOutlineInventory, MdOutlineReceipt
    , MdOutlineAnalytics
} from "react-icons/md";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function DashboardSidebar() {
    const { user } = useAuth0();
    return (
        <aside className='sidebar'>
            <div>
                <Link to={"/dashboard"}>
                    <MdOutlineSpaceDashboard size={32} />
                    <span>Dashboard</span>
                </Link>
                <Link to={"/dashboard/inventory"}>
                    <MdOutlineInventory size={32} />
                    <span>Inventory</span>
                </Link>
                <Link to={"/dashboard/recipes"}>
                    <MdOutlineReceipt size={32} />
                    <span>Recipes</span>
                </Link>
                <Link to={"/dashboard/analytics"}>
                    <MdOutlineAnalytics size={32} />
                    <span>Analytics</span>
                </Link>
                <Link to={"/dashboard/shedule"}>
                    <RiCalendarScheduleLine size={32} />
                    <span>Schedule</span>
                </Link>
            </div>
            <div>
                {user ? <UserAvatar user={user} /> : ""}

            </div>
        </aside>
    )
}

export default DashboardSidebar