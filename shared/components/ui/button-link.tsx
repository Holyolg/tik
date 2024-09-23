import React, { FC, PropsWithChildren } from "react";
import { Arrow } from "./arrow";
import classNames from "classnames";

interface Props {
	className?: string;
	children?: React.ReactNode;
}

export const ButtonLink: FC<PropsWithChildren<Props>> = ({
	className,
	children,
}) => {
	return (
		<button
			className={classNames(
				"hover:opacity-50 lg:flex items-center cursor-pointer hidden space-x-2",
				className
			)}>
			{children}
			<Arrow />
		</button>
	);
};
