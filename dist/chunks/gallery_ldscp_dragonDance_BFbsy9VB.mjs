const img03 = new Proxy({"src":"/_astro/gallery_ldscp_dragonDance.DmId3Hjx.png","width":4000,"height":1600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_ldscp_dragonDance.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_ldscp_dragonDance.png");
							return target[name];
						}
					});

export { img03 as default };
