import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { ThemeSwitcher } from "./ThemeSwitcher";

import "@/app/styles/index.scss";
import { Theme } from "@/app/providers/ThemeProvider";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/themeDecorator";

export default {
	title: "shared/ThemeSwitcher",
	component: ThemeSwitcher,

	argTypes: {
		backgroundColor: { control: "color" }
	}
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StyleDecorator()];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [StyleDecorator(), ThemeDecorator(Theme.DARK)];
