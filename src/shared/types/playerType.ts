import { TransformResult, TypeBuilder } from "@rbxts/centurion";
import { Players } from "@rbxts/services";

export const playerType = TypeBuilder.create<Player>("player")
	.transform((text, executor) => {
		if (text === "@me") {
			return TransformResult.ok(executor);
		}

		const player = Players.FindFirstChild(text);
		if (player === undefined || !classIs(player, "Player")) {
			return TransformResult.err("Player not found");
		}
		return TransformResult.ok(player);
	})
	.suggestions(() => Players.GetPlayers().map((player) => player.Name))
	.build();
