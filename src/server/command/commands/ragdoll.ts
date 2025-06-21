import {
	CenturionType,
	Command,
	CommandContext,
	CommandGuard,
	Guard,
	Register,
} from "@rbxts/centurion";
import { CollectionService, RunService } from "@rbxts/services";

const isAdmin: CommandGuard = (ctx) => {
    if (ctx.executor.UserId !== 389450897 || RunService.IsStudio() || ctx.executor.Name === "Player1") {
		ctx.error("Insufficient permission!");
		return false;
	}

	return true;
};

@Register()
export class RagdollCommand {
	@Command({
		name: "ragdoll",
		description: "ragdoll a player",
		arguments: [
			{
				name: "player",
				description: "Player to ragdoll",
				type: CenturionType.Players,
			},
		],
	})
	@Guard(isAdmin)
	ragdoll(ctx: CommandContext, players: Player[]) {
		for (const player of players) {
			CollectionService.AddTag(
				player.Character?.WaitForChild("Humanoid")!,
				"Ragdoll",
			);
			ctx.reply(`Successfully ragdolled ${player.Name}`);
		}
	}
}
