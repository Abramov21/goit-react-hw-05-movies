"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[829],{829:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(439),i=t(87),a=t(689),o="MovieDetailsInfo_container__2ethf",c="MovieDetailsInfo_card__rYg3B",u="MovieDetailsInfo_info__V82uv",s="MovieDetailsInfo_btn__ci2W2",l=t(791),v=t(184),d=function(e){var n,t,r,d,f,h,p,m,g,x=Math.floor(10*(null===e||void 0===e||null===(n=e.movie)||void 0===n?void 0:n.vote_average)),_="https://image.tmdb.org/t/p/w500".concat(e.movie.poster_path),j=(0,a.TH)(),k=(0,a.s0)(),w=(0,l.useRef)(null===(t=j.state)||void 0===t?void 0:t.from);return(0,v.jsxs)("div",{className:o,children:[(0,v.jsxs)("button",{className:s,onClick:function(){return k(w.current)},children:["Back"," "]}),(0,v.jsxs)("div",{className:c,children:[(0,v.jsx)("img",{width:"300",src:_,alt:null===e||void 0===e||null===(r=e.movie)||void 0===r?void 0:r.title}),(0,v.jsxs)("div",{className:u,children:[(0,v.jsx)("h2",{children:e.movie.title}),(0,v.jsxs)("h2",{children:["Data release:",null===e||void 0===e||null===(d=e.movie)||void 0===d?void 0:d.release_date]}),(0,v.jsx)("p",{children:"User Score: ".concat(x,"%")}),(0,v.jsx)("h3",{children:"Overview"}),(0,v.jsx)("p",{children:null===e||void 0===e||null===(f=e.movie)||void 0===f?void 0:f.overview}),(0,v.jsx)("h3",{children:"Genres"}),(0,v.jsx)("p",{children:(null===e||void 0===e||null===(h=e.movie)||void 0===h||null===(p=h.genres)||void 0===p?void 0:p.length)>0?null===e||void 0===e||null===(m=e.movie)||void 0===m||null===(g=m.genres)||void 0===g?void 0:g.map((function(e){return e.name})).join(", "):"no info"})]})]}),(0,v.jsx)("div",{children:(0,v.jsxs)("ul",{children:[(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"cast",state:j,children:"Cast"})}),(0,v.jsx)("li",{children:(0,v.jsx)(i.rU,{to:"reviews",state:j,children:"Reviews"})})]})})]})},f=t(582),h=function(){var e=(0,a.UO)().movieId,n=(0,l.useState)({}),t=(0,r.Z)(n,2),i=t[0],o=t[1];return(0,l.useEffect)((function(){(0,f.gL)(e).then((function(e){o(e)})).catch((function(e){return console.log(e.message)}))}),[e]),(0,v.jsx)("main",{children:(0,v.jsxs)("div",{children:[(0,v.jsx)(d,{movie:i}),(0,v.jsx)(a.j3,{})]})})}},582:function(e,n,t){t.d(n,{Oh:function(){return d},gL:function(){return v},kh:function(){return f},m9:function(){return l},ru:function(){return s}});var r=t(861),i=t(757),a=t.n(i),o=t(243),c="cb9f3ba1d1c3cba355cedf3c9174f5a3",u="https://api.themoviedb.org/3";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var e=(0,r.Z)(a().mark((function e(){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/trending/movie/day?api_key=").concat(c));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o.Z.get("/search/movie",{params:{query:e,language:"en - US",page:n,include_adult:!0,api_key:c,total_pages:8}}).then((function(e){return e.data}))},v=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(n,"?api_key=").concat(c,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(e){return o.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:c,language:"en - US"}}).then((function(e){return e.data}))},f=function(){var e=(0,r.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("".concat(u,"/movie/").concat(n,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=829.9ab4416f.chunk.js.map