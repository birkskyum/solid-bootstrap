import{t as d,s as g,j as S,i as s,c as t,w as r,P as o}from"./vendor.6436aea9.js";import{G as C}from"./GithubSource.535effac.js";const $=d(`<div class="mt-5"><h2>API</h2><h3>Carousel</h3><code>import { Carousel } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">activeIndex </td><td class="font-monospace"><div>number</div></td><td></td><td><div class="mb-2"><small><em class="text-info"><span>controlled by: <code>onSelect</code>, initial prop: <code>defaultActiveindex</code></span></em></small></div><div><p>Controls the current visible slide</p></div></td></tr><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">controls </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Show the Carousel previous and next arrows for changing the current slide</p></div></td></tr><tr><td class="font-monospace">fade </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Animates slides with a crossfade animation instead of the default slide animation</p></div></td></tr><tr><td class="font-monospace">indicatorLabels </td><td class="font-monospace"><div><span>array&lt;&gt;</span></div></td><td><code>[]</code></td><td><div><p>An array of labels for the indicators. Defaults to "Slide #" if not provided.</p></div></td></tr><tr><td class="font-monospace">indicators </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Show a set of slide position indicators</p></div></td></tr><tr><td class="font-monospace">interval </td><td class="font-monospace"><div>number</div></td><td><code>5000</code></td><td><div><p>The amount of time to delay between automatically cycling an item. If <code>null</code>, carousel will not automatically cycle.</p></div></td></tr><tr><td class="font-monospace">keyboard </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Whether the carousel should react to keyboard events.</p></div></td></tr><tr><td class="font-monospace">nextIcon </td><td class="font-monospace"><div>node</div></td><td><code>&lt;span aria-hidden="true" className="carousel-control-next-icon" /&gt;</code></td><td><div><p>Override the default button icon for the "next" control</p></div></td></tr><tr><td class="font-monospace">nextLabel </td><td class="font-monospace"><div>string</div></td><td><code>'Next'</code></td><td><div><p>Label shown to screen readers only, can be used to show the next element in the carousel. Set to null to deactivate.</p></div></td></tr><tr><td class="font-monospace">onSelect </td><td class="font-monospace"><div>function</div></td><td></td><td><div class="mb-2"><small><em class="text-info"><span>controls <code>activeIndex</code></span></em></small></div><div><p>Callback fired when the active item changes.</p><div><pre><code>(eventKey: number, event: Object | null) => void</code></pre></div></div></td></tr><tr><td class="font-monospace">onSlid </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired when a slide transition ends.</p><div><pre><code>(eventKey: number, direction: 'left' | 'right') => void</code></pre></div></div></td></tr><tr><td class="font-monospace">onSlide </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired when a slide transition starts.</p><div><pre><code>(eventKey: number, direction: 'left' | 'right') => void</code></pre></div></div></td></tr><tr><td class="font-monospace">pause </td><td class="font-monospace"><div><span><code>'hover'</code><span> | </span><code>false</code></span></div></td><td><code>'hover'</code></td><td><div><p>If set to <code>"hover"</code>, pauses the cycling of the carousel on <code>mouseenter</code> and resumes the cycling of the carousel on <code>mouseleave</code>. If set to <code>false</code>, hovering over the carousel won't pause it.</p><p>On touch-enabled devices, when set to <code>"hover"</code>, cycling will pause on <code>touchend</code> (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.</p></div></td></tr><tr><td class="font-monospace">prevIcon </td><td class="font-monospace"><div>node</div></td><td><code>&lt;span aria-hidden="true" className="carousel-control-prev-icon" /&gt;</code></td><td><div><p>Override the default button icon for the "previous" control</p></div></td></tr><tr><td class="font-monospace">prevLabel </td><td class="font-monospace"><div>string</div></td><td><code>'Previous'</code></td><td><div><p>Label shown to screen readers only, can be used to show the previous element in the carousel. Set to null to deactivate.</p></div></td></tr><tr><td class="font-monospace">slide </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Enables animation on the Carousel as it transitions between slides.</p></div></td></tr><tr><td class="font-monospace">touch </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Whether the carousel should support left/right swipe interactions on touchscreen devices.</p></div></td></tr><tr><td class="font-monospace">variant </td><td class="font-monospace"><div><span><code>'dark'</code></span></div></td><td></td><td><div><p>Color variant that controls the colors of the controls, indicators and captions.</p></div></td></tr><tr><td class="font-monospace">wrap </td><td class="font-monospace"><div>boolean</div></td><td><code>true</code></td><td><div><p>Whether the carousel should cycle continuously or have hard stops.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'carousel'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Carousel.Item</h3><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>Set a custom element for this component</p></div></td></tr><tr><td class="font-monospace">interval </td><td class="font-monospace"><div>number</div></td><td></td><td><div><p>The amount of time to delay between automatically cycling this specific item. Will default to the Carousel's <code>interval</code> prop value if none is specified.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'carousel-item'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Carousel.Caption</h3><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">bsPrefix <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td><code>'carousel-caption'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),_=()=>$.cloneNode(!0),I=d('<svg xmlns="http://www.w3.org/2000/svg" width="382.23" height="70.7"><defs><linearGradient id="a" x1="11.67" y1="73.36" x2="70.61" y2="44.72" gradientTransform="matrix(1 0 0 -1 0 73.4)" gradientUnits="userSpaceOnUse"><stop offset=".1" stop-color="#76b3e1"></stop><stop offset=".3" stop-color="#dcf2fd"></stop><stop offset="1" stop-color="#76b3e1"></stop></linearGradient><linearGradient id="b" x1="44" y1="59.33" x2="33.68" y2="24.96" gradientTransform="matrix(1 0 0 -1 0 73.4)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#76b3e1"></stop><stop offset=".5" stop-color="#4377bb"></stop><stop offset="1" stop-color="#1f3b77"></stop></linearGradient><linearGradient id="c" x1="7.34" y1="44.34" x2="66.94" y2="3.82" gradientTransform="matrix(1 0 0 -1 0 73.4)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#315aa9"></stop><stop offset=".5" stop-color="#518ac8"></stop><stop offset="1" stop-color="#315aa9"></stop></linearGradient><linearGradient id="d" x1="34.25" y1="39.49" x2="10.2" y2="-48.7" gradientTransform="matrix(1 0 0 -1 0 73.4)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4377bb"></stop><stop offset=".5" stop-color="#1a336b"></stop><stop offset="1" stop-color="#1a336b"></stop></linearGradient></defs><path d="M75.81 15.35S50.86-3.49 31.5.91l-1.7.47A12.35 12.35 0 0 0 23.22 6a11.18 11.18 0 0 0-.71 1.18l-7.15 12.15 12.35 2.41a22 22 0 0 0 17.61 3.46l22 4.3Z" style="fill:#76b3e1"></path><path d="M75.81 15.35S50.86-3.49 31.5.91l-1.7.47A12.35 12.35 0 0 0 23.22 6a11.18 11.18 0 0 0-.71 1.18l-7.15 12.15 12.35 2.41a22 22 0 0 0 17.61 3.46l22 4.3Z" style="fill:url(#a);isolation:isolate;opacity:.3"></path><path d="m23 15.11-1.71.48c-7.9 2.55-10.6 9.94-6.06 16.42a21.12 21.12 0 0 0 22.54 7.1l29.52-9.61S42.39 10.71 23 15.11Z" style="fill:#518ac8"></path><path d="m23 15.11-1.71.48c-7.9 2.55-10.6 9.94-6.06 16.42a21.12 21.12 0 0 0 22.54 7.1l29.52-9.61S42.39 10.71 23 15.11Z" style="fill:url(#b);isolation:isolate;opacity:.3"></path><path d="M61.89 36.42a21.11 21.11 0 0 0-22.58-7.15L9.82 38.83.54 55.35l52.83 9 9.47-16.85c1.89-3.23 1.7-7.3-.95-11.08Z" style="fill:url(#c)"></path><path d="M52.61 52.94a21.14 21.14 0 0 0-22.53-7.15L.54 55.35s25 18.84 44.31 14.44l1.7-.47c7.91-2.51 10.61-9.9 6.06-16.38Z" style="fill:url(#d)"></path><path d="M109.71 45a12 12 0 0 0 8.1 3.4c3.4 0 6.2-2 6.2-5.4 0-7.8-15.5-5.9-15.5-15.5 0-4.5 4-8.3 9.7-8.3a12 12 0 0 1 8.3 3L125 24.8a10.38 10.38 0 0 0-6.8-2.7c-4 0-6.5 2.6-6.6 5.3 0 7.4 15.5 5.3 15.5 15.5 0 4.6-3.6 8.4-9.4 8.4a13.36 13.36 0 0 1-9.8-4Zm49.1-25.6a15.73 15.73 0 0 1 15.8 15.9 16 16 0 0 1-15.8 16.2h-.1a16 16 0 0 1-15.8-16.2v-.1a15.73 15.73 0 0 1 15.9-15.8Zm-.1 29.3a13 13 0 0 0 12.7-13.29v-.11c0-7.4-5.6-13.1-12.6-13.1a12.72 12.72 0 0 0-12.7 13c0 7.6 5.6 13.4 12.6 13.5Zm33.9-28.7h3l-.1 28.3h14.4V51h-17.5Zm33.9.1h3l-.1 31.1h-3Zm23.2 0h10c9.3 0 15.6 5.7 15.6 15.6s-6.3 15.5-15.6 15.5h-10Zm9.6 28.4c7.6 0 12.7-4.5 12.8-12.8s-5.1-12.8-12.7-12.8h-6.7l-.1 25.6Zm42.17 2.7a10.27 10.27 0 0 0 7.06-2.52 9 9 0 0 0 2.86-7.1V20.47h-6.25v20.65a4.2 4.2 0 0 1-1 3 3.61 3.61 0 0 1-2.77 1.07q-2.94 0-4.29-3.45l-5.29 2.95q2.59 6.51 9.68 6.51Zm37.46.07c3.47 0 6.19-.86 8.14-2.59a8.61 8.61 0 0 0 2.92-6.79 7.09 7.09 0 0 0-2.5-5.67c-1.68-1.44-4.37-2.68-8.07-3.74a11.76 11.76 0 0 1-3.76-1.57 2.57 2.57 0 0 1-1.1-2.15 2.7 2.7 0 0 1 1.1-2.25 4.6 4.6 0 0 1 2.91-.85 5.67 5.67 0 0 1 5.71 3.72l5.17-2.83a10.05 10.05 0 0 0-4.07-4.84 12.17 12.17 0 0 0-6.53-1.71 11.11 11.11 0 0 0-7.45 2.6 8.11 8.11 0 0 0-3.09 6.55 7.5 7.5 0 0 0 2.32 5.61q2.08 2.1 7.37 3.69a16.51 16.51 0 0 1 4.52 1.82 2.33 2.33 0 0 1 1.19 2.09 2.74 2.74 0 0 1-1.29 2.31 5.64 5.64 0 0 1-3.3.91 7 7 0 0 1-6.6-4.23l-5.4 2.79a10.85 10.85 0 0 0 4.49 5.23 13.74 13.74 0 0 0 7.32 1.9Z" style="fill:#58595b"></path></svg>'),p=l=>(()=>{const a=I.cloneNode(!0);return g(a,l,!0,!0),a})(),P=d('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 166 155.3"><defs><linearGradient id="a" gradientUnits="userSpaceOnUse" x1="27.5" y1="3" x2="152" y2="63.5"><stop offset=".1" stop-color="#76b3e1"></stop><stop offset=".3" stop-color="#dcf2fd"></stop><stop offset="1" stop-color="#76b3e1"></stop></linearGradient><linearGradient id="b" gradientUnits="userSpaceOnUse" x1="95.8" y1="32.6" x2="74" y2="105.2"><stop offset="0" stop-color="#76b3e1"></stop><stop offset=".5" stop-color="#4377bb"></stop><stop offset="1" stop-color="#1f3b77"></stop></linearGradient><linearGradient id="c" gradientUnits="userSpaceOnUse" x1="18.4" y1="64.2" x2="144.3" y2="149.8"><stop offset="0" stop-color="#315aa9"></stop><stop offset=".5" stop-color="#518ac8"></stop><stop offset="1" stop-color="#315aa9"></stop></linearGradient><linearGradient id="d" gradientUnits="userSpaceOnUse" x1="75.2" y1="74.5" x2="24.4" y2="260.8"><stop offset="0" stop-color="#4377bb"></stop><stop offset=".5" stop-color="#1a336b"></stop><stop offset="1" stop-color="#1a336b"></stop></linearGradient></defs><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" fill="#76b3e1"></path><path d="M163 35S110-4 69 5l-3 1c-6 2-11 5-14 9l-2 3-15 26 26 5c11 7 25 10 38 7l46 9 18-30z" opacity=".3" fill="url(#a)"></path><path d="m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" fill="#518ac8"></path><path d="m52 35-4 1c-17 5-22 21-13 35 10 13 31 20 48 15l62-21S92 26 52 35z" opacity=".3" fill="url(#b)"></path><path d="M134 80a45 45 0 0 0-48-15L24 85 4 120l112 19 20-36c4-7 3-15-2-23z" fill="url(#c)"></path><path d="M114 115a45 45 0 0 0-48-15L4 120s53 40 94 30l3-1c17-5 23-21 13-34z" fill="url(#d)"></path></svg>'),h=l=>(()=>{const a=P.cloneNode(!0);return g(a,l,!0,!0),a})(),Z=d('<svg xmlns="http://www.w3.org/2000/svg" width="306.42" height="70.7"><defs><clipPath id="a"><path style="fill:none" d="M0 0h306.42v70.7H0z"></path></clipPath></defs><g style="clip-path:url(#a)"><path d="M33.9 45a12 12 0 0 0 8.1 3.4c3.4 0 6.2-2 6.2-5.4 0-7.8-15.5-5.9-15.5-15.5 0-4.5 4-8.3 9.7-8.3a12 12 0 0 1 8.3 3l-1.5 2.6a10.38 10.38 0 0 0-6.8-2.7c-4 0-6.5 2.6-6.6 5.3 0 7.4 15.5 5.3 15.5 15.5 0 4.6-3.6 8.4-9.4 8.4a13.36 13.36 0 0 1-9.8-4ZM83 19.4a15.73 15.73 0 0 1 15.8 15.9A16 16 0 0 1 83 51.5h-.1a16 16 0 0 1-15.8-16.2v-.1A15.73 15.73 0 0 1 83 19.4m-.1 29.3a13 13 0 0 0 12.7-13.29v-.11c0-7.4-5.6-13.1-12.6-13.1a12.72 12.72 0 0 0-12.7 13c0 7.6 5.6 13.4 12.6 13.5M116.8 20h3l-.1 28.3h14.4V51h-17.5Zm33.9.1h3l-.1 31.1h-3Zm23.2 0h10c9.3 0 15.6 5.7 15.6 15.6s-6.3 15.5-15.6 15.5h-10Zm9.6 28.4c7.6 0 12.7-4.5 12.8-12.8s-5.1-12.8-12.7-12.8h-6.7l-.1 25.6Zm42.17 2.7a10.27 10.27 0 0 0 7.06-2.52 9 9 0 0 0 2.86-7.1V20.47h-6.25v20.65a4.2 4.2 0 0 1-1 3 3.61 3.61 0 0 1-2.77 1.07q-2.94 0-4.29-3.45L216 44.69q2.6 6.51 9.69 6.51m37.44.07c3.47 0 6.19-.86 8.14-2.59a8.63 8.63 0 0 0 2.93-6.79 7.09 7.09 0 0 0-2.5-5.67c-1.68-1.44-4.37-2.68-8.07-3.74a11.76 11.76 0 0 1-3.76-1.57 2.57 2.57 0 0 1-1.1-2.15 2.7 2.7 0 0 1 1.1-2.25 4.6 4.6 0 0 1 2.91-.85 5.67 5.67 0 0 1 5.71 3.72l5.17-2.83a10.12 10.12 0 0 0-4.07-4.85 12.25 12.25 0 0 0-6.54-1.7 11.11 11.11 0 0 0-7.45 2.6 8.11 8.11 0 0 0-3.09 6.55 7.5 7.5 0 0 0 2.32 5.61q2.09 2.1 7.37 3.69a16.51 16.51 0 0 1 4.52 1.82 2.33 2.33 0 0 1 1.19 2.09 2.74 2.74 0 0 1-1.29 2.31 5.64 5.64 0 0 1-3.3.91 7 7 0 0 1-6.6-4.23l-5.4 2.79a10.85 10.85 0 0 0 4.49 5.23 13.74 13.74 0 0 0 7.32 1.9" style="fill:#58595b"></path></g></svg>'),u=l=>(()=>{const a=Z.cloneNode(!0);return g(a,l,!0,!0),a})(),G=d("<p>Carousels don\u2019t automatically normalize slide dimensions. As such, you may need to use additional utilities or custom styles to appropriately size content. While carousels support previous/next controls and indicators, they\u2019re not explicitly required. Add and customize as you see fit.</p>"),n=d('<div class="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"></div>'),T=d("<h2>First slide label</h2>"),m=d("<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>"),U=d("<h2>Second slide label</h2>"),f=d("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>"),z=d("<h2>Third slide label</h2>"),v=d("<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>"),A=d("<p>You can also control the Carousel state, via the activeIndex prop and onSelect handler.</p>"),y=d("<h3>First slide label</h3>"),x=d("<h3>Second slide label</h3>"),w=d("<h3>Third slide label</h3>"),M=d("<p>Add the <code>fade</code> prop to your carousel to animate slides with a fade transition instead of a slide.</p>"),L=d("<p>You can specify individual intervals for each carousel item via the <code>interval</code> prop.</p>"),O=d("<h3>First slide label (1 sec)</h3>"),k=d("<h3>Second slide label (2 secs)</h3>"),q=d("<h3>Third slide label (3 secs)</h3>"),D=d('<div class="row gy-4"><div><h2>Carousels</h2><p class="lead">A slideshow component for cycling through elements\u2014images or slides of text\u2014like a carousel.</p></div></div>'),H=()=>{const[l,a]=S(0),N=(c,i)=>{a(c)};return(()=>{const c=D.cloneNode(!0),i=c.firstChild,b=i.firstChild;return b.nextSibling,s(i,t(C,{name:"CarouselDocs"}),b),s(i,t(r,{get children(){return[t(r.Header,{children:"Example"}),t(r.Body,{get children(){return[G.cloneNode(!0),t(o,{get children(){return[t(o.Item,{get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(p,{})),e})(),t(o.Caption,{get children(){return[T.cloneNode(!0),m.cloneNode(!0)]}})]}}),t(o.Item,{get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(h,{})),e})(),t(o.Caption,{get children(){return[U.cloneNode(!0),f.cloneNode(!0)]}})]}}),t(o.Item,{get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(u,{style:{height:"150px"}})),e})(),t(o.Caption,{get children(){return[z.cloneNode(!0),v.cloneNode(!0)]}})]}})]}})]}})]}}),null),s(i,t(r,{get children(){return[t(r.Header,{children:"Controlled"}),t(r.Body,{get children(){return[A.cloneNode(!0),t(o,{get activeIndex(){return l()},onSelect:N,get children(){return[t(o.Item,{get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(p,{})),e})(),t(o.Caption,{get children(){return[y.cloneNode(!0),m.cloneNode(!0)]}})]}}),t(o.Item,{get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(h,{})),e})(),t(o.Caption,{get children(){return[x.cloneNode(!0),f.cloneNode(!0)]}})]}}),t(o.Item,{get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(u,{})),e})(),t(o.Caption,{get children(){return[w.cloneNode(!0),v.cloneNode(!0)]}})]}})]}})," "]}})]}}),null),s(i,t(r,{get children(){return[t(r.Header,{children:"Crossfade"}),t(r.Body,{get children(){return[M.cloneNode(!0),t(o,{fade:!0,get children(){return[t(o.Item,{get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(p,{})),e})(),t(o.Caption,{get children(){return[y.cloneNode(!0),m.cloneNode(!0)]}})]}}),t(o.Item,{get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(h,{})),e})(),t(o.Caption,{get children(){return[x.cloneNode(!0),f.cloneNode(!0)]}})]}}),t(o.Item,{get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(u,{})),e})(),t(o.Caption,{get children(){return[w.cloneNode(!0),v.cloneNode(!0)]}})]}})]}})," "]}})]}}),null),s(i,t(r,{get children(){return[t(r.Header,{children:"Individual Item Intervals"}),t(r.Body,{get children(){return[L.cloneNode(!0),t(o,{get children(){return[t(o.Item,{interval:1e3,get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(p,{})),e})(),t(o.Caption,{get children(){return[O.cloneNode(!0),m.cloneNode(!0)]}})]}}),t(o.Item,{interval:2e3,get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(h,{})),e})(),t(o.Caption,{get children(){return[k.cloneNode(!0),f.cloneNode(!0)]}})]}}),t(o.Item,{interval:3e3,get children(){return[(()=>{const e=n.cloneNode(!0);return e.style.setProperty("height","400px"),s(e,t(u,{})),e})(),t(o.Caption,{get children(){return[q.cloneNode(!0),v.cloneNode(!0)]}})]}})]}})," "]}})]}}),null),s(c,t(_,{}),null),c})()};export{H as default};
