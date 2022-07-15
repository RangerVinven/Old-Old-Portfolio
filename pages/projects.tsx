import React from 'react'
import Navbar from './components/Navbar'

export default function projects() {
    return (
        <div className="bg-purple min-h-screen">
            <Navbar />

            <div className="flex justify-center mt-3">
                <h1 className="text-2xl text-white">Personal Projects</h1>
            </div>
        </div>
    )
}
