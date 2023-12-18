import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CurrencySelect } from "./CurrencySelect";
import "@/app/styles/index.scss";
import { Currency } from "../model/types/currency";

import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";

export default {
	title: "entities/CurrencySelect",
	component: CurrencySelect,

	argTypes: {
		backgroundColor: { control: "color" }
	},
	args: {
		to: "/"
	}
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	value: Currency.RUB
};
Primary.decorators = [StyleDecorator()];
