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
	if (ctx.executor.UserId !== 389450897 && !RunService.IsStudio()) {
		ctx.error("Insufficient permission!");
		return false;
	}

	return true;
};

@Register()
export class UnRagdollCommand {
	@Command({
		name: "unragdoll",
		description: "unragdoll a player",
		arguments: [
			{
				name: "player",
				description: "Player to unragdoll",
				type: CenturionType.Players,
			},
		],
	})
	@Guard(isAdmin)
	ragdoll(ctx: CommandContext, players: Player[]) {
		for (const player of players) {
			CollectionService.RemoveTag(
				player.Character?.WaitForChild("Humanoid")!,
				"Ragdoll",
			);
			ctx.reply(`Successfully unragdolled ${player.Name}`);
		}
	}
}
