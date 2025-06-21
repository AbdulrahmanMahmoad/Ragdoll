/*
https://pastebin.com/UPSBgNNs
*/

interface Offset {
	CFrame: CFrame[];
}

export const offsets: Record<string, Offset> = {
	Head: {
		CFrame: [
			new CFrame(0, 1, 0, 0, -1, 0, 1, 0, -0, 0, 0, 1),
			new CFrame(0, -0.5, 0, 0, -1, 0, 1, 0, -0, 0, 0, 1),
		],
	},
	HumanoidRootPart: {
		CFrame: [
			new CFrame(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
			new CFrame(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0),
		],
	},
	"Right Arm": {
		CFrame: [
			new CFrame(1.3, 0.75, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1),
			new CFrame(-0.2, 0.75, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1),
		],
	},
	"Left Arm": {
		CFrame: [
			new CFrame(-1.3, 0.75, 0, -1, 0, 0, 0, -1, 0, 0, 0, 1),
			new CFrame(0.2, 0.75, 0, -1, 0, 0, 0, -1, 0, 0, 0, 1),
		],
	},
	"Right Leg": {
		CFrame: [
			new CFrame(0.5, -1, 0, 0, 1, -0, -1, 0, 0, 0, 0, 1),
			new CFrame(0, 1, 0, 0, 1, -0, -1, 0, 0, 0, 0, 1),
		],
	},
	"Left Leg": {
		CFrame: [
			new CFrame(-0.5, -1, 0, 0, 1, -0, -1, 0, 0, 0, 0, 1),
			new CFrame(0, 1, 0, 0, 1, -0, -1, 0, 0, 0, 0, 1),
		],
	},
};
