import{t as u,d as e,v as h,a as m,i as g,h as j}from"./vendor.e0c45427.js";import{O as k}from"./Overlay.569d4118.js";import{G as T}from"./GithubSource.928bc2dd.js";import"./store.b4ef7dcb.js";import"./index.9731a100.js";const E=u('<div class="row gy-4"><div><h3>Overlays (core)</h3><p class="lead">A powerful and flexible overlay component for showing things over, and next to, other things.</p><p>This example is styled to look like a tooltip (with an adaptive arrow). It also demonstates using an optional <code>&lt;Transition /></code>.</p><p>Click the button to cycle through placement options.</p></div><div class="d-flex justify-content-center"><button class="btn btn-primary">I am an overlay target</button></div><div></div></div>'),G=u('<div class="tooltip bs-tooltip-auto show"><div class="tooltip-arrow"></div><div class="tooltip-inner">I am a overlay!</div></div>'),y=["top","right","bottom","left"],L=()=>{const[b,i]=e(),[$,r]=e(null),[a,c]=e(!1),[o,d]=e();function _(){a()?o()==="left"?c(!1):d(y[y.indexOf(o())+1]):(d("top"),c(!0))}return(()=>{const t=E.cloneNode(!0),s=t.firstChild,w=s.firstChild,p=s.nextSibling,l=p.firstChild,C=p.nextSibling,f=r;typeof f=="function"?f(t):r=t,h(s,m(T,{name:"CoreOverlayDocs"}),w),l.$$click=_;const v=i;return typeof v=="function"?v(l):i=l,h(C,m(k,{get show(){return a()},offset:[0,5],container:$,target:b,get placement(){return o()},flip:!0,children:(x,O)=>(()=>{const n=G.cloneNode(!0),S=n.firstChild;return g(n,()=>x(),!1,!0),g(S,()=>O(),!1,!1),n})()})),t})()};j(["click"]);export{L as CoreOverlayDocs,L as default};
