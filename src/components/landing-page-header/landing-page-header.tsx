import { Link } from 'react-router-dom'
import './landing-page-header.css'

function LandingPageHeader() {
    return (
        <header>
                <h1>Kitchen Management Software For Sustainable Food Service Management</h1>
                <p>Recipe Management. Menu Planning. Restaurant Inventory Management. Food Production And Requisitions. Multi-Unit Restaurant Management. Sustainability.</p>
                <br/>
                <Link className='btn' to={"/pricing"}>Join Us !</Link>
        </header>


    )
}

export default LandingPageHeader