(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4],{337:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n="https://jsonplaceholder.typicode.com/users"},342:function(e,t,r){var content=r(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(53).default)("61214cb8",content,!0,{sourceMap:!1})},343:function(e,t,r){var n=r(52)(!1);n.push([e.i,".s-user{padding:1.875rem .9375rem;background:#d3f6ff;border-radius:var(--border-radius);transition:.3s}.s-user-back{display:block;font-size:1rem;line-height:1.125rem}.s-user-content{display:flex;flex-direction:column;margin-bottom:3.125rem}.s-user-text{margin-bottom:.3125rem;font-size:1.125rem;line-height:1.25rem}.s-user-text span{font-weight:900}",""]),e.exports=n},349:function(e,t,r){"use strict";r.r(t);r(32),r(342);var n={name:"s-user",props:{user:{type:Object,required:!0}},components:{},data:function(){return{}}},o=r(27),component=Object(o.a)(n,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"s-user"},[t("div",{staticClass:"s-user-content"},[t("p",{staticClass:"s-user-text"},[t("span",[e._v("Имя:")]),e._v(" "+e._s(e.user.name))]),e._v(" "),t("p",{staticClass:"s-user-text"},[t("span",[e._v("Почта:")]),e._v(" "+e._s(e.user.email))]),e._v(" "),t("p",{staticClass:"s-user-text"},[t("span",[e._v("Username:")]),e._v(" "+e._s(e.user.username))]),e._v(" "),t("p",{staticClass:"s-user-text"},[t("span",[e._v("Website:")]),e._v(" "+e._s(e.user.website))])]),e._v(" "),t("router-link",{staticClass:"s-user-back",attrs:{to:"/users"}},[e._v("вернуться")])],1)}),[],!1,null,null,null);t.default=component.exports},354:function(e,t,r){"use strict";r.r(t);var n=r(11),o=(r(54),r(55),r(337));function c(e){return l.apply(this,arguments)}function l(){return(l=Object(n.a)(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$nuxt.context.$axios.$get("".concat(o.a,"?id=").concat(t));case 2:return r=e.sent,e.abrupt("return",r[0]);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f={data:function(){return{user:{}}},mounted:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$route.params.slug,t.next=3,c(r);case 3:e.user=t.sent,console.log(e.user);case 5:case"end":return t.stop()}}),t)})))()}},d=r(27),component=Object(d.a)(f,(function(){var e=this._self._c;return e("main",{staticClass:"main"},[e("div",{staticClass:"container"},[e("s-user",{attrs:{user:this.user}})],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{SUser:r(349).default})}}]);