import{_ as X,M as h,n as w,m as y,v as A,p as C,F as _,h as L,a3 as N,T as D,a4 as z,X as F,a5 as K,a6 as G,c as P,D as J,a7 as Q,H as V,a8 as O,a9 as Y}from"./vendor.69cd9a37.js";import{c as Z,r as ee,m as te,u as ne,a as oe}from"./store.02593bd7.js";import{u as re}from"./ssr.4f3e9591.js";const se=X(null);var S=se;const ae=()=>{};function le(t={}){const e=h(S),[o,c]=w(),[n,f]=w(!1),[p,m]=Z({}),a=y({fixed:!1,popperConfig:{},usePopper:!!e},t),g=A(()=>e?.show==null?!!a.show:e.show);C(()=>{g()&&!n()&&f(!0)}),_(()=>{m(ee(te({placement:a.placement||e?.placement||"bottom-start",enabled:a.usePopper??!!e,enableEvents:a.enableEventListeners==null?g():a.enableEventListeners,offset:a.offset,flip:a.flip,fixed:a.fixed,arrowElement:o(),popperConfig:a.popperConfig})))});const E=k=>{e?.toggle(!1,k)},d=ne(()=>e?.toggleElement,()=>e?.menuElement,p);return C(()=>{e?.menuElement&&oe(()=>e.menuElement,E,{get clickTrigger(){return a.rootCloseEvent},get disabled(){return!g()}})}),[y({get ref(){return e?.setMenu||ae},get style(){return d()?.styles.popper},get"aria-labelledby"(){return e?.toggleElement?.id}},d()?.attributes.popper??{}),{get show(){return g()},get placement(){return e?.placement},get hasShown(){return n()},get toggle(){return e?.toggle},get popper(){return a.usePopper?d():null},get arrowProps(){return a.usePopper?{ref:c,...d()?.attributes.arrow,style:d()?.styles.arrow}:{}}}]}const ce={usePopper:!0};function T(t){const[e,o]=L(t,["children"]),[c,n]=le(o);return()=>e.children(c,n)}T.displayName="DropdownMenu";T.defaultProps=ce;const H=t=>t.getAttribute("role")?.toLowerCase()==="menu",ue=()=>{};function ie(){const t=re(),e=h(S);return[{id:t,get ref(){return e.setToggle||ue},onClick:c=>{e.toggle(!e.show,c)},get"aria-expanded"(){return!!e.show},get"aria-haspopup"(){return e.menuElement&&H(e.menuElement)?!0:void 0}},{get show(){return e.show},get toggle(){return e.toggle}}]}function $({children:t}){const[e,o]=ie();return()=>t(e,o)}$.displayName="DropdownToggle";function pe(t){const e=h(D),o=h(z),{activeKey:c}=o||{},n=F(t.key,t.href),f=A(()=>t.active==null&&t.key!=null?F(c)===n:t.active);return[{onClick:m=>{if(t.disabled)return;let a=K(t.onClick,m);e&&!a.isPropagationStopped&&e(n,m)},get"aria-disabled"(){return t.disabled||void 0},get"aria-selected"(){return f()},[N("dropdown-item")]:""},{get isActive(){return f()}}]}const j=t=>{const[e,o]=L(y({as:G},t),["eventKey","disabled","onClick","active","as"]),[c]=pe({get key(){return e.eventKey},get href(){return o.href},get disabled(){return e.disabled},get onClick(){return e.onClick},get active(){return e.active}});return P(J,y({get component(){return e.as}},o,c,{get children(){return o.children}}))};j.displayName="DropdownItem";function b(t){const e=y({itemSelector:`* [${N("dropdown-item")}]`,placement:"bottom-start"},t),[o,c]=Q(()=>e.show,()=>e.defaultShow,e.onToggle),[n,f]=w(),[p,m]=w(),[a,g]=w(null),[E,d]=w(!1),M=h(D),v=(r,s,l=s?.type)=>{c(r,{originalEvent:s,source:l})},k=(r,s)=>{K(i=>{e.onSelect?.(r,i),v(!1,i,"select")},s).isPropagationStopped||M?.(r,s)},q={toggle:v,setMenu:f,setToggle:m,get placement(){return e.placement},get show(){return o()},get menuElement(){return n()},get toggleElement(){return p()}};C(()=>{n()&&o&&d(()=>n().contains(document.activeElement))});const B=()=>{p()&&p().focus&&p().focus()},U=()=>{const r=a();g(null);let s=e.focusFirstItemOnShow;if(s==null&&(s=n()&&H(n())?"keyboard":!1),s===!1||s==="keyboard"&&!/^key.+$/.test(r))return;const l=O(n(),e.itemSelector)[0];l&&l.focus&&l.focus()};C(()=>{o()?U():E()&&(d(!1),B())});const I=(r,s)=>{if(!n())return null;const l=O(n(),e.itemSelector);let i=l.indexOf(r)+s;return i=Math.max(0,Math.min(i,l.length)),l[i]},R=r=>{const{key:s}=r,l=r.target,i=n()?.contains(l),W=p()?.contains(l);if(/input|textarea/i.test(l.tagName)&&(s===" "||s!=="Escape"&&i)||!i&&!W||s==="Tab"&&(!n()||!o))return;g(r.type);const x={originalEvent:r,source:r.type};switch(s){case"ArrowUp":{const u=I(l,-1);u&&u.focus&&u.focus(),r.preventDefault();return}case"ArrowDown":if(r.preventDefault(),!o)c(!0,x);else{const u=I(l,1);u&&u.focus&&u.focus()}return;case"Tab":Y(document,"keyup",u=>{(u.key==="Tab"&&!u.target||!n()?.contains(u.target))&&c(!1,x)},{once:!0});break;case"Escape":s==="Escape"&&(r.preventDefault(),r.stopPropagation()),c(!1,x);break}};return document.addEventListener("keydown",R),V(()=>document.removeEventListener("keydown",R)),P(D.Provider,{value:k,get children(){return P(S.Provider,{value:q,get children(){return e.children}})}})}b.displayName="Dropdown";b.Menu=T;b.Toggle=$;b.Item=j;export{b as D,le as a,ie as b,S as c,pe as u};