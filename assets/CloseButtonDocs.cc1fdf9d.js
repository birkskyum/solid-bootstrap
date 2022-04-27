import{t as d,c as e,j as p,v as s,H as a}from"./index.5ae66943.js";import{M as u}from"./index.e525610a.js";import{E as n}from"./Example.7f10c31b.js";import{G as m}from"./GithubSource.8f1815a8.js";import"./Card.c15ac305.js";const g=d(`<div class="mt-5"><h2>API</h2><h3>CloseButton</h3><code>import { CloseButton } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">aria-label </td><td class="font-monospace"><div>string</div></td><td><code>'Close'</code></td><td><div></div></td></tr><tr><td class="font-monospace">onClick </td><td class="font-monospace"><div>function</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">variant </td><td class="font-monospace"><div><span><code>'white'</code></span></div></td><td></td><td><div><p>Render different color variant for the button.</p><p>Omitting this will render the default dark color.</p></div></td></tr></tbody></table></div></div>`),v=()=>g.cloneNode(!0),b=d('<p class="lead"></p>'),f=d('<div class="bg-dark p-3"></div>'),j=d('<div class="row gy-5 pt-3"></div>');function B(l={}){const{wrapper:o}=Object.assign({},u(),l.components);return o?e(o,p(l,{get children(){return e(h,{})}})):h();function h(){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span"},u(),l.components);return n||i("Example",!1),n.Code||i("Example.Code",!0),n.Intro||i("Example.Intro",!0),n.Preview||i("Example.Preview",!0),[e(m,{name:"CloseButtonDocs.mdx"}),`
`,e(t.h1,{children:"Close Button"}),`
`,(()=>{const r=b.cloneNode(!0);return s(r,e(t.p,{children:`A generic close button for dismissing content such as modals and
alerts.`})),r})(),`
`,(()=>{const r=j.cloneNode(!0);return s(r,e(n,{title:"Example",get children(){return[e(n.Intro,{get children(){return e(t.p,{children:"A generic close button for dismissing content such as modals and alerts."})}}),e(n.Preview,{get children(){return e(a,{})}}),e(n.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"CloseButton"}),` />
`]}})}})}})]}}),null),s(r,e(n,{title:"Disabled state",get children(){return[e(n.Intro,{get children(){return e(t.p,{children:"Bootstrap adds relevant styling to a disabled close button to prevent user interactions."})}}),e(n.Preview,{get children(){return e(a,{disabled:!0})}}),e(n.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"CloseButton"}),` disabled />
`]}})}})}})]}}),null),s(r,e(n,{title:"Variants",get children(){return[e(n.Intro,{get children(){return e(t.p,{get children(){return["Change the default dark color to white using ",e(t.code,{children:'variant="white"'}),"."]}})}}),e(n.Preview,{get children(){const c=f.cloneNode(!0);return s(c,e(a,{variant:"white"}),null),s(c,e(a,{variant:"white",disabled:!0}),null),c}}),e(n.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<div ",e(t.span,{className:"hljs-keyword",children:"class"}),"=",e(t.span,{className:"hljs-string",children:'"bg-dark p-3"'}),`>
  `,e(t.span,{className:"xml",get children(){return e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"CloseButton"})," ",e(t.span,{className:"hljs-attr",children:"variant"}),"=",e(t.span,{className:"hljs-string",children:'"white"'})," />"]}})}}),`
  `,e(t.span,{className:"xml",get children(){return e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"CloseButton"})," ",e(t.span,{className:"hljs-attr",children:"variant"}),"=",e(t.span,{className:"hljs-string",children:'"white"'})," ",e(t.span,{className:"hljs-attr",children:"disabled"})," />"]}})}}),`
</div>
`]}})}})}})]}}),null),s(r,e(n,{title:"Accessibility",get children(){return[e(n.Intro,{get children(){return e(t.p,{get children(){return["To ensure the maximum accessibility for Close Button components, it is recommended that you provide relevant text for screen readers. The example below provides an example of accessible usage of this component by way of the ",e(t.code,{children:"aria-label"})," property."]}})}}),e(n.Preview,{get children(){return e(a,{"aria-label":"Hide"})}}),e(n.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"CloseButton"})," aria-label=",e(t.span,{className:"hljs-string",children:'"Hide"'}),` />
`]}})}})}})]}}),null),s(r,e(v,{}),null),r})()]}}function i(l,o){throw new Error("Expected "+(o?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{B as default};