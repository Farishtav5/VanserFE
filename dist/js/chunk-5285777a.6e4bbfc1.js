(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5285777a"],{8418:function(t,e,i){"use strict";var n=i("c04e"),s=i("9bf2"),l=i("5c6c");t.exports=function(t,e,i){var a=n(e);a in t?s.f(t,a,l(0,i)):t[a]=i}},a434:function(t,e,i){"use strict";var n=i("23e7"),s=i("23cb"),l=i("a691"),a=i("50c4"),o=i("7b0b"),c=i("65f0"),r=i("8418"),d=i("1dde"),u=i("ae40"),v=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),f=Math.max,h=Math.min,m=9007199254740991,_="Maximum allowed length exceeded";n({target:"Array",proto:!0,forced:!v||!p},{splice:function(t,e){var i,n,d,u,v,p,b=o(this),w=a(b.length),g=s(t,w),y=arguments.length;if(0===y?i=n=0:1===y?(i=0,n=w-g):(i=y-2,n=h(f(l(e),0),w-g)),w+i-n>m)throw TypeError(_);for(d=c(b,n),u=0;u<n;u++)v=g+u,v in b&&r(d,u,b[v]);if(d.length=n,i<n){for(u=g;u<w-n;u++)v=u+n,p=u+i,v in b?b[p]=b[v]:delete b[p];for(u=w;u>w-n+i;u--)delete b[u-1]}else if(i>n)for(u=w-n;u>g;u--)v=u+n-1,p=u+i-1,v in b?b[p]=b[v]:delete b[p];for(u=0;u<i;u++)b[u+g]=arguments[u+2];return b.length=w-n+i,d}})},c740:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").findIndex,l=i("44d2"),a=i("ae40"),o="findIndex",c=!0,r=a(o);o in[]&&Array(1)[o]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!r},{findIndex:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),l(o)},d81d:function(t,e,i){"use strict";var n=i("23e7"),s=i("b727").map,l=i("1dde"),a=i("ae40"),o=l("map"),c=a("map");n({target:"Array",proto:!0,forced:!o||!c},{map:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},ea81:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",[i("h2",{staticClass:"my-5 mx-3"},[t._v("Slit Selection")]),t._l(t.$store.state.selRows,(function(t,e){return i("div",{key:e},[i("SlittedCoil",{attrs:{coilData:t}})],1)}))],2)},s=[],l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-container",{staticClass:"my-5"},[i("v-expansion-panels",[i("v-expansion-panel",[i("v-expansion-panel-header",{scopedSlots:t._u([{key:"default",fn:function(e){var n=e.open;return[[i("v-row",{attrs:{"no-gutters":""}},[i("v-col",{staticClass:"my-3",attrs:{cols:"12"}},[i("h3",[t._v("Selection "+t._s(t.coilData.brand_no))])]),n?i("v-col",{attrs:{cols:"6"}}):t._e()],1)]]}}])}),i("v-expansion-panel-content",[i("v-row",[i("v-col",{attrs:{cols:"4"}},[i("h4",{staticClass:"mb-5"},[t._v("Avilable Coil")]),i("p",[t._v("ID: "+t._s(t.coilData.id))]),i("p",[t._v("Company: "+t._s(t.coilData.company))]),i("p",[t._v("Weight: "+t._s(t.coilData.weight)+" kg")]),i("p",[t._v("Width: "+t._s(t.coilData.width)+" mm")]),i("p",[t._v("Thickness: "+t._s(t.coilData.thickness)+" mm")])]),i("v-col",{attrs:{cols:"8"}},[i("div",{staticClass:"d-flex pb-6 justify-space-between"},[i("div",[i("v-btn",{attrs:{dark:""},on:{click:t.addRule}},[t._v("Add Slit")]),t.slittedItems.length>0?i("v-btn",{staticClass:"ml-3",attrs:{outlined:""},on:{click:t.addRule}},[t._v("Save Slit")]):t._e()],1),i("p",[t._v("Avilable width: "+t._s(t.avilableWidth)+" mm")])]),i("div",t._l(t.slittedItems,(function(e,n){return i("div",{key:n},[i("v-row",[i("v-col",{attrs:{cols:"12"}},[i("v-divider",{staticClass:"py-2"})],1),i("v-col",{attrs:{cols:"12"}},[i("v-row",[i("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[i("v-text-field",{attrs:{label:"Slitted Weight (kg)",outlined:"",dense:"",color:"grey",type:"number"},model:{value:e.weight,callback:function(i){t.$set(e,"weight",t._n(i))},expression:"item.weight"}})],1),i("v-col",{staticClass:"py-0",attrs:{cols:"auto"}},[i("v-text-field",{attrs:{label:"Slitted Width (mm)",outlined:"",dense:"",color:"grey",type:"number"},model:{value:e.width,callback:function(i){t.$set(e,"width",t._n(i))},expression:"item.width"}})],1),i("v-col",{staticClass:"py-1",attrs:{cols:"auto"}},[i("v-icon",{staticClass:"mr-2",on:{click:function(i){return t.copySlit(e)}}},[t._v(" mdi-content-duplicate ")]),i("v-icon",{on:{click:function(i){return t.deleteSlit(e.id)}}},[t._v(" mdi-delete ")])],1)],1)],1)],1)],1)})),0)])],1)],1)],1)],1)],1)},a=[],o=(i("c740"),i("d81d"),i("a434"),{data:function(){return{rule:!0,data:{},slittedItems:[]}},props:{coilData:Object},computed:{avilableWidth:function(){var t=0;return this.slittedItems.map((function(e){t+=e.width})),this.coilData.width-t}},mounted:function(){},methods:{deleteSlit:function(t){var e=this.slittedItems.findIndex((function(e){return e.id==t}));this.slittedItems.splice(e,1)},copySlit:function(t){var e=Object.assign({},t);e.id=this.slittedItems.length+1,this.slittedItems.push(e)},addRule:function(){this.slittedItems.push({id:this.slittedItems.length+1,width:"",weight:""})}}}),c=o,r=i("2877"),d=Object(r["a"])(c,l,a,!1,null,null,null),u=d.exports,v={components:{SlittedCoil:u},data:function(){return{}},mounted:function(){}},p=v,f=Object(r["a"])(p,n,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-5285777a.6e4bbfc1.js.map