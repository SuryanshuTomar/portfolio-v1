import type { MotionProps } from "framer-motion";
import { motion } from "framer-motion";
import type { FC } from "react";

interface AnimationWrapperProps extends MotionProps {
	className?: string;
}

const AnimationWrapper: FC<AnimationWrapperProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<motion.div
			initial="offscrenn"
			whileInView={"onscreen"}
			viewport={{ once: true, amount: 0.8 }}
			className={className}
			{...rest}
		>
			{children}
		</motion.div>
	);
};

export default AnimationWrapper;
