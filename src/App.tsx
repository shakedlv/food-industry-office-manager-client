import { Outlet } from 'react-router-dom'
import './App.css'
import LandingPageFooter from './components/landing-page-footer/landing-page-footer'
import TopNavBar from './components/top-nav-bar/top-nav-bar'

function App() {

  return (
    <>
      <TopNavBar />
      <main>
        <Outlet />
      </main>
      <LandingPageFooter />
    </>
  )
}

export default App
