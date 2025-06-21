import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";

interface RagdollableInstance extends Humanoid {
	Parent: Model;
}

@Component({
	tag: "Ragdollable",
	attributes: {},
})
export class RagdollableComponent
	extends BaseComponent<{}, RagdollableInstance>
	implements OnStart
{
	public onStart(): void {
		this.instance.BreakJointsOnDeath = false;
		this.instance.RequiresNeck = false;

		this.buildCollisionParts(this.instance.Parent);
	}

	private buildCollisionParts(character: Model): void {
		for (const part of character.GetChildren()) {
			if (!part.IsA("BasePart") || part.Name === "HumanoidRootPart") return;

			const clonedPart = part.Clone();
			clonedPart.CanCollide = false;
			clonedPart.Massless = true;
			clonedPart.Size = Vector3.one;
			clonedPart.Name = "CollisionPart";
			clonedPart.Transparency = 1;
			clonedPart.ClearAllChildren();
			clonedPart.Parent = part;

			const weld = new Instance("Weld");
			weld.Part0 = part;
			weld.Part1 = clonedPart;
			weld.Parent = part;
		}
	}

    private destroyCollisionParts(character: Model): void {
        for (const part of character.GetChildren()) {
            if (!part.IsA("BasePart") || part.Name === "HumanoidRootPart") continue;

            const collisionPart = part.FindFirstChild("CollisionPart");
            if (collisionPart?.IsA("BasePart")) {
                collisionPart.Destroy();
            }
        }
    }

    public destroy(): void {
        this.instance.BreakJointsOnDeath = true;
		this.instance.RequiresNeck = true;

		this.destroyCollisionParts(this.instance.Parent);
    };
}
