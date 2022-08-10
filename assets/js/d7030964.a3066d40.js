"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[84680],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=n,h=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},47835:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={id:"report",title:"report",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/objects/report",id:"graphql/objects/report",title:"report",description:'columns and relationships of "report"',source:"@site/docs/07-graphql/objects/report.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/report",permalink:"/next/graphql/objects/report",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/report.mdx",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"report",title:"report",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_variance_fields",permalink:"/next/graphql/objects/report-variance-fields"},next:{title:"reports_params",permalink:"/next/graphql/objects/reports-params"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>creation_date</code> (<code>timestamp!</code>)",id:"creation_date-timestamp",level:4},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"<code>message</code> (<code>String</code>)",id:"message-string",level:4},{value:"<code>reasons</code> (<code>[report_reason!]!</code>)",id:"reasons-report_reason",level:4},{value:"<code>reporter_address</code> (<code>String!</code>)",id:"reporter_address-string",level:4},{value:"<code>subspace</code> (<code>subspace!</code>)",id:"subspace-subspace",level:4},{value:"<code>subspace_id</code> (<code>bigint!</code>)",id:"subspace_id-bigint",level:4},{value:"<code>target</code> (<code>jsonb!</code>)",id:"target-jsonb",level:4}],d={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'columns and relationships of "report"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type report {\n  creation_date: timestamp!\n  id: bigint!\n  message: String\n  reasons(\n  limit: Int\n  offset: Int\n  order_by: [report_reason_order_by!]\n  where: report_reason_bool_exp\n): [report_reason!]!\n  reporter_address: String!\n  subspace: subspace!\n  subspace_id: bigint!\n  target(\n  path: String\n): jsonb!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"creation_date-timestamp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creation_date"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,n.kt)("inlineCode",{parentName:"a"},"timestamp!")),")"),(0,n.kt)("h4",{id:"id-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,n.kt)("h4",{id:"message-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"message"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"reasons-report_reason"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reasons"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/report-reason"},(0,n.kt)("inlineCode",{parentName:"a"},"[report_reason!]!")),")"),(0,n.kt)("p",null,"An array relationship"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"limit-int"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"offset-int"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"order_by-report_reason_order_by"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h5",href:"../inputs/report-reason-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[report_reason_order_by!]")),")"))),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"where-report_reason_bool_exp"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h5",href:"../inputs/report-reason-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"report_reason_bool_exp")),")"))),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h4",{id:"reporter_address-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reporter_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,n.kt)("h4",{id:"subspace-subspace"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace!")),")"),(0,n.kt)("p",null,"An object relationship"),(0,n.kt)("h4",{id:"subspace_id-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,n.kt)("h4",{id:"target-jsonb"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"target"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,n.kt)("inlineCode",{parentName:"a"},"jsonb!")),")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h5",{parentName:"li",id:"path-string"},(0,n.kt)("a",{parentName:"h5",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,n.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,n.kt)("p",null,"JSON select path"))}c.isMDXComponent=!0}}]);