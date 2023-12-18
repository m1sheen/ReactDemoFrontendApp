import { FC, memo } from "react";
import { Link, LinkProps } from "react-router-dom";

import cls from "./AppLink.module.scss";

import { classNames } from "@/shared/lib/classNames/classNames";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
	RED = "red"
}

interface AppLinkProps extends LinkProps {
	className?: string;
	theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
	const { to, children, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props;
	return (
		<Link
			to={to}
			className={classNames(cls.applink, {}, [className, cls[theme]])}
			{...otherProps}
		>
			{children}
		</Link>
	);
});
