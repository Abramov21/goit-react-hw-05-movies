"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[642],{642:function(e,t,n){n.r(t),n.d(t,{Movies:function(){return g},default:function(){return b}});var r=n(439);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var o=n(433),s=n(791),u=n(87),l="SearchForm_Searchbar__TfPCD",m="SearchForm_SearchForm__jbIQn",f="SearchForm_SearchFormBtn__F3BXT",p="SearchForm_SearchFormInput__jntvc",_=n(184),h=function(){var e,t=(0,u.lr)(),n=(0,r.Z)(t,2),a=n[0],i=n[1],h=(0,s.useMemo)((function(){return Object.fromEntries((0,o.Z)(a))}),[a]),d=(0,s.useState)(null!==(e=h.search)&&void 0!==e?e:""),v=(0,r.Z)(d,2),g=v[0],b=v[1];return(0,_.jsx)("header",{className:l,children:(0,_.jsxs)("form",{onSubmit:function(e){e.preventDefault(),g.trim()?i((function(e){return c(c({},h),{},{search:g})})):alert("Please, enter your request")},className:m,children:[(0,_.jsx)("button",{type:"submit",className:f,children:(0,_.jsx)("span",{children:"Search"})}),(0,_.jsx)("input",{className:p,type:"text",value:g,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){return b(e.target.value)}})]})})},d=n(582),v=n(67),g=function(){var e=(0,s.useState)([]),t=(0,r.Z)(e,2),n=t[0],a=t[1],i=(0,s.useState)(1),c=(0,r.Z)(i,2),o=c[0],l=c[1],m=(0,u.lr)(),f=(0,r.Z)(m,1)[0].get("search"),p=function(){return(0,_.jsx)("button",{onClick:function(){console.log(123),l((function(e){return e+1}))},children:"load more"})};return(0,s.useEffect)((function(){f&&(0,d.m9)(f,o).then((function(e){console.log(e),a(e.results)})).catch((function(e){return console.log(e)}))}),[f,o]),(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(h,{}),n.length>0?(0,_.jsx)(v.K,{movies:n}):(0,_.jsx)("h1",{children:"sadasdsadsd"}),(0,_.jsx)(p,{})]})},b=g},67:function(e,t,n){n.d(t,{K:function(){return f}});var r=n(433),a=n(439),i=n(87),c=n(689),o={mainTitle:"ListFilms_mainTitle__I7yBu",buttonLike:"ListFilms_buttonLike__COiqj",list:"ListFilms_list__uTo02",list__item:"ListFilms_list__item__1qvcv",link:"ListFilms_link__4i0si",box_title:"ListFilms_box_title__y4GFf",text_name:"ListFilms_text_name__Hxp0l",text_average:"ListFilms_text_average__T4IME",image:"ListFilms_image__FPQ0L",box_item:"ListFilms_box_item__KtOiu"},s=n(791),u=s.useEffect,l=s.useState,m=n(184),f=function(e){var t=e.movies,n=e.title,s=(0,c.TH)(),f=function(e,t){var n=localStorage.getItem(e),r=n?JSON.parse(n):t,i=l(r),c=(0,a.Z)(i,2),o=c[0],s=c[1];return u((function(){localStorage.setItem(e,JSON.stringify(o))}),[e,o]),[o,s]}("likeMovie",[]),p=(0,a.Z)(f,2),_=p[0],h=p[1];return(0,m.jsxs)("div",{className:o.box,children:[n&&(0,m.jsx)("h1",{className:o.mainTitle,children:"Movies Trending"}),(0,m.jsx)("ul",{className:o.list,children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,n=e.title,a=e.poster_path,c=e.vote_average,u="https://image.tmdb.org/t/p/w500".concat(a);return(0,m.jsxs)("li",{className:o.list__item,children:[(0,m.jsx)("button",{className:o.buttonLike,onClick:function(){return function(e,t,n,a){var i=JSON.parse(localStorage.getItem("likeMovie")),c={id:e,title:t,poster_path:n,vote_average:a};if(i.findIndex((function(e){return e.id===c.id}))>=0){var o=i.filter((function(e){return e.id!==c.id}));h(o)}else h((function(e){return[].concat((0,r.Z)(_),[c])}))}(t,n,a,c)},children:"Like"}),(0,m.jsxs)(i.rU,{to:"/movies/".concat(t),state:{from:s},className:o.link,children:[null===a?(0,m.jsx)("img",{width:"300",src:"https://st2.depositphotos.com/3643473/6205/i/950/depositphotos_62059967-stock-photo-3d-man-with-a-binocular.jpg",alt:n,className:o.image}):(0,m.jsx)("img",{width:"300",src:u,alt:n,className:o.image}),(0,m.jsxs)("div",{className:o.box_title,children:[(0,m.jsx)("p",{className:o.text_name,children:n}),(0,m.jsx)("p",{className:o.text_average,children:c.toFixed(1)})]})]})]},t)}))})]})}},582:function(e,t,n){n.d(t,{Oh:function(){return f},gL:function(){return m},kh:function(){return p},m9:function(){return l},ru:function(){return u}});var r=n(861),a=n(757),i=n.n(a),c=n(243),o="cb9f3ba1d1c3cba355cedf3c9174f5a3",s="https://api.themoviedb.org/3";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var e=(0,r.Z)(i().mark((function e(){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/trending/movie/day?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return c.Z.get("/search/movie",{params:{query:e,language:"en - US",page:t,include_adult:!0,api_key:o,total_pages:8}}).then((function(e){return e.data}))},m=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return c.Z.get("/movie/".concat(e,"/credits"),{params:{api_key:o,language:"en - US"}}).then((function(e){return e.data}))},p=function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(s,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=642.42f4d398.chunk.js.map