import{t as i,v as n,a as t,Q as c}from"./vendor.e0c45427.js";import{A as s}from"./Alert.4bc015d7.js";import"./index.58251ec3.js";const d=i("<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>"),h=i("<hr>"),u=i('<p class="mb-0">And here is an <!> just to show off all the components.</p>'),p=i('<div class="row gy-4"><div><h3>Alerts</h3><p class="lead">Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.</p></div></div>'),_=()=>(()=>{const l=p.cloneNode(!0),r=l.firstChild;return r.firstChild.nextSibling,n(r,t(c,{each:["primary","secondary","success","danger","warning","info","light","dark"],children:e=>t(s,{variant:e,dismissible:!0,transition:!0,get children(){return["This is a ",e," alert\u2014check it out!"," "]}})}),null),n(r,t(s,{variant:"success",dismissible:!0,transition:!0,get children(){return[t(s.Heading,{children:"This is an Alert.Heading"}),d.cloneNode(!0),h.cloneNode(!0),(()=>{const e=u.cloneNode(!0),o=e.firstChild,a=o.nextSibling;return a.nextSibling,n(e,t(s.Link,{href:"#",children:"Alert.Link"}),a),e})()]}}),null),l})();export{_ as default};