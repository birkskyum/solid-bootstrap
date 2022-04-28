import{f as Ae,n as Se,a1 as Qe,h as Le,a2 as Mt,a3 as Be,Z as Rt,a4 as jt,a5 as Z,a6 as Ct,a7 as lt}from"./index.7b72cfc3.js";var M="top",S="bottom",B="right",R="left",ke="auto",ve=[M,S,B,R],J="start",le="end",St="clippingParents",pt="viewport",se="popper",Bt="reference",et=ve.reduce(function(e,t){return e.concat([t+"-"+J,t+"-"+le])},[]),dt=[].concat(ve,[ke]).reduce(function(e,t){return e.concat([t,t+"-"+J,t+"-"+le])},[]),Lt="beforeRead",Tt="read",Wt="afterRead",kt="beforeMain",Nt="main",Ft="afterMain",Ht="beforeWrite",Vt="write",It="afterWrite",qt=[Lt,Tt,Wt,kt,Nt,Ft,Ht,Vt,It];function N(e){return e.split("-")[0]}function W(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Q(e){var t=W(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=W(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Ne(e){if(typeof ShadowRoot>"u")return!1;var t=W(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var K=Math.max,Ee=Math.min,ee=Math.round;function te(e,t){t===void 0&&(t=!1);var r=e.getBoundingClientRect(),n=1,o=1;if(F(e)&&t){var i=e.offsetHeight,f=e.offsetWidth;f>0&&(n=ee(r.width)/f||1),i>0&&(o=ee(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function Fe(e){var t=te(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function vt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Ne(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function I(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){return W(e).getComputedStyle(e)}function Ut(e){return["table","td","th"].indexOf(I(e))>=0}function U(e){return((Q(e)?e.ownerDocument:e.document)||window.document).documentElement}function $e(e){return I(e)==="html"?e:e.assignedSlot||e.parentNode||(Ne(e)?e.host:null)||U(e)}function tt(e){return!F(e)||H(e).position==="fixed"?null:e.offsetParent}function Xt(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&F(e)){var n=H(e);if(n.position==="fixed")return null}var o=$e(e);for(Ne(o)&&(o=o.host);F(o)&&["html","body"].indexOf(I(o))<0;){var i=H(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function he(e){for(var t=W(e),r=tt(e);r&&Ut(r)&&H(r).position==="static";)r=tt(r);return r&&(I(r)==="html"||I(r)==="body"&&H(r).position==="static")?t:r||Xt(e)||t}function He(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function ce(e,t,r){return K(e,Ee(t,r))}function Yt(e,t,r){var n=ce(e,t,r);return n>r?r:n}function ht(){return{top:0,right:0,bottom:0,left:0}}function mt(e){return Object.assign({},ht(),e)}function gt(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var zt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,mt(typeof t!="number"?t:gt(t,ve))};function Kt(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,f=r.modifiersData.popperOffsets,c=N(r.placement),a=He(c),s=[R,B].indexOf(c)>=0,u=s?"height":"width";if(!(!i||!f)){var p=zt(o.padding,r),d=Fe(i),l=a==="y"?M:R,h=a==="y"?S:B,v=r.rects.reference[u]+r.rects.reference[a]-f[a]-r.rects.popper[u],m=f[a]-r.rects.reference[a],y=he(i),x=y?a==="y"?y.clientHeight||0:y.clientWidth||0:0,A=v/2-m/2,g=p[l],w=x-d[u]-p[h],b=x/2-d[u]/2+A,O=ce(g,b,w),E=a;r.modifiersData[n]=(t={},t[E]=O,t.centerOffset=O-b,t)}}function _t(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!vt(t.elements.popper,o)||(t.elements.arrow=o))}var Gt={name:"arrow",enabled:!0,phase:"main",fn:Kt,effect:_t,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function re(e){return e.split("-")[1]}var Zt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Jt(e){var t=e.x,r=e.y,n=window,o=n.devicePixelRatio||1;return{x:ee(t*o)/o||0,y:ee(r*o)/o||0}}function rt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,f=e.offsets,c=e.position,a=e.gpuAcceleration,s=e.adaptive,u=e.roundOffsets,p=e.isFixed,d=f.x,l=d===void 0?0:d,h=f.y,v=h===void 0?0:h,m=typeof u=="function"?u({x:l,y:v}):{x:l,y:v};l=m.x,v=m.y;var y=f.hasOwnProperty("x"),x=f.hasOwnProperty("y"),A=R,g=M,w=window;if(s){var b=he(r),O="clientHeight",E="clientWidth";if(b===W(r)&&(b=U(r),H(b).position!=="static"&&c==="absolute"&&(O="scrollHeight",E="scrollWidth")),b=b,o===M||(o===R||o===B)&&i===le){g=S;var $=p&&b===w&&w.visualViewport?w.visualViewport.height:b[O];v-=$-n.height,v*=a?1:-1}if(o===R||(o===M||o===S)&&i===le){A=B;var P=p&&b===w&&w.visualViewport?w.visualViewport.width:b[E];l-=P-n.width,l*=a?1:-1}}var D=Object.assign({position:c},s&&Zt),L=u===!0?Jt({x:l,y:v}):{x:l,y:v};if(l=L.x,v=L.y,a){var j;return Object.assign({},D,(j={},j[g]=x?"0":"",j[A]=y?"0":"",j.transform=(w.devicePixelRatio||1)<=1?"translate("+l+"px, "+v+"px)":"translate3d("+l+"px, "+v+"px, 0)",j))}return Object.assign({},D,(t={},t[g]=x?v+"px":"",t[A]=y?l+"px":"",t.transform="",t))}function Qt(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,f=i===void 0?!0:i,c=r.roundOffsets,a=c===void 0?!0:c,s={placement:N(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,rt(Object.assign({},s,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:f,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,rt(Object.assign({},s,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var er={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Qt,data:{}},Oe={passive:!0};function tr(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,f=n.resize,c=f===void 0?!0:f,a=W(t.elements.popper),s=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&s.forEach(function(u){u.addEventListener("scroll",r.update,Oe)}),c&&a.addEventListener("resize",r.update,Oe),function(){i&&s.forEach(function(u){u.removeEventListener("scroll",r.update,Oe)}),c&&a.removeEventListener("resize",r.update,Oe)}}var rr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:tr,data:{}},nr={left:"right",right:"left",bottom:"top",top:"bottom"};function xe(e){return e.replace(/left|right|bottom|top/g,function(t){return nr[t]})}var or={start:"end",end:"start"};function nt(e){return e.replace(/start|end/g,function(t){return or[t]})}function Ve(e){var t=W(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function Ie(e){return te(U(e)).left+Ve(e).scrollLeft}function ir(e){var t=W(e),r=U(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,f=0,c=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(f=n.offsetLeft,c=n.offsetTop)),{width:o,height:i,x:f+Ie(e),y:c}}function ar(e){var t,r=U(e),n=Ve(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=K(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),f=K(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-n.scrollLeft+Ie(e),a=-n.scrollTop;return H(o||r).direction==="rtl"&&(c+=K(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:f,x:c,y:a}}function qe(e){var t=H(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function yt(e){return["html","body","#document"].indexOf(I(e))>=0?e.ownerDocument.body:F(e)&&qe(e)?e:yt($e(e))}function ue(e,t){var r;t===void 0&&(t=[]);var n=yt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=W(n),f=o?[i].concat(i.visualViewport||[],qe(n)?n:[]):n,c=t.concat(f);return o?c:c.concat(ue($e(f)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function sr(e){var t=te(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function ot(e,t){return t===pt?Te(ir(e)):Q(t)?sr(t):Te(ar(U(e)))}function fr(e){var t=ue($e(e)),r=["absolute","fixed"].indexOf(H(e).position)>=0,n=r&&F(e)?he(e):e;return Q(n)?t.filter(function(o){return Q(o)&&vt(o,n)&&I(o)!=="body"}):[]}function cr(e,t,r){var n=t==="clippingParents"?fr(e):[].concat(t),o=[].concat(n,[r]),i=o[0],f=o.reduce(function(c,a){var s=ot(e,a);return c.top=K(s.top,c.top),c.right=Ee(s.right,c.right),c.bottom=Ee(s.bottom,c.bottom),c.left=K(s.left,c.left),c},ot(e,i));return f.width=f.right-f.left,f.height=f.bottom-f.top,f.x=f.left,f.y=f.top,f}function bt(e){var t=e.reference,r=e.element,n=e.placement,o=n?N(n):null,i=n?re(n):null,f=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,a;switch(o){case M:a={x:f,y:t.y-r.height};break;case S:a={x:f,y:t.y+t.height};break;case B:a={x:t.x+t.width,y:c};break;case R:a={x:t.x-r.width,y:c};break;default:a={x:t.x,y:t.y}}var s=o?He(o):null;if(s!=null){var u=s==="y"?"height":"width";switch(i){case J:a[s]=a[s]-(t[u]/2-r[u]/2);break;case le:a[s]=a[s]+(t[u]/2-r[u]/2);break}}return a}function pe(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.boundary,f=i===void 0?St:i,c=r.rootBoundary,a=c===void 0?pt:c,s=r.elementContext,u=s===void 0?se:s,p=r.altBoundary,d=p===void 0?!1:p,l=r.padding,h=l===void 0?0:l,v=mt(typeof h!="number"?h:gt(h,ve)),m=u===se?Bt:se,y=e.rects.popper,x=e.elements[d?m:u],A=cr(Q(x)?x:x.contextElement||U(e.elements.popper),f,a),g=te(e.elements.reference),w=bt({reference:g,element:y,strategy:"absolute",placement:o}),b=Te(Object.assign({},y,w)),O=u===se?b:g,E={top:A.top-O.top+v.top,bottom:O.bottom-A.bottom+v.bottom,left:A.left-O.left+v.left,right:O.right-A.right+v.right},$=e.modifiersData.offset;if(u===se&&$){var P=$[o];Object.keys(E).forEach(function(D){var L=[B,S].indexOf(D)>=0?1:-1,j=[M,S].indexOf(D)>=0?"y":"x";E[D]+=P[j]*L})}return E}function ur(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,f=r.padding,c=r.flipVariations,a=r.allowedAutoPlacements,s=a===void 0?dt:a,u=re(n),p=u?c?et:et.filter(function(h){return re(h)===u}):ve,d=p.filter(function(h){return s.indexOf(h)>=0});d.length===0&&(d=p);var l=d.reduce(function(h,v){return h[v]=pe(e,{placement:v,boundary:o,rootBoundary:i,padding:f})[N(v)],h},{});return Object.keys(l).sort(function(h,v){return l[h]-l[v]})}function lr(e){if(N(e)===ke)return[];var t=xe(e);return[nt(e),t,nt(t)]}function pr(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!0:f,a=r.fallbackPlacements,s=r.padding,u=r.boundary,p=r.rootBoundary,d=r.altBoundary,l=r.flipVariations,h=l===void 0?!0:l,v=r.allowedAutoPlacements,m=t.options.placement,y=N(m),x=y===m,A=a||(x||!h?[xe(m)]:lr(m)),g=[m].concat(A).reduce(function(_,V){return _.concat(N(V)===ke?ur(t,{placement:V,boundary:u,rootBoundary:p,padding:s,flipVariations:h,allowedAutoPlacements:v}):V)},[]),w=t.rects.reference,b=t.rects.popper,O=new Map,E=!0,$=g[0],P=0;P<g.length;P++){var D=g[P],L=N(D),j=re(D)===J,ne=[M,S].indexOf(L)>=0,oe=ne?"width":"height",C=pe(t,{placement:D,boundary:u,rootBoundary:p,altBoundary:d,padding:s}),T=ne?j?B:R:j?S:M;w[oe]>b[oe]&&(T=xe(T));var me=xe(T),X=[];if(i&&X.push(C[L]<=0),c&&X.push(C[T]<=0,C[me]<=0),X.every(function(_){return _})){$=D,E=!1;break}O.set(D,X)}if(E)for(var ge=h?3:1,Me=function(V){var ae=g.find(function(be){var Y=O.get(be);if(Y)return Y.slice(0,V).every(function(Re){return Re})});if(ae)return $=ae,"break"},ie=ge;ie>0;ie--){var ye=Me(ie);if(ye==="break")break}t.placement!==$&&(t.modifiersData[n]._skip=!0,t.placement=$,t.reset=!0)}}var dr={name:"flip",enabled:!0,phase:"main",fn:pr,requiresIfExists:["offset"],data:{_skip:!1}};function it(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function at(e){return[M,B,S,R].some(function(t){return e[t]>=0})}function vr(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,f=pe(t,{elementContext:"reference"}),c=pe(t,{altBoundary:!0}),a=it(f,n),s=it(c,o,i),u=at(a),p=at(s);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:s,isReferenceHidden:u,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":p})}var hr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:vr};function mr(e,t,r){var n=N(e),o=[R,M].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,f=i[0],c=i[1];return f=f||0,c=(c||0)*o,[R,B].indexOf(n)>=0?{x:c,y:f}:{x:f,y:c}}function gr(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,f=dt.reduce(function(u,p){return u[p]=mr(p,t.rects,i),u},{}),c=f[t.placement],a=c.x,s=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=s),t.modifiersData[n]=f}var yr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:gr};function br(e){var t=e.state,r=e.name;t.modifiersData[r]=bt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var wr={name:"popperOffsets",enabled:!0,phase:"read",fn:br,data:{}};function Or(e){return e==="x"?"y":"x"}function xr(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=o===void 0?!0:o,f=r.altAxis,c=f===void 0?!1:f,a=r.boundary,s=r.rootBoundary,u=r.altBoundary,p=r.padding,d=r.tether,l=d===void 0?!0:d,h=r.tetherOffset,v=h===void 0?0:h,m=pe(t,{boundary:a,rootBoundary:s,padding:p,altBoundary:u}),y=N(t.placement),x=re(t.placement),A=!x,g=He(y),w=Or(g),b=t.modifiersData.popperOffsets,O=t.rects.reference,E=t.rects.popper,$=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,P=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(!!b){if(i){var j,ne=g==="y"?M:R,oe=g==="y"?S:B,C=g==="y"?"height":"width",T=b[g],me=T+m[ne],X=T-m[oe],ge=l?-E[C]/2:0,Me=x===J?O[C]:E[C],ie=x===J?-E[C]:-O[C],ye=t.elements.arrow,_=l&&ye?Fe(ye):{width:0,height:0},V=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ht(),ae=V[ne],be=V[oe],Y=ce(0,O[C],_[C]),Re=A?O[C]/2-ge-Y-ae-P.mainAxis:Me-Y-ae-P.mainAxis,xt=A?-O[C]/2+ge+Y+be+P.mainAxis:ie+Y+be+P.mainAxis,je=t.elements.arrow&&he(t.elements.arrow),At=je?g==="y"?je.clientTop||0:je.clientLeft||0:0,Ue=(j=D?.[g])!=null?j:0,Et=T+Re-Ue-At,Pt=T+xt-Ue,Xe=ce(l?Ee(me,Et):me,T,l?K(X,Pt):X);b[g]=Xe,L[g]=Xe-T}if(c){var Ye,Dt=g==="x"?M:R,$t=g==="x"?S:B,z=b[w],we=w==="y"?"height":"width",ze=z+m[Dt],Ke=z-m[$t],Ce=[M,R].indexOf(y)!==-1,_e=(Ye=D?.[w])!=null?Ye:0,Ge=Ce?ze:z-O[we]-E[we]-_e+P.altAxis,Ze=Ce?z+O[we]+E[we]-_e-P.altAxis:Ke,Je=l&&Ce?Yt(Ge,z,Ze):ce(l?Ge:ze,z,l?Ze:Ke);b[w]=Je,L[w]=Je-z}t.modifiersData[n]=L}}var Ar={name:"preventOverflow",enabled:!0,phase:"main",fn:xr,requiresIfExists:["offset"]};function Er(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Pr(e){return e===W(e)||!F(e)?Ve(e):Er(e)}function Dr(e){var t=e.getBoundingClientRect(),r=ee(t.width)/e.offsetWidth||1,n=ee(t.height)/e.offsetHeight||1;return r!==1||n!==1}function $r(e,t,r){r===void 0&&(r=!1);var n=F(t),o=F(t)&&Dr(t),i=U(t),f=te(e,o),c={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(n||!n&&!r)&&((I(t)!=="body"||qe(i))&&(c=Pr(t)),F(t)?(a=te(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=Ie(i))),{x:f.left+c.scrollLeft-a.x,y:f.top+c.scrollTop-a.y,width:f.width,height:f.height}}function Mr(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var f=[].concat(i.requires||[],i.requiresIfExists||[]);f.forEach(function(c){if(!r.has(c)){var a=t.get(c);a&&o(a)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function Rr(e){var t=Mr(e);return qt.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function jr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Cr(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var st={placement:"bottom",modifiers:[],strategy:"absolute"};function ft(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Sr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?st:o;return function(c,a,s){s===void 0&&(s=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},st,i),modifiersData:{},elements:{reference:c,popper:a},attributes:{},styles:{}},p=[],d=!1,l={state:u,setOptions:function(y){var x=typeof y=="function"?y(u.options):y;v(),u.options=Object.assign({},i,u.options,x),u.scrollParents={reference:Q(c)?ue(c):c.contextElement?ue(c.contextElement):[],popper:ue(a)};var A=Rr(Cr([].concat(n,u.options.modifiers)));return u.orderedModifiers=A.filter(function(g){return g.enabled}),h(),l.update()},forceUpdate:function(){if(!d){var y=u.elements,x=y.reference,A=y.popper;if(!!ft(x,A)){u.rects={reference:$r(x,he(A),u.options.strategy==="fixed"),popper:Fe(A)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(P){return u.modifiersData[P.name]=Object.assign({},P.data)});for(var g=0;g<u.orderedModifiers.length;g++){if(u.reset===!0){u.reset=!1,g=-1;continue}var w=u.orderedModifiers[g],b=w.fn,O=w.options,E=O===void 0?{}:O,$=w.name;typeof b=="function"&&(u=b({state:u,options:E,name:$,instance:l})||u)}}}},update:jr(function(){return new Promise(function(m){l.forceUpdate(),m(u)})}),destroy:function(){v(),d=!0}};if(!ft(c,a))return l;l.setOptions(s).then(function(m){!d&&s.onFirstUpdate&&s.onFirstUpdate(m)});function h(){u.orderedModifiers.forEach(function(m){var y=m.name,x=m.options,A=x===void 0?{}:x,g=m.effect;if(typeof g=="function"){var w=g({state:u,name:y,instance:l,options:A}),b=function(){};p.push(w||b)}})}function v(){p.forEach(function(m){return m()}),p=[]}return l}}const Br=Sr({defaultModifiers:[hr,wr,er,rr,yr,dr,Ar,Gt]}),Lr={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Tr={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const n=(t.getAttribute("aria-describedby")||"").split(",").filter(o=>o.trim()!==r.id);n.length?t.setAttribute("aria-describedby",n.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{const{popper:t,reference:r}=e.elements,n=t.getAttribute("role")?.toLowerCase();if(t.id&&n==="tooltip"&&"setAttribute"in r){const o=r.getAttribute("aria-describedby");if(o&&o.split(",").indexOf(t.id)!==-1)return;r.setAttribute("aria-describedby",o?`${o},${t.id}`:t.id)}}},Wr=[];function zr(e,t,r){const[n,o]=Ae(),i=Se(()=>r.enabled??!0),f=Se(Qe(n,p=>()=>{p?.update()})),c=Se(Qe(n,p=>()=>{p?.forceUpdate()})),[a,s]=Ae({placement:r.placement??"bottom",get update(){return f()},get forceUpdate(){return c()},attributes:{},styles:{popper:{},arrow:{}}}),u={name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:p})=>{const d={},l={};Object.keys(p.elements).forEach(h=>{d[h]=p.styles[h],l[h]=p.attributes[h]}),s(h=>({...h,state:p,styles:d,attributes:l,placement:p.placement}))}};return Le(()=>{const p=n();!p||!i()||(p.setOptions({onFirstUpdate:r.onFirstUpdate,placement:r.placement??"bottom",modifiers:[...r.modifiers??Wr,Tr,u,Lr],strategy:r.strategy??"absolute"}),queueMicrotask(()=>{f()()}))}),Le(()=>{const p=e(),d=t();if(p&&d&&i()){let l;l=Br(p,d,{}),o(l)}else n()&&(n().destroy(),o(void 0),s(l=>({...l,attributes:{},styles:{popper:{}}})))}),a}const ct=()=>{};function kr(e){return e.button===0}function Nr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const ut=e=>e;function Kr(e,t=ct,{disabled:r,clickTrigger:n="click"}={}){const[o,i]=Ae(!1),f=a=>{const s=ut(e());i(!s||Nr(a)||!kr(a)||!!jt(s,a.target))},c=a=>{o()||t(a)};Le(()=>{if(r||e()==null)return;const a=Mt(ut(e()));let s=(a.defaultView||window).event;const u=Be(a,n,f,!0),p=Be(a,n,l=>{if(l===s){s=void 0;return}c(l)});let d=[];"ontouchstart"in a.documentElement&&(d=[].slice.call(a.body.children).map(l=>Be(l,"mousemove",ct))),Rt(()=>{u(),p(),d.forEach(l=>l())})})}function Fr(e){const t={};return Array.isArray(e)?(e?.forEach(r=>{t[r.name]=r}),t):e||t}function Hr(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function _r({enabled:e,enableEvents:t,placement:r,flip:n,offset:o,fixed:i,containerPadding:f,arrowElement:c,popperConfig:a={}}){const s=Fr(a.modifiers);return{...a,placement:r,enabled:e,strategy:i?"fixed":a.strategy,modifiers:Hr({...s,eventListeners:{enabled:t},preventOverflow:{...s.preventOverflow,options:f?{padding:f,...s.preventOverflow?.options}:s.preventOverflow?.options},offset:{options:{offset:o,...s.offset?.options}},arrow:{...s.arrow,enabled:!!c,options:{...s.arrow?.options,element:c}},flip:{enabled:!!n,...s.flip}})}}const wt=Symbol("store-raw"),Pe=Symbol("store-node"),Vr=Symbol("store-name");function Ot(e,t){let r=e[Z];if(!r){Object.defineProperty(e,Z,{value:r=new Proxy(e,Ur)});const n=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let i=0,f=n.length;i<f;i++){const c=n[i];if(o[c].get){const a=o[c].get.bind(r);Object.defineProperty(e,c,{get:a})}}}return r}function q(e){return e!=null&&typeof e=="object"&&(e[Z]||!e.__proto__||e.__proto__===Object.prototype||Array.isArray(e))}function de(e,t=new Set){let r,n,o,i;if(r=e!=null&&e[wt])return r;if(!q(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let f=0,c=e.length;f<c;f++)o=e[f],(n=de(o,t))!==o&&(e[f]=n)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const f=Object.keys(e),c=Object.getOwnPropertyDescriptors(e);for(let a=0,s=f.length;a<s;a++)i=f[a],!c[i].get&&(o=e[i],(n=de(o,t))!==o&&(e[i]=n))}return e}function De(e){let t=e[Pe];return t||Object.defineProperty(e,Pe,{value:t={}}),t}function Ir(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);return!r||r.get||!r.configurable||t===Z||t===Pe||t===Vr||(delete r.value,delete r.writable,r.get=()=>e[Z][t]),r}function qr(e){if(lt()){const t=De(e);(t._||(t._=We()))()}return Reflect.ownKeys(e)}function We(){const[e,t]=Ae(void 0,{equals:!1,internal:!0});return e.$=t,e}const Ur={get(e,t,r){if(t===wt)return e;if(t===Z)return r;const n=e[t];if(t===Pe||t==="__proto__")return n;const o=q(n);if(lt()&&(typeof n!="function"||e.hasOwnProperty(t))){let i,f;o&&(i=De(n))&&(f=i._||(i._=We()),f()),i=De(e),f=i[t]||(i[t]=We()),f()}return o?Ot(n):n},set(){return!0},deleteProperty(){return!0},ownKeys:qr,getOwnPropertyDescriptor:Ir};function k(e,t,r){if(e[t]===r)return;const n=Array.isArray(e),o=e.length,i=r===void 0,f=n||i===t in e;i?delete e[t]:e[t]=r;let c=De(e),a;(a=c[t])&&a.$(),n&&e.length!==o&&(a=c.length)&&a.$(),f&&(a=c._)&&a.$()}function Xr(e,t){const r=Object.keys(t);for(let n=0;n<r.length;n+=1){const o=r[n];k(e,o,t[o])}}function fe(e,t,r=[]){let n,o=e;if(t.length>1){n=t.shift();const f=typeof n,c=Array.isArray(e);if(Array.isArray(n)){for(let a=0;a<n.length;a++)fe(e,[n[a]].concat(t),r);return}else if(c&&f==="function"){for(let a=0;a<e.length;a++)n(e[a],a)&&fe(e,[a].concat(t),r);return}else if(c&&f==="object"){const{from:a=0,to:s=e.length-1,by:u=1}=n;for(let p=a;p<=s;p+=u)fe(e,[p].concat(t),r);return}else if(t.length>1){fe(e[n],t,[n].concat(r));return}o=e[n],r=[n].concat(r)}let i=t[0];typeof i=="function"&&(i=i(o,r),i===o)||n===void 0&&i==null||(i=de(i),n===void 0||q(o)&&q(i)&&!Array.isArray(i)?Xr(o,i):k(e,n,i))}function Gr(e,t){const r=de(e||{}),n=Ot(r);function o(...i){Ct(()=>fe(r,i))}return[n,o]}function G(e,t,r,n,o){const i=t[r];if(e===i)return;if(!q(e)||!q(i)||o&&e[o]!==i[o]){e!==i&&k(t,r,e);return}if(Array.isArray(e)){if(e.length&&i.length&&(!n||o&&e[0][o]!=null)){let a,s,u,p,d,l,h,v;for(u=0,p=Math.min(i.length,e.length);u<p&&(i[u]===e[u]||o&&i[u][o]===e[u][o]);u++)G(e[u],i,u,n,o);const m=new Array(e.length),y=new Map;for(p=i.length-1,d=e.length-1;p>=u&&d>=u&&(i[p]===e[d]||o&&i[p][o]===e[d][o]);p--,d--)m[d]=i[p];if(u>d||u>p){for(s=u;s<=d;s++)k(i,s,e[s]);for(;s<e.length;s++)k(i,s,m[s]),G(e[s],i,s,n,o);i.length>e.length&&k(i,"length",e.length);return}for(h=new Array(d+1),s=d;s>=u;s--)l=e[s],v=o?l[o]:l,a=y.get(v),h[s]=a===void 0?-1:a,y.set(v,s);for(a=u;a<=p;a++)l=i[a],v=o?l[o]:l,s=y.get(v),s!==void 0&&s!==-1&&(m[s]=i[a],s=h[s],y.set(v,s));for(s=u;s<e.length;s++)s in m?(k(i,s,m[s]),G(e[s],i,s,n,o)):k(i,s,e[s])}else for(let a=0,s=e.length;a<s;a++)G(e[a],i,a,n,o);i.length>e.length&&k(i,"length",e.length);return}const f=Object.keys(e);for(let a=0,s=f.length;a<s;a++)G(e[f[a]],i,f[a],n,o);const c=Object.keys(i);for(let a=0,s=c.length;a<s;a++)e[c[a]]===void 0&&k(i,c[a],void 0)}function Zr(e,t={}){const{merge:r,key:n="id"}=t,o=de(e);return i=>!q(i)||!q(o)?o:(G(o,{state:i},"state",r,n),i)}export{Kr as a,Gr as c,_r as m,Zr as r,zr as u};