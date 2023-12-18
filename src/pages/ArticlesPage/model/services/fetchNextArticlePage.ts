import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchArticlesList } from "./fetchArticleList";
import {
	getArticlesPageHasMore,
	getArticlesPageIsLoading,
	getArticlesPageNum
} from "../selectors/articlesPageSelectors";
import { articlesPageActions } from "../slice/articlesPageSlice";

import { ThunkConfig } from "@/app/providers/StoreProvider";

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	"articlesPage/fetchNextArticlesPage",
	async (_, thunkApi) => {
		const { getState, dispatch } = thunkApi;
		const isLoading = getArticlesPageIsLoading(getState());
		const page = getArticlesPageNum(getState());
		if (page === 1) {
			dispatch(articlesPageActions.setHasMore(true));
		}
		const hasMore = getArticlesPageHasMore(getState());

		if (hasMore && !isLoading) {
			dispatch(articlesPageActions.setPage(page + 1));
			dispatch(fetchArticlesList({}));
		}
	}
);
