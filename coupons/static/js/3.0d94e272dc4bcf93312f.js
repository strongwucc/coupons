webpackJsonp([3],{IV4y:function(t,n){},r7JW:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("Dd8w"),s=o.n(e),c=o("NYxO"),i={name:"coupon",data:function(){return{}},props:["cid","coupon"],computed:Object(c.c)([])},r={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"coupon-container",on:{click:function(n){t.$router.push("coupon/"+t.cid)}}},[o("div",{staticClass:"coupon-logo"},[o("img",{attrs:{src:t.coupon.logo_url}})]),t._v(" "),o("div",{staticClass:"coupon-store-tile"},[o("div",{staticClass:"coupon-store"},[t._v("\n      "+t._s(t.coupon.brand_name)+"\n    ")]),t._v(" "),o("div",{staticClass:"coupon-title"},[t._v("\n      "+t._s(t.coupon.title)+"\n    ")])])])},staticRenderFns:[]};var u={name:"coupons",data:function(){return{}},created:function(){this.getCoupons({session_id:this.sessionId,member_id:this.memberId})},components:{commonCoupon:o("VU/8")(i,r,!1,function(t){o("IV4y")},"data-v-0aaf1880",null).exports},computed:Object(c.c)({sessionId:function(t){return t.sessionId},memberId:function(t){return t.memberId},coupons:function(t){return t.coupons}}),methods:s()({},Object(c.b)(["getCoupons"]))},a={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"coupons-container"},[o("wv-flex",{staticClass:"flex-header"},[o("wv-flex-item",[o("wv-header",{attrs:{title:"我的优惠券",fixed:!1,"background-color":"#F7F7F7"}},[o("div",{staticClass:"btn-back",attrs:{slot:"left"},on:{click:function(n){t.$router.go(-1)}},slot:"left"},[t._v("\n          返回\n        ")])])],1)],1),t._v(" "),o("wv-flex",{staticClass:"flex-body-coupons-show"},[o("wv-flex-item",t._l(t.coupons,function(t,n,e){return o("common-coupon",{key:e,attrs:{cid:n,coupon:t}})}))],1)],1)},staticRenderFns:[]};var d=o("VU/8")(u,a,!1,function(t){o("yZsU")},"data-v-4e5831db",null);n.default=d.exports},yZsU:function(t,n){}});
//# sourceMappingURL=3.0d94e272dc4bcf93312f.js.map