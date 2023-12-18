import { FC, memo } from "react";

import cls from "./ArticleCodeBlockComponent.module.scss";
import { ArticleCodeBlock } from "../../model/types/article";

import { Code } from "@/shared/ui/Code";

interface ArticleImageBlockComponentProps {
	className?: string;
	block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent: FC<ArticleImageBlockComponentProps> = memo(
	({ block }: ArticleImageBlockComponentProps) => {
		return (
			<div className={cls.codeBlock}>
				<Code text={block.code} />
			</div>
		);
	}
);
