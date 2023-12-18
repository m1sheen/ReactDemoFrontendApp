import { Popover } from "@headlessui/react";
import { ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { mapDirectionsClass } from "./consts";
import cls from "./Popup.module.scss";
import { DropdownDirection } from "../../../types";

import { classNames } from "@/shared/lib/classNames/classNames";

interface PopupProps {
	className?: string;
	trigger?: ReactNode;
	direction?: DropdownDirection;
	children: ReactNode;
}

export const Popup = ({ className, trigger, direction = "bottom left", children }: PopupProps) => {
	const { t } = useTranslation();

	return (
		<Popover className={classNames(cls.popup, {}, [className])}>
			<Popover.Button as={"div"} className={cls.trigger}>
				{trigger}
			</Popover.Button>

			<Popover.Panel className={classNames(cls.panel, {}, [mapDirectionsClass[direction]])}>
				{children}
			</Popover.Panel>
		</Popover>
	);
};
