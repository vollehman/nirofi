import{S as Pe,i as Oe,s as Re,L as oe,e as I,t as Z,c as D,a as L,h as x,d as b,g as F,J as f,M as de,b as p,f as N,K as Ue,k as R,m as U,N as be,O as ee,P as Ce,o as ue,p as ke,q as re,Q as ae,R as Me,v as Ge,T as Ke,U as ye,n as we,V as se,W as Ee,X as he,Y as ne,Z as ce,_ as fe}from"../chunks/vendor-0d430edf.js";const{window:_e}=Ke;function Ie(l,e,n){const o=l.slice();return o[39]=e[n].x,o[40]=e[n].y,o[42]=n,o}function De(l,e,n){const o=l.slice();return o[39]=e[n].x,o[40]=e[n].y,o[43]=e[n].visible,o[42]=n,o}function Ve(l,e,n){const o=l.slice();return o[39]=e[n].x,o[40]=e[n].y,o[42]=n,o}function Te(l,e,n){const o=l.slice();return o[46]=e[n],o[47]=e,o[42]=n,o}function Ae(l,e,n){const o=l.slice();return o[46]=e[n],o[48]=e,o[42]=n,o}function qe(l){let e,n=l[46]+"",o,h=l[42];const g=()=>l[22](e,h),_=()=>l[22](null,h);return{c(){e=I("span"),o=Z(n)},l(i){e=D(i,"SPAN",{});var a=L(e);o=x(a,n),a.forEach(b)},m(i,a){F(i,e,a),f(e,o),g()},p(i,a){l=i,h!==l[42]&&(_(),h=l[42],g())},d(i){i&&b(e),_()}}}function Be(l){let e,n=l[46]+"",o,h=l[42];const g=()=>l[23](e,h),_=()=>l[23](null,h);return{c(){e=I("span"),o=Z(n)},l(i){e=D(i,"SPAN",{});var a=L(e);o=x(a,n),a.forEach(b)},m(i,a){F(i,e,a),f(e,o),g()},p(i,a){l=i,h!==l[42]&&(_(),h=l[42],g())},d(i){i&&b(e),_()}}}function je(l){let e,n,o,h,g,_,i;return{c(){e=I("div"),n=Z("Boring? Launch ship!"),this.h()},l(a){e=D(a,"DIV",{class:!0,style:!0});var w=L(e);n=x(w,"Boring? Launch ship!"),w.forEach(b),this.h()},h(){p(e,"class","startButton svelte-1q48l7a"),N(e,"top",l[2]-300+"px")},m(a,w){F(a,e,w),f(e,n),g=!0,_||(i=ee(e,"click",l[33]),_=!0)},p(a,w){l=a,(!g||w[0]&4)&&N(e,"top",l[2]-300+"px")},i(a){g||(oe(()=>{h&&h.end(1),o=he(e,ne,{y:l[2],delay:0,duration:1500}),o.start()}),g=!0)},o(a){o&&o.invalidate(),h=ce(e,ne,{y:-l[2],delay:100,duration:1e3}),g=!1},d(a){a&&b(e),a&&h&&h.end(),_=!1,i()}}}function He(l){let e,n,o,h,g,_,i,a,w,v,O,X,V,k,j,H,G,Y,M,J,Q,te,y,A,W,T,$,C,le,K,S,z,q,P,E,ie;return{c(){e=I("div"),n=I("img"),_=R(),i=I("div"),a=I("button"),w=Z("reset"),v=R(),O=I("div"),X=Z("Ship speed"),V=R(),k=I("input"),j=R(),H=I("div"),G=Z("Game speed"),Y=R(),M=I("input"),te=R(),y=I("div"),A=I("div"),W=Z("Arrows: move"),T=R(),$=I("div"),C=Z("Space: fire"),le=R(),K=I("div"),S=Z("Esc: reset"),this.h()},l(t){e=D(t,"DIV",{class:!0,style:!0});var r=L(e);n=D(r,"IMG",{src:!0,alt:!0,width:!0,height:!0}),r.forEach(b),_=U(t),i=D(t,"DIV",{class:!0,style:!0});var c=L(i);a=D(c,"BUTTON",{});var s=L(a);w=x(s,"reset"),s.forEach(b),v=U(c),O=D(c,"DIV",{});var B=L(O);X=x(B,"Ship speed"),B.forEach(b),V=U(c),k=D(c,"INPUT",{type:!0,min:!0,max:!0}),j=U(c),H=D(c,"DIV",{});var u=L(H);G=x(u,"Game speed"),u.forEach(b),Y=U(c),M=D(c,"INPUT",{type:!0,min:!0,max:!0}),c.forEach(b),te=U(t),y=D(t,"DIV",{class:!0,style:!0});var d=L(y);A=D(d,"DIV",{});var m=L(A);W=x(m,"Arrows: move"),m.forEach(b),T=U(d),$=D(d,"DIV",{});var ge=L($);C=x(ge,"Space: fire"),ge.forEach(b),le=U(d),K=D(d,"DIV",{});var me=L(K);S=x(me,"Esc: reset"),me.forEach(b),d.forEach(b),this.h()},h(){de(n.src,o="ship.png")||p(n,"src",o),p(n,"alt","ship"),p(n,"width",pe),p(n,"height",ve),p(e,"class","spaceship"),N(e,"position","absolute"),N(e,"left",l[4]+"px"),N(e,"top",l[5]+"px"),p(k,"type","range"),p(k,"min","10"),p(k,"max","100"),p(M,"type","range"),p(M,"min","5"),p(M,"max","100"),p(i,"class","menu svelte-1q48l7a"),N(i,"left",l[3]-220+"px"),N(i,"top",l[2]/2-25+"px"),p(y,"class","menu svelte-1q48l7a"),N(y,"left",l[3]-220+"px"),N(y,"top",l[2]/2-225+"px")},m(t,r){F(t,e,r),f(e,n),F(t,_,r),F(t,i,r),f(i,a),f(a,w),f(i,v),f(i,O),f(O,X),f(i,V),f(i,k),fe(k,l[6]),f(i,j),f(i,H),f(H,G),f(i,Y),f(i,M),fe(M,l[0]),l[31](i),F(t,te,r),F(t,y,r),f(y,A),f(A,W),f(y,T),f(y,$),f($,C),f(y,le),f(y,K),f(K,S),l[32](y),P=!0,E||(ie=[ee(a,"click",l[28]),ee(k,"change",l[29]),ee(k,"input",l[29]),ee(M,"change",l[30]),ee(M,"input",l[30])],E=!0)},p(t,r){l=t,(!P||r[0]&16)&&N(e,"left",l[4]+"px"),(!P||r[0]&32)&&N(e,"top",l[5]+"px"),r[0]&64&&fe(k,l[6]),r[0]&1&&fe(M,l[0]),(!P||r[0]&8)&&N(i,"left",l[3]-220+"px"),(!P||r[0]&4)&&N(i,"top",l[2]/2-25+"px"),(!P||r[0]&8)&&N(y,"left",l[3]-220+"px"),(!P||r[0]&4)&&N(y,"top",l[2]/2-225+"px")},i(t){P||(oe(()=>{g&&g.end(1),h=he(e,ne,{y:l[2],delay:100,duration:1e3}),h.start()}),oe(()=>{Q&&Q.end(1),J=he(i,ne,{x:220,duration:1500}),J.start()}),oe(()=>{q&&q.end(1),z=he(y,ne,{x:220,duration:1500}),z.start()}),P=!0)},o(t){h&&h.invalidate(),g=ce(e,ne,{y:-l[2],delay:100,duration:1e3}),J&&J.invalidate(),Q=ce(i,ne,{x:220,duration:1500}),z&&z.invalidate(),q=ce(y,ne,{x:220,duration:1500}),P=!1},d(t){t&&b(e),t&&g&&g.end(),t&&b(_),t&&b(i),l[31](null),t&&Q&&Q.end(),t&&b(te),t&&b(y),l[32](null),t&&q&&q.end(),E=!1,Me(ie)}}}function Ne(l){let e,n,o;return{c(){e=I("div"),n=I("img"),this.h()},l(h){e=D(h,"DIV",{class:!0,style:!0});var g=L(e);n=D(g,"IMG",{src:!0,alt:!0,width:!0,height:!0}),g.forEach(b),this.h()},h(){de(n.src,o="niro.jpeg")||p(n,"src",o),p(n,"alt","enemy"),p(n,"width",pe),p(n,"height",ve),p(e,"class","enemy"),N(e,"position","absolute"),N(e,"left",l[39]+"px"),N(e,"top",l[40]+"px")},m(h,g){F(h,e,g),f(e,n)},p:Ue,d(h){h&&b(e)}}}function Se(l){let e,n,o,h,g,_;return{c(){e=I("div"),n=I("img"),this.h()},l(i){e=D(i,"DIV",{class:!0,style:!0});var a=L(e);n=D(a,"IMG",{src:!0,alt:!0,width:!0,height:!0}),a.forEach(b),this.h()},h(){de(n.src,o="projectile.png")||p(n,"src",o),p(n,"alt","projectile"),p(n,"width",h=10),p(n,"height",g=30),p(e,"class","projectile"),p(e,"style",_="position: absolute; left: "+l[39]+"px; top: "+l[40]+"px; visible="+l[43])},m(i,a){F(i,e,a),f(e,n)},p(i,a){a[0]&128&&_!==(_="position: absolute; left: "+i[39]+"px; top: "+i[40]+"px; visible="+i[43])&&p(e,"style",_)},d(i){i&&b(e)}}}function Le(l){let e,n,o,h,g,_,i,a;return{c(){e=I("div"),n=I("img"),_=R(),this.h()},l(w){e=D(w,"DIV",{style:!0});var v=L(e);n=D(v,"IMG",{src:!0,alt:!0,width:!0,height:!0}),_=U(v),v.forEach(b),this.h()},h(){de(n.src,o="explosion.png")||p(n,"src",o),p(n,"alt",""),p(n,"width",h=60),p(n,"height",g=60),N(e,"position","absolute"),N(e,"left",l[39]+"px"),N(e,"top",l[40]-30+"px")},m(w,v){F(w,e,v),f(e,n),f(e,_),a=!0},p(w,v){(!a||v[0]&256)&&N(e,"left",w[39]+"px"),(!a||v[0]&256)&&N(e,"top",w[40]-30+"px")},i(w){a||(oe(()=>{i||(i=be(e,ye,{duration:80},!0)),i.run(1)}),a=!0)},o(w){i||(i=be(e,ye,{duration:80},!1)),i.run(0),a=!1},d(w){w&&b(e),w&&i&&i.end()}}}function We(l){let e,n,o,h,g,_,i,a,w,v,O,X,V,k,j,H,G,Y,M,J,Q,te;oe(l[21]);let y=l[17],A=[];for(let t=0;t<y.length;t+=1)A[t]=qe(Ae(l,y,t));let W=l[18],T=[];for(let t=0;t<W.length;t+=1)T[t]=Be(Te(l,W,t));const $=[He,je],C=[];function le(t,r){return t[1]?0:t[15]?1:-1}~(V=le(l))&&(k=C[V]=$[V](l));let K=l[16],S=[];for(let t=0;t<K.length;t+=1)S[t]=Ne(Ve(l,K,t));let z=l[7],q=[];for(let t=0;t<z.length;t+=1)q[t]=Se(De(l,z,t));let P=l[8],E=[];for(let t=0;t<P.length;t+=1)E[t]=Le(Ie(l,P,t));const ie=t=>ue(E[t],1,1,()=>{E[t]=null});return{c(){e=I("div"),n=I("h1");for(let t=0;t<A.length;t+=1)A[t].c();o=R(),h=I("p");for(let t=0;t<T.length;t+=1)T[t].c();g=R(),_=I("div"),i=I("button"),a=Z("LinkedIn"),w=R(),v=I("button"),O=Z("Download CV"),X=R(),k&&k.c(),j=R();for(let t=0;t<S.length;t+=1)S[t].c();H=R();for(let t=0;t<q.length;t+=1)q[t].c();G=R(),Y=I("div"),M=R();for(let t=0;t<E.length;t+=1)E[t].c();this.h()},l(t){e=D(t,"DIV",{class:!0});var r=L(e);n=D(r,"H1",{class:!0});var c=L(n);for(let m=0;m<A.length;m+=1)A[m].l(c);c.forEach(b),o=U(r),h=D(r,"P",{});var s=L(h);for(let m=0;m<T.length;m+=1)T[m].l(s);s.forEach(b),g=U(r),_=D(r,"DIV",{class:!0});var B=L(_);i=D(B,"BUTTON",{class:!0,type:!0});var u=L(i);a=x(u,"LinkedIn"),u.forEach(b),w=U(B),v=D(B,"BUTTON",{class:!0,type:!0});var d=L(v);O=x(d,"Download CV"),d.forEach(b),B.forEach(b),X=U(r),k&&k.l(r),j=U(r);for(let m=0;m<S.length;m+=1)S[m].l(r);H=U(r);for(let m=0;m<q.length;m+=1)q[m].l(r);G=U(r),Y=D(r,"DIV",{class:!0}),L(Y).forEach(b),M=U(r);for(let m=0;m<E.length;m+=1)E[m].l(r);r.forEach(b),this.h()},h(){p(n,"class","svelte-1q48l7a"),p(i,"class","linkButton svelte-1q48l7a"),p(i,"type","submit"),p(v,"class","linkButton svelte-1q48l7a"),p(v,"type","submit"),p(_,"class","linkButtonRow svelte-1q48l7a"),p(Y,"class",""),p(e,"class","wrapper svelte-1q48l7a")},m(t,r){F(t,e,r),f(e,n);for(let c=0;c<A.length;c+=1)A[c].m(n,null);f(e,o),f(e,h);for(let c=0;c<T.length;c+=1)T[c].m(h,null);f(e,g),f(e,_),f(_,i),f(i,a),l[24](i),f(_,w),f(_,v),f(v,O),l[26](v),f(e,X),~V&&C[V].m(e,null),f(e,j);for(let c=0;c<S.length;c+=1)S[c].m(e,null);f(e,H);for(let c=0;c<q.length;c+=1)q[c].m(e,null);f(e,G),f(e,Y),f(e,M);for(let c=0;c<E.length;c+=1)E[c].m(e,null);J=!0,Q||(te=[ee(_e,"keydown",Ce(l[19])),ee(_e,"resize",l[21]),ee(i,"click",l[25]),ee(v,"click",l[27])],Q=!0)},p(t,r){if(r[0]&139264){y=t[17];let s;for(s=0;s<y.length;s+=1){const B=Ae(t,y,s);A[s]?A[s].p(B,r):(A[s]=qe(B),A[s].c(),A[s].m(n,null))}for(;s<A.length;s+=1)A[s].d(1);A.length=y.length}if(r[0]&278528){W=t[18];let s;for(s=0;s<W.length;s+=1){const B=Te(t,W,s);T[s]?T[s].p(B,r):(T[s]=Be(B),T[s].c(),T[s].m(h,null))}for(;s<T.length;s+=1)T[s].d(1);T.length=W.length}let c=V;if(V=le(t),V===c?~V&&C[V].p(t,r):(k&&(we(),ue(C[c],1,1,()=>{C[c]=null}),ke()),~V?(k=C[V],k?k.p(t,r):(k=C[V]=$[V](t),k.c()),re(k,1),k.m(e,j)):k=null),r[0]&65536){K=t[16];let s;for(s=0;s<K.length;s+=1){const B=Ve(t,K,s);S[s]?S[s].p(B,r):(S[s]=Ne(B),S[s].c(),S[s].m(e,H))}for(;s<S.length;s+=1)S[s].d(1);S.length=K.length}if(r[0]&128){z=t[7];let s;for(s=0;s<z.length;s+=1){const B=De(t,z,s);q[s]?q[s].p(B,r):(q[s]=Se(B),q[s].c(),q[s].m(e,G))}for(;s<q.length;s+=1)q[s].d(1);q.length=z.length}if(r[0]&256){P=t[8];let s;for(s=0;s<P.length;s+=1){const B=Ie(t,P,s);E[s]?(E[s].p(B,r),re(E[s],1)):(E[s]=Le(B),E[s].c(),re(E[s],1),E[s].m(e,null))}for(we(),s=P.length;s<E.length;s+=1)ie(s);ke()}},i(t){if(!J){re(k);for(let r=0;r<P.length;r+=1)re(E[r]);J=!0}},o(t){ue(k),E=E.filter(Boolean);for(let r=0;r<E.length;r+=1)ue(E[r]);J=!1},d(t){t&&b(e),ae(A,t),ae(T,t),l[24](null),l[26](null),~V&&C[V].d(),ae(S,t),ae(q,t),ae(E,t),Q=!1,Me(te)}}}let pe=60,ve=60,ze="NIRO \xC5HMAN",Xe="Front-end oriented full stack developer with head in the clouds.";function Ye(l,e,n){let o=!1,h,g,_=0,i=0,a=30,w=[],v=[],O=[],X,V,k,j,H=ze.split(""),G=Array(H.length),Y=Xe.split(""),M=Array(Y.length);function J(u){if(o)switch(console.log(u),u.code){case"KeyD":case"ArrowRight":n(4,_+=a);break;case"KeyA":case"ArrowLeft":n(4,_-=a);break;case"KeyS":case"ArrowDown":n(5,i+=a);break;case"KeyW":case"ArrowUp":n(5,i-=a);break;case"Space":n(7,v=[...v,{x:_+pe/2,y:i-30,visible:!0}]),console.log(w);break}}function Q(){let u=[];for(let d=0;d<v.length;d++){let m=v[d];m.y-=15,m.y>0&&m.visible&&u.push(m)}n(7,v=u)}function te(){for(let u=0;u<v.length;u++){y(X,v[u]),y(V,v[u]),y(k,v[u]),y(j,v[u]);for(let d=0;d<G.length;d++)y(G[d],v[u]);for(let d=0;d<M.length;d++)y(M[d],v[u])}}function y(u,d){const m=u.getBoundingClientRect();m.right>=d.x&&m.bottom>=d.y&&m.left<=d.x&&(n(8,O=[...O,{x:d.x,y:d.y,timeLeft:4}]),u.remove(),d.visible=!1)}function A(){let u=[];for(let d=0;d<O.length;d++){if(O[d].timeLeft>0){let m=O[d];m.timeLeft-=1,u.push(m)}n(8,O=u)}}let W=!1;Ge(()=>{n(4,_=g/2-pe/2),n(5,i=h-200-ve/2),n(15,W=!0)});let T=40;const $=()=>{Q(),te(),A()};let C;function le(){n(3,g=_e.innerWidth),n(2,h=_e.innerHeight)}function K(u,d){se[u?"unshift":"push"](()=>{G[d]=u,n(13,G)})}function S(u,d){se[u?"unshift":"push"](()=>{M[d]=u,n(14,M)})}function z(u){se[u?"unshift":"push"](()=>{k=u,n(11,k)})}const q=()=>window.open("https://www.linkedin.com/in/niroahman");function P(u){se[u?"unshift":"push"](()=>{j=u,n(12,j)})}const E=()=>window.open("Niro_\xC5hman_CV_en.pdf "),ie=()=>n(1,o=!o);function t(){a=Ee(this.value),n(6,a)}function r(){T=Ee(this.value),n(0,T)}function c(u){se[u?"unshift":"push"](()=>{X=u,n(9,X)})}function s(u){se[u?"unshift":"push"](()=>{V=u,n(10,V)})}const B=()=>n(1,o=!o);return l.$$.update=()=>{l.$$.dirty[0]&1048577&&(clearInterval(C),n(20,C=setInterval($,T)))},[T,o,h,g,_,i,a,v,O,X,V,k,j,G,M,W,w,H,Y,J,C,le,K,S,z,q,P,E,ie,t,r,c,s,B]}class Je extends Pe{constructor(e){super();Oe(this,e,Ye,We,Re,{},null,[-1,-1])}}export{Je as default};