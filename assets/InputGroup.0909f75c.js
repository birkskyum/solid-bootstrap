import{y as c,d as s,s as u,m as o,u as l,D as m,e as x}from"./index.5ae66943.js";import{a as n}from"./FormControl.2238b9ae.js";import{I as d}from"./InputGroupContext.ca139de7.js";const r=c("input-group-text",{Component:"span"}),h=e=>s(r,{get children(){return s(n,o({type:"checkbox"},e))}}),f=e=>s(r,{get children(){return s(n,o({type:"radio"},e))}}),g={as:"div"},I=e=>{const[t,p]=u(o(g,e),["as","bsPrefix","size","hasValidation","class","className"]),a=l(t.bsPrefix,"input-group"),i={};return s(d.Provider,{value:i,get children(){return s(m,o({get component(){return t.as}},p,{get class(){return x(t.class,t.className,a,t.size&&`${a}-${t.size}`,t.hasValidation&&"has-validation")}}))}})};var G=Object.assign(I,{Text:r,Radio:f,Checkbox:h});export{G as I};