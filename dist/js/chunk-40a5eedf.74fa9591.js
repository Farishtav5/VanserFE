(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-40a5eedf"],{"498a":function(t,e,s){"use strict";var a=s("23e7"),n=s("58a8").trim,i=s("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),n=s("5899"),i="["+n+"]",o=RegExp("^"+i+i+"*"),r=RegExp(i+i+"*$"),l=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(o,"")),2&t&&(s=s.replace(r,"")),s}};t.exports={start:l(1),end:l(2),trim:l(3)}},"79a5":function(t,e,s){"use strict";s("ee43")},"7c86":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("v-row",{staticClass:"my-3",attrs:{justify:"space-between"}},[s("v-col",{attrs:{cols:"auto"}},[s("h2",{staticClass:" font-weight-bold"},[t._v("HR Coils")])]),s("v-col",{staticClass:"text-right",attrs:{cols:"auto"}},[s("v-btn",{staticClass:" mr-1 body-2 font-weight-bold",attrs:{dark:""},on:{click:t.openForm}},[t._v("Add Coil")])],1),s("v-col",{staticClass:"pb-0",attrs:{cols:"12"}},[s("v-row",{attrs:{justify:"end"}},[t.selMultiRows.length>0?s("v-col",{attrs:{cols:"auto"}},[s("v-btn",{staticClass:"pt-4 pb-4 font-weight-bold",attrs:{dark:!t.preventSlitting,disabled:t.preventSlitting},on:{click:t.openSlitForm}},[t._v("Create Slits")])],1):t._e(),s("v-col",{attrs:{cols:"auto"}},[s("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[s("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Select Date",readonly:"",clearable:""},on:{"click:clear":function(e){return t.clearSearch("date")}},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}},"v-text-field",n,!1),a))]}}]),model:{value:t.addedFromMenu,callback:function(e){t.addedFromMenu=e},expression:"addedFromMenu"}},[s("v-date-picker",{attrs:{"no-title":"",scrollable:"",max:t.maxDate},on:{input:function(e){t.addedFromMenu=!1},change:t.setOptions},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}})],1)],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[s("v-select",{staticClass:"select-box",attrs:{outlined:"",dense:"",items:t.$store.state.thicknessList,label:"Select Thickness","item-text":"value","item-value":"value",color:"grey",clearable:""},on:{input:t.setOptions,"click:clear":function(e){return t.clearSearch("thickness")}},model:{value:t.selThickness,callback:function(e){t.selThickness=t._n(e)},expression:"selThickness"}})],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[s("v-select",{staticClass:"select-box",attrs:{outlined:"",dense:"",items:t.statusList,label:"Select Coil Status","item-text":"name","item-value":"name",color:"grey",clearable:""},on:{input:t.setOptions,"click:clear":function(e){return t.clearSearch("status")}},model:{value:t.selStatus,callback:function(e){t.selStatus=e},expression:"selStatus"}})],1),s("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[s("v-select",{staticClass:"select-box",attrs:{outlined:"",dense:"",items:t.$store.state.companies,label:"Select Company","item-text":"name","item-value":"id",color:"grey",clearable:""},on:{input:t.setOptions,"click:clear":function(e){return t.clearSearch("company")}},model:{value:t.selCompany,callback:function(e){t.selCompany=t._n(e)},expression:"selCompany"}})],1)],1)],1),t.preventSlitting?s("v-col",{staticClass:"red--text caption py-0",attrs:{color:"red",cols:"12"}},[t._v("You can create slits for available coils only.")]):t._e()],1),s("v-data-table",{staticClass:"elevation-1 coils",attrs:{headers:t.headers,items:t.coilRows,"items-per-page":10,loading:t.$store.state.isLoading,"footer-props":{"items-per-page-options":[5,10,25,50,100]},"fixed-header":"",height:"calc(100vh - 300px)",options:t.options,"server-items-length":t.$store.state.totalRows,"single-select":t.singleSelect,"show-select":""},on:{"update:options":function(e){t.options=e}},scopedSlots:t._u([{key:"item.company",fn:function(e){var a=e.item;return[s("div",{staticClass:"body-2"},[s("span",[t._v(t._s(t.showCompany(a.company)))])])]}},{key:"item.date",fn:function(e){var a=e.item;return[s("div",{staticClass:"body-2"},[s("span",[t._v(t._s(a.date?t.$options.filters.formatDate(a.date):"---"))])])]}},{key:"item.status",fn:function(e){var a=e.item;return[s("div",{staticClass:"body-2"},[s("span",{staticClass:"text-capitalize",class:t.getTextColor(a.status)},[t._v(t._s(a.status))])])]}},{key:"item.actions",fn:function(e){var a=e.item;return[s("v-menu",{scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[s("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",n,!1),a),[s("v-icon",[t._v("mdi-dots-vertical")])],1)]}}],null,!0)},[s("v-list",{attrs:{dense:""}},t._l(a.actions,(function(e){return s("v-list-item",{key:e.text,on:{click:function(s){return t.actions(e.text,a)}}},[s("v-list-item-icon",{staticClass:"mr-0"},[s("v-icon",{staticClass:"mt-1",attrs:{small:""},domProps:{textContent:t._s(e.icon)}})],1),s("v-list-item-title",{staticClass:"body-2 text-capitalize mt-1"},[t._v(" "+t._s(e.text)+" ")])],1)})),1)],1)]}}],null,!0),model:{value:t.selMultiRows,callback:function(e){t.selMultiRows=e},expression:"selMultiRows"}}),t.$store.state.coilDrawer?s("AddCoil"):t._e(),t.$store.state.slitDrawer?s("SlitCoil"):t._e()],1)},n=[],i=(s("4de4"),s("7db0"),s("c740"),s("b0c0"),s("96cf"),s("1da1")),o=s("df4b"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.$store.state.coilDrawer?s("v-navigation-drawer",{staticStyle:{position:"fixed",top:"0",right:"0","overflow-y":"scroll","z-index":"101"},attrs:{temporary:"",right:"",width:"360"},model:{value:t.$store.state.coilDrawer,callback:function(e){t.$set(t.$store.state,"coilDrawer",e)},expression:"$store.state.coilDrawer"}},[s("div",{staticClass:"subtitle-1 font-weight-bold px-4 py-2"},[s("span",[t._v(t._s(t.$store.state.coilId?"Edit Coil":"Add Coil"))]),s("v-icon",{staticClass:"float-right",on:{click:t.close}},[t._v(" mdi-close-circle ")])],1),s("v-divider"),s("v-container",[s("v-row",{staticClass:"px-4 mt-4"},[s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-combobox",{attrs:{items:t.$store.state.companies,"item-text":"name",label:"Company",outlined:"",color:"grey",dense:"","return-object":!1},on:{change:t.changeCompany},model:{value:t.selCompany,callback:function(e){t.selCompany="string"===typeof e?e.trim():e},expression:"selCompany"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[s("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Select Date",readonly:"",clearable:""},on:{"click:clear":function(e){return t.clearSearch("date")}},model:{value:t.selDate,callback:function(e){t.selDate=e},expression:"selDate"}},"v-text-field",n,!1),a))]}}],null,!1,887548643),model:{value:t.dateMenu,callback:function(e){t.dateMenu=e},expression:"dateMenu"}},[s("v-date-picker",{attrs:{"no-title":"",scrollable:"",max:t.maxDate},on:{input:function(e){t.dateMenu=!1},change:t.searchData},model:{value:t.selDate,callback:function(e){t.selDate=e},expression:"selDate"}})],1)],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{outlined:"",label:"Parent Coil ID",color:"grey",dense:""},model:{value:t.data.brand_no,callback:function(e){t.$set(t.data,"brand_no",e)},expression:"data.brand_no"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-combobox",{attrs:{items:t.$store.state.thicknessList,"item-text":"value",label:"Thickness (mm)",outlined:"",color:"grey",dense:"","return-object":!1,type:"number"},on:{change:t.changeThickness},model:{value:t.selThickness,callback:function(e){t.selThickness=t._n(e)},expression:"selThickness"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Width (mm)",outlined:"",dense:"",color:"grey",type:"number"},model:{value:t.data.width,callback:function(e){t.$set(t.data,"width",t._n(e))},expression:"data.width"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Actual Weight (kg)",outlined:"",dense:"",color:"grey",type:"number"},model:{value:t.data.weight,callback:function(e){t.$set(t.data,"weight",t._n(e))},expression:"data.weight"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-text-field",{attrs:{label:"Formulated Weight (kg)",outlined:"",dense:"",color:"grey",type:"number"},model:{value:t.data.formulated_weight,callback:function(e){t.$set(t.data,"formulated_weight",t._n(e))},expression:"data.formulated_weight"}})],1)],1)],1),s("v-divider"),s("div",{staticClass:"mx-4 mt-8 float-right"},[s("v-btn",{staticClass:"mr-2",attrs:{outlined:""},on:{click:t.close}},[t._v(" Cancel ")]),s("v-btn",{attrs:{dark:t.validateForm,disabled:!t.validateForm},on:{click:t.addCoil}},[t._v(" Save ")])],1)],1):t._e()},l=[],c=(s("ac1f"),s("1276"),s("498a"),s("d6e8")),d=s("e5ca"),u={name:"AddCoil",data:function(){return{selCompany:"",drawer:null,data:{},maxDate:(new Date).toISOString(),dateMenu:!1,selDate:null,selThickness:null}},computed:{validateForm:function(){return!!(this.selCompany&&this.selDate&&this.data.brand_no&&this.selThickness&&this.data.width&&this.data.weight&&this.data.formulated_weight)}},mounted:function(){if(this.$store.state.coilId){var t=this.$store.state.coilData,e=this.$options.filters.calendarDate(t.date).split(" "),s=this.$store.state.companies.find((function(e){return e.id==t.company}));this.selCompany=s.name;var a=t.brand_no,n=t.width,i=t.weight,o=t.formulated_weight;this.selDate=e[0],this.selThickness=t.thickness,this.data={brand_no:a,width:n,weight:i,formulated_weight:o}}else this.data={}},methods:{changeThickness:function(t){var e=this.$store.state.thicknessList.findIndex((function(e){return e.value==t}));e<0&&t.trim().length>0&&this.addThickness(t.trim())},changeCompany:function(t){var e=this.$store.state.companies.findIndex((function(e){return e.name.trim().toLowerCase()==t.trim().toLowerCase()}));e<0&&t.trim().length>0&&this.addCompany(t.trim())},clearSearch:function(t){console.log("data",t)},searchData:function(){},addThickness:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,d["a"].add({value:parseFloat(t)});case 3:a=s.sent,console.log("result",a),s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),console.log("error",s.t0);case 10:return s.prev=10,e.$store.dispatch("getThicknesses"),s.finish(10);case 13:case"end":return s.stop()}}),s,null,[[0,7,10,13]])})))()},addCompany:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,c["a"].add({name:t});case 3:a=s.sent,console.log("result",a),s.next=10;break;case 7:s.prev=7,s.t0=s["catch"](0),console.log("error",s.t0);case 10:return s.prev=10,e.$store.dispatch("getCompanies"),s.finish(10);case 13:case"end":return s.stop()}}),s,null,[[0,7,10,13]])})))()},addCoil:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.data.thickness=t.selThickness,t.selCompany&&(s=t.$store.state.companies.find((function(e){return e.name.trim()==t.selCompany.trim()})),t.data.company=s.id),!t.$store.state.coilId){e.next=6;break}t.editCoil(),e.next=22;break;case 6:return t.data.date="".concat(t.selDate),t.data.created_at=t.$options.filters.calendarDate((new Date).toISOString()),e.prev=8,e.next=11,o["a"].add(t.data);case 11:a=e.sent,console.log("result",a),e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](8),console.log("error",e.t0);case 18:return e.prev=18,t.$store.state.coilDrawer=!1,t.$store.dispatch("getCoils",{page:1,limit:10}),e.finish(18);case 22:case"end":return e.stop()}}),e,null,[[8,15,18,22]])})))()},editCoil:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.data.status="available",t.data.date="".concat(t.selDate),t.data.updated_at=t.$options.filters.calendarDate((new Date).toISOString()),console.log("data",t.data),e.prev=4,e.next=7,o["a"].update(t.$store.state.coilId,t.data);case 7:s=e.sent,console.log("result",s),e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](4),console.log("error",e.t0);case 14:return e.prev=14,t.$store.state.coilDrawer=!1,t.$store.dispatch("getCoils",{page:1,limit:10}),e.finish(14);case 18:case"end":return e.stop()}}),e,null,[[4,11,14,18]])})))()},close:function(){this.$store.state.coilDrawer=!1}}},h=u,p=s("2877"),m=Object(p["a"])(h,r,l,!1,null,null,null),v=m.exports,f=s("f0d8"),g={components:{AddCoil:v,SlitCoil:f["a"]},data:function(){return{selShift:"",selThickness:"",selMultiRows:[],singleSelect:!1,actionsList:[{icon:"mdi-plus-circle",text:"create slit"},{icon:"mdi-pencil",text:"edit"},{icon:"mdi-delete",text:"delete"},{icon:"mdi-view-grid",text:"preview planning"}],options:{},sortBy:"",orderBy:"desc",selCompany:null,selStatus:null,addedFromMenu:!1,addedFrom:null,maxDate:(new Date).toISOString(),headline:"",statusList:[{id:1,name:"Available"},{id:2,name:"In-Queue"},{id:3,name:"Slitted"}],headers:[{text:"ID",align:"start",value:"id"},{text:"Company",value:"company",sortable:!1},{text:"Parent Coil ID",value:"brand_no",sortable:!1},{text:"Date of Receiving",value:"date"},{text:"Status",value:"status",sortable:!1},{text:"Thickness (mm)",value:"thickness"},{text:"Weight (kg)",value:"weight"},{text:"Width (mm)",value:"width"},{text:"Actions",value:"actions",sortable:!1}]}},mounted:function(){this.$store.dispatch("getCompanies"),this.$store.dispatch("getShifts"),this.$store.dispatch("getThicknesses")},watch:{options:{handler:function(t){var e=t.sortBy,s=t.sortDesc;1===e.length&&1===s.length&&(1==s[0]?this.orderBy="desc":this.orderBy="asc",this.sortBy=e[0]),this.searchData()},deep:!0}},computed:{preventSlitting:function(){var t=this.selMultiRows.findIndex((function(t){return"available"!=t.status.toLowerCase()}));return t>=0},coilRows:function(){return this.$store.state.coils.filter((function(t){var e=[];return e="available"===t.status?[{icon:"mdi-plus-circle",text:"create slit"},{icon:"mdi-pencil",text:"edit"},{icon:"mdi-delete",text:"delete"}]:"slitted"===t.status?[{icon:"mdi-view-grid",text:"preview planning"}]:[{icon:"mdi-view-grid",text:"preview planning"},{icon:"mdi-pencil",text:"edit planning"}],t.actions=e}))}},methods:{showCompany:function(t){return this.$store.state.companies.length>0?this.$store.state.companies.find((function(e){return e.id==t})).name:""},actions:function(t,e){"delete"===t&&this.deleteCoil(e.id),"edit"===t?(this.$store.state.coilId=e.id,this.$store.state.coilData=e,this.$store.state.coilDrawer=!0):(this.$store.state.coilId=null,this.$store.state.coilData={}),"create slit"===t&&(this.$store.state.coilId=e.id,this.$store.state.selRows=[e],this.$router.push({path:"/slit-planning"})),"preview planning"===t&&(this.$store.state.coilId=e.id,this.$store.state.slitDrawer=!0,console.log("preview")),"edit planning"===t&&(this.$store.state.coilId=e.id,this.$router.push({path:"/slit-planning/".concat(e.id)}))},openSlitForm:function(){this.$store.state.selRows=this.selMultiRows,this.$router.push({path:"/slit-planning"})},setOptions:function(){console.log("Calleddddddd"),1===this.options.page?this.searchData():this.options.page=1},getTextColor:function(t){var e="";switch(t){case"slitted":e="grey--text text--darken-1";break;case"available":e="green--text text--darken-2";break;case"edit-required":e="red--text text--lighten-1";break;default:e="yellow--text text--darken-4";break}return e},openForm:function(){console.log(this.$store.state),this.$store.state.coilId=null,this.$store.state.coilDrawer=!0},clearSearch:function(t){"date"===t?this.addedFrom=null:"status"===t?this.selStatus=null:"company"===t?this.selCompany=null:"thickness"===t?this.selThickness=null:"shift"===t&&(this.selShift=null),this.setOptions()},searchData:function(){var t={},e=this.options,s=e.page,a=e.itemsPerPage;t.sortBy=this.sortBy,t.orderBy=this.orderBy,t.page=s,t.limit=a,this.selCompany&&(t.company=this.selCompany),this.selStatus&&(t.status=this.selStatus.toLowerCase()),this.addedFrom&&(t.date=this.addedFrom),this.selThickness&&(t.thickness=this.selThickness),this.selShift&&(t.slit_shift=this.selShift),this.$store.dispatch("getCoils",t)},deleteCoil:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,o["a"].delete(t);case 3:a=s.sent,e.$store.dispatch("getCoils",{page:1}),console.log("result",a),s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),console.log("error",s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()},editCoil:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.prev=0,s.next=3,o["a"].update(t.id,t);case 3:a=s.sent,e.$store.dispatch("getCoils",{page:1}),console.log("result",a),s.next=11;break;case 8:s.prev=8,s.t0=s["catch"](0),console.log("error",s.t0);case 11:case"end":return s.stop()}}),s,null,[[0,8]])})))()}}},x=g,b=(s("79a5"),Object(p["a"])(x,a,n,!1,null,null,null));e["default"]=b.exports},c740:function(t,e,s){"use strict";var a=s("23e7"),n=s("b727").findIndex,i=s("44d2"),o=s("ae40"),r="findIndex",l=!0,c=o(r);r in[]&&Array(1)[r]((function(){l=!1})),a({target:"Array",proto:!0,forced:l||!c},{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),i(r)},c8d2:function(t,e,s){var a=s("d039"),n=s("5899"),i="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||i[t]()!=i||n[t].name!==t}))}},ee43:function(t,e,s){}}]);
//# sourceMappingURL=chunk-40a5eedf.74fa9591.js.map