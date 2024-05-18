const sukaFarm = new Proxy({"src":"/_astro/sukaFarm.DQGATBDm.png","width":479,"height":595,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/sukaFarm.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/sukaFarm.png");
							return target[name];
						}
					});

export { sukaFarm as default };
