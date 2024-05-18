import { a as createAstro, b as createComponent, d as renderTemplate, m as maybeRenderHead, f as addAttribute, g as renderSlot, e as renderComponent } from './astro/server_B7JW7ZW-.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn } from './tailwind_Bm902UoA.mjs';
import './_astro_content_B8Bdc9UA.mjs';
import { $ as $$Image } from './_astro_assets_DAPVDJ8a.mjs';

const $$Astro$1 = createAstro("https://www.tiffanyc.cc");
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(className, "flex flex-col gap-y-5 md:flex-row md:gap-y-0"), "class")}> <div class="text-xl font-semibold md:w-1/3"> <h2>${title}</h2> </div> <div class="flex flex-col gap-y-3 md:w-2/3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Section.astro", void 0);

const $$Astro = createAstro("https://www.tiffanyc.cc");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const {
    as: Tag = "a",
    class: className,
    href,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/about-astro.png": () => import('./about-astro_BjBLS-Rz.mjs'),"/src/assets/anduril.jpeg": () => import('./anduril_BJNCWlqL.mjs'),"/src/assets/anduril.png": () => import('./anduril_Bg-CUwQT.mjs'),"/src/assets/arIllustration.gif": () => import('./arIllustration_CYM6GgS_.mjs'),"/src/assets/artProj_citibank0.png": () => import('./artProj_citibank0_GNRt51Wb.mjs'),"/src/assets/artProj_citibank1.png": () => import('./artProj_citibank1_DTr21ezp.mjs'),"/src/assets/artProj_tead.png": () => import('./artProj_tead_DYQdNxVt.mjs'),"/src/assets/brown.gif": () => import('./brown_B_mYg5lM.mjs'),"/src/assets/coming-soon.png": () => import('./coming-soon_Dc1uBqy2.mjs'),"/src/assets/figmaPlugin.png": () => import('./figmaPlugin_Cl2RJmUR.mjs'),"/src/assets/gallery_beach.png": () => import('./gallery_beach_D_JCLFQ7.mjs'),"/src/assets/gallery_cat.png": () => import('./gallery_cat_9_b48dzw.mjs'),"/src/assets/gallery_fishstick.png": () => import('./gallery_fishstick_DvWqYWt8.mjs'),"/src/assets/gallery_ldscp_dragonDance.png": () => import('./gallery_ldscp_dragonDance_BFbsy9VB.mjs'),"/src/assets/gallery_ldscp_sailors.png": () => import('./gallery_ldscp_sailors_n044nJPL.mjs'),"/src/assets/gallery_luckCharm.png": () => import('./gallery_luckCharm_DHY4emVN.mjs'),"/src/assets/gallery_meowloween.png": () => import('./gallery_meowloween_Dj1W7TOP.mjs'),"/src/assets/gallery_prt_Barcelona.png": () => import('./gallery_prt_Barcelona_BW8efyxv.mjs'),"/src/assets/gallery_prt_hachiko.png": () => import('./gallery_prt_hachiko_DW-yHns0.mjs'),"/src/assets/gallery_prt_park.png": () => import('./gallery_prt_park_Cq67hjpW.mjs'),"/src/assets/gallery_prt_tiger.png": () => import('./gallery_prt_tiger_Cv4N3Ozc.mjs'),"/src/assets/gallery_prt_warrior.png": () => import('./gallery_prt_warrior_CPZrDaJd.mjs'),"/src/assets/headshot.jpeg": () => import('./headshot_BzAtslT5.mjs'),"/src/assets/luckCharm.jpeg": () => import('./luckCharm_D6K9mF3_.mjs'),"/src/assets/meowloween.jpeg": () => import('./meowloween_m5Eq6xVu.mjs'),"/src/assets/microsoft.png": () => import('./microsoft_CVyAYp51.mjs'),"/src/assets/sukaFarm.png": () => import('./sukaFarm_BzGTMNYb.mjs'),"/src/assets/wipBook.png": () => import('./wipBook_CWYVS6B1.mjs'),"/src/assets/wipProject.png": () => import('./wipProject_B80W8e8j.mjs')});
  if (!images[imagePath])
    throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": "h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover hover:object-scale-down", "loading": "eager" })} ${maybeRenderHead()}<div class="flex flex-col gap-y-0.5 px-5 py-4"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/ProjectCard.astro", void 0);

export { $$Section as $, $$ProjectCard as a };
