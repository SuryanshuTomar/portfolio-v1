import { useState, useEffect } from "react";

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		// Add event listener to update window size on resize
		window.addEventListener("resize", handleResize);

		// Remove event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array means this effect will run once after the initial render

	return windowSize;
};

export default useWindowSize;
