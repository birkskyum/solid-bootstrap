import{t as d,c as n,m as g,i as t,ac as a,B as m}from"./vendor.ae9e2594.js";import{M as p}from"./index.c69ded01.js";import{E as s}from"./Example.fb8010ad.js";import{G as u}from"./GithubSource.3a37cb00.js";const N=d(`<div class="mt-5"><h2>API</h2><h3>Spinner</h3><code>import { Spinner } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">animation <sup class="text-danger">required</sup></td><td class="font-monospace"><div><span><code>'border'</code><span> | </span><code>'grow'</code></span></div></td><td><code>true</code></td><td><div><p>Changes the animation style of the spinner.</p></div></td></tr><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">children </td><td class="font-monospace"><div>element</div></td><td></td><td><div><p>This component may be used to wrap child elements or components.</p></div></td></tr><tr><td class="font-monospace">role </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>An ARIA accessible role applied to the Menu component. This should generally be set to 'status'</p></div></td></tr><tr><td class="font-monospace">size </td><td class="font-monospace"><div><span><code>'sm'</code></span></div></td><td></td><td><div><p>Component size variations.</p></div></td></tr><tr><td class="font-monospace">variant </td><td class="font-monospace"><div><span><code>'primary'</code><span> | </span><code>'secondary'</code><span> | </span><code>'success'</code><span> | </span><code>'danger'</code><span> | </span><code>'warning'</code><span> | </span><code>'info'</code><span> | </span><code>'light'</code><span> | </span><code>'dark'</code></span></div></td><td></td><td><div><p>The visual color style of the spinner</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'spinner'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),j=()=>N.cloneNode(!0),v=d('<p class="lead"></p>'),h=d('<span class="visually-hidden">Loading...</span>'),b=d('<div class="row gy-5 pt-3"></div>');function x(l={}){const{wrapper:i}=Object.assign({},p(),l.components);return i?n(i,g(l,{get children(){return n(o,{})}})):o();function o(){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",strong:"strong"},p(),l.components);return s||c("Example",!1),s.Code||c("Example.Code",!0),s.Intro||c("Example.Intro",!0),s.Preview||c("Example.Preview",!0),[n(u,{name:"SpinnerDocs.mdx"}),`
`,n(e.h1,{children:"Spinners"}),`
`,(()=>{const r=v.cloneNode(!0);return t(r,n(e.p,{children:"Spinners can be used to show the loading state in your projects."})),r})(),`
`,(()=>{const r=b.cloneNode(!0);return t(r,n(s,{get children(){return[n(s.Intro,{get children(){return n(e.p,{children:"Spinners can be used to show the loading state in your projects."})}}),n(s.Preview,{get children(){return n(a,{animation:"border",role:"status",get children(){return h.cloneNode(!0)}})}}),n(s.Code,{get children(){return n(e.pre,{get children(){return n(e.code,{className:"hljs language-js",get children(){return["<",n(e.span,{className:"hljs-title hljs-class",children:"Spinner"})," animation=",n(e.span,{className:"hljs-string",children:'"border"'})," role=",n(e.span,{className:"hljs-string",children:'"status"'}),`>\r
  `,n(e.span,{className:"xml",get children(){return[n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"span"})," ",n(e.span,{className:"hljs-attr",children:"className"}),"=",n(e.span,{className:"hljs-string",children:'"visually-hidden"'}),">"]}}),"Loading...",n(e.span,{className:"hljs-tag",get children(){return["</",n(e.span,{className:"hljs-name",children:"span"}),">"]}})]}}),`\r
</`,n(e.span,{className:"hljs-title hljs-class",children:"Spinner"}),`>
`]}})}})}})]}}),null),t(r,n(s,{title:"Animations",get children(){return[n(s.Intro,{get children(){return[n(e.p,{get children(){return[`Bootstrap offers two animation styles for spinners. The animation style\r
can be configured with the `,n(e.code,{children:"animation"}),` property. An animation style\r
must always be provided when creating a spinner.`]}}),n(e.p,{get children(){return n(e.strong,{get children(){return n(e.code,{children:'animation="border"'})}})}})]}}),n(s.Preview,{get children(){return n(a,{animation:"border"})}}),n(s.Code,{get children(){return n(e.pre,{get children(){return n(e.code,{className:"hljs language-js",get children(){return["<",n(e.span,{className:"hljs-title hljs-class",children:"Spinner"})," animation=",n(e.span,{className:"hljs-string",children:'"border"'}),` />
`]}})}})}})]}}),null),t(r,n(s,{get children(){return[n(s.Intro,{get children(){return n(e.p,{get children(){return n(e.strong,{get children(){return n(e.code,{children:'animation="grow"'})}})}})}}),n(s.Preview,{get children(){return n(a,{animation:"grow"})}}),n(s.Code,{get children(){return n(e.pre,{get children(){return n(e.code,{className:"hljs language-js",get children(){return["<",n(e.span,{className:"hljs-title hljs-class",children:"Spinner"})," animation=",n(e.span,{className:"hljs-string",children:'"grow"'}),` />
`]}})}})}})]}}),null),t(r,n(s,{title:"Variants",get children(){return[n(s.Intro,{get children(){return n(e.p,{get children(){return[`All standard visual variants are available for both animation styles by\r
setting the `,n(e.code,{children:"variant"}),` property. Alternatively spinners can be custom\r
sized with the `,n(e.code,{children:"style"})," property, or custom CSS classes."]}})}}),n(s.Preview,{get children(){return[n(a,{animation:"border",variant:"primary"}),n(a,{animation:"border",variant:"secondary"}),n(a,{animation:"border",variant:"success"}),n(a,{animation:"border",variant:"danger"}),n(a,{animation:"border",variant:"warning"}),n(a,{animation:"border",variant:"info"}),n(a,{animation:"border",variant:"light"}),n(a,{animation:"border",variant:"dark"}),n(a,{animation:"grow",variant:"primary"}),n(a,{animation:"grow",variant:"secondary"}),n(a,{animation:"grow",variant:"success"}),n(a,{animation:"grow",variant:"danger"}),n(a,{animation:"grow",variant:"warning"}),n(a,{animation:"grow",variant:"info"}),n(a,{animation:"grow",variant:"light"}),n(a,{animation:"grow",variant:"dark"})]}}),n(s.Code,{get children(){return n(e.pre,{get children(){return n(e.code,{className:"hljs language-js",get children(){return["<",n(e.span,{className:"hljs-title hljs-class",children:"Spinner"})," animation=",n(e.span,{className:"hljs-string",children:'"border"'})," variant=",n(e.span,{className:"hljs-string",children:'"primary"'}),` />\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"border"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"secondary"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"border"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"success"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"border"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"danger"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"border"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"warning"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"border"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"info"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"border"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"light"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"border"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"dark"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"primary"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"secondary"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"success"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"danger"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"warning"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"info"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"light"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"dark"'})," />"]}})}}),`
`]}})}})}})]}}),null),t(r,n(s,{title:"Sizing",get children(){return[n(s.Intro,{get children(){return n(e.p,{get children(){return[`In addition to the standard size, a smaller additional preconfigured\r
size is available by configuring the `,n(e.code,{children:"size"})," property to ",n(e.code,{children:"sm"}),"."]}})}}),n(s.Preview,{get children(){return[n(a,{animation:"border",size:"sm"}),n(a,{animation:"border"}),n(a,{animation:"grow",size:"sm"}),n(a,{animation:"grow"})]}}),n(s.Code,{get children(){return n(e.pre,{get children(){return n(e.code,{className:"hljs language-js",get children(){return["<",n(e.span,{className:"hljs-title hljs-class",children:"Spinner"})," animation=",n(e.span,{className:"hljs-string",children:'"border"'})," size=",n(e.span,{className:"hljs-string",children:'"sm"'}),` />\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"border"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," ",n(e.span,{className:"hljs-attr",children:"size"}),"=",n(e.span,{className:"hljs-string",children:'"sm"'})," />"]}})}}),`\r
`,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"})," ",n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'})," />"]}})}}),`
`]}})}})}})]}}),null),t(r,n(s,{title:"Buttons",get children(){return[n(s.Intro,{get children(){return n(e.p,{get children(){return[`Like the original Bootstrap spinners, these can also be used with\r
buttons. To use this component out-of-the-box it is recommended you\r
change the element type to `,n(e.code,{children:"span"})," by configuring the ",n(e.code,{children:"as"}),` property when\r
using spinners inside buttons.`]}})}}),n(s.Preview,{get children(){return[n(m,{variant:"primary",disabled:!0,get children(){return[n(a,{as:"span",animation:"border",size:"sm",role:"status","aria-hidden":"true"}),h.cloneNode(!0)]}})," ",n(m,{variant:"primary",disabled:!0,get children(){return[n(a,{as:"span",animation:"grow",size:"sm",role:"status","aria-hidden":"true"})," Loading..."]}})]}}),n(s.Code,{get children(){return n(e.pre,{get children(){return n(e.code,{className:"hljs language-js",get children(){return["<",n(e.span,{className:"hljs-title hljs-class",children:"Button"})," variant=",n(e.span,{className:"hljs-string",children:'"primary"'}),` disabled>\r
  `,n(e.span,{className:"xml",get children(){return n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"}),`\r
    `,n(e.span,{className:"hljs-attr",children:"as"}),"=",n(e.span,{className:"hljs-string",children:'"span"'}),`\r
    `,n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"border"'}),`\r
    `,n(e.span,{className:"hljs-attr",children:"size"}),"=",n(e.span,{className:"hljs-string",children:'"sm"'}),`\r
    `,n(e.span,{className:"hljs-attr",children:"role"}),"=",n(e.span,{className:"hljs-string",children:'"status"'}),`\r
    `,n(e.span,{className:"hljs-attr",children:"aria-hidden"}),"=",n(e.span,{className:"hljs-string",children:'"true"'}),`\r
  />`]}})}}),`\r
  `,n(e.span,{className:"xml",get children(){return[n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"span"})," ",n(e.span,{className:"hljs-attr",children:"className"}),"=",n(e.span,{className:"hljs-string",children:'"visually-hidden"'}),">"]}}),"Loading...",n(e.span,{className:"hljs-tag",get children(){return["</",n(e.span,{className:"hljs-name",children:"span"}),">"]}})]}}),`\r
</`,n(e.span,{className:"hljs-title hljs-class",children:"Button"}),`>\r
`,n(e.span,{className:"xml",get children(){return[n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Button"})," ",n(e.span,{className:"hljs-attr",children:"variant"}),"=",n(e.span,{className:"hljs-string",children:'"primary"'})," ",n(e.span,{className:"hljs-attr",children:"disabled"}),">"]}}),`\r
  `,n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"Spinner"}),`\r
    `,n(e.span,{className:"hljs-attr",children:"as"}),"=",n(e.span,{className:"hljs-string",children:'"span"'}),`\r
    `,n(e.span,{className:"hljs-attr",children:"animation"}),"=",n(e.span,{className:"hljs-string",children:'"grow"'}),`\r
    `,n(e.span,{className:"hljs-attr",children:"size"}),"=",n(e.span,{className:"hljs-string",children:'"sm"'}),`\r
    `,n(e.span,{className:"hljs-attr",children:"role"}),"=",n(e.span,{className:"hljs-string",children:'"status"'}),`\r
    `,n(e.span,{className:"hljs-attr",children:"aria-hidden"}),"=",n(e.span,{className:"hljs-string",children:'"true"'}),`\r
  />`]}}),` \r
  Loading...\r
`,n(e.span,{className:"hljs-tag",get children(){return["</",n(e.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`
`]}})}})}})]}}),null),t(r,n(s,{title:"Accessibility",get children(){return[n(s.Intro,{get children(){return[n(e.p,{get children(){return[`To ensure the maximum accessibility for spinner components it is\r
recommended you provide a relevant ARIA `,n(e.code,{children:"role"}),` property,\r
and include screenreader-only readable text representation of the\r
spinner's meaning inside the component using Bootstrap's `,n(e.code,{children:"visually-hidden"}),`\r
class.`]}}),n(e.p,{children:`The example below provides an example of accessible usage of this\r
component.`})]}}),n(s.Preview,{get children(){return n(a,{animation:"border",role:"status",get children(){return h.cloneNode(!0)}})}}),n(s.Code,{get children(){return n(e.pre,{get children(){return n(e.code,{className:"hljs language-js",get children(){return["<",n(e.span,{className:"hljs-title hljs-class",children:"Spinner"})," animation=",n(e.span,{className:"hljs-string",children:'"border"'})," role=",n(e.span,{className:"hljs-string",children:'"status"'}),`>\r
  `,n(e.span,{className:"xml",get children(){return[n(e.span,{className:"hljs-tag",get children(){return["<",n(e.span,{className:"hljs-name",children:"span"})," ",n(e.span,{className:"hljs-attr",children:"className"}),"=",n(e.span,{className:"hljs-string",children:'"visually-hidden"'}),">"]}}),"Loading...",n(e.span,{className:"hljs-tag",get children(){return["</",n(e.span,{className:"hljs-name",children:"span"}),">"]}})]}}),`\r
</`,n(e.span,{className:"hljs-title hljs-class",children:"Spinner"}),`>
`]}})}})}})]}}),null),t(r,n(j,{}),null),r})()]}}function c(l,i){throw new Error("Expected "+(i?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{x as default};