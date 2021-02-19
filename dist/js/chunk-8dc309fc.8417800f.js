(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8dc309fc"],{"11c3":function(e,t,n){},9887:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",{staticClass:"my-3",attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"auto"}},[n("h2",{staticClass:" font-weight-bold"},[e._v("Companies")])]),n("v-col",{staticClass:"text-right",attrs:{cols:"auto"}},[n("v-btn",{staticClass:" mr-1 body-2 font-weight-bold",attrs:{dark:""},on:{click:e.openForm}},[e._v("Add Company")])],1),n("v-col",{staticClass:"caption red--text",attrs:{cols:"12"}},[e._v(e._s(e.errorMsg))])],1),n("v-row",[n("v-dialog",{staticClass:"py-5",attrs:{"max-width":"500px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",[n("p",{staticClass:"body-1 font-weight-bold"},[e._v(e._s(e.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{color:"grey",dense:"",label:"Company Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1)],1)],1)],1),n("v-card-actions",{staticClass:"pb-5"},[n("v-spacer"),n("v-btn",{attrs:{outlined:"",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{dark:e.name.length>0,disabled:e.name.length<=0},on:{click:e.addUpdateCompany}},[e._v(" Save ")])],1)],1)],1)],1),n("v-data-table",{staticClass:"elevation-1 coils mt-3",attrs:{headers:e.headers,items:e.$store.state.companies,"hide-default-footer":"",loading:e.$store.state.isLoading,"fixed-header":"",height:"calc(100vh - 270px)","disable-pagination":""},scopedSlots:e._u([{key:"item.actions",fn:function(t){var a=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a)}}},[e._v(" mdi-pencil ")]),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteItem(a.id)}}},[e._v(" mdi-delete ")])]}}],null,!0)})],1)},o=[];n("b0c0"),n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n("96cf");var s=n("1da1"),i=n("d6e8"),c={components:{},data:function(){return{errorMsg:"",editedIndex:-1,dialog:!1,actionsList:[{icon:"mdi-plus-circle",text:"add"},{icon:"mdi-pencil",text:"edit"},{icon:"mdi-delete",text:"delete"}],name:"",headers:[{text:"ID",align:"start",value:"id"},{text:"Company",value:"name",sortable:!1},{text:"Actions",value:"actions",sortable:!1}]}},mounted:function(){this.$store.dispatch("getCompanies")},watch:{},computed:{formTitle:function(){return this.editedIndex<=0?"New Company":"Edit Company"}},methods:{openForm:function(){this.editedIndex=0,this.dialog=!0,this.name=""},deleteItem:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,i["a"].delete(e);case 3:a=n.sent,console.log("result",a.data),n.next=10;break;case 7:n.prev=7,n.t0=n["catch"](0),n.t0.response.data&&(t.errorMsg=n.t0.response.data,setTimeout((function(){t.errorMsg=""}),5e3));case 10:return n.prev=10,t.$store.dispatch("getCompanies"),n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))()},editItem:function(e){this.dialog=!0,this.editedIndex=e.id,this.name=e.name},addUpdateCompany:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.editedIndex,r(e.editedIndex),e.name),!(e.editedIndex>0)){t.next=18;break}return t.prev=2,t.next=5,i["a"].update(e.editedIndex,{name:e.name});case 5:n=t.sent,console.log("result",n),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](2),console.log("error",t.t0);case 12:return t.prev=12,e.dialog=!1,e.$store.dispatch("getCompanies"),t.finish(12);case 16:t.next=32;break;case 18:return t.prev=18,t.next=21,i["a"].add({name:e.name});case 21:a=t.sent,console.log("result",a),t.next=28;break;case 25:t.prev=25,t.t1=t["catch"](18),console.log("error",t.t1);case 28:return t.prev=28,e.dialog=!1,e.$store.dispatch("getCompanies"),t.finish(28);case 32:case"end":return t.stop()}}),t,null,[[2,9,12,16],[18,25,28,32]])})))()}}},d=c,l=(n("d49b"),n("2877")),u=Object(l["a"])(d,a,o,!1,null,null,null);t["default"]=u.exports},d49b:function(e,t,n){"use strict";n("11c3")}}]);
//# sourceMappingURL=chunk-8dc309fc.8417800f.js.map