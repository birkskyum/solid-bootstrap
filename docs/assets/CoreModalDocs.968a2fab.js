import{t as i,v as s,a as n,h as u,d as h,i as v,w as f}from"./vendor.e0c45427.js";import{M as g}from"./index.9731a100.js";import{G as $}from"./GithubSource.928bc2dd.js";const b=i('<div class="modal-dialog"><div class="modal-content"><div class="modal-header"><h5 id="modal-label">Text in a modal</h5></div><div class="modal-body"><p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p></div><div class="modal-footer"></div></div></div>'),_=i('<div class="d-flex justify-content-center align-items-center"><button class="btn btn-primary">Open modal</button><span class="ps-2">Click to get the full Modal experience!</span></div>'),y=i("<p></p>"),M=i('<div class="modal-backdrop show"></div>'),w=i(`<div class="row gy-4"><div><h3>Modals (core)</h3><p class="lead">Love them or hate them, <code>&lt;Modal /></code> provides a solid foundation for creating dialogs, lightboxes, or whatever else. The Modal component renders its children node in front of a backdrop component.</p><p>The Modal offers a few helpful features over using just a <code>&lt;Portal /></code> component and some styles:</p><ul><li>Manages dialog stacking when one-at-a-time just isn't enough.</li><li>Creates a backdrop, for disabling interaction below the modal.</li><li>It properly manages focus; moving to the modal content, and keeping it there until the modal is closed.</li><li>It disables scrolling of the page content while open.</li><li>Adds the appropriate ARIA roles are automatically.</li><li>Easily-pluggable animations via a <code>&lt;Transition /></code> component.</li></ul></div><div></div></div>`);let c=(e,o)=>e+Math.floor(Math.random()*(o-e));const k=()=>(()=>{const e=b.cloneNode(!0),o=e.firstChild,l=o.firstChild,t=l.nextSibling,p=t.nextSibling;return s(p,n(m,{})),f(a=>{const d=`${c(5,20)}%`,r=`${c(20,60)}%`;return d!==a._v$&&e.style.setProperty("margin-top",a._v$=d),r!==a._v$2&&e.style.setProperty("margin-left",a._v$2=r),a},{_v$:void 0,_v$2:void 0}),e})(),m=()=>{const[e,o]=h(!1);return[(()=>{const l=_.cloneNode(!0),t=l.firstChild;return t.$$click=()=>o(!0),l})(),y.cloneNode(!0),n(g,{class:"modal d-block pe-none",get show(){return e()},onHide:()=>o(!1),renderBackdrop:l=>(()=>{const t=M.cloneNode(!0);return v(t,l,!1,!1),t})(),"aria-labelledby":"modal-label",get children(){return n(k,{})}})]},j=()=>(()=>{const e=w.cloneNode(!0),o=e.firstChild,l=o.firstChild,t=o.nextSibling;return s(o,n($,{name:"CoreModalDocs"}),l),s(t,n(m,{})),e})();u(["click"]);export{j as CoreModalDocs,j as default};
