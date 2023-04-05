import { useState } from "react";

interface CarouselProps {
	images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [transition, setTransition] = useState(false);

	const previousImage = async () => {
		setTransition(true);
		await new Promise((resolve) => setTimeout(resolve, 150));
		// set the new image index
		setCurrentImageIndex(
			(currentImageIndex - 1 + images.length) % images.length
		);
		await new Promise((resolve) => setTimeout(resolve, 150));
		setTransition(false);
	};

	const nextImage = async () => {
		setTransition(true);
		await new Promise((resolve) => setTimeout(resolve, 150));
		setCurrentImageIndex((currentImageIndex + 1) % images.length);
		await new Promise((resolve) => setTimeout(resolve, 150));
		setTransition(false);
	};

	return (
		<div className="relative w-full laptop:w-5/6 desktop:w-11/12">
			<div className="flex flex-row  bg-black/50 tablet:rounded-md shadow-lg">
				<img
					src={`/images/carousel/${images[currentImageIndex]}`}
					alt=""
					className={`w-full h-auto object-contain tablet:rounded-md transition duration-[200ms] ${
						transition ? "opacity-0 scale-95" : "opacity-100 scale-100"
					}`}
				/>
			</div>

			<button
				className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white/50 rounded-full w-12 h-12 flex items-center justify-center"
				onClick={previousImage}
			>
				{/* chevron svg */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-15 w-15 duration-[200ms] hover:scale-125 transform"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 19l-7-7 7-7"
					/>
				</svg>
			</button>
			<button
				className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white/50 rounded-full w-12 h-12 flex items-center justify-center"
				onClick={nextImage}
			>
				{/* chevron svg */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-15 w-15 duration-[200ms] hover:scale-125 transform"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 5l7 7-7 7"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Carousel;
