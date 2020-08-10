(this["webpackJsonpreddit-redux"]=this["webpackJsonpreddit-redux"]||[]).push([[0],{71:function(e,t,a){e.exports=a(91)},76:function(e,t,a){},82:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),i=a(7),o=a.n(i),l=a(65),s=(a(76),a(16)),u=a(111),m=a(114),d=a(115),p=a(44),E=a(58),v=a.n(E),f=function(e){var t=e.onMenuToggle;return c.a.createElement(u.a,{position:"sticky"},c.a.createElement(m.a,null,c.a.createElement(d.a,{edge:"start",color:"inherit",onClick:t,"aria-label":"togle posts"},c.a.createElement(v.a,null)),c.a.createElement(p.a,{variant:"h6"},"Reddit Top posts")))},h=a(116),_=a(117),b=a(125),O=a(118),S=a(119),g=a(38),j=a(39),w=a(63),y=function(){function e(){Object(g.a)(this,e)}return Object(j.a)(e,null,[{key:"getTimeAgo",value:function(e){return Object(w.a)(e,"en_us")}}]),e}(),D=(a(82),function(e){var t=e.post;return c.a.createElement(h.a,null,t&&c.a.createElement(c.a.Fragment,null,c.a.createElement(_.a,{avatar:c.a.createElement(b.a,{"aria-label":t.author},t.author[0].toUpperCase()),title:t.title,subheader:y.getTimeAgo(new Date(t.created_utc))}),t.url&&c.a.createElement(O.a,{title:t.title},!t.media&&c.a.createElement("img",{className:"post-detail__image",alt:t.title,src:t.url}),t.media&&c.a.createElement("div",{className:"post-detail__video"},c.a.createElement("video",{controls:!0,width:t.media.reddit_video.width,height:t.media.reddit_video.height,src:t.media.reddit_video.fallback_url})))),c.a.createElement(S.a,null,!t&&c.a.createElement(p.a,{variant:"h3",color:"textPrimary"},"Choose a Post to checkout its details")))}),P=a(123),T=a(122),N=a(62),k=a.n(N),L=a(25),A=a.n(L),I=a(40),C=a(27),x=a(14),M=a(64);!function(e){e.POSTS_LOADED="postsLoaded",e.POSTS_LOADING="postsLoading",e.POSTS_DISMISS_ALL="postDismissAll",e.POST_SELECTED="postSelected",e.POST_DISMISSED="postDismissed"}(n||(n={}));var F=function(e,t){return{type:n.POSTS_LOADED,payload:{posts:e,slice:t}}},G=function(e){return{type:n.POSTS_LOADING,payload:{loading:e}}},B=a(43),J=a(59),W={posts:[],postsLoading:!1,slice:{current:""}},R=Object(C.createStore)((function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.POSTS_LOADED:var r={current:(e=a).payload.slice},c=Object(M.a)(e.payload.posts),i=c.map((function(e){var t={author:e.author,title:e.title,id:e.id,thumbnail:e.thumbnail,created_utc:e.created_utc,num_comments:e.num_comments,url:e.url,media:e.media,read:!1};return t.created_utc=1e3*t.created_utc,t}));return Object(x.a)(Object(x.a)({},t),{},{posts:i,slice:r});case n.POSTS_LOADING:return e=a,Object(x.a)(Object(x.a)({},t),{},{postsLoading:e.payload.loading});case n.POST_SELECTED:var o=(e=a).payload.post.id,l=Object(B.cloneDeep)(t.posts),s=l.find((function(e){return e.id===o}));return s?(s.read=!0,Object(x.a)(Object(x.a)({},t),{},{posts:l,selectedPost:s})):t;case n.POST_DISMISSED:var u=(e=a).payload.post.id,m=Object(B.cloneDeep)(t.posts),d=Object(B.remove)(m,(function(e){return e.id!==u}));return Object(x.a)(Object(x.a)({},t),{},{posts:d,selectedPost:void 0});case n.POSTS_DISMISS_ALL:return Object(x.a)(Object(x.a)({},t),{},{posts:[],selectedPost:void 0});default:return t}}),Object(J.devToolsEnhancer)({})),U=(a(85),a(86),a(66)),Y=function(e){var t=e.selected,a=e.children;return c.a.createElement(U.a,{className:"post-item-layout",elevation:t?24:2},c.a.createElement("div",{className:"post-item-layout__inner-container"},a))};Y.defaultProps={selected:!1};var $=Y,q=a(60),z=a.n(q),H=a(61),K=a.n(H),Q=function(e){var t=e.selected,a=e.post,n=e.onClick,r=e.onDismiss;return c.a.createElement($,{selected:t},c.a.createElement("div",{className:"post-item__inner-container",onClick:n},c.a.createElement("div",{className:"post-item__info"},c.a.createElement("div",null,c.a.createElement(p.a,{variant:"subtitle1"},"Title: ",a.title)),c.a.createElement("div",null,c.a.createElement(p.a,{variant:"subtitle2"},"Author: ",a.author)),c.a.createElement("div",null,c.a.createElement(p.a,{variant:"overline"},"Entry Date: ",y.getTimeAgo(new Date(a.created_utc)))),c.a.createElement("div",null,c.a.createElement(p.a,{variant:"caption"},a.num_comments," comment/s")),!a.read&&c.a.createElement("div",{className:"post-item__new-post"},c.a.createElement(z.a,{color:"secondary"}),c.a.createElement("span",{className:"post-item__new-post-label"},"New Post !")),r&&c.a.createElement("div",{className:"post-item__dismiss-button"},c.a.createElement(K.a,{onClick:function(){r&&r(a)}}))),a.thumbnail&&c.a.createElement("img",{className:"post-item__thumbnail",width:140,src:a.thumbnail,alt:a.title})))},V=a(121),X={limit:5,raw_json:1,after:"",before:""},Z=function(){function e(){Object(g.a)(this,e)}return Object(j.a)(e,null,[{key:"loadPosts",value:function(){var e=Object(I.a)(A.a.mark((function e(t){var a,n,r,c;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign({},X,t),n=Object.values(a),r=Object.keys(a).map((function(e,t){return"".concat(e,"=").concat(n[t])})).join("&"),c="".concat(this.baseApi).concat(this.topPosts),r&&(c+="?".concat(r)),e.abrupt("return",fetch(c).then((function(e){return e.json()})));case 6:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()}]),e}();Z.baseApi="https://www.reddit.com",Z.topPosts="/top.json";var ee=Z,te=(a(87),a(120)),ae=(a(88),function(){return c.a.createElement($,null,c.a.createElement("div",{className:"post-item-loading"},c.a.createElement("div",{className:"post-item-loading__info-container"},c.a.createElement("div",null,c.a.createElement(te.a,{animation:"wave",variant:"text",width:"20%",height:40})),c.a.createElement("div",null,c.a.createElement(te.a,{animation:"wave",variant:"text",width:"100%",height:40}),c.a.createElement(te.a,{animation:"wave",variant:"text",width:"100%",height:40}))),c.a.createElement("div",{className:"post-item-loading__thumbnail-container"},c.a.createElement(te.a,{animation:"wave",variant:"rect",width:"100%",height:"100%"}))))}),ne=function(e){var t=Object(s.b)((function(e){return e.posts})),a=Object(s.b)((function(e){return e.selectedPost})),i=Object(s.b)((function(e){return e.slice})),o=Object(s.b)((function(e){return e.postsLoading}));Object(r.useEffect)((function(){l()}),[]);var l=function(){var e=Object(I.a)(A.a.mark((function e(t){var a,n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R.dispatch(G(!0)),e.next=3,ee.loadPosts(t);case 3:a=e.sent,n=a.data.children.map((function(e){return e.data})),r=a.data.after||"",R.dispatch(F(n,r)),R.dispatch(G(!1));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(e){return e.id===(null===a||void 0===a?void 0:a.id)},m=function(e){R.dispatch(function(e){return{type:n.POST_DISMISSED,payload:{post:e}}}(e))},d=function(t){R.dispatch(function(e){return{type:n.POST_SELECTED,payload:{post:e}}}(t)),e.onSelection(t)};return c.a.createElement(c.a.Fragment,null,!t.length&&!o&&c.a.createElement($,null,c.a.createElement(p.a,{variant:"subtitle1"},"No posts to show.")),o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,null),c.a.createElement(ae,null),c.a.createElement(ae,null)),!o&&t.map((function(e){return c.a.createElement(Q,{key:e.id,selected:u(e),onClick:function(){d(e)},onDismiss:function(){m(e)},post:e})})),c.a.createElement($,null,c.a.createElement("div",{className:"posts-list__posts-pagination"},c.a.createElement(V.a,{variant:"contained",color:"secondary",onClick:function(){l({before:i.current})}},"Prev"),t.length?c.a.createElement(V.a,{variant:"contained",color:"secondary",onClick:function(){R.dispatch({type:n.POSTS_DISMISS_ALL})}},"Dismiss All"):null,c.a.createElement(V.a,{variant:"contained",color:"secondary",onClick:function(){l({after:i.current})}},"Next"))))},re=function(){var e=Object(s.b)((function(e){return e.selectedPost})),t=c.a.useState(!0),a=Object(l.a)(t,2),n=a[0],r=a[1],i=function(){r(!n)},o="app__container";return o+=n?" app__container--sidenav-opened":"",c.a.createElement("div",{className:o},c.a.createElement(f,{onMenuToggle:i}),c.a.createElement(P.a,{variant:"persistent",anchor:"left",open:n,className:"app__drawer"},c.a.createElement("div",{className:"app__posts-container"},c.a.createElement("div",{className:"app__posts-container-title"},c.a.createElement(d.a,{onClick:i},c.a.createElement(k.a,null)),c.a.createElement(p.a,{variant:"subtitle1",component:"span"},"Checkout Your Top Posts!")),c.a.createElement(T.a,null),c.a.createElement(T.a,null),c.a.createElement(ne,{onSelection:function(){r(!1)}}))),c.a.createElement("div",{className:"app__inner-container"},c.a.createElement("div",{className:"app__post-detail-container"},c.a.createElement(D,{post:e}))))};a(89),a(90),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce=a(124);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(ce.b,{injectFirst:!0},c.a.createElement(s.a,{store:R},c.a.createElement(re,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[71,1,2]]]);
//# sourceMappingURL=main.c1b5c57b.chunk.js.map