(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(3),l=n.n(c),r=(n(11),n(4)),i=n(1),s=(n(12),n(13));var u=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),m=(u[0],u[1]),d=Object(a.useState)(""),p=Object(i.a)(d,2),f=(p[0],p[1]),h=Object(a.useState)([]),v=Object(i.a)(h,2),E=v[0],b=v[1],g=function(e){var t=[].concat(Object(r.a)(E),[{text:e,complete:!1}]);b(t)};return o.a.createElement(a.Fragment,null,o.a.createElement("div",{className:"card todo-list-container"},o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g(n),c("")},className:"todo-list-form"},o.a.createElement("section",{className:"header-section"},o.a.createElement("h1",{className:"text-center white-text"},"Things To Do")),o.a.createElement("section",{className:"content-section"},o.a.createElement("input",{type:"text",value:n,onChange:function(e){return c(e.target.value)},placeholder:"What needs to be done?",required:!0,className:"todo-list-input"}))),o.a.createElement("section",{className:"todo-items"},E.map(function(e,t){return o.a.createElement("div",{key:t,style:{display:"flex"}},o.a.createElement("input",{type:"checkbox",value:s(),onChange:function(e){return m(e.target.value)},onClick:function(){return function(e){var t=E;t[e].complete=!t[e].complete,b(t)}(t)},className:"todo-list-complete"}),o.a.createElement("div",{style:{textDecoration:e.complete?"line-through":""},className:"todo-list-item"},e.text),o.a.createElement("input",{type:"checkbox",value:s(),onChange:function(e){return f(e.target.value)},onClick:function(){return function(e){var t=E;t.splice(e,1),b(t)}(t)},className:"todo-list-delete"}))})),o.a.createElement("hr",null),o.a.createElement("span",{className:"text-italic tasks-left"}," Tasks left: ",function(){for(var e=0,t=0;t<E.length;++t)0==E[t].complete&&e++;return e}()," ")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,n){e.exports=n(14)}},[[5,1,2]]]);
//# sourceMappingURL=main.1bddf159.chunk.js.map