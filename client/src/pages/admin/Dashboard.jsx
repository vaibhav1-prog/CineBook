import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, UsersIcon } from 'lucide-react';
import React from 'react'
import { dummyDashboardData } from '../../assets/assets';
import Title from '../../components/admin/Title';

const Dashboard = () => {

    const currency = import.meta.env.VITE_CURRENCY
    const dashboardData = dummyDashboardData

const dashboardCards = [
  {
    title: "Total Bookings",
    value: dashboardData.totalBookings || "0",
    icon: ChartLineIcon
  },

  {
    title: "Total Revenue", value: `${currency}${dashboardData.totalRevenue || "0"}`, icon: CircleDollarSignIcon
  },

  {
    title: "Active Shows",value: dashboardData.activeShows.length || "0",icon: PlayCircleIcon
  },

  {
    title: "Total Users",value: dashboardData.totalUser || "0",icon: UsersIcon
  }
]

  return (
  <>
    <Title text1="Admin" text2="Dashboard" />
    <div className="relative flex flex-wrap gap-4 mt-6">
      {dashboardCards.map((card) => (
        <div key={card.title} className="flex items-center justify-between px-4 py-5 min-w-52 rounded-md border border-primary/20 bg-primary/10">
          <div>
            <p className="text-sm text-gray-400">{card.title}</p>
            <p className="text-xl font-semibold mt-1">{card.value}</p>
          </div>
          <card.icon className="w-8 h-8 text-primary" />
        </div>
      ))}
    </div>
  </>
)
}

export default Dashboard
