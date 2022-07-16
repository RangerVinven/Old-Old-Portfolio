// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { portfolio } from "../../projectInfo";
import { funFarms } from "../../projectInfo";

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
			<SwiperSlide><ProjectCard imageAddress={portfolio.imageAddress} title={portfolio.title} description={portfolio.description} githubLink={portfolio.githubLink} /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress={funFarms.imageAddress} title={funFarms.title} description={funFarms.description} githubLink={funFarms.githubLink} /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress={funFarms.imageAddress} title={funFarms.title} description={funFarms.description} githubLink={funFarms.githubLink} /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress={funFarms.imageAddress} title={funFarms.title} description={funFarms.description} githubLink={funFarms.githubLink} /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress={funFarms.imageAddress} title={funFarms.title} description={funFarms.description} githubLink={funFarms.githubLink} /></SwiperSlide>
			<SwiperSlide><ProjectCard imageAddress={funFarms.imageAddress} title={funFarms.title} description={funFarms.description} githubLink={funFarms.githubLink} /></SwiperSlide>
		</Swiper>
	)
}
