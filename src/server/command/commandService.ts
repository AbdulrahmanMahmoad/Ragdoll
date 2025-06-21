import { OnInit, Service } from "@flamework/core";
import { Centurion } from "@rbxts/centurion";
import { ReplicatedStorage, ServerScriptService } from "@rbxts/services";

@Service({})
export class CommandService implements OnInit {
	onInit() {
		const server = Centurion.server();
		const commandContainer = ServerScriptService.TS.command.commands;
		server.registry.load(commandContainer!);

		const typeContainer = ReplicatedStorage.TS.types;
		server.registry.load(typeContainer);

		server.start();
	}
}
