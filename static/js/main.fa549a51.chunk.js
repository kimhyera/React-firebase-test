(this["webpackJsonpfirebase-test"]=this["webpackJsonpfirebase-test"]||[]).push([[0],{53:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},75:function(e,t,c){},95:function(e,t,c){},96:function(e,t,c){},97:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(25),s=c.n(a),r=c(10),i=c(5),l=(c(53),c(0)),o=function(e){var t=e.authService,c=Object(n.useRef)(null),a=Object(n.useRef)(null);Object(n.useEffect)((function(){}),[]);return Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsxs)("ul",{className:"nav",children:[Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/main",className:"nav-link",children:"main"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/goods",className:"nav-link",children:"goods"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/crud",className:"nav-link",children:"Crud"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/board",className:"nav-link",children:"board"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/board",className:"nav-link",children:"board"})}),Object(l.jsx)("li",{className:"nav-item",children:Object(l.jsx)(r.b,{to:"/news",className:"nav-link",children:"news"})})]}),Object(l.jsxs)("div",{className:"membership ml-auto",children:[Object(l.jsx)(r.b,{to:"/join",className:" button button-primary",children:"\ud68c\uc6d0\uac00\uc785"}),Object(l.jsx)(r.b,{to:"/login",ref:a,className:"ml-3 button button-primary ",children:"\ub85c\uadf8\uc778"}),0==t.state.login?Object(l.jsx)("button",{className:"ml-3 button button-primary",onClick:function(){t.logout(),t.state.login=!0,console.log(c,a),alert("\ub85c\uadf8\uc544\uc6c3 \ub418\uc5c8\uc2b5\ub2c8\ub2e4.")},ref:c,children:"Logout"}):""]})]})})})},j=(c(62),function(){return Object(l.jsx)("footer",{className:"footer",children:Object(l.jsx)("div",{className:"wrapper",children:Object(l.jsxs)("p",{children:["\xa9 ",(new Date).getFullYear()," rarara "]})})})}),d=(c(63),c(11)),u=c(6),b=c(19),h=c.n(b),m=h.a.initializeApp({apiKey:"AIzaSyDCenrpuRYRyMMd0lXFuEMq0FH0W1m1en0",authDomain:"shop-toy-project.firebaseapp.com",databaseURL:"https://shop-toy-project-default-rtdb.firebaseio.com",projectId:"shop-toy-project",storageBucket:"shop-toy-project.appspot.com",messagingSenderId:"284901181517",appId:"1:284901181517:web:d623339d1cf647f06f7404"}),O=function(){return Object(l.jsx)("div",{className:"main wrapper",children:Object(l.jsx)("section",{className:"sale_section",children:"main"})})},x=function(){return Object(l.jsx)("table",{className:"table",children:Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(l.jsx)("th",{children:"\uc0c1\ud488\uc0c1\ud0dc"}),Object(l.jsx)("th",{children:"\ub9e4\uc7a5\ud310\ub9e4\uac00"}),Object(l.jsx)("th",{})]})})})},f=c(20),p=c.n(f),v=c(26),g=(c(75),function(e){var t=e.authService,c=Object(i.f)(),a=function(e){c.push({pathname:"/main",state:{id:e}})},s=function(){t.logout()},r=function(e){t.state.login=!0,console.log(t.state.login),t.socialLogin(e.currentTarget.name).then((function(e){return a(e.user.uid)}))};Object(n.useEffect)((function(){t.onAuthChange((function(e){e&&a(e.uid)}))}));var o=Object(n.useState)(""),j=Object(u.a)(o,2),d=j[0],b=j[1],h=Object(n.useState)(""),m=Object(u.a)(h,2),O=m[0],x=m[1],f=Object(n.useState)(""),g=Object(u.a)(f,2),N=g[0],S=g[1],y=function(e){var t=e.target,c=t.name,n=t.value;"email"===c?b(n):"password"===c&&x(n)},k=function(){var e=Object(v.a)(p.a.mark((function e(c){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.preventDefault(),e.prev=1,e.next=4,t.createUserWithEmailAndPassword(d,O);case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),S(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("section",{class:"login-wrap",children:[Object(l.jsxs)("section",{className:"login ",children:[Object(l.jsx)("h5",{className:"mb-3 text-center h3 py-4",children:"Login"}),Object(l.jsx)("h5",{className:"mb-3 text-center h5 mt-4",children:"SNS \uacc4\uc815"}),Object(l.jsxs)("ul",{className:"list",children:[Object(l.jsx)("li",{className:"item",children:Object(l.jsx)("button",{onClick:r,name:"Google",children:"Google"})}),Object(l.jsx)("li",{className:"item",children:Object(l.jsx)("button",{onClick:r,name:"Github",children:"Github"})})]}),Object(l.jsx)("h5",{className:"mb-3 text-center h5 mt-4",children:"\uc77c\ubc18 \uacc4\uc815"}),Object(l.jsxs)("form",{onSubmit:k,className:"join-form",children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{className:"form-input",name:"email",type:"text",placeholder:"Email",required:!0,value:d,onChange:y})}),Object(l.jsx)("div",{className:"mt-2",children:Object(l.jsx)("input",{className:"form-input",name:"password",type:"password",placeholder:"Password",required:!0,value:O,onChange:y})}),Object(l.jsx)("div",{class:"text-center",children:Object(l.jsx)("input",{type:"submit",className:"button button-primary mt-2",value:"\ud68c\uc6d0\uac00\uc785"})}),N]})]}),Object(l.jsx)("footer",{className:"footer",children:s&&Object(l.jsx)("button",{className:"button button-praimary ml-3",onClick:s,children:"\ub85c\uadf8\uc544\uc6c3"})})]})}),N=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"business",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"entertainment",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"health",text:"\uac74\uac15"},{name:"science",text:"\uacfc\ud559"},{name:"sports",text:"\uc2a4\ud3ec\uce20"},{name:"technology",text:"\uae30\uc220"}],S=function(e){e.onSelect;return Object(l.jsx)("div",{children:N.map((function(e){return Object(l.jsx)(r.c,{className:"mr-4",activeClassName:"active",exact:"all"===e.name,to:"all"===e.name?"/":"/".concat(e.name),children:e.text},e.name)}))})},y=function(e){var t=e.article,c=t.title,n=t.description,a=t.url,s=t.urlToImage;return Object(l.jsxs)("div",{className:"col-3",children:[s&&Object(l.jsx)("div",{className:"thumbnail",children:Object(l.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:Object(l.jsx)("img",{src:s,alt:"thumbnail"})})}),Object(l.jsxs)("div",{className:"contents",children:[Object(l.jsx)("h2",{children:Object(l.jsx)("a",{href:a,target:"_blank",rel:"noopener noreferrer",children:c})}),Object(l.jsx)("p",{children:n})]})]})},k=c(42),w=c.n(k);var C=function(e){var t=e.category,c=function(e,t){var c=Object(n.useState)(!1),a=Object(u.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)(null),l=Object(u.a)(i,2),o=l[0],j=l[1],d=Object(n.useState)(null),b=Object(u.a)(d,2),h=b[0],m=b[1];return Object(n.useEffect)((function(){!function(){var t=Object(v.a)(p.a.mark((function t(){var c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r(!0),t.prev=1,t.next=4,e();case 4:c=t.sent,j(c),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),m(t.t0);case 11:r(!1);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}()()}),t),[s,o,h]}((function(){var e="all"===t?"":"&category=".concat(t);return w.a.get("https://newsapi.org/v2/top-headlines?country=kr".concat(e,"&apiKey=0a8c4202385d4ec1bb93b7e277b3c51f"))}),[t]),a=Object(u.a)(c,3),s=a[0],r=a[1],i=a[2];if(s)return Object(l.jsx)("div",{children:"\ub300\uae30\uc911..."});if(!r)return null;if(i)return Object(l.jsx)("div",{children:"\uc5d0\ub7ec \ubc1c\uc0dd!"});var o=r.data.articles;return Object(l.jsx)("div",{className:"row",children:o.map((function(e){return Object(l.jsx)(y,{article:e},e.url)}))})},G=function(e){e.match;return Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(S,{}),Object(l.jsx)(C,{category:"all"})]})},P=c(22);var D=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1],s=m.database().ref("/goods");Object(n.useEffect)((function(){s.on("value",(function(e){var t=e.val(),c=[];for(var n in t)c.push(Object(d.a)(Object(d.a)({},t[n]),{},{id:n}));a(c)}))}),[]),console.log(c);var r=Object(n.useRef)(c.length),i=Object(n.useState)({sGoodsName:"",iSellPrice:""}),o=Object(u.a)(i,2),j=o[0],b=o[1],h=function(e){b(Object(d.a)(Object(d.a)({},j),{},Object(P.a)({},e.target.name,e.target.value)))},O=Object(n.useState)({id:"",sGoodsName:"",iSellPrice:""}),x=Object(u.a)(O,2),f=x[0],p=x[1],v=function(e){p(Object(d.a)(Object(d.a)({},f),{},Object(P.a)({},e.target.name,e.target.value)))};return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:"text-center py-5",children:Object(l.jsx)("h2",{children:"React Firebase Database CRUD"})}),Object(l.jsxs)("div",{className:"row container",children:[Object(l.jsxs)("div",{className:"col-4 ",children:[Object(l.jsx)("h4",{className:"f3 mb-4",children:"\uc785\ub825\ud3fc"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{name:"sGoodsName",value:j.sGoodsName,placeholder:"\uc0c1\ud488\uba85",onChange:h})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{name:"iSellPrice",value:j.iSellPrice,placeholder:"\ud310\ub9e4\uac00\uaca9",onChange:h})}),Object(l.jsx)("button",{onClick:function(){var e={id:r.current,sGoodsName:j.sGoodsName,iSellPrice:Number(j.iSellPrice),likeCount:0,sSellStatus:!0,iaccumulate:0};a(c.concat(e)),s.push().set(e).then((function(){return console.log("Data updated.")})),b({sGoodsName:"",iSellPrice:""}),r.current+=1},className:"button mt-4",children:"\ub4f1\ub85d"})]}),Object(l.jsxs)("div",{className:"col-8",children:[Object(l.jsx)("h4",{className:"f3 mb-4",children:"\uc0c1\ud488\ub9ac\uc2a4\ud2b8"}),Object(l.jsx)("ul",{className:"goods_list",children:c.map((function(e){return Object(l.jsxs)("li",{children:[Object(l.jsx)("span",{className:"title mr-2 text-primary",onClick:function(t){return function(e,t){e.target.classList.toggle("active")}(t,e.id)},children:e.sGoodsName}),Object(l.jsxs)("span",{className:"mr-4",children:["\uac00\uaca9: ",e.iSellPrice]}),Object(l.jsxs)("button",{onClick:function(){return t=e.id,void a(c.map((function(e){return e.id===t?Object(d.a)(Object(d.a)({},e),{},{likeCount:e.likeCount+=1}):e})));var t},children:["\u2764 ",e.likeCount]}),Object(l.jsx)("button",{onClick:function(){return function(e){var t=e;m.database().ref("/goods/".concat(e)).on("value",(function(e){var c=e.val();console.log("data",c),p(Object(d.a)(Object(d.a)({},f),{},{id:t,sGoodsName:c.sGoodsName,iSellPrice:c.iSellPrice}))}))}(e.id)},className:"button sm ml-4",children:"\uc218\uc815"}),Object(l.jsx)("button",{onClick:function(){return function(e){console.log(e);var t=c.filter((function(t){return t.id!==e}));console.log(t),a(t),m.database().ref("/goods/".concat(e)).remove()}(e.id)},className:"button sm ml-1",children:"\uc0ad\uc81c"})]},e.id)}))}),Object(l.jsxs)("div",{className:"mt-4",children:[Object(l.jsx)("h4",{className:"f3 mb-2",children:"\uc218\uc815\ud3fc"}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{name:"sGoodsName",value:f.sGoodsName,placeholder:"\uc0c1\ud488\uba85",onChange:v})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{name:"iSellPrice",value:f.iSellPrice,placeholder:"\ud310\ub9e4\uac00\uaca9",onChange:v})}),Object(l.jsx)("button",{onClick:function(){return e=f.id,void m.database().ref("/goods/".concat(e)).update(f);var e},className:"button mt-4",children:"\uc218\uc815\uc644\ub8cc"})]})]})]})]})},E=function(){fetch("/linkage/pos_v2/contents/setGoods/goods/data/listData.php");var e=Object(n.useState)([]),t=Object(u.a)(e,2),c=t[0],a=t[1];return Object(n.useEffect)((function(){fetch("/linkage/pos_v2/contents/setGoods/goods/data/listData.php",{method:"POST",headers:new Headers({"Content-Type":"application/x-www-form-urlencoded"}),body:"iPageNo=".concat(1,"&iPageSize=",8,"&sStCode=S000001&sShopType=",1,"&sFindType=",1)}).then((function(e){return e.json()})).then((function(e){var t=e[0].OUT_ROW1;console.log(t),a(t)})).catch((function(e){console.log(e)}))}),[]),Object(l.jsx)("div",{className:"home wrapper",children:Object(l.jsxs)("section",{className:"sale_section mt-4",children:[Object(l.jsx)("h2",{className:"h4",children:"\uc0c1\ud488\ub9ac\uc2a4\ud2b8"}),Object(l.jsxs)("table",{className:"table-custom text-center",children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{children:"\uc0c1\ud488\uba85"}),Object(l.jsx)("th",{children:"\uc0c1\ud488\uc0c1\ud0dc"}),Object(l.jsx)("th",{children:"\ub9e4\uc7a5\ud310\ub9e4\uc0c1\ud0dc"}),Object(l.jsx)("th",{children:"\uc628\ub77c\uc778\ud310\ub9e4\uc0c1\ud0dc"}),Object(l.jsx)("th",{children:"\ub9e4\uc7a5\ud310\ub9e4\uac00"}),Object(l.jsx)("th",{children:Object(l.jsx)("br",{})})]})}),Object(l.jsx)("tbody",{id:"product-list",children:c.map((function(e){return Object(l.jsxs)("tr",{"data-id":e.iStGoodsNo,children:[Object(l.jsxs)("td",{children:["[",e.iStGoodsNo,"] ",Object(l.jsx)("br",{}),Object(l.jsxs)("span",{className:"product-name",children:[" ",e.sGoodsName]})]}),Object(l.jsx)("td",{children:"1"===e.sDataStatus?"\uc815\uc0c1":"\ud310\ub9e4\uc548\ud568"}),Object(l.jsx)("td",{children:"1"===e.sSellStatus?"\ud310\ub9e4\uc911":"\ud310\ub9e4\uc548\ud568"}),Object(l.jsx)("td",{children:"1"===e.sOrdStatus?"\ud310\ub9e4\uc911":"\ud310\ub9e4\uc548\ud568"}),Object(l.jsxs)("td",{children:[e.iSellPrice,"\uc6d0"]})]},e.iStGoodsNo)}))})]})]})})};function R(e){e.store;var t=e.authService;return Object(l.jsxs)("div",{children:[Object(l.jsxs)(r.a,{basename:"/React-firebase-test",children:[Object(l.jsx)(o,{authService:t}),Object(l.jsxs)(i.c,{children:[Object(l.jsx)(i.a,{path:["/","/main"],exact:!0,children:Object(l.jsx)("div",{className:"contents",children:Object(l.jsx)(O,{})})}),Object(l.jsx)(i.a,{path:"/goods",children:Object(l.jsx)("div",{className:"contents",children:Object(l.jsx)(E,{})})}),Object(l.jsx)(i.a,{path:"/crud",children:Object(l.jsx)("div",{className:"contents",children:Object(l.jsx)(D,{})})}),Object(l.jsx)(i.a,{path:"/board",children:Object(l.jsx)("div",{className:"contents",children:Object(l.jsx)(x,{})})}),Object(l.jsx)(i.a,{path:"/login",children:Object(l.jsx)("div",{className:"contents",children:Object(l.jsx)(g,{authService:t})})}),Object(l.jsx)(i.a,{path:"/:category?",children:Object(l.jsx)("div",{className:"contents",children:Object(l.jsx)(G,{})})})]})]}),Object(l.jsx)(j,{})]})}var I=c(43),A=c(44),L=c(48),_=c(47),T=function(e){Object(L.a)(c,e);var t=Object(_.a)(c);function c(){var e;Object(I.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={login:!1},e}return Object(A.a)(c,[{key:"socialLogin",value:function(e){var t=new(h.a.auth["".concat(e,"AuthProvider")]);return m.auth().signInWithPopup(t)}},{key:"login",value:function(){}},{key:"logout",value:function(){h.a.auth().signOut(),this.setState({login:!1}),console.log(this.state.login)}},{key:"onAuthChange",value:function(e){h.a.auth().onAuthStateChanged((function(t){e(t)}))}}]),c}(n.Component),F=c(27),U=c(46),W=[{iSellPrice:100,iaccumulate:750,id:0,likeCount:0,sGoodsName:"\ubd88\uace0\uae30 \ud53c\uc790",sSellStatus:1},{iSellPrice:100,iaccumulate:750,id:0,likeCount:2,sGoodsName:"\ubd88\uace0\uae30 \ud53c\uc7902",sSellStatus:1}];var q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LIKE":return console.log("\uc88b\uc544\uc694!!");default:return e}},z={login:!1};var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{login:!0};default:return e}},M=Object(F.a)({goods:q,user:K}),B=(c(95),c(96),Object(F.b)(M));console.log(B.getState());var H=new T;s.a.render(Object(l.jsx)(U.a,{store:B,children:Object(l.jsx)(R,{authService:H})}),document.getElementById("root"))}},[[97,1,2]]]);
//# sourceMappingURL=main.fa549a51.chunk.js.map