import { useCallback, useState } from "react";
import { BrowserView, MobileView } from "react-device-detect";

import cls from "./NotificationButton.module.scss";

import { NotificationList } from "@/entities/Notification";
import NotificationsIcon from "@/shared/assets/icons/notification-20-20.svg";
import { classNames } from "@/shared/lib/classNames/classNames";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Drawer } from "@/shared/ui/Drawer";
import { Icon } from "@/shared/ui/Icon";
import { Popover } from "@/shared/ui/Popups";

interface NotificationButtonProps {
	triggerClassName?: string;
}

export const NotificationButton = ({ triggerClassName }: NotificationButtonProps) => {
	const [open, setOpen] = useState(false);

	const onOpenDrawer = useCallback(() => {
		setOpen(true);
	}, []);
	const onCloseDrawer = useCallback(() => {
		setOpen(false);
	}, []);

	const trigger = (
		<Button theme={ButtonTheme.CLEAR} onClick={onOpenDrawer}>
			<Icon Svg={NotificationsIcon} inverted />
		</Button>
	);

	return (
		<>
			<BrowserView>
				<Popover className={triggerClassName} trigger={trigger}>
					<NotificationList
						className={classNames(cls.notificationbutton, {}, [cls.notifications])}
					/>
				</Popover>
			</BrowserView>
			<MobileView>
				{trigger}
				<Drawer onClose={onCloseDrawer} isOpen={open}>
					<NotificationList />
				</Drawer>
			</MobileView>
		</>
	);
};
