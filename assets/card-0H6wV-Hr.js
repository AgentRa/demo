import{r as v,j as M,c as H,B as Kt}from"./index-0Y2mJUI_.js";/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ut=(...t)=>t.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ae={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=v.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...a},u)=>v.createElement("svg",{ref:u,...ae,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Ut("lucide",i),...a},[...o.map(([c,x])=>v.createElement(c,x)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=(t,e)=>{const n=v.forwardRef(({className:r,...i},s)=>v.createElement(le,{ref:s,iconNode:e,className:Ut(`lucide-${ue(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],de=_t("ArrowLeft",fe);/**
 * @license lucide-react v0.474.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],me=_t("ArrowRight",pe);function ge(t){return Object.prototype.toString.call(t)==="[object Object]"}function Ht(t){return ge(t)||Array.isArray(t)}function he(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Tt(t,e){const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;const i=JSON.stringify(Object.keys(t.breakpoints||{})),s=JSON.stringify(Object.keys(e.breakpoints||{}));return i!==s?!1:n.every(o=>{const a=t[o],u=e[o];return typeof a=="function"?`${a}`==`${u}`:!Ht(a)||!Ht(u)?a===u:Tt(a,u)})}function Gt(t){return t.concat().sort((e,n)=>e.name>n.name?1:-1).map(e=>e.options)}function xe(t,e){if(t.length!==e.length)return!1;const n=Gt(t),r=Gt(e);return n.every((i,s)=>{const o=r[s];return Tt(i,o)})}function At(t){return typeof t=="number"}function Nt(t){return typeof t=="string"}function St(t){return typeof t=="boolean"}function $t(t){return Object.prototype.toString.call(t)==="[object Object]"}function P(t){return Math.abs(t)}function Dt(t){return Math.sign(t)}function dt(t,e){return P(t-e)}function ye(t,e){if(t===0||e===0||P(t)<=P(e))return 0;const n=dt(P(t),P(e));return P(n/t)}function Se(t){return Math.round(t*100)/100}function pt(t){return mt(t).map(Number)}function V(t){return t[ht(t)]}function ht(t){return Math.max(0,t.length-1)}function Pt(t,e){return e===ht(t)}function qt(t,e=0){return Array.from(Array(t),(n,r)=>e+r)}function mt(t){return Object.keys(t)}function Qt(t,e){return[t,e].reduce((n,r)=>(mt(r).forEach(i=>{const s=n[i],o=r[i],a=$t(s)&&$t(o);n[i]=a?Qt(s,o):o}),n),{})}function It(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function be(t,e){const n={start:r,center:i,end:s};function r(){return 0}function i(u){return s(u)/2}function s(u){return e-u}function o(u,c){return Nt(t)?n[t](u):t(e,u,c)}return{measure:o}}function gt(){let t=[];function e(i,s,o,a={passive:!0}){let u;if("addEventListener"in i)i.addEventListener(s,o,a),u=()=>i.removeEventListener(s,o,a);else{const c=i;c.addListener(o),u=()=>c.removeListener(o)}return t.push(u),r}function n(){t=t.filter(i=>i())}const r={add:e,clear:n};return r}function Ce(t,e,n,r){const i=gt(),s=1e3/60;let o=null,a=0,u=0;function c(){i.add(t,"visibilitychange",()=>{t.hidden&&l()})}function x(){S(),i.clear()}function d(h){if(!u)return;o||(o=h,n(),n());const f=h-o;for(o=h,a+=f;a>=s;)n(),a-=s;const g=a/s;r(g),u&&(u=e.requestAnimationFrame(d))}function p(){u||(u=e.requestAnimationFrame(d))}function S(){e.cancelAnimationFrame(u),o=null,a=0,u=0}function l(){o=null,a=0}return{init:c,destroy:x,start:p,stop:S,update:n,render:r}}function ve(t,e){const n=e==="rtl",r=t==="y",i=r?"y":"x",s=r?"x":"y",o=!r&&n?-1:1,a=x(),u=d();function c(l){const{height:m,width:h}=l;return r?m:h}function x(){return r?"top":n?"right":"left"}function d(){return r?"bottom":n?"left":"right"}function p(l){return l*o}return{scroll:i,cross:s,startEdge:a,endEdge:u,measureSize:c,direction:p}}function ot(t=0,e=0){const n=P(t-e);function r(c){return c<t}function i(c){return c>e}function s(c){return r(c)||i(c)}function o(c){return s(c)?r(c)?t:e:c}function a(c){return n?c-n*Math.ceil((c-e)/n):c}return{length:n,max:e,min:t,constrain:o,reachedAny:s,reachedMax:i,reachedMin:r,removeOffset:a}}function Jt(t,e,n){const{constrain:r}=ot(0,t),i=t+1;let s=o(e);function o(p){return n?P((i+p)%i):r(p)}function a(){return s}function u(p){return s=o(p),d}function c(p){return x().set(a()+p)}function x(){return Jt(t,a(),n)}const d={get:a,set:u,add:c,clone:x};return d}function we(t,e,n,r,i,s,o,a,u,c,x,d,p,S,l,m,h,f,g){const{cross:b,direction:E}=t,A=["INPUT","SELECT","TEXTAREA"],L={passive:!1},C=gt(),w=gt(),N=ot(50,225).constrain(S.measure(20)),k={mouse:300,touch:400},I={mouse:500,touch:600},R=l?43:25;let G=!1,$=0,q=0,tt=!1,Z=!1,_=!1,Q=!1;function ct(y){if(!g)return;function T(F){(St(g)||g(y,F))&&at(F)}const O=e;C.add(O,"dragstart",F=>F.preventDefault(),L).add(O,"touchmove",()=>{},L).add(O,"touchend",()=>{}).add(O,"touchstart",T).add(O,"mousedown",T).add(O,"touchcancel",j).add(O,"contextmenu",j).add(O,"click",X,!0)}function K(){C.clear(),w.clear()}function rt(){const y=Q?n:e;w.add(y,"touchmove",z,L).add(y,"touchend",j).add(y,"mousemove",z,L).add(y,"mouseup",j)}function st(y){const T=y.nodeName||"";return A.includes(T)}function J(){return(l?I:k)[Q?"mouse":"touch"]}function ut(y,T){const O=d.add(Dt(y)*-1),F=x.byDistance(y,!l).distance;return l||P(y)<N?F:h&&T?F*.5:x.byIndex(O.get(),0).distance}function at(y){const T=It(y,r);Q=T,_=l&&T&&!y.buttons&&G,G=dt(i.get(),o.get())>=2,!(T&&y.button!==0)&&(st(y.target)||(tt=!0,s.pointerDown(y),c.useFriction(0).useDuration(0),i.set(o),rt(),$=s.readPoint(y),q=s.readPoint(y,b),p.emit("pointerDown")))}function z(y){if(!It(y,r)&&y.touches.length>=2)return j(y);const O=s.readPoint(y),F=s.readPoint(y,b),U=dt(O,$),Y=dt(F,q);if(!Z&&!Q&&(!y.cancelable||(Z=U>Y,!Z)))return j(y);const et=s.pointerMove(y);U>m&&(_=!0),c.useFriction(.3).useDuration(.75),a.start(),i.add(E(et)),y.preventDefault()}function j(y){const O=x.byDistance(0,!1).index!==d.get(),F=s.pointerUp(y)*J(),U=ut(E(F),O),Y=ye(F,U),et=R-10*Y,W=f+Y/50;Z=!1,tt=!1,w.clear(),c.useDuration(et).useFriction(W),u.distance(U,!l),Q=!1,p.emit("pointerUp")}function X(y){_&&(y.stopPropagation(),y.preventDefault(),_=!1)}function B(){return tt}return{init:ct,destroy:K,pointerDown:B}}function Ee(t,e){let r,i;function s(d){return d.timeStamp}function o(d,p){const l=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(It(d,e)?d:d.touches[0])[l]}function a(d){return r=d,i=d,o(d)}function u(d){const p=o(d)-o(i),S=s(d)-s(r)>170;return i=d,S&&(r=d),p}function c(d){if(!r||!i)return 0;const p=o(i)-o(r),S=s(d)-s(r),l=s(d)-s(i)>170,m=p/S;return S&&!l&&P(m)>.1?m:0}return{pointerDown:a,pointerMove:u,pointerUp:c,readPoint:o}}function Le(){function t(n){const{offsetTop:r,offsetLeft:i,offsetWidth:s,offsetHeight:o}=n;return{top:r,right:i+s,bottom:r+o,left:i,width:s,height:o}}return{measure:t}}function Ne(t){function e(r){return t*(r/100)}return{measure:e}}function Ie(t,e,n,r,i,s,o){const a=[t].concat(r);let u,c,x=[],d=!1;function p(h){return i.measureSize(o.measure(h))}function S(h){if(!s)return;c=p(t),x=r.map(p);function f(g){for(const b of g){if(d)return;const E=b.target===t,A=r.indexOf(b.target),L=E?c:x[A],C=p(E?t:r[A]);if(P(C-L)>=.5){h.reInit(),e.emit("resize");break}}}u=new ResizeObserver(g=>{(St(s)||s(h,g))&&f(g)}),n.requestAnimationFrame(()=>{a.forEach(g=>u.observe(g))})}function l(){d=!0,u&&u.disconnect()}return{init:S,destroy:l}}function Te(t,e,n,r,i,s){let o=0,a=0,u=i,c=s,x=t.get(),d=0;function p(){const L=r.get()-t.get(),C=!u;let w=0;return C?(o=0,n.set(r),t.set(r),w=L):(n.set(t),o+=L/u,o*=c,x+=o,t.add(o),w=x-d),a=Dt(w),d=x,A}function S(){const L=r.get()-e.get();return P(L)<.001}function l(){return u}function m(){return a}function h(){return o}function f(){return b(i)}function g(){return E(s)}function b(L){return u=L,A}function E(L){return c=L,A}const A={direction:m,duration:l,velocity:h,seek:p,settled:S,useBaseFriction:g,useBaseDuration:f,useFriction:E,useDuration:b};return A}function Ae(t,e,n,r,i){const s=i.measure(10),o=i.measure(50),a=ot(.1,.99);let u=!1;function c(){return!(u||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function x(S){if(!c())return;const l=t.reachedMin(e.get())?"min":"max",m=P(t[l]-e.get()),h=n.get()-e.get(),f=a.constrain(m/o);n.subtract(h*f),!S&&P(h)<s&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())}function d(S){u=!S}return{shouldConstrain:c,constrain:x,toggleActive:d}}function De(t,e,n,r,i){const s=ot(-e+t,0),o=d(),a=x(),u=p();function c(l,m){return dt(l,m)<=1}function x(){const l=o[0],m=V(o),h=o.lastIndexOf(l),f=o.indexOf(m)+1;return ot(h,f)}function d(){return n.map((l,m)=>{const{min:h,max:f}=s,g=s.constrain(l),b=!m,E=Pt(n,m);return b?f:E||c(h,g)?h:c(f,g)?f:g}).map(l=>parseFloat(l.toFixed(3)))}function p(){if(e<=t+i)return[s.max];if(r==="keepSnaps")return o;const{min:l,max:m}=a;return o.slice(l,m)}return{snapsContained:u,scrollContainLimit:a}}function Pe(t,e,n){const r=e[0],i=n?r-t:V(e);return{limit:ot(i,r)}}function ke(t,e,n,r){const s=e.min+.1,o=e.max+.1,{reachedMin:a,reachedMax:u}=ot(s,o);function c(p){return p===1?u(n.get()):p===-1?a(n.get()):!1}function x(p){if(!c(p))return;const S=t*(p*-1);r.forEach(l=>l.add(S))}return{loop:x}}function Oe(t){const{max:e,length:n}=t;function r(s){const o=s-e;return n?o/-n:0}return{get:r}}function Me(t,e,n,r,i){const{startEdge:s,endEdge:o}=t,{groupSlides:a}=i,u=d().map(e.measure),c=p(),x=S();function d(){return a(r).map(m=>V(m)[o]-m[0][s]).map(P)}function p(){return r.map(m=>n[s]-m[s]).map(m=>-P(m))}function S(){return a(c).map(m=>m[0]).map((m,h)=>m+u[h])}return{snaps:c,snapsAligned:x}}function je(t,e,n,r,i,s){const{groupSlides:o}=i,{min:a,max:u}=r,c=x();function x(){const p=o(s),S=!t||e==="keepSnaps";return n.length===1?[s]:S?p:p.slice(a,u).map((l,m,h)=>{const f=!m,g=Pt(h,m);if(f){const b=V(h[0])+1;return qt(b)}if(g){const b=ht(s)-V(h)[0]+1;return qt(b,V(h)[0])}return l})}return{slideRegistry:c}}function Fe(t,e,n,r,i){const{reachedAny:s,removeOffset:o,constrain:a}=r;function u(l){return l.concat().sort((m,h)=>P(m)-P(h))[0]}function c(l){const m=t?o(l):a(l),h=e.map((g,b)=>({diff:x(g-m,0),index:b})).sort((g,b)=>P(g.diff)-P(b.diff)),{index:f}=h[0];return{index:f,distance:m}}function x(l,m){const h=[l,l+n,l-n];if(!t)return l;if(!m)return u(h);const f=h.filter(g=>Dt(g)===m);return f.length?u(f):V(h)-n}function d(l,m){const h=e[l]-i.get(),f=x(h,m);return{index:l,distance:f}}function p(l,m){const h=i.get()+l,{index:f,distance:g}=c(h),b=!t&&s(h);if(!m||b)return{index:f,distance:l};const E=e[f]-g,A=l+x(E,0);return{index:f,distance:A}}return{byDistance:p,byIndex:d,shortcut:x}}function Re(t,e,n,r,i,s,o){function a(d){const p=d.distance,S=d.index!==e.get();s.add(p),p&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),S&&(n.set(e.get()),e.set(d.index),o.emit("select"))}function u(d,p){const S=i.byDistance(d,p);a(S)}function c(d,p){const S=e.clone().set(d),l=i.byIndex(S.get(),p);a(l)}return{distance:u,index:c}}function ze(t,e,n,r,i,s,o,a){const u={passive:!0,capture:!0};let c=0;function x(S){if(!a)return;function l(m){if(new Date().getTime()-c>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const g=n.findIndex(b=>b.includes(m));At(g)&&(i.useDuration(0),r.index(g,0),o.emit("slideFocus"))}s.add(document,"keydown",d,!1),e.forEach((m,h)=>{s.add(m,"focus",f=>{(St(a)||a(S,f))&&l(h)},u)})}function d(S){S.code==="Tab"&&(c=new Date().getTime())}return{init:x}}function ft(t){let e=t;function n(){return e}function r(u){e=o(u)}function i(u){e+=o(u)}function s(u){e-=o(u)}function o(u){return At(u)?u:u.get()}return{get:n,set:r,add:i,subtract:s}}function Xt(t,e){const n=t.scroll==="x"?o:a,r=e.style;let i=null,s=!1;function o(p){return`translate3d(${p}px,0px,0px)`}function a(p){return`translate3d(0px,${p}px,0px)`}function u(p){if(s)return;const S=Se(t.direction(p));S!==i&&(r.transform=n(S),i=S)}function c(p){s=!p}function x(){s||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:x,to:u,toggleActive:c}}function Be(t,e,n,r,i,s,o,a,u){const x=pt(i),d=pt(i).reverse(),p=f().concat(g());function S(C,w){return C.reduce((N,k)=>N-i[k],w)}function l(C,w){return C.reduce((N,k)=>S(N,w)>0?N.concat([k]):N,[])}function m(C){return s.map((w,N)=>({start:w-r[N]+.5+C,end:w+e-.5+C}))}function h(C,w,N){const k=m(w);return C.map(I=>{const R=N?0:-n,G=N?n:0,$=N?"end":"start",q=k[I][$];return{index:I,loopPoint:q,slideLocation:ft(-1),translate:Xt(t,u[I]),target:()=>a.get()>q?R:G}})}function f(){const C=o[0],w=l(d,C);return h(w,n,!1)}function g(){const C=e-o[0]-1,w=l(x,C);return h(w,-n,!0)}function b(){return p.every(({index:C})=>{const w=x.filter(N=>N!==C);return S(w,e)<=.1})}function E(){p.forEach(C=>{const{target:w,translate:N,slideLocation:k}=C,I=w();I!==k.get()&&(N.to(I),k.set(I))})}function A(){p.forEach(C=>C.translate.clear())}return{canLoop:b,clear:A,loop:E,loopPoints:p}}function Ve(t,e,n){let r,i=!1;function s(u){if(!n)return;function c(x){for(const d of x)if(d.type==="childList"){u.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(x=>{i||(St(n)||n(u,x))&&c(x)}),r.observe(t,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:s,destroy:o}}function He(t,e,n,r){const i={};let s=null,o=null,a,u=!1;function c(){a=new IntersectionObserver(l=>{u||(l.forEach(m=>{const h=e.indexOf(m.target);i[h]=m}),s=null,o=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(l=>a.observe(l))}function x(){a&&a.disconnect(),u=!0}function d(l){return mt(i).reduce((m,h)=>{const f=parseInt(h),{isIntersecting:g}=i[f];return(l&&g||!l&&!g)&&m.push(f),m},[])}function p(l=!0){if(l&&s)return s;if(!l&&o)return o;const m=d(l);return l&&(s=m),l||(o=m),m}return{init:c,destroy:x,get:p}}function Ge(t,e,n,r,i,s){const{measureSize:o,startEdge:a,endEdge:u}=t,c=n[0]&&i,x=l(),d=m(),p=n.map(o),S=h();function l(){if(!c)return 0;const g=n[0];return P(e[a]-g[a])}function m(){if(!c)return 0;const g=s.getComputedStyle(V(r));return parseFloat(g.getPropertyValue(`margin-${u}`))}function h(){return n.map((g,b,E)=>{const A=!b,L=Pt(E,b);return A?p[b]+x:L?p[b]+d:E[b+1][a]-g[a]}).map(P)}return{slideSizes:p,slideSizesWithGaps:S,startGap:x,endGap:d}}function $e(t,e,n,r,i,s,o,a,u){const{startEdge:c,endEdge:x,direction:d}=t,p=At(n);function S(f,g){return pt(f).filter(b=>b%g===0).map(b=>f.slice(b,b+g))}function l(f){return f.length?pt(f).reduce((g,b,E)=>{const A=V(g)||0,L=A===0,C=b===ht(f),w=i[c]-s[A][c],N=i[c]-s[b][x],k=!r&&L?d(o):0,I=!r&&C?d(a):0,R=P(N-I-(w+k));return E&&R>e+u&&g.push(b),C&&g.push(f.length),g},[]).map((g,b,E)=>{const A=Math.max(E[b-1]||0);return f.slice(A,g)}):[]}function m(f){return p?S(f,n):l(f)}return{groupSlides:m}}function qe(t,e,n,r,i,s,o){const{align:a,axis:u,direction:c,startIndex:x,loop:d,duration:p,dragFree:S,dragThreshold:l,inViewThreshold:m,slidesToScroll:h,skipSnaps:f,containScroll:g,watchResize:b,watchSlides:E,watchDrag:A,watchFocus:L}=s,C=2,w=Le(),N=w.measure(e),k=n.map(w.measure),I=ve(u,c),R=I.measureSize(N),G=Ne(R),$=be(a,R),q=!d&&!!g,tt=d||!!g,{slideSizes:Z,slideSizesWithGaps:_,startGap:Q,endGap:ct}=Ge(I,N,k,n,tt,i),K=$e(I,R,h,d,N,k,Q,ct,C),{snaps:rt,snapsAligned:st}=Me(I,$,N,k,K),J=-V(rt)+V(_),{snapsContained:ut,scrollContainLimit:at}=De(R,J,st,g,C),z=q?ut:st,{limit:j}=Pe(J,z,d),X=Jt(ht(z),x,d),B=X.clone(),D=pt(n),y=({dragHandler:it,scrollBody:Et,scrollBounds:Lt,options:{loop:xt}})=>{xt||Lt.constrain(it.pointerDown()),Et.seek()},T=({scrollBody:it,translate:Et,location:Lt,offsetLocation:xt,previousLocation:te,scrollLooper:ee,slideLooper:ne,dragHandler:oe,animation:re,eventHandler:Ft,scrollBounds:se,options:{loop:Rt}},zt)=>{const Bt=it.settled(),ie=!se.shouldConstrain(),Vt=Rt?Bt:Bt&&ie;Vt&&!oe.pointerDown()&&(re.stop(),Ft.emit("settle")),Vt||Ft.emit("scroll");const ce=Lt.get()*zt+te.get()*(1-zt);xt.set(ce),Rt&&(ee.loop(it.direction()),ne.loop()),Et.to(xt.get())},O=Ce(r,i,()=>y(wt),it=>T(wt,it)),F=.68,U=z[X.get()],Y=ft(U),et=ft(U),W=ft(U),nt=ft(U),lt=Te(Y,W,et,nt,p,F),Ct=Fe(d,z,J,j,nt),vt=Re(O,X,B,lt,Ct,nt,o),Ot=Oe(j),Mt=gt(),Zt=He(e,n,o,m),{slideRegistry:jt}=je(q,g,z,at,K,D),Wt=ze(t,n,jt,vt,lt,Mt,o,L),wt={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:N,slideRects:k,animation:O,axis:I,dragHandler:we(I,t,r,i,nt,Ee(I,i),Y,O,vt,lt,Ct,X,o,G,S,l,f,F,A),eventStore:Mt,percentOfView:G,index:X,indexPrevious:B,limit:j,location:Y,offsetLocation:W,previousLocation:et,options:s,resizeHandler:Ie(e,o,i,n,I,b,w),scrollBody:lt,scrollBounds:Ae(j,W,nt,lt,G),scrollLooper:ke(J,j,W,[Y,W,et,nt]),scrollProgress:Ot,scrollSnapList:z.map(Ot.get),scrollSnaps:z,scrollTarget:Ct,scrollTo:vt,slideLooper:Be(I,R,J,Z,_,rt,z,W,n),slideFocus:Wt,slidesHandler:Ve(e,o,E),slidesInView:Zt,slideIndexes:D,slideRegistry:jt,slidesToScroll:K,target:nt,translate:Xt(I,e)};return wt}function Ke(){let t={},e;function n(c){e=c}function r(c){return t[c]||[]}function i(c){return r(c).forEach(x=>x(e,c)),u}function s(c,x){return t[c]=r(c).concat([x]),u}function o(c,x){return t[c]=r(c).filter(d=>d!==x),u}function a(){t={}}const u={init:n,emit:i,off:o,on:s,clear:a};return u}const Ue={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function _e(t){function e(s,o){return Qt(s,o||{})}function n(s){const o=s.breakpoints||{},a=mt(o).filter(u=>t.matchMedia(u).matches).map(u=>o[u]).reduce((u,c)=>e(u,c),{});return e(s,a)}function r(s){return s.map(o=>mt(o.breakpoints||{})).reduce((o,a)=>o.concat(a),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:r}}function Qe(t){let e=[];function n(s,o){return e=o.filter(({options:a})=>t.optionsAtMedia(a).active!==!1),e.forEach(a=>a.init(s,t)),o.reduce((a,u)=>Object.assign(a,{[u.name]:u}),{})}function r(){e=e.filter(s=>s.destroy())}return{init:n,destroy:r}}function yt(t,e,n){const r=t.ownerDocument,i=r.defaultView,s=_e(i),o=Qe(s),a=gt(),u=Ke(),{mergeOptions:c,optionsAtMedia:x,optionsMediaQueries:d}=s,{on:p,off:S,emit:l}=u,m=I;let h=!1,f,g=c(Ue,yt.globalOptions),b=c(g),E=[],A,L,C;function w(){const{container:D,slides:y}=b;L=(Nt(D)?t.querySelector(D):D)||t.children[0];const O=Nt(y)?L.querySelectorAll(y):y;C=[].slice.call(O||L.children)}function N(D){const y=qe(t,L,C,r,i,D,u);if(D.loop&&!y.slideLooper.canLoop()){const T=Object.assign({},D,{loop:!1});return N(T)}return y}function k(D,y){h||(g=c(g,D),b=x(g),E=y||E,w(),f=N(b),d([g,...E.map(({options:T})=>T)]).forEach(T=>a.add(T,"change",I)),b.active&&(f.translate.to(f.location.get()),f.animation.init(),f.slidesInView.init(),f.slideFocus.init(B),f.eventHandler.init(B),f.resizeHandler.init(B),f.slidesHandler.init(B),f.options.loop&&f.slideLooper.loop(),L.offsetParent&&C.length&&f.dragHandler.init(B),A=o.init(B,E)))}function I(D,y){const T=K();R(),k(c({startIndex:T},D),y),u.emit("reInit")}function R(){f.dragHandler.destroy(),f.eventStore.clear(),f.translate.clear(),f.slideLooper.clear(),f.resizeHandler.destroy(),f.slidesHandler.destroy(),f.slidesInView.destroy(),f.animation.destroy(),o.destroy(),a.clear()}function G(){h||(h=!0,a.clear(),R(),u.emit("destroy"),u.clear())}function $(D,y,T){!b.active||h||(f.scrollBody.useBaseFriction().useDuration(y===!0?0:b.duration),f.scrollTo.index(D,T||0))}function q(D){const y=f.index.add(1).get();$(y,D,-1)}function tt(D){const y=f.index.add(-1).get();$(y,D,1)}function Z(){return f.index.add(1).get()!==K()}function _(){return f.index.add(-1).get()!==K()}function Q(){return f.scrollSnapList}function ct(){return f.scrollProgress.get(f.location.get())}function K(){return f.index.get()}function rt(){return f.indexPrevious.get()}function st(){return f.slidesInView.get()}function J(){return f.slidesInView.get(!1)}function ut(){return A}function at(){return f}function z(){return t}function j(){return L}function X(){return C}const B={canScrollNext:Z,canScrollPrev:_,containerNode:j,internalEngine:at,destroy:G,off:S,on:p,emit:l,plugins:ut,previousScrollSnap:rt,reInit:m,rootNode:z,scrollNext:q,scrollPrev:tt,scrollProgress:ct,scrollSnapList:Q,scrollTo:$,selectedScrollSnap:K,slideNodes:X,slidesInView:st,slidesNotInView:J};return k(e,n),setTimeout(()=>u.emit("init"),0),B}yt.globalOptions=void 0;function kt(t={},e=[]){const n=v.useRef(t),r=v.useRef(e),[i,s]=v.useState(),[o,a]=v.useState(),u=v.useCallback(()=>{i&&i.reInit(n.current,r.current)},[i]);return v.useEffect(()=>{Tt(n.current,t)||(n.current=t,u())},[t,u]),v.useEffect(()=>{xe(r.current,e)||(r.current=e,u())},[e,u]),v.useEffect(()=>{if(he()&&o){yt.globalOptions=kt.globalOptions;const c=yt(o,n.current,r.current);return s(c),()=>c.destroy()}else s(void 0)},[o,s]),[a,i]}kt.globalOptions=void 0;const Yt=v.createContext(null);function bt(){const t=v.useContext(Yt);if(!t)throw new Error("useCarousel must be used within a <Carousel />");return t}const Je=v.forwardRef(({orientation:t="horizontal",opts:e,setApi:n,plugins:r,className:i,children:s,...o},a)=>{const[u,c]=kt({...e,axis:t==="horizontal"?"x":"y"},r),[x,d]=v.useState(!1),[p,S]=v.useState(!1),l=v.useCallback(g=>{g&&(d(g.canScrollPrev()),S(g.canScrollNext()))},[]),m=v.useCallback(()=>{c==null||c.scrollPrev()},[c]),h=v.useCallback(()=>{c==null||c.scrollNext()},[c]),f=v.useCallback(g=>{g.key==="ArrowLeft"?(g.preventDefault(),m()):g.key==="ArrowRight"&&(g.preventDefault(),h())},[m,h]);return v.useEffect(()=>{!c||!n||n(c)},[c,n]),v.useEffect(()=>{if(c)return l(c),c.on("reInit",l),c.on("select",l),()=>{c==null||c.off("select",l)}},[c,l]),M.jsx(Yt.Provider,{value:{carouselRef:u,api:c,opts:e,orientation:t||((e==null?void 0:e.axis)==="y"?"vertical":"horizontal"),scrollPrev:m,scrollNext:h,canScrollPrev:x,canScrollNext:p},children:M.jsx("div",{ref:a,onKeyDownCapture:f,className:H("relative",i),role:"region","aria-roledescription":"carousel",...o,children:s})})});Je.displayName="Carousel";const Xe=v.forwardRef(({className:t,...e},n)=>{const{carouselRef:r,orientation:i}=bt();return M.jsx("div",{ref:r,className:"overflow-hidden",children:M.jsx("div",{ref:n,className:H("flex",i==="horizontal"?"-ml-4":"-mt-4 flex-col",t),...e})})});Xe.displayName="CarouselContent";const Ye=v.forwardRef(({className:t,...e},n)=>{const{orientation:r}=bt();return M.jsx("div",{ref:n,role:"group","aria-roledescription":"slide",className:H("min-w-0 shrink-0 grow-0 basis-full",r==="horizontal"?"pl-4":"pt-4",t),...e})});Ye.displayName="CarouselItem";const Ze=v.forwardRef(({className:t,variant:e="outline",size:n="icon",...r},i)=>{const{orientation:s,scrollPrev:o,canScrollPrev:a}=bt();return M.jsxs(Kt,{ref:i,variant:e,size:n,className:H("absolute h-8 w-8 rounded-full",s==="horizontal"?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:o,...r,children:[M.jsx(de,{className:"size-4"}),M.jsx("span",{className:"sr-only",children:"Previous slide"})]})});Ze.displayName="CarouselPrevious";const We=v.forwardRef(({className:t,variant:e="outline",size:n="icon",...r},i)=>{const{orientation:s,scrollNext:o,canScrollNext:a}=bt();return M.jsxs(Kt,{ref:i,variant:e,size:n,className:H("absolute h-8 w-8 rounded-full",s==="horizontal"?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",t),disabled:!a,onClick:o,...r,children:[M.jsx(me,{className:"size-4"}),M.jsx("span",{className:"sr-only",children:"Next slide"})]})});We.displayName="CarouselNext";const tn=v.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:H("rounded-xl border bg-card text-card-foreground shadow",t),...e}));tn.displayName="Card";const en=v.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:H("flex flex-col space-y-1.5 p-6",t),...e}));en.displayName="CardHeader";const nn=v.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:H("font-semibold leading-none tracking-tight",t),...e}));nn.displayName="CardTitle";const on=v.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:H("text-sm text-muted-foreground",t),...e}));on.displayName="CardDescription";const rn=v.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:H("p-6 pt-0",t),...e}));rn.displayName="CardContent";const sn=v.forwardRef(({className:t,...e},n)=>M.jsx("div",{ref:n,className:H("flex items-center p-6 pt-0",t),...e}));sn.displayName="CardFooter";export{de as A,tn as C,en as a,rn as b,_t as c,Je as d,Xe as e,Ye as f,me as g};
