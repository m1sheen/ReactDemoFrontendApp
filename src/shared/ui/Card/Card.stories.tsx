import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Card } from "./Card";

import "@/app/styles/index.scss";
import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";
import { Text } from "@/shared/ui/Text";

export default {
	title: "shared/Card",
	component: Card,
	decorators: [StyleDecorator()],
	argTypes: {
		backgroundColor: { control: "color" }
	}
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: <Text title={"test"} text="test test test" />
};
