"use strict";(self["webpackChunkvue_event"]=self["webpackChunkvue_event"]||[]).push([[706],{706:function(e,r,s){s.r(r),s.d(r,{default:function(){return g}});s(7658);var t=function(){var e=this,r=e._self._c;return r("div",{staticClass:"login-container"},[r("div",{staticClass:"login-box"},[r("div",{staticClass:"title-box"}),r("el-form",{ref:"loginRef",attrs:{model:e.loginForm,rules:e.rulesObj}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"请输入用户名"},model:{value:e.loginForm.username,callback:function(r){e.$set(e.loginForm,"username",r)},expression:"loginForm.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"请输入密码"},model:{value:e.loginForm.password,callback:function(r){e.$set(e.loginForm,"password",r)},expression:"loginForm.password"}})],1),r("el-form-item",[r("el-button",{staticClass:"btn-login",attrs:{type:"primary"},on:{click:e.loginFn}},[e._v("登录")]),r("el-link",{attrs:{underline:!1},on:{click:function(r){return e.$router.push("/register")}}},[e._v("去注册")])],1)],1)],1)])},n=[],a=s(7377),o=s(6294),i={name:"my-login",data(){return{loginForm:{username:"",password:""},rulesObj:{username:[{required:!0,message:"请输入用户名",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{1,10}$/,message:"用户名必须是1-10的大小写字母数字",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"},{pattern:/^\S{6,15}$/,message:"密码必须是6-15的非空字符",trigger:"blur"}]}}},methods:{...(0,o.mapMutations)(["updateToken"]),loginFn(){this.$refs.loginRef.validate((async e=>{if(!e)return!1;{const{data:e}=await(0,a.lx)(this.loginForm);if(0!==e.code)return this.$message.error(e.message);this.$message.success(e.message),this.updateToken(e.token),this.$router.push("/")}}))}}},l=i,u=s(1001),m=(0,u.Z)(l,t,n,!1,null,"74ea8f34",null),g=m.exports}}]);
//# sourceMappingURL=706.3bb6f139.js.map