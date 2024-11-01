import { Outlet } from 'react-router-dom'
import './dashboard.css'
import DashboardSidebar from '../../../components/dashboard-sidebar/dashboard-sidebar'
function Dashboard() {
    return (
        <>
            <main className='dashboard-main'>
                <DashboardSidebar/>
                <Outlet />
            </main>
        </>
    )
}

export default Dashboard