const headshot = new Proxy({"src":"/_astro/headshot.CBvZPe_i.jpeg","width":321,"height":321,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/headshot.jpeg";
							}
							
							return target[name];
						}
					});

export { headshot as default };
