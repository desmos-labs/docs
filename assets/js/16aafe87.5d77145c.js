"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[68297],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=d(r),f=i,_=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return r?n.createElement(_,s(s({ref:t},l),{},{components:r})):n.createElement(_,s({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},53206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=r(87462),i=(r(67294),r(3905));const a={id:"dtag-transfer-requests-insert-input",title:"dtag_transfer_requests_insert_input",hide_table_of_contents:!1},s=void 0,o={unversionedId:"graphql/inputs/dtag-transfer-requests-insert-input",id:"graphql/inputs/dtag-transfer-requests-insert-input",title:"dtag_transfer_requests_insert_input",description:'input type for inserting data into table "dtagtransferrequests"',source:"@site/docs/07-graphql/inputs/dtag-transfer-requests-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-insert-input",permalink:"/next/graphql/inputs/dtag-transfer-requests-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/dtag-transfer-requests-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"dtag-transfer-requests-insert-input",title:"dtag_transfer_requests_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_inc_input",permalink:"/next/graphql/inputs/dtag-transfer-requests-inc-input"},next:{title:"dtag_transfer_requests_max_order_by",permalink:"/next/graphql/inputs/dtag-transfer-requests-max-order-by"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>profile</code> (<code>profile_obj_rel_insert_input</code>)",id:"profile-profile_obj_rel_insert_input",level:4},{value:"<code>profileBySenderAddress</code> (<code>profile_obj_rel_insert_input</code>)",id:"profilebysenderaddress-profile_obj_rel_insert_input",level:4},{value:"<code>receiver_address</code> (<code>String</code>)",id:"receiver_address-string",level:4},{value:"<code>sender_address</code> (<code>String</code>)",id:"sender_address-string",level:4}],l={toc:d};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'input type for inserting data into table "dtag_transfer_requests"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_insert_input {\n  height: bigint\n  profile: profile_obj_rel_insert_input\n  profileBySenderAddress: profile_obj_rel_insert_input\n  receiver_address: String\n  sender_address: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"height-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"profile-profile_obj_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-obj-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"profile_obj_rel_insert_input")),")"),(0,i.kt)("h4",{id:"profilebysenderaddress-profile_obj_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"profileBySenderAddress"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/profile-obj-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"profile_obj_rel_insert_input")),")"),(0,i.kt)("h4",{id:"receiver_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"sender_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);