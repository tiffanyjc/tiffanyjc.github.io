const anduril = new Proxy({"src":"/_astro/anduril.C4ZVLoWy.png","width":1000,"height":1000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/anduril.png";
							}
							
							return target[name];
						}
					});

export { anduril as default };
