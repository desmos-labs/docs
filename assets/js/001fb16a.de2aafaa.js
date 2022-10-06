"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[65950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(f,a(a({ref:t},c),{},{components:n})):o.createElement(f,a({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(87462),r=(n(67294),n(3905));const i={id:"post-mention",title:"post_mention",hide_table_of_contents:!1},a=void 0,l={unversionedId:"graphql/queries/post-mention",id:"graphql/queries/post-mention",title:"post_mention",description:'fetch data from the table: "post_mention"',source:"@site/docs/07-graphql/queries/post-mention.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/post-mention",permalink:"/next/graphql/queries/post-mention",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/post-mention.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-mention",title:"post_mention",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_by_pk",permalink:"/next/graphql/queries/post-mention-by-pk"},next:{title:"post_reference_aggregate",permalink:"/next/graphql/queries/post-reference-aggregate"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[post_mention_select_column!]</code>)",id:"distinct_on-post_mention_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[post_mention_order_by!]</code>)",id:"order_by-post_mention_order_by",level:4},{value:"<code>where</code> (<code>post_mention_bool_exp</code>)",id:"where-post_mention_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_mention</code>",id:"post_mention",level:4}],c={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'fetch data from the table: "post_mention"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"post_mention(\n  distinct_on: [post_mention_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [post_mention_order_by!]\n  where: post_mention_bool_exp\n): [post_mention!]!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"distinct_on-post_mention_select_column"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h4",href:"../enums/post-mention-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_mention_select_column!]")),")"),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("h4",{id:"limit-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("h4",{id:"offset-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("h4",{id:"order_by-post_mention_order_by"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-mention-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[post_mention_order_by!]")),")"),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("h4",{id:"where-post_mention_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-mention-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_mention_bool_exp")),")"),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"post_mention"},(0,r.kt)("a",{parentName:"h4",href:"../objects/post-mention"},(0,r.kt)("inlineCode",{parentName:"a"},"post_mention"))),(0,r.kt)("p",null,'columns and relationships of "post_mention"'))}m.isMDXComponent=!0}}]);