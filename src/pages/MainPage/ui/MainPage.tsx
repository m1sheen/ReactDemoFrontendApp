import { memo, useState } from "react";
import { useTranslation } from "react-i18next";

import { BugButton } from "@/app/providers/ErrorBoundary";
import { RatingCard } from "@/entities/RatingCard";
import { Input } from "@/shared/ui/Input";
import { Page } from "@/widgets/Page/Page";

const MainPage = memo(() => {
	const { t } = useTranslation("main");
	const [value, setValue] = useState("");
	return (
		<Page data-testid="MainPage">
			<BugButton />
			<Input value={value} onChange={setValue} placeholder={"Введите текст"} />
			<div>{t("Главная страница")}</div>
			<RatingCard title={"Оставьте отзыв"} feedbackTitle={"как вам статья?"} hasFeedback />
		</Page>
	);
});
export default MainPage;
