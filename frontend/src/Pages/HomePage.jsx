import Sidebar from "../components/Reusable/SideBar"
import Header from "../components/Reusable/Header"
import MainBooks from "../components/Unique/Home/MainBooks"

function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="">
            <Header/>
            <MainBooks/>
        </div>
        <Sidebar/>
        
      </div>
    </div>
  )
}

export default HomePage