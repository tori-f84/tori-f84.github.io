function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode&&t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function d(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function y(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function x(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;for(;e<o.attributes.length;){const t=o.attributes[e];n[t.name]?e++:o.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?d(e):h(e)}function w(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function E(t){return w(t," ")}function _(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let A;function j(t){A=t}function R(){if(!A)throw new Error("Function called outside component initialization");return A}const k=[],P=[],L=[],C=[],N=Promise.resolve();let q=!1;function O(t){L.push(t)}let U=!1;const I=new Set;function z(){if(!U){U=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];j(e),D(e.$$)}for(k.length=0;P.length;)P.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];I.has(e)||(I.add(e),e())}L.length=0}while(k.length);for(;C.length;)C.pop()();q=!1,U=!1,I.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}const B=new Set;let T;function H(){T={r:0,c:[],p:T}}function V(){T.r||o(T.c),T=T.p}function J(t,e){t&&t.i&&(B.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),T.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function G(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const a=t[s],c=e[s];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)o[t]||(n[t]=c[t],o[t]=1);t[s]=c}else for(const t in a)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function K(t){return"object"==typeof t&&null!==t?t:{}}function W(t){t&&t.c()}function F(t,e){t&&t.l(e)}function Y(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),O(()=>{const e=c.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(O)}function X(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(k.push(t),q||(q=!0,N.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,s,a,c,i,l=[-1]){const u=A;j(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;p.ctx=s?s(e,f,(t,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&c(p.ctx[t],p.ctx[t]=o)&&(p.bound[t]&&p.bound[t](o),h&&Q(e,t)),n}):[],p.update(),h=!0,o(p.before_update),p.fragment=!!a&&a(p.ctx),n.target&&(n.hydrate?p.fragment&&p.fragment.l(b(n.target)):p.fragment&&p.fragment.c(),n.intro&&J(e.$$.fragment),Y(e,n.target,n.anchor),z()),j(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(e,n=t){let r;const o=[];function s(t){if(a(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(a,c=t){const i=[a,c];return o.push(i),1===o.length&&(r=n(s)||t),a(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const rt={};function ot(e){let n,r,o,s,a,c,i,p,d,$,y,_,S,A,j;return{c(){n=h("header"),r=h("div"),o=h("div"),s=h("a"),a=h("img"),i=g(),p=h("div"),d=h("a"),$=m("Home"),_=g(),S=h("a"),A=m("About"),this.h()},l(t){n=x(t,"HEADER",{class:!0});var e=b(n);r=x(e,"DIV",{class:!0});var c=b(r);o=x(c,"DIV",{class:!0});var l=b(o);s=x(l,"A",{href:!0,alt:!0});var u=b(s);a=x(u,"IMG",{class:!0,src:!0,alt:!0}),u.forEach(f),i=E(l),p=x(l,"DIV",{class:!0});var h=b(p);d=x(h,"A",{href:!0,class:!0});var m=b(d);$=w(m,"Home"),m.forEach(f),_=E(h),S=x(h,"A",{href:!0,class:!0});var g=b(S);A=w(g,"About"),g.forEach(f),h.forEach(f),l.forEach(f),c.forEach(f),e.forEach(f),this.h()},h(){v(a,"class","h-32 rounded-full"),a.src!==(c="logoWithText_sm.png")&&v(a,"src","logoWithText_sm.png"),v(a,"alt","Handmade by Tori"),v(s,"href","/"),v(s,"alt","Home"),v(d,"href","/"),v(d,"class",y="text-toriAccent "+(e[0]?"opacity-100 underline":"opacity-75")+" hover:opacity-100 hover:underline"),v(S,"href","/about"),v(S,"class",j="pl-6 text-toriAccent opacity-60 "+(e[1]?"opacity-100 underline":"opacity-75")+" hover:opacity-100 hover:underline"),v(p,"class","flex text-toriBG text-sm pt-3"),v(o,"class","w-full flex flex-col items-center justify-center sm:justify-between px-4 sm:p-0"),v(r,"class","container mx-auto sm:flex sm:justify-between sm:items-center"),v(n,"class","bg-white pt-4 pb-6 w-full flex items-center")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(s,a),l(o,i),l(o,p),l(p,d),l(d,$),l(p,_),l(p,S),l(S,A)},p(t,[e]){1&e&&y!==(y="text-toriAccent "+(t[0]?"opacity-100 underline":"opacity-75")+" hover:opacity-100 hover:underline")&&v(d,"class",y),2&e&&j!==(j="pl-6 text-toriAccent opacity-60 "+(t[1]?"opacity-100 underline":"opacity-75")+" hover:opacity-100 hover:underline")&&v(S,"class",j)},i:t,o:t,d(t){t&&f(n)}}}function st(t,e,n){let r;const{page:o}=oe();let s,a;c(t,o,t=>n(4,r=t));let i=r.path;return t.$$.update=()=>{16&t.$$.dirty&&(n(0,s="/"===r.path),n(1,a="/about"===r.path)),16&t.$$.dirty&&(i=r.path)},[s,a,o]}class at extends tt{constructor(t){super(),Z(this,t,st,ot,a,{})}}function ct(e){let n,r,o,s,a,c,i,p,m,$,y,w,_;return{c(){n=h("footer"),r=h("a"),o=d("svg"),s=d("g"),a=d("path"),c=d("path"),i=d("path"),p=g(),m=h("a"),$=d("svg"),y=d("g"),w=d("path"),_=d("path"),this.h()},l(t){n=x(t,"FOOTER",{class:!0});var e=b(n);r=x(e,"A",{class:!0,rel:!0,target:!0,href:!0});var l=b(r);o=x(l,"svg",{class:!0,"clip-rule":!0,"fill-rule":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0,viewBox:!0},1);var u=b(o);s=x(u,"g",{"fill-rule":!0,transform:!0},1);var h=b(s);a=x(h,"path",{d:!0},1),b(a).forEach(f),c=x(h,"path",{d:!0},1),b(c).forEach(f),i=x(h,"path",{d:!0},1),b(i).forEach(f),h.forEach(f),u.forEach(f),l.forEach(f),p=E(e),m=x(e,"A",{class:!0,rel:!0,target:!0,href:!0});var d=b(m);$=x(d,"svg",{class:!0,"clip-rule":!0,"fill-rule":!0,"stroke-linejoin":!0,"stroke-miterlimit":!0,viewBox:!0,xmlns:!0},1);var g=b($);y=x(g,"g",{transform:!0},1);var v=b(y);w=x(v,"path",{d:!0,transform:!0},1),b(w).forEach(f),_=x(v,"path",{d:!0},1),b(_).forEach(f),v.forEach(f),g.forEach(f),d.forEach(f),e.forEach(f),this.h()},h(){v(a,"d","m251.921.159c-68.418 0-76.997.29-103.867 1.516-26.814 1.224-45.127 5.482-61.152 11.71-16.566 6.438-30.615 15.052-44.62 29.057s-22.619 28.054-29.057 44.62c-6.228 16.024-10.486 34.337-11.71 61.151-1.226 26.87-1.515 35.449-1.515 103.867 0 68.417.289 76.996 1.515 103.866 1.224 26.814 5.482 45.127 11.71 61.151 6.438 16.566 15.052 30.615 29.057 44.621 14.005 14.005 28.054 22.619 44.62 29.057 16.025 6.227 34.338 10.486 61.152 11.709 26.87 1.226 35.449 1.516 103.867 1.516 68.417 0 76.996-.29 103.866-1.516 26.814-1.223 45.127-5.482 61.151-11.709 16.566-6.438 30.615-15.052 44.621-29.057 14.005-14.006 22.619-28.055 29.057-44.621 6.227-16.024 10.486-34.337 11.709-61.151 1.226-26.87 1.516-35.449 1.516-103.866 0-68.418-.29-76.997-1.516-103.867-1.223-26.814-5.482-45.127-11.709-61.151-6.438-16.566-15.052-30.615-29.057-44.62-14.006-14.005-28.055-22.619-44.621-29.057-16.024-6.228-34.337-10.486-61.151-11.71-26.87-1.226-35.449-1.516-103.866-1.516zm0 45.392c67.265 0 75.233.256 101.797 1.468 24.562 1.121 37.901 5.225 46.778 8.674 11.759 4.57 20.151 10.03 28.966 18.845 8.816 8.815 14.275 17.208 18.845 28.966 3.45 8.877 7.554 22.216 8.674 46.778 1.212 26.564 1.469 34.532 1.469 101.798 0 67.265-.257 75.233-1.469 101.797-1.12 24.562-5.224 37.901-8.674 46.778-4.57 11.759-10.029 20.151-18.845 28.966-8.815 8.816-17.207 14.275-28.966 18.845-8.877 3.45-22.216 7.554-46.778 8.674-26.56 1.212-34.527 1.469-101.797 1.469-67.271 0-75.237-.257-101.798-1.469-24.562-1.12-37.901-5.224-46.778-8.674-11.759-4.57-20.151-10.029-28.967-18.845-8.815-8.815-14.275-17.207-18.844-28.966-3.45-8.877-7.554-22.216-8.675-46.778-1.212-26.564-1.468-34.532-1.468-101.797 0-67.266.256-75.234 1.468-101.798 1.121-24.562 5.225-37.901 8.675-46.778 4.569-11.758 10.029-20.151 18.844-28.966 8.816-8.815 17.208-14.275 28.967-18.845 8.877-3.449 22.216-7.553 46.778-8.674 26.564-1.212 34.532-1.468 101.798-1.468z"),v(c,"d","m251.921 336.053c-46.378 0-83.974-37.596-83.974-83.973 0-46.378 37.596-83.974 83.974-83.974 46.377 0 83.973 37.596 83.973 83.974 0 46.377-37.596 83.973-83.973 83.973zm0-213.338c-71.447 0-129.365 57.918-129.365 129.365 0 71.446 57.918 129.364 129.365 129.364 71.446 0 129.364-57.918 129.364-129.364 0-71.447-57.918-129.365-129.364-129.365z"),v(i,"d","m416.627 117.604c0 16.696-13.535 30.23-30.231 30.23-16.695 0-30.23-13.534-30.23-30.23s13.535-30.23 30.23-30.23c16.696 0 30.231 13.534 30.231 30.23z"),v(s,"fill-rule","nonzero"),v(s,"transform","scale(4.16667)"),v(o,"class","w-6 h-6 fill-current group-hover:text-toriAccent"),v(o,"clip-rule","evenodd"),v(o,"fill-rule","evenodd"),v(o,"stroke-linejoin","round"),v(o,"stroke-miterlimit","2"),v(o,"viewBox","0 0 2100 2100"),v(r,"class","flex items-center cursor-pointer group text-gray-600"),v(r,"rel","noreferrer noopener"),v(r,"target","_blank"),v(r,"href","https://www.instagram.com/handmade_bytori"),v(w,"d","m1029.63 264.676c0-33.701-27.36-61.061-61.06-61.061h-879.563c-33.7 0-61.061 27.36-61.061 61.061v530.335c0 33.701 27.361 61.061 61.061 61.061h879.563c33.7 0 61.06-27.36 61.06-61.061zm-59.999 0v530.335c0 .586-.475 1.061-1.061 1.061h-879.563c-.585 0-1.061-.475-1.061-1.061v-530.335c0-.586.476-1.061 1.061-1.061h879.563c.586 0 1.061.475 1.061 1.061z"),v(w,"transform","translate(-16.7888 -17.8436)"),v(_,"d","m512.024 560.707 422.135-337.311c12.936-10.336 31.829-8.226 42.165 4.709s8.225 31.828-4.71 42.164l-440.887 352.295c-10.962 8.76-26.532 8.75-37.483-.023l-439.782-352.295c-12.922-10.352-15.009-29.247-4.657-42.17 10.351-12.922 29.247-15.009 42.17-4.658z"),v(y,"transform","translate(-11.1575 -185.771)"),v($,"class","w-8 h-8 fill-current group-hover:text-toriAccent"),v($,"clip-rule","evenodd"),v($,"fill-rule","evenodd"),v($,"stroke-linejoin","round"),v($,"stroke-miterlimit","2"),v($,"viewBox","0 0 1002 653"),v($,"xmlns","http://www.w3.org/2000/svg"),v(m,"class","flex items-center cursor-pointer group text-gray-600 ml-6"),v(m,"rel","noreferrer noopener"),v(m,"target","_blank"),v(m,"href","mailto:ishandmadebytori@gmail.com"),v(n,"class","text-center text-xs bg-white text-gray-500 p-4 flex justify-center items-center")},m(t,e){u(t,n,e),l(n,r),l(r,o),l(o,s),l(s,a),l(s,c),l(s,i),l(n,p),l(n,m),l(m,$),l($,y),l(y,w),l(y,_)},p:t,i:t,o:t,d(t){t&&f(n)}}}class it extends tt{constructor(t){super(),Z(this,t,null,ct,a,{})}}function lt(t){let e,n,r,o,s;const a=new at({}),c=t[2].default,p=function(t,e,n,r){if(t){const o=i(t,e,n,r);return t[0](o)}}(c,t,t[1],null),d=new it({});return{c(){e=h("div"),W(a.$$.fragment),n=g(),r=h("main"),p&&p.c(),o=g(),W(d.$$.fragment),this.h()},l(t){e=x(t,"DIV",{class:!0});var s=b(e);F(a.$$.fragment,s),n=E(s),r=x(s,"MAIN",{class:!0});var c=b(r);p&&p.l(c),c.forEach(f),o=E(s),F(d.$$.fragment,s),s.forEach(f),this.h()},h(){v(r,"class","container mx-auto flex-grow"),v(e,"class","flex flex-col min-h-full bg-gray-100")},m(t,c){u(t,e,c),Y(a,e,null),l(e,n),l(e,r),p&&p.m(r,null),l(e,o),Y(d,e,null),s=!0},p(t,[e]){p&&p.p&&2&e&&p.p(i(c,t,t[1],null),function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(c,t[1],e,null))},i(t){s||(J(a.$$.fragment,t),J(p,t),J(d.$$.fragment,t),s=!0)},o(t){M(a.$$.fragment,t),M(p,t),M(d.$$.fragment,t),s=!1},d(t){t&&f(e),X(a),p&&p.d(t),X(d)}}}async function ut({params:t,query:e},n){return this.fetch("products.json").then(t=>t.json()).then(t=>({products:t}))}function ft(t,e,n){var{products:r}=e;let{$$slots:o={},$$scope:s}=e;return t.$set=t=>{"products"in t&&n(0,r=t.products),"$$scope"in t&&n(1,s=t.$$scope)},[r,s,o]}class pt extends tt{constructor(t){super(),Z(this,t,ft,lt,a,{products:0})}}function ht(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){e=x(t,"PRE",{});var o=b(e);n=w(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&_(n,r)},d(t){t&&f(e)}}}function dt(e){let n,r,o,s,a,c=e[1].message+"";document.title=n=e[0];let i=e[2]&&e[1].stack&&ht(e);return{c(){r=g(),o=h("div"),s=m(c),a=g(),i&&i.c()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=E(t),o=x(t,"DIV",{});var e=b(o);s=w(e,c),a=E(e),i&&i.l(e),e.forEach(f)},m(t,e){u(t,r,e),u(t,o,e),l(o,s),l(o,a),i&&i.m(o,null)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),2&e&&c!==(c=t[1].message+"")&&_(s,c),t[2]&&t[1].stack?i?i.p(t,e):(i=ht(t),i.c(),i.m(o,null)):i&&(i.d(1),i=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),i&&i.d()}}}function mt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class gt extends tt{constructor(t){super(),Z(this,t,mt,dt,a,{status:0,error:1})}}function $t(t){let n,r;const o=[t[4].props];var s=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}if(s)var c=new s(a());return{c(){c&&W(c.$$.fragment),n=$()},l(t){c&&F(c.$$.fragment,t),n=$()},m(t,e){c&&Y(c,t,e),u(t,n,e),r=!0},p(t,e){const r=16&e?G(o,[K(t[4].props)]):{};if(s!==(s=t[4].component)){if(c){H();const t=c;M(t.$$.fragment,1,0,()=>{X(t,1)}),V()}s?(W((c=new s(a())).$$.fragment),J(c.$$.fragment,1),Y(c,n.parentNode,n)):c=null}else s&&c.$set(r)},i(t){r||(c&&J(c.$$.fragment,t),r=!0)},o(t){c&&M(c.$$.fragment,t),r=!1},d(t){t&&f(n),c&&X(c,t)}}}function yt(t){let e;const n=new gt({props:{error:t[0],status:t[1]}});return{c(){W(n.$$.fragment)},l(t){F(n.$$.fragment,t)},m(t,r){Y(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function vt(t){let e,n,r,o;const s=[yt,$t],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=s[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=c(t),e===i?a[e].p(t,o):(H(),M(a[i],1,1,()=>{a[i]=null}),V(),n=a[e],n||(n=a[e]=s[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){o||(J(n),o=!0)},o(t){M(n),o=!1},d(t){a[e].d(t),t&&f(r)}}}function bt(t){let n;const r=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)o=e(o,r[t]);const s=new pt({props:o});return{c(){W(s.$$.fragment)},l(t){F(s.$$.fragment,t)},m(t,e){Y(s,t,e),n=!0},p(t,[e]){const n=12&e?G(r,[4&e&&{segment:t[2][0]},8&e&&K(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){n||(J(s.$$.fragment,t),n=!0)},o(t){M(s.$$.fragment,t),n=!1},d(t){X(s,t)}}}function xt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=rt,p=r,R().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,a,c,i,r,l]}class wt extends tt{constructor(t){super(),Z(this,t,xt,bt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/products\.json$/,/^\/products\/([^\/]+?)\.json$/],_t=[{js:()=>import("./index.dd9fb638.js"),css:[]},{js:()=>import("./[slug].7ac9147a.js"),css:[]},{js:()=>import("./about.72258e7f.js"),css:[]}],St=(At=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/products\/([^\/]+?)\/?$/,parts:[null,{i:1,params:t=>({slug:At(t[1])})}]},{pattern:/^\/about\/?$/,parts:[{i:2}]}]);var At;const jt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Rt,kt,Pt,Lt=!1,Ct=[],Nt="{}";const qt={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(jt&&jt.session)};let Ot,Ut;qt.session.subscribe(async t=>{if(Ot=t,!Lt)return;Ut=!0;const e=Jt(new URL(location.href)),n=kt={},{redirect:r,props:o,branch:s}=await Wt(e);n===kt&&await Kt(r,s,o,e.page)});let It,zt=null;let Dt,Bt=1;const Tt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Ht={};function Vt(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(jt.baseUrl))return null;let e=t.pathname.slice(jt.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<St.length;n+=1){const r=St[n],o=r.pattern.exec(e);if(o){const n=Vt(t.search),s=r.parts[r.parts.length-1],a=s.params?s.params(o):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:o,page:c}}}}function Mt(){return{x:pageXOffset,y:pageYOffset}}async function Gt(t,e,n,r){if(e)Dt=e;else{const t=Mt();Ht[Dt]=t,e=Dt=++Bt,Ht[Dt]=n?t:{x:0,y:0}}Dt=e,Rt&&qt.preloading.set(!0);const o=zt&&zt.href===t.href?zt.promise:Wt(t);zt=null;const s=kt={},{redirect:a,props:c,branch:i}=await o;if(s===kt&&(await Kt(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Ht[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Ht[Dt]=t,t&&scrollTo(t.x,t.y)}}async function Kt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Jt(new URL(t,document.baseURI));return n?(Tt[e.replaceState?"replaceState":"pushState"]({id:Dt},"",t),Gt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(qt.page.set(r),qt.preloading.set(!1),Rt)Rt.$set(n);else{n.stores={page:{subscribe:qt.page.subscribe},preloading:{subscribe:qt.preloading.subscribe},session:qt.session},n.level0={props:await Pt},n.notify=qt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Yt(t.nextSibling);Yt(t),Yt(e)}Rt=new wt({target:It,props:n,hydrate:!0})}Ct=e,Nt=JSON.stringify(r.query),Lt=!0,Ut=!1}async function Wt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let c;Pt||(Pt=jt.preloaded[0]||ut.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Ot));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Nt)return!0;const o=Ct[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,l,o)&&(u=!0),s.segments[i]=r[c+1],!e)return{segment:f};const p=i++;if(!Ut&&!u&&Ct[c]&&Ct[c].part===e.i)return Ct[c];u=!1;const{default:h,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Ft);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(_t[e.i]);let m;return m=Lt||!jt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Ot):{}:jt.preloaded[c+1],s[`level${p}`]={component:h,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,c=[]}return{redirect:o,props:s,branch:c}}function Ft(t){const e=`client/${t}`;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Yt(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t){const e=Jt(new URL(t,document.baseURI));if(e)return zt&&t===zt.href||function(t,e){zt={href:t,promise:e}}(t,Wt(e)),zt.promise}let Qt;function Zt(t){clearTimeout(Qt),Qt=setTimeout(()=>{te(t)},20)}function te(t){const e=ne(t.target);e&&"prefetch"===e.rel&&Xt(e.href)}function ee(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=ne(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Jt(o);if(s){Gt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Tt.pushState({id:Dt},"",o.href)}}function ne(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function re(t){if(Ht[Dt]=Mt(),t.state){const e=Jt(new URL(location.href));e?Gt(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){Dt=t}(Bt),Tt.replaceState({id:Dt},"",location.href)}const oe=()=>{return t=rt,R().$$.context.get(t);var t};var se;se={target:document.querySelector("#sapper")},"scrollRestoration"in Tt&&(Tt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Tt.scrollRestoration="auto"}),addEventListener("load",()=>{Tt.scrollRestoration="manual"}),function(t){It=t}(se.target),addEventListener("click",ee),addEventListener("popstate",re),addEventListener("touchstart",te),addEventListener("mousemove",Zt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Tt.replaceState({id:Bt},"",e);const n=new URL(location.href);if(jt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:a,error:c}=jt;Pt||(Pt=s&&s[0]),Kt(null,[],{error:c,status:a,session:o,level0:{props:Pt},level1:{props:{status:a,error:c},component:gt},segments:s},{host:e,path:n,query:Vt(r),params:{}})}();const r=Jt(n);return r?Gt(r,Bt,!0,t):void 0});export{$ as A,tt as S,g as a,b,x as c,f as d,h as e,E as f,w as g,v as h,Z as i,u as j,l as k,_ as l,W as m,t as n,F as o,Y as p,J as q,M as r,a as s,m as t,X as u,S as v,V as w,p as x,H as y,y as z};
