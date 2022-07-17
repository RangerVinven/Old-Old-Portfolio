import React from 'react';

import Navbar from './components/Navbar';
import PageTitle from './components/PageTitle';

export default function contact() {
  return (
    <div className="bg-purple h-screen overflow-hidden">
        <Navbar />
        <PageTitle title="Contact Me" />
        
        <div className="flex flex-col justify-center items-center mt-24">
			<input className="w-64 pl-1 rounded-md mb-2" type="text" name="email" placeholder="Your email" />
			<input className="w-64 pl-1 rounded-md mb-2" type="text" name="subject" placeholder="Subject" />
			<textarea className="w-96 h-80 pl-1 rounded-md mb-2" name="email" placeholder="Message"></textarea>

			<button className="bg-white rounded-md px-3 text-purple font-bold"><u>Send</u></button>
        </div>
    </div>
  )
}
