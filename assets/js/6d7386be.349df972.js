"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13816],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,_=d["".concat(l,".").concat(f)]||d[f]||c[f]||s;return r?n.createElement(_,i(i({ref:t},p),{},{components:r})):n.createElement(_,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<s;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const s={id:"dtag-transfer-requests-arr-rel-insert-input",title:"dtag_transfer_requests_arr_rel_insert_input",hide_table_of_contents:!1},i=void 0,o={unversionedId:"graphql/inputs/dtag-transfer-requests-arr-rel-insert-input",id:"graphql/inputs/dtag-transfer-requests-arr-rel-insert-input",title:"dtag_transfer_requests_arr_rel_insert_input",description:'input type for inserting array relation for remote table "dtagtransferrequests"',source:"@site/docs/07-graphql/inputs/dtag-transfer-requests-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-arr-rel-insert-input",permalink:"/next/graphql/inputs/dtag-transfer-requests-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/dtag-transfer-requests-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"dtag-transfer-requests-arr-rel-insert-input",title:"dtag_transfer_requests_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_aggregate_order_by",permalink:"/next/graphql/inputs/dtag-transfer-requests-aggregate-order-by"},next:{title:"dtag_transfer_requests_avg_order_by",permalink:"/next/graphql/inputs/dtag-transfer-requests-avg-order-by"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[dtag_transfer_requests_insert_input!]!</code>)",id:"data-dtag_transfer_requests_insert_input",level:4},{value:"<code>on_conflict</code> (<code>dtag_transfer_requests_on_conflict</code>)",id:"on_conflict-dtag_transfer_requests_on_conflict",level:4}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'input type for inserting array relation for remote table "dtag_transfer_requests"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_arr_rel_insert_input {\n  data: [dtag_transfer_requests_insert_input!]!\n  on_conflict: dtag_transfer_requests_on_conflict\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"data-dtag_transfer_requests_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_insert_input!]!")),")"),(0,a.kt)("h4",{id:"on_conflict-dtag_transfer_requests_on_conflict"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-on-conflict"},(0,a.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_on_conflict")),")"),(0,a.kt)("p",null,"on conflict condition"))}c.isMDXComponent=!0}}]);