(window["webpackJsonpWaveUI"]=window["webpackJsonpWaveUI"]||[]).push([["table-examples-vue"],{c9fb:function(e,a,t){"use strict";t.r(a);var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("title-link",{attrs:{h2:""}},[e._v("Default")]),t("div",{staticClass:"title3"},[e._v("With data")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="table.items" :headers="table.headers")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{items:e.table1.items,headers:e.table1.headers}})],1),t("div",{staticClass:"title3"},[e._v("Without data")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="[]" :headers="table.headers")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{items:[],headers:e.table1.headers}})],1),t("title-link",{attrs:{h2:""}},[e._v("No headers")]),e._m(0),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="table.items" :headers="table.headers" no-headers)')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{items:e.table1.items,headers:e.table1.headers,"no-headers":""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Fixed headers")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="table.items" :headers="table.headers" fixed-headers style="height: 250px")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n      { id: '6', firstName: 'Baldwin', lastName: 'Morison' },\n      { id: '7', firstName: 'Beckah', lastName: 'Mann' },\n      { id: '8', firstName: 'Davie', lastName: 'Forester' },\n      { id: '9', firstName: 'Andi', lastName: 'Montgomery' },\n      { id: '10', firstName: 'Magnolia', lastName: 'Kirk' },\n      { id: '11', firstName: 'Hamilton', lastName: 'Mallory' },\n      { id: '12', firstName: 'Sheree', lastName: 'Castle' },\n      { id: '13', firstName: 'Rebekah', lastName: 'Eason' },\n      { id: '14', firstName: 'Maude', lastName: 'Hayley' },\n      { id: '15', firstName: 'Josie', lastName: 'Richard' },\n    ]\n  }\n})\n")]},proxy:!0}])},[t("w-table",{staticStyle:{height:"250px"},attrs:{items:e.table2.items,headers:e.table2.headers,"fixed-headers":""}})],1),t("title-link",{attrs:{h2:""}},[e._v("Initial Sorting")]),e._m(1),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){return[e._v('w-table(:items="table.items" :headers="table.headers" :sort.sync="table.sort")')]},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n    ],\n    sort: '+firstName'\n  }\n})\n")]},proxy:!0}])},[t("w-table",{attrs:{items:e.table1.items,headers:e.table1.headers,sort:e.table1.sort},on:{"update:sort":function(a){return e.$set(e.table1,"sort",a)}}})],1),t("title-link",{attrs:{h2:""}},[e._v("Filters")]),t("example",{scopedSlots:e._u([{key:"pug",fn:function(){},proxy:!0},{key:"js",fn:function(){return[e._v("data: () => ({\n  table: {\n    headers: [\n      { label: 'ID', key: 'id' },\n      { label: 'First name', key: 'firstName' },\n      { label: 'Last name', key: 'lastName' },\n    ],\n    items: [\n      { id: '1', firstName: 'Floretta', lastName: 'Sampson' },\n      { id: '2', firstName: 'Nellie', lastName: 'Lynn' },\n      { id: '3', firstName: 'Rory', lastName: 'Bristol' },\n      { id: '4', firstName: 'Daley', lastName: 'Elliott' },\n      { id: '5', firstName: 'Virgil', lastName: 'Carman' },\n    ]\n  }\n})")]},proxy:!0}])},[e._v("Coming soon.")])],1)},i=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Even with the "),t("code",[e._v("no-headers")]),e._v(" option, the "),t("code",[e._v("headers")]),e._v(" are still required for various\nreasons, like getting the number of columns and sorting/filtering keys.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("To make the sorting API very easy to use and remember (and avoid complex array or object structures),\nthe "),t("strong",{staticClass:"code"},[e._v("w-table")]),e._v("'s sorting is defined with a header key string preceded with a "),t("code",[e._v("+")]),e._v(" for ASC,\nor a "),t("code",[e._v("-")]),e._v(" for DESC. For instance, in this example: "),t("code",[e._v("'+firstName'")]),e._v(".")])}],l={data:function(){return{table1:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:"1",firstName:"Floretta",lastName:"Sampson"},{id:"2",firstName:"Nellie",lastName:"Lynn"},{id:"3",firstName:"Rory",lastName:"Bristol"},{id:"4",firstName:"Daley",lastName:"Elliott"},{id:"5",firstName:"Virgil",lastName:"Carman"}],sort:"+firstName"},table2:{headers:[{label:"ID",key:"id"},{label:"First name",key:"firstName"},{label:"Last name",key:"lastName"}],items:[{id:"1",firstName:"Floretta",lastName:"Sampson"},{id:"2",firstName:"Nellie",lastName:"Lynn"},{id:"3",firstName:"Rory",lastName:"Bristol"},{id:"4",firstName:"Daley",lastName:"Elliott"},{id:"5",firstName:"Virgil",lastName:"Carman"},{id:"6",firstName:"Baldwin",lastName:"Morison"},{id:"7",firstName:"Beckah",lastName:"Mann"},{id:"8",firstName:"Davie",lastName:"Forester"},{id:"9",firstName:"Andi",lastName:"Montgomery"},{id:"10",firstName:"Magnolia",lastName:"Kirk"},{id:"11",firstName:"Hamilton",lastName:"Mallory"},{id:"12",firstName:"Sheree",lastName:"Castle"},{id:"13",firstName:"Rebekah",lastName:"Eason"},{id:"14",firstName:"Maude",lastName:"Hayley"},{id:"15",firstName:"Josie",lastName:"Richard"}]}}}},n=l,r=t("2877"),m=Object(r["a"])(n,s,i,!1,null,null,null);a["default"]=m.exports}}]);
//# sourceMappingURL=table-examples-vue.5672aaa1.js.map