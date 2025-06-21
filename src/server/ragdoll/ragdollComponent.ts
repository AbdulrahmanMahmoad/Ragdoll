import { BaseComponent, Component } from "@flamework/components";
import { OnStart } from "@flamework/core";
import { RagdollableComponent } from "./ragdollableComponent";
import { offsets } from "./ragdollData";

interface RagdollInstance extends Humanoid {
	Parent: Model;
}

@Component({
	tag: "Ragdoll",
})
export class RagdollComponent
	extends BaseComponent<{}, RagdollInstance>
	implements OnStart
{
	constructor(private ragdollable: RagdollableComponent) {
		super();
	}

	onStart() {
		const character = this.instance.Parent;

		this.setMotor6D(character, false);
		this.buildJoints(character);
		this.setCollisionParts(character);

		this.instance.AutoRotate = false;
		this.instance.PlatformStand = true;
	}

	private setMotor6D(character: Model, enabled = true) {
		for (const part of character.GetDescendants()) {
			if (
				part.Name === "Handle" ||
				part.Name === "RootJoint" ||
				part.Name === "Neck"
			)
				continue;
			if (!part.IsA("Motor6D")) continue;
			part.Enabled = enabled;
		}
	}

	private setCollisionParts(character: Model, eanbled = true): void {
		for (const part of character.GetChildren()) {
			if (!part.IsA("BasePart") || part.Name === "HumanoidRootPart") continue;

			const collitionPart = part.FindFirstChild("CollisionPart");
			if (!collitionPart?.IsA("BasePart")) return;

			collitionPart.CanCollide = eanbled;
		}
	}

	private buildJoints(character: Model): void {
		const humanoidRootPart = character.FindFirstChild("HumanoidRootPart");

		for (const part of character.GetChildren()) {
			if (
				!part.IsA("BasePart") ||
				part.Name === "HumanoidRootPart" ||
				part.Name === "Handle" ||
				part.Name === "Torso" ||
				part.FindFirstAncestorOfClass("Accessory")
			)
				continue;

			if (offsets[part.Name] === undefined) continue;

			const [attachment0, attachment1] = [
				new Instance("Attachment"),
				new Instance("Attachment"),
			];
			const joint = new Instance("BallSocketConstraint");

			attachment0.Name = "RAGDOLL_ATTACHMENT";
			attachment0.CFrame = offsets[part.Name].CFrame[1];
			attachment0.Parent = part;

			attachment1.Name = "RAGDOLL_ATTACHMENT";
			attachment1.CFrame = offsets[part.Name].CFrame[0];
			attachment1.Parent = humanoidRootPart;

			joint.Name = "RAGDOLL_JOINT";
			joint.Attachment0 = attachment0;
			joint.Attachment1 = attachment1;
			joint.Parent = part;
		}
	}

	private destroyJoints(character: Model): void {
		for (const part of character.GetDescendants()) {
			if (part.Name === "RAGDOLL_ATTACHMENT" || part.Name === "RAGDOLL_JOINT") {
				part.Destroy();
			}
		}
	}

	destroy() {
		const character = this.instance.Parent;

		this.instance.AutoRotate = true;
		this.instance.PlatformStand = false;

		this.setMotor6D(character, true);
		this.destroyJoints(character);
		this.setCollisionParts(character, false);
	}
}
