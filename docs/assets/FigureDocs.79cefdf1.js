import{h as l,m as r,c as t,e as p,a2 as d,t as n,i}from"./vendor.4272b27d.js";import{I as m}from"./Image.3343337d.js";import{G as u}from"./GithubSource.54692cd7.js";import{u as g}from"./utils.b893ae08.js";const h={fluid:!0},f=e=>{const[o,s]=l(r(h,e),["className"]);return t(m,r(s,{get className(){return p(o.className,"figure-img")},get children(){return s.children}}))};var b=f;const v=d("figure-caption",{Component:"figcaption"});var F=v;const y=d("figure",{Component:"figure"});var a=Object.assign(y,{Image:b,Caption:F});const C=n(`<div class="mt-5"><h2>API</h2><h3>Figure</h3><code>import Figure from 'solid-bootstrap/Figure'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;figure&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'figure'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>FigureImage</h3><code>import FigureImage from 'solid-bootstrap/FigureImage'</code><h3 class="mt-5">FigureCaption</h3><code>import FigureCaption from 'solid-bootstrap/FigureCaption'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;figcaption&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'figure-caption'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),w=()=>C.cloneNode(!0),x=n('<div class="row gy-4"><div><h2>Figures</h2><p class="lead">Anytime you need to display a piece of content, like an image with an optional caption, consider using a Figure.</p></div><div></div></div>'),P=()=>(g(),(()=>{const e=x.cloneNode(!0),o=e.firstChild,s=o.firstChild,c=o.nextSibling;return i(o,t(u,{name:"FigureDocs"}),s),i(c,t(a,{get children(){return[t(a.Image,{width:171,height:180,alt:"171x180",src:"holder.js/171x180"}),t(a.Caption,{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})]}})),i(e,t(w,{}),null),e})());export{P as FigureDocs,P as default};
