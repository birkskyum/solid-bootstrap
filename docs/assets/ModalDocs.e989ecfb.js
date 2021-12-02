import{aq as O,a3 as B,t as b,g as D,m as k,u as E,s as F,i as m,b as A,d as M,c as e,ar as re,a2 as ie,n as x,aj as le,H as ce,as as L,T as pe,at as ue,A as me,ag as I,au as he,aa as fe,Z as ge,D as ve,P as be,K as ye,ab as we,av as ke,C as Ce,w as W}from"./vendor.b0d12bc4.js";import{B as i,R as U,C as S}from"./Layout.eb1c4701.js";import{C as n}from"./Card.b4a8d3c9.js";import{G as Me}from"./GithubSource.ff774389.js";var $;function j(c){if((!$&&$!==0||c)&&O){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),$=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return $}var xe=B("modal-body");const Se=b("<div><div></div></div>"),Te={},Ne=c=>{const[t,p]=D(k(Te,c),["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"]),l=E(t.bsPrefix,"modal"),a=`${l}-dialog`,w=typeof t.fullscreen=="string"?`${l}-fullscreen-${t.fullscreen}`:`${l}-fullscreen`;return(()=>{const g=Se.cloneNode(!0),s=g.firstChild;return F(g,p,!1,!0),m(s,()=>t.children),A(u=>{const y=M(a,t.className,t.size&&`${l}-${t.size}`,t.centered&&`${a}-centered`,t.scrollable&&`${a}-scrollable`,t.fullscreen&&w),h=M(`${l}-content`,t.contentClassName);return y!==u._v$&&(g.className=u._v$=y),h!==u._v$2&&(s.className=u._v$2=h),u},{_v$:void 0,_v$2:void 0}),g})()};var K=Ne,$e=B("modal-footer");const He={closeLabel:"Close",closeButton:!1},Be=c=>{const[t,p]=D(k(He,c),["bsPrefix","className"]),l=E(t.bsPrefix,"modal-header");return e(re,k(p,{get className(){return M(t.className,l)}}))};var De=Be;const Ee=ie("h4");var Fe=B("modal-title",{Component:Ee});const Ae=b("<div></div>"),_e=b('<div role="dialog"></div>'),ze={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:K};function Pe(c){return e(I,k(c,{timeout:void 0}))}function qe(c){return e(I,k(c,{timeout:void 0}))}const Re=c=>{const[t,p]=D(k(ze,c),["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"]),[l,a]=x({}),[w,g]=x(!1);let s=!1,u=!1,y=null,h;const f=le(),C=d=>{h=d,p.ref?.(d)},N=E(t.bsPrefix,"modal"),G={get onHide(){return t.onHide}};function _(){return t.manager?t.manager:he({isRTL:f})}function z(d){if(!O)return;const r=_().getScrollbarWidth()>0,v=d.scrollHeight>we(d).documentElement.clientHeight;a({paddingRight:r&&!v?j():void 0,paddingLeft:!r&&v?j():void 0})}const H=()=>{h&&z(h.dialog)};ce(()=>{L(window,"resize",H),y?.()});const Y=()=>{s=!0},V=d=>{s&&h&&d.target===h.dialog&&(u=!0),s=!1},P=()=>{g(!0),y=ke(h.dialog,()=>{g(!1)})},Q=d=>{d.target===d.currentTarget&&P()},Z=d=>{if(t.backdrop==="static"){Q(d);return}if(u||d.target!==d.currentTarget){u=!1;return}t.onHide?.()},J=d=>{!t.keyboard&&t.backdrop==="static"?(d.preventDefault(),P()):t.keyboard&&t.onEscapeKeyDown&&t.onEscapeKeyDown(d)},X=(d,...r)=>{d&&(d.style.display="block",z(d)),t.onEnter?.(d,...r)},ee=(...d)=>{y?.(),t.onExit?.(...d)},te=(...d)=>{t.onEntering?.(...d),fe(window,"resize",H)},oe=d=>{d&&(d.style.display=""),t.onExited?.(d),L(window,"resize",H)},de=d=>(()=>{const r=Ae.cloneNode(!0);return F(r,d,!1,!1),A(()=>r.className=M(`${N}-backdrop`,t.backdropClassName,!t.animation&&"show")),r})(),ne=()=>{let d={...t.style,...l()};return t.animation||(d.display="block"),d},ae=d=>(()=>{const r=_e.cloneNode(!0);return r.$$mouseup=V,ge(r,"click",t.backdrop?Z:void 0,!0),F(r,d,!1,!0),m(r,e(ve,k({get component(){return t.dialogAs}},p,{onMouseDown:Y,get className(){return t.dialogClassName},get contentClassName(){return t.contentClassName},get children(){return t.children}}))),A(v=>{const se=ne(),q=M(t.className,N,w()&&`${N}-static`),R=t["aria-labelledby"];return v._v$=be(r,se,v._v$),q!==v._v$2&&(r.className=v._v$2=q),R!==v._v$3&&ye(r,"aria-labelledby",v._v$3=R),v},{_v$:void 0,_v$2:void 0,_v$3:void 0}),r})();return e(ue.Provider,{value:G,get children(){return e(pe,{get show(){return t.show},ref(d){const r=C;typeof r=="function"?r(d):C=d},get backdrop(){return t.backdrop},get container(){return t.container},keyboard:!0,get autoFocus(){return t.autoFocus},get enforceFocus(){return t.enforceFocus},get restoreFocus(){return t.restoreFocus},get restoreFocusOptions(){return t.restoreFocusOptions},onEscapeKeyDown:J,get onShow(){return t.onShow},get onHide(){return t.onHide},onEnter:X,onEntering:te,get onEntered(){return t.onEntered},onExit:ee,get onExiting(){return t.onExiting},onExited:oe,get manager(){return _()},get transition(){return t.animation?Pe:void 0},get backdropTransition(){return t.animation?qe:void 0},renderBackdrop:de,renderDialog:ae})}})};var o=Object.assign(Re,{Body:xe,Header:De,Title:Fe,Footer:$e,Dialog:K,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150});me(["click","mouseup"]);const Oe=b(`<div class="mt-5"><h2>API</h2><h3>Modal</h3><code>import Modal from 'solid-bootstrap/Modal'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">animation </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Open and close the Modal with a slide and fade animation.</p></div></td></tr><tr><td class="font-monospace">aria-labelledby </td><td class="font-monospace"><div>any</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">autoFocus </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>When <code>true</code> The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes. Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.</p></div></td></tr><tr><td class="font-monospace">backdrop </td><td class="font-monospace"><div><span><code>'static'</code><span> | </span><code>true</code><span> | </span><code>false</code></span></div></td><td><code>true</code></td><td><div><p>Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.</p></div></td></tr><tr><td class="font-monospace">backdropClassName </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>Add an optional extra class name to .modal-backdrop It could end up looking like class="modal-backdrop foo-modal-backdrop in".</p></div></td></tr><tr><td class="font-monospace">centered </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>vertically center the Dialog in the window</p></div></td></tr><tr><td class="font-monospace">container </td><td class="font-monospace"><div>any</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">contentClassName </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>Add an optional extra class name to .modal-content</p></div></td></tr><tr><td class="font-monospace">dialogAs </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;ModalDialog&gt;</code></td><td><div><p>A Component type that provides the modal content Markup. This is a useful prop when you want to use your own styles and markup to create a custom modal component.</p></div></td></tr><tr><td class="font-monospace">dialogClassName </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>A css class to apply to the Modal dialog DOM node.</p></div></td></tr><tr><td class="font-monospace">enforceFocus </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>When <code>true</code> The modal will prevent focus from leaving the Modal while open. Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies, such as screen readers.</p></div></td></tr><tr><td class="font-monospace">fullscreen </td><td class="font-monospace"><div><span><code>true</code><span> | </span><code>'sm-down'</code><span> | </span><code>'md-down'</code><span> | </span><code>'lg-down'</code><span> | </span><code>'xl-down'</code><span> | </span><code>'xxl-down'</code></span></div></td><td></td><td><div><p>Renders a fullscreen modal. Specifying a breakpoint will render the modal as fullscreen <strong>below</strong> the breakpoint size.</p></div></td></tr><tr><td class="font-monospace">keyboard </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Close the modal when escape key is pressed</p></div></td></tr><tr><td class="font-monospace">manager </td><td class="font-monospace"><div>object</div></td><td></td><td><div><p>A ModalManager instance used to track and manage the state of open Modals. Useful when customizing how modals interact within a container</p></div></td></tr><tr><td class="font-monospace">onEnter </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired before the Modal transitions in</p></div></td></tr><tr><td class="font-monospace">onEntered </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired after the Modal finishes transitioning in</p></div></td></tr><tr><td class="font-monospace">onEntering </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired as the Modal begins to transition in</p></div></td></tr><tr><td class="font-monospace">onEscapeKeyDown </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback fired when the escape key, if specified in <code>keyboard</code>, is pressed.</p></div></td></tr><tr><td class="font-monospace">onExit </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired right before the Modal transitions out</p></div></td></tr><tr><td class="font-monospace">onExited </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired after the Modal finishes transitioning out</p></div></td></tr><tr><td class="font-monospace">onExiting </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired as the Modal begins to transition out</p></div></td></tr><tr><td class="font-monospace">onHide </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback fired when the header closeButton or non-static backdrop is clicked. Required if either are specified.</p></div></td></tr><tr><td class="font-monospace">onShow </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback fired when the Modal is opening.</p></div></td></tr><tr><td class="font-monospace">restoreFocus </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>When <code>true</code> The modal will restore focus to previously focused element once modal is hidden</p></div></td></tr><tr><td class="font-monospace">restoreFocusOptions </td><td class="font-monospace"><div>shape</div></td><td></td><td><div><p>Options passed to focus function when <code>restoreFocus</code> is set to <code>true</code></p></div></td></tr><tr><td class="font-monospace">scrollable </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Allows scrolling the <code>&lt;Modal.Body&gt;</code> instead of the entire Modal when overflowing.</p></div></td></tr><tr><td class="font-monospace">show </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>When <code>true</code> The modal will show itself.</p></div></td></tr><tr><td class="font-monospace">size </td><td class="font-monospace"><div><span><code>'sm'</code><span> | </span><code>'lg'</code><span> | </span><code>'xl'</code></span></div></td><td></td><td><div><p>Render a large, extra large or small modal. When not provided, the modal is rendered with medium (default) size.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'modal'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>ModalDialog</h3><code>import ModalDialog from 'solid-bootstrap/ModalDialog'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">centered </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Specify whether the Component should be vertically centered</p></div></td></tr><tr><td class="font-monospace">contentClassName </td><td class="font-monospace"><div>string</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">fullscreen </td><td class="font-monospace"><div><span><code>true</code><span> | </span><code>'sm-down'</code><span> | </span><code>'md-down'</code><span> | </span><code>'lg-down'</code><span> | </span><code>'xl-down'</code><span> | </span><code>'xxl-down'</code></span></div></td><td></td><td><div><p>Renders a fullscreen modal. Specifying a breakpoint will render the modal as fullscreen <strong>below</strong> the breakpoint size.</p></div></td></tr><tr><td class="font-monospace">scrollable </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Allows scrolling the <code>&lt;Modal.Body&gt;</code> instead of the entire Modal when overflowing.</p></div></td></tr><tr><td class="font-monospace">size </td><td class="font-monospace"><div><span><code>'sm'</code><span> | </span><code>'lg','xl'</code></span></div></td><td></td><td><div><p>Render a large, extra large or small modal.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'modal'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>ModalHeader</h3><code>import ModalHeader from 'solid-bootstrap/ModalHeader'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">closeButton </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Specify whether the Component should contain a close button</p></div></td></tr><tr><td class="font-monospace">closeLabel </td><td class="font-monospace"><div>string</div></td><td><code>'Close'</code></td><td><div><p>Provides an accessible label for the close button. It is used for Assistive Technology when the label text is not readable.</p></div></td></tr><tr><td class="font-monospace">closeVariant </td><td class="font-monospace"><div><span><code>'white'</code></span></div></td><td></td><td><div><p>Sets the variant for close button.</p></div></td></tr><tr><td class="font-monospace">onHide </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A Callback fired when the close button is clicked. If used directly inside a Modal component, the onHide will automatically be propagated up to the parent Modal <code>onHide</code>.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'modal-header'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;DivStyledAsH4&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'modal-title'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div><h3>ModalTitle</h3><code>import ModalTitle from 'solid-bootstrap/ModalTitle'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;DivStyledAsH4&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'modal-title'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>ModalBody</h3><code>import ModalBody from 'solid-bootstrap/ModalBody'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'modal-body'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>ModalFooter</h3><code>import ModalFooter from 'solid-bootstrap/ModalFooter'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'modal-footer'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),Le=()=>Oe.cloneNode(!0),Ie=b("<p>Modal body text goes here.</p>"),We=b("<h4>Centered Modal</h4>"),Ue=b("<p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>"),je=b("<p>Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde commodi aspernatur enim, consectetur. Cumque deleniti temporibus ipsam atque a dolores quisquam quisquam adipisci possimus laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia reiciendis porro quo magni incidunt dolore amet atque facilis ipsum deleniti rem!</p>"),Ke=b(`<div class="row gy-4"><div><h2>Modals</h2><div class="head">Add dialogs to your site for lightboxes, user notifications, or completely custom content.</div></div><div><h4>Overview</h4><ul><li>Modals are positioned over everything else in the document and remove scroll from the <code>&lt;body></code> so that modal content scrolls instead.</li><li>Modals are unmounted when closed.</li><li>Bootstrap only supports one modal window at a time. Nested modals aren't supported, but if you really need them, the underlying <code>solid-bootstrap/core</code> library can support them if you're willing.</li><li>Modal's "trap" focus in them, ensuring the keyboard navigation cycles through the modal, and not the rest of the page.</li><li>Unlike vanilla Bootstrap, <code>autoFocus</code> works in Modals because Solid handles the implementation.</li></ul></div><div></div></div>`);x(!1);const Ze=()=>{const c=new Map,t=s=>(c.has(s)||c.set(s,x(!1)),c.get(s)),p=s=>t(s)[0](),l=s=>()=>t(s)[1](!0),a=s=>()=>t(s)[1](!1),[w,g]=x(null);return(()=>{const s=Ke.cloneNode(!0),u=s.firstChild,y=u.firstChild,h=u.nextSibling,f=h.nextSibling;return m(u,e(Me,{name:"ModalDocs"}),y),m(f,e(n,{get children(){return[e(n.Header,{children:"Static Markup"}),e(n.Body,{get children(){return e(o.Dialog,{get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{children:"Modal title"})}}),e(o.Body,{get children(){return Ie.cloneNode(!0)}}),e(o.Footer,{get children(){return[e(i,{variant:"secondary",children:"Close"}),e(i,{variant:"primary",children:"Save changes"})]}})]}})}})]}}),null),m(f,e(n,{get children(){return[e(n.Header,{children:"Live demo"}),e(n.Body,{get children(){return[e(i,{variant:"primary",get onClick(){return l("live")},children:"Launch demo modal"}),e(o,{get show(){return p("live")},get onHide(){return a("live")},get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{children:"Modal heading"})}}),e(o.Body,{children:"Woohoo, you're reading this text in a modal!"}),e(o.Footer,{get children(){return[e(i,{variant:"secondary",get onClick(){return a("live")},children:"Close"}),e(i,{variant:"primary",get onClick(){return a("live")},children:"Save Changes"})]}})]}})," "]}})]}}),null),m(f,e(n,{get children(){return[e(n.Header,{children:"Static backdrop"}),e(n.Body,{get children(){return[e(i,{variant:"primary",get onClick(){return l("static")},children:"Launch static backdrop modal"}),e(o,{get show(){return p("static")},get onHide(){return a("static")},backdrop:"static",keyboard:!1,get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{children:"Modal title"})}}),e(o.Body,{children:"I will not close if you click outside me. Don't even try to press escape key."}),e(o.Footer,{get children(){return[e(i,{variant:"secondary",get onClick(){return a("static")},children:"Close"}),e(i,{variant:"primary",children:"Understood"})]}})]}})," "]}})]}}),null),m(f,e(n,{get children(){return[e(n.Header,{children:"Without Animation"}),e(n.Body,{get children(){return[e(i,{variant:"primary",get onClick(){return l("noanim")},children:"Launch without animation"}),e(o,{get show(){return p("noanim")},get onHide(){return a("noanim")},animation:!1,get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{children:"Modal heading"})}}),e(o.Body,{children:"Woohoo, you're reading this text in a modal!"}),e(o.Footer,{get children(){return[e(i,{variant:"secondary",get onClick(){return a("noanim")},children:"Close"}),e(i,{variant:"primary",get onClick(){return a("noanim")},children:"Save Changes"})]}})]}})]}})]}}),null),m(f,e(n,{get children(){return[e(n.Header,{children:"Vertically centered"}),e(n.Body,{get children(){return[e(i,{variant:"primary",get onClick(){return l("vertc")},children:"Launch vertically centered modal"}),e(o,{get show(){return p("vertc")},get onHide(){return a("vertc")},size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{id:"contained-modal-title-vcenter",children:"Modal heading"})}}),e(o.Body,{get children(){return[We.cloneNode(!0),Ue.cloneNode(!0)]}}),e(o.Footer,{get children(){return e(i,{get onClick(){return a("vertc")},children:"Close"})}})]}})]}})]}}),null),m(f,e(n,{get children(){return[e(n.Header,{children:"Using the grid"}),e(n.Body,{get children(){return[e(i,{variant:"primary",get onClick(){return l("grid")},children:"Launch modal with grid"}),e(o,{get show(){return p("grid")},get onHide(){return a("grid")},"aria-labelledby":"contained-modal-title-vcenter",get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{id:"contained-modal-title-vcenter",children:"Modal heading"})}}),e(o.Body,{className:"show-grid",get children(){return e(Ce,{get children(){return[e(U,{get children(){return[e(S,{xs:12,md:8,style:T,children:".col-xs-12 .col-md-8"}),e(S,{xs:6,md:4,style:T,children:".col-xs-6 .col-md-4"})]}}),e(U,{get children(){return[e(S,{xs:6,md:4,style:T,children:".col-xs-6 .col-md-4"}),e(S,{xs:6,md:4,style:T,children:".col-xs-6 .col-md-4"}),e(S,{xs:6,md:4,style:T,children:".col-xs-6 .col-md-4"})]}})]}})}}),e(o.Footer,{get children(){return e(i,{get onClick(){return a("grid")},children:"Close"})}})]}})]}})]}}),null),m(f,e(n,{get children(){return[e(n.Header,{children:"Option sizes"}),e(n.Body,{get children(){return[e(i,{get onClick(){return l("small")},children:"Small modal"})," ",e(i,{get onClick(){return l("large")},children:"Large modal"}),e(o,{size:"sm",get show(){return p("small")},get onHide(){return a("small")},"aria-labelledby":"example-modal-sizes-title-sm",get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{id:"example-modal-sizes-title-sm",children:"Small Modal"})}}),e(o.Body,{children:"..."})]}}),e(o,{size:"lg",get show(){return p("large")},get onHide(){return a("large")},"aria-labelledby":"example-modal-sizes-title-lg",get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{id:"example-modal-sizes-title-lg",children:"Large Modal"})}}),e(o.Body,{children:"..."})]}})]}})]}}),null),m(f,e(n,{get children(){return[e(n.Header,{children:"Fullscreen Modal"}),e(n.Body,{get children(){return[W(()=>["true","sm-down","md-down","lg-down","xl-down","xxl-down"].map((C,N)=>e(i,{className:"me-2",onClick:()=>g(C),get children(){return["Full screen",W(()=>C!=="true"&&`below ${C.split("-")[0]}`)]}}))),e(o,{get show(){return!!w()},get fullscreen(){return w()==="true"||w()},onHide:()=>g(null),get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{children:"Modal"})}}),e(o.Body,{children:"Modal body content"})]}})]}})]}}),null),m(f,e(n,{get children(){return[e(n.Header,{children:"Sizing modals using custom CSS"}),e(n.Body,{get children(){return[e(i,{variant:"primary",get onClick(){return l("custom")},children:"Custom Width Modal"}),e(o,{get show(){return p("custom")},get onHide(){return a("custom")},dialogClassName:"modal-90w","aria-labelledby":"example-custom-modal-styling-title",get children(){return[e(o.Header,{closeButton:!0,get children(){return e(o.Title,{id:"example-custom-modal-styling-title",children:"Custom Modal Styling"})}}),e(o.Body,{get children(){return je.cloneNode(!0)}})]}})]}})]}}),null),m(s,e(Le,{}),null),s})()},T={"background-color":"#bbeffd",border:"1px solid #61dafb"};export{Ze as ModalDocs,Ze as default};