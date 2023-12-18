import { useTranslation } from "react-i18next";

import cls from "./NotificationItem.module.scss";
import { Notification } from "../../model/types/notifications";

import { classNames } from "@/shared/lib/classNames/classNames";
import { Card, CardTheme } from "@/shared/ui/Card";
import { Text } from "@/shared/ui/Text";

interface NotificationItemProps {
	className?: string;
	item: Notification;
}

export const NotificationItem = ({ className, item }: NotificationItemProps) => {
	const { t } = useTranslation();
	const content = (
		<Card
			theme={CardTheme.OUTLINED}
			className={classNames(cls.notificationitem, {}, [className])}
		>
			<Text title={item.title} text={item.description} />
		</Card>
	);
	if (item.href) {
		return (
			<a className={cls.link} target={"_blank"} href={item.href} rel="noreferrer">
				{content}
			</a>
		);
	}
	return (
		<Card
			theme={CardTheme.OUTLINED}
			className={classNames(cls.notificationitem, {}, [className])}
		>
			<Text title={item.title} text={item.description} />
		</Card>
	);
};
