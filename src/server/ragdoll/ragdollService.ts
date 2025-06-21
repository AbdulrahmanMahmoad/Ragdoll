import { OnInit, Service } from "@flamework/core";
import { promiseR6 } from "@rbxts/promise-character";
import { CollectionService, Players } from "@rbxts/services";

@Service({})
export class RagdollService implements OnInit {
	public onInit(): void | Promise<void> {
		Players.PlayerAdded.Connect(({ CharacterAdded }) => {
			CharacterAdded.Connect(this.handleCharacterModel);
		});
	}

	private setRagdollable(humanoid: Humanoid, enabled = true): void {
		if (enabled) {
			CollectionService.AddTag(humanoid, "Ragdollable");
		} else {
			CollectionService.RemoveTag(humanoid, "Ragdollable");
		}
	}

	private handleCharacterModel(model: Model): void {
		promiseR6(model).andThen(({ Humanoid }) =>
			this.setRagdollable(Humanoid, true),
		);
	}

	public ragdollPlayer(humanoid: Humanoid): void {
		if (CollectionService.HasTag(humanoid, "Ragdoll")) return;
		CollectionService.AddTag(humanoid, "Ragdoll");
	}

	public unragdollPlayer(humanoid: Humanoid): void {
		if (!CollectionService.HasTag(humanoid, "Ragdoll")) return;
		CollectionService.RemoveTag(humanoid, "Ragdoll");
	}

	public isRagdollable(humanoid: Humanoid): boolean {
		return CollectionService.HasTag(humanoid, "Ragdollable");
	}
}
