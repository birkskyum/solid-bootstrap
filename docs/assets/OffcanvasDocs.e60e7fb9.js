import{t as i,j as b,c as e,m as j,i as c,B as h,a5 as t}from"./vendor.3f1e4489.js";import{x as N,E as a}from"./Example.d0f7b791.js";import{G as y}from"./GithubSource.635f2108.js";const w=i(`<div class="mt-5"><h2>API</h2><h3>Offcanvas</h3><code>import { Offcanvas } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">aria-labelledby </td><td class="font-monospace"><div>string</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">autoFocus </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>When <code>true</code> The offcanvas will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the offcanvas less accessible to assistive technologies, like screen-readers.</p></div></td></tr><tr><td class="font-monospace">backdrop </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Include a backdrop component.</p></div></td></tr><tr><td class="font-monospace">backdropClassName </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>Add an optional extra class name to .offcanvas-backdrop.</p></div></td></tr><tr><td class="font-monospace">container </td><td class="font-monospace"><div>any</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">enforceFocus </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>When <code>true</code> The offcanvas will prevent focus from leaving the offcanvas while open. Consider leaving the default value here, as it is necessary to make the offcanvas work well with assistive technologies, such as screen readers.</p></div></td></tr><tr><td class="font-monospace">keyboard </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Closes the offcanvas when escape key is pressed.</p></div></td></tr><tr><td class="font-monospace">onEnter </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired before the offcanvas transitions in</p></div></td></tr><tr><td class="font-monospace">onEntered </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired after the offcanvas finishes transitioning in</p></div></td></tr><tr><td class="font-monospace">onEntering </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired as the offcanvas begins to transition in</p></div></td></tr><tr><td class="font-monospace">onEscapeKeyDown </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback fired when the escape key, if specified in <code>keyboard</code>, is pressed.</p></div></td></tr><tr><td class="font-monospace">onExit </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired right before the offcanvas transitions out</p></div></td></tr><tr><td class="font-monospace">onExited </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired after the offcanvas finishes transitioning out</p></div></td></tr><tr><td class="font-monospace">onExiting </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired as the offcanvas begins to transition out</p></div></td></tr><tr><td class="font-monospace">onHide </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback fired when the header closeButton or backdrop is clicked. Required if either are specified.</p></div></td></tr><tr><td class="font-monospace">onShow </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback fired when the offcanvas is opening.</p></div></td></tr><tr><td class="font-monospace">placement </td><td class="font-monospace"><div><span><code>'start'</code><span> | </span><code>'end'</code><span> | </span><code>'top'</code><span> | </span><code>'bottom'</code></span></div></td><td><code>'start'</code></td><td><div><p>Which side of the viewport the offcanvas will appear from.</p></div></td></tr><tr><td class="font-monospace">restoreFocus </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>When <code>true</code> The offcanvas will restore focus to previously focused element once offcanvas is hidden</p></div></td></tr><tr><td class="font-monospace">restoreFocusOptions </td><td class="font-monospace"><div>shape</div></td><td></td><td><div><p>Options passed to focus function when <code>restoreFocus</code> is set to <code>true</code></p></div></td></tr><tr><td class="font-monospace">scroll </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Allow body scrolling while offcanvas is open.</p></div></td></tr><tr><td class="font-monospace">show </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>When <code>true</code> The offcanvas will show itself.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'offcanvas'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>OffcanvasHeader</h3><code>import { OffcanvasHeader } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">closeButton </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Specify whether the Component should contain a close button</p></div></td></tr><tr><td class="font-monospace">closeLabel </td><td class="font-monospace"><div>string</div></td><td><code>'Close'</code></td><td><div><p>Provides an accessible label for the close button. It is used for Assistive Technology when the label text is not readable.</p></div></td></tr><tr><td class="font-monospace">closeVariant </td><td class="font-monospace"><div><span><code>'white'</code></span></div></td><td></td><td><div><p>Sets the variant for close button.</p></div></td></tr><tr><td class="font-monospace">onHide </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A Callback fired when the close button is clicked. If used directly inside a Offcanvas component, the onHide will automatically be propagated up to the parent Offcanvas <code>onHide</code>.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'offcanvas-header'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>OffcanvasTitle</h3><code>import { OffcanvasTitle } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;DivStyledAsH5&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'offcanvas-title'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>OffcanvasBody</h3><code>import { OffcanvasBody } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'offcanvas-body'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),O=()=>w.cloneNode(!0);b(!1);const p=new Map,m=n=>(p.has(n)||p.set(n,b(!1)),p.get(n)),f=n=>m(n)[0](),v=n=>()=>m(n)[1](!0),u=n=>()=>m(n)[1](!1),k=[{name:"Enable backdrop (default)",scroll:!1,backdrop:!0},{name:"Disable backdrop",scroll:!1,backdrop:!1},{name:"Enable body scrolling",scroll:!0,backdrop:!1},{name:"Enable both scrolling & backdrop",scroll:!0,backdrop:!0}],x=i('<p class="lead"></p>'),C=i('<div class="row gy-5 pt-3"></div>');function E(n={}){const{wrapper:o}=Object.assign({},N(),n.components);return o?e(o,j(n,{get children(){return e(g,{})}})):g();function g(){const s=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li"},N(),n.components);return a||d("Example",!1),a.Code||d("Example.Code",!0),a.Intro||d("Example.Intro",!0),a.Preview||d("Example.Preview",!0),t||d("Offcanvas",!1),t.Body||d("Offcanvas.Body",!0),t.Header||d("Offcanvas.Header",!0),t.Title||d("Offcanvas.Title",!0),[e(y,{name:"OffcanvasDocs.mdx"}),`
`,e(s.h1,{children:"Offcanvas"}),`
`,(()=>{const r=x.cloneNode(!0);return c(r,e(s.p,{children:`Build hidden sidebars into your project for navigation, shopping carts, and\r
more.`})),r})(),`
`,(()=>{const r=C.cloneNode(!0);return c(r,e(a,{title:"Basic Example",get children(){return[e(a.Intro,{get children(){return e(s.p,{children:`Offcanvas includes support for a header with a close button and an optional body class\r
for some initial padding. We suggest that you include offcanvas headers with dismiss\r
actions whenever possible, or provide an explicit dismiss action.`})}}),e(a.Preview,{get children(){return[e(h,{variant:"primary",get onClick(){return v("basic")},children:"Launch"}),e(t,{get show(){return f("basic")},get onHide(){return u("basic")},get children(){return[e(t.Header,{closeButton:!0,get children(){return e(t.Title,{children:"Offcanvas"})}}),e(t.Body,{get children(){return e(s.p,{children:`Some text as placeholder. In real life you can have the elements\r
you have chosen. Like, text, images, lists, etc.`})}})]}})]}}),e(a.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-js",get children(){return[e(s.span,{className:"hljs-keyword",children:"const"})," [show, setShow] = ",e(s.span,{className:"hljs-title hljs-function",children:"createSignal"}),"(",e(s.span,{className:"hljs-literal",children:"false"}),`);\r
`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-title hljs-function",children:"handleOpen"})," = (",e(s.span,{className:"hljs-params"}),") => ",e(s.span,{className:"hljs-title hljs-function",children:"setShow"}),"(",e(s.span,{className:"hljs-literal",children:"true"}),`);\r
`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-title hljs-function",children:"handleClose"})," = (",e(s.span,{className:"hljs-params"}),") => ",e(s.span,{className:"hljs-title hljs-function",children:"setShow"}),"(",e(s.span,{className:"hljs-literal",children:"false"}),`);\r
\r
`,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"})," ",e(s.span,{className:"hljs-attr",children:"variant"}),"=",e(s.span,{className:"hljs-string",children:'"primary"'})," ",e(s.span,{className:"hljs-attr",children:"onClick"}),"=",e(s.span,{className:"hljs-string",children:"{handleOpen}"}),">"]}}),"Launch",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`\r
\r
`,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas"})," ",e(s.span,{className:"hljs-attr",children:"show"}),"=",e(s.span,{className:"hljs-string",children:"{show()}"})," ",e(s.span,{className:"hljs-attr",children:"onHide"}),"=",e(s.span,{className:"hljs-string",children:"{handleClose}"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas.Header"})," ",e(s.span,{className:"hljs-attr",children:"closeButton"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas.Title"}),">"]}}),"Offcanvas",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas.Title"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas.Header"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas.Body"}),">"]}}),`\r
    Some text as placeholder. In real life you can have the elements\r
    you have chosen. Like, text, images, lists, etc.\r
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas.Body"}),">"]}}),`\r
`,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas"}),">"]}})]}}),`
`]}})}})}})]}}),null),c(r,e(a,{title:"Placement",get children(){return[e(a.Intro,{get children(){return[e(s.p,{children:"Offcanvas supports a few different placements:"}),e(s.ul,{get children(){return[`
`,e(s.li,{get children(){return[e(s.code,{children:"start"})," places offcanvas on the left of the viewport"]}}),`
`,e(s.li,{get children(){return[e(s.code,{children:"end"})," places offcanvas on the right of the viewport"]}}),`
`,e(s.li,{get children(){return[e(s.code,{children:"top"})," places offcanvas on the top of the viewport"]}}),`
`,e(s.li,{get children(){return[e(s.code,{children:"bottom"})," places offcanvas on the bottom of the viewport"]}}),`
`]}})]}}),e(a.Preview,{get children(){return["start","end","top","bottom"].map((l,B)=>e(s.span,{get children(){return[e(h,{variant:"primary",get onClick(){return v(l)},className:"me-2",children:l}),e(t,{get show(){return f(l)},get onHide(){return u(l)},placement:l,get children(){return[e(t.Header,{closeButton:!0,get children(){return e(t.Title,{children:"Offcanvas"})}}),e(t.Body,{children:"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."})]}})]}}))}}),e(a.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-js",get children(){return["{[",e(s.span,{className:"hljs-string",children:'"start"'}),", ",e(s.span,{className:"hljs-string",children:'"end"'}),", ",e(s.span,{className:"hljs-string",children:'"top"'}),", ",e(s.span,{className:"hljs-string",children:'"bottom"'}),"].",e(s.span,{className:"hljs-title hljs-function",children:"map"}),"(",e(s.span,{className:"hljs-function",get children(){return["(",e(s.span,{className:"hljs-params",children:"placement, idx"}),") =>"]}}),` (\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"span"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"}),`\r
      `,e(s.span,{className:"hljs-attr",children:"variant"}),"=",e(s.span,{className:"hljs-string",children:'"primary"'}),`\r
      `,e(s.span,{className:"hljs-attr",children:"onClick"}),"=",e(s.span,{className:"hljs-string",children:"{handleOpen(placement)}"}),`\r
      `,e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"me-2"'}),`\r
    >`]}}),`\r
      {placement}\r
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas"}),`\r
      `,e(s.span,{className:"hljs-attr",children:"show"}),"=",e(s.span,{className:"hljs-string",children:"{show(placement)}"}),`\r
      `,e(s.span,{className:"hljs-attr",children:"onHide"}),"=",e(s.span,{className:"hljs-string",children:"{handleClose(placement)}"}),`\r
      `,e(s.span,{className:"hljs-attr",children:"placement"}),"=",e(s.span,{className:"hljs-string",children:"{placement}"}),`\r
    >`]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas.Header"})," ",e(s.span,{className:"hljs-attr",children:"closeButton"}),">"]}}),`\r
        `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas.Title"}),">"]}}),"Offcanvas",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas.Title"}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas.Header"}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas.Body"}),">"]}}),`\r
        Some text as placeholder. In real life you can have the\r
        elements you have chosen. Like, text, images, lists, etc.\r
      `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas.Body"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"span"}),">"]}})]}}),`\r
))}
`]}})}})}})]}}),null),c(r,e(a,{title:"Backdrop",get children(){return[e(a.Intro,{get children(){return e(s.p,{get children(){return["Scrolling the ",e(s.code,{children:"<body>"}),` element is disabled when an offcanvas and its backdrop are\r
visible. Use the `,e(s.code,{children:"scroll"})," prop to toggle ",e(s.code,{children:"<body>"})," scrolling and the ",e(s.code,{children:"backdrop"}),` prop\r
to toggle the backdrop.`]}})}}),e(a.Preview,{get children(){return k.map(l=>e(s.span,{get children(){return[e(h,{variant:"primary",get onClick(){return v(l.name)},className:"me-2",get children(){return l.name}}),e(t,j({get show(){return f(l.name)},get onHide(){return u(l.name)}},l,{get children(){return[e(t.Header,{closeButton:!0,get children(){return e(t.Title,{children:"Offcanvas"})}}),e(t.Body,{children:"Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc."})]}}))]}}))}}),e(a.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-js",get children(){return["{backdropOptions.",e(s.span,{className:"hljs-title hljs-function",children:"map"}),"(",e(s.span,{className:"hljs-function",get children(){return["(",e(s.span,{className:"hljs-params",children:"options"}),") =>"]}}),` (\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"span"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"}),`\r
      `,e(s.span,{className:"hljs-attr",children:"variant"}),"=",e(s.span,{className:"hljs-string",children:'"primary"'}),`\r
      `,e(s.span,{className:"hljs-attr",children:"onClick"}),"=",e(s.span,{className:"hljs-string",children:"{handleOpen(options.name)}"}),`\r
      `,e(s.span,{className:"hljs-attr",children:"className"}),"=",e(s.span,{className:"hljs-string",children:'"me-2"'}),`\r
    >`]}}),`\r
      {options.name}\r
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas"}),`\r
      `,e(s.span,{className:"hljs-attr",children:"show"}),"=",e(s.span,{className:"hljs-string",children:"{show(options.name)}"}),`\r
      `,e(s.span,{className:"hljs-attr",children:"onHide"}),"=",e(s.span,{className:"hljs-string",children:"{handleClose(options.name)}"}),`\r
      {`,e(s.span,{className:"hljs-attr",children:"...options"}),`}\r
    >`]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas.Header"})," ",e(s.span,{className:"hljs-attr",children:"closeButton"}),">"]}}),`\r
        `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas.Title"}),">"]}}),"Offcanvas",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas.Title"}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas.Header"}),">"]}}),`\r
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Offcanvas.Body"}),">"]}}),`\r
        Some text as placeholder. In real life you can have the\r
        elements you have chosen. Like, text, images, lists, etc.\r
      `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas.Body"}),">"]}}),`\r
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Offcanvas"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"span"}),">"]}})]}}),`\r
))}
`]}})}})}})]}}),null),c(r,e(O,{}),null),r})()]}}function d(n,o){throw new Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{E as default};