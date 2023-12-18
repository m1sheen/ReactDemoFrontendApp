import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Drawer } from "./Drawer";

import "@/app/styles/index.scss";
import cls from "./Drawer.module.scss";

import { Theme } from "@/app/providers/ThemeProvider";
import { ThemeDecorator } from "@/shared/config/storybook/themeDecorator/themeDecorator";

export default {
	title: "shared/Drawer",
	component: Drawer,
	argTypes: {
		backgroundColor: { control: "color" }
	},
	parameters: {
		loki: {
			skip: ["Dark"]
		}
	}
} as ComponentMeta<typeof Drawer>;

const Template: ComponentStory<typeof Drawer> = (args) => (
	<Drawer isOpen {...args}>
		<ul>
			<li style={{ marginBottom: 15 }}>1.</li>
			<li style={{ marginBottom: 15 }}>2.</li>
			<li style={{ marginBottom: 15 }}>3.</li>
			<li style={{ marginBottom: 15 }}>4.</li>
			<li style={{ marginBottom: 15 }}>5.</li>
		</ul>
	</Drawer>
);

export const Normal = Template.bind({});
Normal.args = { className: cls.storybookSize };

export const Dark = Template.bind({});
Dark.args = { className: cls.storybookSize };
Dark.decorators = [ThemeDecorator(Theme.DARK)];
