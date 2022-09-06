"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[84162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),l=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),f=n,u=m["".concat(d,".").concat(f)]||m[f]||c[f]||i;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const i={id:"report-max-fields",title:"report_max_fields",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/objects/report-max-fields",id:"graphql/objects/report-max-fields",title:"report_max_fields",description:"aggregate max on columns",source:"@site/docs/07-graphql/objects/report-max-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/report-max-fields",permalink:"/next/graphql/objects/report-max-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/report-max-fields.mdx",tags:[],version:"current",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"report-max-fields",title:"report_max_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_avg_fields",permalink:"/next/graphql/objects/report-avg-fields"},next:{title:"report_min_fields",permalink:"/next/graphql/objects/report-min-fields"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>creation_date</code> (<code>timestamp</code>)",id:"creation_date-timestamp",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>message</code> (<code>String</code>)",id:"message-string",level:4},{value:"<code>reporter_address</code> (<code>String</code>)",id:"reporter_address-string",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4}],p={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"aggregate max on columns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type report_max_fields {\n  creation_date: timestamp\n  id: bigint\n  message: String\n  reporter_address: String\n  subspace_id: bigint\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"creation_date-timestamp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,n.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,n.kt)("h4",{id:"id-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,n.kt)("h4",{id:"message-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"message"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"reporter_address-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reporter_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"subspace_id-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint")),")"))}c.isMDXComponent=!0}}]);