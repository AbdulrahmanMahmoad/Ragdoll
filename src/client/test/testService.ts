import { Controller, OnStart } from "@flamework/core";

@Controller({})
export class TestService implements OnStart {
	onStart() {
		print("TestService has started!");
	}
}
