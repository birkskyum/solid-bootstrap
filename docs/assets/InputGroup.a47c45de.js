import{a as e,m as s,s as c,D as u,b as m}from"./vendor.e0c45427.js";import{c as l,u as x}from"./index.9731a100.js";import{a as n}from"./FormControl.243fd787.js";import{c as d}from"./InputGroupContext.a36f42f7.js";const r=l("input-group-text",{Component:"span"}),f=o=>e(r,{get children(){return e(n,s({type:"checkbox"},o))}}),h=o=>e(r,{get children(){return e(n,s({type:"radio"},o))}}),g={as:"div"},P=o=>{const[t,p]=c(s(g,o),["as","bsPrefix","size","hasValidation","className"]),a=x(t.bsPrefix,"input-group"),i={};return e(d.Provider,{value:i,get children(){return e(u,s({get component(){return t.as}},p,{get className(){return m(t.className,a,t.size&&`${a}-${t.size}`,t.hasValidation&&"has-validation")}}))}})};var G=Object.assign(P,{Text:r,Radio:h,Checkbox:f});export{G as I};
