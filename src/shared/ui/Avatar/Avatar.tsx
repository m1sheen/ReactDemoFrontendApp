import { CSSProperties, useMemo } from "react";

import cls from "./Avatar.module.scss";
import defaultIcon from "../../assets/icons/user-filled.svg";
import { AppImage } from "../AppImage";
import { Icon } from "../Icon";
import { Skeleton } from "../Skeleton";

import { classNames } from "@/shared/lib/classNames/classNames";

interface AvatarProps {
	className?: string;
	src?: string;
	size?: number;
	alt?: string;
	fallbackInverted?: boolean;
}

export const Avatar = ({
	className,
	src,
	size,
	alt = "avatar",
	fallbackInverted = false
}: AvatarProps) => {
	const styles = useMemo<CSSProperties>(
		() => ({
			width: size || 100,
			height: size || 100
		}),
		[size]
	);
	const fallback = <Skeleton width={size} height={size} border="50%" />;
	const errorFallback = (
		<Icon Svg={defaultIcon} width={size} height={size} inverted={fallbackInverted} />
	);

	return (
		<AppImage
			style={styles}
			src={src}
			alt={alt}
			className={classNames(cls.avatar, {}, [className])}
			fallback={fallback}
			errorFallback={errorFallback}
		/>
	);
};
