const styles = [["/_astro/ec.v6sg1.css",".expressive-code{font-family:var(--ec-uiFontFml);font-size:var(--ec-uiFontSize);font-weight:var(--ec-uiFontWg);line-height:var(--ec-uiLineHt);text-size-adjust:none;-webkit-text-size-adjust:none}.expressive-code *:not(path){all:revert;box-sizing:border-box}.expressive-code pre{display:flex;margin:0;padding:0;border:var(--ec-brdWd) solid var(--ec-brdCol);border-radius:calc(var(--ec-brdRad) + var(--ec-brdWd));background:var(--ec-codeBg)}.expressive-code pre:focus-visible{outline:3px solid var(--ec-focusBrd);outline-offset:-3px}.expressive-code pre > code{all:unset;display:block;flex:1 0 100%;padding:var(--ec-codePadBlk) 0;color:var(--ec-codeFg);font-family:var(--ec-codeFontFml);font-size:var(--ec-codeFontSize);font-weight:var(--ec-codeFontWg);line-height:var(--ec-codeLineHt)}.expressive-code pre{overflow-x:auto}.expressive-code pre.wrap .ec-line .code{white-space:pre-wrap;overflow-wrap:break-word;min-width:min(20ch, var(--ecMaxLine, 20ch))}.expressive-code pre.wrap .ec-line .code span.indent{white-space:pre}.expressive-code .ec-line{direction:ltr;unicode-bidi:isolate;display:grid;grid-template-areas:'gutter code';grid-template-columns:auto 1fr;position:relative}.expressive-code .ec-line .gutter{grid-area:gutter;color:var(--ec-gtrFg)}.expressive-code .ec-line .gutter > *{pointer-events:none;user-select:none;-webkit-user-select:none}.expressive-code .ec-line .gutter ~ .code{--ecLineBrdCol:var(--ec-gtrBrdCol)}.expressive-code .ec-line.highlight .gutter{color:var(--ec-gtrHlFg)}.expressive-code .ec-line .code{grid-area:code;position:relative;box-sizing:content-box;padding-inline-start:calc(var(--ecIndent, 0ch) + var(--ec-codePadInl) - var(--ecGtrBrdWd));padding-inline-end:var(--ec-codePadInl);text-indent:calc(var(--ecIndent, 0ch) * -1)}.expressive-code .ec-line .code::before,.expressive-code .ec-line .code::after,.expressive-code .ec-line .code :where(*){text-indent:0}.expressive-code .ec-line .code{--ecGtrBrdWd:var(--ec-gtrBrdWd);border-inline-start:var(--ecGtrBrdWd) solid var(--ecLineBrdCol, transparent)}.expressive-code :nth-child(1 of .ec-line) .code{padding-inline-end:calc(2rem + var(--ec-codePadInl))}.expressive-code .sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.expressive-code .ec-line.mark{--tmLineBgCol:var(--ec-tm-markBg)}.expressive-code .ec-line.mark .code{--ecLineBrdCol:var(--ec-tm-markBrdCol)}.expressive-code .ec-line.ins{--tmLineBgCol:var(--ec-tm-insBg);--tmLabel:var(--ec-tm-insDiffIndContent)}.expressive-code .ec-line.ins .code{--ecLineBrdCol:var(--ec-tm-insBrdCol)}.expressive-code .ec-line.ins .code::before{color:var(--ec-tm-insDiffIndCol)}.expressive-code .ec-line.del{--tmLineBgCol:var(--ec-tm-delBg);--tmLabel:var(--ec-tm-delDiffIndContent)}.expressive-code .ec-line.del .code{--ecLineBrdCol:var(--ec-tm-delBrdCol)}.expressive-code .ec-line.del .code::before{color:var(--ec-tm-delDiffIndCol)}.expressive-code .ec-line.mark,.expressive-code .ec-line.ins,.expressive-code .ec-line.del{background:var(--tmLineBgCol)}.expressive-code .ec-line.mark .code,.expressive-code .ec-line.ins .code,.expressive-code .ec-line.del .code{--ecGtrBrdWd:var(--ec-tm-lineMarkerAccentWd)}.expressive-code .ec-line.mark .code::before,.expressive-code .ec-line.ins .code::before,.expressive-code .ec-line.del .code::before{display:block;position:absolute;left:0;box-sizing:border-box;content:var(--tmLabel, ' ');padding-inline-start:var(--ec-tm-lineDiffIndMargLeft);text-align:center;white-space:pre}.expressive-code .ec-line.mark.tm-label .code::before,.expressive-code .ec-line.ins.tm-label .code::before,.expressive-code .ec-line.del.tm-label .code::before{background:var(--ecLineBrdCol);padding:0 calc(var(--ec-tm-lineMarkerLabelPadInl) + var(--ec-tm-lineMarkerAccentWd)) 0 var(--ec-tm-lineMarkerLabelPadInl);color:var(--ec-tm-lineMarkerLabelCol)}.expressive-code .ec-line mark{--tmInlineBgCol:var(--ec-tm-markBg);--tmInlineBrdCol:var(--ec-tm-markBrdCol)}.expressive-code .ec-line ins{--tmInlineBgCol:var(--ec-tm-insBg);--tmInlineBrdCol:var(--ec-tm-insBrdCol)}.expressive-code .ec-line del{--tmInlineBgCol:var(--ec-tm-delBg);--tmInlineBrdCol:var(--ec-tm-delBrdCol)}.expressive-code .ec-line mark,.expressive-code .ec-line ins,.expressive-code .ec-line del{all:unset;display:inline-block;position:relative;--tmBrdL:var(--ec-tm-inlMarkerBrdWd);--tmBrdR:var(--ec-tm-inlMarkerBrdWd);--tmRadL:var(--ec-tm-inlMarkerBrdRad);--tmRadR:var(--ec-tm-inlMarkerBrdRad);margin-inline:0.025rem;padding-inline:var(--ec-tm-inlMarkerPad);border-radius:var(--tmRadL) var(--tmRadR) var(--tmRadR) var(--tmRadL);background:var(--tmInlineBgCol);background-clip:padding-box}.expressive-code .ec-line mark.open-start,.expressive-code .ec-line ins.open-start,.expressive-code .ec-line del.open-start{margin-inline-start:0;padding-inline-start:0;--tmBrdL:0px;--tmRadL:0}.expressive-code .ec-line mark.open-end,.expressive-code .ec-line ins.open-end,.expressive-code .ec-line del.open-end{margin-inline-end:0;padding-inline-end:0;--tmBrdR:0px;--tmRadR:0}.expressive-code .ec-line mark::before,.expressive-code .ec-line ins::before,.expressive-code .ec-line del::before{content:'';position:absolute;pointer-events:none;display:inline-block;inset:0;border-radius:var(--tmRadL) var(--tmRadR) var(--tmRadR) var(--tmRadL);border:var(--ec-tm-inlMarkerBrdWd) solid var(--tmInlineBrdCol);border-inline-width:var(--tmBrdL) var(--tmBrdR)}.expressive-code .frame{all:unset;position:relative;display:block;--header-border-radius:calc(var(--ec-brdRad) + var(--ec-brdWd));--tab-border-radius:calc(var(--ec-frm-edTabBrdRad) + var(--ec-brdWd));--button-spacing:0.4rem;--code-background:var(--ec-frm-edBg);border-radius:var(--header-border-radius);box-shadow:var(--ec-frm-frameBoxShdCssVal)}.expressive-code .frame .header{display:none;z-index:1;position:relative;border-radius:var(--header-border-radius) var(--header-border-radius) 0 0}.expressive-code .frame.has-title pre,.expressive-code .frame.has-title code,.expressive-code .frame.is-terminal pre,.expressive-code .frame.is-terminal code{border-top:none;border-top-left-radius:0;border-top-right-radius:0}.expressive-code .frame .title:empty:before{content:'\\a0'}.expressive-code .frame.has-title:not(.is-terminal){--button-spacing:calc(1.9rem + 2 * (var(--ec-uiPadBlk) + var(--ec-frm-edActTabIndHt)))}.expressive-code .frame.has-title:not(.is-terminal) .title{position:relative;color:var(--ec-frm-edActTabFg);background:var(--ec-frm-edActTabBg);background-clip:padding-box;margin-block-start:var(--ec-frm-edTabsMargBlkStart);padding:calc(var(--ec-uiPadBlk) + var(--ec-frm-edActTabIndHt)) var(--ec-uiPadInl);border:var(--ec-brdWd) solid var(--ec-frm-edActTabBrdCol);border-radius:var(--tab-border-radius) var(--tab-border-radius) 0 0;border-bottom:none;overflow:hidden}.expressive-code .frame.has-title:not(.is-terminal) .title::after{content:'';position:absolute;pointer-events:none;inset:0;border-top:var(--ec-frm-edActTabIndHt) solid var(--ec-frm-edActTabIndTopCol);border-bottom:var(--ec-frm-edActTabIndHt) solid var(--ec-frm-edActTabIndBtmCol)}.expressive-code .frame.has-title:not(.is-terminal) .header{display:flex;background:linear-gradient(to top, var(--ec-frm-edTabBarBrdBtmCol) var(--ec-brdWd), transparent var(--ec-brdWd)),linear-gradient(var(--ec-frm-edTabBarBg), var(--ec-frm-edTabBarBg));background-repeat:no-repeat;padding-inline-start:var(--ec-frm-edTabsMargInlStart)}.expressive-code .frame.has-title:not(.is-terminal) .header::before{content:'';position:absolute;pointer-events:none;inset:0;border:var(--ec-brdWd) solid var(--ec-frm-edTabBarBrdCol);border-radius:inherit;border-bottom:none}.expressive-code .frame.is-terminal{--button-spacing:calc(1.9rem + var(--ec-brdWd) + 2 * var(--ec-uiPadBlk));--code-background:var(--ec-frm-trmBg)}.expressive-code .frame.is-terminal .header{display:flex;align-items:center;justify-content:center;padding-block:var(--ec-uiPadBlk);padding-block-end:calc(var(--ec-uiPadBlk) + var(--ec-brdWd));position:relative;font-weight:500;letter-spacing:0.025ch;color:var(--ec-frm-trmTtbFg);background:var(--ec-frm-trmTtbBg);border:var(--ec-brdWd) solid var(--ec-brdCol);border-bottom:none}.expressive-code .frame.is-terminal .header::before{content:'';position:absolute;pointer-events:none;left:var(--ec-uiPadInl);width:2.1rem;height:0.56rem;line-height:0;background-color:var(--ec-frm-trmTtbDotsFg);opacity:var(--ec-frm-trmTtbDotsOpa);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 16' preserveAspectRatio='xMidYMid meet'%3E%3Ccircle cx='8' cy='8' r='8'/%3E%3Ccircle cx='30' cy='8' r='8'/%3E%3Ccircle cx='52' cy='8' r='8'/%3E%3C/svg%3E\");-webkit-mask-repeat:no-repeat;mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 16' preserveAspectRatio='xMidYMid meet'%3E%3Ccircle cx='8' cy='8' r='8'/%3E%3Ccircle cx='30' cy='8' r='8'/%3E%3Ccircle cx='52' cy='8' r='8'/%3E%3C/svg%3E\");mask-repeat:no-repeat}.expressive-code .frame.is-terminal .header::after{content:'';position:absolute;pointer-events:none;inset:0;border-bottom:var(--ec-brdWd) solid var(--ec-frm-trmTtbBrdBtmCol)}.expressive-code .frame pre{background:var(--code-background)}.expressive-code .copy{display:flex;gap:0.25rem;flex-direction:row;position:absolute;inset-block-start:calc(var(--ec-brdWd) + var(--button-spacing));inset-inline-end:calc(var(--ec-brdWd) + var(--ec-uiPadInl) / 2);direction:ltr;unicode-bidi:isolate}.expressive-code .copy button{position:relative;align-self:flex-end;margin:0;padding:0;border:none;border-radius:0.2rem;z-index:1;cursor:pointer;transition-property:opacity, background, border-color;transition-duration:0.2s;transition-timing-function:cubic-bezier(0.25, 0.46, 0.45, 0.94);width:2.5rem;height:2.5rem;background:var(--code-background);opacity:0.75}.expressive-code .copy button div{position:absolute;inset:0;border-radius:inherit;background:var(--ec-frm-inlBtnBg);opacity:var(--ec-frm-inlBtnBgIdleOpa);transition-property:inherit;transition-duration:inherit;transition-timing-function:inherit}.expressive-code .copy button::before{content:'';position:absolute;pointer-events:none;inset:0;border-radius:inherit;border:var(--ec-brdWd) solid var(--ec-frm-inlBtnBrd);opacity:var(--ec-frm-inlBtnBrdOpa)}.expressive-code .copy button::after{content:'';position:absolute;pointer-events:none;inset:0;background-color:var(--ec-frm-inlBtnFg);-webkit-mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.75'%3E%3Cpath d='M3 19a2 2 0 0 1-1-2V2a2 2 0 0 1 1-1h13a2 2 0 0 1 2 1'/%3E%3Crect x='6' y='5' width='16' height='18' rx='1.5' ry='1.5'/%3E%3C/svg%3E\");-webkit-mask-repeat:no-repeat;mask-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='1.75'%3E%3Cpath d='M3 19a2 2 0 0 1-1-2V2a2 2 0 0 1 1-1h13a2 2 0 0 1 2 1'/%3E%3Crect x='6' y='5' width='16' height='18' rx='1.5' ry='1.5'/%3E%3C/svg%3E\");mask-repeat:no-repeat;margin:0.475rem;line-height:0}.expressive-code .copy button:hover,.expressive-code .copy button:focus:focus-visible{opacity:1}.expressive-code .copy button:hover div,.expressive-code .copy button:focus:focus-visible div{opacity:var(--ec-frm-inlBtnBgHoverOrFocusOpa)}.expressive-code .copy button:active{opacity:1}.expressive-code .copy button:active div{opacity:var(--ec-frm-inlBtnBgActOpa)}.expressive-code .copy .feedback{--tooltip-arrow-size:0.35rem;--tooltip-bg:var(--ec-frm-tooltipSuccessBg);color:var(--ec-frm-tooltipSuccessFg);pointer-events:none;user-select:none;-webkit-user-select:none;position:relative;align-self:center;background-color:var(--tooltip-bg);z-index:99;padding:0.125rem 0.75rem;border-radius:0.2rem;margin-inline-end:var(--tooltip-arrow-size);opacity:0;transition-property:opacity, transform;transition-duration:0.2s;transition-timing-function:ease-in-out;transform:translate3d(0, 0.25rem, 0)}.expressive-code .copy .feedback::after{content:'';position:absolute;pointer-events:none;top:calc(50% - var(--tooltip-arrow-size));inset-inline-end:calc(-2 * (var(--tooltip-arrow-size) - 0.5px));border:var(--tooltip-arrow-size) solid transparent;border-inline-start-color:var(--tooltip-bg)}.expressive-code .copy .feedback.show{opacity:1;transform:translate3d(0, 0, 0)}@media (hover: hover){.expressive-code{}.expressive-code .copy button{opacity:0;width:2rem;height:2rem}.expressive-code .frame:hover .copy button:not(:hover),.expressive-code .frame:focus-within :focus-visible ~ .copy button:not(:hover),.expressive-code .frame .copy .feedback.show ~ button:not(:hover){opacity:0.75}}:root,:root:not([data-theme='dark']) .expressive-code[data-theme='dark']{--ec-brdRad:4px;--ec-brdWd:1.5px;--ec-brdCol:#3c3f51;--ec-codeFontFml:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;;--ec-codeFontSize:0.875rem;--ec-codeFontWg:400;--ec-codeLineHt:1.7142857rem;--ec-codePadBlk:1rem;--ec-codePadInl:1rem;--ec-codeBg:#282a36;--ec-codeFg:#f8f8f2;--ec-codeSelBg:#44475a;--ec-gtrFg:#6979a8;--ec-gtrBrdCol:#6979a833;--ec-gtrBrdWd:1.5px;--ec-gtrHlFg:#c6c6c6b5;--ec-uiFontFml:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,'Noto Sans',sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol','Noto Color Emoji';--ec-uiFontSize:0.9rem;--ec-uiFontWg:400;--ec-uiLineHt:inherit;--ec-uiPadBlk:0.25rem;--ec-uiPadInl:1rem;--ec-uiSelBg:#44475a;--ec-uiSelFg:#f8f8f2;--ec-focusBrd:#6272a4;--ec-sbThumbCol:#79797966;--ec-sbThumbHoverCol:#676767fd;--ec-tm-lineMarkerAccentMarg:0rem;--ec-tm-lineMarkerAccentWd:0.15rem;--ec-tm-lineMarkerLabelPadInl:0.2rem;--ec-tm-lineMarkerLabelCol:white;--ec-tm-lineDiffIndMargLeft:0.3rem;--ec-tm-inlMarkerBrdWd:1.5px;--ec-tm-inlMarkerBrdRad:0.2rem;--ec-tm-inlMarkerPad:0.15rem;--ec-tm-insDiffIndContent:'+';--ec-tm-delDiffIndContent:'-';--ec-tm-markBg:#264a8980;--ec-tm-markBrdCol:#5570b3d0;--ec-tm-insBg:#26561c80;--ec-tm-insBrdCol:#4e7e41d0;--ec-tm-insDiffIndCol:#7eb070d0;--ec-tm-delBg:#81322b80;--ec-tm-delBrdCol:#ae594fd0;--ec-tm-delDiffIndCol:#e68a7ed0;--ec-frm-shdCol:#0000005b;--ec-frm-frameBoxShdCssVal:none;--ec-frm-edActTabBg:#282a36;--ec-frm-edActTabFg:#f8f8f2;--ec-frm-edActTabBrdCol:transparent;--ec-frm-edActTabIndHt:1.5px;--ec-frm-edActTabIndTopCol:#ff79c680;--ec-frm-edActTabIndBtmCol:null;--ec-frm-edTabsMargInlStart:0;--ec-frm-edTabsMargBlkStart:0;--ec-frm-edTabBrdRad:4px;--ec-frm-edTabBarBg:#191a21;--ec-frm-edTabBarBrdCol:#3c3f51;--ec-frm-edTabBarBrdBtmCol:transparent;--ec-frm-edBg:#282a36;--ec-frm-trmTtbFg:#f8f8f2;--ec-frm-trmTtbDotsFg:#f8f8f2;--ec-frm-trmTtbDotsOpa:0.15;--ec-frm-trmTtbBg:#21222c;--ec-frm-trmTtbBrdBtmCol:#3c3f51;--ec-frm-trmBg:#282a36;--ec-frm-inlBtnFg:#f8f8f2;--ec-frm-inlBtnBg:#f8f8f2;--ec-frm-inlBtnBgIdleOpa:0;--ec-frm-inlBtnBgHoverOrFocusOpa:0.2;--ec-frm-inlBtnBgActOpa:0.3;--ec-frm-inlBtnBrd:#f8f8f2;--ec-frm-inlBtnBrdOpa:0.4;--ec-frm-tooltipSuccessBg:#2b8541;--ec-frm-tooltipSuccessFg:white}.expressive-code .ec-line :where(span[style^='--']:not([class])),:root:not([data-theme='dark']) .expressive-code[data-theme='dark'] .ec-line :where(span[style^='--']:not([class])){color:var(--0, inherit);font-style:var(--0fs, inherit);font-weight:var(--0fw, inherit);text-decoration:var(--0td, inherit)}@media (prefers-color-scheme: light){:root:not([data-theme='dark']){--ec-brdCol:#e1e4e8;--ec-codeBg:#fff;--ec-codeFg:#24292e;--ec-codeSelBg:#0366d625;--ec-gtrFg:#1b1f2381;--ec-gtrBrdCol:#1b1f2333;--ec-gtrHlFg:#24292eab;--ec-uiSelBg:#e2e5e9;--ec-uiSelFg:#2f363d;--ec-focusBrd:#2188ff;--ec-sbThumbCol:#959da533;--ec-sbThumbHoverCol:#959da5eb;--ec-tm-markBg:#9fb6ff80;--ec-tm-insBg:#94c68480;--ec-tm-insDiffIndCol:#3a692fd0;--ec-tm-delBg:#fea09280;--ec-tm-delDiffIndCol:#97453dd0;--ec-frm-shdCol:#00000028;--ec-frm-edActTabBg:#fff;--ec-frm-edActTabFg:#2f363d;--ec-frm-edActTabIndTopCol:#f9826c;--ec-frm-edActTabIndBtmCol:#fff;--ec-frm-edTabBarBg:#f6f8fa;--ec-frm-edTabBarBrdCol:#e1e4e8;--ec-frm-edTabBarBrdBtmCol:#e1e4e8;--ec-frm-edBg:#fff;--ec-frm-trmTtbFg:#2f363d;--ec-frm-trmTtbDotsFg:#2f363d;--ec-frm-trmTtbBg:#fff;--ec-frm-trmTtbBrdBtmCol:#e1e4e8;--ec-frm-trmBg:#f6f8fa;--ec-frm-inlBtnFg:#24292e;--ec-frm-inlBtnBg:#24292e;--ec-frm-inlBtnBrd:#24292e;--ec-frm-tooltipSuccessBg:#208638}:root:not([data-theme='dark']) .expressive-code .ec-line :where(span[style^='--']:not([class])){color:var(--1, inherit);font-style:var(--1fs, inherit);font-weight:var(--1fw, inherit);text-decoration:var(--1td, inherit)}}:root[data-theme='light'] .expressive-code:not([data-theme='dark']),.expressive-code[data-theme='light']{--ec-brdCol:#e1e4e8;--ec-codeBg:#fff;--ec-codeFg:#24292e;--ec-codeSelBg:#0366d625;--ec-gtrFg:#1b1f2381;--ec-gtrBrdCol:#1b1f2333;--ec-gtrHlFg:#24292eab;--ec-uiSelBg:#e2e5e9;--ec-uiSelFg:#2f363d;--ec-focusBrd:#2188ff;--ec-sbThumbCol:#959da533;--ec-sbThumbHoverCol:#959da5eb;--ec-tm-markBg:#9fb6ff80;--ec-tm-insBg:#94c68480;--ec-tm-insDiffIndCol:#3a692fd0;--ec-tm-delBg:#fea09280;--ec-tm-delDiffIndCol:#97453dd0;--ec-frm-shdCol:#00000028;--ec-frm-edActTabBg:#fff;--ec-frm-edActTabFg:#2f363d;--ec-frm-edActTabIndTopCol:#f9826c;--ec-frm-edActTabIndBtmCol:#fff;--ec-frm-edTabBarBg:#f6f8fa;--ec-frm-edTabBarBrdCol:#e1e4e8;--ec-frm-edTabBarBrdBtmCol:#e1e4e8;--ec-frm-edBg:#fff;--ec-frm-trmTtbFg:#2f363d;--ec-frm-trmTtbDotsFg:#2f363d;--ec-frm-trmTtbBg:#fff;--ec-frm-trmTtbBrdBtmCol:#e1e4e8;--ec-frm-trmBg:#f6f8fa;--ec-frm-inlBtnFg:#24292e;--ec-frm-inlBtnBg:#24292e;--ec-frm-inlBtnBrd:#24292e;--ec-frm-tooltipSuccessBg:#208638}:root[data-theme='light'] .expressive-code:not([data-theme='dark']) .ec-line :where(span[style^='--']:not([class])),.expressive-code[data-theme='light'] .ec-line :where(span[style^='--']:not([class])){color:var(--1, inherit);font-style:var(--1fs, inherit);font-weight:var(--1fw, inherit);text-decoration:var(--1td, inherit)}"]];

const prerender = true;
const GET = ({ url }) => {
  const match = styles.find(([route]) => url.pathname.endsWith(route));
  if (!match)
    throw new Error(`No styles found for route ${url.pathname}`);
  return new Response(match[1], { headers: { "Content-Type": "text/css", "Cache-Control": "public,max-age=31536000,immutable" } });
};

export { GET, prerender };
