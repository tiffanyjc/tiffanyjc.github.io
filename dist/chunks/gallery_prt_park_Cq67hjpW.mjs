const img10 = new Proxy({"src":"/_astro/gallery_prt_park.B0XWcIww.png","width":2865,"height":3508,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_park.png";
							}
							if (target[name] !== undefined) globalThis.astroAsset.referencedImages.add("/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_park.png");
							return target[name];
						}
					});

export { img10 as default };
