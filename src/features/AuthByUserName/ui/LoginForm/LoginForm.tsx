import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import cls from "./LoginForm.module.scss";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { loginByUserName } from "../../model/services/loginByUserName/loginByUserName";
import { loginActions, loginReducer } from "../../model/slice/loginSlice";

import { classNames } from "@/shared/lib/classNames/classNames";
import {
	DynamicModuleLoader,
	ReducersList
} from "@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch/useAppDispatch";
import { Button, ButtonTheme } from "@/shared/ui/Button";
import { Input } from "@/shared/ui/Input";
import { Text, TextTheme } from "@/shared/ui/Text";

export interface LoginFormProps {
	className?: string;
	onSuccess: () => void;
}

const initialReducers: ReducersList = {
	loginForm: loginReducer
};

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { username, password, isLoading, error } = useSelector(getLoginState);

	const onChangeUserName = useCallback(
		(value: string) => {
			dispatch(loginActions.setUserName(value));
		},
		[dispatch]
	);

	const onChangePassword = useCallback(
		(value: string) => {
			dispatch(loginActions.setPassword(value));
		},
		[dispatch]
	);

	const onLoginClick = useCallback(async () => {
		const res = dispatch(loginByUserName({ username, password }));
		if ((await res).meta.requestStatus === "fulfilled") {
			onSuccess();
			navigate?.("/about");
		}
	}, [dispatch, username, password, onSuccess, navigate]);

	return (
		<DynamicModuleLoader reducers={initialReducers}>
			<div className={classNames(cls.loginform, {}, [className])}>
				<Text title={t("Форма авторизации")} />
				{error && (
					<Text
						text={t("Вы ввели неправильный логин или пароль")}
						theme={TextTheme.ERROR}
					/>
				)}
				<Input
					type="text"
					className={cls.input}
					placeholder={t("Введите имя")}
					autoFocus
					onChange={onChangeUserName}
					value={username}
				/>
				<Input
					type="text"
					className={cls.input}
					placeholder={t("Введите пароль")}
					onChange={onChangePassword}
					value={password}
				/>
				<Button
					theme={ButtonTheme.OUTLINE}
					className={cls.loginBtn}
					onClick={onLoginClick}
					disabled={isLoading}
				>
					{t("Войти")}
				</Button>
			</div>
		</DynamicModuleLoader>
	);
});
export default LoginForm;
