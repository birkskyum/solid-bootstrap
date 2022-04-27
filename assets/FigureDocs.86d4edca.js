import{s as g,m as p,d as u,e as f,y as h,t as d,c as e,j as b,v as c}from"./index.5ae66943.js";import{M as m}from"./index.e525610a.js";import{E as s}from"./Example.7f10c31b.js";import{G as v}from"./GithubSource.8f1815a8.js";import{H as N}from"./utils.49e5c0d2.js";import{I as F}from"./Image.938c7fb6.js";import"./Card.c15ac305.js";const j={fluid:!0},x=r=>{const[a,l]=g(p(j,r),["class","className"]);return u(F,p(l,{get class(){return f(a.class,a.className,"figure-img")}}))};var y=x;const C=h("figure-caption",{Component:"figcaption"});var w=C;const I=h("figure",{Component:"figure"});var o=Object.assign(I,{Image:y,Caption:w});const P=d(`<div class="mt-5"><h2>API</h2><h3>Figure</h3><code>import { Figure } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;figure&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'figure'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>FigureImage</h3><code>import { FigureImage } from 'solid-bootstrap'</code><h3 class="mt-5">FigureCaption</h3><code>import { FigureCaption } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;figcaption&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'figure-caption'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),$=()=>P.cloneNode(!0),_=d('<p class="lead"></p>'),D=d('<div class="row gy-5 pt-3"></div>');function q(r={}){const{wrapper:a}=Object.assign({},m(),r.components);return a?e(a,b(r,{get children(){return e(l,{})}})):l();function l(){const t=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span"},m(),r.components);return s||i("Example",!1),s.Code||i("Example.Code",!0),s.Intro||i("Example.Intro",!0),s.Preview||i("Example.Preview",!0),o||i("Figure",!1),o.Caption||i("Figure.Caption",!0),o.Image||i("Figure.Image",!0),[e(v,{name:"FigureDocs.mdx"}),`
`,e(t.h1,{children:"Figures"}),`
`,(()=>{const n=_.cloneNode(!0);return c(n,e(t.p,{get children(){return[`Anytime you need to display a piece of content, like an image with an
optional caption, consider using a `,e(t.code,{children:"Figure"}),"."]}})),n})(),`
`,(()=>{const n=D.cloneNode(!0);return c(n,e(N,{}),null),c(n,e(s,{title:"Figure",get children(){return[e(s.Intro,{get children(){return e(t.p,{children:"Displaying related images and text with the Figure component."})}}),e(s.Preview,{get children(){return e(o,{get children(){return[e(o.Image,{width:171,height:180,alt:"171x180",src:"holder.js/171x180"}),e(o.Caption,{get children(){return e(t.p,{children:"Nulla vitae elit libero, a pharetra augue mollis interdum."})}})]}})}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Figure"}),`>
  `,e(t.span,{className:"xml",get children(){return e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Figure.Image"}),`
    `,e(t.span,{className:"hljs-attr",children:"width"}),"=",e(t.span,{className:"hljs-string",children:"{171}"}),`
    `,e(t.span,{className:"hljs-attr",children:"height"}),"=",e(t.span,{className:"hljs-string",children:"{180}"}),`
    `,e(t.span,{className:"hljs-attr",children:"alt"}),"=",e(t.span,{className:"hljs-string",children:'"171x180"'}),`
    `,e(t.span,{className:"hljs-attr",children:"src"}),"=",e(t.span,{className:"hljs-string",children:'"holder.js/171x180"'}),`
  />`]}})}}),`
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Figure.Caption"}),">"]}}),`
    Nulla vitae elit libero, a pharetra augue mollis interdum.
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Figure.Caption"}),">"]}})]}}),`
</`,e(t.span,{className:"hljs-title class_",children:"Figure"}),`>
`]}})}})}})]}}),null),c(n,e($,{}),null),n})()]}}function i(r,a){throw new Error("Expected "+(a?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{q as default};