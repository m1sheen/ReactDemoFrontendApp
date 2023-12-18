import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";

import cls from "./ArticleDetailsPage.module.scss";
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader/ArticleDetailsPageHeader";
import { ArticleDetails } from "../../../../entities/Article";
import { articleDetailsPageReducer } from "../../model/slices";

import { ArticleRating } from "@/features/ArticleRating";
import { ArticleRecommendationsList } from "@/features/articleRecommendationsList";
import { ArticleDetailsComments } from "@/pages/ArticlesDetailsPage/ArticleDetailsComments/ArticleDetailsComments";
import { classNames } from "@/shared/lib/classNames/classNames";
import {
	DynamicModuleLoader,
	ReducersList
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Page } from "@/widgets/Page/Page";

interface ArticlesDetailsPageProps {
	className?: string;
	storybookId?: string;
}

const reducers: ReducersList = {
	articleDetailsPage: articleDetailsPageReducer
};

const ArticleDetailsPage = ({ className, storybookId }: ArticlesDetailsPageProps) => {
	const { t } = useTranslation("article");
	const { id } = useParams<{ id: string }>();

	if (storybookId) {
		return (
			<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
				<Page className={classNames(cls.articledetailspage, {}, [className])}>
					<ArticleDetailsPageHeader />
					<ArticleDetails id={storybookId} className={cls.mb_30} />
					<ArticleRating articleId={storybookId} className={cls.mb_30} />
					<ArticleRecommendationsList className={cls.mb_30} />
					<ArticleDetailsComments id={storybookId} />
				</Page>
			</DynamicModuleLoader>
		);
	}

	if (!id) {
		return (
			<div className={classNames(cls.articledetailspage, {}, [className])}>
				{t("Статья не найдена")}
			</div>
		);
	}

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount>
			<Page className={classNames(cls.articledetailspage, {}, [className])}>
				<ArticleDetailsPageHeader />
				<ArticleDetails id={id} className={cls.mb_30} />
				<ArticleRating articleId={id} className={cls.mb_30} />
				<ArticleRecommendationsList className={cls.mb_30} />
				<ArticleDetailsComments id={id} />
			</Page>
		</DynamicModuleLoader>
	);
};

export default memo(ArticleDetailsPage);
