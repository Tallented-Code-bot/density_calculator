(this.webpackJsonpdensity_calculator=this.webpackJsonpdensity_calculator||[]).push([[0],{10:function(e,t,n){},12:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),l=n.n(i),s=(n(9),n(10),n(2)),j=n(0),u=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(0),l=Object(s.a)(i,2),u=l[0],o=l[1],r=Object(c.useState)(0),b=Object(s.a)(r,2),O=b[0],h=b[1],d=Object(c.useState)("g"),v=Object(s.a)(d,2),x=v[0],g=v[1],m=Object(c.useState)("mL"),p=Object(s.a)(m,2),f=p[0],L=p[1],k=Object(c.useState)("g"),C=Object(s.a)(k,2),y=C[0],S=C[1],N=Object(c.useState)("mL"),w=Object(s.a)(N,2),D=w[0],E=w[1],I=Object(c.useState)(["mass","volume","density"]),J=Object(s.a)(I,2);J[0],J[1];function M(e,t,n){var c={kg:1e6,g:1e3,mg:1};return e*c[t]/c[n]}function _(e,t,n){var c={mL:1,cm3:1,m3:1e6,L:1e3};return e*c[t]/c[n]}function A(e,t,n,c,a,i){return M(e,n,a)/_(t,c,i)}var B=function(e){var t=parseFloat(e);return isNaN(t)&&(t=0),t};return Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(j.jsxs)("div",{className:"inputLine",children:[Object(j.jsx)("label",{children:"Mass:"}),Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){a(e.target.value)}}),Object(j.jsxs)("select",{value:x,onChange:function(e){g(e.target.value)},children:[Object(j.jsx)("option",{value:"kg",children:"kg"}),Object(j.jsx)("option",{value:"g",children:"g"}),Object(j.jsx)("option",{value:"mg",children:"mg"})]}),Object(j.jsx)("button",{onClick:function(){var e=A(B(O),1,y,D,x,f);a(B(u)*e)},children:"Calculate"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"inputLine",children:[Object(j.jsx)("label",{children:"Volume:"}),Object(j.jsx)("input",{type:"text",value:u,onChange:function(e){o(e.target.value)}}),Object(j.jsxs)("select",{value:f,onChange:function(e){L(e.target.value)},children:[Object(j.jsx)("option",{value:"mL",children:"mL"}),Object(j.jsx)("option",{value:"L",children:"L"}),Object(j.jsx)("option",{value:"cm3",children:"cm\xb3"}),Object(j.jsx)("option",{value:"m3",children:"m\xb3"})]}),Object(j.jsx)("button",{onClick:function(){var e=A(B(O),1,y,D,x,f);o(B(n)/e)},children:"Calculate"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("div",{className:"inputLine",children:[Object(j.jsx)("label",{children:"Density:"}),Object(j.jsx)("input",{type:"text",value:O,onChange:function(e){h(e.target.value)}}),Object(j.jsxs)("select",{value:y,onChange:function(e){S(e.target.value)},children:[Object(j.jsx)("option",{value:"kg",children:"kg"}),Object(j.jsx)("option",{value:"g",children:"g"}),Object(j.jsx)("option",{value:"mg",children:"mg"})]}),"/",Object(j.jsxs)("select",{value:D,onChange:function(e){E(e.target.value)},children:[Object(j.jsx)("option",{value:"mL",children:"mL"}),Object(j.jsx)("option",{value:"L",children:"L"}),Object(j.jsx)("option",{value:"cm3",children:"cm\xb3"}),Object(j.jsx)("option",{value:"m3",children:"m\xb3"})]}),Object(j.jsx)("button",{onClick:function(){var e=M(B(n),x,y),t=_(B(u),f,D);h(e/t)},children:"Calculate"}),Object(j.jsx)("br",{})]}),Object(j.jsxs)("p",{className:"caption",children:["This substance is most likely an ",function(){var e=A(B(n),B(u),y,D,"g","mL");return console.log(e),e>2.5?"inorganic solid":e>1?"organic solid":"unknown type of solid"}()]})]})};var o=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Density Calculator"}),Object(j.jsxs)("div",{className:"instructions",children:[Object(j.jsx)("h3",{children:"Instructions:"}),Object(j.jsx)("p",{children:"Enter two known values, select the right units, and then click the calculate button for the unknown value."})]}),Object(j.jsx)(u,{})]})};l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(o,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.2ed81cec.chunk.js.map