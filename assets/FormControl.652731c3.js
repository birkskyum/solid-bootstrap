import{s as i,m as t,c as l,d as c,D as p,z as x,B as d,u}from"./index.7b72cfc3.js";const v={as:"div",type:"valid",tooltip:!1},y=a=>{const[s,r]=i(t(v,a),["as","class","className","type","tooltip"]);return l(p,t({get component(){return s.as}},r,{get class(){return c(s.class,s.className,`${s.type}-${s.tooltip?"tooltip":"feedback"}`)}}))};var g=y;const b=x({});var m=b;const P={as:"input",type:"checkbox",isValid:!1,isInvalid:!1},$=a=>{const[s,r]=i(t(P,a),["as","id","bsPrefix","class","className","type","isValid","isInvalid"]),o=d(m),e=u(s.bsPrefix,"form-check-input");return l(p,t({get component(){return s.as}},r,{get type(){return s.type},get id(){return s.id||o.controlId},get class(){return c(s.class,s.className,e,s.isValid&&"is-valid",s.isInvalid&&"is-invalid")}}))};var k=$;const C={as:"input",isValid:!1,isInvalid:!1},F=a=>{const[s,r]=i(t(C,a),["as","bsPrefix","type","size","htmlSize","id","class","className","isValid","isInvalid","plaintext","readOnly"]),o=d(m),e=u(s.bsPrefix,"form-control"),f=()=>{let n;return s.plaintext?n={[`${e}-plaintext`]:!0}:n={[e]:!0,[`${e}-${s.size}`]:s.size},n};return l(p,t({get component(){return s.as}},r,{get type(){return s.type},get size(){return s.htmlSize},get readOnly(){return s.readOnly},get id(){return s.id||o.controlId},get class(){return c(s.className,f(),s.isValid&&"is-valid",s.isInvalid&&"is-invalid",s.type==="color"&&`${e}-color`)}}))};var z=Object.assign(F,{Feedback:g});export{m as F,k as a,g as b,z as c};