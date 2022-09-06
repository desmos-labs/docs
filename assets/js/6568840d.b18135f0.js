"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[61846],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},i=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,i=g(e,["components","mdxType","originalType","parentName"]),d=l(r),f=n,u=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return r?a.createElement(u,s(s({ref:t},i),{},{components:r})):a.createElement(u,s({ref:t},i))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var g={};for(var p in t)hasOwnProperty.call(t,p)&&(g[p]=t[p]);g.originalType=e,g.mdxType="string"==typeof e?e:n,s[1]=g;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56979:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>g,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={id:"post-aggregate",title:"post_aggregate",hide_table_of_contents:!1},s=void 0,g={unversionedId:"graphql/objects/post-aggregate",id:"graphql/objects/post-aggregate",title:"post_aggregate",description:'aggregated selection of "post"',source:"@site/docs/07-graphql/objects/post-aggregate.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-aggregate",permalink:"/next/graphql/objects/post-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-aggregate",title:"post_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_aggregate_fields",permalink:"/next/graphql/objects/post-aggregate-fields"},next:{title:"post_attachment_aggregate_fields",permalink:"/next/graphql/objects/post-attachment-aggregate-fields"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>aggregate</code> (<code>post_aggregate_fields</code>)",id:"aggregate-post_aggregate_fields",level:4},{value:"<code>nodes</code> (<code>[post!]!</code>)",id:"nodes-post",level:4}],i={toc:l};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'aggregated selection of "post"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_aggregate {\n  aggregate: post_aggregate_fields\n  nodes: [post!]!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"aggregate-post_aggregate_fields"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"aggregate"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/post-aggregate-fields"},(0,n.kt)("inlineCode",{parentName:"a"},"post_aggregate_fields")),")"),(0,n.kt)("h4",{id:"nodes-post"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"nodes"))," (",(0,n.kt)("a",{parentName:"h4",href:"../objects/post"},(0,n.kt)("inlineCode",{parentName:"a"},"[post!]!")),")"))}c.isMDXComponent=!0}}]);