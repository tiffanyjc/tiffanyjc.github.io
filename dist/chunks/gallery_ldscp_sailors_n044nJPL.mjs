const img01 = new Proxy({"src":"/_astro/gallery_ldscp_sailors.Bwt09jEx.png","width":2000,"height":1600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_ldscp_sailors.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_ldscp_sailors.png");
							return target[name];
						}
					});

export { img01 as default };
