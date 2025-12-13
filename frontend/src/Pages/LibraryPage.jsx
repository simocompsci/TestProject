import React from 'react'
import Header from '../components/Reusable/Header'
import Sidebar from '../components/Reusable/SideBar'
import LibraryBooks from '../components/Unique/Library/LibraryBooks'

function LibraryPage() {
  return (
    <div className="min-h-screen">
      <div className="flex">
        <div className="">
            <Header/>
            <LibraryBooks/>
        </div>
        <Sidebar/>
        
      </div>
    </div>
  )
}

export default LibraryPage