import { ButtonHTMLAttributes, FC, memo } from "react";

import cls from "./Button.module.scss";

import { Mods, classNames } from "@/shared/lib/classNames/classNames";

export enum ButtonTheme {
	CLEAR = "clear",
	OUTLINE = "outline",
	OUTLINE_RED = "outlineRed",
	CLEAR_INVERTED = "clearInverted",
	BACKGROUND = "background",
	BACKGROUND_INVERTED = "backgroundInverted"
}

export enum ButtonSize {
	M = "size_m",
	L = "size_l",
	XL = "size_xl"
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	fullWidth?: boolean;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
	const {
		className,
		children,
		theme = ButtonTheme.OUTLINE,
		square,
		disabled,
		size = ButtonSize.M,
		fullWidth,
		...otherProps
	} = props;

	const mods: Mods = {
		[cls[theme]]: true,
		[cls.square]: square,
		[cls[size]]: true,
		[cls.disabled]: disabled,
		[cls.fullWidth]: fullWidth
	};

	return (
		<button
			className={classNames(cls.button, mods, [className, cls[theme]])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
});
