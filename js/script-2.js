(function(){'use strict';/**
 * Original file: /gh/alpinejs/alpine@2.8.0/dist/alpine.js
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Alpine=t();}(window,(function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i);}return n}function n(n){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?t(Object(r),!0).forEach((function(t){e(n,t,r[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):t(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e));}));}return n}function i(e){return Array.from(new Set(e))}function r(){return navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom")}function s(e,t){return e==t}function o(e,t){"template"!==e.tagName.toLowerCase()?console.warn(`Alpine: [${t}] directive should only be added to <template> tags. See https://github.com/alpinejs/alpine#${t}`):1!==e.content.childElementCount&&console.warn(`Alpine: <template> tag with [${t}] encountered with multiple element roots. Make sure <template> only has a single child element.`);}function a(e){return e.toLowerCase().replace(/-(\w)/g,((e,t)=>t.toUpperCase()))}function l(e,t){if(!1===t(e))return;let n=e.firstElementChild;for(;n;)l(n,t),n=n.nextElementSibling;}function c(e,t){var n;return function(){var i=this,r=arguments,s=function(){n=null,e.apply(i,r);};clearTimeout(n),n=setTimeout(s,t);}}const u=(e,t,n)=>{if(console.warn(`Alpine Error: "${n}"\n\nExpression: "${t}"\nElement:`,e),!r())throw n};function d(e,{el:t,expression:n}){try{const i=e();return i instanceof Promise?i.catch((e=>u(t,n,e))):i}catch(e){u(t,n,e);}}function f(e,t,n,i={}){return d((()=>"function"==typeof t?t.call(n):new Function(["$data",...Object.keys(i)],`var __alpine_result; with($data) { __alpine_result = ${t} }; return __alpine_result`)(n,...Object.values(i))),{el:e,expression:t})}const m=/^x-(on|bind|data|text|html|model|if|for|show|cloak|transition|ref|spread)\b/;function p(e){const t=y(e.name);return m.test(t)}function h(e,t,n){let i=Array.from(e.attributes).filter(p).map(v),r=i.filter((e=>"spread"===e.type))[0];if(r){let n=f(e,r.expression,t.$data);i=i.concat(Object.entries(n).map((([e,t])=>v({name:e,value:t}))));}return n?i.filter((e=>e.type===n)):function(e){let t=["bind","model","show","catch-all"];return e.sort(((e,n)=>{let i=-1===t.indexOf(e.type)?"catch-all":e.type,r=-1===t.indexOf(n.type)?"catch-all":n.type;return t.indexOf(i)-t.indexOf(r)}))}(i)}function v({name:e,value:t}){const n=y(e),i=n.match(m),r=n.match(/:([a-zA-Z0-9\-:]+)/),s=n.match(/\.[^.\]]+(?=[^\]]*$)/g)||[];return {type:i?i[1]:null,value:r?r[1]:null,modifiers:s.map((e=>e.replace(".",""))),expression:t}}function y(e){return e.startsWith("@")?e.replace("@","x-on:"):e.startsWith(":")?e.replace(":","x-bind:"):e}function b(e,t=Boolean){return e.split(" ").filter(t)}const x="in",g="out",_="cancelled";function w(e,t,n,i,r=!1){if(r)return t();if(e.__x_transition&&e.__x_transition.type===x)return;const s=h(e,i,"transition"),o=h(e,i,"show")[0];if(o&&o.modifiers.includes("transition")){let i=o.modifiers;if(i.includes("out")&&!i.includes("in"))return t();const r=i.includes("in")&&i.includes("out");i=r?i.filter(((e,t)=>t<i.indexOf("out"))):i,function(e,t,n,i){const r={duration:O(t,"duration",150),origin:O(t,"origin","center"),first:{opacity:0,scale:O(t,"scale",95)},second:{opacity:1,scale:100}};k(e,t,n,(()=>{}),i,r,x);}(e,i,t,n);}else s.some((e=>["enter","enter-start","enter-end"].includes(e.value)))?function(e,t,n,i,r){const s=b(A((n.find((e=>"enter"===e.value))||{expression:""}).expression,e,t)),o=b(A((n.find((e=>"enter-start"===e.value))||{expression:""}).expression,e,t)),a=b(A((n.find((e=>"enter-end"===e.value))||{expression:""}).expression,e,t));S(e,s,o,a,i,(()=>{}),x,r);}(e,i,s,t,n):t();}function E(e,t,n,i,r=!1){if(r)return t();if(e.__x_transition&&e.__x_transition.type===g)return;const s=h(e,i,"transition"),o=h(e,i,"show")[0];if(o&&o.modifiers.includes("transition")){let i=o.modifiers;if(i.includes("in")&&!i.includes("out"))return t();const r=i.includes("in")&&i.includes("out");i=r?i.filter(((e,t)=>t>i.indexOf("out"))):i,function(e,t,n,i,r){const s={duration:n?O(t,"duration",150):O(t,"duration",150)/2,origin:O(t,"origin","center"),first:{opacity:1,scale:100},second:{opacity:0,scale:O(t,"scale",95)}};k(e,t,(()=>{}),i,r,s,g);}(e,i,r,t,n);}else s.some((e=>["leave","leave-start","leave-end"].includes(e.value)))?function(e,t,n,i,r){const s=b(A((n.find((e=>"leave"===e.value))||{expression:""}).expression,e,t)),o=b(A((n.find((e=>"leave-start"===e.value))||{expression:""}).expression,e,t)),a=b(A((n.find((e=>"leave-end"===e.value))||{expression:""}).expression,e,t));S(e,s,o,a,(()=>{}),i,g,r);}(e,i,s,t,n):t();}function O(e,t,n){if(-1===e.indexOf(t))return n;const i=e[e.indexOf(t)+1];if(!i)return n;if("scale"===t&&!P(i))return n;if("duration"===t){let e=i.match(/([0-9]+)ms/);if(e)return e[1]}return "origin"===t&&["top","right","left","center","bottom"].includes(e[e.indexOf(t)+2])?[i,e[e.indexOf(t)+2]].join(" "):i}function k(e,t,n,i,r,s,o){e.__x_transition&&e.__x_transition.cancel&&e.__x_transition.cancel();const a=e.style.opacity,l=e.style.transform,c=e.style.transformOrigin,u=!t.includes("opacity")&&!t.includes("scale"),d=u||t.includes("opacity"),f=u||t.includes("scale"),m={start(){d&&(e.style.opacity=s.first.opacity),f&&(e.style.transform=`scale(${s.first.scale/100})`);},during(){f&&(e.style.transformOrigin=s.origin),e.style.transitionProperty=[d?"opacity":"",f?"transform":""].join(" ").trim(),e.style.transitionDuration=s.duration/1e3+"s",e.style.transitionTimingFunction="cubic-bezier(0.4, 0.0, 0.2, 1)";},show(){n();},end(){d&&(e.style.opacity=s.second.opacity),f&&(e.style.transform=`scale(${s.second.scale/100})`);},hide(){i();},cleanup(){d&&(e.style.opacity=a),f&&(e.style.transform=l),f&&(e.style.transformOrigin=c),e.style.transitionProperty=null,e.style.transitionDuration=null,e.style.transitionTimingFunction=null;}};$(e,m,o,r);}const A=(e,t,n)=>"function"==typeof e?n.evaluateReturnExpression(t,e):e;function S(e,t,n,i,r,s,o,a){e.__x_transition&&e.__x_transition.cancel&&e.__x_transition.cancel();const l=e.__x_original_classes||[],c={start(){e.classList.add(...n);},during(){e.classList.add(...t);},show(){r();},end(){e.classList.remove(...n.filter((e=>!l.includes(e)))),e.classList.add(...i);},hide(){s();},cleanup(){e.classList.remove(...t.filter((e=>!l.includes(e)))),e.classList.remove(...i.filter((e=>!l.includes(e))));}};$(e,c,o,a);}function $(e,t,n,i){const r=C((()=>{t.hide(),e.isConnected&&t.cleanup(),delete e.__x_transition;}));e.__x_transition={type:n,cancel:C((()=>{i(_),r();})),finish:r,nextFrame:null},t.start(),t.during(),e.__x_transition.nextFrame=requestAnimationFrame((()=>{let n=1e3*Number(getComputedStyle(e).transitionDuration.replace(/,.*/,"").replace("s",""));0===n&&(n=1e3*Number(getComputedStyle(e).animationDuration.replace("s",""))),t.show(),e.__x_transition.nextFrame=requestAnimationFrame((()=>{t.end(),setTimeout(e.__x_transition.finish,n);}));}));}function P(e){return !Array.isArray(e)&&!isNaN(e)}function C(e){let t=!1;return function(){t||(t=!0,e.apply(this,arguments));}}function D(e,t,i,r,s){o(t,"x-for");let a=j("function"==typeof i?e.evaluateReturnExpression(t,i):i),l=function(e,t,n,i){let r=h(t,e,"if")[0];if(r&&!e.evaluateReturnExpression(t,r.expression))return [];let s=e.evaluateReturnExpression(t,n.items,i);P(s)&&s>0&&(s=Array.from(Array(s).keys(),(e=>e+1)));return s}(e,t,a,s),c=t;l.forEach(((i,o)=>{let u=function(e,t,i,r,s){let o=s?n({},s):{};o[e.item]=t,e.index&&(o[e.index]=i);e.collection&&(o[e.collection]=r);return o}(a,i,o,l,s()),d=function(e,t,n,i){let r=h(t,e,"bind").filter((e=>"key"===e.value))[0];return r?e.evaluateReturnExpression(t,r.expression,(()=>i)):n}(e,t,o,u),f=function(e,t){if(!e)return;if(void 0===e.__x_for_key)return;if(e.__x_for_key===t)return e;let n=e;for(;n;){if(n.__x_for_key===t)return n.parentElement.insertBefore(n,e);n=!(!n.nextElementSibling||void 0===n.nextElementSibling.__x_for_key)&&n.nextElementSibling;}}(c.nextElementSibling,d);f?(delete f.__x_for_key,f.__x_for=u,e.updateElements(f,(()=>f.__x_for))):(f=function(e,t){let n=document.importNode(e.content,!0);return t.parentElement.insertBefore(n,t.nextElementSibling),t.nextElementSibling}(t,c),w(f,(()=>{}),(()=>{}),e,r),f.__x_for=u,e.initializeElements(f,(()=>f.__x_for))),c=f,c.__x_for_key=d;})),function(e,t){var n=!(!e.nextElementSibling||void 0===e.nextElementSibling.__x_for_key)&&e.nextElementSibling;for(;n;){let e=n,i=n.nextElementSibling;E(n,(()=>{e.remove();}),(()=>{}),t),n=!(!i||void 0===i.__x_for_key)&&i;}}(c,e);}function j(e){let t=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,n=e.match(/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/);if(!n)return;let i={};i.items=n[2].trim();let r=n[1].trim().replace(/^\(|\)$/g,""),s=r.match(t);return s?(i.item=r.replace(t,"").trim(),i.index=s[1].trim(),s[2]&&(i.collection=s[2].trim())):i.item=r,i}function T(e,t,n,r,o,l,c){var u=e.evaluateReturnExpression(t,r,o);if("value"===n){if(xe.ignoreFocusedForValueBinding&&document.activeElement.isSameNode(t))return;if(void 0===u&&r.match(/\./)&&(u=""),"radio"===t.type)void 0===t.attributes.value&&"bind"===l?t.value=u:"bind"!==l&&(t.checked=s(t.value,u));else if("checkbox"===t.type)"boolean"==typeof u||[null,void 0].includes(u)||"bind"!==l?"bind"!==l&&(Array.isArray(u)?t.checked=u.some((e=>s(e,t.value))):t.checked=!!u):t.value=String(u);else if("SELECT"===t.tagName)!function(e,t){const n=[].concat(t).map((e=>e+""));Array.from(e.options).forEach((e=>{e.selected=n.includes(e.value||e.text);}));}(t,u);else {if(t.value===u)return;t.value=u;}}else if("class"===n)if(Array.isArray(u)){const e=t.__x_original_classes||[];t.setAttribute("class",i(e.concat(u)).join(" "));}else if("object"==typeof u){Object.keys(u).sort(((e,t)=>u[e]-u[t])).forEach((e=>{u[e]?b(e).forEach((e=>t.classList.add(e))):b(e).forEach((e=>t.classList.remove(e)));}));}else {const e=t.__x_original_classes||[],n=u?b(u):[];t.setAttribute("class",i(e.concat(n)).join(" "));}else n=c.includes("camel")?a(n):n,[null,void 0,!1].includes(u)?t.removeAttribute(n):!function(e){return ["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(e)}(n)?L(t,n,u):L(t,n,n);}function L(e,t,n){e.getAttribute(t)!=n&&e.setAttribute(t,n);}function N(e,t,n,i,r,s={}){const o={passive:i.includes("passive")};if(i.includes("camel")&&(n=a(n)),i.includes("away")){let a=l=>{t.contains(l.target)||t.offsetWidth<1&&t.offsetHeight<1||(z(e,r,l,s),i.includes("once")&&document.removeEventListener(n,a,o));};document.addEventListener(n,a,o);}else {let a=i.includes("window")?window:i.includes("document")?document:t,l=c=>{if(a!==window&&a!==document||document.body.contains(t)){if(!(function(e){return ["keydown","keyup"].includes(e)}(n)&&function(e,t){let n=t.filter((e=>!["window","document","prevent","stop"].includes(e)));if(n.includes("debounce")){let e=n.indexOf("debounce");n.splice(e,P((n[e+1]||"invalid-wait").split("ms")[0])?2:1);}if(0===n.length)return !1;if(1===n.length&&n[0]===R(e.key))return !1;const i=["ctrl","shift","alt","meta","cmd","super"].filter((e=>n.includes(e)));if(n=n.filter((e=>!i.includes(e))),i.length>0){if(i.filter((t=>("cmd"!==t&&"super"!==t||(t="meta"),e[t+"Key"]))).length===i.length&&n[0]===R(e.key))return !1}return !0}(c,i)||(i.includes("prevent")&&c.preventDefault(),i.includes("stop")&&c.stopPropagation(),i.includes("self")&&c.target!==t))){z(e,r,c,s).then((e=>{!1===e?c.preventDefault():i.includes("once")&&a.removeEventListener(n,l,o);}));}}else a.removeEventListener(n,l,o);};if(i.includes("debounce")){let e=i[i.indexOf("debounce")+1]||"invalid-wait",t=P(e.split("ms")[0])?Number(e.split("ms")[0]):250;l=c(l,t);}a.addEventListener(n,l,o);}}function z(e,t,i,r){return e.evaluateCommandExpression(i.target,t,(()=>n(n({},r()),{},{$event:i})))}function R(e){switch(e){case"/":return "slash";case" ":case"Spacebar":return "space";default:return e&&e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}}function F(e,t,n){return "radio"===e.type&&(e.hasAttribute("name")||e.setAttribute("name",n)),(n,i)=>{if(n instanceof CustomEvent&&n.detail)return n.detail;if("checkbox"===e.type){if(Array.isArray(i)){const e=t.includes("number")?I(n.target.value):n.target.value;return n.target.checked?i.concat([e]):i.filter((t=>!s(t,e)))}return n.target.checked}if("select"===e.tagName.toLowerCase()&&e.multiple)return t.includes("number")?Array.from(n.target.selectedOptions).map((e=>I(e.value||e.text))):Array.from(n.target.selectedOptions).map((e=>e.value||e.text));{const e=n.target.value;return t.includes("number")?I(e):t.includes("trim")?e.trim():e}}}function I(e){const t=e?parseFloat(e):null;return P(t)?t:e}const{isArray:M}=Array,{getPrototypeOf:B,create:q,defineProperty:U,defineProperties:W,isExtensible:K,getOwnPropertyDescriptor:G,getOwnPropertyNames:H,getOwnPropertySymbols:V,preventExtensions:Z,hasOwnProperty:J}=Object,{push:Q,concat:X,map:Y}=Array.prototype;function ee(e){return void 0===e}function te(e){return "function"==typeof e}const ne=new WeakMap;function ie(e,t){ne.set(e,t);}const re=e=>ne.get(e)||e;function se(e,t){return e.valueIsObservable(t)?e.getProxy(t):t}function oe(e,t,n){X.call(H(n),V(n)).forEach((i=>{let r=G(n,i);r.configurable||(r=ve(e,r,se)),U(t,i,r);})),Z(t);}class ae{constructor(e,t){this.originalTarget=t,this.membrane=e;}get(e,t){const{originalTarget:n,membrane:i}=this,r=n[t],{valueObserved:s}=i;return s(n,t),i.getProxy(r)}set(e,t,n){const{originalTarget:i,membrane:{valueMutated:r}}=this;return i[t]!==n?(i[t]=n,r(i,t)):"length"===t&&M(i)&&r(i,t),!0}deleteProperty(e,t){const{originalTarget:n,membrane:{valueMutated:i}}=this;return delete n[t],i(n,t),!0}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:i}}=this;return i(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return X.call(H(t),V(t))}isExtensible(e){const t=K(e);if(!t)return t;const{originalTarget:n,membrane:i}=this,r=K(n);return r||oe(i,e,n),r}setPrototypeOf(e,t){}getPrototypeOf(e){const{originalTarget:t}=this;return B(t)}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:i}=this,{valueObserved:r}=this.membrane;r(n,t);let s=G(n,t);if(ee(s))return s;const o=G(e,t);return ee(o)?(s=ve(i,s,se),s.configurable||U(e,t,s),s):o}preventExtensions(e){const{originalTarget:t,membrane:n}=this;return oe(n,e,t),Z(t),!0}defineProperty(e,t,n){const{originalTarget:i,membrane:r}=this,{valueMutated:s}=r,{configurable:o}=n;if(J.call(n,"writable")&&!J.call(n,"value")){const e=G(i,t);n.value=e.value;}return U(i,t,function(e){return J.call(e,"value")&&(e.value=re(e.value)),e}(n)),!1===o&&U(e,t,ve(r,n,se)),s(i,t),!0}}function le(e,t){return e.valueIsObservable(t)?e.getReadOnlyProxy(t):t}class ce{constructor(e,t){this.originalTarget=t,this.membrane=e;}get(e,t){const{membrane:n,originalTarget:i}=this,r=i[t],{valueObserved:s}=n;return s(i,t),n.getReadOnlyProxy(r)}set(e,t,n){return !1}deleteProperty(e,t){return !1}apply(e,t,n){}construct(e,t,n){}has(e,t){const{originalTarget:n,membrane:{valueObserved:i}}=this;return i(n,t),t in n}ownKeys(e){const{originalTarget:t}=this;return X.call(H(t),V(t))}setPrototypeOf(e,t){}getOwnPropertyDescriptor(e,t){const{originalTarget:n,membrane:i}=this,{valueObserved:r}=i;r(n,t);let s=G(n,t);if(ee(s))return s;const o=G(e,t);return ee(o)?(s=ve(i,s,le),J.call(s,"set")&&(s.set=void 0),s.configurable||U(e,t,s),s):o}preventExtensions(e){return !1}defineProperty(e,t,n){return !1}}function ue(e){let t=void 0;return M(e)?t=[]:"object"==typeof e&&(t={}),t}const de=Object.prototype;function fe(e){if(null===e)return !1;if("object"!=typeof e)return !1;if(M(e))return !0;const t=B(e);return t===de||null===t||null===B(t)}const me=(e,t)=>{},pe=(e,t)=>{},he=e=>e;function ve(e,t,n){const{set:i,get:r}=t;return J.call(t,"value")?t.value=n(e,t.value):(ee(r)||(t.get=function(){return n(e,r.call(re(this)))}),ee(i)||(t.set=function(t){i.call(re(this),e.unwrapProxy(t));})),t}class ye{constructor(e){if(this.valueDistortion=he,this.valueMutated=pe,this.valueObserved=me,this.valueIsObservable=fe,this.objectGraph=new WeakMap,!ee(e)){const{valueDistortion:t,valueMutated:n,valueObserved:i,valueIsObservable:r}=e;this.valueDistortion=te(t)?t:he,this.valueMutated=te(n)?n:pe,this.valueObserved=te(i)?i:me,this.valueIsObservable=te(r)?r:fe;}}getProxy(e){const t=re(e),n=this.valueDistortion(t);if(this.valueIsObservable(n)){const i=this.getReactiveState(t,n);return i.readOnly===e?e:i.reactive}return n}getReadOnlyProxy(e){e=re(e);const t=this.valueDistortion(e);return this.valueIsObservable(t)?this.getReactiveState(e,t).readOnly:t}unwrapProxy(e){return re(e)}getReactiveState(e,t){const{objectGraph:n}=this;let i=n.get(t);if(i)return i;const r=this;return i={get reactive(){const n=new ae(r,t),i=new Proxy(ue(t),n);return ie(i,e),U(this,"reactive",{value:i}),i},get readOnly(){const n=new ce(r,t),i=new Proxy(ue(t),n);return ie(i,e),U(this,"readOnly",{value:i}),i}},n.set(t,i),i}}class be{constructor(e,t=null){this.$el=e;const n=this.$el.getAttribute("x-data"),i=""===n?"{}":n,r=this.$el.getAttribute("x-init");let s={$el:this.$el},o=t?t.$el:this.$el;Object.entries(xe.magicProperties).forEach((([e,t])=>{Object.defineProperty(s,"$"+e,{get:function(){return t(o)}});})),this.unobservedData=t?t.getUnobservedData():f(e,i,s);let{membrane:a,data:l}=this.wrapDataInObservable(this.unobservedData);var c;this.$data=l,this.membrane=a,this.unobservedData.$el=this.$el,this.unobservedData.$refs=this.getRefsProxy(),this.nextTickStack=[],this.unobservedData.$nextTick=e=>{this.nextTickStack.push(e);},this.watchers={},this.unobservedData.$watch=(e,t)=>{this.watchers[e]||(this.watchers[e]=[]),this.watchers[e].push(t);},Object.entries(xe.magicProperties).forEach((([e,t])=>{Object.defineProperty(this.unobservedData,"$"+e,{get:function(){return t(o,this.$el)}});})),this.showDirectiveStack=[],this.showDirectiveLastElement,t||xe.onBeforeComponentInitializeds.forEach((e=>e(this))),r&&!t&&(this.pauseReactivity=!0,c=this.evaluateReturnExpression(this.$el,r),this.pauseReactivity=!1),this.initializeElements(this.$el),this.listenForNewElementsToInitialize(),"function"==typeof c&&c.call(this.$data),t||setTimeout((()=>{xe.onComponentInitializeds.forEach((e=>e(this)));}),0);}getUnobservedData(){return function(e,t){let n=e.unwrapProxy(t),i={};return Object.keys(n).forEach((e=>{["$el","$refs","$nextTick","$watch"].includes(e)||(i[e]=n[e]);})),i}(this.membrane,this.$data)}wrapDataInObservable(e){var t=this;let n=c((function(){t.updateElements(t.$el);}),0);return function(e,t){let n=new ye({valueMutated(e,n){t(e,n);}});return {data:n.getProxy(e),membrane:n}}(e,((e,i)=>{t.watchers[i]?t.watchers[i].forEach((t=>t(e[i]))):Array.isArray(e)?Object.keys(t.watchers).forEach((n=>{let r=n.split(".");"length"!==i&&r.reduce(((i,r)=>(Object.is(e,i[r])&&t.watchers[n].forEach((t=>t(e))),i[r])),t.unobservedData);})):Object.keys(t.watchers).filter((e=>e.includes("."))).forEach((n=>{let r=n.split(".");i===r[r.length-1]&&r.reduce(((r,s)=>(Object.is(e,r)&&t.watchers[n].forEach((t=>t(e[i]))),r[s])),t.unobservedData);})),t.pauseReactivity||n();}))}walkAndSkipNestedComponents(e,t,n=(()=>{})){l(e,(e=>e.hasAttribute("x-data")&&!e.isSameNode(this.$el)?(e.__x||n(e),!1):t(e)));}initializeElements(e,t=(()=>{})){this.walkAndSkipNestedComponents(e,(e=>void 0===e.__x_for_key&&(void 0===e.__x_inserted_me&&void this.initializeElement(e,t))),(e=>{e.__x=new be(e);})),this.executeAndClearRemainingShowDirectiveStack(),this.executeAndClearNextTickStack(e);}initializeElement(e,t){e.hasAttribute("class")&&h(e,this).length>0&&(e.__x_original_classes=b(e.getAttribute("class"))),this.registerListeners(e,t),this.resolveBoundAttributes(e,!0,t);}updateElements(e,t=(()=>{})){this.walkAndSkipNestedComponents(e,(e=>{if(void 0!==e.__x_for_key&&!e.isSameNode(this.$el))return !1;this.updateElement(e,t);}),(e=>{e.__x=new be(e);})),this.executeAndClearRemainingShowDirectiveStack(),this.executeAndClearNextTickStack(e);}executeAndClearNextTickStack(e){e===this.$el&&this.nextTickStack.length>0&&requestAnimationFrame((()=>{for(;this.nextTickStack.length>0;)this.nextTickStack.shift()();}));}executeAndClearRemainingShowDirectiveStack(){this.showDirectiveStack.reverse().map((e=>new Promise(((t,n)=>{e(t,n);})))).reduce(((e,t)=>e.then((()=>t.then((e=>{e();}))))),Promise.resolve((()=>{}))).catch((e=>{if(e!==_)throw e})),this.showDirectiveStack=[],this.showDirectiveLastElement=void 0;}updateElement(e,t){this.resolveBoundAttributes(e,!1,t);}registerListeners(e,t){h(e,this).forEach((({type:i,value:r,modifiers:s,expression:o})=>{switch(i){case"on":N(this,e,r,s,o,t);break;case"model":!function(e,t,i,r,s){var o="select"===t.tagName.toLowerCase()||["checkbox","radio"].includes(t.type)||i.includes("lazy")?"change":"input";N(e,t,o,i,`${r} = rightSideOfExpression($event, ${r})`,(()=>n(n({},s()),{},{rightSideOfExpression:F(t,i,r)})));}(this,e,s,o,t);}}));}resolveBoundAttributes(e,t=!1,n){let i=h(e,this);i.forEach((({type:r,value:s,modifiers:a,expression:l})=>{switch(r){case"model":T(this,e,"value",l,n,r,a);break;case"bind":if("template"===e.tagName.toLowerCase()&&"key"===s)return;T(this,e,s,l,n,r,a);break;case"text":var c=this.evaluateReturnExpression(e,l,n);!function(e,t,n){void 0===t&&n.match(/\./)&&(t=""),e.textContent=t;}(e,c,l);break;case"html":!function(e,t,n,i){t.innerHTML=e.evaluateReturnExpression(t,n,i);}(this,e,l,n);break;case"show":c=this.evaluateReturnExpression(e,l,n);!function(e,t,n,i,r=!1){const s=()=>{t.style.display="none",t.__x_is_shown=!1;},o=()=>{1===t.style.length&&"none"===t.style.display?t.removeAttribute("style"):t.style.removeProperty("display"),t.__x_is_shown=!0;};if(!0===r)return void(n?o():s());const a=(i,r)=>{n?(("none"===t.style.display||t.__x_transition)&&w(t,(()=>{o();}),r,e),i((()=>{}))):"none"!==t.style.display?E(t,(()=>{i((()=>{s();}));}),r,e):i((()=>{}));};i.includes("immediate")?a((e=>e()),(()=>{})):(e.showDirectiveLastElement&&!e.showDirectiveLastElement.contains(t)&&e.executeAndClearRemainingShowDirectiveStack(),e.showDirectiveStack.push(a),e.showDirectiveLastElement=t);}(this,e,c,a,t);break;case"if":if(i.some((e=>"for"===e.type)))return;c=this.evaluateReturnExpression(e,l,n);!function(e,t,n,i,r){o(t,"x-if");const s=t.nextElementSibling&&!0===t.nextElementSibling.__x_inserted_me;if(!n||s&&!t.__x_transition)!n&&s&&E(t.nextElementSibling,(()=>{t.nextElementSibling.remove();}),(()=>{}),e,i);else {const n=document.importNode(t.content,!0);t.parentElement.insertBefore(n,t.nextElementSibling),w(t.nextElementSibling,(()=>{}),(()=>{}),e,i),e.initializeElements(t.nextElementSibling,r),t.nextElementSibling.__x_inserted_me=!0;}}(this,e,c,t,n);break;case"for":D(this,e,l,t,n);break;case"cloak":e.removeAttribute("x-cloak");}}));}evaluateReturnExpression(e,t,i=(()=>{})){return f(e,t,this.$data,n(n({},i()),{},{$dispatch:this.getDispatchFunction(e)}))}evaluateCommandExpression(e,t,i=(()=>{})){return function(e,t,n,i={}){return d((()=>{if("function"==typeof t)return Promise.resolve(t.call(n,i.$event));let e=Function;if(e=Object.getPrototypeOf((async function(){})).constructor,Object.keys(n).includes(t)){let e=new Function(["dataContext",...Object.keys(i)],`with(dataContext) { return ${t} }`)(n,...Object.values(i));return "function"==typeof e?Promise.resolve(e.call(n,i.$event)):Promise.resolve()}return Promise.resolve(new e(["dataContext",...Object.keys(i)],`with(dataContext) { ${t} }`)(n,...Object.values(i)))}),{el:e,expression:t})}(e,t,this.$data,n(n({},i()),{},{$dispatch:this.getDispatchFunction(e)}))}getDispatchFunction(e){return (t,n={})=>{e.dispatchEvent(new CustomEvent(t,{detail:n,bubbles:!0}));}}listenForNewElementsToInitialize(){const e=this.$el;new MutationObserver((e=>{for(let t=0;t<e.length;t++){const n=e[t].target.closest("[x-data]");if(n&&n.isSameNode(this.$el)){if("attributes"===e[t].type&&"x-data"===e[t].attributeName){const n=e[t].target.getAttribute("x-data")||"{}",i=f(this.$el,n,{$el:this.$el});Object.keys(i).forEach((e=>{this.$data[e]!==i[e]&&(this.$data[e]=i[e]);}));}e[t].addedNodes.length>0&&e[t].addedNodes.forEach((e=>{1!==e.nodeType||e.__x_inserted_me||(!e.matches("[x-data]")||e.__x?this.initializeElements(e):e.__x=new be(e));}));}}})).observe(e,{childList:!0,attributes:!0,subtree:!0});}getRefsProxy(){var e=this;return new Proxy({},{get(t,n){return "$isAlpineProxy"===n||(e.walkAndSkipNestedComponents(e.$el,(e=>{e.hasAttribute("x-ref")&&e.getAttribute("x-ref")===n&&(i=e);})),i);var i;}})}}const xe={version:"2.8.0",pauseMutationObserver:!1,magicProperties:{},onComponentInitializeds:[],onBeforeComponentInitializeds:[],ignoreFocusedForValueBinding:!1,start:async function(){r()||await new Promise((e=>{"loading"==document.readyState?document.addEventListener("DOMContentLoaded",e):e();})),this.discoverComponents((e=>{this.initializeComponent(e);})),document.addEventListener("turbolinks:load",(()=>{this.discoverUninitializedComponents((e=>{this.initializeComponent(e);}));})),this.listenForNewUninitializedComponentsAtRunTime();},discoverComponents:function(e){document.querySelectorAll("[x-data]").forEach((t=>{e(t);}));},discoverUninitializedComponents:function(e,t=null){const n=(t||document).querySelectorAll("[x-data]");Array.from(n).filter((e=>void 0===e.__x)).forEach((t=>{e(t);}));},listenForNewUninitializedComponentsAtRunTime:function(){const e=document.querySelector("body");new MutationObserver((e=>{if(!this.pauseMutationObserver)for(let t=0;t<e.length;t++)e[t].addedNodes.length>0&&e[t].addedNodes.forEach((e=>{1===e.nodeType&&(e.parentElement&&e.parentElement.closest("[x-data]")||this.discoverUninitializedComponents((e=>{this.initializeComponent(e);}),e.parentElement));}));})).observe(e,{childList:!0,attributes:!0,subtree:!0});},initializeComponent:function(e){if(!e.__x)try{e.__x=new be(e);}catch(e){setTimeout((()=>{throw e}),0);}},clone:function(e,t){t.__x||(t.__x=new be(t,e));},addMagicProperty:function(e,t){this.magicProperties[e]=t;},onComponentInitialized:function(e){this.onComponentInitializeds.push(e);},onBeforeComponentInitialized:function(e){this.onBeforeComponentInitializeds.push(e);}};return r()||(window.Alpine=xe,window.deferLoadingAlpine?window.deferLoadingAlpine((function(){window.Alpine.start();})):window.Alpine.start()),xe}));
/**
 * @popperjs/core v2.5.4 - MIT License
 */
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).Popper={});}(window,(function(e){function t(e){return {width:(e=e.getBoundingClientRect()).width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function n(e){return "[object Window]"!==e.toString()?(e=e.ownerDocument)&&e.defaultView||window:e}function r(e){return {scrollLeft:(e=n(e)).pageXOffset,scrollTop:e.pageYOffset}}function o(e){return e instanceof n(e).Element||e instanceof Element}function i(e){return e instanceof n(e).HTMLElement||e instanceof HTMLElement}function a(e){return e?(e.nodeName||"").toLowerCase():null}function s(e){return ((o(e)?e.ownerDocument:e.document)||window.document).documentElement}function f(e){return t(s(e)).left+r(e).scrollLeft}function c(e){return n(e).getComputedStyle(e)}function p(e){return e=c(e),/auto|scroll|overlay|hidden/.test(e.overflow+e.overflowY+e.overflowX)}function l(e,o,c){void 0===c&&(c=!1);var l=s(o);e=t(e);var u=i(o),d={scrollLeft:0,scrollTop:0},m={x:0,y:0};return (u||!u&&!c)&&(("body"!==a(o)||p(l))&&(d=o!==n(o)&&i(o)?{scrollLeft:o.scrollLeft,scrollTop:o.scrollTop}:r(o)),i(o)?((m=t(o)).x+=o.clientLeft,m.y+=o.clientTop):l&&(m.x=f(l))),{x:e.left+d.scrollLeft-m.x,y:e.top+d.scrollTop-m.y,width:e.width,height:e.height}}function u(e){return {x:e.offsetLeft,y:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight}}function d(e){return "html"===a(e)?e:e.assignedSlot||e.parentNode||e.host||s(e)}function m(e,t){void 0===t&&(t=[]);var r=function e(t){return 0<=["html","body","#document"].indexOf(a(t))?t.ownerDocument.body:i(t)&&p(t)?t:e(d(t))}(e);e="body"===a(r);var o=n(r);return r=e?[o].concat(o.visualViewport||[],p(r)?r:[]):r,t=t.concat(r),e?t:t.concat(m(d(r)))}function h(e){if(!i(e)||"fixed"===c(e).position)return null;if(e=e.offsetParent){var t=s(e);if("body"===a(e)&&"static"===c(e).position&&"static"!==c(t).position)return t}return e}function g(e){for(var t=n(e),r=h(e);r&&0<=["table","td","th"].indexOf(a(r))&&"static"===c(r).position;)r=h(r);if(r&&"body"===a(r)&&"static"===c(r).position)return t;if(!r)e:{for(e=d(e);i(e)&&0>["html","body"].indexOf(a(e));){if("none"!==(r=c(e)).transform||"none"!==r.perspective||r.willChange&&"auto"!==r.willChange){r=e;break e}e=e.parentNode;}r=null;}return r||t}function v(e){var t=new Map,n=new Set,r=[];return e.forEach((function(e){t.set(e.name,e);})),e.forEach((function(e){n.has(e.name)||function e(o){n.add(o.name),[].concat(o.requires||[],o.requiresIfExists||[]).forEach((function(r){n.has(r)||(r=t.get(r))&&e(r);})),r.push(o);}(e);})),r}function b(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e());}));}))),t}}function y(e){return e.split("-")[0]}function O(e,t){var r,o=t.getRootNode&&t.getRootNode();if(e.contains(t))return !0;if((r=o)&&(r=o instanceof(r=n(o).ShadowRoot)||o instanceof ShadowRoot),r)do{if(t&&e.isSameNode(t))return !0;t=t.parentNode||t.host;}while(t);return !1}function w(e){return Object.assign(Object.assign({},e),{},{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function x(e,o){if("viewport"===o){o=n(e);var a=s(e);o=o.visualViewport;var p=a.clientWidth;a=a.clientHeight;var l=0,u=0;o&&(p=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(l=o.offsetLeft,u=o.offsetTop)),e=w(e={width:p,height:a,x:l+f(e),y:u});}else i(o)?((e=t(o)).top+=o.clientTop,e.left+=o.clientLeft,e.bottom=e.top+o.clientHeight,e.right=e.left+o.clientWidth,e.width=o.clientWidth,e.height=o.clientHeight,e.x=e.left,e.y=e.top):(u=s(e),e=s(u),l=r(u),o=u.ownerDocument.body,p=Math.max(e.scrollWidth,e.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=Math.max(e.scrollHeight,e.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),u=-l.scrollLeft+f(u),l=-l.scrollTop,"rtl"===c(o||e).direction&&(u+=Math.max(e.clientWidth,o?o.clientWidth:0)-p),e=w({width:p,height:a,x:u,y:l}));return e}function j(e,t,n){return t="clippingParents"===t?function(e){var t=m(d(e)),n=0<=["absolute","fixed"].indexOf(c(e).position)&&i(e)?g(e):e;return o(n)?t.filter((function(e){return o(e)&&O(e,n)&&"body"!==a(e)})):[]}(e):[].concat(t),(n=(n=[].concat(t,[n])).reduce((function(t,n){return n=x(e,n),t.top=Math.max(n.top,t.top),t.right=Math.min(n.right,t.right),t.bottom=Math.min(n.bottom,t.bottom),t.left=Math.max(n.left,t.left),t}),x(e,n[0]))).width=n.right-n.left,n.height=n.bottom-n.top,n.x=n.left,n.y=n.top,n}function M(e){return 0<=["top","bottom"].indexOf(e)?"x":"y"}function E(e){var t=e.reference,n=e.element,r=(e=e.placement)?y(e):null;e=e?e.split("-")[1]:null;var o=t.x+t.width/2-n.width/2,i=t.y+t.height/2-n.height/2;switch(r){case"top":o={x:o,y:t.y-n.height};break;case"bottom":o={x:o,y:t.y+t.height};break;case"right":o={x:t.x+t.width,y:i};break;case"left":o={x:t.x-n.width,y:i};break;default:o={x:t.x,y:t.y};}if(null!=(r=r?M(r):null))switch(i="y"===r?"height":"width",e){case"start":o[r]=Math.floor(o[r])-Math.floor(t[i]/2-n[i]/2);break;case"end":o[r]=Math.floor(o[r])+Math.ceil(t[i]/2-n[i]/2);}return o}function D(e){return Object.assign(Object.assign({},{top:0,right:0,bottom:0,left:0}),e)}function P(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function L(e,n){void 0===n&&(n={});var r=n;n=void 0===(n=r.placement)?e.placement:n;var i=r.boundary,a=void 0===i?"clippingParents":i,f=void 0===(i=r.rootBoundary)?"viewport":i;i=void 0===(i=r.elementContext)?"popper":i;var c=r.altBoundary,p=void 0!==c&&c;r=D("number"!=typeof(r=void 0===(r=r.padding)?0:r)?r:P(r,T));var l=e.elements.reference;c=e.rects.popper,a=j(o(p=e.elements[p?"popper"===i?"reference":"popper":i])?p:p.contextElement||s(e.elements.popper),a,f),p=E({reference:f=t(l),element:c,strategy:"absolute",placement:n}),c=w(Object.assign(Object.assign({},c),p)),f="popper"===i?c:f;var u={top:a.top-f.top+r.top,bottom:f.bottom-a.bottom+r.bottom,left:a.left-f.left+r.left,right:f.right-a.right+r.right};if(e=e.modifiersData.offset,"popper"===i&&e){var d=e[n];Object.keys(u).forEach((function(e){var t=0<=["right","bottom"].indexOf(e)?1:-1,n=0<=["top","bottom"].indexOf(e)?"y":"x";u[e]+=d[n]*t;}));}return u}function k(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return !t.some((function(e){return !(e&&"function"==typeof e.getBoundingClientRect)}))}function B(e){void 0===e&&(e={});var t=e.defaultModifiers,n=void 0===t?[]:t,r=void 0===(e=e.defaultOptions)?V:e;return function(e,t,i){function a(){f.forEach((function(e){return e()})),f=[];}void 0===i&&(i=r);var s={placement:"bottom",orderedModifiers:[],options:Object.assign(Object.assign({},V),r),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},f=[],c=!1,p={state:s,setOptions:function(i){return a(),s.options=Object.assign(Object.assign(Object.assign({},r),s.options),i),s.scrollParents={reference:o(e)?m(e):e.contextElement?m(e.contextElement):[],popper:m(t)},i=function(e){var t=v(e);return N.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign(Object.assign(Object.assign({},n),t),{},{options:Object.assign(Object.assign({},n.options),t.options),data:Object.assign(Object.assign({},n.data),t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,s.options.modifiers))),s.orderedModifiers=i.filter((function(e){return e.enabled})),s.orderedModifiers.forEach((function(e){var t=e.name,n=e.options;n=void 0===n?{}:n,"function"==typeof(e=e.effect)&&(t=e({state:s,name:t,instance:p,options:n}),f.push(t||function(){}));})),p.update()},forceUpdate:function(){if(!c){var e=s.elements,t=e.reference;if(k(t,e=e.popper))for(s.rects={reference:l(t,g(e),"fixed"===s.options.strategy),popper:u(e)},s.reset=!1,s.placement=s.options.placement,s.orderedModifiers.forEach((function(e){return s.modifiersData[e.name]=Object.assign({},e.data)})),t=0;t<s.orderedModifiers.length;t++)if(!0===s.reset)s.reset=!1,t=-1;else {var n=s.orderedModifiers[t];e=n.fn;var r=n.options;r=void 0===r?{}:r,n=n.name,"function"==typeof e&&(s=e({state:s,options:r,name:n,instance:p})||s);}}},update:b((function(){return new Promise((function(e){p.forceUpdate(),e(s);}))})),destroy:function(){a(),c=!0;}};return k(e,t)?(p.setOptions(i).then((function(e){!c&&i.onFirstUpdate&&i.onFirstUpdate(e);})),p):p}}function W(e){var t,r=e.popper,o=e.popperRect,i=e.placement,a=e.offsets,f=e.position,c=e.gpuAcceleration,p=e.adaptive,l=window.devicePixelRatio||1;e=Math.round(a.x*l)/l||0,l=Math.round(a.y*l)/l||0;var u=a.hasOwnProperty("x");a=a.hasOwnProperty("y");var d,m="left",h="top",v=window;if(p){var b=g(r);b===n(r)&&(b=s(r)),"top"===i&&(h="bottom",l-=b.clientHeight-o.height,l*=c?1:-1),"left"===i&&(m="right",e-=b.clientWidth-o.width,e*=c?1:-1);}return r=Object.assign({position:f},p&&z),c?Object.assign(Object.assign({},r),{},((d={})[h]=a?"0":"",d[m]=u?"0":"",d.transform=2>(v.devicePixelRatio||1)?"translate("+e+"px, "+l+"px)":"translate3d("+e+"px, "+l+"px, 0)",d)):Object.assign(Object.assign({},r),{},((t={})[h]=a?l+"px":"",t[m]=u?e+"px":"",t.transform="",t))}function A(e){return e.replace(/left|right|bottom|top/g,(function(e){return G[e]}))}function H(e){return e.replace(/start|end/g,(function(e){return J[e]}))}function R(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function S(e){return ["top","right","bottom","left"].some((function(t){return 0<=e[t]}))}var T=["top","bottom","right","left"],q=T.reduce((function(e,t){return e.concat([t+"-start",t+"-end"])}),[]),C=[].concat(T,["auto"]).reduce((function(e,t){return e.concat([t,t+"-start",t+"-end"])}),[]),N="beforeRead read afterRead beforeMain main afterMain beforeWrite write afterWrite".split(" "),V={placement:"bottom",modifiers:[],strategy:"absolute"},I={passive:!0},_={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,o=(e=e.options).scroll,i=void 0===o||o,a=void 0===(e=e.resize)||e,s=n(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach((function(e){e.addEventListener("scroll",r.update,I);})),a&&s.addEventListener("resize",r.update,I),function(){i&&f.forEach((function(e){e.removeEventListener("scroll",r.update,I);})),a&&s.removeEventListener("resize",r.update,I);}},data:{}},U={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state;t.modifiersData[e.name]=E({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement});},data:{}},z={top:"auto",right:"auto",bottom:"auto",left:"auto"},F={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options;e=void 0===(e=n.gpuAcceleration)||e,n=void 0===(n=n.adaptive)||n,e={placement:y(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:e},null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign(Object.assign({},t.styles.popper),W(Object.assign(Object.assign({},e),{},{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:n})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign(Object.assign({},t.styles.arrow),W(Object.assign(Object.assign({},e),{},{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1})))),t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-placement":t.placement});},data:{}},X={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];i(o)&&a(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t);})));}));},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{};e=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{}),i(r)&&a(r)&&(Object.assign(r.style,e),Object.keys(o).forEach((function(e){r.removeAttribute(e);})));}));}},requires:["computeStyles"]},Y={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.name,r=void 0===(e=e.options.offset)?[0,0]:e,o=(e=C.reduce((function(e,n){var o=t.rects,i=y(n),a=0<=["left","top"].indexOf(i)?-1:1,s="function"==typeof r?r(Object.assign(Object.assign({},o),{},{placement:n})):r;return o=(o=s[0])||0,s=((s=s[1])||0)*a,i=0<=["left","right"].indexOf(i)?{x:s,y:o}:{x:o,y:s},e[n]=i,e}),{}))[t.placement],i=o.x;o=o.y,null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=i,t.modifiersData.popperOffsets.y+=o),t.modifiersData[n]=e;}},G={left:"right",right:"left",bottom:"top",top:"bottom"},J={start:"end",end:"start"},K={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;if(e=e.name,!t.modifiersData[e]._skip){var r=n.mainAxis;r=void 0===r||r;var o=n.altAxis;o=void 0===o||o;var i=n.fallbackPlacements,a=n.padding,s=n.boundary,f=n.rootBoundary,c=n.altBoundary,p=n.flipVariations,l=void 0===p||p,u=n.allowedAutoPlacements;p=y(n=t.options.placement),i=i||(p!==n&&l?function(e){if("auto"===y(e))return [];var t=A(e);return [H(e),t,H(t)]}(n):[A(n)]);var d=[n].concat(i).reduce((function(e,n){return e.concat("auto"===y(n)?function(e,t){void 0===t&&(t={});var n=t.boundary,r=t.rootBoundary,o=t.padding,i=t.flipVariations,a=t.allowedAutoPlacements,s=void 0===a?C:a,f=t.placement.split("-")[1];0===(i=(t=f?i?q:q.filter((function(e){return e.split("-")[1]===f})):T).filter((function(e){return 0<=s.indexOf(e)}))).length&&(i=t);var c=i.reduce((function(t,i){return t[i]=L(e,{placement:i,boundary:n,rootBoundary:r,padding:o})[y(i)],t}),{});return Object.keys(c).sort((function(e,t){return c[e]-c[t]}))}(t,{placement:n,boundary:s,rootBoundary:f,padding:a,flipVariations:l,allowedAutoPlacements:u}):n)}),[]);n=t.rects.reference,i=t.rects.popper;var m=new Map;p=!0;for(var h=d[0],g=0;g<d.length;g++){var v=d[g],b=y(v),O="start"===v.split("-")[1],w=0<=["top","bottom"].indexOf(b),x=w?"width":"height",j=L(t,{placement:v,boundary:s,rootBoundary:f,altBoundary:c,padding:a});if(O=w?O?"right":"left":O?"bottom":"top",n[x]>i[x]&&(O=A(O)),x=A(O),w=[],r&&w.push(0>=j[b]),o&&w.push(0>=j[O],0>=j[x]),w.every((function(e){return e}))){h=v,p=!1;break}m.set(v,w);}if(p)for(r=function(e){var t=d.find((function(t){if(t=m.get(t))return t.slice(0,e).every((function(e){return e}))}));if(t)return h=t,"break"},o=l?3:1;0<o&&"break"!==r(o);o--);t.placement!==h&&(t.modifiersData[e]._skip=!0,t.placement=h,t.reset=!0);}},requiresIfExists:["offset"],data:{_skip:!1}},Q={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options;e=e.name;var r=n.mainAxis,o=void 0===r||r;r=void 0!==(r=n.altAxis)&&r;var i=n.tether;i=void 0===i||i;var a=n.tetherOffset,s=void 0===a?0:a;n=L(t,{boundary:n.boundary,rootBoundary:n.rootBoundary,padding:n.padding,altBoundary:n.altBoundary}),a=y(t.placement);var f=t.placement.split("-")[1],c=!f,p=M(a);a="x"===p?"y":"x";var l=t.modifiersData.popperOffsets,d=t.rects.reference,m=t.rects.popper,h="function"==typeof s?s(Object.assign(Object.assign({},t.rects),{},{placement:t.placement})):s;if(s={x:0,y:0},l){if(o){var v="y"===p?"top":"left",b="y"===p?"bottom":"right",O="y"===p?"height":"width";o=l[p];var w=l[p]+n[v],x=l[p]-n[b],j=i?-m[O]/2:0,E="start"===f?d[O]:m[O];f="start"===f?-m[O]:-d[O],m=t.elements.arrow,m=i&&m?u(m):{width:0,height:0};var D=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0};v=D[v],b=D[b],m=Math.max(0,Math.min(d[O],m[O])),E=c?d[O]/2-j-m-v-h:E-m-v-h,c=c?-d[O]/2+j+m+b+h:f+m+b+h,h=t.elements.arrow&&g(t.elements.arrow),d=t.modifiersData.offset?t.modifiersData.offset[t.placement][p]:0,h=l[p]+E-d-(h?"y"===p?h.clientTop||0:h.clientLeft||0:0),c=l[p]+c-d,i=Math.max(i?Math.min(w,h):w,Math.min(o,i?Math.max(x,c):x)),l[p]=i,s[p]=i-o;}r&&(r=l[a],i=Math.max(r+n["x"===p?"top":"left"],Math.min(r,r-n["x"===p?"bottom":"right"])),l[a]=i,s[a]=i-r),t.modifiersData[e]=s;}},requiresIfExists:["offset"]},Z={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state;e=e.name;var r=n.elements.arrow,o=n.modifiersData.popperOffsets,i=y(n.placement),a=M(i);if(i=0<=["left","right"].indexOf(i)?"height":"width",r&&o){var s=n.modifiersData[e+"#persistent"].padding,f=u(r),c="y"===a?"top":"left",p="y"===a?"bottom":"right",l=n.rects.reference[i]+n.rects.reference[a]-o[a]-n.rects.popper[i];o=o[a]-n.rects.reference[a],l=(r=(r=g(r))?"y"===a?r.clientHeight||0:r.clientWidth||0:0)/2-f[i]/2+(l/2-o/2),i=Math.max(s[c],Math.min(l,r-f[i]-s[p])),n.modifiersData[e]=((t={})[a]=i,t.centerOffset=i-l,t);}},effect:function(e){var t=e.state,n=e.options;e=e.name;var r=n.element;if(r=void 0===r?"[data-popper-arrow]":r,n=void 0===(n=n.padding)?0:n,null!=r){if("string"==typeof r&&!(r=t.elements.popper.querySelector(r)))return;O(t.elements.popper,r)&&(t.elements.arrow=r,t.modifiersData[e+"#persistent"]={padding:D("number"!=typeof n?n:P(n,T))});}},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},$={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state;e=e.name;var n=t.rects.reference,r=t.rects.popper,o=t.modifiersData.preventOverflow,i=L(t,{elementContext:"reference"}),a=L(t,{altBoundary:!0});n=R(i,n),r=R(a,r,o),o=S(n),a=S(r),t.modifiersData[e]={referenceClippingOffsets:n,popperEscapeOffsets:r,isReferenceHidden:o,hasPopperEscaped:a},t.attributes.popper=Object.assign(Object.assign({},t.attributes.popper),{},{"data-popper-reference-hidden":o,"data-popper-escaped":a});}},ee=B({defaultModifiers:[_,U,F,X]}),te=[_,U,F,X,Y,K,Q,Z,$],ne=B({defaultModifiers:te});e.applyStyles=X,e.arrow=Z,e.computeStyles=F,e.createPopper=ne,e.createPopperLite=ee,e.defaultModifiers=te,e.detectOverflow=L,e.eventListeners=_,e.flip=K,e.hide=$,e.offset=Y,e.popperGenerator=B,e.popperOffsets=U,e.preventOverflow=Q,Object.defineProperty(e,"__esModule",{value:!0});}));window.collapse = function () {
  return {
    open: false,
    trigger: {
      ["@click"]() {
        const triggerElement = this.$el.querySelector("[x-spread]", "trigger");
        this.open = !this.open;
        triggerElement.setAttribute("aria-expanded", this.open);
      },
    },
    collapse: {
      ["x-show.transition.opacity.duration.200ms"]() {
        return this.open;
      },
    },
  };
};// Focus an element
// elements - array of dropdown elements
const focus = (elements, focussedIndex) => {
  // Use of % for infinite iterations
  var index = Math.abs(focussedIndex) % elements.length;
  if (index >= 0) {
    elements[index].focus();
  }
};

// Refocus trigger element
const refocusTrigger = (element) => {
  var dialogTrigger = element.querySelector('[x-spread="trigger"]');
  if (dialogTrigger) {
    dialogTrigger.focus();
  }
};

const adjustScrollBar = (isOpen) => {
  const htmlDocument = document.querySelector("html");
  const body = document.querySelector("body");
  if (isOpen) {
    if (checkScrollBar()) {
      body.style.paddingRight = getScrollbarWidth() + "px";
    }
    htmlDocument.style.overflow = "hidden";
  } else {
    body.style.paddingRight = null;
    htmlDocument.style.overflow = null;
  }
};

// From Bootstrap
const checkScrollBar = () => {
  const rect = document.body.getBoundingClientRect();
  const isBodyOverflowing = Math.round(rect.left + rect.right) < window.innerWidth;
  return isBodyOverflowing;
};

const getScrollbarWidth = () => {
  const scrollDiv = document.createElement("div");
  scrollDiv.className = "scrollbar-measure";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};// Todo

var lastOpenedElement = null;

// Normalize itertion counter - Arrow Up
// Check if the focussedIndex reached a negative number
// If so, assign it to (elements.length - 1)
// Else, decrement the counter
function normalizeNegativeCounter(elements, focussedIndex) {
  if (focussedIndex <= 0) return elements.length - 1;
  return focussedIndex - 1;
}

// Toggle aria atrributes based on the dropdown state
function toggleAriaAtrributes(dropdown, open) {
  let trigger = dropdown.querySelector('[x-spread="trigger"]');
  let dropdownList = dropdown.querySelector('[x-spread="dropdown"]');
  if (trigger && dropdownList) {
    if (open) {
      trigger.setAttribute("aria-expanded", true);
      dropdownList.setAttribute("aria-hidden", false);
    } else {
      trigger.setAttribute("aria-expanded", false);
      dropdownList.setAttribute("aria-hidden", true);
    }
  }
}

// Set attributes when the component is initialized
function init(dropdown) {
  let trigger = dropdown.querySelector('[x-spread="trigger"]');
  let dropdownList = dropdown.querySelector('[x-spread="dropdown"]');
  if (trigger && dropdownList) {
    trigger.setAttribute("aria-haspopup", true);
    trigger.setAttribute("aria-expanded", false);
    trigger.setAttribute("aria-controls", dropdown.id);
    dropdownList.setAttribute("role", "menu");
    dropdownList.setAttribute("aria-labelledby", trigger.id);
    dropdownList.setAttribute("aria-hidden", true);
    let dropdownItems = dropdown.querySelectorAll(".dropdown-item");
    if (dropdownItems.length) {
      [...dropdownItems].forEach(function (dropdownItem) {
        dropdownItem.setAttribute("role", "menuitem");
        dropdownItem.setAttribute("tabindex", -1);
      });
    }
    return Popper.createPopper(trigger, dropdownList, {
      placement: dropdownList.getAttribute("x-position") || "bottom-start",
    });
  }
}

// Initialize attribute for all dropdown elements
window.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll('[x-data="dropdown()"]');
  dropdowns.forEach(function (dropdown) {
    init(dropdown);
  });
});

window.dropdown = function () {
  var focussedIndex = -1;
  const DROPDOWN_ITEM_SELECTOR = ".dropdown-item";
  return {
    open: false,
    trigger: {
      ["@keydown.escape"]() {
        this.open = false;
        refocusTrigger(this.$el);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["@click"]() {
        this.open = !this.open;
        focussedIndex = -1;
        if (this.open) {
          lastOpenedElement = this.$el;
        } else {
          refocusTrigger(this.$el);
        }
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["@keydown.arrow-down"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.arrow-up"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = dropdownElements.length - 1;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.home"](e) {
        e.preventDefault();
        focussedIndex = -1;
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.end"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = dropdownElements.length - 1;
        focus(dropdownElements, focussedIndex);
      },
    },
    dropdown: {
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(this.$el);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["x-show.transition.in.duration.100ms.opacity.out.opacity.duration.100ms"]() {
        return this.open;
      },
      ["@click.away"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement);
        toggleAriaAtrributes(this.$el, this.open);
      },
      ["@keydown.arrow-down"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.arrow-up"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = normalizeNegativeCounter(dropdownElements, focussedIndex);
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.home"](e) {
        e.preventDefault();
        focussedIndex = -1;
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex++;
        focus(dropdownElements, focussedIndex);
      },
      ["@keydown.end"](e) {
        e.preventDefault();
        var dropdownElements = this.$el.querySelectorAll(DROPDOWN_ITEM_SELECTOR);
        focussedIndex = dropdownElements.length - 1;
        focus(dropdownElements, focussedIndex);
      },
    },
  };
};const FOCUSABLE_ELEMENTS = ['[href]:not([tabindex^="-"])', 'input:not([disabled]):not([type="hidden"]):not([tabindex^="-"]):not([type="radio"])', 'input[type="radio"]:checked', 'select:not([disabled]):not([tabindex^="-"])', 'textarea:not([disabled]):not([tabindex^="-"])', 'button:not([disabled]):not([tabindex^="-"])', '[tabindex]:not([tabindex^="-"])', '[contenteditable="true"]:not([tabindex^="-"])'];// Data
var lastOpenedElement$1 = null;

// Set attributes when the component is initialized
function init$1(drawer) {
  var trigger = drawer.querySelectorAll('[x-spread="trigger"]');
  if (trigger.length) {
    trigger = trigger[0];
    trigger.setAttribute("aria-haspopup", "dialog");
    var drawer = drawer.querySelectorAll('[x-spread="drawer"]');
    if (drawer.length) {
      drawer = drawer[0];
      drawer.setAttribute("role", "drawer");
      drawer.setAttribute("aria-hidden", true);
      drawer.setAttribute("aria-modal", true);
      drawer.setAttribute("tabindex", -1);
    }
  }
}

// Toggle aria atrributes based on the drawer state
function toggleAriaAtrributes$1(drawer, isOpen) {
  drawer = drawer.querySelectorAll('[x-spread="drawer"]');
  if (drawer.length) {
    drawer = drawer[0];
    if (isOpen) {
      drawer.setAttribute("aria-hidden", false);
    } else {
      drawer.setAttribute("aria-hidden", true);
    }
  }
}

// Initialize attribute for all drawer elements
var drawers = document.querySelectorAll('[x-data="drawer()"]');
drawers.forEach(function (drawer) {
  init$1(drawer);
});

window.drawer = function () {
  var focussedIndex = -1;
  return {
    open: false,
    trigger: {
      ["@click"]() {
        this.open = !this.open;
        if (this.open) {
          lastOpenedElement$1 = this.$el;
          var drawer = this.$el.querySelector('[x-spread="drawer"]');
          var drawerElements = drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
          focussedIndex++;
          focus(drawerElements, focussedIndex);
        } else {
          focussedIndex = -1;
        }
        adjustScrollBar(this.open);
        toggleAriaAtrributes$1(this.$el, this.open);
      },
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement$1);
        adjustScrollBar(this.open);
        toggleAriaAtrributes$1(this.$el, this.open);
      },
    },
    drawer: {
      ["x-show.transition.opacity.duration.100ms"]() {
        const drawerContent = this.$el.querySelector('[x-spread="drawer"]');
        if (this.open) {
          setTimeout(() => drawerContent.classList.add("active"), 100);
        } else {
          drawerContent.classList.remove("active");
        }
        return this.open;
      },
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement$1);
        adjustScrollBar(this.open);
        toggleAriaAtrributes$1(this.$el, this.open);
      },
      ["@keydown.tab"](e) {
        e.preventDefault();
        var drawer = this.$el.querySelector('[x-spread="drawer"]');
        var drawerElements = drawer.querySelectorAll(FOCUSABLE_ELEMENTS);
        focussedIndex++;
        focus(drawerElements, focussedIndex);
      },
      ["@click"](e) {
        if (this.open && e.target.hasAttribute("x-spread")) {
          this.open = false;
          focussedIndex = -1;
          refocusTrigger(lastOpenedElement$1);
          adjustScrollBar(this.open);
          toggleAriaAtrributes$1(this.$el, this.open);
        }
      },
    },
    close() {
      this.open = false;
      focussedIndex = -1;
      refocusTrigger(lastOpenedElement$1);
      adjustScrollBar(this.open);
      toggleAriaAtrributes$1(this.$el, this.open);
    },
  };
};// Todo

// Data
var lastOpenedElement$2 = null;

// Set attributes when the component is initialized
function init$2(dialog) {
  var trigger = dialog.querySelectorAll('[x-spread="trigger"]');
  if (trigger.length) {
    trigger = trigger[0];
    trigger.setAttribute("aria-haspopup", "dialog");
    var dialog = dialog.querySelectorAll('[x-spread="dialog"]');
    if (dialog.length) {
      dialog = dialog[0];
      dialog.setAttribute("role", "dialog");
      dialog.setAttribute("aria-hidden", true);
      dialog.setAttribute("aria-modal", true);
      dialog.setAttribute("tabindex", -1);
    }
  }
}

// Toggle aria atrributes based on the dialog state
function toggleAriaAtrributes$2(dialog, isOpen) {
  dialog = dialog.querySelectorAll('[x-spread="dialog"]');
  if (dialog.length) {
    dialog = dialog[0];
    if (isOpen) {
      dialog.setAttribute("aria-hidden", false);
    } else {
      dialog.setAttribute("aria-hidden", true);
    }
  }
}

// Initialize attribute for all dialog elements
var dialogs = document.querySelectorAll('[x-data="dialog()"]');
dialogs.forEach(function (dialog) {
  init$2(dialog);
});

window.dialog = function () {
  var focussedIndex = -1;
  return {
    open: false,
    trigger: {
      ["@click"]() {
        this.open = !this.open;
        if (this.open) {
          lastOpenedElement$2 = this.$el;
          var dialog = this.$el.querySelector('[x-spread="dialog"]');
          var dialogElements = dialog.querySelectorAll(FOCUSABLE_ELEMENTS);
          focussedIndex++;
          focus(dialogElements, focussedIndex);
        } else {
          focussedIndex = -1;
        }
        adjustScrollBar(this.open);
        toggleAriaAtrributes$2(this.$el, this.open);
      },
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement$2);
        adjustScrollBar(this.open);
        toggleAriaAtrributes$2(this.$el, this.open);
      },
    },
    dialog: {
      ["x-show.transition.opacity.duration.100ms.origin.center.center.scale.105"]() {
        return this.open;
      },
      ["@keydown.escape"]() {
        this.open = false;
        focussedIndex = -1;
        refocusTrigger(lastOpenedElement$2);
        adjustScrollBar(this.open);
        toggleAriaAtrributes$2(this.$el, this.open);
      },
      ["@keydown.tab"](e) {
        e.preventDefault();
        var dialog = this.$el.querySelector('[x-spread="dialog"]');
        var dialogElements = dialog.querySelectorAll(FOCUSABLE_ELEMENTS);
        focussedIndex++;
        focus(dialogElements, focussedIndex);
      },
      ["@click"](e) {
        if (this.open && e.target.hasAttribute("x-spread")) {
          this.open = false;
          focussedIndex = -1;
          refocusTrigger(lastOpenedElement$2);
          adjustScrollBar(this.open);
          toggleAriaAtrributes$2(this.$el, this.open);
        }
      },
    },
    close() {
      this.open = false;
      focussedIndex = -1;
      refocusTrigger(lastOpenedElement$2);
      adjustScrollBar(this.open);
      toggleAriaAtrributes$2(this.$el, this.open);
    },
  };
};const createTooltip = function (element) {
  let tooltipElement = document.createElement("div");
  tooltipElement.setAttribute("class", "tooltip");
  tooltipElement.setAttribute("role", "tooltip");
  tooltipElement.setAttribute("id", "tooltip-kutty");
  tooltipElement.innerText = element.getAttribute("title");
  document.body.append(tooltipElement);
  element.setAttribute("title", "");
  return Popper.createPopper(element, tooltipElement, {
    placement: element.getAttribute("x-position") || "top",
  });
};

const destroyTooltip = function (element) {
  let tooltipElement = document.getElementById("tooltip-kutty");
  let titleContent = tooltipElement.innerText;
  element.setAttribute("title", titleContent);
  return tooltipElement.parentNode.removeChild(tooltipElement);
};


window.tooltip = function () {
  return {
    tooltip: {
      ["@mouseenter"]() {
        createTooltip(this.$el);
      },
      ["@mouseleave"]() {
        destroyTooltip(this.$el);
      },
    },
  };
};}());