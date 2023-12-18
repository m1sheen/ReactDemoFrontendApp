import { ComponentMeta, ComponentStory } from "@storybook/react";

import { NotificationList } from "./NotificationList";

import "@/app/styles/index.scss";
import { Theme } from "@/app/providers/ThemeProvider";

import withMock from "storybook-addon-mock";

import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/themeDecorator";

const notifications = [
	{
		id: "1",
		title: "Уведомление 1",
		description: "Произошло событие 1",
		userId: "1",
		href: "http://localhost:3000/admin"
	},
	{
		id: "1",
		title: "Уведомление 1",
		description: "Произошло событие 1",
		userId: "1",
		href: "http://localhost:3000/admin"
	},
	{
		id: "3",
		title: "Уведомление 3",
		description: "Произошло событие 3",
		userId: "1",
		href: "http://localhost:3000/admin"
	}
];

export default {
	title: "entities/NotificationList",
	component: NotificationList,
	argTypes: {
		backgroundColor: { control: "color" }
	},
	decorators: [StoreDecorator({}), withMock]
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = () => <NotificationList />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.parameters = {
	mockData: [
		{
			url: __API__ + "/notifications",
			method: "GET",
			status: 200,
			response: notifications
		}
	]
};
Normal.decorators = [withMock, StyleDecorator({ maxWidth: 500 })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.parameters = {
	mockData: [
		{
			url: __API__ + "/notifications",
			method: "GET",
			status: 200,
			response: notifications
		}
	]
};
Dark.decorators = [withMock, StyleDecorator({ maxWidth: 500 }), ThemeDecorator(Theme.DARK)];
