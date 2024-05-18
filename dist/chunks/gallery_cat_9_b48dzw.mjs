const img06 = new Proxy({"src":"/_astro/gallery_cat.McnhSZS8.png","width":1328,"height":1694,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_cat.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_cat.png");
							return target[name];
						}
					});

export { img06 as default };
