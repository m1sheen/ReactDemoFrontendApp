import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import ProfilePage from "./ProfilePage";

import "@/app/styles/index.scss";
import { Theme } from "@/app/providers/ThemeProvider";
import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import avatar from "@/shared/assets/img/avatar.jpg";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/themeDecorator";

export default {
	title: "pages/ProfilePage",
	component: ProfilePage,

	argTypes: {
		backgroundColor: { control: "color" }
	}
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => (
	<ProfilePage {...(args as object)} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
	StoreDecorator({
		profile: {
			form: {
				username: "admin",
				age: 22,
				country: Country.Armenia,
				lastname: "Ulbi",
				city: "113",
				currency: Currency.RUB,
				avatar
			}
		}
	})
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
	ThemeDecorator(Theme.DARK),
	StoreDecorator({
		profile: {
			form: {
				username: "admin",
				age: 22,
				country: Country.Armenia,
				lastname: "Ulbi",
				city: "113",
				currency: Currency.RUB,
				avatar
			}
		}
	})
];
