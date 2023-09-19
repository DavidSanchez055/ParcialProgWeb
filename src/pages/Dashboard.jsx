import React from 'react'
import { DashboardNav } from '../components/DashboardNav'
import "../styles/dashboard.css"
import ListProducts from '../components/ListProducts'

export const Dashboard = () => {
  return (
    <>
      <DashboardNav />
      <div className="main">
        <div className="cardMain">
          <ListProducts />
        </div>
      </div>
    </>
  )
}
