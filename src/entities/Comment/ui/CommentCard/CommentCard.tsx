import cls from "./CommentCard.module.scss";
import { Comment } from "../../model/types/comment";

import { getRouteProfile } from "@/shared/const/router";
import { classNames } from "@/shared/lib/classNames/classNames";
import { AppLink } from "@/shared/ui/AppLink";
import { Avatar } from "@/shared/ui/Avatar";
import { Skeleton } from "@/shared/ui/Skeleton";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text } from "@/shared/ui/Text";

interface CommentProps {
	className?: string;
	comment?: Comment;
	isLoading?: boolean;
}

export const CommentCard = ({ className, comment, isLoading }: CommentProps) => {
	if (isLoading) {
		return (
			<VStack
				data-testid={"CommentCard.Loading"}
				gap="16"
				max
				className={classNames(cls.commentCard, {}, [className, cls.loading])}
			>
				<VStack gap="8">
					<Skeleton width={30} height={30} border={"50%"} />
					<Skeleton className={cls.username} width={100} height={16} />
				</VStack>
				<Skeleton className={cls.text} width={"100%"} height={50} />
			</VStack>
		);
	}

	if (!comment) {
		return null;
	}

	return (
		<HStack max gap="16" className={classNames(cls.commentCard, {}, [className])}>
			<AppLink to={getRouteProfile(comment.user.id)}>
				{comment.user.avatar && <Avatar size={40} src={comment.user.avatar} />}
				<Text className={cls.username} title={comment.user.username} />
			</AppLink>

			<Text text={comment.text} />
		</HStack>
	);
};
