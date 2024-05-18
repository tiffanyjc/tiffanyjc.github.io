const figmaPlugin = new Proxy({"src":"/_astro/figmaPlugin.Cz7qYpdi.png","width":675,"height":546,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/figmaPlugin.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/figmaPlugin.png");
							return target[name];
						}
					});

export { figmaPlugin as default };
