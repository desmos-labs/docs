"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[47344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,u=p["".concat(o,".").concat(g)]||p[g]||f[g]||s;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=p;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,i[1]=d;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},63087:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>f,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const s={id:"dtag-transfer-requests-max-fields",title:"dtag_transfer_requests_max_fields",hide_table_of_contents:!1},i=void 0,d={unversionedId:"graphql/objects/dtag-transfer-requests-max-fields",id:"graphql/objects/dtag-transfer-requests-max-fields",title:"dtag_transfer_requests_max_fields",description:"aggregate max on columns",source:"@site/docs/07-graphql/objects/dtag-transfer-requests-max-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/dtag-transfer-requests-max-fields",permalink:"/next/graphql/objects/dtag-transfer-requests-max-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/dtag-transfer-requests-max-fields.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"dtag-transfer-requests-max-fields",title:"dtag_transfer_requests_max_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_avg_fields",permalink:"/next/graphql/objects/dtag-transfer-requests-avg-fields"},next:{title:"dtag_transfer_requests_min_fields",permalink:"/next/graphql/objects/dtag-transfer-requests-min-fields"}},o={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>receiver_address</code> (<code>String</code>)",id:"receiver_address-string",level:4},{value:"<code>sender_address</code> (<code>String</code>)",id:"sender_address-string",level:4}],c={toc:l};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"aggregate max on columns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type dtag_transfer_requests_max_fields {\n  height: bigint\n  receiver_address: String\n  sender_address: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"height-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"receiver_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"sender_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}f.isMDXComponent=!0}}]);