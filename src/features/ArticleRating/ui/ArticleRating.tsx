import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { useGetArticleRating, useRateArticle } from "../api/ArticleRatingApi";

import { RatingCard } from "@/entities/RatingCard";
import { getUserAuthData } from "@/entities/User";
import { Skeleton } from "@/shared/ui/Skeleton";

export interface ArticleRatingProps {
	className?: string;
	articleId: string;
}

const ArticleRating = ({ className, articleId }: ArticleRatingProps) => {
	const { t } = useTranslation();
	const userData = useSelector(getUserAuthData);
	const { data, isLoading } = useGetArticleRating({
		articleId,
		userId: userData?.id ?? ""
	});
	const [rateArticleMutation] = useRateArticle();

	const handleRateArticle = useCallback(
		(starsCount: number, feedback?: string) => {
			try {
				rateArticleMutation({
					articleId,
					userId: userData?.id ?? "",
					rate: starsCount,
					feedback
				});
			} catch (error) {
				console.log(error);
			}
		},
		[articleId, rateArticleMutation, userData?.id]
	);
	const onAccept = useCallback(
		(starsCount: number, feedback?: string) => handleRateArticle(starsCount, feedback),
		[handleRateArticle]
	);
	const onCancel = useCallback(
		(starsCount: number) => handleRateArticle(starsCount),
		[handleRateArticle]
	);

	if (isLoading) {
		return <Skeleton width="100%" height={120} />;
	}
	const rating = data?.[0];
	return (
		<RatingCard
			onCancel={onCancel}
			onAccept={onAccept}
			rate={rating?.rate}
			className={className}
			title={t("Оцените статью")}
			feedbackTitle={t("Оставьте свой отзыв о статье, это поможет улучшить качество")}
		/>
	);
};
export default ArticleRating;
