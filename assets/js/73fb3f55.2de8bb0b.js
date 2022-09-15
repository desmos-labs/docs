"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[97733],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),i=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},l=function(e){var r=i(e.components);return o.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(t),m=n,_=u["".concat(p,".").concat(m)]||u[m]||c[m]||a;return t?o.createElement(_,d(d({ref:r},l),{},{components:t})):o.createElement(_,d({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,d=new Array(a);d[0]=u;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:n,d[1]=s;for(var i=2;i<a;i++)d[i]=t[i];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88837:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const a={id:"report-reason-stddev-samp-order-by",title:"report_reason_stddev_samp_order_by",hide_table_of_contents:!1},d=void 0,s={unversionedId:"graphql/inputs/report-reason-stddev-samp-order-by",id:"graphql/inputs/report-reason-stddev-samp-order-by",title:"report_reason_stddev_samp_order_by",description:'order by stddevsamp() on columns of table "reportreason"',source:"@site/docs/07-graphql/inputs/report-reason-stddev-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-reason-stddev-samp-order-by",permalink:"/next/graphql/inputs/report-reason-stddev-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/report-reason-stddev-samp-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"report-reason-stddev-samp-order-by",title:"report_reason_stddev_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_reason_stddev_pop_order_by",permalink:"/next/graphql/inputs/report-reason-stddev-pop-order-by"},next:{title:"report_reason_sum_order_by",permalink:"/next/graphql/inputs/report-reason-sum-order-by"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>reason_row_id</code> (<code>order_by</code>)",id:"reason_row_id-order_by",level:4},{value:"<code>report_row_id</code> (<code>order_by</code>)",id:"report_row_id-order_by",level:4}],l={toc:i};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by stddev_samp() on columns of table "report_reason"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_reason_stddev_samp_order_by {\n  reason_row_id: order_by\n  report_row_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"reason_row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reason_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"report_row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"report_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);