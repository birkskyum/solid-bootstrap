import{g as d,m as n,u as m,c as r,d as u,w as b,D as o,M as h,t as p,s as f,i as l,b as g}from"./vendor.c00eff94.js";import{G as v}from"./GithubSource.3f40a295.js";const P={as:"li",active:!1,linkAs:h,linkProps:{}},$=t=>{const[e,s]=d(n(P,t),["bsPrefix","active","children","className","as","linkAs","linkProps","href","title","target"]),c=m(e.bsPrefix,"breadcrumb-item");return r(o,n({get component(){return e.as}},s,{get className(){return u(c,e.className,{active:e.active})},get["aria-current"](){return e.active?"page":void 0},get children(){const a=b(()=>!!e.active,!0);return()=>a()?e.children:r(o,n({get component(){return e.linkAs}},e.linkProps,{get href(){return e.href},get title(){return e.title},get target(){return e.target},get children(){return e.children}}))}}))};var N=$;const x=p("<ol></ol>"),B={as:"nav",label:"breadcrumb",listProps:{}},I=t=>{const[e,s]=d(n(B,t),["bsPrefix","className","listProps","children","label","as"]),c=m(e.bsPrefix,"breadcrumb");return r(o,n({get component(){return e.as},get["aria-label"](){return e.label},get className(){return e.className}},s,{get children(){const a=x.cloneNode(!0);return f(a,()=>e.listProps,!1,!0),l(a,()=>e.children),g(()=>a.className=u(c,e.listProps?.className)),a}}))};var i=Object.assign(I,{Item:N});const _=p('<div class="row gy-4"><div><h2>Breadcrumbs</h2><p class="lead">Indicate the current page\u2019s location within a navigational hierarchy that automatically adds separators via CSS. Add active prop to active Breadcrumb.Item . Do not set both active and href attributes. active overrides href and span element is rendered instead of a .</p></div><div></div></div>'),y=()=>(()=>{const t=_.cloneNode(!0),e=t.firstChild,s=e.firstChild,c=e.nextSibling;return l(e,r(v,{name:"BreadcrumbDocs"}),s),l(c,r(i,{get children(){return[r(i.Item,{href:"#",children:"Home"}),r(i.Item,{href:"https://getbootstrap.com/docs/4.0/components/breadcrumb/",children:"Library"}),r(i.Item,{active:!0,children:"Data"})]}})),t})();export{y as default};
