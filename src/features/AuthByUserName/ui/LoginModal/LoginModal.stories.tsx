import { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoginModal } from "./LoginModal";

import "@/app/styles/index.scss";
import { Theme } from "@/app/providers/ThemeProvider";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/themeDecorator";

export default {
	title: "features/LoginModal",
	component: LoginModal,
	argTypes: {
		backgroundColor: { control: "color" }
	},
	parameters: {
		loki: {
			skip: ["Dark"]
		}
	},
	decorators: [StoreDecorator({})]
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Normal = Template.bind({});
Normal.args = { isOpen: true, onClose: () => ({}) };

export const Dark = Template.bind({});
Dark.args = { isOpen: true, onClose: () => ({}) };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
