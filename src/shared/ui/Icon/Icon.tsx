import cls from "./Icon.module.scss";

import { classNames } from "@/shared/lib/classNames/classNames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
	className?: string;
	Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
	inverted?: boolean;
}

export const Icon = ({ className, Svg, inverted, ...props }: IconProps) => {
	return (
		<Svg
			className={classNames(cls.icon, { [cls.inverted]: inverted }, [className])}
			{...props}
		/>
	);
};
