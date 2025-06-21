import { OnInit, Service } from "@flamework/core";
import { CollectionService, Players } from "@rbxts/services";

@Service({})
export class RagdollService implements OnInit {
	public onInit(): void | Promise<void> {
		Players.PlayerAdded.Connect((player) => {
			this.onPlayerAdded(player);
		});
	}

	private setRagdollable(humanoid: Humanoid, enabled = true): void {
        if (enabled) {
            CollectionService.AddTag(humanoid, "Ragdollable");
        } else {
            CollectionService.RemoveTag(humanoid, "Ragdollable");
        }
	}

	private onPlayerAdded(player: Player): void {
		player.CharacterAdded.Connect((character) => {
			const humanoid = character.WaitForChild("Humanoid");
			if (humanoid.IsA("Humanoid")) {
				this.setRagdollable(humanoid);
			}
		});
	}

	public ragdollPlayer(humanoid: Humanoid): void {
        CollectionService.AddTag(humanoid, "Ragdoll");
    }

    public unragdollPlayer(humanoid: Humanoid): void {
        CollectionService.RemoveTag(humanoid, "Ragdoll");
    }
}
