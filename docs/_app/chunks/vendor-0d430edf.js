function g(){}const B=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function X(){return Object.create(null)}function k(t){t.forEach(tt)}function L(t){return typeof t=="function"}function _t(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let M;function Dt(t,e){return M||(M=document.createElement("a")),M.href=e,t===M.href}function dt(t){return Object.keys(t).length===0}function Pt(t,e,n,i){if(t){const s=et(t,e,n,i);return t[0](s)}}function et(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function Bt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const u=[],r=Math.max(e.dirty.length,s.length);for(let o=0;o<r;o+=1)u[o]=e.dirty[o]|s[o];return u}return e.dirty|s}return e.dirty}function Lt(t,e,n,i,s,u){if(s){const r=et(e,n,i,u);t.p(r,s)}}function Ft(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}const nt=typeof window!="undefined";let W=nt?()=>window.performance.now():()=>Date.now(),G=nt?t=>requestAnimationFrame(t):g;const v=new Set;function it(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&G(it)}function J(t){let e;return v.size===0&&G(it),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let F=!1;function ht(){F=!0}function mt(){F=!1}function pt(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(s>0&&e[n[s]].claim_order<=l?s+1:pt(1,s,a=>e[n[a]].claim_order,l))-1;i[c]=n[_]+1;const f=_+1;n[f]=c,s=Math.max(f,s)}const u=[],r=[];let o=e.length-1;for(let c=n[s]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);o>=c;o--)r.push(e[o]);o--}for(;o>=0;o--)r.push(e[o]);u.reverse(),r.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<r.length;c++){for(;l<u.length&&r[c].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(r[c],_)}}function gt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=st("style");return xt(rt(t),e),e.sheet}function xt(t,e){gt(t.head||t,e)}function $t(t,e){if(F){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Ht(t,e,n){F&&!n?$t(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function wt(t){t.parentNode.removeChild(t)}function It(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function K(t){return document.createTextNode(t)}function Wt(){return K(" ")}function Gt(){return K("")}function Jt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Kt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Qt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ut(t){return t===""?null:+t}function kt(t){return Array.from(t.childNodes)}function Et(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,s=!1){Et(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const c=n(o);return c===void 0?t.splice(r,1):t[r]=c,s?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function vt(t,e,n,i){return ct(t,s=>s.nodeName===e,s=>{const u=[];for(let r=0;r<s.attributes.length;r++){const o=s.attributes[r];n[o.name]||u.push(o.name)}u.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Vt(t,e,n){return vt(t,e,n,st)}function Ct(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function Xt(t){return Ct(t," ")}function Yt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Zt(t,e){t.value=e==null?"":e}function te(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function St(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}const T=new Map;let z=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:bt(e),rules:{}};return T.set(t,n),n}function D(t,e,n,i,s,u,r,o=0){const c=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=c){const b=e+(n-e)*u(m);l+=m*100+`%{${r(b,1-b)}}
`}const _=l+`100% {${r(n,1-n)}}
}`,f=`__svelte_${Nt(_)}_${o}`,a=rt(t),{stylesheet:d,rules:h}=T.get(a)||jt(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${s}ms 1 both`,z+=1,f}function P(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),s=n.length-i.length;s&&(t.style.animation=i.join(", "),z-=s,z||At())}function At(){G(()=>{z||(T.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),T.clear())})}let A;function j(t){A=t}function Q(){if(!A)throw new Error("Function called outside component initialization");return A}function ee(t){Q().$$.on_mount.push(t)}function ne(t){Q().$$.after_update.push(t)}function ie(t,e){Q().$$.context.set(t,e)}const N=[],Y=[],O=[],Z=[],ot=Promise.resolve();let I=!1;function lt(){I||(I=!0,ot.then(ut))}function re(){return lt(),ot}function C(t){O.push(t)}const H=new Set;let q=0;function ut(){const t=A;do{for(;q<N.length;){const e=N[q];q++,j(e),Mt(e.$$)}for(j(null),N.length=0,q=0;Y.length;)Y.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];H.has(n)||(H.add(n),n())}O.length=0}while(N.length);for(;Z.length;)Z.pop()();I=!1,H.clear(),j(t)}function Mt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(C)}}let S;function U(){return S||(S=Promise.resolve(),S.then(()=>{S=null})),S}function w(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const R=new Set;let y;function se(){y={r:0,c:[],p:y}}function ce(){y.r||k(y.c),y=y.p}function qt(t,e){t&&t.i&&(R.delete(t),t.i(e))}function oe(t,e,n,i){if(t&&t.o){if(R.has(t))return;R.add(t),y.c.push(()=>{R.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const V={duration:0};function le(t,e,n){let i=e(t,n),s=!1,u,r,o=0;function c(){u&&P(t,u)}function l(){const{delay:f=0,duration:a=300,easing:d=B,tick:h=g,css:p}=i||V;p&&(u=D(t,0,1,a,f,d,p,o++)),h(0,1);const m=W()+f,b=m+a;r&&r.abort(),s=!0,C(()=>w(t,!0,"start")),r=J(x=>{if(s){if(x>=b)return h(1,0),w(t,!0,"end"),c(),s=!1;if(x>=m){const $=d((x-m)/a);h($,1-$)}}return s})}let _=!1;return{start(){_||(_=!0,P(t),L(i)?(i=i(),U().then(l)):l())},invalidate(){_=!1},end(){s&&(c(),s=!1)}}}function ue(t,e,n){let i=e(t,n),s=!0,u;const r=y;r.r+=1;function o(){const{delay:c=0,duration:l=300,easing:_=B,tick:f=g,css:a}=i||V;a&&(u=D(t,1,0,l,c,_,a));const d=W()+c,h=d+l;C(()=>w(t,!1,"start")),J(p=>{if(s){if(p>=h)return f(0,1),w(t,!1,"end"),--r.r||k(r.c),!1;if(p>=d){const m=_((p-d)/l);f(1-m,m)}}return s})}return L(i)?U().then(()=>{i=i(),o()}):o(),{end(c){c&&i.tick&&i.tick(1,0),s&&(u&&P(t,u),s=!1)}}}function ae(t,e,n,i){let s=e(t,n),u=i?0:1,r=null,o=null,c=null;function l(){c&&P(t,c)}function _(a,d){const h=a.b-u;return d*=Math.abs(h),{a:u,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:p=B,tick:m=g,css:b}=s||V,x={start:W()+d,b:a};a||(x.group=y,y.r+=1),r||o?o=x:(b&&(l(),c=D(t,u,a,h,d,p,b)),a&&m(0,1),r=_(x,h),C(()=>w(t,a,"start")),J($=>{if(o&&$>o.start&&(r=_(o,h),o=null,w(t,r.b,"start"),b&&(l(),c=D(t,u,r.b,r.duration,0,p,s.css))),r){if($>=r.end)m(u=r.b,1-u),w(t,r.b,"end"),o||(r.b?l():--r.group.r||k(r.group.c)),r=null;else if($>=r.start){const at=$-r.start;u=r.a+r.d*p(at/r.duration),m(u,1-u)}}return!!(r||o)}))}return{run(a){L(s)?U().then(()=>{s=s(),f(a)}):f(a)},end(){l(),r=o=null}}}const fe=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function _e(t,e){const n={},i={},s={$$scope:1};let u=t.length;for(;u--;){const r=t[u],o=e[u];if(o){for(const c in r)c in o||(i[c]=1);for(const c in o)s[c]||(n[c]=o[c],s[c]=1);t[u]=o}else for(const c in r)s[c]=1}for(const r in i)r in n||(n[r]=void 0);return n}function de(t){return typeof t=="object"&&t!==null?t:{}}function he(t){t&&t.c()}function me(t,e){t&&t.l(e)}function Ot(t,e,n,i){const{fragment:s,on_mount:u,on_destroy:r,after_update:o}=t.$$;s&&s.m(e,n),i||C(()=>{const c=u.map(tt).filter(L);r?r.push(...c):k(c),t.$$.on_mount=[]}),o.forEach(C)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(N.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pe(t,e,n,i,s,u,r,o=[-1]){const c=A;j(t);const l=t.$$={fragment:null,ctx:null,props:u,update:g,not_equal:s,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return l.ctx&&s(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&Tt(t,f)),a}):[],l.update(),_=!0,k(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){ht();const f=kt(e.target);l.fragment&&l.fragment.l(f),f.forEach(wt)}else l.fragment&&l.fragment.c();e.intro&&qt(t.$$.fragment),Ot(t,e.target,e.anchor,e.customElement),mt(),ut()}j(c)}class ye{$destroy(){Rt(this,1),this.$destroy=g}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!dt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const E=[];function ge(t,e=g){let n;const i=new Set;function s(o){if(_t(t,o)&&(t=o,n)){const c=!E.length;for(const l of i)l[1](),E.push(l,t);if(c){for(let l=0;l<E.length;l+=2)E[l][0](E[l+1]);E.length=0}}}function u(o){s(o(t))}function r(o,c=g){const l=[o,c];return i.add(l),i.size===1&&(n=e(s)||g),o(t),()=>{i.delete(l),i.size===0&&(n(),n=null)}}return{set:s,update:u,subscribe:r}}function zt(t){const e=t-1;return e*e*e+1}function be(t,{delay:e=0,duration:n=400,easing:i=B}={}){const s=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:u=>`opacity: ${u*s}`}}function xe(t,{delay:e=0,duration:n=400,easing:i=zt,x:s=0,y:u=0,opacity:r=0}={}){const o=getComputedStyle(t),c=+o.opacity,l=o.transform==="none"?"":o.transform,_=c*(1-r);return{delay:e,duration:n,easing:i,css:(f,a)=>`
			transform: ${l} translate(${(1-f)*s}px, ${(1-f)*u}px);
			opacity: ${c-_*a}`}}export{de as A,Rt as B,ft as C,ge as D,re as E,Pt as F,Lt as G,Ft as H,Bt as I,$t as J,g as K,C as L,Dt as M,ae as N,Jt as O,Kt as P,It as Q,k as R,ye as S,fe as T,be as U,Y as V,Ut as W,le as X,xe as Y,ue as Z,Zt as _,kt as a,Qt as b,Vt as c,wt as d,st as e,te as f,Ht as g,Ct as h,pe as i,Yt as j,Wt as k,Gt as l,Xt as m,se as n,oe as o,ce as p,qt as q,ie as r,_t as s,K as t,ne as u,ee as v,he as w,me as x,Ot as y,_e as z};