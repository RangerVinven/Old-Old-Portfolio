import React from 'react';

import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';
import ProjectCard from './components/ProjectCard';
import ProjectSwiper from './components/ProjectSwiper';

export default function projects() {
    return (
        <div className="bg-purple min-h-screen min-w-full overflow-hidden">
            <Navbar />

            <PageTitle title="Personal Projects" />

            <div className="w-full h-3/5 flex justify-center items-center mt-16 absolute">
                <div className="flex justify-around items-center w-4/5 h-full">
                    <ProjectSwiper />
                </div>
            </div>
        </div>
    )
}
