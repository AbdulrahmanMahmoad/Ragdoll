import { OnStart, Service } from "@flamework/core";

@Service({})
export class TestService implements OnStart {
	onStart() {
    print("TestService has started!");
  }
}
