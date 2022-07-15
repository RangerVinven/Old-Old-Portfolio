export default function Navbar() {
	return (
		<div className="flex w-full">
			<div className="flex  flex-shrink-0 w-fit">
				<h3 className="text-xl text-white font-bold ml-1">Daniel McPherson</h3>
			</div>
			<div className="flex justify-end w-full">
				<div className="flex w-1/4 justify-around">
					<a href="#" className="text-lg text-white font-semibold">Home</a>
					<a href="#" className="text-lg text-white font-semibold">Projects</a>
					<a href="#" className="text-lg text-white font-semibold">Experience</a>
					<a href="#" className="text-lg text-white font-semibold">Skills</a>
					<a href="#" className="text-lg text-white font-semibold">Contact</a>
				</div>
			</div>
		</div>
	)
}
