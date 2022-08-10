"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88964],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={id:"report-select-column",title:"report_select_column",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/enums/report-select-column",id:"version-4.2.0/graphql/enums/report-select-column",title:"report_select_column",description:'select columns of table "report"',source:"@site/versioned_docs/version-4.2.0/07-graphql/enums/report-select-column.mdx",sourceDirName:"07-graphql/enums",slug:"/graphql/enums/report-select-column",permalink:"/graphql/enums/report-select-column",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/enums/report-select-column.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"report-select-column",title:"report_select_column",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction_select_column",permalink:"/graphql/enums/reaction-select-column"},next:{title:"reports_params_select_column",permalink:"/graphql/enums/reports-params-select-column"}},s={},i=[{value:"Values",id:"values",level:3},{value:"<code>creation_date</code>",id:"creation_date",level:4},{value:"<code>id</code>",id:"id",level:4},{value:"<code>message</code>",id:"message",level:4},{value:"<code>reporter_address</code>",id:"reporter_address",level:4},{value:"<code>subspace_id</code>",id:"subspace_id",level:4},{value:"<code>target</code>",id:"target",level:4}],p={toc:i};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'select columns of table "report"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum report_select_column {\n  creation_date\n  id\n  message\n  reporter_address\n  subspace_id\n  target\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"creation_date"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"creation_date"))),(0,a.kt)("p",null,"column name"),(0,a.kt)("h4",{id:"id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))),(0,a.kt)("p",null,"column name"),(0,a.kt)("h4",{id:"message"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"message"))),(0,a.kt)("p",null,"column name"),(0,a.kt)("h4",{id:"reporter_address"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"reporter_address"))),(0,a.kt)("p",null,"column name"),(0,a.kt)("h4",{id:"subspace_id"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))),(0,a.kt)("p",null,"column name"),(0,a.kt)("h4",{id:"target"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"target"))),(0,a.kt)("p",null,"column name"))}u.isMDXComponent=!0}}]);