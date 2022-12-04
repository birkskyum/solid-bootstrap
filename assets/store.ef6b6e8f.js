import{f as Pe,k as Se,a1 as tt,h as Be,a2 as Bt,a3 as Ce,Z as Tt,a4 as Lt,a5 as G,a6 as rt,a7 as vt,a8 as Wt}from"./index.0c7a3082.js";var R="top",B="bottom",T="right",j="left",Ne="auto",he=[R,B,T,j],Q="start",pe="end",kt="clippingParents",ht="viewport",fe="popper",Nt="reference",nt=he.reduce(function(e,t){return e.concat([t+"-"+Q,t+"-"+pe])},[]),mt=[].concat(he,[Ne]).reduce(function(e,t){return e.concat([t,t+"-"+Q,t+"-"+pe])},[]),Ft="beforeRead",Ht="read",Vt="afterRead",It="beforeMain",qt="main",Ut="afterMain",Xt="beforeWrite",Yt="write",Kt="afterWrite",zt=[Ft,Ht,Vt,It,qt,Ut,Xt,Yt,Kt];function N(e){return e.split("-")[0]}function k(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function _(e){var t=k(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=k(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function Fe(e){if(typeof ShadowRoot>"u")return!1;var t=k(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}var z=Math.max,Ee=Math.min,ee=Math.round;function te(e,t){t===void 0&&(t=!1);var r=e.getBoundingClientRect(),o=1,n=1;if(F(e)&&t){var i=e.offsetHeight,s=e.offsetWidth;s>0&&(o=ee(r.width)/s||1),i>0&&(n=ee(r.height)/i||1)}return{width:r.width/o,height:r.height/n,top:r.top/n,right:r.right/o,bottom:r.bottom/n,left:r.left/o,x:r.left/o,y:r.top/n}}function He(e){var t=te(e),r=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:o}}function gt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&Fe(r)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function I(e){return e?(e.nodeName||"").toLowerCase():null}function H(e){return k(e).getComputedStyle(e)}function Gt(e){return["table","td","th"].indexOf(I(e))>=0}function U(e){return((_(e)?e.ownerDocument:e.document)||window.document).documentElement}function De(e){return I(e)==="html"?e:e.assignedSlot||e.parentNode||(Fe(e)?e.host:null)||U(e)}function ot(e){return!F(e)||H(e).position==="fixed"?null:e.offsetParent}function Zt(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&F(e)){var o=H(e);if(o.position==="fixed")return null}var n=De(e);for(Fe(n)&&(n=n.host);F(n)&&["html","body"].indexOf(I(n))<0;){var i=H(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function me(e){for(var t=k(e),r=ot(e);r&&Gt(r)&&H(r).position==="static";)r=ot(r);return r&&(I(r)==="html"||I(r)==="body"&&H(r).position==="static")?t:r||Zt(e)||t}function Ve(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function le(e,t,r){return z(e,Ee(t,r))}function Jt(e,t,r){var o=le(e,t,r);return o>r?r:o}function yt(){return{top:0,right:0,bottom:0,left:0}}function bt(e){return Object.assign({},yt(),e)}function wt(e,t){return t.reduce(function(r,o){return r[o]=e,r},{})}var Qt=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,bt(typeof t!="number"?t:wt(t,he))};function _t(e){var t,r=e.state,o=e.name,n=e.options,i=r.elements.arrow,s=r.modifiersData.popperOffsets,c=N(r.placement),a=Ve(c),f=[j,T].indexOf(c)>=0,l=f?"height":"width";if(!(!i||!s)){var p=Qt(n.padding,r),d=He(i),u=a==="y"?R:j,h=a==="y"?B:T,v=r.rects.reference[l]+r.rects.reference[a]-s[a]-r.rects.popper[l],m=s[a]-r.rects.reference[a],y=me(i),x=y?a==="y"?y.clientHeight||0:y.clientWidth||0:0,A=v/2-m/2,g=p[u],w=x-d[l]-p[h],b=x/2-d[l]/2+A,O=le(g,b,w),P=a;r.modifiersData[o]=(t={},t[P]=O,t.centerOffset=O-b,t)}}function er(e){var t=e.state,r=e.options,o=r.element,n=o===void 0?"[data-popper-arrow]":o;n!=null&&(typeof n=="string"&&(n=t.elements.popper.querySelector(n),!n)||!gt(t.elements.popper,n)||(t.elements.arrow=n))}const tr={name:"arrow",enabled:!0,phase:"main",fn:_t,effect:er,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function re(e){return e.split("-")[1]}var rr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function nr(e){var t=e.x,r=e.y,o=window,n=o.devicePixelRatio||1;return{x:ee(t*n)/n||0,y:ee(r*n)/n||0}}function it(e){var t,r=e.popper,o=e.popperRect,n=e.placement,i=e.variation,s=e.offsets,c=e.position,a=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,p=e.isFixed,d=s.x,u=d===void 0?0:d,h=s.y,v=h===void 0?0:h,m=typeof l=="function"?l({x:u,y:v}):{x:u,y:v};u=m.x,v=m.y;var y=s.hasOwnProperty("x"),x=s.hasOwnProperty("y"),A=j,g=R,w=window;if(f){var b=me(r),O="clientHeight",P="clientWidth";if(b===k(r)&&(b=U(r),H(b).position!=="static"&&c==="absolute"&&(O="scrollHeight",P="scrollWidth")),b=b,n===R||(n===j||n===T)&&i===pe){g=B;var $=p&&b===w&&w.visualViewport?w.visualViewport.height:b[O];v-=$-o.height,v*=a?1:-1}if(n===j||(n===R||n===B)&&i===pe){A=T;var E=p&&b===w&&w.visualViewport?w.visualViewport.width:b[P];u-=E-o.width,u*=a?1:-1}}var D=Object.assign({position:c},f&&rr),L=l===!0?nr({x:u,y:v}):{x:u,y:v};if(u=L.x,v=L.y,a){var M;return Object.assign({},D,(M={},M[g]=x?"0":"",M[A]=y?"0":"",M.transform=(w.devicePixelRatio||1)<=1?"translate("+u+"px, "+v+"px)":"translate3d("+u+"px, "+v+"px, 0)",M))}return Object.assign({},D,(t={},t[g]=x?v+"px":"",t[A]=y?u+"px":"",t.transform="",t))}function or(e){var t=e.state,r=e.options,o=r.gpuAcceleration,n=o===void 0?!0:o,i=r.adaptive,s=i===void 0?!0:i,c=r.roundOffsets,a=c===void 0?!0:c,f={placement:N(t.placement),variation:re(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:n,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,it(Object.assign({},f,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,it(Object.assign({},f,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const ir={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:or,data:{}};var xe={passive:!0};function ar(e){var t=e.state,r=e.instance,o=e.options,n=o.scroll,i=n===void 0?!0:n,s=o.resize,c=s===void 0?!0:s,a=k(t.elements.popper),f=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&f.forEach(function(l){l.addEventListener("scroll",r.update,xe)}),c&&a.addEventListener("resize",r.update,xe),function(){i&&f.forEach(function(l){l.removeEventListener("scroll",r.update,xe)}),c&&a.removeEventListener("resize",r.update,xe)}}const sr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:ar,data:{}};var fr={left:"right",right:"left",bottom:"top",top:"bottom"};function Ae(e){return e.replace(/left|right|bottom|top/g,function(t){return fr[t]})}var cr={start:"end",end:"start"};function at(e){return e.replace(/start|end/g,function(t){return cr[t]})}function Ie(e){var t=k(e),r=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:r,scrollTop:o}}function qe(e){return te(U(e)).left+Ie(e).scrollLeft}function lr(e){var t=k(e),r=U(e),o=t.visualViewport,n=r.clientWidth,i=r.clientHeight,s=0,c=0;return o&&(n=o.width,i=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,c=o.offsetTop)),{width:n,height:i,x:s+qe(e),y:c}}function ur(e){var t,r=U(e),o=Ie(e),n=(t=e.ownerDocument)==null?void 0:t.body,i=z(r.scrollWidth,r.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=z(r.scrollHeight,r.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),c=-o.scrollLeft+qe(e),a=-o.scrollTop;return H(n||r).direction==="rtl"&&(c+=z(r.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:c,y:a}}function Ue(e){var t=H(e),r=t.overflow,o=t.overflowX,n=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+n+o)}function Ot(e){return["html","body","#document"].indexOf(I(e))>=0?e.ownerDocument.body:F(e)&&Ue(e)?e:Ot(De(e))}function ue(e,t){var r;t===void 0&&(t=[]);var o=Ot(e),n=o===((r=e.ownerDocument)==null?void 0:r.body),i=k(o),s=n?[i].concat(i.visualViewport||[],Ue(o)?o:[]):o,c=t.concat(s);return n?c:c.concat(ue(De(s)))}function Te(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function pr(e){var t=te(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function st(e,t){return t===ht?Te(lr(e)):_(t)?pr(t):Te(ur(U(e)))}function dr(e){var t=ue(De(e)),r=["absolute","fixed"].indexOf(H(e).position)>=0,o=r&&F(e)?me(e):e;return _(o)?t.filter(function(n){return _(n)&&gt(n,o)&&I(n)!=="body"}):[]}function vr(e,t,r){var o=t==="clippingParents"?dr(e):[].concat(t),n=[].concat(o,[r]),i=n[0],s=n.reduce(function(c,a){var f=st(e,a);return c.top=z(f.top,c.top),c.right=Ee(f.right,c.right),c.bottom=Ee(f.bottom,c.bottom),c.left=z(f.left,c.left),c},st(e,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function xt(e){var t=e.reference,r=e.element,o=e.placement,n=o?N(o):null,i=o?re(o):null,s=t.x+t.width/2-r.width/2,c=t.y+t.height/2-r.height/2,a;switch(n){case R:a={x:s,y:t.y-r.height};break;case B:a={x:s,y:t.y+t.height};break;case T:a={x:t.x+t.width,y:c};break;case j:a={x:t.x-r.width,y:c};break;default:a={x:t.x,y:t.y}}var f=n?Ve(n):null;if(f!=null){var l=f==="y"?"height":"width";switch(i){case Q:a[f]=a[f]-(t[l]/2-r[l]/2);break;case pe:a[f]=a[f]+(t[l]/2-r[l]/2);break}}return a}function de(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=o===void 0?e.placement:o,i=r.boundary,s=i===void 0?kt:i,c=r.rootBoundary,a=c===void 0?ht:c,f=r.elementContext,l=f===void 0?fe:f,p=r.altBoundary,d=p===void 0?!1:p,u=r.padding,h=u===void 0?0:u,v=bt(typeof h!="number"?h:wt(h,he)),m=l===fe?Nt:fe,y=e.rects.popper,x=e.elements[d?m:l],A=vr(_(x)?x:x.contextElement||U(e.elements.popper),s,a),g=te(e.elements.reference),w=xt({reference:g,element:y,strategy:"absolute",placement:n}),b=Te(Object.assign({},y,w)),O=l===fe?b:g,P={top:A.top-O.top+v.top,bottom:O.bottom-A.bottom+v.bottom,left:A.left-O.left+v.left,right:O.right-A.right+v.right},$=e.modifiersData.offset;if(l===fe&&$){var E=$[n];Object.keys(P).forEach(function(D){var L=[T,B].indexOf(D)>=0?1:-1,M=[R,B].indexOf(D)>=0?"y":"x";P[D]+=E[M]*L})}return P}function hr(e,t){t===void 0&&(t={});var r=t,o=r.placement,n=r.boundary,i=r.rootBoundary,s=r.padding,c=r.flipVariations,a=r.allowedAutoPlacements,f=a===void 0?mt:a,l=re(o),p=l?c?nt:nt.filter(function(h){return re(h)===l}):he,d=p.filter(function(h){return f.indexOf(h)>=0});d.length===0&&(d=p);var u=d.reduce(function(h,v){return h[v]=de(e,{placement:v,boundary:n,rootBoundary:i,padding:s})[N(v)],h},{});return Object.keys(u).sort(function(h,v){return u[h]-u[v]})}function mr(e){if(N(e)===Ne)return[];var t=Ae(e);return[at(e),t,at(t)]}function gr(e){var t=e.state,r=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var n=r.mainAxis,i=n===void 0?!0:n,s=r.altAxis,c=s===void 0?!0:s,a=r.fallbackPlacements,f=r.padding,l=r.boundary,p=r.rootBoundary,d=r.altBoundary,u=r.flipVariations,h=u===void 0?!0:u,v=r.allowedAutoPlacements,m=t.options.placement,y=N(m),x=y===m,A=a||(x||!h?[Ae(m)]:mr(m)),g=[m].concat(A).reduce(function(Z,V){return Z.concat(N(V)===Ne?hr(t,{placement:V,boundary:l,rootBoundary:p,padding:f,flipVariations:h,allowedAutoPlacements:v}):V)},[]),w=t.rects.reference,b=t.rects.popper,O=new Map,P=!0,$=g[0],E=0;E<g.length;E++){var D=g[E],L=N(D),M=re(D)===Q,oe=[R,B].indexOf(L)>=0,ie=oe?"width":"height",S=de(t,{placement:D,boundary:l,rootBoundary:p,altBoundary:d,padding:f}),W=oe?M?T:j:M?B:R;w[ie]>b[ie]&&(W=Ae(W));var ge=Ae(W),X=[];if(i&&X.push(S[L]<=0),c&&X.push(S[W]<=0,S[ge]<=0),X.every(function(Z){return Z})){$=D,P=!1;break}O.set(D,X)}if(P)for(var ye=h?3:1,$e=function(V){var se=g.find(function(we){var Y=O.get(we);if(Y)return Y.slice(0,V).every(function(Re){return Re})});if(se)return $=se,"break"},ae=ye;ae>0;ae--){var be=$e(ae);if(be==="break")break}t.placement!==$&&(t.modifiersData[o]._skip=!0,t.placement=$,t.reset=!0)}}const yr={name:"flip",enabled:!0,phase:"main",fn:gr,requiresIfExists:["offset"],data:{_skip:!1}};function ft(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function ct(e){return[R,T,B,j].some(function(t){return e[t]>=0})}function br(e){var t=e.state,r=e.name,o=t.rects.reference,n=t.rects.popper,i=t.modifiersData.preventOverflow,s=de(t,{elementContext:"reference"}),c=de(t,{altBoundary:!0}),a=ft(s,o),f=ft(c,n,i),l=ct(a),p=ct(f);t.modifiersData[r]={referenceClippingOffsets:a,popperEscapeOffsets:f,isReferenceHidden:l,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":p})}const wr={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:br};function Or(e,t,r){var o=N(e),n=[j,R].indexOf(o)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,s=i[0],c=i[1];return s=s||0,c=(c||0)*n,[j,T].indexOf(o)>=0?{x:c,y:s}:{x:s,y:c}}function xr(e){var t=e.state,r=e.options,o=e.name,n=r.offset,i=n===void 0?[0,0]:n,s=mt.reduce(function(l,p){return l[p]=Or(p,t.rects,i),l},{}),c=s[t.placement],a=c.x,f=c.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=f),t.modifiersData[o]=s}const Ar={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:xr};function Pr(e){var t=e.state,r=e.name;t.modifiersData[r]=xt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const Er={name:"popperOffsets",enabled:!0,phase:"read",fn:Pr,data:{}};function Dr(e){return e==="x"?"y":"x"}function $r(e){var t=e.state,r=e.options,o=e.name,n=r.mainAxis,i=n===void 0?!0:n,s=r.altAxis,c=s===void 0?!1:s,a=r.boundary,f=r.rootBoundary,l=r.altBoundary,p=r.padding,d=r.tether,u=d===void 0?!0:d,h=r.tetherOffset,v=h===void 0?0:h,m=de(t,{boundary:a,rootBoundary:f,padding:p,altBoundary:l}),y=N(t.placement),x=re(t.placement),A=!x,g=Ve(y),w=Dr(g),b=t.modifiersData.popperOffsets,O=t.rects.reference,P=t.rects.popper,$=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,E=typeof $=="number"?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),D=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,L={x:0,y:0};if(!!b){if(i){var M,oe=g==="y"?R:j,ie=g==="y"?B:T,S=g==="y"?"height":"width",W=b[g],ge=W+m[oe],X=W-m[ie],ye=u?-P[S]/2:0,$e=x===Q?O[S]:P[S],ae=x===Q?-P[S]:-O[S],be=t.elements.arrow,Z=u&&be?He(be):{width:0,height:0},V=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:yt(),se=V[oe],we=V[ie],Y=le(0,O[S],Z[S]),Re=A?O[S]/2-ye-Y-se-E.mainAxis:$e-Y-se-E.mainAxis,$t=A?-O[S]/2+ye+Y+we+E.mainAxis:ae+Y+we+E.mainAxis,je=t.elements.arrow&&me(t.elements.arrow),Rt=je?g==="y"?je.clientTop||0:je.clientLeft||0:0,Ye=(M=D?.[g])!=null?M:0,jt=W+Re-Ye-Rt,Mt=W+$t-Ye,Ke=le(u?Ee(ge,jt):ge,W,u?z(X,Mt):X);b[g]=Ke,L[g]=Ke-W}if(c){var ze,St=g==="x"?R:j,Ct=g==="x"?B:T,K=b[w],Oe=w==="y"?"height":"width",Ge=K+m[St],Ze=K-m[Ct],Me=[R,j].indexOf(y)!==-1,Je=(ze=D?.[w])!=null?ze:0,Qe=Me?Ge:K-O[Oe]-P[Oe]-Je+E.altAxis,_e=Me?K+O[Oe]+P[Oe]-Je-E.altAxis:Ze,et=u&&Me?Jt(Qe,K,_e):le(u?Qe:Ge,K,u?_e:Ze);b[w]=et,L[w]=et-K}t.modifiersData[o]=L}}const Rr={name:"preventOverflow",enabled:!0,phase:"main",fn:$r,requiresIfExists:["offset"]};function jr(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Mr(e){return e===k(e)||!F(e)?Ie(e):jr(e)}function Sr(e){var t=e.getBoundingClientRect(),r=ee(t.width)/e.offsetWidth||1,o=ee(t.height)/e.offsetHeight||1;return r!==1||o!==1}function Cr(e,t,r){r===void 0&&(r=!1);var o=F(t),n=F(t)&&Sr(t),i=U(t),s=te(e,n),c={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(o||!o&&!r)&&((I(t)!=="body"||Ue(i))&&(c=Mr(t)),F(t)?(a=te(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):i&&(a.x=qe(i))),{x:s.left+c.scrollLeft-a.x,y:s.top+c.scrollTop-a.y,width:s.width,height:s.height}}function Br(e){var t=new Map,r=new Set,o=[];e.forEach(function(i){t.set(i.name,i)});function n(i){r.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(c){if(!r.has(c)){var a=t.get(c);a&&n(a)}}),o.push(i)}return e.forEach(function(i){r.has(i.name)||n(i)}),o}function Tr(e){var t=Br(e);return zt.reduce(function(r,o){return r.concat(t.filter(function(n){return n.phase===o}))},[])}function Lr(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Wr(e){var t=e.reduce(function(r,o){var n=r[o.name];return r[o.name]=n?Object.assign({},n,o,{options:Object.assign({},n.options,o.options),data:Object.assign({},n.data,o.data)}):o,r},{});return Object.keys(t).map(function(r){return t[r]})}var lt={placement:"bottom",modifiers:[],strategy:"absolute"};function ut(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function kr(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,o=r===void 0?[]:r,n=t.defaultOptions,i=n===void 0?lt:n;return function(c,a,f){f===void 0&&(f=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},lt,i),modifiersData:{},elements:{reference:c,popper:a},attributes:{},styles:{}},p=[],d=!1,u={state:l,setOptions:function(y){var x=typeof y=="function"?y(l.options):y;v(),l.options=Object.assign({},i,l.options,x),l.scrollParents={reference:_(c)?ue(c):c.contextElement?ue(c.contextElement):[],popper:ue(a)};var A=Tr(Wr([].concat(o,l.options.modifiers)));return l.orderedModifiers=A.filter(function(g){return g.enabled}),h(),u.update()},forceUpdate:function(){if(!d){var y=l.elements,x=y.reference,A=y.popper;if(!!ut(x,A)){l.rects={reference:Cr(x,me(A),l.options.strategy==="fixed"),popper:He(A)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(E){return l.modifiersData[E.name]=Object.assign({},E.data)});for(var g=0;g<l.orderedModifiers.length;g++){if(l.reset===!0){l.reset=!1,g=-1;continue}var w=l.orderedModifiers[g],b=w.fn,O=w.options,P=O===void 0?{}:O,$=w.name;typeof b=="function"&&(l=b({state:l,options:P,name:$,instance:u})||l)}}}},update:Lr(function(){return new Promise(function(m){u.forceUpdate(),m(l)})}),destroy:function(){v(),d=!0}};if(!ut(c,a))return u;u.setOptions(f).then(function(m){!d&&f.onFirstUpdate&&f.onFirstUpdate(m)});function h(){l.orderedModifiers.forEach(function(m){var y=m.name,x=m.options,A=x===void 0?{}:x,g=m.effect;if(typeof g=="function"){var w=g({state:l,name:y,instance:u,options:A}),b=function(){};p.push(w||b)}})}function v(){p.forEach(function(m){return m()}),p=[]}return u}}const Nr=kr({defaultModifiers:[wr,Er,ir,sr,Ar,yr,Rr,tr]}),Fr={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:()=>{}},Hr={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:({state:e})=>()=>{const{reference:t,popper:r}=e.elements;if("removeAttribute"in t){const o=(t.getAttribute("aria-describedby")||"").split(",").filter(n=>n.trim()!==r.id);o.length?t.setAttribute("aria-describedby",o.join(",")):t.removeAttribute("aria-describedby")}},fn:({state:e})=>{const{popper:t,reference:r}=e.elements,o=t.getAttribute("role")?.toLowerCase();if(t.id&&o==="tooltip"&&"setAttribute"in r){const n=r.getAttribute("aria-describedby");if(n&&n.split(",").indexOf(t.id)!==-1)return;r.setAttribute("aria-describedby",n?`${n},${t.id}`:t.id)}}},Vr=[];function Qr(e,t,r){const[o,n]=Pe(),i=Se(()=>r.enabled??!0),s=Se(tt(o,p=>()=>{p?.update()})),c=Se(tt(o,p=>()=>{p?.forceUpdate()})),[a,f]=Pe({placement:r.placement??"bottom",get update(){return s()},get forceUpdate(){return c()},attributes:{},styles:{popper:{},arrow:{}}}),l={name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:({state:p})=>{const d={},u={};Object.keys(p.elements).forEach(h=>{d[h]=p.styles[h],u[h]=p.attributes[h]}),f(h=>({...h,state:p,styles:d,attributes:u,placement:p.placement}))}};return Be(()=>{const p=o();!p||!i()||(p.setOptions({onFirstUpdate:r.onFirstUpdate,placement:r.placement??"bottom",modifiers:[...r.modifiers??Vr,Hr,l,Fr],strategy:r.strategy??"absolute"}),queueMicrotask(()=>{s()()}))}),Be(()=>{const p=e(),d=t();if(p&&d&&i()){let u;u=Nr(p,d,{}),n(u)}else o()&&(o().destroy(),n(void 0),f(u=>({...u,attributes:{},styles:{popper:{}}})))}),a}const pt=()=>{};function Ir(e){return e.button===0}function qr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const dt=e=>e;function _r(e,t=pt,{disabled:r,clickTrigger:o="click"}={}){const[n,i]=Pe(!1),s=a=>{const f=dt(e());i(!f||qr(a)||!Ir(a)||!!Lt(f,a.target))},c=a=>{n()||t(a)};Be(()=>{if(r||e()==null)return;const a=Bt(dt(e()));let f=(a.defaultView||window).event;const l=Ce(a,o,s,!0),p=Ce(a,o,u=>{if(u===f){f=void 0;return}c(u)});let d=[];"ontouchstart"in a.documentElement&&(d=[].slice.call(a.body.children).map(u=>Ce(u,"mousemove",pt))),Tt(()=>{l(),p(),d.forEach(u=>u())})})}function Ur(e){const t={};return Array.isArray(e)?(e?.forEach(r=>{t[r.name]=r}),t):e||t}function Xr(e={}){return Array.isArray(e)?e:Object.keys(e).map(t=>(e[t].name=t,e[t]))}function en({enabled:e,enableEvents:t,placement:r,flip:o,offset:n,fixed:i,containerPadding:s,arrowElement:c,popperConfig:a={}}){const f=Ur(a.modifiers);return{...a,placement:r,enabled:e,strategy:i?"fixed":a.strategy,modifiers:Xr({...f,eventListeners:{enabled:t},preventOverflow:{...f.preventOverflow,options:s?{padding:s,...f.preventOverflow?.options}:f.preventOverflow?.options},offset:{options:{offset:n,...f.offset?.options}},arrow:{...f.arrow,enabled:!!c,options:{...f.arrow?.options,element:c}},flip:{enabled:!!o,...f.flip}})}}const Le=Symbol("store-raw"),ve=Symbol("store-node"),Yr=Symbol("store-name");function At(e,t){let r=e[G];if(!r&&(Object.defineProperty(e,G,{value:r=new Proxy(e,Gr)}),!Array.isArray(e))){const o=Object.keys(e),n=Object.getOwnPropertyDescriptors(e);for(let i=0,s=o.length;i<s;i++){const c=o[i];if(n[c].get){const a=n[c].get.bind(r);Object.defineProperty(e,c,{enumerable:n[c].enumerable,get:a})}}}return r}function q(e){let t;return e!=null&&typeof e=="object"&&(e[G]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function ne(e,t=new Set){let r,o,n,i;if(r=e!=null&&e[Le])return r;if(!q(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let s=0,c=e.length;s<c;s++)n=e[s],(o=ne(n,t))!==n&&(e[s]=o)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const s=Object.keys(e),c=Object.getOwnPropertyDescriptors(e);for(let a=0,f=s.length;a<f;a++)i=s[a],!c[i].get&&(n=e[i],(o=ne(n,t))!==n&&(e[i]=o))}return e}function Xe(e){let t=e[ve];return t||Object.defineProperty(e,ve,{value:t={}}),t}function We(e,t,r){return e[t]||(e[t]=Et(r))}function Kr(e,t){const r=Reflect.getOwnPropertyDescriptor(e,t);return!r||r.get||!r.configurable||t===G||t===ve||t===Yr||(delete r.value,delete r.writable,r.get=()=>e[G][t]),r}function Pt(e){if(vt()){const t=Xe(e);(t._||(t._=Et()))()}}function zr(e){return Pt(e),Reflect.ownKeys(e)}function Et(e){const[t,r]=Pe(e,{equals:!1,internal:!0});return t.$=r,t}const Gr={get(e,t,r){if(t===Le)return e;if(t===G)return r;if(t===rt)return Pt(e),r;const o=Xe(e),n=o.hasOwnProperty(t);let i=n?o[t]():e[t];if(t===ve||t==="__proto__")return i;if(!n){const s=Object.getOwnPropertyDescriptor(e,t);vt()&&(typeof i!="function"||e.hasOwnProperty(t))&&!(s&&s.get)&&(i=We(o,t,i)())}return q(i)?At(i):i},has(e,t){return t===Le||t===G||t===rt||t===ve||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:zr,getOwnPropertyDescriptor:Kr};function C(e,t,r,o=!1){if(!o&&e[t]===r)return;const n=e[t],i=e.length;r===void 0?delete e[t]:e[t]=r;let s=Xe(e),c;(c=We(s,t,n))&&c.$(()=>r),Array.isArray(e)&&e.length!==i&&(c=We(s,"length",i))&&c.$(e.length),(c=s._)&&c.$()}function Dt(e,t){const r=Object.keys(t);for(let o=0;o<r.length;o+=1){const n=r[o];C(e,n,t[n])}}function Zr(e,t){if(typeof t=="function"&&(t=t(e)),t=ne(t),Array.isArray(t)){if(e===t)return;let r=0,o=t.length;for(;r<o;r++){const n=t[r];e[r]!==n&&C(e,r,n)}C(e,"length",o)}else Dt(e,t)}function ce(e,t,r=[]){let o,n=e;if(t.length>1){o=t.shift();const s=typeof o,c=Array.isArray(e);if(Array.isArray(o)){for(let a=0;a<o.length;a++)ce(e,[o[a]].concat(t),r);return}else if(c&&s==="function"){for(let a=0;a<e.length;a++)o(e[a],a)&&ce(e,[a].concat(t),r);return}else if(c&&s==="object"){const{from:a=0,to:f=e.length-1,by:l=1}=o;for(let p=a;p<=f;p+=l)ce(e,[p].concat(t),r);return}else if(t.length>1){ce(e[o],t,[o].concat(r));return}n=e[o],r=[o].concat(r)}let i=t[0];typeof i=="function"&&(i=i(n,r),i===n)||o===void 0&&i==null||(i=ne(i),o===void 0||q(n)&&q(i)&&!Array.isArray(i)?Dt(n,i):C(e,o,i))}function tn(...[e,t]){const r=ne(e||{}),o=Array.isArray(r),n=At(r);function i(...s){Wt(()=>{o&&s.length===1?Zr(r,s[0]):ce(r,s)})}return[n,i]}const ke=Symbol("store-root");function J(e,t,r,o,n){const i=t[r];if(e===i)return;if(!q(e)||!q(i)||n&&e[n]!==i[n]){if(e!==i){if(r===ke)return e;C(t,r,e)}return}if(Array.isArray(e)){if(e.length&&i.length&&(!o||n&&e[0][n]!=null)){let a,f,l,p,d,u,h,v;for(l=0,p=Math.min(i.length,e.length);l<p&&(i[l]===e[l]||n&&i[l][n]===e[l][n]);l++)J(e[l],i,l,o,n);const m=new Array(e.length),y=new Map;for(p=i.length-1,d=e.length-1;p>=l&&d>=l&&(i[p]===e[d]||n&&i[p][n]===e[d][n]);p--,d--)m[d]=i[p];if(l>d||l>p){for(f=l;f<=d;f++)C(i,f,e[f]);for(;f<e.length;f++)C(i,f,m[f]),J(e[f],i,f,o,n);i.length>e.length&&C(i,"length",e.length);return}for(h=new Array(d+1),f=d;f>=l;f--)u=e[f],v=n?u[n]:u,a=y.get(v),h[f]=a===void 0?-1:a,y.set(v,f);for(a=l;a<=p;a++)u=i[a],v=n?u[n]:u,f=y.get(v),f!==void 0&&f!==-1&&(m[f]=i[a],f=h[f],y.set(v,f));for(f=l;f<e.length;f++)f in m?(C(i,f,m[f]),J(e[f],i,f,o,n)):C(i,f,e[f])}else for(let a=0,f=e.length;a<f;a++)J(e[a],i,a,o,n);i.length>e.length&&C(i,"length",e.length);return}const s=Object.keys(e);for(let a=0,f=s.length;a<f;a++)J(e[s[a]],i,s[a],o,n);const c=Object.keys(i);for(let a=0,f=c.length;a<f;a++)e[c[a]]===void 0&&C(i,c[a],void 0)}function rn(e,t={}){const{merge:r,key:o="id"}=t,n=ne(e);return i=>{if(!q(i)||!q(n))return n;const s=J(n,{[ke]:i},ke,r,o);return s===void 0?i:s}}export{_r as a,tn as c,en as m,rn as r,Qr as u};