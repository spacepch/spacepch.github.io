"use strict";(self["webpackChunkvue_event"]=self["webpackChunkvue_event"]||[]).push([[158],{3158:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var s=function(){var t=this,a=t._self._c;return a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[t._v("更换头像")])]),a("div",[t.avatar?a("img",{staticClass:"the_img",attrs:{src:t.avatar,alt:""}}):a("img",{staticClass:"the_img",attrs:{src:e(9389),alt:""},on:{click:t.chooseImg}}),a("div",{staticClass:"btn-box"},[a("input",{ref:"iptRef",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/*"},on:{change:t.onFileChange}}),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.chooseImg}},[t._v("选择图片")]),a("el-button",{attrs:{type:"success",icon:"el-icon-upload",disabled:""===t.avatar},on:{click:t.uploadAvatarFn}},[t._v("上传头像")])],1)])])},i=[],r=e(7377),n={name:"my-avatar",data(){return{avatar:""}},methods:{chooseImg(){this.$refs.iptRef.click()},onFileChange(t){const a=t.target.files;if(0===a.length)this.avatar="";else{const t=new FileReader;t.readAsDataURL(a[0]),t.onload=t=>{this.avatar=t.target.result}}},uploadAvatarFn(){(0,r.Qq)(this.avatar).then((({data:t})=>{if(t.code)return this.$message.error(t.message);this.$message.success(t.message),this.$store.dispatch("getUserInfoActions")}))}}},c=n,l=e(1001),o=(0,l.Z)(c,s,i,!1,null,"7d171725",null),u=o.exports},9389:function(t,a,e){t.exports=e.p+"img/avatar.b216c21d.jpg"}}]);
//# sourceMappingURL=158.850ad5c9.js.map