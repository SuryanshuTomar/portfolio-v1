import Image from "next/image";
import Link from "next/link";

import notFound from "@/../public/notfound.svg";

const NotFound = () => {
	return (
		<div className="p-4 bg-primaryBg w-screen h-screen flex flex-col justify-center items-center text-onPrimaryBg">
			<Image
				className="p-4"
				src={notFound}
				alt="page not found"
				height={"400"}
				width={"400"}
			/>
			<h3 className="text-2xl font-bold my-2">Ohh! Page not found.</h3>
			<p>We can&apos;t seem to find the page you are looking for!</p>
			<Link
				href="/"
				className="my-2 text-xl text-primary font-bold hover:text-onPrimaryBg"
			>
				Back home
			</Link>
		</div>
	);
};
export default NotFound;
