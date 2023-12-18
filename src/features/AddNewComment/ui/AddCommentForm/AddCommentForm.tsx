import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import cls from "./AddCommentForm.module.scss";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelector";
import {
	addComentFormActions,
	addCommentFormReducer
} from "../../model/slices/addCommentFormSlice";

import { classNames } from "@/shared/lib/classNames/classNames";
import {
	DynamicModuleLoader,
	ReducersList
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { HStack } from "@/shared/ui/Stack";

export interface AddCommentFormProps {
	className?: string;
	onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
	addCommentForm: addCommentFormReducer
};

const AddCommentForm = ({ className, onSendComment }: AddCommentFormProps) => {
	const { t } = useTranslation();
	const text = useSelector(getAddCommentFormText);
	const dispatch = useAppDispatch();

	const onCommentTextChange = useCallback(
		(text: string) => {
			dispatch(addComentFormActions.setText(text));
		},
		[dispatch]
	);

	const onSendHandler = useCallback(() => {
		onSendComment(text || "");
		onCommentTextChange("");
	}, [onCommentTextChange, onSendComment, text]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<HStack
				data-testid={"AddCommentForm"}
				justify="between"
				gap="8"
				max
				className={classNames(cls.addCommentForm, {}, [className])}
			>
				<Input
					data-testid={"AddCommentForm.Input"}
					placeholder={t("Введите текст комментария")}
					value={text}
					onChange={onCommentTextChange}
				/>
				<Button
					data-testid={"AddCommentForm.Button"}
					theme={ButtonTheme.OUTLINE}
					onClick={onSendHandler}
				>
					{t("Отправить")}
				</Button>
			</HStack>
		</DynamicModuleLoader>
	);
};
export default AddCommentForm;
