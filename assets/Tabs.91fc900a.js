import{P as m,X as g,s as l,m as i,B as v,d as e,N as f,at as u,aA as y,e as h,aM as K}from"./index.5ae66943.js";import{g as A,a as E,b as O,B as T}from"./Example.7f10c31b.js";const C={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1};function N(t){let a;return t.forEach(s=>{a==null&&(a=s.eventKey)}),a}function P(t){return t.title==null?null:e(K,{as:"li",role:"presentation",get children(){return e(y,i({as:"button",type:"button",get eventKey(){return t.eventKey},get disabled(){return t.disabled},get id(){return t.id},get class(){return h(t.tabClass,t.tabClassName)}},()=>t.tabAttrs||{},{get children(){return t.title}}))}})}const x=t=>{const a=m(()=>t.children),s=g(()=>{const n=a();return Array.isArray(n)?n:[n]}),[r,o]=l(i({get activeKey(){return N(s())}},C,t),["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey","defaultActiveKey","mountOnEnter"]),[c,d]=v(()=>t.activeKey,()=>t.defaultActiveKey??r.defaultActiveKey,r.onSelect);return e(T,{get id(){return r.id},get activeKey(){return c()},onSelect:d,get transition(){return A(r.transition)},get mountOnEnter(){return r.mountOnEnter},get unmountOnExit(){return r.unmountOnExit},get children(){return[e(f,i(o,{role:"tablist",as:"ul",get children(){return e(u,{get each(){return s()},children:n=>e(P,n)})}})),e(E,{get children(){return e(u,{get each(){return s()},children:n=>{const[S,b]=l(n,["title","disabled","tabClass","tabClassName","tabAttrs"]);return e(O,b)}})}})]}})};var k=x;export{k as T};