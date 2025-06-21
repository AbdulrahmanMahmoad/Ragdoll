interface Lighting {
	Atmosphere: Atmosphere;
	Bloom: BloomEffect;
	ColorCorrection: ColorCorrectionEffect;
	ColorGrading: ColorGradingEffect;
	DepthOfField: DepthOfFieldEffect;
	Sky: Sky;
	SunRays: SunRaysEffect;
}

interface ReplicatedStorage {
	Assets: Folder & {
		StarterCharacter: Model & {
			Head: Part & {
				Mesh: SpecialMesh;
				face: Decal;
				HairAttachment: Attachment;
				HatAttachment: Attachment;
				FaceFrontAttachment: Attachment;
				FaceCenterAttachment: Attachment;
			};
			Torso: Part & {
				roblox: Decal;
				NeckAttachment: Attachment;
				BodyFrontAttachment: Attachment;
				BodyBackAttachment: Attachment;
				LeftCollarAttachment: Attachment;
				RightCollarAttachment: Attachment;
				WaistFrontAttachment: Attachment;
				WaistCenterAttachment: Attachment;
				WaistBackAttachment: Attachment;
				"Right Shoulder": Motor6D;
				"Left Shoulder": Motor6D;
				"Right Hip": Motor6D;
				"Left Hip": Motor6D;
				Neck: Motor6D;
			};
			"Left Arm": Part & {
				LeftShoulderAttachment: Attachment;
				LeftGripAttachment: Attachment;
			};
			"Right Arm": Part & {
				RightShoulderAttachment: Attachment;
				RightGripAttachment: Attachment;
			};
			"Left Leg": Part & {
				LeftFootAttachment: Attachment;
			};
			"Right Leg": Part & {
				RightFootAttachment: Attachment;
			};
			Humanoid: Humanoid & {
				Animator: Animator;
				HumanoidDescription: HumanoidDescription & {
					BodyPartDescription: BodyPartDescription;
				};
			};
			HumanoidRootPart: Part & {
				RootAttachment: Attachment;
				RootJoint: Motor6D;
			};
			Animate: LocalScript & {
				idle: StringValue & {
					Animation1: Animation & {
						Weight: NumberValue;
					};
					Animation2: Animation & {
						Weight: NumberValue;
					};
				};
				walk: StringValue & {
					WalkAnim: Animation;
				};
				run: StringValue & {
					RunAnim: Animation;
				};
				jump: StringValue & {
					JumpAnim: Animation;
				};
				climb: StringValue & {
					ClimbAnim: Animation;
				};
				toolnone: StringValue & {
					ToolNoneAnim: Animation;
				};
				fall: StringValue & {
					FallAnim: Animation;
				};
				sit: StringValue & {
					SitAnim: Animation;
				};
				PlayEmote: BindableFunction;
				ScaleDampeningPercent: NumberValue;
			};
			"Body Colors": BodyColors;
		};
	};
	TS: Folder & {
		assets: Folder;
		module: ModuleScript;
		types: Folder & {
			playerType: ModuleScript;
		};
	};
	rbxts_include: Folder & {
		Promise: ModuleScript;
		RuntimeLib: ModuleScript;
	};
}

interface ServerScriptService {
	TS: Folder & {
		character: Folder & {
			starterCharacter: ModuleScript;
		};
		command: Folder & {
			commandService: ModuleScript;
			commands: Folder & {
				kick: ModuleScript;
				ragdoll: ModuleScript;
				unragdoll: ModuleScript;
			};
		};
		main: Script;
		ragdoll: Folder & {
			ragdollComponent: ModuleScript;
			ragdollData: ModuleScript;
			ragdollService: ModuleScript;
			ragdollableComponent: ModuleScript;
		};
	};
}

interface Workspace {
	Baseplate: Model & {
		Prototype_Decals: Model & {
			Light_Prototype_Decals: Model & {
				"2": Part & {
					Decal: Decal;
				};
				"3": Part & {
					Decal: Decal;
				};
				"4": Part & {
					Decal: Decal;
				};
				"5": Part & {
					Decal: Decal;
				};
				"6": Part & {
					Decal: Decal;
				};
				"7": Part & {
					Decal: Decal;
				};
				"8": Part & {
					Decal: Decal;
				};
				"9": Part & {
					Decal: Decal;
				};
				"10": Part & {
					Decal: Decal;
				};
				"11": Part & {
					Decal: Decal;
				};
				"12": Part & {
					Decal: Decal;
				};
				"13": Part & {
					Decal: Decal;
				};
				"1": Part & {
					Decal: Decal;
				};
			};
			Dark_Prototype_Decals: Model & {
				"1": Part & {
					Decal: Decal;
				};
				"2": Part & {
					Decal: Decal;
				};
				"3": Part & {
					Decal: Decal;
				};
				"4": Part & {
					Decal: Decal;
				};
				"5": Part & {
					Decal: Decal;
				};
				"6": Part & {
					Decal: Decal;
				};
				"7": Part & {
					Decal: Decal;
				};
				"8": Part & {
					Decal: Decal;
				};
				"9": Part & {
					Decal: Decal;
				};
				"10": Part & {
					Decal: Decal;
				};
				"11": Part & {
					Decal: Decal;
				};
				"12": Part & {
					Decal: Decal;
				};
				"13": Part & {
					Decal: Decal;
				};
			};
			Red_Prototype_Decals: Model & {
				"2": Part & {
					Decal: Decal;
				};
				"3": Part & {
					Decal: Decal;
				};
				"4": Part & {
					Decal: Decal;
				};
				"5": Part & {
					Decal: Decal;
				};
				"6": Part & {
					Decal: Decal;
				};
				"7": Part & {
					Decal: Decal;
				};
				"8": Part & {
					Decal: Decal;
				};
				"9": Part & {
					Decal: Decal;
				};
				"10": Part & {
					Decal: Decal;
				};
				"11": Part & {
					Decal: Decal;
				};
				"12": Part & {
					Decal: Decal;
				};
				"13": Part & {
					Decal: Decal;
				};
				"1": Part & {
					Decal: Decal;
				};
			};
			Orange_Prototype_Decals: Model & {
				"2": Part & {
					Decal: Decal;
				};
				"3": Part & {
					Decal: Decal;
				};
				"4": Part & {
					Decal: Decal;
				};
				"5": Part & {
					Decal: Decal;
				};
				"6": Part & {
					Decal: Decal;
				};
				"7": Part & {
					Decal: Decal;
				};
				"8": Part & {
					Decal: Decal;
				};
				"9": Part & {
					Decal: Decal;
				};
				"10": Part & {
					Decal: Decal;
				};
				"11": Part & {
					Decal: Decal;
				};
				"12": Part & {
					Decal: Decal;
				};
				"13": Part & {
					Decal: Decal;
				};
				"1": Part & {
					Decal: Decal;
				};
			};
			Green_Prototype_Decals: Model & {
				"2": Part & {
					Decal: Decal;
				};
				"3": Part & {
					Decal: Decal;
				};
				"4": Part & {
					Decal: Decal;
				};
				"5": Part & {
					Decal: Decal;
				};
				"6": Part & {
					Decal: Decal;
				};
				"7": Part & {
					Decal: Decal;
				};
				"8": Part & {
					Decal: Decal;
				};
				"9": Part & {
					Decal: Decal;
				};
				"10": Part & {
					Decal: Decal;
				};
				"11": Part & {
					Decal: Decal;
				};
				"12": Part & {
					Decal: Decal;
				};
				"13": Part & {
					Decal: Decal;
				};
				"1": Part & {
					Decal: Decal;
				};
			};
			Purple_Prototype_Decals: Model & {
				"2": Part & {
					Decal: Decal;
				};
				"3": Part & {
					Decal: Decal;
				};
				"4": Part & {
					Decal: Decal;
				};
				"5": Part & {
					Decal: Decal;
				};
				"6": Part & {
					Decal: Decal;
				};
				"7": Part & {
					Decal: Decal;
				};
				"8": Part & {
					Decal: Decal;
				};
				"9": Part & {
					Decal: Decal;
				};
				"10": Part & {
					Decal: Decal;
				};
				"11": Part & {
					Decal: Decal;
				};
				"12": Part & {
					Decal: Decal;
				};
				"13": Part & {
					Decal: Decal;
				};
				"1": Part & {
					Decal: Decal;
				};
			};
		};
		WindowWall: Model & {
			Part: Part & {
				TextureBottom: Texture;
				TextureFront: Texture;
				TextureLeft: Texture;
				TextureRight: Texture;
				TextureTop: Texture;
				TextureBack: Texture;
			};
		};
		Structure: Model & {
			DefaultWall: Part & {
				TextureBack: Texture;
				TextureBottom: Texture;
				TextureFront: Texture;
				TextureLeft: Texture;
				TextureRight: Texture;
				TextureTop: Texture;
			};
			WindowWall: Part & {
				TextureBack: Texture;
				TextureBottom: Texture;
				TextureFront: Texture;
				TextureLeft: Texture;
				TextureRight: Texture;
				TextureTop: Texture;
			};
			DoorWall: Part & {
				TextureBack: Texture;
				TextureBottom: Texture;
				TextureFront: Texture;
				TextureLeft: Texture;
				TextureRight: Texture;
				TextureTop: Texture;
			};
			Dummy: Model & {
				HumanoidRootPart: Part & {
					"Root Hip": Motor6D;
				};
				Torso: Part & {
					"Left Hip": Motor6D;
					"Right Hip": Motor6D;
					"Left Shoulder": Motor6D;
					"Right Shoulder": Motor6D;
					Neck: Motor6D;
				};
				"Left Leg": Part;
				"Right Leg": Part;
				"Left Arm": Part;
				"Right Arm": Part;
				Head: Part & {
					Face: Decal;
					Mesh: SpecialMesh;
				};
				Humanoid: Humanoid;
			};
		};
		Dummy: Model & {
			HumanoidRootPart: Part & {
				"Root Hip": Motor6D;
			};
			Torso: Part & {
				"Left Hip": Motor6D;
				"Right Hip": Motor6D;
				"Left Shoulder": Motor6D;
				"Right Shoulder": Motor6D;
				Neck: Motor6D;
			};
			"Left Leg": Part;
			"Right Leg": Part;
			"Left Arm": Part;
			"Right Arm": Part;
			Head: Part & {
				Face: Decal;
				Mesh: SpecialMesh;
			};
			Humanoid: Humanoid;
		};
		DoorWall: Model & {
			Part: Part & {
				TextureBack: Texture;
				TextureBottom: Texture;
				TextureFront: Texture;
				TextureLeft: Texture;
				TextureRight: Texture;
				TextureTop: Texture;
			};
		};
		Baseplate: Part & {
			TextureBack: Texture;
			TextureBottom: Texture;
			TextureFront: Texture;
			TextureLeft: Texture;
			TextureRight: Texture;
			TextureTop: Texture;
		};
	};
	Spawn: SpawnLocation;
	readonly Terrain: Terrain;
}
