"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[52912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70976:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"report-arr-rel-insert-input",title:"report_arr_rel_insert_input",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/inputs/report-arr-rel-insert-input",id:"graphql/inputs/report-arr-rel-insert-input",title:"report_arr_rel_insert_input",description:'input type for inserting array relation for remote table "report"',source:"@site/docs/07-graphql/inputs/report-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-arr-rel-insert-input",permalink:"/next/graphql/inputs/report-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/report-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"report-arr-rel-insert-input",title:"report_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_append_input",permalink:"/next/graphql/inputs/report-append-input"},next:{title:"report_avg_order_by",permalink:"/next/graphql/inputs/report-avg-order-by"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[report_insert_input!]!</code>)",id:"data-report_insert_input",level:4},{value:"<code>on_conflict</code> (<code>report_on_conflict</code>)",id:"on_conflict-report_on_conflict",level:4}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'input type for inserting array relation for remote table "report"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_arr_rel_insert_input {\n  data: [report_insert_input!]!\n  on_conflict: report_on_conflict\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"data-report_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/report-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[report_insert_input!]!")),")"),(0,o.kt)("h4",{id:"on_conflict-report_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/report-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"report_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"))}u.isMDXComponent=!0}}]);