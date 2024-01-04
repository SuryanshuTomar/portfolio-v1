"use client";

import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	// Show the button when scrolling down
	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY > 250) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Scroll to the top when the button is clicked
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<button
			id="scrollToTopBtn"
			title="Go to top"
			className={`z-50 fixed bottom-20 right-4 bg-primaryBg shadow-primary text-onPrimaryBg p-4 rounded-full shadow ${
				isVisible ? "" : "hidden"
			}`}
			onClick={scrollToTop}
		>
			<FaArrowUp />
		</button>
	);
};

export default ScrollTopButton;
