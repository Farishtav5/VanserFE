(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15ae6a2e"],{"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var i=n("6b75");function a(t,e){if(t){if("string"===typeof t)return Object(i["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(i["a"])(t,e):void 0}}},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),a=n("825a"),s=n("d039"),r=n("ad6d"),o="toString",l=RegExp.prototype,c=l[o],d=s((function(){return"/a/b"!=c.call({source:"a",flags:"b"})})),u=c.name!=o;(d||u)&&i(RegExp.prototype,o,(function(){var t=a(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in l)?r.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var i=n("6b75");function a(t){if(Array.isArray(t))return Object(i["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function s(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var r=n("06c5");function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function l(t){return a(t)||s(t)||Object(r["a"])(t)||o()}},"4df4":function(t,e,n){"use strict";var i=n("0366"),a=n("7b0b"),s=n("9bdd"),r=n("e95a"),o=n("50c4"),l=n("8418"),c=n("35a1");t.exports=function(t){var e,n,d,u,f,p,h=a(t),v="function"==typeof this?this:Array,g=arguments.length,m=g>1?arguments[1]:void 0,b=void 0!==m,k=c(h),y=0;if(b&&(m=i(m,g>2?arguments[2]:void 0,2)),void 0==k||v==Array&&r(k))for(e=o(h.length),n=new v(e);e>y;y++)p=b?m(h[y],y):h[y],l(n,y,p);else for(u=k.call(h),f=u.next,n=new v;!(d=f.call(u)).done;y++)p=b?s(u,m,[d.value,y],!0):d.value,l(n,y,p);return n.length=y,n}},"5ce8":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-dialog",{staticClass:"py-5",attrs:{"max-width":"600px"},on:{"click:outside":t.clearData},model:{value:t.$store.state.picklingDialog,callback:function(e){t.$set(t.$store.state,"picklingDialog",e)},expression:"$store.state.picklingDialog"}},[n("v-card",[n("v-card-title",[n("p",{staticClass:"body-1 font-weight-bold"},[t._v(t._s(t.formTitle))])]),n("v-card-text",[n("v-container",t._l(t.$store.state.selSlits,(function(e,i){return n("v-row",{key:i},[n("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[n("v-text-field",{attrs:{outlined:"",readonly:"",color:"grey",dense:"",label:"Coil No"},model:{value:e.slit_no,callback:function(n){t.$set(e,"slit_no",n)},expression:"item.slit_no"}})],1),n("v-col",{staticClass:"py-0",attrs:{cols:"4"}},[n("v-menu",{ref:"dates",refInFor:!0,attrs:{"close-on-content-click":!0,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(i){var a=i.on,s=i.attrs;return[n("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Pickling Date",readonly:"",clearable:""},model:{value:e.pickling_date,callback:function(n){t.$set(e,"pickling_date",n)},expression:"item.pickling_date"}},"v-text-field",s,!1),a))]}}],null,!0),model:{value:e.dateMenu,callback:function(n){t.$set(e,"dateMenu",n)},expression:"item.dateMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(t){e.dateMenu=!1}},model:{value:e.pickling_date,callback:function(n){t.$set(e,"pickling_date",n)},expression:"item.pickling_date"}})],1)],1),n("v-col",{staticClass:"py-0 my-0",attrs:{cols:"4"}},[n("v-select",{attrs:{outlined:"",dense:"",items:t.$store.state.shifts,label:"Pickling Shift","item-text":"name","item-value":"id",color:"grey"},model:{value:e.pickling_shift,callback:function(n){t.$set(e,"pickling_shift",t._n(n))},expression:"item.pickling_shift"}})],1)],1)})),1)],1),n("v-card-actions",{staticClass:"pb-5 mt-3"},[n("v-spacer"),n("v-btn",{attrs:{outlined:"",text:""},on:{click:t.close}},[t._v(" Cancel ")]),n("v-btn",{attrs:{dark:!t.haltSave,disabled:t.haltSave},on:{click:t.savePlanning}},[t._v(" Save ")])],1)],1)],1)],1)],1)},a=[],s=(n("d81d"),n("96cf"),n("1da1")),r=(n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0"),n("06c5"));function o(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return o=t.done,t},e:function(t){l=!0,s=t},f:function(){try{o||null==n["return"]||n["return"]()}finally{if(l)throw s}}}}var l=n("5629"),c={components:{},data:function(){return{selDate:null,dateMenu:!1}},mounted:function(){this.$store.dispatch("getShifts")},computed:{formTitle:function(){return"/pickling-stock"===this.$route.path?"Create Pickling Planning":"Edit Pickling Planning"},haltSave:function(){var t=!1;if(this.$store.state.selSlits.length>0){var e,n=o(this.$store.state.selSlits);try{for(n.s();!(e=n.n()).done;){var i=e.value;if(!i.pickling_date||!i.pickling_shift){t=!0;break}}}catch(a){n.e(a)}finally{n.f()}return t}return!0}},methods:{clearData:function(){this.$store.state.selSlits=[],this.$store.state.selRows=[]},savePlanning:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=[],i=t.$options.filters.calendarDate((new Date).toISOString()),t.$store.state.selSlits.map((function(t){n.push({pickling_shift:t.pickling_shift,pickling_date:t.pickling_date,status:"in-process for pickling",id:t.ID,updated_at:i})})),e.prev=3,e.next=6,l["a"].update(n);case 6:a=e.sent,console.log("result",a),e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](3),console.log("error",e.t0);case 13:return e.prev=13,t.$store.state.picklingDialog=!1,s={status:"in-process for pickling,approve for pickling"},"/pickling-stock"==t.$route.path&&(s={status:"slitted"}),t.$store.dispatch("getSlittedCoils",s),e.finish(13);case 19:case"end":return e.stop()}}),e,null,[[3,10,13,19]])})))()},close:function(){this.$store.state.picklingDialog=!1,this.$store.state.selSlits=[],this.$store.state.selRows=[]}}},d=c,u=n("2877"),f=Object(u["a"])(d,i,a,!1,null,null,null);e["a"]=f.exports},"6b75":function(t,e,n){"use strict";function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}n.d(e,"a",(function(){return i}))},"7db0":function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").find,s=n("44d2"),r=n("ae40"),o="find",l=!0,c=r(o);o in[]&&Array(1)[o]((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!c},{find:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},8418:function(t,e,n){"use strict";var i=n("c04e"),a=n("9bf2"),s=n("5c6c");t.exports=function(t,e,n){var r=i(e);r in t?a.f(t,r,s(0,n)):t[r]=n}},"92f3":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"my-3",attrs:{justify:"space-between"}},[n("v-col",{attrs:{cols:"auto"}},[n("h2",{staticClass:"pb-0 font-weight-bold"},[t._v("Slitted Coils Stock")]),n("p",{staticClass:"caption grey--text text--darken-2"},[t._v("Ready for pickling")])]),n("v-col",{staticClass:"pb-0",attrs:{cols:"auto"}},[n("v-row",{attrs:{justify:"end"}},[n("v-col",{staticClass:"d-flex",attrs:{cols:"auto"}},[n("v-select",{staticClass:"select-box",attrs:{outlined:"",dense:"",items:t.$store.state.thicknessList,label:"Select Thickness","item-text":"value","item-value":"value",color:"grey",clearable:""},on:{input:t.setOptions,"click:clear":function(e){return t.clearSearch("thickness")}},model:{value:t.selThickness,callback:function(e){t.selThickness=t._n(e)},expression:"selThickness"}})],1),n("v-col",{attrs:{cols:"auto"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,a=e.attrs;return[n("v-text-field",t._g(t._b({staticClass:"body-1",attrs:{dense:"",outlined:"",color:"grey",placeholder:"Select Date",readonly:"",clearable:""},on:{"click:clear":function(e){return t.clearSearch("date")}},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}},"v-text-field",a,!1),i))]}}]),model:{value:t.addedFromMenu,callback:function(e){t.addedFromMenu=e},expression:"addedFromMenu"}},[n("v-date-picker",{attrs:{"no-title":"",scrollable:""},on:{input:function(e){t.addedFromMenu=!1},change:t.setOptions},model:{value:t.addedFrom,callback:function(e){t.addedFrom=e},expression:"addedFrom"}})],1)],1),t.$store.state.selRows.length>0?n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{staticClass:"py-5 mr-1 body-2 font-weight-bold",attrs:{dark:""},on:{click:t.openDialog}},[t._v("Create Pickling Planning")])],1):t._e()],1)],1)],1),n("v-data-table",{staticClass:"elevation-1 coils",attrs:{headers:t.headers,items:t.$store.state.slittedCoils,"single-select":t.singleSelect,"item-key":"ID","show-select":"",loading:t.$store.state.isLoading,"disable-pagination":"","fixed-header":"",height:"calc(100vh - 190px)","hide-default-footer":""},scopedSlots:t._u([{key:"item.company",fn:function(e){var i=e.item;return[n("div",{staticClass:"body-2"},[n("span",[t._v(t._s(t.showCompany(i.company)))])])]}},{key:"item.slit_date",fn:function(e){var i=e.item;return[n("div",{staticClass:"body-2"},[n("span",[t._v(t._s(i.date?t.$options.filters.formatDate(i.slit_date):"---"))])])]}},{key:"item.status",fn:function(e){var i=e.item;return[n("div",{staticClass:"body-2"},[n("span",{staticClass:"text-capitalize",class:t.getTextColor(i.status)},[t._v(t._s(i.status))])])]}},{key:"item.actions",fn:function(e){var i=e.item;return[n("v-btn",{attrs:{small:"",outlined:""},on:{click:function(e){return t.createPlanning(i)}}},[t._v("Create Pickling Planning")])]}}],null,!0),model:{value:t.$store.state.selRows,callback:function(e){t.$set(t.$store.state,"selRows",e)},expression:"$store.state.selRows"}}),n("v-row",[t.$store.state.picklingDialog?n("PicklingPlanning"):t._e()],1)],1)},a=[],s=(n("4de4"),n("7db0"),n("c740"),n("d81d"),n("b0c0"),n("96cf"),n("1da1")),r=n("2909"),o=n("df4b"),l=n("5ce8"),c={components:{PicklingPlanning:l["a"]},data:function(){return{selDate:null,dateMenu:!1,data:[],editedIndex:-1,dialog:!1,selShift:"",selThickness:"",selRows:[],singleSelect:!1,actionsList:[{icon:"mdi-plus-circle",text:"create planning"},{icon:"mdi-pencil",text:"edit planning"},{icon:"mdi-view-grid",text:"preview planning"}],options:{},sortBy:"",orderBy:"desc",selCompany:null,selStatus:null,addedFromMenu:!1,addedFrom:null,maxDate:(new Date).toISOString(),headline:"",statusList:[{id:1,name:"Available"},{id:2,name:"In-Queue"},{id:3,name:"Slitted"}],headers:[{text:"Coil No",align:"start",value:"slit_no",sortable:!1},{text:"Parent Coil ID",value:"brand_no",sortable:!1},{text:"Thickness (mm)",value:"thickness",sortable:!1},{text:"Weight (kg)",value:"actual_weight",sortable:!1},{text:"Width (mm)",value:"actual_width",sortable:!1},{text:"Slitting Date",value:"slit_date",sortable:!1},{text:"Actions",value:"actions",sortable:!1,align:"end"}]}},mounted:function(){this.$store.state.selRows=[],this.$store.state.selSlits=[],this.$store.dispatch("getShifts");var t=JSON.parse(localStorage.getItem("user")).access;t&&t.slits_stock?(this.$store.dispatch("getSlittedCoils",{status:"slitted"}),this.$store.dispatch("getThicknesses")):this.$router.push({name:"forbidden"})},watch:{options:{handler:function(t){var e=t.sortBy,n=t.sortDesc;1===e.length&&1===n.length&&(1==n[0]?this.orderBy="desc":this.orderBy="asc",this.sortBy=e[0]),this.searchData()},deep:!0}},computed:{coilRows:function(){return this.$store.state.slittedCoils.filter((function(t){var e=[];return e="slitted"===t.status?[{icon:"mdi-plus-circle",text:"create planning"}]:"in-process for pickilng"===t.status?[{icon:"mdi-pencil",text:"edit"},{icon:"mdi-view-grid",text:"preview planning"}]:"approve for pickling"===t.status?[{icon:"mdi-pencil",text:"edit"}]:[{icon:"mdi-view-grid",text:"preview planning"},{icon:"mdi-pencil",text:"edit planning"}],t.actions=e}))},formTitle:function(){return this.editedIndex<=0?"Create Planning":"Edit Planning"},preventSlitting:function(){var t=this.selRows.findIndex((function(t){return"available"!=t.status.toLowerCase()}));return t>=0}},methods:{createPlanning:function(t){t.dateMenu=!1,this.$store.state.selSlits=[t],this.$store.state.picklingDialog=!0},openDialog:function(){this.$store.state.selRows.map((function(t){t.dateMenu=!1})),this.$store.state.picklingDialog=!0,this.$store.state.selSlits=Object(r["a"])(this.$store.state.selRows)},showCompany:function(t){return this.$store.state.companies.length>0?this.$store.state.companies.find((function(e){return e.id==t})).name:""},actions:function(t,e){console.log("text, item",t,e),"create planning"===t&&(this.dialog=!0,this.data=[e],this.$store.state.coilId=e.id),"preview planning"===t&&(this.$store.state.coilId=e.id,this.$store.state.slitDrawer=!0,console.log("preview")),"edit planning"===t&&(this.$store.state.coilId=e.id,this.$router.push({path:"/slit-planning/".concat(e.id)}))},openSlitForm:function(){this.$router.push({path:"/slit-planning"})},setOptions:function(){this.searchData()},getTextColor:function(t){var e="";switch(t){case"slitted":e="grey--text text--darken-1";break;case"available":e="green--text text--darken-2";break;case"edit-required":e="red--text text--lighten-1";break;default:e="yellow--text text--darken-4";break}return e},openForm:function(){console.log(this.$store.state),this.$store.state.coilId=null,this.$store.state.coilDrawer=!0},clearSearch:function(t){"date"===t?this.addedFrom=null:"status"===t?this.selStatus=null:"company"===t?this.selCompany=null:"thickness"===t?this.selThickness=null:"shift"===t&&(this.selShift=null),this.setOptions()},searchData:function(){var t={status:"slitted"};this.addedFrom&&(t.slit_date=this.addedFrom),this.selThickness&&(t.thickness=this.selThickness),this.$store.dispatch("getSlittedCoils",t)},deleteCoil:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o["a"].delete(t);case 3:i=n.sent,e.$store.dispatch("getCoils",{page:1}),console.log("result",i),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),console.log("error",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()},editCoil:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o["a"].update(t.id,t);case 3:i=n.sent,e.$store.dispatch("getCoils",{page:1}),console.log("result",i),n.next=11;break;case 8:n.prev=8,n.t0=n["catch"](0),console.log("error",n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})))()}}},d=c,u=(n("b878"),n("2877")),f=Object(u["a"])(d,i,a,!1,null,null,null);e["default"]=f.exports},"9bdd":function(t,e,n){var i=n("825a"),a=n("2a62");t.exports=function(t,e,n,s){try{return s?e(i(n)[0],n[1]):e(n)}catch(r){throw a(t),r}}},a628:function(t,e,n){},a630:function(t,e,n){var i=n("23e7"),a=n("4df4"),s=n("1c7e"),r=!s((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:r},{from:a})},b878:function(t,e,n){"use strict";n("a628")},c740:function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").findIndex,s=n("44d2"),r=n("ae40"),o="findIndex",l=!0,c=r(o);o in[]&&Array(1)[o]((function(){l=!1})),i({target:"Array",proto:!0,forced:l||!c},{findIndex:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}}),s(o)},d81d:function(t,e,n){"use strict";var i=n("23e7"),a=n("b727").map,s=n("1dde"),r=n("ae40"),o=s("map"),l=r("map");i({target:"Array",proto:!0,forced:!o||!l},{map:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}})},fb6a:function(t,e,n){"use strict";var i=n("23e7"),a=n("861d"),s=n("e8b5"),r=n("23cb"),o=n("50c4"),l=n("fc6a"),c=n("8418"),d=n("b622"),u=n("1dde"),f=n("ae40"),p=u("slice"),h=f("slice",{ACCESSORS:!0,0:0,1:2}),v=d("species"),g=[].slice,m=Math.max;i({target:"Array",proto:!0,forced:!p||!h},{slice:function(t,e){var n,i,d,u=l(this),f=o(u.length),p=r(t,f),h=r(void 0===e?f:e,f);if(s(u)&&(n=u.constructor,"function"!=typeof n||n!==Array&&!s(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(u,p,h);for(i=new(void 0===n?Array:n)(m(h-p,0)),d=0;p<h;p++,d++)p in u&&c(i,d,u[p]);return i.length=d,i}})}}]);
//# sourceMappingURL=chunk-15ae6a2e.df83e81c.js.map