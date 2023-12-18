import cls from "./PageLoader.module.scss";
import { Loader } from "../Loader/Loader";

import { classNames } from "@/shared/lib/classNames/classNames";

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={classNames(cls.pageloader, {}, [className])}>
			<Loader />
		</div>
	);
};
