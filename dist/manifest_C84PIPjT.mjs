import 'cookie';
import 'kleur/colors';
import './chunks/astro/server_B7JW7ZW-.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/_astro/ec.dy9ns.js","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.dy9ns.js","pattern":"^\\/_astro\\/ec\\.dy9ns\\.js$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.dy9ns.js","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/scripts.ts","pathname":"/_astro/ec.dy9ns.js","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/_astro/ec.v6sg1.css","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.v6sg1.css","pattern":"^\\/_astro\\/ec\\.v6sg1\\.css$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.v6sg1.css","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/styles.ts","pathname":"/_astro/ec.v6sg1.css","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/art/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/art","isIndex":true,"type":"page","pattern":"^\\/art\\/?$","segments":[[{"content":"art","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/art/index.astro","pathname":"/art","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.tiffanyc.cc","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/art/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Button.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/SkillLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Card.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Label.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/ProjectCard.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/art/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Section.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/scripts@_@ts":"pages/_astro/ec.dy9ns.js.astro.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/styles@_@ts":"pages/_astro/ec.v6sg1.css.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/art/index@_@astro":"pages/art.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_C84PIPjT.mjs","/node_modules/astro-expressive-code/routes/scripts.ts":"chunks/scripts_BGlXRuA5.mjs","/node_modules/astro-expressive-code/routes/styles.ts":"chunks/styles_BTWgnlvY.mjs","/src/pages/404.astro":"chunks/404_BGtaWHJI.mjs","/src/pages/art/index.astro":"chunks/index_7vw0SJPn.mjs","/src/pages/rss.xml.js":"chunks/rss.xml_tldlVdNS.mjs","/src/pages/index.astro":"chunks/index_Cw4t-C90.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/cover-image/index.md?astroContentCollectionEntry=true":"chunks/index_RTkzrpHi.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/draft-post.md?astroContentCollectionEntry=true":"chunks/draft-post_FP5ys4Sj.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/long-title.md?astroContentCollectionEntry=true":"chunks/long-title_CU_elowJ.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/markdown-elements/index.md?astroContentCollectionEntry=true":"chunks/index_Cai5gG83.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/missing-content.md?astroContentCollectionEntry=true":"chunks/missing-content_DXC6Z27K.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/social-image.md?astroContentCollectionEntry=true":"chunks/social-image_Dm2hTpn4.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/unique-tags.md?astroContentCollectionEntry=true":"chunks/unique-tags_CJ1mQTpG.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/cover-image/index.md?astroPropagatedAssets":"chunks/index_1B3pwgqz.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/draft-post.md?astroPropagatedAssets":"chunks/draft-post_Cgkow2x3.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/long-title.md?astroPropagatedAssets":"chunks/long-title_jcdlvpa0.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/markdown-elements/index.md?astroPropagatedAssets":"chunks/index_SxLhVTOw.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/missing-content.md?astroPropagatedAssets":"chunks/missing-content_pMRURZRe.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/social-image.md?astroPropagatedAssets":"chunks/social-image_BcHAoawn.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/unique-tags.md?astroPropagatedAssets":"chunks/unique-tags_ax8_1AYA.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/about-astro.png":"chunks/about-astro_BjBLS-Rz.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/anduril.jpeg":"chunks/anduril_BJNCWlqL.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/anduril.png":"chunks/anduril_Bg-CUwQT.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_ldscp_sailors.png":"chunks/gallery_ldscp_sailors_n044nJPL.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_ldscp_dragonDance.png":"chunks/gallery_ldscp_dragonDance_BFbsy9VB.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_Barcelona.png":"chunks/gallery_prt_Barcelona_BW8efyxv.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_hachiko.png":"chunks/gallery_prt_hachiko_DW-yHns0.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_luckCharm.png":"chunks/gallery_luckCharm_DHY4emVN.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_cat.png":"chunks/gallery_cat_9_b48dzw.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_meowloween.png":"chunks/gallery_meowloween_Dj1W7TOP.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_beach.png":"chunks/gallery_beach_D_JCLFQ7.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_tiger.png":"chunks/gallery_prt_tiger_Cv4N3Ozc.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_park.png":"chunks/gallery_prt_park_Cq67hjpW.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_prt_warrior.png":"chunks/gallery_prt_warrior_CPZrDaJd.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/gallery_fishstick.png":"chunks/gallery_fishstick_DvWqYWt8.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/arIllustration.gif":"chunks/arIllustration_CYM6GgS_.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/artProj_citibank0.png":"chunks/artProj_citibank0_GNRt51Wb.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/artProj_citibank1.png":"chunks/artProj_citibank1_DTr21ezp.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/artProj_tead.png":"chunks/artProj_tead_DYQdNxVt.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/brown.gif":"chunks/brown_B_mYg5lM.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/coming-soon.png":"chunks/coming-soon_Dc1uBqy2.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/figmaPlugin.png":"chunks/figmaPlugin_Cl2RJmUR.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/headshot.jpeg":"chunks/headshot_BzAtslT5.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/luckCharm.jpeg":"chunks/luckCharm_D6K9mF3_.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/meowloween.jpeg":"chunks/meowloween_m5Eq6xVu.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/microsoft.png":"chunks/microsoft_CVyAYp51.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/sukaFarm.png":"chunks/sukaFarm_BzGTMNYb.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/wipBook.png":"chunks/wipBook_CWYVS6B1.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/wipProject.png":"chunks/wipProject_B80W8e8j.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/cover-image/index.md":"chunks/index_BSx7Jbb4.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/draft-post.md":"chunks/draft-post_CP3YIcWh.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/long-title.md":"chunks/long-title_BV-UpmXd.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/markdown-elements/index.md":"chunks/index_CyIa8cX1.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/missing-content.md":"chunks/missing-content_CEzFlfJG.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/social-image.md":"chunks/social-image_Bs1q-OgD.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/unique-tags.md":"chunks/unique-tags_CR9lLckK.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BpfIFTjc.js","/astro/hoisted.js?q=1":"_astro/hoisted.B43FOgZw.js","astro:scripts/page.js":"_astro/page.BaUUwzE3.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/page.BaUUwzE3.js","/file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/_astro/ec.dy9ns.js","/file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/_astro/ec.v6sg1.css","/file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/404.html","/file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/art/index.html","/file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/rss.xml","/file:///Users/tiffanychen/Documents/Projects%20:%20Dev/tiffanyjc.github.io/dist/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
