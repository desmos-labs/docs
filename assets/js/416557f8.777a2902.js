"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[46233],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32231:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={id:"reaction",title:"reaction",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/objects/reaction",id:"graphql/objects/reaction",title:"reaction",description:'columns and relationships of "reaction"',source:"@site/docs/07-graphql/objects/reaction.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/reaction",permalink:"/next/graphql/objects/reaction",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/reaction.mdx",tags:[],version:"current",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"reaction",title:"reaction",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction_variance_fields",permalink:"/next/graphql/objects/reaction-variance-fields"},next:{title:"report_aggregate_fields",permalink:"/next/graphql/objects/report-aggregate-fields"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>author_address</code> (<code>String!</code>)",id:"author_address-string",level:4},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"<code>post</code> (<code>post!</code>)",id:"post-post",level:4},{value:"<code>value</code> (<code>jsonb!</code>)",id:"value-jsonb",level:4}],p={toc:s};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'columns and relationships of "reaction"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type reaction {\n  author_address: String!\n  id: bigint!\n  post: post!\n  value(\n  path: String\n): jsonb!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"author_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,a.kt)("h4",{id:"post-post"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/post"},(0,a.kt)("inlineCode",{parentName:"a"},"post!")),")"),(0,a.kt)("p",null,"An object relationship"),(0,a.kt)("h4",{id:"value-jsonb"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"value"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,a.kt)("inlineCode",{parentName:"a"},"jsonb!")),")"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"path-string"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,a.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,a.kt)("p",null,"JSON select path"))}d.isMDXComponent=!0}}]);