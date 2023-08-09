"use strict";(self["webpackChunkvue_event"]=self["webpackChunkvue_event"]||[]).push([[893],{9893:function(t,e,a){a.r(e),a.d(e,{default:function(){return c}});var i=function(){var t=this,e=t._self._c;return e("el-card",{staticClass:"box-card"},[e("div",{staticClass:"clearfix header-box",attrs:{slot:"header"},slot:"header"},[e("span",[t._v("卡片名称")]),e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.addCateShowFn}},[t._v("添加分类")])],1),e("el-table",{staticStyle:{width:"100%"},attrs:{data:t.artList,stripe:"",border:""}},[e("el-table-column",{attrs:{type:"index",label:"序号",width:"100"}}),e("el-table-column",{attrs:{prop:"cate_name",label:"分类名称"}}),e("el-table-column",{attrs:{prop:"cate_alias",label:"分类别名"}}),e("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.updateCateFn(a.row)}}},[t._v("修改")]),e("el-button",{attrs:{type:"danger",size:"mini"},on:{click:function(e){return t.deleteCateFn(a.row)}}},[t._v("删除")])]}}])})],1),e("el-dialog",{attrs:{title:"添加分类",visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},closed:t.formCloseFn}},[e("el-form",{ref:"addRef",attrs:{model:t.addForm,rules:t.addRules,"label-width":"80px"}},[e("el-form-item",{attrs:{label:"分类名称",prop:"cate_name"}},[e("el-input",{attrs:{minlength:"1",maxlength:"10"},model:{value:t.addForm.cate_name,callback:function(e){t.$set(t.addForm,"cate_name",e)},expression:"addForm.cate_name"}})],1),e("el-form-item",{attrs:{label:"分类别名",prop:"cate_alias"}},[e("el-input",{attrs:{minlength:"1",maxlength:"15"},model:{value:t.addForm.cate_alias,callback:function(e){t.$set(t.addForm,"cate_alias",e)},expression:"addForm.cate_alias"}})],1)],1),e("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:t.cancelFn}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:t.comfirmFn}},[t._v("确 定")])],1)],1)],1)},s=[],r=a(7377),l={data(){return{artList:[],dialogFormVisible:!1,isEdit:!1,editId:"",addForm:{cate_name:"",cate_alias:""},addRules:{cate_alias:[{required:!0,message:"请输入分类别名",trigger:"blur"},{pattern:/^[a-zA-Z0-9]{1,15}$/,message:"分类别名必须是1-15的大小写字母数字",trigger:"blur"}],cate_name:[{required:!0,message:"请输入分类名称",trigger:"blur"},{pattern:/^\S{1,10}$/,message:"分类名称必须是1-10的非空字符",trigger:"blur"}]},formLabelWidth:"120px"}},methods:{async getCateFn(){const{data:t}=await(0,r.I2)();this.artList=t.data},addCateShowFn(){this.isEdit=!1,this.dialogFormVisible=!0},comfirmFn(){this.$refs.addRef.validate((async t=>{if(!t)return!1;if(this.isEdit){const{data:t}=await(0,r.R4)({id:this.editId,...this.addForm});if(t.code)return this.$notify.error(t.message);this.$notify.success(t.message)}else{const{data:t}=await(0,r.CN)(this.addForm);if(t.code)return this.$notify.error(t.message);this.$notify.success(t.message)}this.getCateFn(),this.dialogFormVisible=!1}))},formCloseFn(){this.$refs.addRef.resetFields()},cancelFn(){this.dialogFormVisible=!1},updateCateFn(t){this.editId=t.id,this.dialogFormVisible=!0,this.isEdit=!0,this.$nextTick((()=>{this.addForm.cate_name=t.cate_name,this.addForm.cate_alias=t.cate_alias}))},async deleteCateFn(t){const{data:e}=await(0,r.e8)(t.id);if(e.code)return this.$notify.error(e.message);this.$notify.success(e.message),this.getCateFn()}},created(){this.getCateFn()}},n=l,o=a(1001),d=(0,o.Z)(n,i,s,!1,null,"064245c1",null),c=d.exports}}]);
//# sourceMappingURL=893.c3b47ff5.js.map