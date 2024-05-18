const arIllustration = new Proxy({"src":"/_astro/arIllustration.BSC2TCHc.gif","width":1092,"height":1060,"format":"gif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/arIllustration.gif";
							}
							
							return target[name];
						}
					});

export { arIllustration as default };
