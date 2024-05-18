import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_C3K8O79i.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
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

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BaUUwzE3.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.dy9ns.js","pattern":"^\\/_astro\\/ec\\.dy9ns\\.js$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.dy9ns.js","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/scripts.ts","pathname":"/_astro/ec.dy9ns.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BaUUwzE3.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.v6sg1.css","pattern":"^\\/_astro\\/ec\\.v6sg1\\.css$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.v6sg1.css","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/styles.ts","pathname":"/_astro/ec.v6sg1.css","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BaUUwzE3.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"../../../../../usr/local/lib/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BpfIFTjc.js"},{"type":"external","value":"/_astro/page.BaUUwzE3.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.DPUlaqpv.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B43FOgZw.js"},{"type":"external","value":"/_astro/page.BaUUwzE3.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.DPUlaqpv.css"}],"routeData":{"route":"/art","isIndex":true,"type":"page","pattern":"^\\/art\\/?$","segments":[[{"content":"art","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/art/index.astro","pathname":"/art","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.BaUUwzE3.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BpfIFTjc.js"},{"type":"external","value":"/_astro/page.BaUUwzE3.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.DPUlaqpv.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.tiffanyc.cc","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/art/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Button.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/SkillLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Card.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Label.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/ProjectCard.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/art/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/components/Section.astro",{"propagation":"in-tree","containsHead":false}],["/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_DWuxb-QA.mjs","/node_modules/astro-expressive-code/routes/scripts.ts":"chunks/pages/scripts_BGlXRuA5.mjs","/node_modules/astro-expressive-code/routes/styles.ts":"chunks/pages/styles_BTWgnlvY.mjs","\u0000@astrojs-manifest":"manifest_Bu9zVWig.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/scripts@_@ts":"chunks/scripts_CF4VFUXN.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/styles@_@ts":"chunks/styles_OiEViPi2.mjs","\u0000@astro-page:../../../../../usr/local/lib/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DIJhKmAd.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_BPf6F3qG.mjs","\u0000@astro-page:src/pages/art/index@_@astro":"chunks/index_CnTd0epN.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_llvxY8At.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_Cqa5k56w.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/cover-image/index.md?astroContentCollectionEntry=true":"chunks/index_BIlX5MAd.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/draft-post.md?astroContentCollectionEntry=true":"chunks/draft-post_FP5ys4Sj.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/long-title.md?astroContentCollectionEntry=true":"chunks/long-title_CU_elowJ.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/markdown-elements/index.md?astroContentCollectionEntry=true":"chunks/index_Cai5gG83.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/missing-content.md?astroContentCollectionEntry=true":"chunks/missing-content_DXC6Z27K.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/social-image.md?astroContentCollectionEntry=true":"chunks/social-image_Dm2hTpn4.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/unique-tags.md?astroContentCollectionEntry=true":"chunks/unique-tags_CJ1mQTpG.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/cover-image/index.md?astroPropagatedAssets":"chunks/index_C8c6SvnB.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/draft-post.md?astroPropagatedAssets":"chunks/draft-post_rfWRvOX7.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/long-title.md?astroPropagatedAssets":"chunks/long-title_B8kkv28m.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/markdown-elements/index.md?astroPropagatedAssets":"chunks/index_CzDwpHVI.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/missing-content.md?astroPropagatedAssets":"chunks/missing-content_DPlk3JH_.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/social-image.md?astroPropagatedAssets":"chunks/social-image_BL2ZvsK0.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/unique-tags.md?astroPropagatedAssets":"chunks/unique-tags_Dr8xywbh.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/about-astro.png":"chunks/about-astro_IrrkYZDO.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/anduril.jpeg":"chunks/anduril_BAOd9cXg.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/anduril.png":"chunks/anduril_Bxt5OBdd.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/arIllustration.gif":"chunks/arIllustration_CPmbNTtz.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/artProj_citibank0.png":"chunks/artProj_citibank0_A2s7gqoL.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/artProj_citibank1.png":"chunks/artProj_citibank1_DoUtjk7h.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/artProj_tead.png":"chunks/artProj_tead_Dw_ph4pX.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/brown.gif":"chunks/brown_C54yDhVN.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/coming-soon.png":"chunks/coming-soon_CaNJNr8Z.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/figmaPlugin.png":"chunks/figmaPlugin_BBLWovii.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/headshot.jpeg":"chunks/headshot_CUXisY_Y.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/luckCharm.jpeg":"chunks/luckCharm_rllDkJID.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/meowloween.jpeg":"chunks/meowloween_B-J3_o-Q.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/microsoft.png":"chunks/microsoft_MC8jxe0z.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/sukaFarm.png":"chunks/sukaFarm_BhRXOjPM.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/wipBook.png":"chunks/wipBook__N8YNsEc.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/assets/wipProject.png":"chunks/wipProject_DiqBqHxx.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/cover-image/index.md":"chunks/index_CGwAjvBU.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/draft-post.md":"chunks/draft-post_DQM4TueD.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/long-title.md":"chunks/long-title_DJpUzTap.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/markdown-elements/index.md":"chunks/index_BqHHDZYS.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/missing-content.md":"chunks/missing-content_D6iRQC2h.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/social-image.md":"chunks/social-image_BGmsHY1p.mjs","/Users/tiffanychen/Documents/Projects : Dev/tiffanyjc.github.io/src/content/post/unique-tags.md":"chunks/unique-tags_CL881UC8.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.BpfIFTjc.js","astro:scripts/page.js":"_astro/page.BaUUwzE3.js","/astro/hoisted.js?q=1":"_astro/hoisted.B43FOgZw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about-astro.0znnbM0P.png","/_astro/anduril.C8bPhDJb.jpeg","/_astro/anduril.C4ZVLoWy.png","/_astro/figmaPlugin.Cz7qYpdi.png","/_astro/brown.B7vXYBQ1.gif","/_astro/coming-soon.C8u-V5zm.png","/_astro/artProj_citibank0.DH4fmXxj.png","/_astro/microsoft.W1IkgQVB.png","/_astro/headshot.CBvZPe_i.jpeg","/_astro/luckCharm.CwA2RbtX.jpeg","/_astro/meowloween.DBg8lq5N.jpeg","/_astro/gallery_luckCharm.DAoxC71P.png","/_astro/gallery_cat.McnhSZS8.png","/_astro/gallery_meowloween.BpohwFz_.png","/_astro/sukaFarm.DQGATBDm.png","/_astro/wipBook.CSUU6FO_.png","/_astro/wipProject.BgiXGuI9.png","/_astro/gallery_beach.Cowk6t8t.png","/_astro/gallery_ldscp_sailors.Bwt09jEx.png","/_astro/gallery_prt_warrior.g1YVuouH.png","/_astro/artProj_citibank1.CduFYS6w.png","/_astro/artProj_tead.DPOnfxtN.png","/_astro/gallery_prt_hachiko.sbt6m8G2.png","/_astro/cover.C1CigIB6.png","/_astro/gallery_prt_tiger.CRpqrkmP.png","/_astro/gallery_prt_Barcelona.COl69cWt.png","/_astro/gallery_fishstick.D0YybhN5.png","/_astro/gallery_ldscp_dragonDance.DmId3Hjx.png","/_astro/logo.DMXfm6vf.png","/_astro/gallery_prt_park.B0XWcIww.png","/_astro/arIllustration.BSC2TCHc.gif","/_astro/index.DPUlaqpv.css","/CNAME","/social-card.png","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/site.webmanifest","/_astro/ViewTransitions.astro_astro_type_script_index_0_lang.tYqIwsOp.js","/_astro/hoisted.B43FOgZw.js","/_astro/hoisted.BpfIFTjc.js","/_astro/index.CZNXKH1e.js","/_astro/page.BaUUwzE3.js","/fonts/Satoshi-Variable.ttf","/fonts/Satoshi-VariableItalic.ttf","/images/image.png","/_astro/page.BaUUwzE3.js"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
