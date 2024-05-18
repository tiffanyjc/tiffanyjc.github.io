import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead } from './astro/server_B7JW7ZW-.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from './tailwind_Bm902UoA.mjs';
import { $ as $$Button } from './Button_C6oTB7yp.mjs';

const $$Astro = createAstro("https://www.tiffanyc.cc");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const meta = {
    description: "Not found",
    title: "404"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="https://github.com/srleom/astro-theme-resume.git" class="flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">Get free template</p> </a> <div class="px-4 py-10 text-center sm:px-6 lg:px-8"> <h1 class="block text-7xl font-bold sm:text-9xl">404</h1> <p class="mt-3 text-muted-foreground">Oops, something went wrong.</p> <p class="">Sorry, we couldn't find your page.</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Back to home", "href": "/", "style": "button", "class": "mt-5" }, { "icon-after": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" class="-scale-x-100"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} </div> ` })}`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/404.astro", void 0);

const $$file = "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/404.astro";
const $$url = "/404";

export { $$404 as default, $$file as file, $$url as url };
