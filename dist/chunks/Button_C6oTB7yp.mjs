import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, g as renderSlot, m as maybeRenderHead } from './astro/server_B7JW7ZW-.mjs';
import 'kleur/colors';
import { c as cn } from './tailwind_Bm902UoA.mjs';
import './_astro_content_B8Bdc9UA.mjs';

const $$Astro = createAstro("https://www.tiffanyc.cc");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const { as: Tag = "a", class: className, title, href, style = "button" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "inline-flex items-center gap-x-1 rounded-lg bg-primary-foreground border border-border px-2 py-1 text-sm transition-all hover:bg-input",
    !href && "cursor-default",
    style === "pill" && "rounded-xl"
  ), "href": href, "data-astro-prefetch": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon-before"])} ${maybeRenderHead()}<p>${title}</p> ${renderSlot($$result2, $$slots["icon-after"])} ` })}`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Button.astro", void 0);

export { $$Button as $ };
