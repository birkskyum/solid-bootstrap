import{t as d,s as f,m as v,v as c,a as e,y as h,D as N,w as $,b as g,X as P,i as y,Q as x}from"./vendor.e0c45427.js";import{C as u}from"./Card.2791c662.js";import{A as I,u as L}from"./index.58251ec3.js";const B=d("<li></li>"),_=d('<span class="visually-hidden"></span>'),C=d('<span aria-hidden="true"></span>'),E={active:!1,disabled:!1,activeLabel:"(current)"},b=o=>{const[t,a]=f(v(E,o),["active","disabled","className","style","activeLabel","children","ref"]);return(()=>{const s=B.cloneNode(!0),l=t.ref;return typeof l=="function"?l(s):t.ref=s,c(s,e(N,v({get component(){return t.active||t.disabled?"span":I},className:"page-link",get disabled(){return t.disabled}},a,{get children(){return[h(()=>t.children),h((()=>{const n=h(()=>!!(t.active&&t.activeLabel),!0);return()=>n()&&(()=>{const i=_.cloneNode(!0);return c(i,()=>t.activeLabel),i})()})())]}}))),$(n=>{const i=t.style,p=g(t.className,"page-item",{active:t.active,disabled:t.disabled});return n._v$=P(s,i,n._v$),p!==n._v$2&&(s.className=n._v$2=p),n},{_v$:void 0,_v$2:void 0}),s})()};function m(o,t,a=o){function s({children:l,...n}){return e(b,v(n,{get children(){return[(()=>{const i=C.cloneNode(!0);return c(i,l||t),i})(),(()=>{const i=_.cloneNode(!0);return c(i,a),i})()]}}))}return s.displayName=o,s}const z=m("First","\xAB"),j=m("Prev","\u2039","Previous"),A=m("Ellipsis","\u2026","More"),F=m("Next","\u203A"),w=m("Last","\xBB"),D=d("<ul></ul>"),H={},M=o=>{const[t,a]=f(v(H,o),["bsPrefix","className","size"]),s=L(t.bsPrefix,"pagination");return(()=>{const l=D.cloneNode(!0);return y(l,a,!1,!1),$(()=>l.className=g(t.className,s,t.size&&`${s}-${t.size}`)),l})()};var r=Object.assign(M,{First:z,Prev:j,Ellipsis:A,Item:b,Next:F,Last:w});const S=d("<div><br><br></div>"),k=d('<div class="row gy-4"><div><h3>Pagination</h3><p class="lead">A set of presentational components for building pagination UI.</p></div><div></div></div>'),U=()=>{let o=2;const t=()=>e(x,{each:new Array(5),children:(a,s)=>e(r.Item,{get active(){return s()+1===o},get children(){return s()+1}})});return(()=>{const a=k.cloneNode(!0),s=a.firstChild,l=s.nextSibling;return c(l,e(u,{get children(){return[e(u.Header,{children:"Examples"}),e(u.Body,{get children(){const n=S.cloneNode(!0),i=n.firstChild,p=i.nextSibling;return c(n,e(r,{children:t}),i),c(n,e(r,{size:"lg",children:t}),p),c(n,e(r,{size:"sm",children:t}),null),n}})]}}),null),c(l,e(u,{get children(){return[e(u.Header,{children:"More options"}),e(u.Body,{get children(){return e(r,{get children(){return[e(r.First,{}),e(r.Prev,{}),e(r.Item,{children:1}),e(r.Ellipsis,{}),e(r.Item,{children:10}),e(r.Item,{children:11}),e(r.Item,{active:!0,children:12}),e(r.Item,{children:13}),e(r.Item,{disabled:!0,children:14}),e(r.Ellipsis,{}),e(r.Item,{children:20}),e(r.Next,{}),e(r.Last,{})]}})}})]}}),null),a})()};export{U as PaginationDocs,U as default};