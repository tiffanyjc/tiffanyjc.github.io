import { a as createAstro, b as createComponent, d as renderTemplate, f as addAttribute, e as renderComponent, F as Fragment, m as maybeRenderHead, h as renderHead, g as renderSlot } from './astro/server_B7JW7ZW-.mjs';
import 'kleur/colors';
/* empty css                         */
import { s as siteConfig } from './_astro_content_B8Bdc9UA.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const $$Astro$5 = createAstro("https://www.tiffanyc.cc");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const titleSeparator = "\u2022";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/social-card.png", Astro2.url).href;
  return renderTemplate`<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>${siteTitle}</title><!-- <link href="favicon/favicon.ico" rel="icon" sizes="any" />
<link href="favicon/icon.svg" rel="icon" type="image/svg+xml" />
<link href="/apple-touch-icon.png" rel="apple-touch-icon" />
<link href="/manifest.webmanifest" rel="manifest" /> --><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest"><!-- <link rel='preload' href='/fonts/Satoshi-Variable.ttf' as='font' type='font/ttf' crossorigin />
<link
	rel='preload'
	href='/fonts/Satoshi-VariableItalic.ttf'
	as='font'
	type='font/ttf'
	crossorigin
/>
<link rel='preload' href='/fonts/ClashDisplay-Variable.ttf' as='font' type='font/ttf' crossorigin /> --><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta${addAttribute(siteTitle, "content")} name="title"><meta${addAttribute(description, "content")} name="description"><meta${addAttribute(siteConfig.author, "content")} name="author"><meta content="" name="theme-color"><meta${addAttribute(articleDate ? "article" : "website", "content")} property="og:type"><meta${addAttribute(title, "content")} property="og:title"><meta${addAttribute(description, "content")} property="og:description"><meta${addAttribute(canonicalURL, "content")} property="og:url"><meta${addAttribute(siteConfig.title, "content")} property="og:site_name"><meta${addAttribute(siteConfig.ogLocale, "content")} property="og:locale"><meta${addAttribute(socialImageURL, "content")} property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta${addAttribute(siteConfig.author, "content")} property="article:author"><meta${addAttribute(articleDate, "content")} property="article:published_time">` })}`}<meta content="summary_large_image" property="twitter:card"><meta${addAttribute(canonicalURL, "content")} property="twitter:url"><meta${addAttribute(title, "content")} property="twitter:title"><meta${addAttribute(description, "content")} property="twitter:description"><meta${addAttribute(socialImageURL, "content")} property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link href="/rss.xml" rel="alternate"${addAttribute(siteConfig.title, "title")} type="application/rss+xml"><meta${addAttribute(Astro2.generator, "content")} name="generator">`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/BaseHead.astro", void 0);

const $$Astro$4 = createAstro("https://www.tiffanyc.cc");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto mt-24 w-full"> <div class="border-t border-border pt-5"> <div class="flex flex-col items-center gap-y-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex gap-x-4 text-sm"> <!-- <a
          class='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='/terms'>Terms</a
        >

        <a
          class='inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='/privacy'>Privacy</a
        > --> <p class="">© 2024 <a href="https://astro.build/themes/details/resume/">Astro Template | Resume</a>.</p> </div> <div class="flex items-center justify-between"> <!-- Social Brands --> <div class="flex items-center gap-x-4"> <!-- Linkedin --> <a class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75" href="https://www.linkedin.com/in/tiffanyjchen/"> <svg class="h-4 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg> </a> </div> <!-- End Social Brands --> </div> </div> </div> </footer>`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/layout/Footer.astro", void 0);

const $$Astro$3 = createAstro("https://www.tiffanyc.cc");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Header;
  const { activePage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<header class="mb-12 flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start"> <nav class="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center" aria-label="global"> <a class="flex-none text-xl font-semibold" href="/" aria-label="Brand">🥳 Tiffany Chen</a> <div class="flex flex-row items-center justify-center gap-x-5 sm:gap-x-7"> <a href="/" class="design flex-none text-[1.05rem] font-medium hover:text-foreground/75" aria-label="Nav Menu Item"> ${activePage == "Design" ? renderTemplate`<b><u>Design</u></b>` : "Design"} </a> <a href="/art" class="art flex-none text-[1.05rem] font-medium hover:text-foreground/75" aria-label="Nav Menu Item"> ${activePage == "Art" ? renderTemplate`<b><u>Art</u></b>` : "Art"} </a> </div> </nav> </header>`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/layout/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://www.tiffanyc.cc");
const $$ThemeProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ThemeProvider;
  return renderTemplate(_a || (_a = __template(["<script>\n	const lightModePref = window.matchMedia('(prefers-color-scheme: light)')\n\n	// Get user preference from local storage or from browser preference\n	function getUserPref() {\n		const storedTheme = localStorage.getItem('theme') ?? undefined\n		return storedTheme || (lightModePref.matches ? 'light' : 'dark')\n	}\n\n	function setTheme(newTheme) {\n		if (newTheme !== 'light' && newTheme !== 'dark') {\n			return console.log(`Invalid theme value '${newTheme}' received. Expected 'light' or 'dark'.`)\n		}\n\n		localStorage.setItem('theme', newTheme)\n\n		const root = document.documentElement\n\n		// if current dark theme and new theme is dark, return\n		if (newTheme === 'dark' && root.classList.contains('dark')) {\n			return\n		} else if (newTheme === 'light' && !root.classList.contains('dark')) {\n			return\n		}\n\n		root.classList.toggle('dark')\n	}\n\n	// Initial Setup\n	setTheme(getUserPref())\n\n	// View Transitions hook to restore theme\n	document.addEventListener('astro:after-swap', () => setTheme(getUserPref()))\n\n	// Listen for theme-change custom event\n	document.addEventListener('theme-change', (e) => {\n		setTheme(e.detail.theme)\n	})\n\n	// Listen for prefers-color-scheme change\n	lightModePref.addEventListener('change', (e) => setTheme(e.matches ? 'light' : 'dark'))\n<\/script>"], ["<script>\n	const lightModePref = window.matchMedia('(prefers-color-scheme: light)')\n\n	// Get user preference from local storage or from browser preference\n	function getUserPref() {\n		const storedTheme = localStorage.getItem('theme') ?? undefined\n		return storedTheme || (lightModePref.matches ? 'light' : 'dark')\n	}\n\n	function setTheme(newTheme) {\n		if (newTheme !== 'light' && newTheme !== 'dark') {\n			return console.log(\\`Invalid theme value '\\${newTheme}' received. Expected 'light' or 'dark'.\\`)\n		}\n\n		localStorage.setItem('theme', newTheme)\n\n		const root = document.documentElement\n\n		// if current dark theme and new theme is dark, return\n		if (newTheme === 'dark' && root.classList.contains('dark')) {\n			return\n		} else if (newTheme === 'light' && !root.classList.contains('dark')) {\n			return\n		}\n\n		root.classList.toggle('dark')\n	}\n\n	// Initial Setup\n	setTheme(getUserPref())\n\n	// View Transitions hook to restore theme\n	document.addEventListener('astro:after-swap', () => setTheme(getUserPref()))\n\n	// Listen for theme-change custom event\n	document.addEventListener('theme-change', (e) => {\n		setTheme(e.detail.theme)\n	})\n\n	// Listen for prefers-color-scheme change\n	lightModePref.addEventListener('change', (e) => setTheme(e.matches ? 'light' : 'dark'))\n<\/script>"])));
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/ThemeProvider.astro", void 0);

const $$Astro$1 = createAstro("https://www.tiffanyc.cc");
const $$ViewTransitions = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro = createAstro("https://www.tiffanyc.cc");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    meta: { articleDate, description = siteConfig.description, ogImage, title }
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(siteConfig.lang, "lang")} class=""> <head><link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css" rel="stylesheet">${renderComponent($$result, "BaseHead", $$BaseHead, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title })}${renderComponent($$result, "ViewTransitions", $$ViewTransitions, {})}${renderHead()}</head> <body class="flex justify-center bg-background">  ${renderComponent($$result, "ThemeProvider", $$ThemeProvider, {})} <main class="flex min-h-screen w-screen max-w-[60rem] flex-col items-center px-6 pb-10 pt-7 font-satoshi text-[0.92rem] leading-relaxed sm:px-10 lg:px-10"> ${renderComponent($$result, "Header", $$Header, { "activePage": title })} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/layouts/BaseLayout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export { $$BaseLayout as $, cn as c };
