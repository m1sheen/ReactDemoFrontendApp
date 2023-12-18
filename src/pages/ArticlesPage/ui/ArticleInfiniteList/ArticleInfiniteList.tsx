import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlePage";
import { ArticleVirtualList } from "../ArticleVirtualList/ArticleVirtualList";

import { ArticleList } from "@/entities/Article";
import {
	getArticlesPageError,
	getArticlesPageIsLoading,
	getArticlesPageView
} from "@/pages/ArticlesPage/model/selectors/articlesPageSelectors";
import { getArticles } from "@/pages/ArticlesPage/model/slice/articlesPageSlice";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Text, TextTheme } from "@/shared/ui/Text";
import { Page } from "@/widgets/Page/Page";

interface ArticleInfiniteListProps {
	className?: string;
	virtual?: boolean;
}

export const ArticleInfiniteList = ({ className, virtual = false }: ArticleInfiniteListProps) => {
	const articles = useSelector(getArticles.selectAll);
	const isLoading = useSelector(getArticlesPageIsLoading);
	const error = useSelector(getArticlesPageError);
	const view = useSelector(getArticlesPageView);
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const onLoadNextPart = useCallback(() => {
		dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	if (error) {
		return <Text theme={TextTheme.ERROR} text={t("Ошибка подгрузки данных")} />;
	}

	if (!virtual) {
		return (
			<Page onScrollEnd={onLoadNextPart} className={classNames("", {}, [className])}>
				<ArticleList
					articles={articles}
					isLoading={isLoading}
					view={view}
					className={className}
				/>
			</Page>
		);
	}
	return (
		<div data-testid={"ArticlesVirtualList"}>
			<ArticleVirtualList
				view={view}
				error={error}
				isLoading={isLoading}
				articles={articles}
				loadNextPage={onLoadNextPart}
			/>
		</div>
	);
};
