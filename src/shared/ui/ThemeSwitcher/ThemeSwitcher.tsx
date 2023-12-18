import { FC, memo } from "react";

import { Theme, useTheme } from "@/app/providers/ThemeProvider";
import GreenIcon from "@/shared/assets/icons/green.svg";
import DarkIcon from "@/shared/assets/icons/theme-dark.svg";
import LightIcon from "@/shared/assets/icons/theme-light.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonSize, ButtonTheme } from "@/shared/ui/Button";

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = memo(({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button
			onClick={toggleTheme}
			theme={ButtonTheme.CLEAR}
			square
			size={ButtonSize.XL}
			className={classNames("", {}, [className])}
		>
			{theme === Theme.DARK && <DarkIcon />}
			{theme === Theme.LIGHT && <LightIcon />}
			{theme === Theme.GREEN && <GreenIcon />}
		</Button>
	);
});
