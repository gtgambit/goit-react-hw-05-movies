"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[76],{76:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(861),a=r(439),c=r(757),s=r.n(c),u=r(791),i=r(689),o=r(474),p={},f=r(390),v=r(184),m=function(){var e=(0,u.useState)(!1),t=(0,a.Z)(e,2),r=t[0],c=t[1],m=(0,u.useState)(""),l=(0,a.Z)(m,2),h=l[0],d=l[1],g=(0,u.useState)([]),w=(0,a.Z)(g,2),x=w[0],Z=w[1],k=(0,i.UO)().movieId;if((0,u.useEffect)((function(){if(k){var e=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,c(!0),e.next=4,(0,f.Ku)(t);case 4:r=e.sent,Z(r.cast),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),d(e.t0.message),console.log(h);case 12:return e.prev=12,c(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,8,12,15]])})));return function(t){return e.apply(this,arguments)}}();e(k)}}),[k,h]),x)return(0,v.jsxs)("ul",{className:p.castContainer,children:[r&&(0,v.jsx)(o.Z,{}),x.map((function(e){var t=e.id,r=e.profile_path,n=e.original_name,a=e.character;return(0,v.jsxs)("li",{className:p.actorItem,children:[(0,v.jsx)("div",{className:p.actorImg,children:(0,v.jsx)("img",{className:p.image,src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://www.drupal.org/files/project-images/broken-image.jpg",alt:n})}),(0,v.jsxs)("div",{className:p.actInfo,children:[(0,v.jsx)("p",{className:p.actName,children:n}),(0,v.jsx)("p",{className:p.actChar,children:a})]})]},t)}))]})}},390:function(e,t,r){r.d(t,{Df:function(){return u},Ku:function(){return f},Pg:function(){return o},Ph:function(){return i},fI:function(){return p}});var n=r(861),a=r(757),c=r.n(a),s=r(263);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"44d416356c22cc8e7735ee915c193364"};var u=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/trending/movie/day",{params:{page:1}});case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/search/movie/",{params:{query:t}});case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.69a035b4.chunk.js.map