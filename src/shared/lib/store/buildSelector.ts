import { useSelector } from "react-redux";

import { StateSchema } from "@/app/providers/StoreProvider";

type Selector<T> = (state: StateSchema) => T;
export const buildSelector = <T>(selector: Selector<T>): [() => T, Selector<T>] => {
	const useSelectorHook = () => {
		return useSelector(selector);
	};
	return [useSelectorHook, selector];
};
