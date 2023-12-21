import type { FC } from "react";

import type { ClientViewProps } from "@/Types";

interface ContactViewProps extends ClientViewProps {}

const ContactView: FC<ContactViewProps> = (props) => {
	return <div>ContactView</div>;
};

export default ContactView;
