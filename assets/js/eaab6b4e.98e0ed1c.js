"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[15019],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),b=s(r),g=o,u=b["".concat(i,".").concat(g)]||b[g]||d[g]||a;return r?n.createElement(u,l(l({ref:t},p),{},{components:r})):n.createElement(u,l({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5653:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const a={id:"block-aggregate",title:"block_aggregate",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/subscriptions/block-aggregate",id:"graphql/subscriptions/block-aggregate",title:"block_aggregate",description:'fetch aggregated fields from the table: "block"',source:"@site/docs/07-graphql/subscriptions/block-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/block-aggregate",permalink:"/next/graphql/subscriptions/block-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/block-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"block-aggregate",title:"block_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link",permalink:"/next/graphql/subscriptions/application-link"},next:{title:"block_by_pk",permalink:"/next/graphql/subscriptions/block-by-pk"}},i={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[block_select_column!]</code>)",id:"distinct_on-block_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[block_order_by!]</code>)",id:"order_by-block_order_by",level:4},{value:"<code>where</code> (<code>block_bool_exp</code>)",id:"where-block_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>block_aggregate</code>",id:"block_aggregate",level:4}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch aggregated fields from the table: "block"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"block_aggregate(\n  distinct_on: [block_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [block_order_by!]\n  where: block_bool_exp\n): block_aggregate!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-block_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/block-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[block_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-block_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/block-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[block_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-block_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/block-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"block_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"block_aggregate"},(0,o.kt)("a",{parentName:"h4",href:"../objects/block-aggregate"},(0,o.kt)("inlineCode",{parentName:"a"},"block_aggregate"))),(0,o.kt)("p",null,'aggregated selection of "block"'))}d.isMDXComponent=!0}}]);