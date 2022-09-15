"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[68278],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64138:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={id:"report-reason-mutation-response",title:"report_reason_mutation_response",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/objects/report-reason-mutation-response",id:"graphql/objects/report-reason-mutation-response",title:"report_reason_mutation_response",description:'response of any mutation on the table "report_reason"',source:"@site/docs/07-graphql/objects/report-reason-mutation-response.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/report-reason-mutation-response",permalink:"/next/graphql/objects/report-reason-mutation-response",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/report-reason-mutation-response.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"report-reason-mutation-response",title:"report_reason_mutation_response",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_reason_min_fields",permalink:"/next/graphql/objects/report-reason-min-fields"},next:{title:"report_reason_stddev_fields",permalink:"/next/graphql/objects/report-reason-stddev-fields"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>affected_rows</code> (<code>Int!</code>)",id:"affected_rows-int",level:4},{value:"<code>returning</code> (<code>[report_reason!]!</code>)",id:"returning-report_reason",level:4}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'response of any mutation on the table "report_reason"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type report_reason_mutation_response {\n  affected_rows: Int!\n  returning: [report_reason!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"affected_rows-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"affected_rows"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"number of rows affected by the mutation"),(0,o.kt)("h4",{id:"returning-report_reason"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"returning"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/report-reason"},(0,o.kt)("inlineCode",{parentName:"a"},"[report_reason!]!")),")"),(0,o.kt)("p",null,"data from the rows affected by the mutation"))}d.isMDXComponent=!0}}]);