import path from "path";

import webpack, { DefinePlugin, RuleSetRule } from "webpack";

import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { BuildPaths } from "../build/types/config";

export default ({ config }: { config: webpack.Configuration }) => {
	const paths: BuildPaths = {
		entry: "",
		build: "",
		html: "",
		src: path.resolve(__dirname, "..", "..", "src"),
		locales: path.resolve(__dirname, "public", "locales"),
		buildLocales: path.resolve(__dirname, "build", "locales")
	};
	// config.resolve = config.resolve || {};
	// config.resolve.alias = {
	//   entities: path.resolve(__dirname, "./src/entities"),
	// };
	config.resolve?.modules?.push(paths.src);
	config.resolve?.extensions?.push("ts", "tsx");
	config!.resolve!.alias = {
		...config!.resolve!.alias,
		"@": paths.src
	};

	//@ts-ignore
	config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
		if (/svg/.test(rule.test as string)) {
			return { ...rule, exclude: /\.svg$/ };
		}
		return rule;
	});

	config.module?.rules.push({
		test: /\.svg$/,
		use: ["@svgr/webpack"]
	});

	config.module?.rules?.push(buildCssLoader(true));
	config.plugins?.push(
		new DefinePlugin({
			__IS_DEV__: true,
			__API__: JSON.stringify("http://testapi.ru"),
			__PROJECT__: JSON.stringify("storybook")
		})
	);
	return config;
};
