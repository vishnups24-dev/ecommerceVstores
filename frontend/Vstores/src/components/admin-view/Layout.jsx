import React from 'react'
import { Outlet } from 'react-router-dom';
import AdminHeader from './Header.jsx'
import AdminSidebar from './Sidebar.jsx'

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen 2-full">
      <AdminHeader/>
      <AdminSidebar/>
      <div className="flex flex-1 flex-col">
        <main className="flex-1 flex bg-muted/20 p-4 md-p-6">
          <Outlet/>
        </main>
      </div>
      
    </div>
  )
}

export default AdminLayout
