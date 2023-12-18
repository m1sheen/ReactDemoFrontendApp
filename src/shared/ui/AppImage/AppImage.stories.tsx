import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AppImage } from "./AppImage";

import "@/app/styles/index.scss";
import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/themeDecorator";

export default {
	title: "shared/AppImage",
	component: AppImage,
	argTypes: {
		backgroundColor: { control: "color" }
	},
	parameters: {
		loki: {
			skip: ["Dark"]
		}
	}
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = () => <AppImage />;

export const Normal = Template.bind({});
Normal.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
