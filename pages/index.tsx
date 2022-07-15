import type { NextPage } from 'next'
import Head from 'next/head'

import ParticlesComponent from './components/ParticlesComponent'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Daniel McPherson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  <ParticlesComponent />
      <div className="flex justify-center items-center flex-col w-full h-full">
		
		<h1 className="text-6xl font-bold text-white mb-2">Hi, I'm Daniel McPherson.</h1>
		<h1 className="text-5xl font-semibold text-white">I'm a Fullstack Developer</h1>
      </div>
        
    </div>
  )
}

export default Home
