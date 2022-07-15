import Router from 'next/router';

export default function Navbar() {
	return (
		<div className="flex w-full">
			<div className="flex  flex-shrink-0 w-fit">
				<h3 className="text-xl text-white font-bold ml-1">Daniel McPherson</h3>
			</div>
			<div className="flex justify-end w-full">
				<div className="flex w-1/4 justify-around">
					<h3 onClick={() => Router.push("/")} className="text-lg text-white font-semibold hover:cursor-pointer">Home</h3>
					<h3 onClick={() => Router.push("/projects")} className="text-lg text-white font-semibold hover:cursor-pointer">Projects</h3>
					<h3 onClick={() => Router.push("/experience")} className="text-lg text-white font-semibold hover:cursor-pointer">Experience</h3>
					<h3 onClick={() => Router.push("/skills")} className="text-lg text-white font-semibold hover:cursor-pointer">Skills</h3>
					<h3 onClick={() => Router.push("/contact")} className="text-lg text-white font-semibold hover:cursor-pointer">Contact</h3>
				</div>
			</div>
		</div>
	)
}
