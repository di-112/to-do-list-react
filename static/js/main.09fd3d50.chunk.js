(this.webpackJsonpnodes_list=this.webpackJsonpnodes_list||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var c,a=n(2),s=n(0),r=n.n(s),o=n(44),i=n.n(o),d=(n(109),n(10)),l=(n(110),n(21)),j=n(102),u=n(46),b="SET_NODES",h="CHANGE_ALERT",O="CHANGE_LOADIND",m="https://todolist-7b978-default-rtdb.firebaseio.com",f={nodes:[],isLoading:!1,alert:{show:!1,type:""}},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return t.nodes?Object(d.a)(Object(d.a)({},e),{},{nodes:Object(j.a)(Object.keys(t.nodes).map((function(e){return Object(d.a)(Object(d.a)({},t.nodes[e]),{},{id:e})})))}):Object(d.a)(Object(d.a)({},e),{},{nodes:[]});case h:return Object(d.a)(Object(d.a)({},e),{},{alert:Object(d.a)(Object(d.a)({},e.alert),{},{show:t.alert.show,type:t.alert.type})});case O:return Object(d.a)(Object(d.a)({},e),{},{isLoading:t.isLoading});default:return Object(d.a)({},e)}},p=function(e){return{type:h,alert:e}},x=function(e){return{type:O,isLoading:e}},N=function(e){return function(t){c&&clearTimeout(c),t(p(e)),c=setTimeout((function(){t(p({type:"",show:!1}))}),55e3)}},v=function(){return function(e){e(x(!0)),u.get("".concat(m,"/nodes.json")).then((function(t){var n;e(x(!1)),e((n=t.data,{type:b,nodes:n}))}))}},_=n(27),w=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsxs)("div",{className:"header__content",children:[Object(a.jsx)("img",{className:"header__logo",src:"https://static10.tgstat.ru/channels/_0/e2/e2db1e0464d24e6c4cbcbd17ed634d11.jpg",alt:""}),Object(a.jsxs)("nav",{className:"header__menu menu",children:[Object(a.jsx)(_.b,{to:"/main",className:"menu__item",children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(a.jsx)(_.b,{to:"/info",className:"menu__item",children:"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"})]})]})})},y=function(e){var t=e.nodes,n=e.removeNode;return Object(a.jsx)("ul",{className:"nodesList",children:t.map((function(e,t){return Object(a.jsxs)("li",{className:"nodesList__node node",children:[Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{className:"node__title",children:e.title}),Object(a.jsx)("small",{className:"node__date",children:e.date})]}),Object(a.jsx)("button",{onClick:function(){return n(e.id)},type:"button",class:"node__closeBtn close",children:"\xd7"})]},t)}))})},A=function(e){var t="remove"===e.alert.type?"remove alert-danger":"add"===e.alert.type?"add alert-success":"warning alert-warning",n="";switch(t){case"remove alert-danger":n="\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430";break;case"add alert-success":n="\u0417\u0430\u0434\u0430\u0447\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430";break;case"warning alert-warning":n="\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a"}return Object(a.jsxs)("div",{className:"alert ".concat(t),children:[Object(a.jsxs)("span",{children:[" ",Object(a.jsx)("strong",{children:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435!"})," ",n," "]}),Object(a.jsx)("button",{onClick:function(){e.changeAlert({show:!1,type:""})},type:"button",class:"alert__closeBtn close",children:"\xd7"})]})},L=n(233),k=n(232),E=Object(k.a)({form:"addNodeForm"})((function(e){return Object(a.jsxs)("form",{className:"addNode",onSubmit:e.handleSubmit,children:[Object(a.jsx)(L.a,{className:"form-control",component:"input",name:"node",changeAlert:e.changeAlert,autoFocus:!0}),Object(a.jsx)("div",{className:"addBtn",children:Object(a.jsx)("button",{className:"btn btn-success",type:"submit",children:"Add Task"})})]})})),F=n(7),C=n(8),S=function(){return Object(a.jsx)("div",{className:"info",children:Object(a.jsxs)("div",{className:"info__content",children:[Object(a.jsx)("p",{children:"\u0414\u0430\u043d\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u0435\u0434\u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u043e \u0434\u043b\u044f \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0437\u0430\u043c\u0435\u0442\u043e\u043a"}),Object(a.jsx)("p",{children:"React version: 17.0.1"})]})})},T=function(){return Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("div",{className:"spinner-border text-primary",role:"status",children:Object(a.jsx)("span",{className:"visually-hidden"})})})};var D=Object(F.d)(C.f,Object(l.b)((function(e){return{nodes:e.data.nodes,alert:e.data.alert,isLoading:e.data.isLoading}}),{getNodes:v,removeNode:function(e){return function(t){u.delete("".concat(m,"/nodes/").concat(e,".json")).then((function(e){t(N({type:"remove",show:!0})),t(v())}))}},changeAlert:N,addNode:function(e){return function(t){e.title?(t(x(!0)),u.post("".concat(m,"/nodes.json"),e).then((function(e){t(N({type:"add",show:!0})),t(v()),t(x(!1))}))):t(N({type:"warning",show:!0}))}}}))((function(e){Object(s.useEffect)((function(){e.getNodes()}),[]),Object(s.useEffect)((function(){"/main"===e.location.pathname&&e.changeAlert({show:!1,type:""})}),[e.location.pathname]);var t=function(t){var n=new Date,c=n.getMinutes(),a=n.getHours(),s=n.getDate(),r=n.getMonth(),o=n.getFullYear();e.addNode({title:t.node,date:s+"."+r+"."+o+"_"+a+":"+c})};return e.isLoading?(console.log("hello"),Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(w,{}),Object(a.jsx)(T,{})]})):Object(a.jsxs)("div",{className:"wrapper",children:[Object(a.jsx)(w,{}),Object(a.jsx)(C.a,{to:"/main"}),Object(a.jsx)(C.b,{path:"/main",render:function(){return Object(a.jsxs)(a.Fragment,{children:[e.alert.show&&Object(a.jsx)(A,{alert:e.alert,changeAlert:e.changeAlert}),Object(a.jsx)(E,Object(d.a)({onSubmit:t},e)),Object(a.jsx)(y,{nodes:e.nodes,removeNode:e.removeNode,changeAlert:e.changeAlert})]})}}),Object(a.jsx)(C.b,{path:"/info",render:function(){return Object(a.jsx)(S,{})}})]})})),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,235)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),s(e),r(e)}))},H=n(101),I=n(234),M=Object(F.c)({data:g,form:I.a}),G=Object(F.e)(M,Object(F.a)(H.a));i.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{store:G,children:Object(a.jsx)(_.a,{children:Object(a.jsx)(D,{})})})}),document.getElementById("root")),B()}},[[230,1,2]]]);
//# sourceMappingURL=main.09fd3d50.chunk.js.map