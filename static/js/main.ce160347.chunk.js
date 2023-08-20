(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(26),a=c(9),r=(c(35),c(36),c(2)),s=(c(37),c(3)),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=c(4),l=c(7),o=c(5),b=c(0);function h(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(39);var d=function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})},O=c(24),x=c(15),u=c.n(x),p=function(e){var t=e.person,c=Object(r.q)().slug;return Object(s.jsxs)("tr",{"data-cy":"person",className:u()({"has-background-warning":c===t.slug}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(a.b,{to:"/people/".concat(t.slug),className:u()({"has-text-danger":"f"===t.sex}),children:t.name})}),Object(s.jsx)("td",{children:t.sex}),Object(s.jsx)("td",{children:t.born}),Object(s.jsx)("td",{children:t.died}),Object(s.jsx)("td",{children:t.mother?Object(s.jsx)(a.b,{to:"/people/".concat(t.mother.slug),className:"has-text-danger",children:t.motherName}):t.motherName||"-"}),Object(s.jsx)("td",{children:t.father?Object(s.jsx)(a.b,{to:"/people/".concat(t.father.slug),children:t.fatherName}):t.fatherName||"-"})]})},m=function(e){var t=e.people;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){return Object(s.jsx)(p,{person:Object(O.a)(Object(O.a)({},e),{},{mother:t.find((function(t){return t.name===e.motherName})),father:t.find((function(t){return t.name===e.fatherName}))})},e.slug)}))})]})},f=function(){var e=Object(b.useState)([]),t=Object(o.a)(e,2),c=t[0],n=t[1],a=Object(b.useState)(""),r=Object(o.a)(a,2),j=r[0],O=r[1],x=Object(b.useState)(!1),u=Object(o.a)(x,2),p=u[0],f=u[1],g=function(){var e=Object(l.a)(Object(i.a)().mark((function e(){var t;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return O(""),f(!0),e.prev=2,e.next=5,h();case 5:t=e.sent,n(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),O("Something went wrong");case 12:return e.prev=12,f(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[2,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return Object(b.useEffect)((function(){g()}),[]),Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsxs)("div",{className:"box table-container",children:[p&&Object(s.jsx)(d,{}),!c.length&&!p&&!j&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),j&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),0!==c.length&&Object(s.jsx)(m,{people:c})]})})]})},g=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},v=function(e){var t=e.isActive;return u()("navbar-item",{"has-background-grey-lighter":t})},N=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(a.c,{className:v,to:"/",children:"Home"}),Object(s.jsx)(a.c,{className:v,to:"/people",children:"People"})]})})})},w=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(N,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsxs)(r.b,{path:"/people",children:[Object(s.jsx)(r.b,{index:!0,element:Object(s.jsx)(f,{})}),Object(s.jsx)(r.b,{path:":slug",element:Object(s.jsx)(f,{})})]}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(g,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(w,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.ce160347.chunk.js.map