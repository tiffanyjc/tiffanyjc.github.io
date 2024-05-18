import { a as createAstro, b as createComponent, d as renderTemplate, e as renderComponent, m as maybeRenderHead, g as renderSlot } from './astro/server_B7JW7ZW-.mjs';
import 'kleur/colors';
import { c as cn, $ as $$BaseLayout } from './tailwind_Bm902UoA.mjs';
import { $ as $$Section, a as $$ProjectCard } from './ProjectCard_uB-ZsX_z.mjs';
import { $ as $$Image } from './_astro_assets_DAPVDJ8a.mjs';
import './_astro_content_B8Bdc9UA.mjs';
import { $ as $$Button } from './Button_C6oTB7yp.mjs';

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
  const images = /* #__PURE__ */ Object.assign({"/src/assets/about-astro.png": () => import('./about-astro_BjBLS-Rz.mjs'),"/src/assets/anduril.jpeg": () => import('./anduril_BJNCWlqL.mjs'),"/src/assets/anduril.png": () => import('./anduril_Bg-CUwQT.mjs'),"/src/assets/arIllustration.gif": () => import('./arIllustration_CYM6GgS_.mjs'),"/src/assets/artProj_citibank0.png": () => import('./artProj_citibank0_GNRt51Wb.mjs'),"/src/assets/artProj_citibank1.png": () => import('./artProj_citibank1_DTr21ezp.mjs'),"/src/assets/artProj_tead.png": () => import('./artProj_tead_DYQdNxVt.mjs'),"/src/assets/brown.gif": () => import('./brown_B_mYg5lM.mjs'),"/src/assets/coming-soon.png": () => import('./coming-soon_Dc1uBqy2.mjs'),"/src/assets/figmaPlugin.png": () => import('./figmaPlugin_Cl2RJmUR.mjs'),"/src/assets/gallery_beach.png": () => import('./gallery_beach_D_JCLFQ7.mjs'),"/src/assets/gallery_cat.png": () => import('./gallery_cat_9_b48dzw.mjs'),"/src/assets/gallery_fishstick.png": () => import('./gallery_fishstick_DvWqYWt8.mjs'),"/src/assets/gallery_ldscp_dragonDance.png": () => import('./gallery_ldscp_dragonDance_BFbsy9VB.mjs'),"/src/assets/gallery_ldscp_sailors.png": () => import('./gallery_ldscp_sailors_n044nJPL.mjs'),"/src/assets/gallery_luckCharm.png": () => import('./gallery_luckCharm_DHY4emVN.mjs'),"/src/assets/gallery_meowloween.png": () => import('./gallery_meowloween_Dj1W7TOP.mjs'),"/src/assets/gallery_prt_Barcelona.png": () => import('./gallery_prt_Barcelona_BW8efyxv.mjs'),"/src/assets/gallery_prt_hachiko.png": () => import('./gallery_prt_hachiko_DW-yHns0.mjs'),"/src/assets/gallery_prt_park.png": () => import('./gallery_prt_park_Cq67hjpW.mjs'),"/src/assets/gallery_prt_tiger.png": () => import('./gallery_prt_tiger_Cv4N3Ozc.mjs'),"/src/assets/gallery_prt_warrior.png": () => import('./gallery_prt_warrior_CPZrDaJd.mjs'),"/src/assets/headshot.jpeg": () => import('./headshot_BzAtslT5.mjs'),"/src/assets/luckCharm.jpeg": () => import('./luckCharm_D6K9mF3_.mjs'),"/src/assets/meowloween.jpeg": () => import('./meowloween_m5Eq6xVu.mjs'),"/src/assets/microsoft.png": () => import('./microsoft_CVyAYp51.mjs'),"/src/assets/sukaFarm.png": () => import('./sukaFarm_BzGTMNYb.mjs'),"/src/assets/wipBook.png": () => import('./wipBook_CWYVS6B1.mjs'),"/src/assets/wipProject.png": () => import('./wipProject_B80W8e8j.mjs')});
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

export { $$Index as default, $$file as file, $$url as url };
