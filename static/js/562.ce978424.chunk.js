"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[562],{562:function(t,e,n){n.r(e);var i=n(439),a=n(791),r=n(582),s=n(67),c=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,i.Z)(t,2),n=e[0],o=e[1];return(0,a.useEffect)((function(){(0,r.ru)().then((function(t){o(t.results)})).catch((function(t){return console.log(t)}))}),[]),(0,c.jsx)("main",{children:n.length>0&&(0,c.jsx)(s.K,{movies:n,title:"Movies Trending"})})}},67:function(t,e,n){n.d(e,{K:function(){return _}});var i=n(433),a=n(439),r=n(87),s=n(689),c={mainTitle:"ListFilms_mainTitle__I7yBu",buttonLike:"ListFilms_buttonLike__COiqj",list:"ListFilms_list__uTo02",list__item:"ListFilms_list__item__1qvcv",link:"ListFilms_link__4i0si",box_title:"ListFilms_box_title__y4GFf",text_name:"ListFilms_text_name__Hxp0l",text_average:"ListFilms_text_average__T4IME",image:"ListFilms_image__FPQ0L",box_item:"ListFilms_box_item__KtOiu"},o=n(791),u=o.useEffect,l=o.useState,m=n(184),_=function(t){var e=t.movies,n=t.title,o=(0,s.TH)(),_=function(t,e){var n=localStorage.getItem(t),i=n?JSON.parse(n):e,r=l(i),s=(0,a.Z)(r,2),c=s[0],o=s[1];return u((function(){localStorage.setItem(t,JSON.stringify(c))}),[t,c]),[c,o]}("likeMovie",[]),f=(0,a.Z)(_,2),p=f[0],d=f[1];return(0,m.jsxs)("div",{className:c.box,children:[n&&(0,m.jsx)("h1",{className:c.mainTitle,children:"Movies Trending"}),(0,m.jsx)("ul",{className:c.list,children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,n=t.title,a=t.poster_path,s=t.vote_average,u="https://image.tmdb.org/t/p/w500".concat(a);return(0,m.jsxs)("li",{className:c.list__item,children:[(0,m.jsx)("button",{className:c.buttonLike,onClick:function(){return function(t,e,n,a){var r=JSON.parse(localStorage.getItem("likeMovie")),s={id:t,title:e,poster_path:n,vote_average:a};if(r.findIndex((function(t){return t.id===s.id}))>=0){var c=r.filter((function(t){return t.id!==s.id}));d(c)}else d((function(t){return[].concat((0,i.Z)(p),[s])}))}(e,n,a,s)},children:"Like"}),(0,m.jsxs)(r.rU,{to:"/movies/".concat(e),state:{from:o},className:c.link,children:[null===a?(0,m.jsx)("img",{width:"300",src:"https://st2.depositphotos.com/3643473/6205/i/950/depositphotos_62059967-stock-photo-3d-man-with-a-binocular.jpg",alt:n,className:c.image}):(0,m.jsx)("img",{width:"300",src:u,alt:n,className:c.image}),(0,m.jsxs)("div",{className:c.box_title,children:[(0,m.jsx)("p",{className:c.text_name,children:n}),(0,m.jsx)("p",{className:c.text_average,children:s.toFixed(1)})]})]})]},e)}))})]})}},582:function(t,e,n){n.d(e,{Oh:function(){return _},gL:function(){return m},kh:function(){return f},m9:function(){return l},ru:function(){return u}});var i=n(861),a=n(757),r=n.n(a),s=n(243),c="cb9f3ba1d1c3cba355cedf3c9174f5a3",o="https://api.themoviedb.org/3";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var t=(0,i.Z)(r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(c));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s.Z.get("/search/movie",{params:{query:t,language:"en - US",page:e,include_adult:!0,api_key:c,total_pages:8}}).then((function(t){return t.data}))},m=function(){var t=(0,i.Z)(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_=function(t){return s.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:c,language:"en - US"}}).then((function(t){return t.data}))},f=function(){var t=(0,i.Z)(r().mark((function t(e){var n;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=562.ce978424.chunk.js.map