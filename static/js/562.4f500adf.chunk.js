"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[562],{562:function(t,e,n){n.r(e);var r=n(439),a=n(791),i=n(582),s=n(154),c=n(184);e.default=function(){var t=(0,a.useState)([]),e=(0,r.Z)(t,2),n=e[0],o=e[1];return(0,a.useEffect)((function(){(0,i.ru)().then((function(t){o(t.results)})).catch((function(t){return console.log(t)}))}),[]),(0,c.jsx)("main",{children:n.length>0&&(0,c.jsx)(s.K,{movies:n,title:"Movies Trending"})})}},154:function(t,e,n){n.d(e,{K:function(){return d}});var r=n(87),a=n(689),i="ListFilms_mainTitle__I7yBu",s="ListFilms_list__uTo02",c="ListFilms_list__item__1qvcv",o="ListFilms_link__4i0si",u="ListFilms_box_title__y4GFf",l="ListFilms_text_name__Hxp0l",p="ListFilms_text_average__T4IME",m="ListFilms_image__FPQ0L",f=n(184),d=function(t){var e=t.movies,n=t.title,d=(0,a.TH)();return console.log(e),(0,f.jsxs)(f.Fragment,{children:[n&&(0,f.jsx)("h1",{className:i,children:"Movies Trending"}),(0,f.jsx)("ul",{className:s,children:null===e||void 0===e?void 0:e.map((function(t){var e=t.id,n=t.title,a=t.poster_path,i=t.vote_average,s="https://image.tmdb.org/t/p/w500".concat(a);return(0,f.jsx)("li",{className:c,children:(0,f.jsxs)(r.rU,{to:"/movies/".concat(e),state:{from:d},className:o,children:[null===a?(0,f.jsx)("img",{width:"300",src:"https://st2.depositphotos.com/3643473/6205/i/950/depositphotos_62059967-stock-photo-3d-man-with-a-binocular.jpg",alt:n,className:m}):(0,f.jsx)("img",{width:"300",src:s,alt:n,className:m}),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("p",{className:l,children:n}),(0,f.jsx)("p",{className:p,children:i.toFixed(1)})]})]})},e)}))})]})}},582:function(t,e,n){n.d(e,{Oh:function(){return m},gL:function(){return p},kh:function(){return f},m9:function(){return l},ru:function(){return u}});var r=n(861),a=n(757),i=n.n(a),s=n(243),c="cb9f3ba1d1c3cba355cedf3c9174f5a3",o="https://api.themoviedb.org/3";s.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/trending/movie/day?api_key=").concat(c));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s.Z.get("/search/movie",{params:{query:t,language:"en - US",page:e,include_adult:!0,api_key:c,total_pages:8}}).then((function(t){return t.data}))},p=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"?api_key=").concat(c,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),m=function(t){return s.Z.get("/movie/".concat(t,"/credits"),{params:{api_key:c,language:"en - US"}}).then((function(t){return t.data}))},f=function(){var t=(0,r.Z)(i().mark((function t(e){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("".concat(o,"/movie/").concat(e,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=562.4f500adf.chunk.js.map