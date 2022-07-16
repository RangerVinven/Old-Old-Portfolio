import React from 'react'

type Props = {
    title: String,
    description: String
}

export default function ProjectCard(props: Props) {
  return (
    <div className="h-full bg-white rounded-lg shadow-xl">
        <div className="bg-gray-400 w-full h-1/3 rounded-t-md"></div>
    
        <div className="ml-1">
            <h1 className="text-purple font-bold text-xl select-none">{props.title}</h1>
            <p className="select-none">
                {props.description}
            </p>
        </div>
    </div>
  )
}
