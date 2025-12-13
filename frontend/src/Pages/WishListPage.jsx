import React from 'react'
import Header from '../components/Reusable/Header'
import Sidebar from '../components/Reusable/SideBar'
import WishlistedBooks from '../components/Unique/Wishlist/WishlistedBooks'

function WishListPage() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="">
            <Header/>
            <WishlistedBooks/>
        </div>
        <Sidebar/>
        
      </div>
    </div>
  )
}

export default WishListPage