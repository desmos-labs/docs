"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[62220],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),h=r,u=d["".concat(i,".").concat(h)]||d[h]||m[h]||o;return n?a.createElement(u,c(c({ref:t},p),{},{components:n})):a.createElement(u,c({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76375:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={id:"post-attachment",title:"post_attachment",hide_table_of_contents:!1},c=void 0,s={unversionedId:"graphql/queries/post-attachment",id:"version-4.1.0/graphql/queries/post-attachment",title:"post_attachment",description:'fetch data from the table: "post_attachment"',source:"@site/versioned_docs/version-4.1.0/07-graphql/queries/post-attachment.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/post-attachment",permalink:"/4.1.0/graphql/queries/post-attachment",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/queries/post-attachment.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-attachment",title:"post_attachment",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment_aggregate",permalink:"/4.1.0/graphql/queries/post-attachment-aggregate"},next:{title:"post_hashtag",permalink:"/4.1.0/graphql/queries/post-hashtag"}},i={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[post_attachment_select_column!]</code>)",id:"distinct_on-post_attachment_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[post_attachment_order_by!]</code>)",id:"order_by-post_attachment_order_by",level:4},{value:"<code>where</code> (<code>post_attachment_bool_exp</code>)",id:"where-post_attachment_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_attachment</code>",id:"post_attachment",level:4}],p={toc:l};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'fetch data from the table: "post_attachment"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"post_attachment(\n  distinct_on: [post_attachment_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_attachment_order_by!]\n  where: post_attachment_bool_exp\n): [post_attachment!]!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"distinct_on-post_attachment_select_column"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h4",href:"../enums/post-attachment-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_attachment_select_column!]")),")"),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("h4",{id:"limit-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("h4",{id:"offset-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("h4",{id:"order_by-post_attachment_order_by"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_attachment_order_by!]")),")"),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("h4",{id:"where-post_attachment_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"post_attachment"},(0,r.kt)("a",{parentName:"h4",href:"../objects/post-attachment"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment"))),(0,r.kt)("p",null,'columns and relationships of "post_attachment"'))}m.isMDXComponent=!0}}]);