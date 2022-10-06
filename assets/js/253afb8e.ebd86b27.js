"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[81555],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),c=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},_=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),_=c(t),d=a,f=_["".concat(i,".").concat(d)]||_[d]||u[d]||o;return t?n.createElement(f,s(s({ref:r},l),{},{components:t})):n.createElement(f,s({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=_;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var c=2;c<o;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},59952:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={id:"subspace-report-reason-arr-rel-insert-input",title:"subspace_report_reason_arr_rel_insert_input",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/subspace-report-reason-arr-rel-insert-input",id:"graphql/inputs/subspace-report-reason-arr-rel-insert-input",title:"subspace_report_reason_arr_rel_insert_input",description:'input type for inserting array relation for remote table "subspacereportreason"',source:"@site/docs/07-graphql/inputs/subspace-report-reason-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-report-reason-arr-rel-insert-input",permalink:"/next/graphql/inputs/subspace-report-reason-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-report-reason-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"subspace-report-reason-arr-rel-insert-input",title:"subspace_report_reason_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_report_reason_aggregate_order_by",permalink:"/next/graphql/inputs/subspace-report-reason-aggregate-order-by"},next:{title:"subspace_report_reason_avg_order_by",permalink:"/next/graphql/inputs/subspace-report-reason-avg-order-by"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[subspace_report_reason_insert_input!]!</code>)",id:"data-subspace_report_reason_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_report_reason_on_conflict</code>)",id:"on_conflict-subspace_report_reason_on_conflict",level:4}],l={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'input type for inserting array relation for remote table "subspace_report_reason"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_report_reason_arr_rel_insert_input {\n  data: [subspace_report_reason_insert_input!]!\n  on_conflict: subspace_report_reason_on_conflict\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"data-subspace_report_reason_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason_insert_input!]!")),")"),(0,a.kt)("h4",{id:"on_conflict-subspace_report_reason_on_conflict"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-on-conflict"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_on_conflict")),")"),(0,a.kt)("p",null,"on conflict condition"))}u.isMDXComponent=!0}}]);