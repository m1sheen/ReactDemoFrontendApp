import { MutableRefObject, ReactNode, UIEvent, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import cls from "./Page.module.scss";

import { StateSchema } from "@/app/providers/StoreProvider";
import { getScrollByPath, saveScrollActions } from "@/features/ScrollSave";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInfiniteScroll } from "@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { useThrottle } from "@/shared/lib/hooks/useThrottle/useThrottle";
import { TestProps } from "@/shared/types";

interface PageProps extends TestProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}
export const PAGE_ID = "PAGE_ID";

export const Page = ({ className, children, onScrollEnd, ...props }: PageProps) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const scrollPosition = useSelector((state: StateSchema) => getScrollByPath(state, pathname));
	useInfiniteScroll({
		triggerRef,
		wrapperRef,
		callback: onScrollEnd
	});

	useInitialEffect(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	});

	const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(
			saveScrollActions.setScrollPosition({
				path: pathname,
				position: e.currentTarget.scrollTop
			})
		);
	}, 1000);

	return (
		<section
			data-testid={props["data-testid"] ?? "Page"}
			id={PAGE_ID}
			ref={wrapperRef}
			onScroll={onScroll}
			className={classNames(cls.page, {}, [className])}
		>
			<div className={cls.content}>{children}</div>
			<div ref={triggerRef} />
		</section>
	);
};
