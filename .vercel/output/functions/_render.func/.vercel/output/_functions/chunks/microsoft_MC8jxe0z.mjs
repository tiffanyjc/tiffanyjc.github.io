const microsoft = new Proxy({"src":"/_astro/microsoft.W1IkgQVB.png","width":1280,"height":1280,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/microsoft.png";
							}
							
							return target[name];
						}
					});

export { microsoft as default };
