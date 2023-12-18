import { fetchArticlesList } from "./fetchArticleList";
import { fetchNextArticlesPage } from "./fetchNextArticlePage";

import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

jest.mock("./fetchArticleList");

describe("fetchNextArticlesPage.test", () => {
	test("success", async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: true
			}
		});

		await thunk.callThunk();

		expect(fetchArticlesList).resolves;
	});
	test("fetchAritcleList not called", async () => {
		const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
			articlesPage: {
				page: 2,
				ids: [],
				entities: {},
				limit: 5,
				isLoading: false,
				hasMore: false
			}
		});

		await thunk.callThunk();

		expect(thunk.dispatch).toBeCalledTimes(2);
		expect(fetchArticlesList).not.toHaveBeenCalled();
	});
});
