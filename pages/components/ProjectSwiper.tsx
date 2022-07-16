// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import ProjectCard from './ProjectCard';

export default function ProjectSwiper() {

	return (
		<Swiper
		modules={[Pagination]}
		spaceBetween={150}
		slidesPerView={3}
		pagination={{clickable: true}}
		scrollbar={{draggable: true}}
		className="h-full">
			<SwiperSlide><ProjectCard imageAddress="/images/portfolio.jpg" title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress="/images/funFarms.jpg" title="Fun Farms" description="During my Software Development apprenticeship, we had a section on Website Design & Development. For our final assignment, we were tasked with creating a website in plain HTML and CSS that advertises a farm with various facilities such as a cafe, petting zoo, etc. This is what I made." githubLink="https://github.com/RangerVinven/Fun-Farms" /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress="/images/funFarms.jpg" title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress="/images/funFarms.jpg" title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress="/images/funFarms.jpg" title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress="/images/funFarms.jpg" title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
		</Swiper>
	)
}
