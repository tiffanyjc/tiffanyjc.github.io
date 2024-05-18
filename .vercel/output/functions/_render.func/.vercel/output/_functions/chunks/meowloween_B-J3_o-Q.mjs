const meowloween = new Proxy({"src":"/_astro/meowloween.DBg8lq5N.jpeg","width":1280,"height":1657,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/meowloween.jpeg";
							}
							
							return target[name];
						}
					});

export { meowloween as default };
