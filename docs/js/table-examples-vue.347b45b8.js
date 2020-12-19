(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["table-examples-vue"],{c9fb:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Default")]),t("div",{staticClass:"title3"},[e._v("With data")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="table1.items" :headers="table1.headers")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table1: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{items:e.table1.items,headers:e.table1.headers}})],1),t("div",{staticClass:"title3"},[e._v("Without data")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="[]" :headers="table1.headers")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table1: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{items:[],headers:e.table1.headers}})],1),t("title-link",{attrs:{h2:""}},[e._v("No headers")]),e._m(0),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="table1.items" :headers="table1.headers" no-headers)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table1: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{items:e.table1.items,headers:e.table1.headers,"no-headers":""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Initial Sorting")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="table1.items" :headers="table1.headers" :sort.sync="table1.sort")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table1: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n    ],\n    sort: [{ firstName: 'asc' }]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{items:e.table1.items,headers:e.table1.headers,sort:e.table1.sort},on:{"update:sort":function(a){return e.$set(e.table1,"sort",a)}}})],1),t("title-link",{attrs:{h2:""}},[e._v("Filters")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table1: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n    ]\n  }\n})")]},proxy:!0}])},[e._v("Coming soon.")])],1)},n=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Even with the "),t("code",[e._v("no-headers")]),e._v(" option, the "),t("code",[e._v("headers")]),e._v(" are still required for various\nreasons, like getting the number of columns and sorting/filtering keys.")])}],l={data:function(){return{table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:"1",firstName:"Floretta",lastName:"Sampson"},{id:"2",firstName:"Nellie",lastName:"Lynn"},{id:"3",firstName:"Rory",lastName:"Bristol"},{id:"4",firstName:"Daley",lastName:"Elliott"},{id:"5",firstName:"Virgil",lastName:"Carman"}],sort:[{firstName:"asc"}]}}}},i=l,r=t("2877"),m=Object(r["a"])(i,s,n,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=table-examples-vue.347b45b8.js.map