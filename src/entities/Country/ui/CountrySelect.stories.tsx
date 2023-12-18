import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { CountrySelect } from "./CountrySelect";
import "@/app/styles/index.scss";
import { Country } from "../../Country";

import { StyleDecorator } from "@/shared/config/storybook/StyleDecorator/StyleDecorator";

export default {
	title: "entities/CountrySelect",
	component: CountrySelect,

	argTypes: {
		backgroundColor: { control: "color" }
	},
	args: {
		to: "/"
	}
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	value: Country.Armenia
};
Primary.decorators = [StyleDecorator()];
