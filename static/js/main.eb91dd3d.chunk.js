(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){"use strict";t.r(a);var c=t(3),n=t.n(c),l=t(1);t(8);var s=t(0);const i=e=>{let{total:a,perPage:t,currentPage:c=1,onPageChange:n}=e;const l=Math.ceil(a/t),i=e=>{e!==c&&n(e)};return Object(s.jsxs)("ul",{className:"pagination",children:[Object(s.jsx)("li",{className:"page-item ".concat(1===c?"disabled":""),children:Object(s.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c?"true":"false",onClick:e=>{e.preventDefault(),1!==c&&i(c-1)},children:"\xab"})}),Array.from({length:l},((e,a)=>a+1)).map((e=>Object(s.jsx)("li",{className:"page-item ".concat(e===c?"active":""),children:Object(s.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:a=>{a.preventDefault(),i(e)},children:e})},e))),Object(s.jsx)("li",{className:"page-item ".concat(c===l?"disabled":""),children:Object(s.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===l?"true":"false",onClick:e=>{e.preventDefault(),c!==l&&i(c+1)},children:"\xbb"})})]})};const r=()=>{const[e,a]=Object(l.useState)(1),[t,c]=Object(l.useState)(5),n=function(e,a){const t=[];for(let c=e;c<=a;c+=1)t.push(c);return t}((e-1)*t+1,Math.min(e*t,42)).map((e=>"Item ".concat(e)));return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Items with Pagination"}),Object(s.jsxs)("p",{className:"lead","data-cy":"info",children:["Page ",e," (items ",(e-1)*t+1," -"," ",Math.min(e*t,42)," of ",42,")"]}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(s.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",value:t,onChange:e=>{c(parseInt(e.target.value,10)),a(1)},children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})}),Object(s.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(s.jsx)(i,{total:42,perPage:t,currentPage:e,onPageChange:e=>{a(e)}}),Object(s.jsx)("ul",{children:n.map((e=>Object(s.jsx)("li",{"data-cy":"item",children:e},e)))})]})};n.a.render(Object(s.jsx)(r,{}),document.getElementById("root"))},8:function(e,a,t){}},[[10,1,2]]]);
//# sourceMappingURL=main.eb91dd3d.chunk.js.map