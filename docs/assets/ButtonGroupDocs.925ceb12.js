import{t as v,i as o,c as e,B as t,D as r,E as u,I as l,G as f,H as a,J as n}from"./vendor.6436aea9.js";import{G as B}from"./GithubSource.535effac.js";const D=v(`<div class="mt-5"><h2>API</h2><h3>ButtonGroup</h3><code>import { ButtonGroup } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">role </td><td class="font-monospace"><div>string</div></td><td><code>'group'</code></td><td><div><p>An ARIA role describing the button group. Usually the default "group" role is fine. An <code>aria-label</code> or <code>aria-labelledby</code> prop is also recommended.</p></div></td></tr><tr><td class="font-monospace">size </td><td class="font-monospace"><div><span><code>'sm'</code><span> | </span><code>'lg'</code></span></div></td><td></td><td><div><p>Sets the size for all Buttons in the group.</p></div></td></tr><tr><td class="font-monospace">vertical </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Make the set of Buttons appear vertically stacked.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'btn-group'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>ButtonToolbar</h3><code>import { ButtonToolbar } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">role </td><td class="font-monospace"><div>string</div></td><td><code>'toolbar'</code></td><td><div><p>The ARIA role describing the button toolbar. Generally the default "toolbar" role is correct. An <code>aria-label</code> or <code>aria-labelledby</code> prop is also recommended.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'btn-toolbar'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),S=()=>D.cloneNode(!0),G=v('<div class="row gy-4 pb-5 mb-5"><div><h2>Button groups</h2><p class="lead">Group a series of buttons together on a single line with the button group.</p></div><div></div><div><h4>Button toolbar</h4></div><div><p>Feel free to mix input groups with button groups in your toolbars. Similar to the example above, you\u2019ll likely need some utilities though to space things properly.</p></div><div><h4>Sizing</h4><br><br></div><div><h4>Nesting</h4></div><div><h4>Vertical variation</h4></div></div>'),$=()=>(()=>{const s=G.cloneNode(!0),c=s.firstChild,y=c.firstChild,b=c.nextSibling,h=b.nextSibling;h.firstChild;const i=h.nextSibling;i.firstChild;const d=i.nextSibling,w=d.firstChild,m=w.nextSibling,x=m.nextSibling,p=d.nextSibling;p.firstChild;const g=p.nextSibling;return g.firstChild,o(c,e(B,{name:"ButtonGroupDocs"}),y),o(b,e(r,{"aria-label":"Basic example",get children(){return[e(t,{variant:"secondary",children:"Left"}),e(t,{variant:"secondary",children:"Middle"}),e(t,{variant:"secondary",children:"Right"})]}})),o(h,e(u,{"aria-label":"Toolbar with button groups",get children(){return[e(r,{className:"me-2","aria-label":"First group",get children(){return[e(t,{children:"1"}),e(t,{children:"2"}),e(t,{children:"3"})," ",e(t,{children:"4"})]}}),e(r,{className:"me-2","aria-label":"Second group",get children(){return[e(t,{children:"5"}),e(t,{children:"6"}),e(t,{children:"7"})]}}),e(r,{"aria-label":"Third group",get children(){return e(t,{children:"8"})}})]}}),null),o(i,e(u,{className:"mb-3","aria-label":"Toolbar with Button groups",get children(){return[e(r,{className:"me-2","aria-label":"First group",get children(){return[e(t,{variant:"secondary",children:"1"})," ",e(t,{variant:"secondary",children:"2"})," ",e(t,{variant:"secondary",children:"3"})," ",e(t,{variant:"secondary",children:"4"})]}}),e(l,{get children(){return[e(l.Text,{id:"btnGroupAddon",children:"@"}),e(f,{type:"text",placeholder:"Input group example","aria-label":"Input group example","aria-describedby":"btnGroupAddon"})]}})]}}),null),o(i,e(u,{className:"justify-content-between","aria-label":"Toolbar with Button groups",get children(){return[e(r,{"aria-label":"First group",get children(){return[e(t,{variant:"secondary",children:"1"})," ",e(t,{variant:"secondary",children:"2"})," ",e(t,{variant:"secondary",children:"3"})," ",e(t,{variant:"secondary",children:"4"})]}}),e(l,{get children(){return[e(l.Text,{id:"btnGroupAddon2",children:"@"}),e(f,{type:"text",placeholder:"Input group example","aria-label":"Input group example","aria-describedby":"btnGroupAddon2"})]}})]}}),null),o(d,e(r,{size:"lg",className:"mb-2",get children(){return[e(t,{children:"Left"}),e(t,{children:"Middle"}),e(t,{children:"Right"})]}}),m),o(d,e(r,{className:"mb-2",get children(){return[e(t,{children:"Left"}),e(t,{children:"Middle"}),e(t,{children:"Right"})]}}),x),o(d,e(r,{size:"sm",get children(){return[e(t,{children:"Left"}),e(t,{children:"Middle"}),e(t,{children:"Right"})]}}),null),o(p,e(r,{get children(){return[e(t,{children:"1"}),e(t,{children:"2"}),e(a,{as:r,title:"Dropdown",id:"bg-nested-dropdown",get children(){return[e(n.Item,{eventKey:"1",children:"Dropdown link"}),e(n.Item,{eventKey:"2",children:"Dropdown link"})]}})]}}),null),o(g,e(r,{vertical:!0,get children(){return[e(t,{children:"Button"}),e(t,{children:"Button"}),e(a,{as:r,title:"Dropdown",id:"bg-vertical-dropdown-1",get children(){return[e(n.Item,{eventKey:"1",children:"Dropdown link"}),e(n.Item,{eventKey:"2",children:"Dropdown link"})]}}),e(t,{children:"Button"}),e(t,{children:"Button"}),e(a,{as:r,title:"Dropdown",id:"bg-vertical-dropdown-2",get children(){return[e(n.Item,{eventKey:"1",children:"Dropdown link"}),e(n.Item,{eventKey:"2",children:"Dropdown link"})]}}),e(a,{as:r,title:"Dropdown",id:"bg-vertical-dropdown-3",get children(){return[e(n.Item,{eventKey:"1",children:"Dropdown link"}),e(n.Item,{eventKey:"2",children:"Dropdown link"})]}})]}}),null),o(s,e(S,{}),null),s})();export{$ as default};
