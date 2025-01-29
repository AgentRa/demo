import{c as Kt,r as L,j as k,a as H,B as Ut}from"./index-B1uQUVic.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],an=Kt("ArrowLeft",un);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],fn=Kt("ArrowRight",ln);function dn(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ht(t){return dn(t)||Array.isArray(t)}function pn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Tt(t,n){const e=Object.keys(t),r=Object.keys(n);if(e.length!==r.length)return!1;const c=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(n.breakpoints||{}));return c!==s?!1:e.every(o=>{const a=t[o],u=n[o];return typeof a=="function"?`${a}`==`${u}`:!Ht(a)||!Ht(u)?a===u:Tt(a,u)})}function Gt(t){return t.concat().sort((n,e)=>n.name>e.name?1:-1).map(n=>n.options)}function mn(t,n){if(t.length!==n.length)return!1;const e=Gt(t),r=Gt(n);return e.every((c,s)=>{const o=r[s];return Tt(c,o)})}function At(t){return typeof t=="number"}function Nt(t){return typeof t=="string"}function St(t){return typeof t=="boolean"}function qt(t){return Object.prototype.toString.call(t)==="[object Object]"}function P(t){return Math.abs(t)}function Dt(t){return Math.sign(t)}function dt(t,n){return P(t-n)}function gn(t,n){if(t===0||n===0||P(t)<=P(n))return 0;const e=dt(P(t),P(n));return P(e/t)}function hn(t){return Math.round(t*100)/100}function pt(t){return mt(t).map(Number)}function V(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function Pt(t,n){return n===ht(t)}function $t(t,n=0){return Array.from(Array(t),(e,r)=>n+r)}function mt(t){return Object.keys(t)}function _t(t,n){return[t,n].reduce((e,r)=>(mt(r).forEach(c=>{const s=e[c],o=r[c],a=qt(s)&&qt(o);e[c]=a?_t(s,o):o}),e),{})}function It(t,n){return typeof n.MouseEvent<"u"&&t instanceof n.MouseEvent}function xn(t,n){const e={start:r,center:c,end:s};function r(){return 0}function c(u){return s(u)/2}function s(u){return n-u}function o(u,i){return Nt(t)?e[t](u):t(n,u,i)}return{measure:o}}function gt(){let t=[];function n(c,s,o,a={passive:!0}){let u;if("addEventListener"in c)c.addEventListener(s,o,a),u=()=>c.removeEventListener(s,o,a);else{const i=c;i.addListener(o),u=()=>i.removeListener(o)}return t.push(u),r}function e(){t=t.filter(c=>c())}const r={add:n,clear:e};return r}function yn(t,n,e,r){const c=gt(),s=1e3/60;let o=null,a=0,u=0;function i(){c.add(t,"visibilitychange",()=>{t.hidden&&l()})}function x(){S(),c.clear()}function d(h){if(!u)return;o||(o=h,e(),e());const f=h-o;for(o=h,a+=f;a>=s;)e(),a-=s;const g=a/s;r(g),u&&(u=n.requestAnimationFrame(d))}function p(){u||(u=n.requestAnimationFrame(d))}function S(){n.cancelAnimationFrame(u),o=null,a=0,u=0}function l(){o=null,a=0}return{init:i,destroy:x,start:p,stop:S,update:e,render:r}}function Sn(t,n){const e=n==="rtl",r=t==="y",c=r?"y":"x",s=r?"x":"y",o=!r&&e?-1:1,a=x(),u=d();function i(l){const{height:m,width:h}=l;return r?m:h}function x(){return r?"top":e?"right":"left"}function d(){return r?"bottom":e?"left":"right"}function p(l){return l*o}return{scroll:c,cross:s,startEdge:a,endEdge:u,measureSize:i,direction:p}}function ot(t=0,n=0){const e=P(t-n);function r(i){return i<t}function c(i){return i>n}function s(i){return r(i)||c(i)}function o(i){return s(i)?r(i)?t:n:i}function a(i){return e?i-e*Math.ceil((i-n)/e):i}return{length:e,max:n,min:t,constrain:o,reachedAny:s,reachedMax:c,reachedMin:r,removeOffset:a}}function Qt(t,n,e){const{constrain:r}=ot(0,t),c=t+1;let s=o(n);function o(p){return e?P((c+p)%c):r(p)}function a(){return s}function u(p){return s=o(p),d}function i(p){return x().set(a()+p)}function x(){return Qt(t,a(),e)}const d={get:a,set:u,add:i,clone:x};return d}function bn(t,n,e,r,c,s,o,a,u,i,x,d,p,S,l,m,h,f,g){const{cross:b,direction:E}=t,A=["INPUT","SELECT","TEXTAREA"],w={passive:!1},C=gt(),v=gt(),N=ot(50,225).constrain(S.measure(20)),O={mouse:300,touch:400},I={mouse:500,touch:600},z=l?43:25;let G=!1,q=0,$=0,tt=!1,Z=!1,_=!1,Q=!1;function ct(y){if(!g)return;function T(F){(St(g)||g(y,F))&&at(F)}const M=n;C.add(M,"dragstart",F=>F.preventDefault(),w).add(M,"touchmove",()=>{},w).add(M,"touchend",()=>{}).add(M,"touchstart",T).add(M,"mousedown",T).add(M,"touchcancel",j).add(M,"contextmenu",j).add(M,"click",X,!0)}function K(){C.clear(),v.clear()}function rt(){const y=Q?e:n;v.add(y,"touchmove",R,w).add(y,"touchend",j).add(y,"mousemove",R,w).add(y,"mouseup",j)}function st(y){const T=y.nodeName||"";return A.includes(T)}function J(){return(l?I:O)[Q?"mouse":"touch"]}function ut(y,T){const M=d.add(Dt(y)*-1),F=x.byDistance(y,!l).distance;return l||P(y)<N?F:h&&T?F*.5:x.byIndex(M.get(),0).distance}function at(y){const T=It(y,r);Q=T,_=l&&T&&!y.buttons&&G,G=dt(c.get(),o.get())>=2,!(T&&y.button!==0)&&(st(y.target)||(tt=!0,s.pointerDown(y),i.useFriction(0).useDuration(0),c.set(o),rt(),q=s.readPoint(y),$=s.readPoint(y,b),p.emit("pointerDown")))}function R(y){if(!It(y,r)&&y.touches.length>=2)return j(y);const M=s.readPoint(y),F=s.readPoint(y,b),U=dt(M,q),Y=dt(F,$);if(!Z&&!Q&&(!y.cancelable||(Z=U>Y,!Z)))return j(y);const nt=s.pointerMove(y);U>m&&(_=!0),i.useFriction(.3).useDuration(.75),a.start(),c.add(E(nt)),y.preventDefault()}function j(y){const M=x.byDistance(0,!1).index!==d.get(),F=s.pointerUp(y)*J(),U=ut(E(F),M),Y=gn(F,U),nt=z-10*Y,W=f+Y/50;Z=!1,tt=!1,v.clear(),i.useDuration(nt).useFriction(W),u.distance(U,!l),Q=!1,p.emit("pointerUp")}function X(y){_&&(y.stopPropagation(),y.preventDefault(),_=!1)}function B(){return tt}return{init:ct,destroy:K,pointerDown:B}}function Cn(t,n){let r,c;function s(d){return d.timeStamp}function o(d,p){const l=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(It(d,n)?d:d.touches[0])[l]}function a(d){return r=d,c=d,o(d)}function u(d){const p=o(d)-o(c),S=s(d)-s(r)>170;return c=d,S&&(r=d),p}function i(d){if(!r||!c)return 0;const p=o(c)-o(r),S=s(d)-s(r),l=s(d)-s(c)>170,m=p/S;return S&&!l&&P(m)>.1?m:0}return{pointerDown:a,pointerMove:u,pointerUp:i,readPoint:o}}function vn(){function t(e){const{offsetTop:r,offsetLeft:c,offsetWidth:s,offsetHeight:o}=e;return{top:r,right:c+s,bottom:r+o,left:c,width:s,height:o}}return{measure:t}}function En(t){function n(r){return t*(r/100)}return{measure:n}}function wn(t,n,e,r,c,s,o){const a=[t].concat(r);let u,i,x=[],d=!1;function p(h){return c.measureSize(o.measure(h))}function S(h){if(!s)return;i=p(t),x=r.map(p);function f(g){for(const b of g){if(d)return;const E=b.target===t,A=r.indexOf(b.target),w=E?i:x[A],C=p(E?t:r[A]);if(P(C-w)>=.5){h.reInit(),n.emit("resize");break}}}u=new ResizeObserver(g=>{(St(s)||s(h,g))&&f(g)}),e.requestAnimationFrame(()=>{a.forEach(g=>u.observe(g))})}function l(){d=!0,u&&u.disconnect()}return{init:S,destroy:l}}function Ln(t,n,e,r,c,s){let o=0,a=0,u=c,i=s,x=t.get(),d=0;function p(){const w=r.get()-t.get(),C=!u;let v=0;return C?(o=0,e.set(r),t.set(r),v=w):(e.set(t),o+=w/u,o*=i,x+=o,t.add(o),v=x-d),a=Dt(v),d=x,A}function S(){const w=r.get()-n.get();return P(w)<.001}function l(){return u}function m(){return a}function h(){return o}function f(){return b(c)}function g(){return E(s)}function b(w){return u=w,A}function E(w){return i=w,A}const A={direction:m,duration:l,velocity:h,seek:p,settled:S,useBaseFriction:g,useBaseDuration:f,useFriction:E,useDuration:b};return A}function Nn(t,n,e,r,c){const s=c.measure(10),o=c.measure(50),a=ot(.1,.99);let u=!1;function i(){return!(u||!t.reachedAny(e.get())||!t.reachedAny(n.get()))}function x(S){if(!i())return;const l=t.reachedMin(n.get())?"min":"max",m=P(t[l]-n.get()),h=e.get()-n.get(),f=a.constrain(m/o);e.subtract(h*f),!S&&P(h)<s&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())}function d(S){u=!S}return{shouldConstrain:i,constrain:x,toggleActive:d}}function In(t,n,e,r,c){const s=ot(-n+t,0),o=d(),a=x(),u=p();function i(l,m){return dt(l,m)<=1}function x(){const l=o[0],m=V(o),h=o.lastIndexOf(l),f=o.indexOf(m)+1;return ot(h,f)}function d(){return e.map((l,m)=>{const{min:h,max:f}=s,g=s.constrain(l),b=!m,E=Pt(e,m);return b?f:E||i(h,g)?h:i(f,g)?f:g}).map(l=>parseFloat(l.toFixed(3)))}function p(){if(n<=t+c)return[s.max];if(r==="keepSnaps")return o;const{min:l,max:m}=a;return o.slice(l,m)}return{snapsContained:u,scrollContainLimit:a}}function Tn(t,n,e){const r=n[0],c=e?r-t:V(n);return{limit:ot(c,r)}}function An(t,n,e,r){const s=n.min+.1,o=n.max+.1,{reachedMin:a,reachedMax:u}=ot(s,o);function i(p){return p===1?u(e.get()):p===-1?a(e.get()):!1}function x(p){if(!i(p))return;const S=t*(p*-1);r.forEach(l=>l.add(S))}return{loop:x}}function Dn(t){const{max:n,length:e}=t;function r(s){const o=s-n;return e?o/-e:0}return{get:r}}function Pn(t,n,e,r,c){const{startEdge:s,endEdge:o}=t,{groupSlides:a}=c,u=d().map(n.measure),i=p(),x=S();function d(){return a(r).map(m=>V(m)[o]-m[0][s]).map(P)}function p(){return r.map(m=>e[s]-m[s]).map(m=>-P(m))}function S(){return a(i).map(m=>m[0]).map((m,h)=>m+u[h])}return{snaps:i,snapsAligned:x}}function On(t,n,e,r,c,s){const{groupSlides:o}=c,{min:a,max:u}=r,i=x();function x(){const p=o(s),S=!t||n==="keepSnaps";return e.length===1?[s]:S?p:p.slice(a,u).map((l,m,h)=>{const f=!m,g=Pt(h,m);if(f){const b=V(h[0])+1;return $t(b)}if(g){const b=ht(s)-V(h)[0]+1;return $t(b,V(h)[0])}return l})}return{slideRegistry:i}}function Mn(t,n,e,r,c){const{reachedAny:s,removeOffset:o,constrain:a}=r;function u(l){return l.concat().sort((m,h)=>P(m)-P(h))[0]}function i(l){const m=t?o(l):a(l),h=n.map((g,b)=>({diff:x(g-m,0),index:b})).sort((g,b)=>P(g.diff)-P(b.diff)),{index:f}=h[0];return{index:f,distance:m}}function x(l,m){const h=[l,l+e,l-e];if(!t)return l;if(!m)return u(h);const f=h.filter(g=>Dt(g)===m);return f.length?u(f):V(h)-e}function d(l,m){const h=n[l]-c.get(),f=x(h,m);return{index:l,distance:f}}function p(l,m){const h=c.get()+l,{index:f,distance:g}=i(h),b=!t&&s(h);if(!m||b)return{index:f,distance:l};const E=n[f]-g,A=l+x(E,0);return{index:f,distance:A}}return{byDistance:p,byIndex:d,shortcut:x}}function kn(t,n,e,r,c,s,o){function a(d){const p=d.distance,S=d.index!==n.get();s.add(p),p&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),S&&(e.set(n.get()),n.set(d.index),o.emit("select"))}function u(d,p){const S=c.byDistance(d,p);a(S)}function i(d,p){const S=n.clone().set(d),l=c.byIndex(S.get(),p);a(l)}return{distance:u,index:i}}function jn(t,n,e,r,c,s,o,a){const u={passive:!0,capture:!0};let i=0;function x(S){if(!a)return;function l(m){if(new Date().getTime()-i>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const g=e.findIndex(b=>b.includes(m));At(g)&&(c.useDuration(0),r.index(g,0),o.emit("slideFocus"))}s.add(document,"keydown",d,!1),n.forEach((m,h)=>{s.add(m,"focus",f=>{(St(a)||a(S,f))&&l(h)},u)})}function d(S){S.code==="Tab"&&(i=new Date().getTime())}return{init:x}}function ft(t){let n=t;function e(){return n}function r(u){n=o(u)}function c(u){n+=o(u)}function s(u){n-=o(u)}function o(u){return At(u)?u:u.get()}return{get:e,set:r,add:c,subtract:s}}function Jt(t,n){const e=t.scroll==="x"?o:a,r=n.style;let c=null,s=!1;function o(p){return`translate3d(${p}px,0px,0px)`}function a(p){return`translate3d(0px,${p}px,0px)`}function u(p){if(s)return;const S=hn(t.direction(p));S!==c&&(r.transform=e(S),c=S)}function i(p){s=!p}function x(){s||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))}return{clear:x,to:u,toggleActive:i}}function Fn(t,n,e,r,c,s,o,a,u){const x=pt(c),d=pt(c).reverse(),p=f().concat(g());function S(C,v){return C.reduce((N,O)=>N-c[O],v)}function l(C,v){return C.reduce((N,O)=>S(N,v)>0?N.concat([O]):N,[])}function m(C){return s.map((v,N)=>({start:v-r[N]+.5+C,end:v+n-.5+C}))}function h(C,v,N){const O=m(v);return C.map(I=>{const z=N?0:-e,G=N?e:0,q=N?"end":"start",$=O[I][q];return{index:I,loopPoint:$,slideLocation:ft(-1),translate:Jt(t,u[I]),target:()=>a.get()>$?z:G}})}function f(){const C=o[0],v=l(d,C);return h(v,e,!1)}function g(){const C=n-o[0]-1,v=l(x,C);return h(v,-e,!0)}function b(){return p.every(({index:C})=>{const v=x.filter(N=>N!==C);return S(v,n)<=.1})}function E(){p.forEach(C=>{const{target:v,translate:N,slideLocation:O}=C,I=v();I!==O.get()&&(N.to(I),O.set(I))})}function A(){p.forEach(C=>C.translate.clear())}return{canLoop:b,clear:A,loop:E,loopPoints:p}}function zn(t,n,e){let r,c=!1;function s(u){if(!e)return;function i(x){for(const d of x)if(d.type==="childList"){u.reInit(),n.emit("slidesChanged");break}}r=new MutationObserver(x=>{c||(St(e)||e(u,x))&&i(x)}),r.observe(t,{childList:!0})}function o(){r&&r.disconnect(),c=!0}return{init:s,destroy:o}}function Rn(t,n,e,r){const c={};let s=null,o=null,a,u=!1;function i(){a=new IntersectionObserver(l=>{u||(l.forEach(m=>{const h=n.indexOf(m.target);c[h]=m}),s=null,o=null,e.emit("slidesInView"))},{root:t.parentElement,threshold:r}),n.forEach(l=>a.observe(l))}function x(){a&&a.disconnect(),u=!0}function d(l){return mt(c).reduce((m,h)=>{const f=parseInt(h),{isIntersecting:g}=c[f];return(l&&g||!l&&!g)&&m.push(f),m},[])}function p(l=!0){if(l&&s)return s;if(!l&&o)return o;const m=d(l);return l&&(s=m),l||(o=m),m}return{init:i,destroy:x,get:p}}function Bn(t,n,e,r,c,s){const{measureSize:o,startEdge:a,endEdge:u}=t,i=e[0]&&c,x=l(),d=m(),p=e.map(o),S=h();function l(){if(!i)return 0;const g=e[0];return P(n[a]-g[a])}function m(){if(!i)return 0;const g=s.getComputedStyle(V(r));return parseFloat(g.getPropertyValue(`margin-${u}`))}function h(){return e.map((g,b,E)=>{const A=!b,w=Pt(E,b);return A?p[b]+x:w?p[b]+d:E[b+1][a]-g[a]}).map(P)}return{slideSizes:p,slideSizesWithGaps:S,startGap:x,endGap:d}}function Vn(t,n,e,r,c,s,o,a,u){const{startEdge:i,endEdge:x,direction:d}=t,p=At(e);function S(f,g){return pt(f).filter(b=>b%g===0).map(b=>f.slice(b,b+g))}function l(f){return f.length?pt(f).reduce((g,b,E)=>{const A=V(g)||0,w=A===0,C=b===ht(f),v=c[i]-s[A][i],N=c[i]-s[b][x],O=!r&&w?d(o):0,I=!r&&C?d(a):0,z=P(N-I-(v+O));return E&&z>n+u&&g.push(b),C&&g.push(f.length),g},[]).map((g,b,E)=>{const A=Math.max(E[b-1]||0);return f.slice(A,g)}):[]}function m(f){return p?S(f,e):l(f)}return{groupSlides:m}}function Hn(t,n,e,r,c,s,o){const{align:a,axis:u,direction:i,startIndex:x,loop:d,duration:p,dragFree:S,dragThreshold:l,inViewThreshold:m,slidesToScroll:h,skipSnaps:f,containScroll:g,watchResize:b,watchSlides:E,watchDrag:A,watchFocus:w}=s,C=2,v=vn(),N=v.measure(n),O=e.map(v.measure),I=Sn(u,i),z=I.measureSize(N),G=En(z),q=xn(a,z),$=!d&&!!g,tt=d||!!g,{slideSizes:Z,slideSizesWithGaps:_,startGap:Q,endGap:ct}=Bn(I,N,O,e,tt,c),K=Vn(I,z,h,d,N,O,Q,ct,C),{snaps:rt,snapsAligned:st}=Pn(I,q,N,O,K),J=-V(rt)+V(_),{snapsContained:ut,scrollContainLimit:at}=In(z,J,st,g,C),R=$?ut:st,{limit:j}=Tn(J,R,d),X=Qt(ht(R),x,d),B=X.clone(),D=pt(e),y=({dragHandler:it,scrollBody:wt,scrollBounds:Lt,options:{loop:xt}})=>{xt||Lt.constrain(it.pointerDown()),wt.seek()},T=({scrollBody:it,translate:wt,location:Lt,offsetLocation:xt,previousLocation:Wt,scrollLooper:tn,slideLooper:nn,dragHandler:en,animation:on,eventHandler:Ft,scrollBounds:rn,options:{loop:zt}},Rt)=>{const Bt=it.settled(),sn=!rn.shouldConstrain(),Vt=zt?Bt:Bt&&sn;Vt&&!en.pointerDown()&&(on.stop(),Ft.emit("settle")),Vt||Ft.emit("scroll");const cn=Lt.get()*Rt+Wt.get()*(1-Rt);xt.set(cn),zt&&(tn.loop(it.direction()),nn.loop()),wt.to(xt.get())},M=yn(r,c,()=>y(Et),it=>T(Et,it)),F=.68,U=R[X.get()],Y=ft(U),nt=ft(U),W=ft(U),et=ft(U),lt=Ln(Y,W,nt,et,p,F),Ct=Mn(d,R,J,j,et),vt=kn(M,X,B,lt,Ct,et,o),Mt=Dn(j),kt=gt(),Yt=Rn(n,e,o,m),{slideRegistry:jt}=On($,g,R,at,K,D),Zt=jn(t,e,jt,vt,lt,kt,o,w),Et={ownerDocument:r,ownerWindow:c,eventHandler:o,containerRect:N,slideRects:O,animation:M,axis:I,dragHandler:bn(I,t,r,c,et,Cn(I,c),Y,M,vt,lt,Ct,X,o,G,S,l,f,F,A),eventStore:kt,percentOfView:G,index:X,indexPrevious:B,limit:j,location:Y,offsetLocation:W,previousLocation:nt,options:s,resizeHandler:wn(n,o,c,e,I,b,v),scrollBody:lt,scrollBounds:Nn(j,W,et,lt,G),scrollLooper:An(J,j,W,[Y,W,nt,et]),scrollProgress:Mt,scrollSnapList:R.map(Mt.get),scrollSnaps:R,scrollTarget:Ct,scrollTo:vt,slideLooper:Fn(I,z,J,Z,_,rt,R,W,e),slideFocus:Zt,slidesHandler:zn(n,o,E),slidesInView:Yt,slideIndexes:D,slideRegistry:jt,slidesToScroll:K,target:et,translate:Jt(I,n)};return Et}function Gn(){let t={},n;function e(i){n=i}function r(i){return t[i]||[]}function c(i){return r(i).forEach(x=>x(n,i)),u}function s(i,x){return t[i]=r(i).concat([x]),u}function o(i,x){return t[i]=r(i).filter(d=>d!==x),u}function a(){t={}}const u={init:e,emit:c,off:o,on:s,clear:a};return u}const qn={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function $n(t){function n(s,o){return _t(s,o||{})}function e(s){const o=s.breakpoints||{},a=mt(o).filter(u=>t.matchMedia(u).matches).map(u=>o[u]).reduce((u,i)=>n(u,i),{});return n(s,a)}function r(s){return s.map(o=>mt(o.breakpoints||{})).reduce((o,a)=>o.concat(a),[]).map(t.matchMedia)}return{mergeOptions:n,optionsAtMedia:e,optionsMediaQueries:r}}function Kn(t){let n=[];function e(s,o){return n=o.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),n.forEach(a=>a.init(s,t)),o.reduce((a,u)=>Object.assign(a,{[u.name]:u}),{})}function r(){n=n.filter(s=>s.destroy())}return{init:e,destroy:r}}function yt(t,n,e){const r=t.ownerDocument,c=r.defaultView,s=$n(c),o=Kn(s),a=gt(),u=Gn(),{mergeOptions:i,optionsAtMedia:x,optionsMediaQueries:d}=s,{on:p,off:S,emit:l}=u,m=I;let h=!1,f,g=i(qn,yt.globalOptions),b=i(g),E=[],A,w,C;function v(){const{container:D,slides:y}=b;w=(Nt(D)?t.querySelector(D):D)||t.children[0];const M=Nt(y)?w.querySelectorAll(y):y;C=[].slice.call(M||w.children)}function N(D){const y=Hn(t,w,C,r,c,D,u);if(D.loop&&!y.slideLooper.canLoop()){const T=Object.assign({},D,{loop:!1});return N(T)}return y}function O(D,y){h||(g=i(g,D),b=x(g),E=y||E,v(),f=N(b),d([g,...E.map(({options:T})=>T)]).forEach(T=>a.add(T,"change",I)),b.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(B),f.eventHandler.init(B),f.resizeHandler.init(B),f.slidesHandler.init(B),f.options.loop&&f.slideLooper.loop(),w.offsetParent&&C.length&&f.dragHandler.init(B),A=o.init(B,E)))}function I(D,y){const T=K();z(),O(i({startIndex:T},D),y),u.emit("reInit")}function z(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),o.destroy(),a.clear()}function G(){h||(h=!0,a.clear(),z(),u.emit("destroy"),u.clear())}function q(D,y,T){!b.active||h||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:b.duration),f.scrollTo.index(D,T||0))}function $(D){const y=f.index.add(1).get();q(y,D,-1)}function tt(D){const y=f.index.add(-1).get();q(y,D,1)}function Z(){return f.index.add(1).get()!==K()}function _(){return f.index.add(-1).get()!==K()}function Q(){return f.scrollSnapList}function ct(){return f.scrollProgress.get(f.location.get())}function K(){return f.index.get()}function rt(){return f.indexPrevious.get()}function st(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function ut(){return A}function at(){return f}function R(){return t}function j(){return w}function X(){return C}const B={canScrollNext:Z,canScrollPrev:_,containerNode:j,internalEngine:at,destroy:G,off:S,on:p,emit:l,plugins:ut,previousScrollSnap:rt,reInit:m,rootNode:R,scrollNext:$,scrollPrev:tt,scrollProgress:ct,scrollSnapList:Q,scrollTo:q,selectedScrollSnap:K,slideNodes:X,slidesInView:st,slidesNotInView:J};return O(n,e),setTimeout(()=>u.emit("init"),0),B}yt.globalOptions=void 0;function Ot(t={},n=[]){const e=L.useRef(t),r=L.useRef(n),[c,s]=L.useState(),[o,a]=L.useState(),u=L.useCallback(()=>{c&&c.reInit(e.current,r.current)},[c]);return L.useEffect(()=>{Tt(e.current,t)||(e.current=t,u())},[t,u]),L.useEffect(()=>{mn(r.current,n)||(r.current=n,u())},[n,u]),L.useEffect(()=>{if(pn()&&o){yt.globalOptions=Ot.globalOptions;const i=yt(o,e.current,r.current);return s(i),()=>i.destroy()}else s(void 0)},[o,s]),[a,c]}Ot.globalOptions=void 0;const Xt=L.createContext(null);function bt(){const t=L.useContext(Xt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Un=L.forwardRef(({orientation:t="horizontal",opts:n,setApi:e,plugins:r,className:c,children:s,...o},a)=>{const[u,i]=Ot({...n,axis:t==="horizontal"?"x":"y"},r),[x,d]=L.useState(!1),[p,S]=L.useState(!1),l=L.useCallback(g=>{g&&(d(g.canScrollPrev()),S(g.canScrollNext()))},[]),m=L.useCallback(()=>{i==null||i.scrollPrev()},[i]),h=L.useCallback(()=>{i==null||i.scrollNext()},[i]),f=L.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),m()):g.key==="ArrowRight"&&(g.preventDefault(),h())},[m,h]);return L.useEffect(()=>{!i||!e||e(i)},[i,e]),L.useEffect(()=>{if(i)return l(i),i.on("reInit",l),i.on("select",l),()=>{i==null||i.off("select",l)}},[i,l]),k.jsx(Xt.Provider,{value:{carouselRef:u,api:i,opts:n,orientation:t||((n==null?void 0:n.axis)==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:h,canScrollPrev:x,canScrollNext:p},children:k.jsx("div",{ref:a,onKeyDownCapture:f,className:H("relative",c),role:"region","aria-roledescription":"carousel",...o,children:s})})});Un.displayName="Carousel";const _n=L.forwardRef(({className:t,...n},e)=>{const{carouselRef:r,orientation:c}=bt();return k.jsx("div",{ref:r,className:"overflow-hidden",children:k.jsx("div",{ref:e,className:H("flex",c==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...n})})});_n.displayName="CarouselContent";const Qn=L.forwardRef(({className:t,...n},e)=>{const{orientation:r}=bt();return k.jsx("div",{ref:e,role:"group","aria-roledescription":"slide",className:H("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",t),...n})});Qn.displayName="CarouselItem";const Jn=L.forwardRef(({className:t,variant:n="outline",size:e="icon",...r},c)=>{const{orientation:s,scrollPrev:o,canScrollPrev:a}=bt();return k.jsxs(Ut,{ref:c,variant:n,size:e,className:H("absolute h-8 w-8 rounded-full",s==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:o,...r,children:[k.jsx(an,{className:"size-4"}),k.jsx("span",{className:"sr-only",children:"Previous slide"})]})});Jn.displayName="CarouselPrevious";const Xn=L.forwardRef(({className:t,variant:n="outline",size:e="icon",...r},c)=>{const{orientation:s,scrollNext:o,canScrollNext:a}=bt();return k.jsxs(Ut,{ref:c,variant:n,size:e,className:H("absolute h-8 w-8 rounded-full",s==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:o,...r,children:[k.jsx(fn,{className:"size-4"}),k.jsx("span",{className:"sr-only",children:"Next slide"})]})});Xn.displayName="CarouselNext";const Yn=L.forwardRef(({className:t,...n},e)=>k.jsx("div",{ref:e,className:H("rounded-xl border bg-card text-card-foreground shadow",t),...n}));Yn.displayName="Card";const Zn=L.forwardRef(({className:t,...n},e)=>k.jsx("div",{ref:e,className:H("flex flex-col space-y-1.5 p-6",t),...n}));Zn.displayName="CardHeader";const Wn=L.forwardRef(({className:t,...n},e)=>k.jsx("div",{ref:e,className:H("font-semibold leading-none tracking-tight",t),...n}));Wn.displayName="CardTitle";const te=L.forwardRef(({className:t,...n},e)=>k.jsx("div",{ref:e,className:H("text-sm text-muted-foreground",t),...n}));te.displayName="CardDescription";const ne=L.forwardRef(({className:t,...n},e)=>k.jsx("div",{ref:e,className:H("p-6 pt-0",t),...n}));ne.displayName="CardContent";const ee=L.forwardRef(({className:t,...n},e)=>k.jsx("div",{ref:e,className:H("flex items-center p-6 pt-0",t),...n}));ee.displayName="CardFooter";export{an as A,Yn as C,Zn as a,ne as b,Un as c,_n as d,Qn as e,fn as f};
