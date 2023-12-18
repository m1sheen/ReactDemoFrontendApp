import { Story } from "@storybook/react";

import { articleDetailsReducer } from "../../../../entities/Article/model/slice/articleDetailsSlice";

import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider";
import { addCommentFormReducer } from "@/features/AddNewComment/model/slices/addCommentFormSlice";
import { loginReducer } from "@/features/AuthByUserName";
import { profileReducer } from "@/features/editableProfileCard/model/slice/profileSlice";
import { articleDetailsPageReducer } from "@/pages/ArticlesDetailsPage/model/slices";
import { articlesPageReducer } from "@/pages/ArticlesPage/model/slice/articlesPageSlice";
import { ReducersList } from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

const defaultAsyncReducers: ReducersList = {
	loginForm: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsPage: articleDetailsPageReducer,
	articlesPage: articlesPageReducer
};

export const StoreDecorator =
	(state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) => (StoryComponent: Story) => {
		return (
			<StoreProvider
				initialState={state}
				asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
			>
				<StoryComponent />
			</StoreProvider>
		);
	};
