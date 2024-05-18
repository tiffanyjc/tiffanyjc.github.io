const wipBook = new Proxy({"src":"/_astro/wipBook.CSUU6FO_.png","width":479,"height":595,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/wipBook.png";
							}
							
							return target[name];
						}
					});

export { wipBook as default };
