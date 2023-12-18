import { HTMLAttributes, ReactNode } from "react";

import cls from "./Card.module.scss";

import { classNames } from "@/shared/lib/classNames/classNames";

export enum CardTheme {
	NORMAL = "normal",
	OUTLINED = "outlined"
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	theme?: CardTheme;
}

export const Card = ({ className, children, theme = CardTheme.NORMAL, ...props }: CardProps) => {
	return (
		<div {...props} className={classNames(cls.card, {}, [className, cls[theme]])}>
			{children}
		</div>
	);
};
