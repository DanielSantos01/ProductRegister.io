(this["webpackJsonpproductregister.io"]=this["webpackJsonpproductregister.io"]||[]).push([[0],{62:function(t,e,r){"use strict";r.r(e);var n=r(0),a=r.n(n),s=r(29),u=r.n(s),c=r(11),i=r(2),o=r(19),h=r(32),p=r(1),d=function(t){var e=t.component,r=Object(h.a)(t,["component"]);return Object(p.jsx)(i.b,Object(o.a)(Object(o.a)({},r),{},{render:function(){return Object(p.jsx)(e,{})}}))},b=r(3),f=r.n(b),l=r(8),j=r(13),v=r(14),x=r(31),O=r.n(x),y=function(){function t(){Object(j.a)(this,t),this.axiosInstance=void 0,this.headers=void 0,this.axiosInstance=O.a.create(),this.headers={validateStatus:function(){return!0},timeout:25e3}}return Object(v.a)(t,[{key:"post",value:function(){var t=Object(l.a)(f.a.mark((function t(e){var r,n,a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.url,n=e.body,t.next=3,this.axiosInstance.post(r,n,this.headers);case 3:return a=t.sent,s={statusCode:a.status,body:a.data},t.abrupt("return",s);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"get",value:function(){var t=Object(l.a)(f.a.mark((function t(e){var r,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.url,t.next=3,this.axiosInstance.get(r,this.headers);case 3:return n=t.sent,a={statusCode:n.status,body:n.data},t.abrupt("return",a);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"patch",value:function(){var t=Object(l.a)(f.a.mark((function t(e){var r,n,a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.url,n=e.body,t.next=3,this.axiosInstance.patch(r,n,this.headers);case 3:return a=t.sent,s={statusCode:a.status,body:a.data},t.abrupt("return",s);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(l.a)(f.a.mark((function t(e){var r,n,a;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.url,t.next=3,this.axiosInstance.delete(r,this.headers);case 3:return n=t.sent,a={statusCode:n.status,body:n.data},t.abrupt("return",a);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}(),k=new(function(){function t(e){Object(j.a)(this,t),this.httpClient=void 0,this.httpClient=e,this.create=this.create.bind(this),this.read=this.read.bind(this),this.update=this.update.bind(this),this.delete=this.delete.bind(this)}return Object(v.a)(t,[{key:"create",value:function(){var t=Object(l.a)(f.a.mark((function t(e){var r,n,a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.url,n=e.body,a=this.parse(n),t.next=4,this.httpClient.post({url:r,body:a});case 4:return s=t.sent,t.abrupt("return",s);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"read",value:function(){var t=Object(l.a)(f.a.mark((function t(e){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.httpClient.get(e);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"update",value:function(){var t=Object(l.a)(f.a.mark((function t(e){var r,n,a,s;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.body,n=e.url,a=this.parse(r),t.next=4,this.httpClient.patch({url:n,body:a});case 4:return s=t.sent,t.abrupt("return",s);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"delete",value:function(){var t=Object(l.a)(f.a.mark((function t(e){var r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.httpClient.delete(e);case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"parse",value:function(t){var e=new URLSearchParams;return Object.keys(t).forEach((function(r){e.append(r,t[r])})),e}}]),t}())(new y),w=function(){return Object(n.useCallback)(Object(l.a)(f.a.mark((function t(){var e;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k.read({url:"https://product-register-api.herokuapp.com/user?id=60b0778562801c0004250111"});case 2:e=t.sent,console.log(e);case 4:case"end":return t.stop()}}),t)}))),[])(),Object(p.jsx)("div",{children:Object(p.jsx)("p",{children:"Ol\xe1 Mundo!"})})},m=function(){var t=Object(i.g)().path;return Object(p.jsx)(i.d,{children:Object(p.jsx)(d,{path:"".concat(t,"/"),component:w})})},C=function(){return Object(p.jsxs)(i.d,{children:[Object(p.jsx)(d,{path:"/auth",component:m}),Object(p.jsx)(i.a,{to:"/auth"})]})},g=function(){return Object(p.jsx)(c.a,{children:Object(p.jsx)(C,{})})},I=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(g,{})})};u.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(I,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.c08e4113.chunk.js.map