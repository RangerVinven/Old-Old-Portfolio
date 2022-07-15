import React from 'react'

import Navbar from './components/Navbar'
import PageTitle from './components/PageTitle'

export default function projects() {
    return (
        <div className="bg-purple min-h-screen">
            <Navbar />

            <PageTitle title="Personal Projects" />
        </div>
    )
}
