"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[69545],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=c(n),u=i,k=g["".concat(p,".").concat(u)]||g[u]||s[u]||r;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=g;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},86090:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"application-link-aggregate",title:"application_link_aggregate",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/queries/application-link-aggregate",id:"graphql/queries/application-link-aggregate",title:"application_link_aggregate",description:'fetch aggregated fields from the table: "application_link"',source:"@site/docs/07-graphql/queries/application-link-aggregate.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/application-link-aggregate",permalink:"/next/graphql/queries/application-link-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/application-link-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"application-link-aggregate",title:"application_link_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_relationship",permalink:"/next/graphql/objects/user-relationship"},next:{title:"application_link_by_pk",permalink:"/next/graphql/queries/application-link-by-pk"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[application_link_select_column!]</code>)",id:"distinct_on-application_link_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[application_link_order_by!]</code>)",id:"order_by-application_link_order_by",level:4},{value:"<code>where</code> (<code>application_link_bool_exp</code>)",id:"where-application_link_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>application_link_aggregate</code>",id:"application_link_aggregate",level:4}],d={toc:c};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'fetch aggregated fields from the table: "application_link"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"application_link_aggregate(\n  distinct_on: [application_link_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [application_link_order_by!]\n  where: application_link_bool_exp\n): application_link_aggregate!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"distinct_on-application_link_select_column"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/application-link-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_select_column!]")),")"),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("h4",{id:"offset-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("h4",{id:"order_by-application_link_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_order_by!]")),")"),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("h4",{id:"where-application_link_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_bool_exp")),")"),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"application_link_aggregate"},(0,i.kt)("a",{parentName:"h4",href:"../objects/application-link-aggregate"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_aggregate"))),(0,i.kt)("p",null,'aggregated selection of "application_link"'))}s.isMDXComponent=!0}}]);