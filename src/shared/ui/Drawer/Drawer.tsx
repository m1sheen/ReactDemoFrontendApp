import { ReactNode, useCallback, useEffect } from "react";

import cls from "./Drawer.module.scss";
import { Overlay } from "../Overlay/Overlay";
import { Portal } from "../Portal/Portal";

import { useTheme } from "@/app/providers/ThemeProvider";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import { AnimationProvider, useAnimationLibs } from "@/shared/lib/components/AnimationProvider";
import { useModal } from "@/shared/lib/hooks/useModal/useModal";

interface DrawerProps {
	className?: string;
	children: ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const height = window.innerHeight - 100;

export const DrawerContent = ({ className, children, isOpen, onClose, lazy }: DrawerProps) => {
	const { theme } = useTheme();
	const { Spring, Gesture } = useAnimationLibs();
	const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

	const openDrawer = useCallback(() => {
		api.start({ y: 0, immediate: false });
	}, [api]);

	const close = (velocity = 0) => {
		api.start({
			y: height,
			immediate: false,
			config: { ...Spring.config.stiff, velocity },
			onResolve: onClose
		});
	};

	const { isMounted, isClosing } = useModal({
		animationDelay: 300,
		isOpen,
		onClose
	});

	const bind = Gesture.useDrag(
		({ last: last, velocity: [, vy], direction: [, dy], movement: [, my], cancel }) => {
			if (my < -70) {
				cancel();
			}
			if (last) {
				if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
					close();
				} else {
					openDrawer();
				}
			} else {
				api.start({ y: my, immediate: true });
			}
		},
		{
			from: () => [0, y.get()],
			filterTaps: true,
			bounds: { top: 0 },
			rubberband: true
		}
	);

	const display = y.to((py) => (py < height ? "block" : "none"));
	const mods: Mods = {
		[cls.opened]: isOpen,
		[cls.isClosing]: isClosing
	};

	useEffect(() => {
		if (isOpen) {
			openDrawer();
		}
	}, [isOpen, openDrawer]);

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={classNames(cls.drawer, mods, [className, theme, "app_drawer"])}>
				<Overlay onClick={close} />
				<div className={cls.wrapper}>
					<Spring.a.div
						className={cls.sheet}
						style={{
							display,
							bottom: `calc(-100vh + ${height - 100}px)`,
							y
						}}
						{...bind()}
					>
						{children}
					</Spring.a.div>
				</div>
			</div>
		</Portal>
	);
};

const DrawerAsync = (props: DrawerProps) => {
	const { isLoaded } = useAnimationLibs();

	if (!isLoaded) {
		return null;
	}

	return <DrawerContent {...props} />;
};

export const Drawer = (props: DrawerProps) => {
	return (
		<AnimationProvider>
			<DrawerAsync {...props} />
		</AnimationProvider>
	);
};
