import{t as b,a2 as g,a3 as i,M as C,g as v,m as c,a8 as w,u as P,ag as d,c as n,S as x,s as A,i as u,w as $,ah as N,b as S,d as k}from"./vendor.c00eff94.js";const L=b('<div role="alert"></div>'),B=g("h4"),H=i("alert-heading",{Component:B}),_=i("alert-link",{Component:C}),j={variant:"primary",defaultShow:!0,transition:d,closeLabel:"Close alert"},y=m=>{const[e,r]=v(c(j,m),["bsPrefix","children","defaultShow","show","closeLabel","closeVariant","className","children","variant","onClose","dismissible","transition"]),[f,o]=w(()=>e.show,()=>e.defaultShow,e.onClose),t=P(e.bsPrefix,"alert"),h=s=>{o&&o(!1,s)},a=e.transition===!0?d:e.transition,l=()=>(()=>{const s=L.cloneNode(!0);return A(s,a?void 0:r,!1,!0),u(s,(()=>{const p=$(()=>!!e.dismissible,!0);return()=>p()&&n(N,{onClick:h,get["aria-label"](){return e.closeLabel},get variant(){return e.closeVariant}})})(),null),u(s,()=>e.children,null),S(()=>s.className=k(e.className,t,e.variant&&`${t}-${e.variant}`,e.dismissible&&`${t}-dismissible`)),s})();return n(x,{when:!!a,get fallback(){return e.show?l:null},get children(){return n(a,c({unmountOnExit:!0},r,{ref(s){undefined=s},get in(){return f()},children:l}))}})};var O=Object.assign(y,{Link:_,Heading:H});export{O as A};
