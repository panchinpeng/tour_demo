(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{214:function(t,e,n){"use strict";n.d(e,"d",(function(){return l})),n.d(e,"e",(function(){return f})),n.d(e,"c",(function(){return j})),n.d(e,"b",(function(){return d})),n.d(e,"a",(function(){return m}));n(18);var r=n(49),o=n.n(r),c=(n(215),n(69)),l=function(t,e,n,r){o.a.auth().signInWithEmailAndPassword(t,e).then((function(t){m("loginCount",t.user.uid),n(t.user.uid)})).catch((function(t){r(t.message)}))},f=function(t){o.a.auth().signOut().then(t)},j=function(t){var e=t.uid,n=t.city,r=t.nickname;return new Promise((function(t,o){c.b.ref("users/".concat(e)).update({city:n,nickname:r},(function(e){e?o(e):t()}))}))},d=function(t){return new Promise((function(e){c.b.ref("users/".concat(t)).once("value").then((function(t){return e(t.val())}))}))},m=function(t,e){return new Promise((function(n,r){console.log("rrrr","users/".concat(e,"/").concat(t)),c.b.ref("users/".concat(e,"/").concat(t)).transaction((function(t){return null===t?1:t+1}),(function(t,e){null===t&&e&&n(),r(t)}))}))}},216:function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"d",(function(){return x})),n.d(e,"c",(function(){return O})),n.d(e,"b",(function(){return _})),n.d(e,"g",(function(){return P})),n.d(e,"f",(function(){return z})),n.d(e,"e",(function(){return R}));n(93),n(28),n(50),n(20),n(70);var r=n(13),o=(n(37),n(5)),c=(n(18),n(69)),l=n(49),f=n.n(l),j=(n(215),n(213)),d=n.n(j),m=n(214),v=n(217);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var w=function(){return new Promise((function(t){f.a.auth().onAuthStateChanged((function(e){t(!!e&&e.uid)}))}))},k=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),x=function(t,e){w()&&c.b.ref("commentReply").push(y({},t,{uid:e}),(function(t){if(t)alert("回復訊息出現錯誤"),console.log(t);else try{Object(m.a)("replyCount",e)}catch(t){console.log("紀錄回覆數錯誤",t)}}))},O=function(t){var e=[],n={};return c.b.ref("commentReply").orderByChild("id").equalTo(t).on("child_added",function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(r){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(data=r.val(),!n[data.uid]){t.next=5;break}data.avatar=n[data.uid],t.next=9;break;case 5:return t.next=7,Object(v.a)(data.uid);case 7:data.avatar=t.sent,n[data.uid]=data.avatar;case 9:e.push(y({key:r.key},data));case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),e},_=function(){return new Promise((function(t,e){c.b.ref("commentRank").orderByValue().limitToLast(1).once("value",function(){var n=Object(o.a)(regeneratorRuntime.mark((function n(r){var o,c,l,f,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r.val()){n.next=8;break}return o=Object.keys(r.val())[0],n.next=4,P(o);case 4:for(f in c=n.sent,l=[],c)data=c[f],l.push(y({id:f},data));t([o,l]);case 8:e(null);case 9:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}())}))},P=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:12,n=c.b.ref("comment/".concat(t)).orderByChild("d").limitToLast(e),r={};return new Promise((function(t){n.on("value",function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(n){var o,c,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=n.val(),e.t0=regeneratorRuntime.keys(o);case 2:if((e.t1=e.t0()).done){e.next=15;break}if(c=e.t1.value,data=o[c],!r[data.u]){e.next=9;break}data.avatar=r[data.u],e.next=13;break;case 9:return e.next=11,Object(v.a)(data.u);case 11:data.avatar=e.sent,r[data.u]=data.avatar;case 13:e.next=2;break;case 15:t(o);case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}))},z=function(t,e,u){return new Promise((function(n){if(w()){c.b.ref("comment").child(e).push({u:u,msg:t,d:d()().format("YYYY-MM-DD HH:mm:ss")});try{Promise.all([Object(m.a)("commitCount",u),D(e)]).then((function(){return n()}))}catch(t){alert("留言失敗"),n()}}}))},D=function(t){return new Promise((function(e,n){c.b.ref("commentRank/".concat(t)).transaction((function(t){return t?t+1:1}),(function(t,r){null===t&&r&&e(),n(t)}))}))},R=function(){var t=c.b.ref("user-release");return new Promise((function(e){t.once("value",(function(n){t.set(n.val()+1),e(n.val()+1)}))}))}},217:function(t,e,n){"use strict";n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return j}));n(37);var r=n(5),o=(n(71),n(18),n(49)),c=n.n(o),l=(n(350),n(69));function f(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){},o=l.b.ref("users");return new Promise((function(l,f){var j=c.a.storage().ref(),d={contentType:t.type},m=Date.now()+t.name,v=j.child(m).put(t,d);v.on("state_changed",n,(function(){}),Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,j;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.child(e).once("value");case 3:if(n=t.sent,!(r=n.val())||!r.filename){t.next=8;break}return t.next=8,c.a.storage().ref().child(r.filename).delete();case 8:return t.next=10,v.snapshot.ref.getDownloadURL();case 10:j=t.sent,o.child(e).update({filename:m}),l(j),t.next=19;break;case 15:t.prev=15,t.t0=t.catch(0),console.log("happen error",t.t0),f(t.t0);case 19:case"end":return t.stop()}}),t,null,[[0,15]])}))))}))}function j(t){return new Promise((function(e){l.b.ref("users").child(t).once("value",function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=n.val())||!r.filename){t.next=6;break}return t.next=4,c.a.storage().ref().child(r.filename).getDownloadURL();case 4:o=t.sent,e(o);case 6:e(null);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}))}},346:function(t,e,n){var content=n(362);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("24822f1b",content,!0,{sourceMap:!1})},347:function(t,e,n){var r=n(29),o=n(94),c=n(38),l=n(30),f=n(348);t.exports=function(t,e){var n=1==t,j=2==t,d=3==t,m=4==t,v=6==t,h=5==t||v,y=e||f;return function(e,f,w){for(var k,x,O=c(e),_=o(O),P=r(f,w,3),z=l(_.length),D=0,R=n?y(e,z):j?y(e,0):void 0;z>D;D++)if((h||D in _)&&(x=P(k=_[D],D,O),t))if(n)R[D]=x;else if(x)switch(t){case 3:return!0;case 5:return k;case 6:return D;case 2:R.push(k)}else if(m)return!1;return v?-1:d||m?m:R}}},348:function(t,e,n){var r=n(349);t.exports=function(t,e){return new(r(t))(e)}},349:function(t,e,n){var r=n(11),o=n(138),c=n(3)("species");t.exports=function(t){var e;return o(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!o(e.prototype)||(e=void 0),r(e)&&null===(e=e[c])&&(e=void 0)),void 0===e?Array:e}},351:function(t,e,n){var map={"./af":219,"./af.js":219,"./ar":220,"./ar-dz":221,"./ar-dz.js":221,"./ar-kw":222,"./ar-kw.js":222,"./ar-ly":223,"./ar-ly.js":223,"./ar-ma":224,"./ar-ma.js":224,"./ar-sa":225,"./ar-sa.js":225,"./ar-tn":226,"./ar-tn.js":226,"./ar.js":220,"./az":227,"./az.js":227,"./be":228,"./be.js":228,"./bg":229,"./bg.js":229,"./bm":230,"./bm.js":230,"./bn":231,"./bn.js":231,"./bo":232,"./bo.js":232,"./br":233,"./br.js":233,"./bs":234,"./bs.js":234,"./ca":235,"./ca.js":235,"./cs":236,"./cs.js":236,"./cv":237,"./cv.js":237,"./cy":238,"./cy.js":238,"./da":239,"./da.js":239,"./de":240,"./de-at":241,"./de-at.js":241,"./de-ch":242,"./de-ch.js":242,"./de.js":240,"./dv":243,"./dv.js":243,"./el":244,"./el.js":244,"./en-SG":245,"./en-SG.js":245,"./en-au":246,"./en-au.js":246,"./en-ca":247,"./en-ca.js":247,"./en-gb":248,"./en-gb.js":248,"./en-ie":249,"./en-ie.js":249,"./en-il":250,"./en-il.js":250,"./en-nz":251,"./en-nz.js":251,"./eo":252,"./eo.js":252,"./es":253,"./es-do":254,"./es-do.js":254,"./es-us":255,"./es-us.js":255,"./es.js":253,"./et":256,"./et.js":256,"./eu":257,"./eu.js":257,"./fa":258,"./fa.js":258,"./fi":259,"./fi.js":259,"./fo":260,"./fo.js":260,"./fr":261,"./fr-ca":262,"./fr-ca.js":262,"./fr-ch":263,"./fr-ch.js":263,"./fr.js":261,"./fy":264,"./fy.js":264,"./ga":265,"./ga.js":265,"./gd":266,"./gd.js":266,"./gl":267,"./gl.js":267,"./gom-latn":268,"./gom-latn.js":268,"./gu":269,"./gu.js":269,"./he":270,"./he.js":270,"./hi":271,"./hi.js":271,"./hr":272,"./hr.js":272,"./hu":273,"./hu.js":273,"./hy-am":274,"./hy-am.js":274,"./id":275,"./id.js":275,"./is":276,"./is.js":276,"./it":277,"./it-ch":278,"./it-ch.js":278,"./it.js":277,"./ja":279,"./ja.js":279,"./jv":280,"./jv.js":280,"./ka":281,"./ka.js":281,"./kk":282,"./kk.js":282,"./km":283,"./km.js":283,"./kn":284,"./kn.js":284,"./ko":285,"./ko.js":285,"./ku":286,"./ku.js":286,"./ky":287,"./ky.js":287,"./lb":288,"./lb.js":288,"./lo":289,"./lo.js":289,"./lt":290,"./lt.js":290,"./lv":291,"./lv.js":291,"./me":292,"./me.js":292,"./mi":293,"./mi.js":293,"./mk":294,"./mk.js":294,"./ml":295,"./ml.js":295,"./mn":296,"./mn.js":296,"./mr":297,"./mr.js":297,"./ms":298,"./ms-my":299,"./ms-my.js":299,"./ms.js":298,"./mt":300,"./mt.js":300,"./my":301,"./my.js":301,"./nb":302,"./nb.js":302,"./ne":303,"./ne.js":303,"./nl":304,"./nl-be":305,"./nl-be.js":305,"./nl.js":304,"./nn":306,"./nn.js":306,"./pa-in":307,"./pa-in.js":307,"./pl":308,"./pl.js":308,"./pt":309,"./pt-br":310,"./pt-br.js":310,"./pt.js":309,"./ro":311,"./ro.js":311,"./ru":312,"./ru.js":312,"./sd":313,"./sd.js":313,"./se":314,"./se.js":314,"./si":315,"./si.js":315,"./sk":316,"./sk.js":316,"./sl":317,"./sl.js":317,"./sq":318,"./sq.js":318,"./sr":319,"./sr-cyrl":320,"./sr-cyrl.js":320,"./sr.js":319,"./ss":321,"./ss.js":321,"./sv":322,"./sv.js":322,"./sw":323,"./sw.js":323,"./ta":324,"./ta.js":324,"./te":325,"./te.js":325,"./tet":326,"./tet.js":326,"./tg":327,"./tg.js":327,"./th":328,"./th.js":328,"./tl-ph":329,"./tl-ph.js":329,"./tlh":330,"./tlh.js":330,"./tr":331,"./tr.js":331,"./tzl":332,"./tzl.js":332,"./tzm":333,"./tzm-latn":334,"./tzm-latn.js":334,"./tzm.js":333,"./ug-cn":335,"./ug-cn.js":335,"./uk":336,"./uk.js":336,"./ur":337,"./ur.js":337,"./uz":338,"./uz-latn":339,"./uz-latn.js":339,"./uz.js":338,"./vi":340,"./vi.js":340,"./x-pseudo":341,"./x-pseudo.js":341,"./yo":342,"./yo.js":342,"./zh-cn":343,"./zh-cn.js":343,"./zh-hk":344,"./zh-hk.js":344,"./zh-tw":345,"./zh-tw.js":345};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=351},353:function(t,e,n){"use strict";var r={props:{url:{type:String,default:""}}},o=(n(361),n(25)),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"avatar-wrap"},[this.url?e("img",{attrs:{src:this.url}}):e("font-awesome-icon",{attrs:{icon:"user-circle"}})],1)}),[],!1,null,"645dbe43",null);e.a=component.exports},360:function(t,e,n){"use strict";var r=n(8),o=n(347)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n(95)("find")},361:function(t,e,n){"use strict";var r=n(346);n.n(r).a},362:function(t,e,n){(e=n(26)(!1)).push([t.i,".avatar-wrap[data-v-645dbe43]{position:absolute;bottom:0;right:0}img[data-v-645dbe43]{width:30px;height:30px;border-radius:50%}",""]),t.exports=e},380:function(t,e,n){var content=n(439);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("1c72af45",content,!0,{sourceMap:!1})},438:function(t,e,n){"use strict";var r=n(380);n.n(r).a},439:function(t,e,n){var r=n(26),o=n(440),c=n(441);e=r(!1);var l=o(c);e.push([t.i,".tour-image{max-width:520px}.icon-style{color:#03a9f4;font-size:21px;margin-right:5px}.site-header{border-bottom:1px solid #000;line-height:3}.comment-ul{list-style-type:none;padding:0}.comment-ul>li{padding-top:10px;border-bottom:1px solid rgba(0,0,0,.07843)}.comment-content{padding-right:30px}.icon-user{text-align:right}.reply-title{background-color:beige}.no-reply{text-align:center}.no-reply-wrap{width:100%;height:200px;background-image:url("+l+");background-position:top;background-repeat:no-repeat;background-color:rgba(237,236,236,.32941);border-bottom-left-radius:10px;border-bottom-right-radius:10px;opacity:.4;display:flex;align-items:center;justify-content:center;background-size:contain}",""]),t.exports=e},440:function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),"string"!=typeof(t=t&&t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},441:function(t,e,n){t.exports=n.p+"img/d0a7a72.png"},453:function(t,e,n){"use strict";n.r(e);n(93),n(28),n(20),n(18),n(70);var r=n(13),o=(n(360),n(37),n(5)),c=n(216);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j={middleware:["storeDataVerify"],name:"TourDisplay",components:{avatar:n(353).a},data:function(){return{attraction:null,commentData:null}},created:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(n=t.$store.state.attractions.find((function(e){return e.Id===t.$route.params.tid})))){e.next=10;break}return t.attraction=n,e.next=5,Object(c.g)(t.$route.params.tid,20);case 5:for(l in r=e.sent,o=[],r)o.push(f({},r[l],{uid:l}));o.reverse(),t.commentData=o;case 10:case"end":return e.stop()}}),e)})))()}},d=(n(438),n(25)),component=Object(d.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-row",[n("b-col",[n("p",{staticClass:"site-header"},[t._v("\n        "+t._s(t.attraction.Name)+"\n      ")]),t._v(" "),n("p",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:"map-marked-alt"}}),t._v("\n        "+t._s(t.attraction.Add)+"\n      ")],1),t._v(" "),n("p",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:"phone-alt"}}),t._v("\n        "+t._s(t.attraction.Tel)+"\n      ")],1),t._v(" "),n("p",[n("font-awesome-icon",{staticClass:"icon-style",attrs:{icon:"info-circle"}}),t._v("\n        "+t._s(t.attraction.Ticketinfo)+"\n      ")],1),t._v(" "),n("p",[t._v(t._s(t.attraction.Toldescribe))]),t._v(" "),n("div",{staticClass:"reply-title"},[t._v("\n        所有回覆:\n      ")]),t._v(" "),t.commentData&&t.commentData.length>0?n("ul",{staticClass:"comment-ul"},t._l(t.commentData,(function(e){return n("li",{key:e.key},[n("div",{staticClass:"comment-content"},[t._v("\n            "+t._s(e.msg)+"\n          ")]),t._v(" "),n("avatar",{style:{position:"relative",textAlign:"right"},attrs:{url:e.avatar}})],1)})),0):n("div",{staticClass:"no-reply-wrap"},[t._v("\n        目前尚未有新回覆...\n      ")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);