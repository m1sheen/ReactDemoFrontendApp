import { Suspense, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

import { getArticleCommentsIsLoading } from "../model/selectors/comments";
import { addCommentForArticle } from "../model/services/addCommentForArticle/addCommentForArticle";
import { fetchCommentsByArticleId } from "../model/services/fetchCommentsByArticleId";
import { getArticleComments } from "../model/slices/ArticleDetailsCommentsSlice";

import { CommentList } from "@/entities/Comment";
import { AddCommentForm } from "@/features/AddNewComment";
import { classNames } from "@/shared/lib/classNames/classNames";
import { useInitialEffect } from "@/shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Loader } from "@/shared/ui/Loader";
import { VStack } from "@/shared/ui/Stack";
import { Text, TextSize } from "@/shared/ui/Text";

interface ArticleDetailsCommentsProps {
	className?: string;
	id?: string;
}

export const ArticleDetailsComments = ({ className, id }: ArticleDetailsCommentsProps) => {
	const { t } = useTranslation();

	const dispatch = useDispatch();
	const comments = useSelector(getArticleComments.selectAll);
	const commentsIsLoading = useSelector(getArticleCommentsIsLoading);

	const onSendComment = useCallback((text: string) => {
		dispatch(addCommentForArticle(text));
	}, []);

	useInitialEffect(() => {
		dispatch(fetchCommentsByArticleId(id));
	});

	return (
		<VStack data-testid={"RatingCard"} gap="16" max className={classNames("", {}, [className])}>
			<Text size={TextSize.L} title={t("Комментарии")} />
			<Suspense fallback={<Loader />}>
				<AddCommentForm onSendComment={onSendComment} />
			</Suspense>
			<CommentList comments={comments} isLoading={commentsIsLoading} />
		</VStack>
	);
};
