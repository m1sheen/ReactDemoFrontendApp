import { ReactNode } from "react";

import cls from "./Overlay.module.scss";

import { classNames } from "@/shared/lib/classNames/classNames";

interface OverlayProps {
	className?: string;
	onClick?: () => void;
	children?: ReactNode;
}

export const Overlay = ({ className, onClick, children }: OverlayProps) => {
	return (
		<div onClick={onClick} className={classNames(cls.overlay, {}, [className])}>
			{children}
		</div>
	);
};
