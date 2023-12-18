import { useTranslation } from "react-i18next";

import cls from "./ErrorPage.module.scss";

import { classNames } from "@/shared/lib/classNames/classNames";

interface ErrorPageProps {
	className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
	const { t } = useTranslation();
	const reloadPage = () => {
		location.reload();
	};
	return (
		<div className={classNames(cls.errorpage, {}, [className])}>
			<p>{t("Произошла ошибка")}</p>
			<button onClick={reloadPage}>{t("Обновить страницу")}</button>
		</div>
	);
};
