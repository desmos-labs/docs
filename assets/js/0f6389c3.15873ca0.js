"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[18856],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(a),h=r,g=d["".concat(i,".").concat(h)]||d[h]||m[h]||o;return a?n.createElement(g,s(s({ref:t},l),{},{components:a})):n.createElement(g,s({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},19594:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const o={id:"post-attachment-aggregate",title:"post_attachment_aggregate",hide_table_of_contents:!1},s=void 0,c={unversionedId:"graphql/subscriptions/post-attachment-aggregate",id:"version-4.1.0/graphql/subscriptions/post-attachment-aggregate",title:"post_attachment_aggregate",description:'fetch aggregated fields from the table: "post_attachment"',source:"@site/versioned_docs/version-4.1.0/07-graphql/subscriptions/post-attachment-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/post-attachment-aggregate",permalink:"/4.1.0/graphql/subscriptions/post-attachment-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/subscriptions/post-attachment-aggregate.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"post-attachment-aggregate",title:"post_attachment_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_aggregate",permalink:"/4.1.0/graphql/subscriptions/post-aggregate"},next:{title:"post_attachment",permalink:"/4.1.0/graphql/subscriptions/post-attachment"}},i={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[post_attachment_select_column!]</code>)",id:"distinct_on-post_attachment_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[post_attachment_order_by!]</code>)",id:"order_by-post_attachment_order_by",level:4},{value:"<code>where</code> (<code>post_attachment_bool_exp</code>)",id:"where-post_attachment_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_attachment_aggregate</code>",id:"post_attachment_aggregate",level:4}],l={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'fetch aggregated fields from the table: "post_attachment"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"post_attachment_aggregate(\n  distinct_on: [post_attachment_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_attachment_order_by!]\n  where: post_attachment_bool_exp\n): post_attachment_aggregate!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"distinct_on-post_attachment_select_column"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h4",href:"../enums/post-attachment-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_attachment_select_column!]")),")"),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("h4",{id:"limit-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("h4",{id:"offset-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("h4",{id:"order_by-post_attachment_order_by"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_attachment_order_by!]")),")"),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("h4",{id:"where-post_attachment_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"post_attachment_aggregate"},(0,r.kt)("a",{parentName:"h4",href:"../objects/post-attachment-aggregate"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment_aggregate"))),(0,r.kt)("p",null,'aggregated selection of "post_attachment"'))}m.isMDXComponent=!0}}]);