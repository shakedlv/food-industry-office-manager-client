import './dashboard-card.css'

type DashboardCardProp = {
    size: "s" | "m" | "l" | "xl";
}
function DashboardCard({ size }: DashboardCardProp) {
    return (
        <div className={'dashboard-card size-' + size}>DashboardCard</div>
    )
}

export default DashboardCard