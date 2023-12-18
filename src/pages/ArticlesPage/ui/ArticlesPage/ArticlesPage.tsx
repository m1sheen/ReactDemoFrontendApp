import { memo } from "react";
import { useSearchParams } from "react-router-dom";

import cls from "./ArticlesPage.module.scss";
import { initArticlesPage } from "../../model/services/initArticlesPage";
import { articlesPageReducer } from "../../model/slice/articlesPageSlice";
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList";
import { ArticlesPageFilters } from "../ArticlesPageFilters/ArticlesPageFilters";

import {
	DynamicModuleLoader,
	ReducersList
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";

const reducers: ReducersList = {
	articlesPage: articlesPageReducer
};

const ArticlesPage = () => {
	const [searchParams] = useSearchParams();
	const dispatch = useAppDispatch();

	useInitialEffect(() => {
		dispatch(initArticlesPage(searchParams));
	});

	return (
		<DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
			<div className={cls.articlePage} data-testid={"ArticlesPage"}>
				<ArticlesPageFilters />
				<ArticleInfiniteList className={cls.list} virtual />
			</div>
		</DynamicModuleLoader>
	);
};
export default memo(ArticlesPage);
