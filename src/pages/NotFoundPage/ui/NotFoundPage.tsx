import { memo } from "react";
import { useTranslation } from "react-i18next";

import cls from "./NotFoundPage.module.scss";

import { classNames } from "@/shared/lib/classNames/classNames";

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => {
	const { t } = useTranslation();
	return (
		<div data-testid="NotFoundPage" className={classNames(cls.notfoundpage, {}, [className])}>
			{t("Страница не найдена")}
		</div>
	);
});
