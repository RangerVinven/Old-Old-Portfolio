import type { NextPage } from 'next'
import Image from 'next/image'

import Navbar from './components/Navbar'
import ParticlesComponent from './components/ParticlesComponent'

const Home: NextPage = () => {
  return (
    <div>
		<Navbar />
		
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<ParticlesComponent />
			
			<div className="flex justify-center items-center flex-col w-full h-full">
				<h1 className="text-6xl font-bold text-white mb-2">Hi, I'm Daniel McPherson.</h1>
				<h1 className="text-5xl font-semibold text-white mb-2">I'm a Software Development student</h1>
				<a href="https://github.com/RangerVinven" target="_blank" rel="noopener noreferrer"><Image src="/githubIcon.png" alt="Github Logo" height={32} width={32} /></a>
			</div>
		</div>
    </div>
  )
}

export default Home
