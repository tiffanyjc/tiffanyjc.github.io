const anduril = new Proxy({"src":"/_astro/anduril.C8bPhDJb.jpeg","width":225,"height":225,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/anduril.jpeg";
							}
							
							return target[name];
						}
					});

export { anduril as default };
