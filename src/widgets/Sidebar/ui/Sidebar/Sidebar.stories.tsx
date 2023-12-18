import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import "@/app/styles/index.scss";
import { Sidebar } from "./Sidebar";
import cls from "./Sidebar.module.scss";

import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/themeDecorator";

export default {
	title: "widget/Sidebar",
	component: Sidebar,

	argTypes: {
		backgroundColor: { control: "color" }
	},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = { className: cls.storybookHeight };

export const Dark = Template.bind({});
Dark.args = { className: cls.storybookHeight };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
