(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{214:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return d})),n.d(e,"c",(function(){return m})),n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return h}));n(18);var r=n(49),o=n.n(r),c=(n(215),n(69)),l=function(t,e,n,r){o.a.auth().signInWithEmailAndPassword(t,e).then((function(t){h("loginCount",t.user.uid),n(t.user.uid)})).catch((function(t){r(t.message)}))},d=function(t){o.a.auth().signOut().then(t)},m=function(t){var e=t.uid,n=t.city,r=t.nickname;return new Promise((function(t,o){c.b.ref("users/".concat(e)).update({city:n,nickname:r},(function(e){e?o(e):t()}))}))},f=function(t){return new Promise((function(e){c.b.ref("users/".concat(t)).once("value").then((function(t){return e(t.val())}))}))},h=function(t,e){return new Promise((function(n,r){console.log("rrrr","users/".concat(e,"/").concat(t)),c.b.ref("users/".concat(e,"/").concat(t)).transaction((function(t){return null===t?1:t+1}),(function(t,e){null===t&&e&&n(),r(t)}))}))}},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return y})),n.d(e,"d",(function(){return _})),n.d(e,"c",(function(){return k})),n.d(e,"b",(function(){return C})),n.d(e,"g",(function(){return O})),n.d(e,"f",(function(){return S})),n.d(e,"e",(function(){return P}));n(93),n(28),n(50),n(20),n(70);var r=n(13),o=(n(37),n(5)),c=(n(18),n(69)),l=n(49),d=n.n(l),m=(n(215),n(213)),f=n.n(m),h=n(214),v=n(217);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=function(){return new Promise((function(t){d.a.auth().onAuthStateChanged((function(e){t(!!e&&e.uid)}))}))},y=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(t,e){w()&&c.b.ref("commentReply").push(x({},t,{uid:e}),(function(t){if(t)alert("回復訊息出現錯誤"),console.log(t);else try{Object(h.a)("replyCount",e)}catch(t){console.log("紀錄回覆數錯誤",t)}}))},k=function(t){var e=[],n={};return c.b.ref("commentReply").orderByChild("id").equalTo(t).on("child_added",function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(data=r.val(),!n[data.uid]){t.next=5;break}data.avatar=n[data.uid],t.next=9;break;case 5:return t.next=7,Object(v.a)(data.uid);case 7:data.avatar=t.sent,n[data.uid]=data.avatar;case 9:e.push(x({key:r.key},data));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e},C=function(){return new Promise((function(t,e){c.b.ref("commentRank").orderByValue().limitToLast(1).once("value",function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(r){var o,c,l,d,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.val()){n.next=8;break}return o=Object.keys(r.val())[0],n.next=4,O(o);case 4:for(d in c=n.sent,l=[],c)data=c[d],l.push(x({id:d},data));t([o,l]);case 8:e(null);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}))},O=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=c.b.ref("comment/".concat(t)).orderByChild("d").limitToLast(e),r={};return new Promise((function(t){n.on("value",function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var o,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=n.val(),e.t0=regeneratorRuntime.keys(o);case 2:if((e.t1=e.t0()).done){e.next=15;break}if(c=e.t1.value,data=o[c],!r[data.u]){e.next=9;break}data.avatar=r[data.u],e.next=13;break;case 9:return e.next=11,Object(v.a)(data.u);case 11:data.avatar=e.sent,r[data.u]=data.avatar;case 13:e.next=2;break;case 15:t(o);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},S=function(t,e,u){return new Promise((function(n){if(w()){c.b.ref("comment").child(e).push({u:u,msg:t,d:f()().format("YYYY-MM-DD HH:mm:ss")});try{Promise.all([Object(h.a)("commitCount",u),z(e)]).then((function(){return n()}))}catch(t){alert("留言失敗"),n()}}}))},z=function(t){return new Promise((function(e,n){c.b.ref("commentRank/".concat(t)).transaction((function(t){return t?t+1:1}),(function(t,r){null===t&&r&&e(),n(t)}))}))},P=function(){var t=c.b.ref("user-release");return new Promise((function(e){t.once("value",(function(n){t.set(n.val()+1),e(n.val()+1)}))}))}},217:function(t,e,n){"use strict";n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return m}));n(37);var r=n(5),o=(n(71),n(18),n(49)),c=n.n(o),l=(n(350),n(69));function d(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=l.b.ref("users");return new Promise((function(l,d){var m=c.a.storage().ref(),f={contentType:t.type},h=Date.now()+t.name,v=m.child(h).put(t,f);v.on("state_changed",n,(function(){}),Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.child(e).once("value");case 3:if(n=t.sent,!(r=n.val())||!r.filename){t.next=8;break}return t.next=8,c.a.storage().ref().child(r.filename).delete();case 8:return t.next=10,v.snapshot.ref.getDownloadURL();case 10:m=t.sent,o.child(e).update({filename:h}),l(m),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log("happen error",t.t0),d(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,15]])}))))}))}function m(t){return new Promise((function(e){l.b.ref("users").child(t).once("value",function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=n.val())||!r.filename){t.next=6;break}return t.next=4,c.a.storage().ref().child(r.filename).getDownloadURL();case 4:o=t.sent,e(o);case 6:e(null);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))}},346:function(t,e,n){var content=n(362);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("24822f1b",content,!0,{sourceMap:!1})},351:function(t,e,n){var map={"./af":219,"./af.js":219,"./ar":220,"./ar-dz":221,"./ar-dz.js":221,"./ar-kw":222,"./ar-kw.js":222,"./ar-ly":223,"./ar-ly.js":223,"./ar-ma":224,"./ar-ma.js":224,"./ar-sa":225,"./ar-sa.js":225,"./ar-tn":226,"./ar-tn.js":226,"./ar.js":220,"./az":227,"./az.js":227,"./be":228,"./be.js":228,"./bg":229,"./bg.js":229,"./bm":230,"./bm.js":230,"./bn":231,"./bn.js":231,"./bo":232,"./bo.js":232,"./br":233,"./br.js":233,"./bs":234,"./bs.js":234,"./ca":235,"./ca.js":235,"./cs":236,"./cs.js":236,"./cv":237,"./cv.js":237,"./cy":238,"./cy.js":238,"./da":239,"./da.js":239,"./de":240,"./de-at":241,"./de-at.js":241,"./de-ch":242,"./de-ch.js":242,"./de.js":240,"./dv":243,"./dv.js":243,"./el":244,"./el.js":244,"./en-SG":245,"./en-SG.js":245,"./en-au":246,"./en-au.js":246,"./en-ca":247,"./en-ca.js":247,"./en-gb":248,"./en-gb.js":248,"./en-ie":249,"./en-ie.js":249,"./en-il":250,"./en-il.js":250,"./en-nz":251,"./en-nz.js":251,"./eo":252,"./eo.js":252,"./es":253,"./es-do":254,"./es-do.js":254,"./es-us":255,"./es-us.js":255,"./es.js":253,"./et":256,"./et.js":256,"./eu":257,"./eu.js":257,"./fa":258,"./fa.js":258,"./fi":259,"./fi.js":259,"./fo":260,"./fo.js":260,"./fr":261,"./fr-ca":262,"./fr-ca.js":262,"./fr-ch":263,"./fr-ch.js":263,"./fr.js":261,"./fy":264,"./fy.js":264,"./ga":265,"./ga.js":265,"./gd":266,"./gd.js":266,"./gl":267,"./gl.js":267,"./gom-latn":268,"./gom-latn.js":268,"./gu":269,"./gu.js":269,"./he":270,"./he.js":270,"./hi":271,"./hi.js":271,"./hr":272,"./hr.js":272,"./hu":273,"./hu.js":273,"./hy-am":274,"./hy-am.js":274,"./id":275,"./id.js":275,"./is":276,"./is.js":276,"./it":277,"./it-ch":278,"./it-ch.js":278,"./it.js":277,"./ja":279,"./ja.js":279,"./jv":280,"./jv.js":280,"./ka":281,"./ka.js":281,"./kk":282,"./kk.js":282,"./km":283,"./km.js":283,"./kn":284,"./kn.js":284,"./ko":285,"./ko.js":285,"./ku":286,"./ku.js":286,"./ky":287,"./ky.js":287,"./lb":288,"./lb.js":288,"./lo":289,"./lo.js":289,"./lt":290,"./lt.js":290,"./lv":291,"./lv.js":291,"./me":292,"./me.js":292,"./mi":293,"./mi.js":293,"./mk":294,"./mk.js":294,"./ml":295,"./ml.js":295,"./mn":296,"./mn.js":296,"./mr":297,"./mr.js":297,"./ms":298,"./ms-my":299,"./ms-my.js":299,"./ms.js":298,"./mt":300,"./mt.js":300,"./my":301,"./my.js":301,"./nb":302,"./nb.js":302,"./ne":303,"./ne.js":303,"./nl":304,"./nl-be":305,"./nl-be.js":305,"./nl.js":304,"./nn":306,"./nn.js":306,"./pa-in":307,"./pa-in.js":307,"./pl":308,"./pl.js":308,"./pt":309,"./pt-br":310,"./pt-br.js":310,"./pt.js":309,"./ro":311,"./ro.js":311,"./ru":312,"./ru.js":312,"./sd":313,"./sd.js":313,"./se":314,"./se.js":314,"./si":315,"./si.js":315,"./sk":316,"./sk.js":316,"./sl":317,"./sl.js":317,"./sq":318,"./sq.js":318,"./sr":319,"./sr-cyrl":320,"./sr-cyrl.js":320,"./sr.js":319,"./ss":321,"./ss.js":321,"./sv":322,"./sv.js":322,"./sw":323,"./sw.js":323,"./ta":324,"./ta.js":324,"./te":325,"./te.js":325,"./tet":326,"./tet.js":326,"./tg":327,"./tg.js":327,"./th":328,"./th.js":328,"./tl-ph":329,"./tl-ph.js":329,"./tlh":330,"./tlh.js":330,"./tr":331,"./tr.js":331,"./tzl":332,"./tzl.js":332,"./tzm":333,"./tzm-latn":334,"./tzm-latn.js":334,"./tzm.js":333,"./ug-cn":335,"./ug-cn.js":335,"./uk":336,"./uk.js":336,"./ur":337,"./ur.js":337,"./uz":338,"./uz-latn":339,"./uz-latn.js":339,"./uz.js":338,"./vi":340,"./vi.js":340,"./x-pseudo":341,"./x-pseudo.js":341,"./yo":342,"./yo.js":342,"./zh-cn":343,"./zh-cn.js":343,"./zh-hk":344,"./zh-hk.js":344,"./zh-tw":345,"./zh-tw.js":345};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=351},353:function(t,e,n){"use strict";var r={props:{url:{type:String,default:""}}},o=(n(361),n(25)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar-wrap"},[this.url?e("img",{attrs:{src:this.url}}):e("font-awesome-icon",{attrs:{icon:"user-circle"}})],1)}),[],!1,null,"645dbe43",null);e.a=component.exports},358:function(t,e,n){var content=n(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("53cf8890",content,!0,{sourceMap:!1})},359:function(t,e,n){var content=n(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("c8a9b322",content,!0,{sourceMap:!1})},361:function(t,e,n){"use strict";var r=n(346);n.n(r).a},362:function(t,e,n){(e=n(26)(!1)).push([t.i,".avatar-wrap[data-v-645dbe43]{position:absolute;bottom:0;right:0}img[data-v-645dbe43]{width:30px;height:30px;border-radius:50%}",""]),t.exports=e},363:function(t,e,n){var content=n(403);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("d6b8164e",content,!0,{sourceMap:!1})},364:function(t,e,n){var content=n(405);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("6d7f560f",content,!0,{sourceMap:!1})},365:function(t,e,n){var content=n(407);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("16e9eceb",content,!0,{sourceMap:!1})},366:function(t,e,n){var content=n(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("729955a2",content,!0,{sourceMap:!1})},397:function(t,e,n){"use strict";var r=n(358);n.n(r).a},398:function(t,e,n){(e=n(26)(!1)).push([t.i,"@media (max-width:767px){.card[data-v-19b6d8bb]{width:100%!important}.col[data-v-19b6d8bb]{flex-basis:100%!important}}.card-title[data-v-19b6d8bb]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.card-body[data-v-19b6d8bb]{height:190px}.card-text[data-v-19b6d8bb]{height:150px}.more-link[data-v-19b6d8bb]{position:absolute;right:50px;z-index:33}",""]),t.exports=e},400:function(t,e,n){"use strict";var r=n(359);n.n(r).a},401:function(t,e,n){(e=n(26)(!1)).push([t.i,'.city-wrap{width:80px;height:80px;border-radius:50%;display:flex;justify-content:center;align-items:center;border:2px solid #aaa;box-shadow:1px 1px 2px 1px #aaa;margin-bottom:15px;cursor:pointer;position:relative}.city-wrap:hover{-webkit-animation:wheel .5s;animation:wheel .5s}.city-wrap:after{content:"";display:block;width:20px;height:4px;background-color:transparent;position:absolute;bottom:-15px;left:40%;z-index:22;transition:all 2s}.city-wrap:hover:after{background-color:#000}@-webkit-keyframes wheel{0%{transform:rotate(10deg)}50%{transform:rotate(-10deg)}to{transform:rotate(0)}}@keyframes wheel{0%{transform:rotate(10deg)}50%{transform:rotate(-10deg)}to{transform:rotate(0)}}',""]),t.exports=e},402:function(t,e,n){"use strict";var r=n(363);n.n(r).a},403:function(t,e,n){(e=n(26)(!1)).push([t.i,".comment-content{font-size:16px;text-align:left}.comment-time{font-size:14px;float:right;margin-bottom:0}.m-body{padding:10px}.reply-wrap{width:100%}.modal-header{padding:5px}.reply-item{position:relative;padding-bottom:30px;border-bottom:1px solid #aaa}.reply-time{left:0;font-size:11px}.reply-time,.user-img{position:absolute;bottom:0}.user-img{right:0}",""]),t.exports=e},404:function(t,e,n){"use strict";var r=n(364);n.n(r).a},405:function(t,e,n){(e=n(26)(!1)).push([t.i,'.line-times{height:3px;background-color:#000;position:relative;flex-shrink:0}.top-comment:after{height:38px;bottom:-38px}.bottom-comment:after,.top-comment:after{content:"";position:absolute;left:50%;width:1px;background:#aaa}.bottom-comment:after{height:50px;top:-50px}.bottom-comment,.top-comment{transition:all .5s}.bottom-comment:hover,.top-comment:hover{box-shadow:1px 1px 3px #2d2c6c;transform:rotateY(20deg)}.comment-box{border:1px solid #ccc;position:absolute;padding:5px;width:190px;height:111px;border-radius:10px;transition:all 3s}.comment-wrap{margin:30px 0;height:280px;display:flex;align-items:center;font-size:14px}.msg-wrap{width:100%;height:100%}.time-wrap{position:absolute;bottom:0;font-size:12px;background-color:#7fffd4;padding:0 2px;border-radius:4px}.comment-wrap-para{height:100%;width:100%;overflow:hidden;position:relative}',""]),t.exports=e},406:function(t,e,n){"use strict";var r=n(365);n.n(r).a},407:function(t,e,n){(e=n(26)(!1)).push([t.i,".video-background{min-width:100%;min-height:100%;opacity:.5}.front-layout{position:absolute;top:30px;left:0;right:0;font-size:16px}.service-wrap{position:relative;padding-bottom:0;font-size:0;height:522px;overflow:hidden}",""]),t.exports=e},408:function(t,e,n){"use strict";var r=n(366);n.n(r).a},409:function(t,e,n){(e=n(26)(!1)).push([t.i,".user-icon{font-size:1.4rem}",""]),t.exports=e},443:function(t,e,n){"use strict";n.r(e);n(394);var r=n(381),o={components:{OverlayScrollbarsComponent:r.OverlayScrollbarsComponent},data:function(){return{env:null}},computed:{randomDatas:function(){return this.$store.getters.randomAttractions}},mounted:function(){this.env=!0},methods:{}},c=(n(397),n(25)),l=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-result"},[n("b-container",[n("b-row",[n("b-col",[n("nuxt-link",{staticClass:"more-link",attrs:{to:"/about"}},[t._v("\n          more\n        ")]),t._v(" "),n("h5",{staticClass:"title"},[t._v("\n          隨機景點\n        ")])],1)],1),t._v(" "),n("b-row",[t.randomDatas.length>0?t._l(t.randomDatas,(function(e){return n("b-col",{key:e.Id,staticClass:"flex-grow-2 flex-md-grow-0"},[n("b-card",{staticClass:"mb-1 p-1",staticStyle:{width:"250px","font-size":"14px"},attrs:{title:e.Name,"img-src":t.env?"/tour_demo/tour.jpg":"/tour.jpg","img-alt":e.Name,"img-top":"",tag:"article","body-class":"p-1 card-body","title-tag":"h5"}},[n("OverlayScrollbarsComponent",{attrs:{options:{scrollbars:{autoHide:"scroll"}}}},[n("b-card-text",[t._v("\n                "+t._s(e.Description||e.Toldescribe)+"\n              ")])],1)],1)],1)})):t._e()],2)],1)],1)}),[],!1,null,"19b6d8bb",null).exports,d=n(399),m={components:{Carousel:d.Carousel,Slide:d.Slide},computed:{areas:function(){return this.$store.getters.areas}}},f=(n(400),Object(c.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"area-search"},[n("b-container",[n("b-row",[n("b-col",[n("h5",{staticClass:"title"},[t._v("\n          地區找景點\n        ")])])],1),t._v(" "),n("b-row",{staticClass:"pt-1"},[n("b-col",{staticClass:"d-none d-md-block"},[n("carousel",{attrs:{"per-page":6,"pagination-active-color":"#aaa"}},t._l(t.areas,(function(e){return n("Slide",{key:e},[n("nuxt-link",{staticClass:"city-wrap",attrs:{to:"/search/"+e}},[t._v("\n              "+t._s(e)+"\n            ")])],1)})),1)],1),t._v(" "),n("b-col",{staticClass:"d-none d-sm-block d-md-none"},[n("carousel",{attrs:{"per-page":4,"pagination-active-color":"#aaa"}},t._l(t.areas,(function(e){return n("Slide",{key:e},[n("nuxt-link",{staticClass:"city-wrap",attrs:{to:"/search/"+e}},[t._v("\n              "+t._s(e)+"\n            ")])],1)})),1)],1),t._v(" "),n("b-col",{staticClass:"d-sm-none"},[n("carousel",{attrs:{"per-page":3,"pagination-active-color":"#aaa"}},t._l(t.areas,(function(e){return n("Slide",{key:e},[n("nuxt-link",{staticClass:"city-wrap",attrs:{to:"/search/"+e}},[t._v("\n              "+t._s(e)+"\n            ")])],1)})),1)],1)],1)],1)],1)}),[],!1,null,null,null).exports),h=(n(37),n(5)),v=(n(360),n(72),n(216)),j=n(353),x=n(213),w=n.n(x),y={components:{avatar:j.a},props:{boxName:{default:"",required:!0,type:String},times:{default:"",required:!0,type:String},content:{default:"",required:!0,type:String},id:{default:"",required:!0,type:String},resetPopupData:{required:!0,type:Function}},data:function(){return{message:"",replys:[]}},updated:function(){if(this.id){if(!this.$store.state.authentication)return void this.$router.replace("/login");this.replys=Object(v.c)(this.id)}},methods:{clearMsg:function(){this.message=""},fillZero:function(t){return t<10?"0"+t:t},sendMsg:function(){Object(v.d)({d:w()().format("YYYY-MM-DD HH:mm:ss"),msg:this.message,id:this.id},this.$store.state.authentication),this.message=""},resetData:function(){this.resetPopupData()}}},_=(n(402),{components:{Popup:Object(c.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{id:t.boxName,size:"sm","body-class":"m-body"},on:{hidden:t.resetData},scopedSlots:t._u([{key:"modal-title",fn:function(){return[t._v("\n    評論\n  ")]},proxy:!0},{key:"modal-footer",fn:function(){return[t.replys?n("div",{staticClass:"reply-wrap"},t._l(t.replys,(function(e){return n("div",{key:e.key,staticClass:"reply-item"},[t._v("\n        "+t._s(e.msg)+"\n        "),n("div",{staticClass:"reply-time"},[t._v("\n          "+t._s(e.d)+"\n        ")]),t._v(" "),n("avatar",{attrs:{url:e.avatar}})],1)})),0):t._e(),t._v(" "),n("div",{staticClass:"reply-wrap"},[n("b-form-textarea",{attrs:{placeholder:"輸入訊息...",rows:"1"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),t._v(" "),n("b-button",{staticClass:" mt-1",attrs:{variant:"outline-danger",pill:"",size:"sm"},on:{click:t.clearMsg}},[t._v("\n        清空\n      ")]),t._v(" "),n("b-button",{staticClass:"float-right mt-1",attrs:{variant:"outline-primary",pill:"",size:"sm"},on:{click:t.sendMsg}},[t._v("\n        送出\n      ")])],1)]},proxy:!0}])},[t._v(" "),n("div",{staticClass:"d-block text-center"},[n("p",{staticClass:"comment-content"},[t._v("\n      "+t._s(t.content)+"\n    ")])]),t._v(" "),n("p",{staticClass:"comment-time"},[n("b-badge",{attrs:{pill:"",variant:"primary"}},[t._v("\n      "+t._s(t.times)+"\n    ")])],1)])}),[],!1,null,null,null).exports,OverlayScrollbarsComponent:r.OverlayScrollbarsComponent,avatar:j.a},data:function(){return{comments:[],spacePeriod:0,popupName:"msg-model",selectTime:"",selectContent:"",slideLeft:!1,id:"0",popularTour:null}},computed:{timeLineLength:function(){return 190*this.comments.length}},mounted:function(){this.comments=[],window.addEventListener("scroll",this.slideMessage)},beforeDestroy:function(){window.removeEventListener("scroll",this.slideMessage)},updated:function(){!this.slideLeft&&this.comments.length>0&&(this.slideLeft=!0)},methods:{showMsgBox:function(t){var e=this.comments.find((function(e){return e.id===t}));this.selectTime=e.d,this.selectContent=e.msg,this.id=t,this.$bvModal.show(this.popupName)},positionCommentPos:function(t){return this.slideLeft?{left:190*(t-1)+"px",top:t%2==0?"-146px":"50px"}:{left:"-1000px"}},slideMessage:function(){var t=this;return Object(h.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.$refs.hotWrap&&t.$refs.hotWrap.getBoundingClientRect(),r=Math.max(document.documentElement.clientHeight,window.innerHeight),!(n.top-r<n.height/3*-1)||t.slideLeft||0!==t.comments.length){e.next=19;break}return e.prev=3,e.next=6,Object(v.b)();case 6:o=e.sent,console.log(o,"fethData"),t.comments=o[1],c=t.$store.state.attractions.find((function(t){return t.Id===o[0]})),t.popularTour=c,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),console.log("取不到熱門留言資料");case 16:return e.prev=16,window.removeEventListener("scroll",t.slideMessage),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[3,13,16,19]])})))()},resetPopupData:function(){this.id="0",this.selectTime="",this.selectContent=""}}}),k=(n(404),Object(c.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"hotWrap",staticClass:"hot-wrap"},[n("b-container",[n("b-row",[n("b-col",[n("h5",{staticClass:"title"},[t._v("\n          熱門景點留言\n        ")])])],1),t._v(" "),n("b-row",[n("b-col",[t.popularTour?n("div",[n("div",[t._v(t._s(t.popularTour.Name))]),t._v(" "),t.popularTour?n("ul",[n("li",[t._v("地點: "+t._s(t.popularTour.Region))]),t._v(" "),n("li",[t._v("位置: "+t._s(t.popularTour.Add))]),t._v(" "),n("li",[t._v("營業時間:"+t._s(t.popularTour.Opentime))])]):t._e(),t._v(" "),n("OverlayScrollbarsComponent",[n("div",{staticClass:"comment-wrap"},[t.comments.length>0?n("div",{ref:"lineTimes",staticClass:"line-times",style:{width:t.timeLineLength+"px"}},t._l(t.comments,(function(e,r){return n("div",{key:e.id,class:["comment-box",r%2==1?"top-comment":"bottom-comment"],style:t.positionCommentPos(r+1),on:{click:function(n){return t.showMsgBox(e.id)}}},[n("div",{staticClass:"comment-wrap-para"},[t._v("\n                    "+t._s(e.msg.substr(0,45))+"\n                    "),e.msg.length>45?n("span",[t._v("...")]):t._e(),t._v(" "),n("div",{staticClass:"time-wrap"},[t._v("\n                      "+t._s(e.d)+"\n                    ")]),t._v(" "),n("avatar",{attrs:{url:e.avatar}})],1)])})),0):t._e()])])],1):t._e()])],1)],1),t._v(" "),n("Popup",{attrs:{id:t.id,"box-name":t.popupName,times:t.selectTime||" ",content:t.selectContent||" ","reset-popup-data":t.resetPopupData}})],1)}),[],!1,null,null,null).exports),C={data:function(){return{videoIsPlay:!1}},mounted:function(){this.$refs.video.muted=!0,window.addEventListener("scroll",this.listenerScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.listenerScroll)},methods:{listenerScroll:function(){var t=this.$refs.video,e=t.getBoundingClientRect(),n=Math.max(document.documentElement.clientHeight,window.innerHeight);e.top-n<20&&(t.currentTime=10,t.play(),window.removeEventListener("scroll",this.listenerScroll))}}},O=(n(406),Object(c.a)(C,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"service-wrap"},[n("video",{ref:"video",staticClass:"video-background",attrs:{src:"tour2.mp4",loop:"",preload:"none"}}),t._v(" "),n("b-container",{staticClass:"front-layout"},[n("b-row",[n("b-col",[n("h5",{staticClass:"title"},[t._v("\n          聯絡客服\n        ")])])],1),t._v(" "),n("b-row",[n("b-col",[n("b-form",[n("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[n("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"}})],1),t._v(" "),n("b-form-group",{attrs:{id:"input-group-2",label:"意見內容:","label-for":"input-2"}},[n("b-form-textarea",{attrs:{id:"textarea-default",placeholder:"輸入內容",rows:"5"}})],1),t._v(" "),n("b-button",{attrs:{type:"submit",variant:"primary"}},[t._v("\n            送出\n          ")]),t._v(" "),n("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("\n            重設\n          ")])],1)],1)],1)],1)],1)}),[],!1,null,null,null).exports),S={},z=(n(408),{components:{RdSearch:l,AreaSearch:f,HotComment:k,Service:O,Footer:Object(c.a)(S,(function(){var t=this.$createElement,e=this._self._c||t;return e("footer",{staticClass:"footer-wrap"},[e("b-container",[e("b-row",[e("b-col",{staticClass:"d-flex justify-content-end align-items-center user-icon"},[e("font-awesome-icon",{attrs:{icon:"users"}}),this._v(" "),e("span",{staticClass:"ml-2"},[this._v(this._s(this.$store.state.counter))])],1)],1)],1)],1)}),[],!1,null,null,null).exports},mounted:function(){0===this.$store.state.attractions.length&&this.$store.dispatch("syncAttractions")}}),P=Object(c.a)(z,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:t.$store.getters.loadedAttraction,expression:"$store.getters.loadedAttraction"}]},[n("RdSearch"),t._v(" "),n("AreaSearch"),t._v(" "),n("HotComment"),t._v(" "),n("Service"),t._v(" "),n("Footer")],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!t.$store.getters.loadedAttraction,expression:"!$store.getters.loadedAttraction"}],staticStyle:{display:"flex",height:"80vh","justify-content":"center","align-items":"center"}},[n("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{label:"Large Spinner"}}),t._v(" "),n("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{variant:"success",label:"Large Spinner",type:"grow"}})],1)])}),[],!1,null,null,null);e.default=P.exports}}]);