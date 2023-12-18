import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { NotFoundPage } from "./NotFoundPage";

import "@/app/styles/index.scss";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/themeDecorator";

export default {
	title: "pages/NotFoundPage",
	component: NotFoundPage,

	argTypes: {
		backgroundColor: { control: "color" }
	}
} as ComponentMeta<typeof NotFoundPage>;

const Template: ComponentStory<typeof NotFoundPage> = (args) => (
	<NotFoundPage {...(args as object)} />
);

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
