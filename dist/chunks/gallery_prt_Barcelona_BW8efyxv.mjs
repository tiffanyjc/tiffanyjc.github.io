const img02 = new Proxy({"src":"/_astro/gallery_prt_Barcelona.COl69cWt.png","width":2480,"height":3508,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_Barcelona.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_Barcelona.png");
							return target[name];
						}
					});

export { img02 as default };
