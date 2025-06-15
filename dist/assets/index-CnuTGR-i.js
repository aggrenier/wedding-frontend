(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function ee(t){window.addEventListener("scroll",()=>{window.scrollY>100?(t.classList.remove("opacity-0","pointer-events-none"),t.classList.add("opacity-100","pointer-events-auto")):(t.classList.add("opacity-0","pointer-events-none"),t.classList.remove("opacity-100","pointer-events-auto"))})}document.querySelector("#nav").innerHTML=`
<div class="navbar shadow-sm fixed z-100 opacity-0 pointer-events-none bg-base-100" id="navbar">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabindex="0"
        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul class="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li><a>Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div class="navbar-end">
  </div>
</div>
`;ee(document.querySelector("#navbar"));const ne="/assets/hero-CaVr7X3d.png",oe="/assets/back3-5FVxZlDo.png",se="/assets/back4-NNltz_Ho.png",ie="/assets/back-CkaSDapD.png",ct="/assets/tea-COqBlezK.jpg",jt="/assets/hotel1-DdSxhWke.jpg",re="/assets/hotel2-qfzwxQep.jpg";function Et(t){return typeof t=="number"}function It(t){return typeof t=="string"}function bt(t){return typeof t=="boolean"}function _t(t){return Object.prototype.toString.call(t)==="[object Object]"}function P(t){return Math.abs(t)}function Dt(t){return Math.sign(t)}function ut(t,e){return P(t-e)}function ce(t,e){if(t===0||e===0||P(t)<=P(e))return 0;const n=ut(P(t),P(e));return P(n/t)}function ae(t){return Math.round(t*100)/100}function dt(t){return ft(t).map(Number)}function Y(t){return t[mt(t)]}function mt(t){return Math.max(0,t.length-1)}function Tt(t,e){return e===mt(t)}function Ht(t,e=0){return Array.from(Array(t),(n,r)=>e+r)}function ft(t){return Object.keys(t)}function $t(t,e){return[t,e].reduce((n,r)=>(ft(r).forEach(i=>{const s=n[i],o=r[i],l=_t(s)&&_t(o);n[i]=l?$t(s,o):o}),n),{})}function Lt(t,e){return typeof e.MouseEvent<"u"&&t instanceof e.MouseEvent}function le(t,e){const n={start:r,center:i,end:s};function r(){return 0}function i(c){return s(c)/2}function s(c){return e-c}function o(c,a){return It(t)?n[t](c):t(e,c,a)}return{measure:o}}function pt(){let t=[];function e(i,s,o,l={passive:!0}){let c;if("addEventListener"in i)i.addEventListener(s,o,l),c=()=>i.removeEventListener(s,o,l);else{const a=i;a.addListener(o),c=()=>a.removeListener(o)}return t.push(c),r}function n(){t=t.filter(i=>i())}const r={add:e,clear:n};return r}function ue(t,e,n,r){const i=pt(),s=1e3/60;let o=null,l=0,c=0;function a(){i.add(t,"visibilitychange",()=>{t.hidden&&d()})}function h(){x(),i.clear()}function f(b){if(!c)return;o||(o=b,n(),n());const u=b-o;for(o=b,l+=u;l>=s;)n(),l-=s;const g=l/s;r(g),c&&(c=e.requestAnimationFrame(f))}function p(){c||(c=e.requestAnimationFrame(f))}function x(){e.cancelAnimationFrame(c),o=null,l=0,c=0}function d(){o=null,l=0}return{init:a,destroy:h,start:p,stop:x,update:n,render:r}}function de(t,e){const n=e==="rtl",r=t==="y",i=r?"y":"x",s=r?"x":"y",o=!r&&n?-1:1,l=h(),c=f();function a(d){const{height:m,width:b}=d;return r?m:b}function h(){return r?"top":n?"right":"left"}function f(){return r?"bottom":n?"left":"right"}function p(d){return d*o}return{scroll:i,cross:s,startEdge:l,endEdge:c,measureSize:a,direction:p}}function it(t=0,e=0){const n=P(t-e);function r(a){return a<t}function i(a){return a>e}function s(a){return r(a)||i(a)}function o(a){return s(a)?r(a)?t:e:a}function l(a){return n?a-n*Math.ceil((a-e)/n):a}return{length:n,max:e,min:t,constrain:o,reachedAny:s,reachedMax:i,reachedMin:r,removeOffset:l}}function qt(t,e,n){const{constrain:r}=it(0,t),i=t+1;let s=o(e);function o(p){return n?P((i+p)%i):r(p)}function l(){return s}function c(p){return s=o(p),f}function a(p){return h().set(l()+p)}function h(){return qt(t,l(),n)}const f={get:l,set:c,add:a,clone:h};return f}function fe(t,e,n,r,i,s,o,l,c,a,h,f,p,x,d,m,b,u,g){const{cross:y,direction:E}=t,M=["INPUT","SELECT","TEXTAREA"],D={passive:!1},w=pt(),I=pt(),S=it(50,225).constrain(x.measure(20)),L={mouse:300,touch:400},T={mouse:500,touch:600},z=d?43:25;let B=!1,_=0,C=0,q=!1,H=!1,U=!1,Q=!1;function nt(v){if(!g)return;function O(j){(bt(g)||g(v,j))&&tt(j)}const F=e;w.add(F,"dragstart",j=>j.preventDefault(),D).add(F,"touchmove",()=>{},D).add(F,"touchend",()=>{}).add(F,"touchstart",O).add(F,"mousedown",O).add(F,"touchcancel",N).add(F,"contextmenu",N).add(F,"click",$,!0)}function G(){w.clear(),I.clear()}function K(){const v=Q?n:e;I.add(v,"touchmove",k,D).add(v,"touchend",N).add(v,"mousemove",k,D).add(v,"mouseup",N)}function X(v){const O=v.nodeName||"";return M.includes(O)}function R(){return(d?T:L)[Q?"mouse":"touch"]}function J(v,O){const F=f.add(Dt(v)*-1),j=h.byDistance(v,!d).distance;return d||P(v)<S?j:b&&O?j*.5:h.byIndex(F.get(),0).distance}function tt(v){const O=Lt(v,r);Q=O,U=d&&O&&!v.buttons&&B,B=ut(i.get(),o.get())>=2,!(O&&v.button!==0)&&(X(v.target)||(q=!0,s.pointerDown(v),a.useFriction(0).useDuration(0),i.set(o),K(),_=s.readPoint(v),C=s.readPoint(v,y),p.emit("pointerDown")))}function k(v){if(!Lt(v,r)&&v.touches.length>=2)return N(v);const F=s.readPoint(v),j=s.readPoint(v,y),Z=ut(F,_),W=ut(j,C);if(!H&&!Q&&(!v.cancelable||(H=Z>W,!H)))return N(v);const ot=s.pointerMove(v);Z>m&&(U=!0),a.useFriction(.3).useDuration(.75),l.start(),i.add(E(ot)),v.preventDefault()}function N(v){const F=h.byDistance(0,!1).index!==f.get(),j=s.pointerUp(v)*R(),Z=J(E(j),F),W=ce(j,Z),ot=z-10*W,et=u+W/50;H=!1,q=!1,I.clear(),a.useDuration(ot).useFriction(et),c.distance(Z,!d),Q=!1,p.emit("pointerUp")}function $(v){U&&(v.stopPropagation(),v.preventDefault(),U=!1)}function V(){return q}return{init:nt,destroy:G,pointerDown:V}}function pe(t,e){let r,i;function s(f){return f.timeStamp}function o(f,p){const d=`client${(p||t.scroll)==="x"?"X":"Y"}`;return(Lt(f,e)?f:f.touches[0])[d]}function l(f){return r=f,i=f,o(f)}function c(f){const p=o(f)-o(i),x=s(f)-s(r)>170;return i=f,x&&(r=f),p}function a(f){if(!r||!i)return 0;const p=o(i)-o(r),x=s(f)-s(r),d=s(f)-s(i)>170,m=p/x;return x&&!d&&P(m)>.1?m:0}return{pointerDown:l,pointerMove:c,pointerUp:a,readPoint:o}}function me(){function t(n){const{offsetTop:r,offsetLeft:i,offsetWidth:s,offsetHeight:o}=n;return{top:r,right:i+s,bottom:r+o,left:i,width:s,height:o}}return{measure:t}}function ge(t){function e(r){return t*(r/100)}return{measure:e}}function be(t,e,n,r,i,s,o){const l=[t].concat(r);let c,a,h=[],f=!1;function p(b){return i.measureSize(o.measure(b))}function x(b){if(!s)return;a=p(t),h=r.map(p);function u(g){for(const y of g){if(f)return;const E=y.target===t,M=r.indexOf(y.target),D=E?a:h[M],w=p(E?t:r[M]);if(P(w-D)>=.5){b.reInit(),e.emit("resize");break}}}c=new ResizeObserver(g=>{(bt(s)||s(b,g))&&u(g)}),n.requestAnimationFrame(()=>{l.forEach(g=>c.observe(g))})}function d(){f=!0,c&&c.disconnect()}return{init:x,destroy:d}}function he(t,e,n,r,i,s){let o=0,l=0,c=i,a=s,h=t.get(),f=0;function p(){const D=r.get()-t.get(),w=!c;let I=0;return w?(o=0,n.set(r),t.set(r),I=D):(n.set(t),o+=D/c,o*=a,h+=o,t.add(o),I=h-f),l=Dt(I),f=h,M}function x(){const D=r.get()-e.get();return P(D)<.001}function d(){return c}function m(){return l}function b(){return o}function u(){return y(i)}function g(){return E(s)}function y(D){return c=D,M}function E(D){return a=D,M}const M={direction:m,duration:d,velocity:b,seek:p,settled:x,useBaseFriction:g,useBaseDuration:u,useFriction:E,useDuration:y};return M}function ve(t,e,n,r,i){const s=i.measure(10),o=i.measure(50),l=it(.1,.99);let c=!1;function a(){return!(c||!t.reachedAny(n.get())||!t.reachedAny(e.get()))}function h(x){if(!a())return;const d=t.reachedMin(e.get())?"min":"max",m=P(t[d]-e.get()),b=n.get()-e.get(),u=l.constrain(m/o);n.subtract(b*u),!x&&P(b)<s&&(n.set(t.constrain(n.get())),r.useDuration(25).useBaseFriction())}function f(x){c=!x}return{shouldConstrain:a,constrain:h,toggleActive:f}}function xe(t,e,n,r,i){const s=it(-e+t,0),o=f(),l=h(),c=p();function a(d,m){return ut(d,m)<=1}function h(){const d=o[0],m=Y(o),b=o.lastIndexOf(d),u=o.indexOf(m)+1;return it(b,u)}function f(){return n.map((d,m)=>{const{min:b,max:u}=s,g=s.constrain(d),y=!m,E=Tt(n,m);return y?u:E||a(b,g)?b:a(u,g)?u:g}).map(d=>parseFloat(d.toFixed(3)))}function p(){if(e<=t+i)return[s.max];if(r==="keepSnaps")return o;const{min:d,max:m}=l;return o.slice(d,m)}return{snapsContained:c,scrollContainLimit:l}}function ye(t,e,n){const r=e[0],i=n?r-t:Y(e);return{limit:it(i,r)}}function Se(t,e,n,r){const s=e.min+.1,o=e.max+.1,{reachedMin:l,reachedMax:c}=it(s,o);function a(p){return p===1?c(n.get()):p===-1?l(n.get()):!1}function h(p){if(!a(p))return;const x=t*(p*-1);r.forEach(d=>d.add(x))}return{loop:h}}function we(t){const{max:e,length:n}=t;function r(s){const o=s-e;return n?o/-n:0}return{get:r}}function Ie(t,e,n,r,i){const{startEdge:s,endEdge:o}=t,{groupSlides:l}=i,c=f().map(e.measure),a=p(),h=x();function f(){return l(r).map(m=>Y(m)[o]-m[0][s]).map(P)}function p(){return r.map(m=>n[s]-m[s]).map(m=>-P(m))}function x(){return l(a).map(m=>m[0]).map((m,b)=>m+c[b])}return{snaps:a,snapsAligned:h}}function Le(t,e,n,r,i,s){const{groupSlides:o}=i,{min:l,max:c}=r,a=h();function h(){const p=o(s),x=!t||e==="keepSnaps";return n.length===1?[s]:x?p:p.slice(l,c).map((d,m,b)=>{const u=!m,g=Tt(b,m);if(u){const y=Y(b[0])+1;return Ht(y)}if(g){const y=mt(s)-Y(b)[0]+1;return Ht(y,Y(b)[0])}return d})}return{slideRegistry:a}}function Ee(t,e,n,r,i){const{reachedAny:s,removeOffset:o,constrain:l}=r;function c(d){return d.concat().sort((m,b)=>P(m)-P(b))[0]}function a(d){const m=t?o(d):l(d),b=e.map((g,y)=>({diff:h(g-m,0),index:y})).sort((g,y)=>P(g.diff)-P(y.diff)),{index:u}=b[0];return{index:u,distance:m}}function h(d,m){const b=[d,d+n,d-n];if(!t)return d;if(!m)return c(b);const u=b.filter(g=>Dt(g)===m);return u.length?c(u):Y(b)-n}function f(d,m){const b=e[d]-i.get(),u=h(b,m);return{index:d,distance:u}}function p(d,m){const b=i.get()+d,{index:u,distance:g}=a(b),y=!t&&s(b);if(!m||y)return{index:u,distance:d};const E=e[u]-g,M=d+h(E,0);return{index:u,distance:M}}return{byDistance:p,byIndex:f,shortcut:h}}function De(t,e,n,r,i,s,o){function l(f){const p=f.distance,x=f.index!==e.get();s.add(p),p&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),x&&(n.set(e.get()),e.set(f.index),o.emit("select"))}function c(f,p){const x=i.byDistance(f,p);l(x)}function a(f,p){const x=e.clone().set(f),d=i.byIndex(x.get(),p);l(d)}return{distance:c,index:a}}function Te(t,e,n,r,i,s,o,l){const c={passive:!0,capture:!0};let a=0;function h(x){if(!l)return;function d(m){if(new Date().getTime()-a>10)return;o.emit("slideFocusStart"),t.scrollLeft=0;const g=n.findIndex(y=>y.includes(m));Et(g)&&(i.useDuration(0),r.index(g,0),o.emit("slideFocus"))}s.add(document,"keydown",f,!1),e.forEach((m,b)=>{s.add(m,"focus",u=>{(bt(l)||l(x,u))&&d(b)},c)})}function f(x){x.code==="Tab"&&(a=new Date().getTime())}return{init:h}}function lt(t){let e=t;function n(){return e}function r(c){e=o(c)}function i(c){e+=o(c)}function s(c){e-=o(c)}function o(c){return Et(c)?c:c.get()}return{get:n,set:r,add:i,subtract:s}}function Gt(t,e){const n=t.scroll==="x"?o:l,r=e.style;let i=null,s=!1;function o(p){return`translate3d(${p}px,0px,0px)`}function l(p){return`translate3d(0px,${p}px,0px)`}function c(p){if(s)return;const x=ae(t.direction(p));x!==i&&(r.transform=n(x),i=x)}function a(p){s=!p}function h(){s||(r.transform="",e.getAttribute("style")||e.removeAttribute("style"))}return{clear:h,to:c,toggleActive:a}}function Oe(t,e,n,r,i,s,o,l,c){const h=dt(i),f=dt(i).reverse(),p=u().concat(g());function x(w,I){return w.reduce((S,L)=>S-i[L],I)}function d(w,I){return w.reduce((S,L)=>x(S,I)>0?S.concat([L]):S,[])}function m(w){return s.map((I,S)=>({start:I-r[S]+.5+w,end:I+e-.5+w}))}function b(w,I,S){const L=m(I);return w.map(T=>{const z=S?0:-n,B=S?n:0,_=S?"end":"start",C=L[T][_];return{index:T,loopPoint:C,slideLocation:lt(-1),translate:Gt(t,c[T]),target:()=>l.get()>C?z:B}})}function u(){const w=o[0],I=d(f,w);return b(I,n,!1)}function g(){const w=e-o[0]-1,I=d(h,w);return b(I,-n,!0)}function y(){return p.every(({index:w})=>{const I=h.filter(S=>S!==w);return x(I,e)<=.1})}function E(){p.forEach(w=>{const{target:I,translate:S,slideLocation:L}=w,T=I();T!==L.get()&&(S.to(T),L.set(T))})}function M(){p.forEach(w=>w.translate.clear())}return{canLoop:y,clear:M,loop:E,loopPoints:p}}function Me(t,e,n){let r,i=!1;function s(c){if(!n)return;function a(h){for(const f of h)if(f.type==="childList"){c.reInit(),e.emit("slidesChanged");break}}r=new MutationObserver(h=>{i||(bt(n)||n(c,h))&&a(h)}),r.observe(t,{childList:!0})}function o(){r&&r.disconnect(),i=!0}return{init:s,destroy:o}}function Ae(t,e,n,r){const i={};let s=null,o=null,l,c=!1;function a(){l=new IntersectionObserver(d=>{c||(d.forEach(m=>{const b=e.indexOf(m.target);i[b]=m}),s=null,o=null,n.emit("slidesInView"))},{root:t.parentElement,threshold:r}),e.forEach(d=>l.observe(d))}function h(){l&&l.disconnect(),c=!0}function f(d){return ft(i).reduce((m,b)=>{const u=parseInt(b),{isIntersecting:g}=i[u];return(d&&g||!d&&!g)&&m.push(u),m},[])}function p(d=!0){if(d&&s)return s;if(!d&&o)return o;const m=f(d);return d&&(s=m),d||(o=m),m}return{init:a,destroy:h,get:p}}function Pe(t,e,n,r,i,s){const{measureSize:o,startEdge:l,endEdge:c}=t,a=n[0]&&i,h=d(),f=m(),p=n.map(o),x=b();function d(){if(!a)return 0;const g=n[0];return P(e[l]-g[l])}function m(){if(!a)return 0;const g=s.getComputedStyle(Y(r));return parseFloat(g.getPropertyValue(`margin-${c}`))}function b(){return n.map((g,y,E)=>{const M=!y,D=Tt(E,y);return M?p[y]+h:D?p[y]+f:E[y+1][l]-g[l]}).map(P)}return{slideSizes:p,slideSizesWithGaps:x,startGap:h,endGap:f}}function Fe(t,e,n,r,i,s,o,l,c){const{startEdge:a,endEdge:h,direction:f}=t,p=Et(n);function x(u,g){return dt(u).filter(y=>y%g===0).map(y=>u.slice(y,y+g))}function d(u){return u.length?dt(u).reduce((g,y,E)=>{const M=Y(g)||0,D=M===0,w=y===mt(u),I=i[a]-s[M][a],S=i[a]-s[y][h],L=!r&&D?f(o):0,T=!r&&w?f(l):0,z=P(S-T-(I+L));return E&&z>e+c&&g.push(y),w&&g.push(u.length),g},[]).map((g,y,E)=>{const M=Math.max(E[y-1]||0);return u.slice(M,g)}):[]}function m(u){return p?x(u,n):d(u)}return{groupSlides:m}}function ze(t,e,n,r,i,s,o){const{align:l,axis:c,direction:a,startIndex:h,loop:f,duration:p,dragFree:x,dragThreshold:d,inViewThreshold:m,slidesToScroll:b,skipSnaps:u,containScroll:g,watchResize:y,watchSlides:E,watchDrag:M,watchFocus:D}=s,w=2,I=me(),S=I.measure(e),L=n.map(I.measure),T=de(c,a),z=T.measureSize(S),B=ge(z),_=le(l,z),C=!f&&!!g,q=f||!!g,{slideSizes:H,slideSizesWithGaps:U,startGap:Q,endGap:nt}=Pe(T,S,L,n,q,i),G=Fe(T,z,b,f,S,L,Q,nt,w),{snaps:K,snapsAligned:X}=Ie(T,_,S,L,G),R=-Y(K)+Y(U),{snapsContained:J,scrollContainLimit:tt}=xe(z,R,X,g,w),k=C?J:X,{limit:N}=ye(R,k,f),$=qt(mt(k),h,f),V=$.clone(),A=dt(n),v=({dragHandler:rt,scrollBody:yt,scrollBounds:St,options:{loop:gt}})=>{gt||St.constrain(rt.pointerDown()),yt.seek()},O=({scrollBody:rt,translate:yt,location:St,offsetLocation:gt,previousLocation:Qt,scrollLooper:Kt,slideLooper:Xt,dragHandler:Yt,animation:Zt,eventHandler:zt,scrollBounds:Jt,options:{loop:Ct}},Nt)=>{const kt=rt.settled(),Wt=!Jt.shouldConstrain(),Bt=Ct?kt:kt&&Wt,Vt=Bt&&!Yt.pointerDown();Vt&&Zt.stop();const te=St.get()*Nt+Qt.get()*(1-Nt);gt.set(te),Ct&&(Kt.loop(rt.direction()),Xt.loop()),yt.to(gt.get()),Vt&&zt.emit("settle"),Bt||zt.emit("scroll")},F=ue(r,i,()=>v(xt),rt=>O(xt,rt)),j=.68,Z=k[$.get()],W=lt(Z),ot=lt(Z),et=lt(Z),st=lt(Z),at=he(W,et,ot,st,p,j),ht=Ee(f,k,R,N,st),vt=De(F,$,V,at,ht,st,o),At=we(N),Pt=pt(),Rt=Ae(e,n,o,m),{slideRegistry:Ft}=Le(C,g,k,tt,G,A),Ut=Te(t,n,Ft,vt,at,Pt,o,D),xt={ownerDocument:r,ownerWindow:i,eventHandler:o,containerRect:S,slideRects:L,animation:F,axis:T,dragHandler:fe(T,t,r,i,st,pe(T,i),W,F,vt,at,ht,$,o,B,x,d,u,j,M),eventStore:Pt,percentOfView:B,index:$,indexPrevious:V,limit:N,location:W,offsetLocation:et,previousLocation:ot,options:s,resizeHandler:be(e,o,i,n,T,y,I),scrollBody:at,scrollBounds:ve(N,et,st,at,B),scrollLooper:Se(R,N,et,[W,et,ot,st]),scrollProgress:At,scrollSnapList:k.map(At.get),scrollSnaps:k,scrollTarget:ht,scrollTo:vt,slideLooper:Oe(T,z,R,H,U,K,k,et,n),slideFocus:Ut,slidesHandler:Me(e,o,E),slidesInView:Rt,slideIndexes:A,slideRegistry:Ft,slidesToScroll:G,target:st,translate:Gt(T,e)};return xt}function Ce(){let t={},e;function n(a){e=a}function r(a){return t[a]||[]}function i(a){return r(a).forEach(h=>h(e,a)),c}function s(a,h){return t[a]=r(a).concat([h]),c}function o(a,h){return t[a]=r(a).filter(f=>f!==h),c}function l(){t={}}const c={init:n,emit:i,off:o,on:s,clear:l};return c}const Ne={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0,watchFocus:!0};function ke(t){function e(s,o){return $t(s,o||{})}function n(s){const o=s.breakpoints||{},l=ft(o).filter(c=>t.matchMedia(c).matches).map(c=>o[c]).reduce((c,a)=>e(c,a),{});return e(s,l)}function r(s){return s.map(o=>ft(o.breakpoints||{})).reduce((o,l)=>o.concat(l),[]).map(t.matchMedia)}return{mergeOptions:e,optionsAtMedia:n,optionsMediaQueries:r}}function Be(t){let e=[];function n(s,o){return e=o.filter(({options:l})=>t.optionsAtMedia(l).active!==!1),e.forEach(l=>l.init(s,t)),o.reduce((l,c)=>Object.assign(l,{[c.name]:c}),{})}function r(){e=e.filter(s=>s.destroy())}return{init:n,destroy:r}}function Ot(t,e,n){const r=t.ownerDocument,i=r.defaultView,s=ke(i),o=Be(s),l=pt(),c=Ce(),{mergeOptions:a,optionsAtMedia:h,optionsMediaQueries:f}=s,{on:p,off:x,emit:d}=c,m=T;let b=!1,u,g=a(Ne,Ot.globalOptions),y=a(g),E=[],M,D,w;function I(){const{container:A,slides:v}=y;D=(It(A)?t.querySelector(A):A)||t.children[0];const F=It(v)?D.querySelectorAll(v):v;w=[].slice.call(F||D.children)}function S(A){const v=ze(t,D,w,r,i,A,c);if(A.loop&&!v.slideLooper.canLoop()){const O=Object.assign({},A,{loop:!1});return S(O)}return v}function L(A,v){b||(g=a(g,A),y=h(g),E=v||E,I(),u=S(y),f([g,...E.map(({options:O})=>O)]).forEach(O=>l.add(O,"change",T)),y.active&&(u.translate.to(u.location.get()),u.animation.init(),u.slidesInView.init(),u.slideFocus.init(V),u.eventHandler.init(V),u.resizeHandler.init(V),u.slidesHandler.init(V),u.options.loop&&u.slideLooper.loop(),D.offsetParent&&w.length&&u.dragHandler.init(V),M=o.init(V,E)))}function T(A,v){const O=G();z(),L(a({startIndex:O},A),v),c.emit("reInit")}function z(){u.dragHandler.destroy(),u.eventStore.clear(),u.translate.clear(),u.slideLooper.clear(),u.resizeHandler.destroy(),u.slidesHandler.destroy(),u.slidesInView.destroy(),u.animation.destroy(),o.destroy(),l.clear()}function B(){b||(b=!0,l.clear(),z(),c.emit("destroy"),c.clear())}function _(A,v,O){!y.active||b||(u.scrollBody.useBaseFriction().useDuration(v===!0?0:y.duration),u.scrollTo.index(A,O||0))}function C(A){const v=u.index.add(1).get();_(v,A,-1)}function q(A){const v=u.index.add(-1).get();_(v,A,1)}function H(){return u.index.add(1).get()!==G()}function U(){return u.index.add(-1).get()!==G()}function Q(){return u.scrollSnapList}function nt(){return u.scrollProgress.get(u.offsetLocation.get())}function G(){return u.index.get()}function K(){return u.indexPrevious.get()}function X(){return u.slidesInView.get()}function R(){return u.slidesInView.get(!1)}function J(){return M}function tt(){return u}function k(){return t}function N(){return D}function $(){return w}const V={canScrollNext:H,canScrollPrev:U,containerNode:N,internalEngine:tt,destroy:B,off:x,on:p,emit:d,plugins:J,previousScrollSnap:K,reInit:m,rootNode:k,scrollNext:C,scrollPrev:q,scrollProgress:nt,scrollSnapList:Q,scrollTo:_,selectedScrollSnap:G,slideNodes:$,slidesInView:X,slidesNotInView:R};return L(e,n),setTimeout(()=>c.emit("init"),0),V}Ot.globalOptions=void 0;const Ve={direction:"forward",speed:2,startDelay:1e3,active:!0,breakpoints:{},playOnInit:!0,stopOnFocusIn:!0,stopOnInteraction:!0,stopOnMouseEnter:!1,rootNode:null};function je(t,e){const n=t.rootNode();return e&&e(n)||n}function Mt(t={}){let e,n,r,i,s=0,o=!1,l=!1,c;function a(S,L){n=S;const{mergeOptions:T,optionsAtMedia:z}=L,B=T(Ve,Mt.globalOptions),_=T(B,t);if(e=z(_),n.scrollSnapList().length<=1)return;i=e.startDelay,r=!1,c=n.internalEngine().scrollBody;const{eventStore:C}=n.internalEngine(),q=!!n.internalEngine().options.watchDrag,H=je(n,e.rootNode);q&&n.on("pointerDown",d),q&&!e.stopOnInteraction&&n.on("pointerUp",m),e.stopOnMouseEnter&&C.add(H,"mouseenter",b),e.stopOnMouseEnter&&!e.stopOnInteraction&&C.add(H,"mouseleave",u),e.stopOnFocusIn&&n.on("slideFocusStart",p),e.stopOnFocusIn&&!e.stopOnInteraction&&C.add(n.containerNode(),"focusout",f),e.playOnInit&&f()}function h(){n.off("pointerDown",d).off("pointerUp",m).off("slideFocusStart",p).off("settle",g),p(),r=!0,o=!1}function f(){if(r||o)return;n.emit("autoScroll:play");const S=n.internalEngine(),{ownerWindow:L}=S;s=L.setTimeout(()=>{S.scrollBody=x(S),S.animation.start()},i),o=!0}function p(){if(r||!o)return;n.emit("autoScroll:stop");const S=n.internalEngine(),{ownerWindow:L}=S;S.scrollBody=c,L.clearTimeout(s),s=0,o=!1}function x(S){const{location:L,previousLocation:T,offsetLocation:z,target:B,scrollTarget:_,index:C,indexPrevious:q,limit:{reachedMin:H,reachedMax:U,constrain:Q},options:{loop:nt}}=S,G=e.direction==="forward"?-1:1,K=()=>$;let X=0,R=0,J=L.get(),tt=0,k=!1;function N(){let V=0;T.set(L),X=G*e.speed,J+=X,L.add(X),B.set(L),V=J-tt,R=Math.sign(V),tt=J;const A=_.byDistance(0,!1).index;C.get()!==A&&(q.set(C.get()),C.set(A),n.emit("select"));const v=e.direction==="forward"?H(z.get()):U(z.get());if(!nt&&v){k=!0;const O=Q(L.get());L.set(O),B.set(L),p()}return $}const $={direction:()=>R,duration:()=>-1,velocity:()=>X,settled:()=>k,seek:N,useBaseFriction:K,useBaseDuration:K,useFriction:K,useDuration:K};return $}function d(){l||p()}function m(){l||y()}function b(){l=!0,p()}function u(){l=!1,f()}function g(){n.off("settle",g),f()}function y(){n.on("settle",g)}function E(S){typeof S<"u"&&(i=S),f()}function M(){o&&p()}function D(){o&&(p(),y())}function w(){return o}return{name:"autoScroll",options:t,init:a,destroy:h,play:E,stop:M,reset:D,isPlaying:w}}Mt.globalOptions=void 0;document.querySelector("#app").innerHTML=`
<div class="hero-section relative">
  <div class="flex w-full flex-col items-stretch md:flex-row bg-base-200 max-h-[70vh]">
    <div
      class="w-full md:w-1/2 p-4 flex items-center content-center justify-center flex-col text-center md:text-right"
    >
      <h1 class="w-full text-5xl font-bold font-(family-name:--text-pri)">
        NAME 1
      </h1>
      <h1 class="w-full text-5xl font-bold">&</h1>
      <h1 class="w-full text-5xl font-bold font-(family-name:--text-pri)">
        NAME 2
      </h1>
    </div>
    <div class="divider hidden md:flex divider-horizontal my-10"></div>
    <div class="w-full md:w-1/2 flex items-end">
      <img class="object-scale-down" src="${ne}" />
    </div>
  </div>
  <img class="absolute -right-10 -bottom-45" src="${oe}" />
</div>

<div class="bg-base-100 text-center p-10 py-[5rem]">
  <h3 class="text-5xl mb-5 z-10">The Second of August 2026</h3>
  <h3 class="text-4xl top-10 z-10">Cedar Island, Orillia</h3>

  <img class="absolute -left-50 -bottom-45 z-10" src="${se}" />
</div>

<div class="md:max-w-[80vw] mx-auto my-0 bg-base-200 z-25 relative">
  <div
    class="card relative flex w-full flex-col md:flex-row bg-secondary rounded-4xl p-10 py-[5rem] items-stretch"
  >
    <!-- Text side -->
    <div class="w-full md:w-1/2 card p-5 flex flex-col justify-start">
      <h2 class="text-5xl z-10 mb-10">You are invited for Tea</h2>
      <p class="text-3xl z-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
        ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus fermentum
        et. Donec turpis odio, pretium et magna a, malesuada dapibus ex. Cras
        congue blandit nunc eget varius.
      </p>
    </div>

    <!-- Divider -->
    <div class="divider hidden md:flex divider-horizontal"></div>

    <!-- Image side -->
    <div class="w-full md:w-1/2 card">
      <div
        class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
        style="background-image: url('${ct}')"
      ></div>
    </div>
  </div>

  <div
    class="flex w-full flex-col md:flex-row bg-base-200 rounded-b-4xl p-10 py-[5rem] items-stretch"
  >
    <!-- Image side -->
    <div class="w-full md:w-1/2 card">
      <div
        class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
        style="background-image: url('${ct}')"
      ></div>
    </div>

    <!-- Divider -->
    <div class="divider hidden md:flex divider-horizontal"></div>

    <!-- Text side -->
    <div class="w-full md:w-1/2 card p-5 my-5 flex flex-col justify-start">
      <h2 class="text-5xl z-10 mb-10">More Content</h2>
      <p class="text-3xl z-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
        ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus fermentum
        et. Donec turpis odio, pretium et magna a, malesuada dapibus ex. Cras
        congue blandit nunc eget varius.
      </p>
    </div>
  </div>

  <div class="relative w-full bg-base-100 p-10 px-0 py-[5rem] items-stretch">
    <img
      class="absolute -right-10 -bottom-45 min-h-[600px] z-25 rounded-box"
      src="${ie}"
    />
    <div class="embla z-10 relative">
      <div div class="embla__viewport">
        <div class="embla__container">
          <div class="embla__slide w-full">
            <div
              class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
              style="background-image: url('${ct}')"
            ></div>
          </div>
          <div class="embla__slide w-full">
            <div
              class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
              style="background-image: url('${ct}')"
            ></div>
          </div>
          <div class="embla__slide w-full">
            <div
              class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
              style="background-image: url('${ct}')"
            ></div>
          </div>
          <div class="embla__slide w-full">
            <div
              class="w-full min-h-[300px] md:h-full rounded-box bg-cover bg-bottom bg-no-repeat"
              style="background-image: url('${ct}')"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="w-full bg-base-100 p-10 py-[5rem]">

    <div class="w-full">
      <div class="text-left flex flex-col allign-left">
        <h2 class="text-5xl z-10 mb-10">Travel</h2>
      </div>
    </div>

    <div class="grid grid-cols-3 gap-x-8 gap-y-4">

      <div class="card bg-base-200 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="${jt}"
            class="rounded-xl object-none h-[200px] w-full" />
        </figure>
        <div class="card-body items-center text-center">
            <h3 class="card-title">Hotel 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
              ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus
              fermentum et. Donec turpis odio, pretium et magna a, malesuada dapibus
              ex. Cras congue blandit nunc eget varius.
            </p>
          <div class="card-actions">
            <button class="btn btn-primary"><a href="https://www.hilton.com/en/" target="_blank">Info</a></button>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="${re}"
            class="rounded-xl object-none h-[200px] w-full" />
        </figure>
        <div class="card-body items-center text-center">
            <h3 class="card-title">Hotel 2</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
              ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus
              fermentum et. Donec turpis odio, pretium et magna a, malesuada dapibus
              ex. Cras congue blandit nunc eget varius.
            </p>
          <div class="card-actions">
            <button class="btn btn-primary"><a href="https://www.hilton.com/en/" target="_blank">Info</a></button>
          </div>
        </div>
      </div>

      <div class="card bg-base-200 shadow-sm">
        <figure class="px-10 pt-10">
          <img
            src="${jt}"
            class="rounded-xl object-none h-[200px] w-full" />
        </figure>
        <div class="card-body items-center text-center">
            <h3 class="card-title">Hotel 1</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus
              ex a bibendum cursus. In dignissim lacinia risus, a ornare lacus
              fermentum et. Donec turpis odio, pretium et magna a, malesuada dapibus
              ex. Cras congue blandit nunc eget varius.
            </p>
          <div class="card-actions">
            <button class="btn btn-primary"><a href="https://www.hilton.com/en/" target="_blank">Info</a></button>
          </div>
        </div>
      </div>
    </div>

  </div>

  <div class="hero w-full bg-base-200 p-10 py-[5rem]">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">RSVP/Save the date?</h1>
        <p class="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
        <button class="btn btn-primary">Get Started</button>
      </div>
    </div>
  </div>
</div>

`;const _e={loop:!0},He=document.querySelector(".embla"),$e=He.querySelector(".embla__viewport"),wt=Ot($e,_e,[Mt({playOnInit:!0,speed:.25,stopOnMouseEnter:!0})]),qe=document.querySelector(".embla");qe.addEventListener("mouseleave",function(t){var r;const e=(r=wt==null?void 0:wt.plugins())==null?void 0:r.autoScroll;e.isPlaying()||(e.play(),console.log(e.isPlaying()))});
