import { useTranslation } from "react-i18next";

import cls from "./ProfileCard.module.scss";
import { Country, CountrySelect } from "../../../Country";
import { Currency, CurrencySelect } from "../../../Currency";

import { Profile } from "@/entities/Profile";
import { Mods, classNames } from "@/shared/lib/classNames/classNames";
import { Avatar } from "@/shared/ui/Avatar";
import { Input } from "@/shared/ui/Input";
import { Loader } from "@/shared/ui/Loader";
import { HStack, VStack } from "@/shared/ui/Stack";
import { Text, TextAlign, TextTheme } from "@/shared/ui/Text";

interface ProfileCardProps {
	className?: string;
	data?: Profile;
	isLoading?: boolean;
	error?: string;
	readonly?: boolean;
	onChangeFirstName?: (value: string) => void;
	onChangeLastName?: (value: string) => void;
	onChangeAge?: (value: number | string) => void;
	onChangeCity?: (value: string) => void;
	onChangeUsername?: (value: string) => void;
	onChangeAvatar?: (value: string) => void;
	onChangeCurrency?: (value: Currency) => void;
	onChangeCountry?: (value: Country) => void;
}

export const ProfileCard = ({
	className,
	data,
	isLoading,
	error,
	readonly,
	onChangeFirstName,
	onChangeLastName,
	onChangeAge,
	onChangeCity,
	onChangeUsername,
	onChangeAvatar,
	onChangeCurrency,
	onChangeCountry
}: ProfileCardProps) => {
	const { t } = useTranslation("profile");

	if (isLoading) {
		return (
			<HStack
				justify="center"
				max
				className={classNames(cls.profilecard, { [cls.loading]: true }, [className])}
			>
				<Loader />
			</HStack>
		);
	}

	if (error) {
		return (
			<HStack
				justify="center"
				max
				className={classNames(cls.profilecard, {}, [className, cls.error])}
			>
				<Text
					title={t("Произошла ошибка при загрузке профиля")}
					text={t("Попробуйте перезагрузить страницу")}
					theme={TextTheme.ERROR}
					align={TextAlign.CENTER}
				/>
			</HStack>
		);
	}

	const mods: Mods = {
		[cls.editing]: !readonly
	};

	return (
		<VStack gap="8" max className={classNames(cls.profilecard, mods, [className])}>
			{data?.avatar && (
				<HStack justify="center" max>
					<Avatar size={200} src={data?.avatar} alt="avatar img" />
				</HStack>
			)}
			<Input
				value={data?.first}
				placeholder={t("Ваше имя")}
				className={cls.input}
				readonly={readonly}
				onChange={onChangeFirstName}
				data-testid={"ProfileCard.firstname"}
			/>

			<Input
				value={data?.lastname}
				placeholder={t("Ваше фамилия")}
				className={cls.input}
				readonly={readonly}
				onChange={onChangeLastName}
				data-testid={"ProfileCard.lastname"}
			/>

			<Input
				value={Number(data?.age) || 0}
				placeholder={t("Ваш возраст")}
				className={cls.input}
				readonly={readonly}
				onChange={onChangeAge}
			/>

			<Input
				value={data?.city}
				placeholder={t("Город")}
				className={cls.input}
				readonly={readonly}
				onChange={onChangeCity}
			/>
			<Input
				value={data?.username}
				placeholder={t("Имя пользователя")}
				className={cls.input}
				readonly={readonly}
				onChange={onChangeUsername}
			/>
			<Input
				value={data?.avatar}
				placeholder={t("Введите ссылку на аватар")}
				className={cls.input}
				readonly={readonly}
				onChange={onChangeAvatar}
			/>
			<CurrencySelect
				className={cls.input}
				value={data?.currency}
				onChange={onChangeCurrency}
				readonly={readonly}
			/>
			<CountrySelect
				className={cls.input}
				value={data?.country}
				onChange={onChangeCountry}
				readonly={readonly}
			/>
		</VStack>
	);
};
