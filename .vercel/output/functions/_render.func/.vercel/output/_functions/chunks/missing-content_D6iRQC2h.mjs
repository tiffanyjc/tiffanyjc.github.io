import { a8 as createComponent, a9 as renderTemplate, aa as maybeRenderHead, ab as unescapeHTML } from './astro_C3K8O79i.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"This post doesn't have any content","description":"This post is purely for testing the table of content, which should not be rendered","publishDate":"22 Feb 2023","tags":["test","toc"],"minutesRead":"0 min read"};
				const file = "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/missing-content.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
