import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cls from "./Navbar.module.scss";
import { getUserAuthData } from "../../../entities/User";

import { LoginModal } from "@/features/AuthByUserName";
import { AvatarDropdown } from "@/features/AvatarDropdown";
import { NotificationButton } from "@/features/NotificationButton";
import { getRouteArticleCreate } from "@/shared/const/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { HStack } from "@/shared/ui/Stack";
import { Text, TextTheme } from "@/shared/ui/Text";

interface NavbarProps {
	className?: string;
}

export const Navbar = memo(({ className }: NavbarProps) => {
	const { t } = useTranslation("translation");
	const [isAuthModal, setIsAuthModal] = useState(false);
	const authData = useSelector(getUserAuthData);

	const onCloseModal = useCallback(() => {
		setIsAuthModal(false);
	}, []);
	const onShowModal = useCallback(() => {
		setIsAuthModal(true);
	}, []);

	if (authData) {
		return (
			<header className={classNames(cls.navbar, {}, [className])}>
				<Text
					className={cls.appName}
					title={t("Articles App")}
					theme={TextTheme.INVERTED}
				/>
				<AppLink
					to={getRouteArticleCreate()}
					theme={AppLinkTheme.SECONDARY}
					className={cls.createBtn}
				>
					{t("Создание статьи")}
				</AppLink>

				<HStack gap="16" className={cls.actions}>
					<NotificationButton />
					<AvatarDropdown />
				</HStack>
			</header>
		);
	}
	return (
		<header className={classNames(cls.navbar, {}, [className])}>
			<Button theme={ButtonTheme.CLEAR_INVERTED} onClick={onShowModal} className={cls.links}>
				{t("Войти")}
			</Button>
			{isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
		</header>
	);
});
