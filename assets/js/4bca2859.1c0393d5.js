"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[48426],{3905:(e,t,r)=>{r.d(t,{Zo:()=>g,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),d=s(r),u=n,m=d["".concat(i,".").concat(u)]||d[u]||c[u]||o;return r?a.createElement(m,l(l({ref:t},g),{},{components:r})):a.createElement(m,l({ref:t},g))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},58487:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const o={id:"post-tag-aggregate",title:"post_tag_aggregate",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/queries/post-tag-aggregate",id:"graphql/queries/post-tag-aggregate",title:"post_tag_aggregate",description:'fetch aggregated fields from the table: "post_tag"',source:"@site/docs/07-graphql/queries/post-tag-aggregate.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/post-tag-aggregate",permalink:"/next/graphql/queries/post-tag-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/post-tag-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-tag-aggregate",title:"post_tag_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference",permalink:"/next/graphql/queries/post-reference"},next:{title:"post_tag_by_pk",permalink:"/next/graphql/queries/post-tag-by-pk"}},i={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[post_tag_select_column!]</code>)",id:"distinct_on-post_tag_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[post_tag_order_by!]</code>)",id:"order_by-post_tag_order_by",level:4},{value:"<code>where</code> (<code>post_tag_bool_exp</code>)",id:"where-post_tag_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_tag_aggregate</code>",id:"post_tag_aggregate",level:4}],g={toc:s};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch aggregated fields from the table: "post_tag"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"post_tag_aggregate(\n  distinct_on: [post_tag_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_tag_order_by!]\n  where: post_tag_bool_exp\n): post_tag_aggregate!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"distinct_on-post_tag_select_column"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/post-tag-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[post_tag_select_column!]")),")"),(0,n.kt)("p",null,"distinct select on columns"),(0,n.kt)("h4",{id:"limit-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",{id:"offset-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",{id:"order_by-post_tag_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-tag-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[post_tag_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",{id:"where-post_tag_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-tag-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_tag_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"post_tag_aggregate"},(0,n.kt)("a",{parentName:"h4",href:"../objects/post-tag-aggregate"},(0,n.kt)("inlineCode",{parentName:"a"},"post_tag_aggregate"))),(0,n.kt)("p",null,'aggregated selection of "post_tag"'))}c.isMDXComponent=!0}}]);