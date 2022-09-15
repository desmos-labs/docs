"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[31126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=s(n),b=o,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||c;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var s=2;s<c;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const c={id:"user-block-on-conflict",title:"user_block_on_conflict",hide_table_of_contents:!1},l=void 0,a={unversionedId:"graphql/inputs/user-block-on-conflict",id:"graphql/inputs/user-block-on-conflict",title:"user_block_on_conflict",description:'on conflict condition type for table "user_block"',source:"@site/docs/07-graphql/inputs/user-block-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-on-conflict",permalink:"/next/graphql/inputs/user-block-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/user-block-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"user-block-on-conflict",title:"user_block_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_min_order_by",permalink:"/next/graphql/inputs/user-block-min-order-by"},next:{title:"user_block_order_by",permalink:"/next/graphql/inputs/user-block-order-by"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>user_block_constraint!</code>)",id:"constraint-user_block_constraint",level:4},{value:"<code>update_columns</code> (<code>[user_block_update_column!]!</code>)",id:"update_columns-user_block_update_column",level:4},{value:"<code>where</code> (<code>user_block_bool_exp</code>)",id:"where-user_block_bool_exp",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'on conflict condition type for table "user_block"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_on_conflict {\n  constraint: user_block_constraint!\n  update_columns: [user_block_update_column!]!\n  where: user_block_bool_exp\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"constraint-user_block_constraint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/user-block-constraint"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block_constraint!")),")"),(0,o.kt)("h4",{id:"update_columns-user_block_update_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/user-block-update-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[user_block_update_column!]!")),")"),(0,o.kt)("h4",{id:"where-user_block_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/user-block-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp")),")"))}p.isMDXComponent=!0}}]);