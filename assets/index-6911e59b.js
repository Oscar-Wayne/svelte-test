(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))r(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const f of o.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(c){if(c.ep)return;c.ep=!0;const o=n(c);fetch(c.href,o)}})();function j(){}function W(e){return e()}function D(){return Object.create(null)}function N(e){e.forEach(W)}function X(e){return typeof e=="function"}function Y(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let k;function G(e,t){return k||(k=document.createElement("a")),k.href=t,e===k.href}function oe(e){return Object.keys(e).length===0}function m(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function C(e){e.parentNode&&e.parentNode.removeChild(e)}function ie(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function $(e){return document.createElement(e)}function R(e){return document.createTextNode(e)}function q(){return R(" ")}function H(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function se(e){return Array.from(e.childNodes)}function le(e,t){t=""+t,e.data!==t&&(e.data=t)}let T;function L(e){T=e}const E=[],J=[];let O=[];const Q=[],ue=Promise.resolve();let I=!1;function fe(){I||(I=!0,ue.then(Z))}function F(e){O.push(e)}const M=new Set;let w=0;function Z(){if(w!==0)return;const e=T;do{try{for(;w<E.length;){const t=E[w];w++,L(t),ae(t.$$)}}catch(t){throw E.length=0,w=0,t}for(L(null),E.length=0,w=0;J.length;)J.pop()();for(let t=0;t<O.length;t+=1){const n=O[t];M.has(n)||(M.add(n),n())}O.length=0}while(E.length);for(;Q.length;)Q.pop()();I=!1,M.clear(),L(e)}function ae(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}function de(e){const t=[],n=[];O.forEach(r=>e.indexOf(r)===-1?t.push(r):n.push(r)),n.forEach(r=>r()),O=t}const B=new Set;let v;function he(){v={r:0,c:[],p:v}}function _e(){v.r||N(v.c),v=v.p}function A(e,t){e&&e.i&&(B.delete(e),e.i(t))}function K(e,t,n,r){if(e&&e.o){if(B.has(e))return;B.add(e),v.c.push(()=>{B.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}else r&&r()}function pe(e){e&&e.c()}function ee(e,t,n,r){const{fragment:c,after_update:o}=e.$$;c&&c.m(t,n),r||F(()=>{const f=e.$$.on_mount.map(W).filter(X);e.$$.on_destroy?e.$$.on_destroy.push(...f):N(f),e.$$.on_mount=[]}),o.forEach(F)}function te(e,t){const n=e.$$;n.fragment!==null&&(de(n.after_update),N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function me(e,t){e.$$.dirty[0]===-1&&(E.push(e),fe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ne(e,t,n,r,c,o,f,h=[-1]){const _=T;L(e);const i=e.$$={fragment:null,ctx:[],props:o,update:j,not_equal:c,bound:D(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:D(),dirty:h,skip_bound:!1,root:t.target||_.$$.root};f&&f(i.root);let p=!1;if(i.ctx=n?n(e,t.props||{},(d,y,...x)=>{const P=x.length?x[0]:y;return i.ctx&&c(i.ctx[d],i.ctx[d]=P)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](P),p&&me(e,d)),y}):[],i.update(),p=!0,N(i.before_update),i.fragment=r?r(i.ctx):!1,t.target){if(t.hydrate){const d=se(t.target);i.fragment&&i.fragment.l(d),d.forEach(C)}else i.fragment&&i.fragment.c();t.intro&&A(e.$$.fragment),ee(e,t.target,t.anchor,t.customElement),Z()}L(_)}class re{$destroy(){te(this,1),this.$destroy=j}$on(t,n){if(!X(n))return j;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(t){this.$$set&&!oe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function ge(e){let t,n,r,c,o,f,h=e[0].name+"",_;return{c(){t=$("div"),n=$("img"),o=q(),f=$("h1"),_=R(h),G(n.src,r=e[0].image)||g(n,"src",r),g(n,"alt",c=e[0].name),g(t,"class","character")},m(i,p){S(i,t,p),m(t,n),m(t,o),m(t,f),m(f,_)},p(i,[p]){p&1&&!G(n.src,r=i[0].image)&&g(n,"src",r),p&1&&c!==(c=i[0].name)&&g(n,"alt",c),p&1&&h!==(h=i[0].name+"")&&le(_,h)},i:j,o:j,d(i){i&&C(t)}}}function $e(e,t,n){let{character:r}=t;return e.$$set=c=>{"character"in c&&n(0,r=c.character)},[r]}class ye extends re{constructor(t){super(),ne(this,t,$e,ge,Y,{character:0})}}function U(e,t,n){const r=e.slice();return r[5]=t[n],r}function V(e){let t,n;return t=new ye({props:{character:e[5]}}),{c(){pe(t.$$.fragment)},m(r,c){ee(t,r,c),n=!0},p(r,c){const o={};c&1&&(o.character=r[5]),t.$set(o)},i(r){n||(A(t.$$.fragment,r),n=!0)},o(r){K(t.$$.fragment,r),n=!1},d(r){te(t,r)}}}function be(e){let t,n,r,c,o,f,h,_,i,p,d,y,x,P,b=e[0],l=[];for(let s=0;s<b.length;s+=1)l[s]=V(U(e,b,s));const ce=s=>K(l[s],1,1,()=>{l[s]=null});return{c(){t=$("h1"),t.textContent="Rick and Morty Svelte",n=q(),r=$("div"),c=$("div"),o=$("button"),f=R("Previous"),_=q(),i=$("button"),i.textContent="Next",p=q(),d=$("div");for(let s=0;s<l.length;s+=1)l[s].c();g(t,"class","title"),g(o,"class","btn"),o.disabled=h=e[1]===1,g(i,"class","btn"),g(c,"class","btns"),g(d,"class","grid"),g(r,"class","container")},m(s,a){S(s,t,a),S(s,n,a),S(s,r,a),m(r,c),m(c,o),m(o,f),m(c,_),m(c,i),m(r,p),m(r,d);for(let u=0;u<l.length;u+=1)l[u]&&l[u].m(d,null);y=!0,x||(P=[H(o,"click",e[3]),H(i,"click",e[2])],x=!0)},p(s,[a]){if((!y||a&2&&h!==(h=s[1]===1))&&(o.disabled=h),a&1){b=s[0];let u;for(u=0;u<b.length;u+=1){const z=U(s,b,u);l[u]?(l[u].p(z,a),A(l[u],1)):(l[u]=V(z),l[u].c(),A(l[u],1),l[u].m(d,null))}for(he(),u=b.length;u<l.length;u+=1)ce(u);_e()}},i(s){if(!y){for(let a=0;a<b.length;a+=1)A(l[a]);y=!0}},o(s){l=l.filter(Boolean);for(let a=0;a<l.length;a+=1)K(l[a]);y=!1},d(s){s&&C(t),s&&C(n),s&&C(r),ie(l,s),x=!1,N(P)}}}function ve(e,t,n){let r=[],c=1;async function o(){const i=await(await fetch("https://rickandmortyapi.com/api/character?page="+c)).json();n(0,r=i.results),console.log(i)}o();function f(){n(1,c++,c),o()}function h(){n(1,c--,c),o()}return[r,c,f,h]}class xe extends re{constructor(t){super(),ne(this,t,ve,be,Y,{})}}new xe({target:document.getElementById("app")});
