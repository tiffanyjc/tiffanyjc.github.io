import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute, h as renderSlot, f as renderComponent } from '../astro_C3K8O79i.mjs';
import 'kleur/colors';
import { c as cn, $ as $$BaseLayout, a as $$Button } from './404_6CyPzAJx.mjs';
import { $ as $$Image } from './generic_DvBZ_loD.mjs';
import 'clsx';

const $$Astro$8 = createAstro("https://www.tiffanyc.cc");
const $$Section = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Section;
  const { class: className, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(cn(className, "flex flex-col gap-y-5 md:flex-row md:gap-y-0"), "class")}> <div class="text-xl font-semibold md:w-1/3"> <h2>${title}</h2> </div> <div class="flex flex-col gap-y-3 md:w-2/3"> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Section.astro", void 0);

const $$Astro$7 = createAstro("https://www.tiffanyc.cc");
const $$BookCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$BookCard;
  const {
    href,
    date,
    heading,
    subheading,
    imagePath,
    altText
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/about-astro.png": () => import('../about-astro_IrrkYZDO.mjs'),"/src/assets/anduril.jpeg": () => import('../anduril_BAOd9cXg.mjs'),"/src/assets/anduril.png": () => import('../anduril_Bxt5OBdd.mjs'),"/src/assets/arIllustration.gif": () => import('../arIllustration_CPmbNTtz.mjs'),"/src/assets/artProj_citibank0.png": () => import('../artProj_citibank0_A2s7gqoL.mjs'),"/src/assets/artProj_citibank1.png": () => import('../artProj_citibank1_DoUtjk7h.mjs'),"/src/assets/artProj_tead.png": () => import('../artProj_tead_Dw_ph4pX.mjs'),"/src/assets/brown.gif": () => import('../brown_C54yDhVN.mjs'),"/src/assets/coming-soon.png": () => import('../coming-soon_CaNJNr8Z.mjs'),"/src/assets/figmaPlugin.png": () => import('../figmaPlugin_BBLWovii.mjs'),"/src/assets/gallery_beach.png": () => Promise.resolve().then(() => gallery_beach),"/src/assets/gallery_cat.png": () => Promise.resolve().then(() => gallery_cat),"/src/assets/gallery_fishstick.png": () => Promise.resolve().then(() => gallery_fishstick),"/src/assets/gallery_ldscp_dragonDance.png": () => Promise.resolve().then(() => gallery_ldscp_dragonDance),"/src/assets/gallery_ldscp_sailors.png": () => Promise.resolve().then(() => gallery_ldscp_sailors),"/src/assets/gallery_luckCharm.png": () => Promise.resolve().then(() => gallery_luckCharm),"/src/assets/gallery_meowloween.png": () => Promise.resolve().then(() => gallery_meowloween),"/src/assets/gallery_prt_Barcelona.png": () => Promise.resolve().then(() => gallery_prt_Barcelona),"/src/assets/gallery_prt_hachiko.png": () => Promise.resolve().then(() => gallery_prt_hachiko),"/src/assets/gallery_prt_park.png": () => Promise.resolve().then(() => gallery_prt_park),"/src/assets/gallery_prt_tiger.png": () => Promise.resolve().then(() => gallery_prt_tiger),"/src/assets/gallery_prt_warrior.png": () => Promise.resolve().then(() => gallery_prt_warrior),"/src/assets/headshot.jpeg": () => import('../headshot_CUXisY_Y.mjs'),"/src/assets/luckCharm.jpeg": () => import('../luckCharm_rllDkJID.mjs'),"/src/assets/meowloween.jpeg": () => import('../meowloween_B-J3_o-Q.mjs'),"/src/assets/microsoft.png": () => import('../microsoft_MC8jxe0z.mjs'),"/src/assets/sukaFarm.png": () => import('../sukaFarm_BhRXOjPM.mjs'),"/src/assets/wipBook.png": () => import('../wipBook__N8YNsEc.mjs'),"/src/assets/wipProject.png": () => import('../wipProject_DiqBqHxx.mjs')});
  if (imagePath) {
    if (!images[imagePath])
      throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  }
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="w-48 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl hover:bg-gray-100"> ${renderComponent($$result, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": "object-cover max-w-full md:h-120 md:max-w-full md:rounded-t-lg rounded-t-lg", "loading": "eager" })} <div class="flex flex-col justify-between p-4 leading-normal"> <h1 class="text-lg font-medium">${heading}</h1> <h2>${date}</h2> <h2 class="text-muted-foreground">${subheading}</h2> </div> </a>`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/BookCard.astro", void 0);

const img01 = new Proxy({"src":"/_astro/gallery_ldscp_sailors.Bwt09jEx.png","width":2000,"height":1600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_ldscp_sailors.png";
							}
							
							return target[name];
						}
					});

const gallery_ldscp_sailors = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img01
}, Symbol.toStringTag, { value: 'Module' }));

const img03 = new Proxy({"src":"/_astro/gallery_ldscp_dragonDance.DmId3Hjx.png","width":4000,"height":1600,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_ldscp_dragonDance.png";
							}
							
							return target[name];
						}
					});

const gallery_ldscp_dragonDance = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img03
}, Symbol.toStringTag, { value: 'Module' }));

const img02 = new Proxy({"src":"/_astro/gallery_prt_Barcelona.COl69cWt.png","width":2480,"height":3508,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_Barcelona.png";
							}
							
							return target[name];
						}
					});

const gallery_prt_Barcelona = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img02
}, Symbol.toStringTag, { value: 'Module' }));

const img04 = new Proxy({"src":"/_astro/gallery_prt_hachiko.sbt6m8G2.png","width":2480,"height":3508,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_hachiko.png";
							}
							
							return target[name];
						}
					});

const gallery_prt_hachiko = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img04
}, Symbol.toStringTag, { value: 'Module' }));

const img05 = new Proxy({"src":"/_astro/gallery_luckCharm.DAoxC71P.png","width":2388,"height":1536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_luckCharm.png";
							}
							
							return target[name];
						}
					});

const gallery_luckCharm = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img05
}, Symbol.toStringTag, { value: 'Module' }));

const img06 = new Proxy({"src":"/_astro/gallery_cat.McnhSZS8.png","width":1328,"height":1694,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_cat.png";
							}
							
							return target[name];
						}
					});

const gallery_cat = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img06
}, Symbol.toStringTag, { value: 'Module' }));

const img07 = new Proxy({"src":"/_astro/gallery_meowloween.BpohwFz_.png","width":2386,"height":1536,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_meowloween.png";
							}
							
							return target[name];
						}
					});

const gallery_meowloween = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img07
}, Symbol.toStringTag, { value: 'Module' }));

const img08 = new Proxy({"src":"/_astro/gallery_beach.Cowk6t8t.png","width":2048,"height":2048,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_beach.png";
							}
							
							return target[name];
						}
					});

const gallery_beach = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img08
}, Symbol.toStringTag, { value: 'Module' }));

const img09 = new Proxy({"src":"/_astro/gallery_prt_tiger.CRpqrkmP.png","width":2480,"height":3508,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_tiger.png";
							}
							
							return target[name];
						}
					});

const gallery_prt_tiger = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img09
}, Symbol.toStringTag, { value: 'Module' }));

const img10 = new Proxy({"src":"/_astro/gallery_prt_park.B0XWcIww.png","width":2865,"height":3508,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_park.png";
							}
							
							return target[name];
						}
					});

const gallery_prt_park = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img10
}, Symbol.toStringTag, { value: 'Module' }));

const img11 = new Proxy({"src":"/_astro/gallery_prt_warrior.g1YVuouH.png","width":1600,"height":2000,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_warrior.png";
							}
							
							return target[name];
						}
					});

const gallery_prt_warrior = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img11
}, Symbol.toStringTag, { value: 'Module' }));

const img12 = new Proxy({"src":"/_astro/gallery_fishstick.D0YybhN5.png","width":3508,"height":2480,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_fishstick.png";
							}
							
							return target[name];
						}
					});

const gallery_fishstick = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: img12
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://www.tiffanyc.cc");
const $$Gallery = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Gallery;
  return renderTemplate`<!-- Gallery code -->${maybeRenderHead()}<div class="grid grid-cols-2 md:grid-cols-3 gap-4"> <div class="grid gap-4"> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img01.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img02.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img03.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img10.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> </div> <div class="grid gap-4"> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img04.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img05.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img06.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img12.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> </div> <div class="grid gap-4"> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img07.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img08.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img09.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> <div> <img class="gallery h-auto max-w-full rounded-lg transition ease-in-out hover:scale-105 duration-200"${addAttribute(img11.src, "src")} alt="" data-modal-target="art-gallery-modal" data-modal-toggle="art-gallery-modal"> </div> </div> </div> <!-- Main modal --> <div id="art-gallery-modal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"> <div class="relative p-4 w-full max-w-2xl max-h-full"> <!-- Modal content --> <div class="relative bg-white rounded-lg shadow dark:bg-gray-700"> <!-- Modal header --> <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"> <h3 class="text-xl font-semibold text-gray-900 dark:text-white"> <!-- Static modal --> </h3> <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="art-gallery-modal"> <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"></path> </svg> <span class="sr-only">Close modal</span> </button> </div> <!-- Modal body --> <div class="p-4 md:p-5 space-y-4"> <img class="modal w-full" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"> </div> </div> </div> </div> `;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Gallery.astro", void 0);

const $$Astro$5 = createAstro("https://www.tiffanyc.cc");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
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
  const images = /* #__PURE__ */ Object.assign({"/src/assets/about-astro.png": () => import('../about-astro_IrrkYZDO.mjs'),"/src/assets/anduril.jpeg": () => import('../anduril_BAOd9cXg.mjs'),"/src/assets/anduril.png": () => import('../anduril_Bxt5OBdd.mjs'),"/src/assets/arIllustration.gif": () => import('../arIllustration_CPmbNTtz.mjs'),"/src/assets/artProj_citibank0.png": () => import('../artProj_citibank0_A2s7gqoL.mjs'),"/src/assets/artProj_citibank1.png": () => import('../artProj_citibank1_DoUtjk7h.mjs'),"/src/assets/artProj_tead.png": () => import('../artProj_tead_Dw_ph4pX.mjs'),"/src/assets/brown.gif": () => import('../brown_C54yDhVN.mjs'),"/src/assets/coming-soon.png": () => import('../coming-soon_CaNJNr8Z.mjs'),"/src/assets/figmaPlugin.png": () => import('../figmaPlugin_BBLWovii.mjs'),"/src/assets/gallery_beach.png": () => Promise.resolve().then(() => gallery_beach),"/src/assets/gallery_cat.png": () => Promise.resolve().then(() => gallery_cat),"/src/assets/gallery_fishstick.png": () => Promise.resolve().then(() => gallery_fishstick),"/src/assets/gallery_ldscp_dragonDance.png": () => Promise.resolve().then(() => gallery_ldscp_dragonDance),"/src/assets/gallery_ldscp_sailors.png": () => Promise.resolve().then(() => gallery_ldscp_sailors),"/src/assets/gallery_luckCharm.png": () => Promise.resolve().then(() => gallery_luckCharm),"/src/assets/gallery_meowloween.png": () => Promise.resolve().then(() => gallery_meowloween),"/src/assets/gallery_prt_Barcelona.png": () => Promise.resolve().then(() => gallery_prt_Barcelona),"/src/assets/gallery_prt_hachiko.png": () => Promise.resolve().then(() => gallery_prt_hachiko),"/src/assets/gallery_prt_park.png": () => Promise.resolve().then(() => gallery_prt_park),"/src/assets/gallery_prt_tiger.png": () => Promise.resolve().then(() => gallery_prt_tiger),"/src/assets/gallery_prt_warrior.png": () => Promise.resolve().then(() => gallery_prt_warrior),"/src/assets/headshot.jpeg": () => import('../headshot_CUXisY_Y.mjs'),"/src/assets/luckCharm.jpeg": () => import('../luckCharm_rllDkJID.mjs'),"/src/assets/meowloween.jpeg": () => import('../meowloween_B-J3_o-Q.mjs'),"/src/assets/microsoft.png": () => import('../microsoft_MC8jxe0z.mjs'),"/src/assets/sukaFarm.png": () => import('../sukaFarm_BhRXOjPM.mjs'),"/src/assets/wipBook.png": () => import('../wipBook__N8YNsEc.mjs'),"/src/assets/wipProject.png": () => import('../wipProject_DiqBqHxx.mjs')});
  if (!images[imagePath])
    throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-col gap-y-3 rounded-2xl border border-border bg-primary-foreground ",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": "h-48 w-full rounded-2xl rounded-bl-none rounded-br-none object-cover hover:object-scale-down", "loading": "eager" })} ${maybeRenderHead()}<div class="flex flex-col gap-y-0.5 px-5 py-4"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> </div> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/ProjectCard.astro", void 0);

const $$Astro$4 = createAstro("https://www.tiffanyc.cc");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index$1;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Art" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col gap-y-10"> <!-- // ABOUT SECTION --> ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": ($$result3) => renderTemplate` <p class="text-muted-foreground">
Hello! I'm a Taiwanese American artist living in Seattle. I'm primarily a digital artist, although my practice extends to other mediums including block printing, clay, and traditional painting. My creative inspiration comes from the great outdoors as well as my Taiwanese roots, and I particularly love drawing scenes that play with light and shadow, nature, animals, female heroines going on an adventure.
</p> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Contact" }, { "default": ($$result3) => renderTemplate` <p class="text-muted-foreground"> <b>General inquiries + commercial projects:</b> <u>totiffanychen@gmail.com</u> </p> <p class="text-muted-foreground"> <b>Publishing inquiries:</b> <a href="https://www.andreabrownlit.com/Team/Jemiscoe-Chambers-Black"><u>Jemiscoe Chambers-Black</u></a> at <a href="https://www.andreabrownlit.com/"><u>Andrea Brown Literary Agency</u></a>.
</p> <p class="text-muted-foreground"> <b>Social:</b> <a class="text-gray-500 tracking-wide font-normal underline" href="https://www.instagram.com/tiffanychenart">Instagram</a> |
<a class="text-gray-500 tracking-wide font-normal underline" href="https://www.etsy.com/shop/tiffanychenart">Etsy</a> |
<a class="text-gray-500 tracking-wide font-normal underline" href="https://twitter.com/tiffanychenart">Twitter</a> <br>&nbsp;
</p> ` })} <hr> <h2 class="text-xl font-semibold md:w-1/3">Books</h2> <div class="flex flex-row justify-between gap-4 flex-wrap"> ${renderComponent($$result2, "BookCard", $$BookCard, { "heading": "The Moon Lantern", "subheading": "Ha Dinh, Tiffany Chen", "date": "Spring '25", "imagePath": "/src/assets/wipBook.png", "altText": "Lorem, ipsum dolor sit" })} ${renderComponent($$result2, "BookCard", $$BookCard, { "heading": "Suka's Farm", "subheading": "Ginger Park, Frances Park, Tiffany Chen", "date": "Spring '25", "imagePath": "/src/assets/sukaFarm.png", "altText": "Lorem, ipsum dolor sit", "href": "https://www.barnesandnoble.com/w/sukas-farm-ginger-park/1144764046" })} ${renderComponent($$result2, "BookCard", $$BookCard, { "heading": "My Luck Charm", "subheading": "Sheri Mabry, Tiffany Chen \xA0", "date": "Spring '24", "imagePath": "/src/assets/luckCharm.jpeg", "altText": "Lorem, ipsum dolor sit", "href": "https://www.barnesandnoble.com/w/my-luck-charm-sheri-mabry/1143852756" })} ${renderComponent($$result2, "BookCard", $$BookCard, { "heading": "Meowl-o-ween", "subheading": "Diane Muldrow, Tiffany Chen", "date": "Fall '23", "imagePath": "/src/assets/meowloween.jpeg", "altText": "Lorem, ipsum dolor sit", "href": "https://www.barnesandnoble.com/w/meowloween-diane-muldrow/1142804269" })} </div> <hr> <h2 class="text-xl font-semibold md:w-1/3">Commercial projects</h2> <div class="flex flex-row justify-between gap-4 flex-wrap"> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "href": "https://www.linkedin.com/posts/tiffanyjchen_i-usually-keep-my-illustration-stuff-separate-activity-6891515073391661056-CTS2", "heading": "National Parks Service", "subheading": "Coming soon!", "imagePath": "/src/assets/wipProject.png", "altText": "Example", "class": "w-96 md:w-48 sm:w-1/2" })} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "href": "https://www.linkedin.com/posts/tiffanyjchen_i-usually-keep-my-illustration-stuff-separate-activity-6891515073391661056-CTS2", "heading": "Citibank", "subheading": "Created an augmented reality photobooth experience that was used by Citibank clients in NYC and Los Angeles during Lunar New Year.", "imagePath": "/src/assets/artProj_citibank1.png", "altText": "Example", "class": "w-96 md:w-48 sm:w-1/2" })} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "href": "https://www.linkedin.com/posts/tiffanyjchen_i-usually-keep-my-illustration-stuff-separate-activity-6891515073391661056-CTS2", "heading": "Citibank", "subheading": "Designed a 24K gold rabbit figurine that joyfully embraces the good tidings the Year of the Rabbit for valued customers.", "imagePath": "/src/assets/artProj_citibank0.png", "altText": "Example", "class": "w-96 md:w-48 sm:w-1/2" })} ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "href": "https://www.linkedin.com/posts/tiffanyjchen_i-usually-keep-my-illustration-stuff-separate-activity-6891515073391661056-CTS2", "heading": "The Emotional Abuse Discussion", "subheading": "Illustrated a 5x8' banner for the nonprofit Team The Emotional Abuse Discussion's awareness event in downtown Redmond.", "imagePath": "/src/assets/artProj_tead.png", "altText": "Example", "class": "w-96 md:w-48 sm:w-1/2" })} </div> <hr> <!-- // GALLERY SECTION  --> <div class="mt-5 flex w-full flex-col gap-y-10"> <h2 class="text-xl font-semibold md:w-1/3">Gallery</h2> ${renderComponent($$result2, "Gallery", $$Gallery, {})} <p class="text-center text-l font-semibold bg-gray-100 rounded-lg"> <br>
Find more of my work at @tiffanychenart:<br> <a class="text-gray-500 tracking-wide font-normal underline" href="https://www.instagram.com/tiffanychenart">Instagram</a> |
<a class="text-gray-500 tracking-wide font-normal underline" href="https://www.etsy.com/shop/tiffanychenart">Etsy</a> |
<a class="text-gray-500 tracking-wide font-normal underline" href="https://twitter.com/tiffanychenart">Twitter</a> <br>&nbsp;
</p> </div> </div> ` })}`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/art/index.astro", void 0);

const $$file$1 = "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/art/index.astro";
const $$url$1 = "/art";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index$1,
	file: $$file$1,
	url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://www.tiffanyc.cc");
const $$Card = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Card;
  const {
    as: Tag = "div",
    class: className,
    href,
    heading,
    subheading,
    date,
    imagePath,
    altText,
    imageClass
  } = Astro2.props;
  const images = /* #__PURE__ */ Object.assign({"/src/assets/about-astro.png": () => import('../about-astro_IrrkYZDO.mjs'),"/src/assets/anduril.jpeg": () => import('../anduril_BAOd9cXg.mjs'),"/src/assets/anduril.png": () => import('../anduril_Bxt5OBdd.mjs'),"/src/assets/arIllustration.gif": () => import('../arIllustration_CPmbNTtz.mjs'),"/src/assets/artProj_citibank0.png": () => import('../artProj_citibank0_A2s7gqoL.mjs'),"/src/assets/artProj_citibank1.png": () => import('../artProj_citibank1_DoUtjk7h.mjs'),"/src/assets/artProj_tead.png": () => import('../artProj_tead_Dw_ph4pX.mjs'),"/src/assets/brown.gif": () => import('../brown_C54yDhVN.mjs'),"/src/assets/coming-soon.png": () => import('../coming-soon_CaNJNr8Z.mjs'),"/src/assets/figmaPlugin.png": () => import('../figmaPlugin_BBLWovii.mjs'),"/src/assets/gallery_beach.png": () => Promise.resolve().then(() => gallery_beach),"/src/assets/gallery_cat.png": () => Promise.resolve().then(() => gallery_cat),"/src/assets/gallery_fishstick.png": () => Promise.resolve().then(() => gallery_fishstick),"/src/assets/gallery_ldscp_dragonDance.png": () => Promise.resolve().then(() => gallery_ldscp_dragonDance),"/src/assets/gallery_ldscp_sailors.png": () => Promise.resolve().then(() => gallery_ldscp_sailors),"/src/assets/gallery_luckCharm.png": () => Promise.resolve().then(() => gallery_luckCharm),"/src/assets/gallery_meowloween.png": () => Promise.resolve().then(() => gallery_meowloween),"/src/assets/gallery_prt_Barcelona.png": () => Promise.resolve().then(() => gallery_prt_Barcelona),"/src/assets/gallery_prt_hachiko.png": () => Promise.resolve().then(() => gallery_prt_hachiko),"/src/assets/gallery_prt_park.png": () => Promise.resolve().then(() => gallery_prt_park),"/src/assets/gallery_prt_tiger.png": () => Promise.resolve().then(() => gallery_prt_tiger),"/src/assets/gallery_prt_warrior.png": () => Promise.resolve().then(() => gallery_prt_warrior),"/src/assets/headshot.jpeg": () => import('../headshot_CUXisY_Y.mjs'),"/src/assets/luckCharm.jpeg": () => import('../luckCharm_rllDkJID.mjs'),"/src/assets/meowloween.jpeg": () => import('../meowloween_B-J3_o-Q.mjs'),"/src/assets/microsoft.png": () => import('../microsoft_MC8jxe0z.mjs'),"/src/assets/sukaFarm.png": () => import('../sukaFarm_BhRXOjPM.mjs'),"/src/assets/wipBook.png": () => import('../wipBook__N8YNsEc.mjs'),"/src/assets/wipProject.png": () => import('../wipProject_DiqBqHxx.mjs')});
  if (imagePath) {
    if (!images[imagePath])
      throw new Error(`"${imagePath}" does not exist in glob: "src/assets/*.{jpeg,jpg,png,gif}"`);
  }
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "relative rounded-2xl border border-border bg-primary-foreground px-5 py-3",
    href && "transition-all hover:border-foreground/25 hover:shadow-sm"
  ), "href": href }, { "default": ($$result2) => renderTemplate`${imagePath && renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": images[imagePath](), "alt": altText, "class": cn("mb-3 md:absolute md:mb-0", imageClass), "loading": "eager" })}`}${maybeRenderHead()}<div class="flex flex-col gap-y-1.5"> <div class="flex flex-col gap-y-0.5"> <h1 class="text-lg font-medium">${heading}</h1> <h2 class="text-muted-foreground">${subheading}</h2> <h2 class="text-muted-foreground">${date}</h2> </div> ${renderSlot($$result2, $$slots["default"])} </div> ` })}`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Card.astro", void 0);

const $$Astro$2 = createAstro("https://www.tiffanyc.cc");
const $$Label = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Label;
  const { class: className, as: Tag = "div", title, href, ...props } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "flex flex-row items-center justify-center gap-x-2",
    href && "hover:opacity-75 transition-all"
  ), "href": href, ...props }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon"])} ${maybeRenderHead()}<p>${title}</p> ` })}`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Label.astro", void 0);

const $$Astro$1 = createAstro("https://www.tiffanyc.cc");
const $$SkillLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$SkillLayout;
  const { title, skills } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-y-2 md:flex-row md:gap-x-5 md:gap-y-0"> <h3 class="w-1/5 font-medium">${title}</h3> <div class="flex w-4/5 flex-row flex-wrap gap-x-4 gap-y-2"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Button", $$Button, { "as": "button", "title": skill, "style": "pill" })}`)} </div> </div>`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/SkillLayout.astro", void 0);

const $$Astro = createAstro("https://www.tiffanyc.cc");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const speaking = ["Rewrite the Code", "IBM Accessibility", "Seattle Design Festival", "University of Maryland", "Seattle University", "Emily Carr University", "Brown University"];
  const illustrating = ["Citibank Lunar New Year 2023", "Wing Luke Museum", "National Parks Service", "The Emotional Abuse Discussion", "Columbia U: Trailblazer Heroes"];
  const hobbies = ["Drawing", "Climbing", "Baking shokupan", "Messing with my cat"];
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": { title: "Design" } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex w-full flex-col gap-y-10"> <hr> ${renderComponent($$result2, "Section", $$Section, {}, { "default": ($$result3) => renderTemplate` <h1 class="text-3xl font-bold">👋 I'm Tiffany</h1> <div class="flex flex-wrap justify gap-x-7 gap-y-3"> ${renderComponent($$result3, "Label", $$Label, { "title": "Seattle, WA" }, { "icon": ($$result4) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M12.003 11.73q.668 0 1.14-.475q.472-.475.472-1.143t-.475-1.14q-.476-.472-1.143-.472t-1.14.476q-.472.475-.472 1.143t.475 1.14q.476.472 1.143.472M12 19.677q2.82-2.454 4.458-4.991q1.638-2.538 1.638-4.39q0-2.744-1.737-4.53T12 3.981q-2.621 0-4.359 1.785t-1.737 4.53q0 1.852 1.638 4.39q1.639 2.537 4.458 4.99m0 1.343q-3.525-3.117-5.31-5.814q-1.786-2.697-1.786-4.909q0-3.173 2.066-5.234Q9.037 3 12 3t5.03 2.062q2.066 2.061 2.066 5.234q0 2.212-1.785 4.909q-1.786 2.697-5.311 5.814m0-10.904"></path></svg>` })} ${renderComponent($$result3, "Label", $$Label, { "title": "totiffanychen@gmail.com" }, { "icon": ($$result4) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-5 w-5"><path fill="currentColor" d="M4.615 20q-.69 0-1.152-.462Q3 19.075 3 18.385v-9.77q0-.69.463-1.152Q3.925 7 4.615 7H9V5.615q0-.69.463-1.152Q9.925 4 10.615 4h2.77q.69 0 1.153.463q.462.462.462 1.152V7h4.385q.69 0 1.152.463q.463.462.463 1.152v9.77q0 .69-.462 1.152q-.463.463-1.153.463zm0-1h14.77q.23 0 .423-.192q.192-.193.192-.423v-9.77q0-.23-.192-.423Q19.615 8 19.385 8H4.615q-.23 0-.423.192Q4 8.385 4 8.615v9.77q0 .23.192.423q.193.192.423.192M10 7h4V5.615q0-.23-.192-.423Q13.615 5 13.385 5h-2.77q-.23 0-.423.192q-.192.193-.192.423zM4 19V8z"></path></svg>` })} ${renderComponent($$result3, "Label", $$Label, { "title": "Linkedin", "as": "a", "href": "https://www.linkedin.com/in/tiffanyjchen/", "target": "_blank" }, { "icon": ($$result4) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" class="h-5 w-5 text-foreground/75"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg>` })} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "About" }, { "default": ($$result3) => renderTemplate` <p class="text-muted-foreground">
Hello!! I’m a designer by practice, illustrator by night, developer by education, and generally just a person hoping to affect positive social change through the things that I do.
</p> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Experience" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "heading": "Anduril Industries", "subheading": "Product Design Manager", "date": "April 2021 - Now", "imagePath": "/src/assets/anduril.png", "altText": "Lorem, ipsum dolor sit", "imageClass": "h-12 w-auto md:-left-16" }, { "default": ($$result4) => renderTemplate` <ul class="ml-4 list-disc text-muted-foreground"> <li>
Leading a team of 3 designers to uncover user needs and design for Anduril's Lattice software app, in partnership with PM and Engineering</li> <li>Developing and refining our in-house Matter Design System</li> <li>Advocating for team fun!!</li> </ul> ` })} ${renderComponent($$result3, "Card", $$Card, { "heading": "Microsoft", "subheading": "UX Designer II", "date": "Sep 2018 - March 2021", "imagePath": "/src/assets/microsoft.png", "altText": "Lorem, ipsum dolor sit", "imageClass": "h-10 w-auto md:-left-16" }, { "default": ($$result4) => renderTemplate` <ul class="ml-4 list-disc text-muted-foreground"> <li>
Designed multiple new assistive technologies for Windows, including <a href="https://support.microsoft.com/en-us/topic/get-started-with-voice-access-bd2aa2dc-46c2-486c-93ae-3d75f7d053a4"><u>Voice Access</u></a>, <a href="https://support.microsoft.com/en-us/windows/use-live-captions-to-better-understand-audio-b52da59c-14b8-4031-aeeb-f6a47e6055df"><u>Live Captions</u></a>, and <a href="https://support.microsoft.com/en-us/windows/how-to-use-focus-in-windows-11-cbcc9ddb-8164-43fa-8919-b9a2af072382"><u>Focus Assist</u></a></li> <li>Further developed out Microsoft's <a href="https://inclusive.microsoft.design/"><u>Inclusive Design methodology</u></a> - most notably, ghost write <a href="https://medium.com/microsoft-design/kill-your-personas-1c332d4908cc"><u>Kill Your Personas</u></a> which garnered over 13k readers</li> </ul> ` })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Education" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Card", $$Card, { "heading": "Brown", "subheading": "BSc. Computer Science + Economics", "imagePath": "/src/assets/brown.gif", "altText": "Lorem, ipsum dolor sit", "imageClass": "h-12 w-auto md:-left-16" })} ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Projects" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-col gap-y-3 sm:flex-row sm:gap-x-3 sm:gap-y-0"> ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.linkedin.com/posts/tiffanyjchen_i-usually-keep-my-illustration-stuff-separate-activity-6891515073391661056-CTS2", "heading": "AR Illustrations", "subheading": "Bringing some of my 2D illustrations to life with added dimensionality. I use Procreate to draw the initial illustration, and then export the layers into Swift playgrounds to adjust the rotation, tilt, and sizing of each layer.", "imagePath": "/src/assets/arIllustration.gif", "altText": "Example", "class": "w-full sm:w-1/2" })} ${renderComponent($$result3, "ProjectCard", $$ProjectCard, { "href": "https://www.figma.com/community/plugin/731310036968334777/a11y-focus-order", "heading": "Focus Orderer | Figma plugin", "subheading": "26k installs! Conceptualized, designed, and developed a Figma plugin to help designers / feature teams to annotate focus order of control elements for screen reader and keyboarding users.", "imagePath": "/src/assets/figmaPlugin.png", "altText": "Lorem, ipsum dolor sit", "class": "w-full sm:w-1/2" })} </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "title": "Other things" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Spoke at", "skills": speaking })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Illustrated for", "skills": illustrating })} ${renderComponent($$result3, "SkillLayout", $$SkillLayout, { "title": "Hobbies include", "skills": hobbies })} ` })} </div> ` })}`;
}, "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/index.astro", void 0);

const $$file = "/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index as a, index$1 as i };
