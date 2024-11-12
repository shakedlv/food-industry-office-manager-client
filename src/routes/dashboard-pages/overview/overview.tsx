import DashboardCard from '../../../components/dashboard/dashboard-card/dashboard-card'
import './overview.css'
function Overview() {
    return (
        <div className='dashboard-container'>
            <div className='dashboard-row'>
                <DashboardCard size='s' />
                <DashboardCard size='l'/>
                <DashboardCard size='m'/>
                
            </div>
            <div className='dashboard-row'>
                <DashboardCard size='xl'/>
                <DashboardCard size='xl'/>

            </div>
        </div>
    )
}

export default Overview