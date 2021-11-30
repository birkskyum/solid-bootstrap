import{t as d,s as g,c as e,C as N,N as m,a as l,L as p,i as x,b as L,d as _,h as B,R as C,e as u,l as v,f as k,r as E}from"./vendor.c00eff94.js";const G=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const t of n.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function a(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=a(o);fetch(o.href,n)}};G();const I="modulepreload",H={},O="/solid-bootstrap/",b=function(r,a){return!a||a.length===0?r():Promise.all(a.map(s=>{if(s=`${O}${s}`,s in H)return;H[s]=!0;const o=s.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const t=document.createElement("link");if(t.rel=o?"stylesheet":I,o||(t.as="script",t.crossOrigin=""),t.href=s,document.head.appendChild(t),o)return new Promise((h,f)=>{t.addEventListener("load",h),t.addEventListener("error",f)})})).then(()=>r())},T=d('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 16 16"><path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z"></path><path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z"></path></svg>'),M=i=>(()=>{const r=T.cloneNode(!0);return g(r,i,!0,!0),r})(),R=d('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg>'),z=i=>(()=>{const r=R.cloneNode(!0);return g(r,i,!0,!0),r})(),U=d('<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-bootstrap-fill" viewBox="0 0 166 155.3"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="27.028" x2="151.542" y1="3.451" y2="63.891"><stop offset=".118" stop-color="#bbbdbf"></stop><stop offset=".299" stop-color="#f1f1f2"></stop><stop offset="1" stop-color="#d0d2d3"></stop></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="95.307" x2="73.509" y1="32.988" y2="105.648"><stop offset="0" stop-color="#bbbdbf"></stop><stop offset=".475" stop-color="#929497"></stop><stop offset="1" stop-color="#58595b"></stop></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="17.932" x2="143.767" y1="64.628" y2="150.169"><stop offset="0" stop-color="#58595b"></stop><stop offset=".539" stop-color="#929497"></stop><stop offset="1" stop-color="#58595b"></stop></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="74.763" x2="23.901" y1="74.909" y2="261.184"><stop offset="0" stop-color="#4377bb"></stop><stop offset="0" stop-color="#808184"></stop><stop offset=".475" stop-color="#404041"></stop><stop offset="1" stop-color="#231f20"></stop></linearGradient></defs><path d="M162.5 35.7S109.8-4.1 68.9 5.2c-1.2.3-2.5.6-3.6 1-6.3 2-11 5.5-13.9 9.7-.6.8-1 1.7-1.5 2.5L34.8 44.1l26.1 5.1c10.3 7.4 24.8 10.5 37.2 7.3l46.5 9.1z" fill="#bbbdbf"></path><path d="M162.5 35.7S109.8-4.1 68.9 5.2c-1.2.3-2.5.6-3.6 1-6.3 2-11 5.5-13.9 9.7-.6.8-1 1.7-1.5 2.5L34.8 44.1l26.1 5.1c10.3 7.4 24.8 10.5 37.2 7.3l46.5 9.1z" fill="url(#a)" opacity=".29"></path><path d="M51 35.2c-1.2.3-2.5.6-3.6 1-16.7 5.4-22.4 21-12.8 34.7S65.5 91.4 82.2 86l62.4-20.2c0-.1-52.7-39.9-93.6-30.6z" fill="#929497"></path><path d="M51 35.2c-1.2.3-2.5.6-3.6 1-16.7 5.4-22.4 21-12.8 34.7S65.5 91.4 82.2 86l62.4-20.2c0-.1-52.7-39.9-93.6-30.6z" fill="url(#b)" opacity=".34"></path><path d="M133.1 80.2c-9.6-13.7-30.9-20.5-47.6-15.1L23.1 85.3l-19.6 35 111.6 19.1 20-35.6c4-7 3.6-15.6-2-23.6z" fill="url(#c)"></path><path d="M113.5 115.1c-9.6-13.7-30.9-20.5-47.6-15.1L3.5 120.3s52.7 39.8 93.6 30.5c1.2-.3 2.5-.6 3.6-1 16.7-5.4 22.4-21 12.8-34.7z" fill="url(#d)"></path></svg>'),A=i=>(()=>{const r=U.cloneNode(!0);return g(r,i,!0,!0),r})(),P="_Navbar_2r7e7_1";var j={Navbar:P};const V=d('<img alt="" src="logo.svg" width="30" height="30" class="d-inline-block align-top">'),J=()=>e(m,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",get className(){return j.Navbar},get children(){return e(N,{get children(){return[e(m.Brand,{href:"#",get children(){return[V.cloneNode(!0)," ","Solid-Bootstrap"]}}),e(m.Toggle,{"aria-controls":"responsive-navbar-nav"}),e(m.Collapse,{id:"responsive-navbar-nav",get children(){return[e(l,{className:"me-auto",get children(){return[e(l.Link,{as:p,href:"/",children:"Home"}),e(l.Link,{as:p,href:"/getting-started",children:"Getting started"}),e(l.Link,{as:p,href:"/components/alerts",children:"Components"})]}}),e(l,{get children(){return[e(l.Link,{href:"https://github.com/solid-libs/solid-bootstrap",target:"_blank",rel:"noopener",get children(){return e(z,{height:24})}}),e(l.Link,{eventKey:3,href:"https://www.solidjs.com/",target:"_blank",rel:"noopener",get children(){return e(A,{height:24})}}),e(l.Link,{eventKey:2,href:"https://getbootstrap.com/",target:"_blank",rel:"noopener",get children(){return e(M,{height:24})}})]}})]}})]}})}}),D="_IndexGrey_1ff73_1",K="_MastHead_1ff73_11",q="_HomeContent_1ff73_23",W="_HomeHeading_1ff73_41",F="_HomeSubheading_1ff73_55",Q="_ButtonToolbar_1ff73_67";var c={IndexGrey:D,MastHead:K,HomeContent:q,HomeHeading:W,HomeSubheading:F,ButtonToolbar:Q};const X=d(`<div><div><div><h1>Solid Bootstrap</h1><p>The most popular front-end framework<br><strong>Rebuilt</strong> for SolidJS.</p><div></div><div class="text-muted mt-3">Current version: 0.1.0</div></div></div><div class="container"><div class="row"><div class="px-4 py-3 col-md-4"><h2>Rebuilt with SolidJS</h2><p>Solid-Bootstrap replaces the Bootstrap JavaScript. Each component has been carefully ported into a true SolidJS component, without unneeded dependencies like jQuery.</p><p>This library has been ported from React-Bootstrap which is one of the most popular and proven UI libraries, making it an excellent choice as your SolidJS UI foundation.</p></div><div class="px-4 py-3 col-md-4"><h2>Bootstrap at its core</h2><p>Built with compatibility in mind, we embrace our bootstrap core and strive to be compatible with the world's largest UI ecosystem.</p><p>By relying entirely on the Bootstrap stylesheet, Solid-Bootstrap just works with the thousands of Bootstrap themes you already love.</p><p></p></div><div class="px-4 py-3 col-md-4"><h2>Accessible by default</h2><p>The SolidJS component model gives us more control over form and function of each component.</p><p>Each component is implemented with accessibility in mind. The result is a set of accessible-by-default components, over what is possible from plain Bootstrap.</p></div></div></div></div>`),Y=()=>(()=>{const i=X.cloneNode(!0),r=i.firstChild,a=r.firstChild,s=a.firstChild,o=s.nextSibling,n=o.nextSibling;return x(n,e(p,{href:"/getting-started",role:"button",tabindex:"0",class:"me-3 px-5 btn btn-outline-light btn-lg",children:"Get started"}),null),x(n,e(p,{href:"/components/alerts",role:"button",tabindex:"0",class:"px-5 btn btn-outline-light btn-lg",children:"Components"}),null),L(t=>{const h=c.IndexGrey,f=_(c.MastHead,"mb-4"),y=_(c.HomeContent,"px-4"),$=c.HomeHeading,S=_(c.HomeSubheading,"lead"),w=c.ButtonToolbar;return h!==t._v$&&(i.className=t._v$=h),f!==t._v$2&&(r.className=t._v$2=f),y!==t._v$3&&(a.className=t._v$3=y),$!==t._v$4&&(s.className=t._v$4=$),S!==t._v$5&&(o.className=t._v$5=S),w!==t._v$6&&(n.className=t._v$6=w),t},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0,_v$5:void 0,_v$6:void 0}),i})();const Z=()=>e(k,{get source(){return B()},get children(){return[e(J,{}),e(C,{get children(){return[e(u,{path:"/components/*",get component(){return v(()=>b(()=>import("./Components.b94b54b1.js"),["assets/Components.b94b54b1.js","assets/vendor.c00eff94.js","assets/Layout.8f115a67.js","assets/Layout.fad23bab.css"]))}}),e(u,{path:"/layout/*",get component(){return v(()=>b(()=>import("./Layouts.b65219cb.js"),["assets/Layouts.b65219cb.js","assets/vendor.c00eff94.js","assets/Layout.8f115a67.js","assets/Layout.fad23bab.css"]))}}),e(u,{path:"/core/*",get component(){return v(()=>b(()=>import("./Core.78363883.js"),["assets/Core.78363883.js","assets/vendor.c00eff94.js","assets/Layout.8f115a67.js","assets/Layout.fad23bab.css"]))}}),e(u,{path:"/getting-started",get component(){return v(()=>b(()=>import("./GettingStarted.3d8152ba.js"),["assets/GettingStarted.3d8152ba.js","assets/vendor.c00eff94.js","assets/Dropdown.98664100.js","assets/store.f8770e77.js","assets/ssr.9c861c6c.js","assets/Tabs.1d92c382.js","assets/Card.e559dbf2.js"]))}}),e(u,{path:"/*all",get element(){return e(Y,{})}})]}})]}});E(()=>e(Z,{}),document.getElementById("root"));export{b as _};
