import type { FC } from "react";

import type { ClientViewProps } from "@/Types";

interface HomeViewProps extends ClientViewProps {}

const HomeView: FC<HomeViewProps> = (props) => {
	return <div>HomeView</div>;
};

export default HomeView;
