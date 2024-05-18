const luckCharm = new Proxy({"src":"/_astro/luckCharm.CwA2RbtX.jpeg","width":1280,"height":1599,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/luckCharm.jpeg";
							}
							
							return target[name];
						}
					});

export { luckCharm as default };
