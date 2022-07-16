import React from 'react';

type Props = {
    title: string,
    description: string,
    githubLink: string
}

export default function ProjectCard(props: Props) {
  return (
    <div className="h-full bg-white rounded-lg shadow-xl">
    	<a href={props.githubLink}>
			<img src="/images/portfolioScreenshot.png" alt="Portfolio" className="w-full h-1/3" />
    
			<div className="ml-1">
				<h1 className="text-purple font-bold text-xl select-none">{props.title}</h1>
				<p className="select-none">
					{props.description}
				</p>
			</div>
		</a>
    </div>
  )
}
