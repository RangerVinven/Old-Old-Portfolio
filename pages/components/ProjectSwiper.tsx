// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
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
			<SwiperSlide><ProjectCard title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
			<SwiperSlide><ProjectCard title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
			<SwiperSlide><ProjectCard title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
			<SwiperSlide><ProjectCard title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
			<SwiperSlide><ProjectCard title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
			<SwiperSlide><ProjectCard title="My Portfolio" description="The very website that you're on just now. I made this website to show my skills and to play around with various NPM packages" githubLink="https://github.com/RangerVinven/Portfolio" /></SwiperSlide>
		</Swiper>
	)
}
