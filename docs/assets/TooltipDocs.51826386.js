import{t as m,g as _,m as x,u as w,O as P,K as S,s as v,i,b as T,d as C,P as N,c as e}from"./vendor.c00eff94.js";import{C as o}from"./Card.e559dbf2.js";import{O as j,a as y}from"./OverlayTrigger.9aa650cb.js";import{B as O}from"./Layout.8f115a67.js";import{G as A}from"./GithubSource.3f40a295.js";import"./Overlay.bd8742a2.js";import"./store.f8770e77.js";const B=m('<div role="tooltip"><div class="tooltip-arrow"></div><div></div></div>'),k={arrowProps:{},placement:"right"},D=l=>{const[t,f]=_(x(k,l),["bsPrefix","placement","className","style","children","arrowProps","popper","show"]),s=w(t.bsPrefix,"tooltip"),[a]=t.placement?.split("-")||[],c=P(j);return(()=>{const r=B.cloneNode(!0),h=r.firstChild,d=h.nextSibling;return S(r,"x-placement",a),v(r,f,!1,!0),v(r,()=>c?.wrapperProps,!1,!0),v(h,()=>c?.arrowProps,!1,!1),d.className=`${s}-inner`,i(d,()=>t.children),T(n=>{const p=C(t.className,s,"bs-tooltip-auto"),g=Object.assign({},t.style,c?.wrapperProps.style);return p!==n._v$&&(r.className=n._v$=p),n._v$2=N(r,g,n._v$2),n},{_v$:void 0,_v$2:void 0}),r})()};var $=D;const G=m("<p>Tight pants next level keffiyeh <!> haven't heard of them. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <!> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <!>, scenester farm-to-table banksy Austin <!> freegan cred raw denim single-origin coffee viral.</p>"),H=m('<div class="row gy-4"><div><h2>Tooltips</h2><p class="lead">A tooltip component for a more stylish alternative to that anchor tag title attribute.</p></div><div></div></div>'),E=m('<a href="#"></a>'),J=()=>(()=>{const l=H.cloneNode(!0),t=l.firstChild,f=t.firstChild,s=t.nextSibling;return i(t,e(A,{name:"TooltipDocs"}),f),i(s,e(o,{get children(){return[e(o.Header,{children:"Examples"}),e(o.Body,{get children(){const a=G.cloneNode(!0),c=a.firstChild,r=c.nextSibling,h=r.nextSibling,d=h.nextSibling,n=d.nextSibling,p=n.nextSibling,g=p.nextSibling,b=g.nextSibling;return b.nextSibling,i(a,e(u,{title:"Default title",id:"t-1",children:"you probably"}),r),i(a,e(u,{id:"t-2",title:"Another one",children:"have a"}),d),i(a,e(u,{title:"Another one here too",id:"t-3",children:"whatever keytar"}),p),i(a,e(u,{title:"The last tip!",id:"t-4",children:"twitter handle"}),b),a}})]}}),null),i(s,e(o,{get children(){return[e(o.Header,{children:"OverlayTrigger (delayed hide)"}),e(o.Body,{get children(){return e(y,{placement:"right",delay:{show:250,hide:400},get overlay(){return e($,{id:"button-tooltip",children:"Simple tooltip"})},get children(){return e(O,{variant:"success",children:"Hover me to see"})}})}})]}}),null),l})(),u=l=>e(y,{get overlay(){return e($,{get id(){return l.id},get children(){return l.title}})},get children(){const t=E.cloneNode(!0);return i(t,()=>l.children),t}});export{J as TooltipDocs,J as default};
