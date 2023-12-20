import type { FC, InputHTMLAttributes, ReactNode } from "react";
import { useEffect, useState } from "react";

interface ToggleSwitchProps extends InputHTMLAttributes<HTMLInputElement> {
	checked?: boolean;
	onToggle?: (isChecked: boolean) => void;
	className?: string;
	children?: ReactNode;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({
	checked = false,
	onToggle,
	className,
	children,
	...rest
}) => {
	const [isChecked, setIsChecked] = useState<boolean>(checked);

	useEffect(() => {
		setIsChecked(checked);
	}, [checked]);

	const handleToggle = () => {
		const newCheckedState = !isChecked;
		setIsChecked(newCheckedState);

		if (onToggle) {
			onToggle(newCheckedState);
		}
	};

	const combinedClasses = `relative inline-block w-10 h-6 ${
		isChecked ? "bg-tertiary" : "bg-secondary"
	} rounded-full transition-colors focus:outline-none ${className}`;

	return (
		<label>
			<input
				type="checkbox"
				checked={isChecked}
				onChange={handleToggle}
				className="hidden"
				{...rest}
			/>
			<div className={combinedClasses}>
				<div
					className={`absolute left-1 top-1 w-4 h-4 bg-neutralBg rounded-full transition-transform ${
						isChecked ? "transform translate-x-full" : ""
					}`}
				></div>
			</div>
			{children}
		</label>
	);
};

export default ToggleSwitch;
