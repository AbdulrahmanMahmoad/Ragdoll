import {
	CenturionType,
	Command,
	CommandContext,
	CommandGuard,
	Guard,
	Register,
} from "@rbxts/centurion";

const isAdmin: CommandGuard = (ctx) => {
	if (ctx.executor.UserId !== 389450897) {
		ctx.error("Insufficient permission!");
		return false;
	}

	return true;
};

@Register()
export class KickCommand {
	@Command({
		name: "kick",
		description: "Kick a player",
		arguments: [
			{
				name: "player",
				description: "Player to kick",
				type: CenturionType.Player,
			},
		],
	})
	@Guard(isAdmin)
	kick(ctx: CommandContext, player: Player) {
		player.Kick("You have been kicked from the server.");
		ctx.reply(`Successfully kicked ${player.Name}`);
	}
}
