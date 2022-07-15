import React from 'react'

import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'
import BarChart from './components/BarChart'

export default function skills() {
  return (
    <div className="bg-purple h-screen overflow-hidden">
        <Navbar />
        <PageTitle title="My Skills" />

        <br />
        <br />
        <br />

        <div className="flex justify-center h-full w-fulbg-red-500">
            <div className="bg-white h-3/6 w-fit px-2 py-1 rounded-lg mr-3.5">
                <h3 className="text-lg font-bold mb-2.5 hover:cursor-pointer">Languages</h3>
                <h3 className="text-lg font-bold mb-2.5 hover:cursor-pointer">Frameworks</h3>
                <h3 className="text-lg font-bold mb-2.5 hover:cursor-pointer">Methodologies</h3>
                <h3 className="text-lg font-bold mb-2.5 hover:cursor-pointer">Databases</h3>
                <h3 className="text-lg font-bold mb-1.5 hover:cursor-pointer">DevOps</h3>
            </div>

            <div className="bg-white h-3/6 w-2/5 px-2 py-1 rounded-lg">
                <BarChart />
            </div>

        </div>
    </div>
  )
}
