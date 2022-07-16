import React, { useState } from 'react';

import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';
import BarChart from './components/BarChart';

import {Categories} from './components/BarChart';

export default function skills() {

  // Which data to show in the bar chart
  const [selectedCategory, setselectedCategory] = useState(Categories.Languages);

  return (
    <div className="bg-purple h-screen overflow-hidden">
        <Navbar />
        <PageTitle title="My Skills" />

        <div className="flex justify-center h-full w-full mt-28">
            <div className="flex flex-col justify-center items-center bg-white h-fit w-fit px-2 py-1 rounded-lg mr-3.5">
                <h3 className="text-lg font-bold mb-2.5 hover:cursor-pointer" onClick={() => setselectedCategory(Categories.Languages)}>Languages</h3>
                <h3 className="text-lg font-bold mb-2.5 hover:cursor-pointer" onClick={() => setselectedCategory(Categories.Frameworks)}>Frameworks</h3>
                <h3 className="text-lg font-bold mb-2.5 hover:cursor-pointer" onClick={() => setselectedCategory(Categories.Methodologies)}>Methodologies</h3>
                <h3 className="text-lg font-bold mb-2.5 hover:cursor-pointer" onClick={() => setselectedCategory(Categories.Databases)}>Databases</h3>
                <h3 className="text-lg font-bold mb-1.5 hover:cursor-pointer" onClick={() => setselectedCategory(Categories.DevOps)}>DevOps</h3>
            </div>

            <div className="bg-white h-3/6 w-2/5 px-2 py-1 rounded-lg">
                <BarChart dataToShow={selectedCategory} />
            </div>

        </div>
    </div>
  )
}
