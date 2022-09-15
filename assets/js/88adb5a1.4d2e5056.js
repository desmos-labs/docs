"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[21598],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>_});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(t),_=o,b=d["".concat(s,".").concat(_)]||d[_]||c[_]||i;return t?n.createElement(b,a(a({ref:r},u),{},{components:t})):n.createElement(b,a({ref:r},u))}));function _(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},17825:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={id:"report-reason-insert-input",title:"report_reason_insert_input",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/inputs/report-reason-insert-input",id:"graphql/inputs/report-reason-insert-input",title:"report_reason_insert_input",description:'input type for inserting data into table "report_reason"',source:"@site/docs/07-graphql/inputs/report-reason-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-reason-insert-input",permalink:"/next/graphql/inputs/report-reason-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/report-reason-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"report-reason-insert-input",title:"report_reason_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_reason_inc_input",permalink:"/next/graphql/inputs/report-reason-inc-input"},next:{title:"report_reason_max_order_by",permalink:"/next/graphql/inputs/report-reason-max-order-by"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>reason</code> (<code>subspace_report_reason_obj_rel_insert_input</code>)",id:"reason-subspace_report_reason_obj_rel_insert_input",level:4},{value:"<code>reason_row_id</code> (<code>bigint</code>)",id:"reason_row_id-bigint",level:4},{value:"<code>report</code> (<code>report_obj_rel_insert_input</code>)",id:"report-report_obj_rel_insert_input",level:4},{value:"<code>report_row_id</code> (<code>bigint</code>)",id:"report_row_id-bigint",level:4}],u={toc:l};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'input type for inserting data into table "report_reason"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_reason_insert_input {\n  reason: subspace_report_reason_obj_rel_insert_input\n  reason_row_id: bigint\n  report: report_obj_rel_insert_input\n  report_row_id: bigint\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"reason-subspace_report_reason_obj_rel_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-obj-rel-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_obj_rel_insert_input")),")"),(0,o.kt)("h4",{id:"reason_row_id-bigint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reason_row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,o.kt)("h4",{id:"report-report_obj_rel_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"report"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/report-obj-rel-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"report_obj_rel_insert_input")),")"),(0,o.kt)("h4",{id:"report_row_id-bigint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"report_row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint")),")"))}c.isMDXComponent=!0}}]);