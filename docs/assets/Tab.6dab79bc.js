import{af as m,h as s,m as r,c as a,a2 as b,u as E,T as x,D as T,e as P,Z as v}from"./vendor.69cd9a37.js";import{B as h,u as C,N as O}from"./Tabs.5fe27751.js";function g(t){return typeof t=="boolean"?t?m:void 0:t}const N={},B=t=>{const[o,e]=s(r(N,t),["transition"]);return a(h,r(e,{get transition(){return g(o.transition)},get children(){return e.children}}))};var $=B,j=b("tab-content");const y={},A=t=>{const[o,e]=s(r(y,t),["bsPrefix","transition"]),[p,n]=C(r(e,{get transition(){return g(o.transition)}})),[i,u]=s(p,["as","className","mountOnEnter","unmountOnExit"]),d=E(o.bsPrefix,"tab-pane"),f=n.transition||O;return a(v.Provider,{value:null,get children(){return a(x.Provider,{value:null,get children(){return a(f,{get in(){return n.isActive},get onEnter(){return n.onEnter},get onEntering(){return n.onEntering},get onEntered(){return n.onEntered},get onExit(){return n.onExit},get onExiting(){return n.onExiting},get onExited(){return n.onExited},get mountOnEnter(){return n.mountOnEnter},get unmountOnExit(){return n.unmountOnExit},get children(){return a(T,r({get component(){return i.as??"div"}},u,{ref(c){const l=e.ref;typeof l=="function"?l(c):e.ref=c},get className(){return P(i.className,d,n.isActive&&"active")},get children(){return u.children}}))}})}})}})};var D=A;const F=t=>t;var W=Object.assign(F,{Container:$,Content:j,Pane:D});export{W as T,j as a,D as b,g};