import { fetchProfileData } from "./fetchProfileData";

import { Country } from "@/entities/Country";
import { Currency } from "@/entities/Currency";
import { TestAsyncThunk } from "@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk";

const data = {
	id: "1",
	username: "admin",
	age: 22,
	country: Country.Armenia,
	lastname: "Ulbi",
	city: "113",
	currency: Currency.RUB
};

describe("fetchProfileData.test", () => {
	test("success login", async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ data }));
		const result = await thunk.callThunk("1");
		expect(thunk.api.get).toHaveBeenCalled();
		expect(result.meta.requestStatus).toBe("fulfilled");
		expect(result.payload).toEqual(data);
	});

	test("error login", async () => {
		const thunk = new TestAsyncThunk(fetchProfileData);
		thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
		const result = await thunk.callThunk("1");
		expect(result.meta.requestStatus).toBe("rejected");
	});
});
