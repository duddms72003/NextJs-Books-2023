(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{3454:function(e,t,n){"use strict";var r,i;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"===typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(7663)},1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4116)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o=(i=n(7294))&&i.__esModule?i:{default:i},s=n(6273),u=n(2725),a=n(3462),l=n(1018),c=n(7190),f=n(1210),d=n(8684);var p="undefined"!==typeof o.default.useTransition,h={};function v(e,t,n,r){if(e&&s.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(i?"%"+i:"")]=!0}}var y=o.default.forwardRef((function(e,t){var n,i=e.href,y=e.as,_=e.children,m=e.prefetch,g=e.passHref,b=e.replace,S=e.shallow,x=e.scroll,w=e.locale,j=e.onClick,k=e.onMouseEnter,R=e.legacyBehavior,z=void 0===R?!0!==Boolean(!1):R,C=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=_,!z||"string"!==typeof n&&"number"!==typeof n||(n=o.default.createElement("a",null,n));var O=!1!==m,M=r(p?o.default.useTransition():[],2)[1],T=o.default.useContext(a.RouterContext),F=o.default.useContext(l.AppRouterContext);F&&(T=F);var E,P=o.default.useMemo((function(){var e=r(s.resolveHref(T,i,!0),2),t=e[0],n=e[1];return{href:t,as:y?s.resolveHref(T,y):n||t}}),[T,i,y]),A=P.href,I=P.as,L=o.default.useRef(A),B=o.default.useRef(I);z&&(E=o.default.Children.only(n));var N=z?E&&"object"===typeof E&&E.ref:t,D=r(c.useIntersection({rootMargin:"200px"}),3),H=D[0],q=D[1],U=D[2],K=o.default.useCallback((function(e){B.current===I&&L.current===A||(U(),B.current=I,L.current=A),H(e),N&&("function"===typeof N?N(e):"object"===typeof N&&(N.current=e))}),[I,N,A,U,H]);o.default.useEffect((function(){var e=q&&O&&s.isLocalURL(A),t="undefined"!==typeof w?w:T&&T.locale,n=h[A+"%"+I+(t?"%"+t:"")];e&&!n&&v(T,A,I,{locale:t})}),[I,A,q,w,O,T]);var W={ref:K,onClick:function(e){z||"function"!==typeof j||j(e),z&&E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,u,a,l){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(n)){e.preventDefault();var c=function(){t[i?"replace":"push"](n,r,{shallow:o,locale:a,scroll:u})};l?l(c):c()}}(e,T,A,I,b,S,x,w,F?M:void 0)},onMouseEnter:function(e){z||"function"!==typeof k||k(e),z&&E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),s.isLocalURL(A)&&v(T,A,I,{priority:!0})}};if(!z||g||"a"===E.type&&!("href"in E.props)){var X="undefined"!==typeof w?w:T&&T.locale,Z=T&&T.isLocaleDomain&&f.getDomainLocale(I,X,T.locales,T.domainLocales);W.href=Z||d.addBasePath(u.addLocale(I,X,T&&T.defaultLocale))}return z?o.default.cloneElement(E,W):o.default.createElement("a",Object.assign({},C,W),n)}));t.default=y,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,l=e.disabled||!s,c=i.useRef(),f=r(i.useState(!1),2),d=f[0],p=f[1],h=r(i.useState(null),2),v=h[0],y=h[1];i.useEffect((function(){if(s){if(c.current&&(c.current(),c.current=void 0),l||d)return;return v&&v.tagName&&(c.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=a.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=u.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},a.push(n),u.set(n,t),t}(n),i=r.id,o=r.observer,s=r.elements;return s.set(e,t),o.observe(e),function(){if(s.delete(e),o.unobserve(e),0===s.size){o.disconnect(),u.delete(i);var t=a.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&a.splice(t,1)}}}(v,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==c.current||c.current(),c.current=void 0}}if(!d){var e=o.requestIdleCallback((function(){return p(!0)}));return function(){return o.cancelIdleCallback(e)}}}),[v,l,n,t,d]);var _=i.useCallback((function(){p(!1)}),[]);return[y,d,_]};var i=n(7294),o=n(9311),s="function"===typeof IntersectionObserver;var u=new Map,a=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.AppRouterContext=void 0;var i=((r=n(7294))&&r.__esModule?r:{default:r}).default.createContext(null);t.AppRouterContext=i},6089:function(e,t,n){"use strict";e.exports=n(5988)},4116:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return d}});var o=n(5893),s=n(6089),u=n.n(s),a=n(1664),l=n.n(a);function c(){return(0,o.jsxs)("nav",{className:"jsx-8b973ef7f9b90c9e",children:[(0,o.jsx)(l(),{href:"/",children:(0,o.jsx)("a",{className:"jsx-8b973ef7f9b90c9e nav-link underline yellow",children:"Home"})}),(0,o.jsx)(l(),{href:"/about",children:(0,o.jsx)("a",{className:"jsx-8b973ef7f9b90c9e nav-link underline yellow",children:"About"})}),(0,o.jsx)(u(),{id:"8b973ef7f9b90c9e",children:'nav.jsx-8b973ef7f9b90c9e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-moz-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:45px 60px;font-size:30px}.nav-link.jsx-8b973ef7f9b90c9e{text-decoration:none;-webkit-transition:color.3s;-moz-transition:color.3s;-o-transition:color.3s;transition:color.3s;font-family:"Shantell Sans",cursive}.underline.jsx-8b973ef7f9b90c9e{line-height:1.2;font-weight:700;background-image:-webkit-linear-gradient(transparent -webkit-calc(100% - 3px),#000 3px);background-image:-moz-linear-gradient(transparent -moz-calc(100% - 3px),#000 3px);background-image:-o-linear-gradient(transparent calc(100% - 3px),#000 3px);background-image:linear-gradient(transparent calc(100% - 3px),#000 3px);background-repeat:no-repeat;-webkit-background-size:0%100%;-moz-background-size:0%100%;-o-background-size:0%100%;background-size:0%100%;-webkit-transition:background-size.8s;-moz-transition:background-size.8s;-o-transition:background-size.8s;transition:background-size.8s;color:#000;cursor:pointer}@media(min-width:1e3px){.underline.jsx-8b973ef7f9b90c9e{}}.underline.yellow.jsx-8b973ef7f9b90c9e{background-image:-webkit-linear-gradient(transparent 60%,#f8cd07 40%);background-image:-moz-linear-gradient(transparent 60%,#f8cd07 40%);background-image:-o-linear-gradient(transparent 60%,#f8cd07 40%);background-image:linear-gradient(transparent 60%,#f8cd07 40%)}.underline.jsx-8b973ef7f9b90c9e:hover{-webkit-background-size:100%100%;-moz-background-size:100%100%;-o-background-size:100%100%;background-size:100%100%}'})]})}function f(e){var t=e.children;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c,{}),(0,o.jsx)("div",{children:t})]})}n(7284);function d(e){var t=e.Component,n=e.pageProps;return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(f,{children:(0,o.jsx)(t,i({},n))})})}},7284:function(){},7663:function(e){!function(){var t={308:function(e){var t,n,r=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(e){t=i}try{n="function"===typeof clearTimeout?clearTimeout:o}catch(e){n=o}}();var u,a=[],l=!1,c=-1;function f(){l&&u&&(l=!1,u.length?a=u.concat(a):c=-1,a.length&&d())}function d(){if(!l){var e=s(f);l=!0;for(var t=a.length;t;){for(u=a,a=[];++c<t;)u&&u[c].run();c=-1,t=a.length}u=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||l||s(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=h,r.addListener=h,r.once=h,r.off=h,r.removeListener=h,r.removeAllListeners=h,r.emit=h,r.prependListener=h,r.prependOnceListener=h,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},n={};function r(e){var i=n[e];if(void 0!==i)return i.exports;var o=n[e]={exports:{}},s=!0;try{t[e](o,o.exports,r),s=!1}finally{s&&delete n[e]}return o.exports}r.ab="//";var i=r(308);e.exports=i}()},1664:function(e,t,n){e.exports=n(8418)},4207:function(e,t,n){var r=n(3454);!function(){"use strict";var t={583:function(e){e.exports=function(e){for(var t=5381,n=e.length;n;)t=33*t^e.charCodeAt(--n);return t>>>0}},590:function(e,t,n){t.__esModule=!0,t.computeId=function(e,t){if(!t)return"jsx-"+e;var n=String(t),r=e+n;o[r]||(o[r]="jsx-"+(0,i.default)(e+"-"+n));return o[r]},t.computeSelector=function(e,t){"undefined"===typeof window&&(t=t.replace(/\/style/gi,"\\/style"));var n=e+t;o[n]||(o[n]=t.replace(/__jsx-style-dynamic-selector/g,e));return o[n]};var r,i=(r=n(583))&&r.__esModule?r:{default:r};var o={}},503:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}t.__esModule=!0,t.default=void 0;var i="undefined"!==typeof r&&r.env&&!0,o=function(e){return"[object String]"===Object.prototype.toString.call(e)},s=function(){function e(e){var t=void 0===e?{}:e,n=t.name,r=void 0===n?"stylesheet":n,s=t.optimizeForSpeed,a=void 0===s?i:s,l=t.isBrowser,c=void 0===l?"undefined"!==typeof window:l;u(o(r),"`name` must be a string"),this._name=r,this._deletedRulePlaceholder="#"+r+"-deleted-rule____{}",u("boolean"===typeof a,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=a,this._isBrowser=c,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var f=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=f?f.getAttribute("content"):null}var t,r,s,a=e.prototype;return a.setOptimizeForSpeed=function(e){u("boolean"===typeof e,"`setOptimizeForSpeed` accepts a boolean"),u(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()},a.isOptimizeForSpeed=function(){return this._optimizeForSpeed},a.inject=function(){var e=this;if(u(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(i||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,n){return"number"===typeof n?e._serverSheet.cssRules[n]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),n},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}},a.getSheetForTag=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]},a.getSheet=function(){return this.getSheetForTag(this._tags[this._tags.length-1])},a.insertRule=function(e,t){if(u(o(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!==typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var n=this.getSheet();"number"!==typeof t&&(t=n.cssRules.length);try{n.insertRule(e,t)}catch(s){return i||console.warn("StyleSheet: illegal rule: \n\n"+e+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),-1}}else{var r=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,r))}return this._rulesCount++},a.replaceRule=function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var n=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!n.cssRules[e])return e;n.deleteRule(e);try{n.insertRule(t,e)}catch(o){i||console.warn("StyleSheet: illegal rule: \n\n"+t+"\n\nSee https://stackoverflow.com/q/20007992 for more info"),n.insertRule(this._deletedRulePlaceholder,e)}}else{var r=this._tags[e];u(r,"old rule at index `"+e+"` not found"),r.textContent=t}return e},a.deleteRule=function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];u(t,"rule at index `"+e+"` not found"),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)},a.flush=function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach((function(e){return e&&e.parentNode.removeChild(e)})),this._tags=[]):this._serverSheet.cssRules=[]},a.cssRules=function(){var e=this;return this._isBrowser?this._tags.reduce((function(t,n){return n?t=t.concat(Array.prototype.map.call(e.getSheetForTag(n).cssRules,(function(t){return t.cssText===e._deletedRulePlaceholder?null:t}))):t.push(null),t}),[]):this._serverSheet.cssRules},a.makeStyleTag=function(e,t,n){t&&u(o(t),"makeStyleTag accepts only strings as second parameter");var r=document.createElement("style");this._nonce&&r.setAttribute("nonce",this._nonce),r.type="text/css",r.setAttribute("data-"+e,""),t&&r.appendChild(document.createTextNode(t));var i=document.head||document.getElementsByTagName("head")[0];return n?i.insertBefore(r,n):i.appendChild(r),r},t=e,(r=[{key:"length",get:function(){return this._rulesCount}}])&&n(t.prototype,r),s&&n(t,s),e}();function u(e,t){if(!e)throw new Error("StyleSheet: "+t+".")}t.default=s},449:function(e,t,n){t.__esModule=!0,t.default=l;var r,i=(r=n(522))&&r.__esModule?r:{default:r},o=n(147),s=n(590);var u=i.default.useInsertionEffect||i.default.useLayoutEffect,a="undefined"!==typeof window?(0,o.createStyleRegistry)():void 0;function l(e){var t=a||(0,o.useStyleRegistry)();return t?"undefined"===typeof window?(t.add(e),null):(u((function(){return t.add(e),function(){t.remove(e)}}),[e.id,String(e.dynamic)]),null):null}l.dynamic=function(e){return e.map((function(e){var t=e[0],n=e[1];return(0,s.computeId)(t,n)})).join(" ")}},147:function(e,t,n){t.__esModule=!0,t.createStyleRegistry=c,t.StyleRegistry=function(e){var t=e.registry,n=e.children,r=(0,i.useContext)(l),o=(0,i.useState)((function(){return r||t||c()}))[0];return i.default.createElement(l.Provider,{value:o},n)},t.useStyleRegistry=function(){return(0,i.useContext)(l)},t.StyleSheetContext=t.StyleSheetRegistry=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}n.default=e,t&&t.set(e,n);return n}(n(522)),o=(r=n(503))&&r.__esModule?r:{default:r},s=n(590);function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}var a=function(){function e(e){var t=void 0===e?{}:e,n=t.styleSheet,r=void 0===n?null:n,i=t.optimizeForSpeed,s=void 0!==i&&i,u=t.isBrowser,a=void 0===u?"undefined"!==typeof window:u;this._sheet=r||new o.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),r&&"boolean"===typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=a,this._fromServer=void 0,this._indices={},this._instancesCounts={}}var t=e.prototype;return t.add=function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce((function(e,t){return e[t]=0,e}),{}));var n=this.getIdAndRules(e),r=n.styleId,i=n.rules;if(r in this._instancesCounts)this._instancesCounts[r]+=1;else{var o=i.map((function(e){return t._sheet.insertRule(e)})).filter((function(e){return-1!==e}));this._indices[r]=o,this._instancesCounts[r]=1}},t.remove=function(e){var t=this,n=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: "+t+".")}(n in this._instancesCounts,"styleId: `"+n+"` not found"),this._instancesCounts[n]-=1,this._instancesCounts[n]<1){var r=this._fromServer&&this._fromServer[n];r?(r.parentNode.removeChild(r),delete this._fromServer[n]):(this._indices[n].forEach((function(e){return t._sheet.deleteRule(e)})),delete this._indices[n]),delete this._instancesCounts[n]}},t.update=function(e,t){this.add(t),this.remove(e)},t.flush=function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={}},t.cssRules=function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map((function(t){return[t,e._fromServer[t]]})):[],n=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map((function(t){return[t,e._indices[t].map((function(e){return n[e].cssText})).join(e._optimizeForSpeed?"":"\n")]})).filter((function(e){return Boolean(e[1])})))},t.styles=function(e){return function(e,t){return void 0===t&&(t={}),e.map((function(e){var n=e[0],r=e[1];return i.default.createElement("style",{id:"__"+n,key:"__"+n,nonce:t.nonce?t.nonce:void 0,dangerouslySetInnerHTML:{__html:r}})}))}(this.cssRules(),e)},t.getIdAndRules=function(e){var t=e.children,n=e.dynamic,r=e.id;if(n){var i=(0,s.computeId)(r,n);return{styleId:i,rules:Array.isArray(t)?t.map((function(e){return(0,s.computeSelector)(i,e)})):[(0,s.computeSelector)(i,t)]}}return{styleId:(0,s.computeId)(r),rules:Array.isArray(t)?t:[t]}},t.selectFromServer=function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce((function(e,t){return e[t.id.slice(2)]=t,e}),{})},e}();t.StyleSheetRegistry=a;var l=(0,i.createContext)(null);function c(){return new a}t.StyleSheetContext=l},522:function(e){e.exports=n(7294)}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={exports:{}},s=!0;try{t[e](r,r.exports,o),s=!1}finally{s&&delete i[e]}return r.exports}o.ab="//";var s={};!function(){var e=s;e.__esModule=!0,e.style=e.useStyleRegistry=e.createStyleRegistry=e.StyleRegistry=void 0;var t=o(147);e.StyleRegistry=t.StyleRegistry,e.createStyleRegistry=t.createStyleRegistry,e.useStyleRegistry=t.useStyleRegistry;var n,r=(n=o(449))&&n.__esModule?n:{default:n};e.style=r.default}(),e.exports=s}()},5988:function(e,t,n){e.exports=n(4207).style}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);