"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[86824],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),l=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),u=a,y=f["".concat(i,".").concat(u)]||f[u]||c[u]||o;return t?n.createElement(y,d(d({ref:r},p),{},{components:t})):n.createElement(y,d({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=f;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,d[1]=s;for(var l=2;l<o;l++)d[l]=t[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},50784:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=t(87462),a=(t(67294),t(3905));const o={id:"dtag-transfer-requests-order-by",title:"dtag_transfer_requests_order_by",hide_table_of_contents:!1},d=void 0,s={unversionedId:"graphql/inputs/dtag-transfer-requests-order-by",id:"graphql/inputs/dtag-transfer-requests-order-by",title:"dtag_transfer_requests_order_by",description:'Ordering options when selecting data from "dtagtransferrequests".',source:"@site/docs/07-graphql/inputs/dtag-transfer-requests-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-order-by",permalink:"/next/graphql/inputs/dtag-transfer-requests-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/dtag-transfer-requests-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"dtag-transfer-requests-order-by",title:"dtag_transfer_requests_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_min_order_by",permalink:"/next/graphql/inputs/dtag-transfer-requests-min-order-by"},next:{title:"_int8_comparison_exp",permalink:"/next/graphql/inputs/int-8-comparison-exp"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>profile</code> (<code>profile_order_by</code>)",id:"profile-profile_order_by",level:4},{value:"<code>profileBySenderAddress</code> (<code>profile_order_by</code>)",id:"profilebysenderaddress-profile_order_by",level:4},{value:"<code>receiver_address</code> (<code>order_by</code>)",id:"receiver_address-order_by",level:4},{value:"<code>sender_address</code> (<code>order_by</code>)",id:"sender_address-order_by",level:4}],p={toc:l};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "dtag_transfer_requests".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_order_by {\n  profile: profile_order_by\n  profileBySenderAddress: profile_order_by\n  receiver_address: order_by\n  sender_address: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"profile-profile_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,a.kt)("h4",{id:"profilebysenderaddress-profile_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"profileBySenderAddress"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,a.kt)("h4",{id:"receiver_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"sender_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);