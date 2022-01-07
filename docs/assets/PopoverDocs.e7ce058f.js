import{t as i,c as e,m as g,i as l,a8 as h,a9 as o,B as m}from"./vendor.eb2a44b7.js";import{x as v,E as s}from"./Example.e085d8f3.js";import{G as f}from"./GithubSource.e1a7c1be.js";const u=i(`<div class="mt-5"><h2>API</h2><h3>Popover</h3><code>import { Popover } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">arrowProps </td><td class="font-monospace"><div>shape</div></td><td></td><td><div><p>An Overlay injected set of props for positioning the popover arrow.</p><blockquote><p>This is generally provided by the <code>Overlay</code> component positioning the popover</p></blockquote></div></td></tr><tr><td class="font-monospace">body </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>When this prop is set, it creates a Popover with a Popover.Body inside passing the children directly to it</p></div></td></tr><tr><td class="font-monospace">id <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>An html id attribute, necessary for accessibility</p></div></td></tr><tr><td class="font-monospace">placement </td><td class="font-monospace"><div><span><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></span></div></td><td><code>'right'</code></td><td><div><p>Sets the direction the Popover is positioned towards.</p><blockquote><p>This is generally provided by the <code>Overlay</code> component positioning the popover</p></blockquote></div></td></tr><tr><td class="font-monospace">popper </td><td class="font-monospace"><div>object</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">show </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'popover'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>PopoverBody</h3><code>import { PopoverBody } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'popover-body'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>PopoverHeader</h3><code>import { PopoverHeader } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'popover-header'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Overlay</h3><code>import { Overlay } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">container </td><td class="font-monospace"><div>componentOrElement</div></td><td></td><td><div><p>A component instance, DOM node. The <code>container</code> element will have the Overlay appended to it via a React portal.</p></div></td></tr><tr><td class="font-monospace">onEnter </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired before the Overlay transitions in</p></div></td></tr><tr><td class="font-monospace">onEntered </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired after the Overlay finishes transitioning in</p></div></td></tr><tr><td class="font-monospace">onEntering </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired as the Overlay begins to transition in</p></div></td></tr><tr><td class="font-monospace">onExit </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired right before the Overlay transitions out</p></div></td></tr><tr><td class="font-monospace">onExited </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired after the Overlay finishes transitioning out</p></div></td></tr><tr><td class="font-monospace">onExiting </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired as the Overlay begins to transition out</p></div></td></tr><tr><td class="font-monospace">onHide </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback invoked by the overlay when it wishes to be hidden. Required if<code>rootClose</code> is specified.</p></div></td></tr><tr><td class="font-monospace">placement </td><td class="font-monospace"><div><span><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></span></div></td><td><code>'top'</code></td><td><div><p>The placement of the Overlay in relation to it's <code>target</code>.</p></div></td></tr><tr><td class="font-monospace">popperConfig </td><td class="font-monospace"><div>object</div></td><td></td><td><div><p>A set of popper options and props passed directly to Popper.</p></div></td></tr><tr><td class="font-monospace">rootClose </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Specify whether the overlay should trigger onHide when the user clicks outside the overlay</p></div></td></tr><tr><td class="font-monospace">rootCloseEvent </td><td class="font-monospace"><div><span><code>'click'</code><span> | </span><code>'mousedown'</code></span></div></td><td></td><td><div><p>Specify event for triggering a "root close" toggle.</p></div></td></tr><tr><td class="font-monospace">show </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Set the visibility of the Overlay</p></div></td></tr><tr><td class="font-monospace">target </td><td class="font-monospace"><div>componentOrElement</div></td><td></td><td><div><p>A component instance, DOM node. The overlay will be positioned in relation to the <code>target</code></p></div></td></tr><tr><td class="font-monospace">transition </td><td class="font-monospace"><div>boolean | elementType</div></td><td><code>Fade</code></td><td><div><p>Animate the entering and exiting of the Overlay. <code>true</code> will use the <code>&lt;Fade&gt;</code> transition, or a custom react-transition-group <code>&lt;Transition&gt;</code> component can be provided.</p></div></td></tr></tbody></table></div><h3>OverlayTrigger</h3><code>import { OverlayTrigger } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">children <sup class="text-danger">required</sup></td><td class="font-monospace"><div>element</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">defaultShow </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>The initial visibility state of the Overlay.</p></div></td></tr><tr><td class="font-monospace">delay </td><td class="font-monospace"><div>number | shape</div></td><td></td><td><div><p>A millisecond delay amount to show and hide the Overlay once triggered</p></div></td></tr><tr><td class="font-monospace">flip </td><td class="font-monospace"><div>boolean</div></td><td><code>placement &amp;&amp; placement.indexOf('auto') !== -1</code></td><td><div><p>The initial flip state of the Overlay.</p></div></td></tr><tr><td class="font-monospace">onHide </td><td class="font-monospace"><div><span><code>null</code></span></div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">onToggle </td><td class="font-monospace"><div>function</div></td><td></td><td><div class="mb-2"><small><em class="text-info"><span>controls <code>'show'</code></span></em></small></div><div><p>A callback that fires when the user triggers a change in tooltip visibility.</p><p><code>onToggle</code> is called with the desired next <code>show</code>, and generally should be passed back to the <code>show</code> prop. <code>onToggle</code> fires <em>after</em> the configured <code>delay</code></p></div></td></tr><tr><td class="font-monospace">overlay <sup class="text-danger">required</sup></td><td class="font-monospace"><div>function | element</div></td><td></td><td><div><p>An element or text to overlay next to the target.</p></div></td></tr><tr><td class="font-monospace">placement </td><td class="font-monospace"><div><span><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></span></div></td><td></td><td><div><p>The placement of the Overlay in relation to it's <code>target</code>.</p></div></td></tr><tr><td class="font-monospace">popperConfig </td><td class="font-monospace"><div>object</div></td><td></td><td><div><p>A Popper.js config object passed to the the underlying popper instance.</p></div></td></tr><tr><td class="font-monospace">show </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div class="mb-2"><small><em class="text-info"><span>controlled by: <code>onToggle</code>, initial prop: <code>defaultShow</code></span></em></small></div><div><p>The visibility of the Overlay. <code>show</code> is a <em>controlled</em> prop so should be paired with <code>onToggle</code> to avoid breaking user interactions.</p><p>Manually toggling <code>show</code> does <strong>not</strong> wait for <code>delay</code> to change the visibility.</p></div></td></tr><tr><td class="font-monospace">target </td><td class="font-monospace"><div><span><code>null</code></span></div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">trigger </td><td class="font-monospace"><div>'hover' | 'click' |'focus' | Array&lt;'hover' | 'click' |'focus'&gt;</div></td><td><code>['hover', 'focus']</code></td><td><div><p>Specify which action or actions trigger Overlay visibility</p></div></td></tr></tbody></table></div></div>`),b=()=>u.cloneNode(!0),y=i('<p class="lead"></p>'),j=i('<div class="row gy-5 pt-3"></div>');function x(n={}){const{wrapper:r}=Object.assign({},v(),n.components);return r?e(r,g(n,{get children(){return e(p,{})}})):p();function p(){const t=Object.assign({h1:"h1",p:"p",strong:"strong",pre:"pre",code:"code",span:"span"},v(),n.components);return s||d("Example",!1),s.Code||d("Example.Code",!0),s.Intro||d("Example.Intro",!0),s.Preview||d("Example.Preview",!0),o||d("Popover",!1),o.Body||d("Popover.Body",!0),o.Header||d("Popover.Header",!0),[e(f,{name:"PopoverDocs.mdx"}),`
`,e(t.h1,{children:"Popovers"}),`
`,(()=>{const a=y.cloneNode(!0);return l(a,e(t.p,{children:"A popover component, like those found in iOS."})),a})(),`
`,(()=>{const a=j.cloneNode(!0);return l(a,e(s,{title:"Examples",get children(){return[e(s.Intro,{}),e(s.Preview,{get children(){return e(h,{trigger:"click",offset:[0,8],placement:"right",get overlay(){return e(o,{id:"popover-basic",get children(){return[e(o.Header,{as:"h3",children:"Popover right"}),e(o.Body,{get children(){return["And here's some ",e(t.strong,{children:"amazing"})," content. It's very engaging. right?"]}})]}})},get children(){return e(m,{variant:"success",children:"Click me to see"})}})}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title hljs-class",children:"OverlayTrigger"}),`\r
  trigger=`,e(t.span,{className:"hljs-string",children:'"click"'}),`\r
  offset={[`,e(t.span,{className:"hljs-number",children:"0"}),", ",e(t.span,{className:"hljs-number",children:"8"}),`]}\r
  placement=`,e(t.span,{className:"hljs-string",children:'"right"'}),`\r
  overlay={\r
    `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Popover"})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:'"popover-basic"'}),">"]}}),`\r
      `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Popover.Header"})," ",e(t.span,{className:"hljs-attr",children:"as"}),"=",e(t.span,{className:"hljs-string",children:'"h3"'}),">"]}}),"Popover right",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Popover.Header"}),">"]}}),`\r
      `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Popover.Body"}),">"]}}),`\r
        And here's some `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"strong"}),">"]}}),"amazing",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"strong"}),">"]}}),` content. It's very\r
        engaging. right?\r
      `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Popover.Body"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Popover"}),">"]}})]}}),`\r
  }\r
>\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Button"})," ",e(t.span,{className:"hljs-attr",children:"variant"}),"=",e(t.span,{className:"hljs-string",children:'"success"'}),">"]}}),"Click me to see",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`\r
</`,e(t.span,{className:"hljs-title hljs-class",children:"OverlayTrigger"}),`>
`]}})}})}})]}}),null),l(a,e(s,{title:"Placement options",get children(){return[e(s.Preview,{get children(){return["top","bottom","left","right"].map(c=>e(h,{trigger:"click",offset:[0,8],placement:c,get overlay(){return e(o,{id:`popover-positioned-${c}`,get children(){return[e(o.Header,{as:"h3",children:`Popover ${c}`}),e(o.Body,{get children(){return[e(t.strong,{children:"Holy guacamole!"})," Check this info."]}})]}})},get children(){return e(m,{variant:"secondary",className:"me-2",get children(){return["Popover on ",c]}})}}))}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["{[",e(t.span,{className:"hljs-string",children:'"top"'}),", ",e(t.span,{className:"hljs-string",children:'"bottom"'}),", ",e(t.span,{className:"hljs-string",children:'"left"'}),", ",e(t.span,{className:"hljs-string",children:'"right"'}),"].",e(t.span,{className:"hljs-title hljs-function",children:"map"}),"(",e(t.span,{className:"hljs-function",get children(){return["(",e(t.span,{className:"hljs-params",children:"placement"}),") =>"]}}),` (\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"OverlayTrigger"}),`\r
    `,e(t.span,{className:"hljs-attr",children:"trigger"}),"=",e(t.span,{className:"hljs-string",children:'"click"'}),`\r
    `,e(t.span,{className:"hljs-attr",children:"offset"}),"=",e(t.span,{className:"hljs-string",children:"{[0,"})," ",e(t.span,{className:"hljs-attr",children:"8"}),`]}\r
    `,e(t.span,{className:"hljs-attr",children:"placement"}),"=",e(t.span,{className:"hljs-string",children:"{placement"})," ",e(t.span,{className:"hljs-attr",children:"as"})," ",e(t.span,{className:"hljs-attr",children:"Placement"}),`}\r
    `,e(t.span,{className:"hljs-attr",children:"overlay"}),"=",e(t.span,{className:"hljs-string",children:"{"}),`\r
      <`,e(t.span,{className:"hljs-attr",children:"Popover"})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"popover-positioned-"}),"${",e(t.span,{className:"hljs-attr",children:"placement"}),"}`}>"]}}),`\r
        `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Popover.Header"})," ",e(t.span,{className:"hljs-attr",children:"as"}),"=",e(t.span,{className:"hljs-string",children:'"h3"'}),">"]}}),"{`Popover ${placement}`}",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Popover.Header"}),">"]}}),`\r
        `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Popover.Body"}),">"]}}),`\r
          `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"strong"}),">"]}}),"Holy guacamole!",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"strong"}),">"]}}),` Check this info.\r
        `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Popover.Body"}),">"]}}),`\r
      `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Popover"}),">"]}}),`\r
    }\r
  >\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Button"})," ",e(t.span,{className:"hljs-attr",children:"variant"}),"=",e(t.span,{className:"hljs-string",children:'"secondary"'})," ",e(t.span,{className:"hljs-attr",children:"className"}),"=",e(t.span,{className:"hljs-string",children:'"me-2"'}),">"]}}),`\r
      Popover on {placement}\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Button"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"OverlayTrigger"}),">"]}})]}}),`\r
))}
`]}})}})}})]}}),null),l(a,e(b,{}),null),a})()]}}function d(n,r){throw new Error("Expected "+(r?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{x as default};
