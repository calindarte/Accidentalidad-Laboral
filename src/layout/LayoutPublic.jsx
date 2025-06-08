import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"


const LayoutPublic = () => {
  return (
    <div>
    <Outlet/>
    <Footer/>
      
    </div>
  )
}

export default LayoutPublic
