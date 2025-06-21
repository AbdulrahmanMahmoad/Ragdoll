import { OnInit, Service } from "@flamework/core";
import { ReplicatedStorage, RunService, StarterPlayer } from "@rbxts/services";

@Service({})
export class StarterCharacter implements OnInit {
	onInit() {
        if (RunService.IsStudio()) {
            const StarterCharacter = ReplicatedStorage.Assets.StarterCharacter;
            StarterCharacter.Parent = StarterPlayer
        }
    }
}
