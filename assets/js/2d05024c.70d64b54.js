"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[14137],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(t),b=o,_=d["".concat(c,".").concat(b)]||d[b]||u[b]||a;return t?n.createElement(_,s(s({ref:r},l),{},{components:t})):n.createElement(_,s({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},18916:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={id:"subspace-report-reason",title:"subspace_report_reason",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/subscriptions/subspace-report-reason",id:"graphql/subscriptions/subspace-report-reason",title:"subspace_report_reason",description:'fetch data from the table: "subspacereportreason"',source:"@site/docs/07-graphql/subscriptions/subspace-report-reason.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-report-reason",permalink:"/next/graphql/subscriptions/subspace-report-reason",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/subspace-report-reason.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"subspace-report-reason",title:"subspace_report_reason",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_report_reason_by_pk",permalink:"/next/graphql/subscriptions/subspace-report-reason-by-pk"},next:{title:"subspace_section_aggregate",permalink:"/next/graphql/subscriptions/subspace-section-aggregate"}},c={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_report_reason_select_column!]</code>)",id:"distinct_on-subspace_report_reason_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_report_reason_order_by!]</code>)",id:"order_by-subspace_report_reason_order_by",level:4},{value:"<code>where</code> (<code>subspace_report_reason_bool_exp</code>)",id:"where-subspace_report_reason_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_report_reason</code>",id:"subspace_report_reason",level:4}],l={toc:i};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch data from the table: "subspace_report_reason"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_report_reason(\n  distinct_on: [subspace_report_reason_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_report_reason_order_by!]\n  where: subspace_report_reason_bool_exp\n): [subspace_report_reason!]!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-subspace_report_reason_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/subspace-report-reason-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-subspace_report_reason_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_report_reason_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-subspace_report_reason_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-report-reason-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"subspace_report_reason"},(0,o.kt)("a",{parentName:"h4",href:"../objects/subspace-report-reason"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_report_reason"))),(0,o.kt)("p",null,'columns and relationships of "subspace_report_reason"'))}u.isMDXComponent=!0}}]);