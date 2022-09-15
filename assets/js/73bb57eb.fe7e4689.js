"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95213],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,s(s({ref:t},d),{},{components:r})):n.createElement(f,s({ref:t},d))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},60459:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={id:"user-relationship-min-fields",title:"user_relationship_min_fields",hide_table_of_contents:!1},s=void 0,o={unversionedId:"graphql/objects/user-relationship-min-fields",id:"graphql/objects/user-relationship-min-fields",title:"user_relationship_min_fields",description:"aggregate min on columns",source:"@site/docs/07-graphql/objects/user-relationship-min-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/user-relationship-min-fields",permalink:"/next/graphql/objects/user-relationship-min-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/user-relationship-min-fields.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"user-relationship-min-fields",title:"user_relationship_min_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_relationship_max_fields",permalink:"/next/graphql/objects/user-relationship-max-fields"},next:{title:"user_relationship_mutation_response",permalink:"/next/graphql/objects/user-relationship-mutation-response"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>counterparty_address</code> (<code>String</code>)",id:"counterparty_address-string",level:4},{value:"<code>creator_address</code> (<code>String</code>)",id:"creator_address-string",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"aggregate min on columns"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type user_relationship_min_fields {\n  counterparty_address: String\n  creator_address: String\n  height: bigint\n  subspace_id: bigint\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"counterparty_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"counterparty_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"creator_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"creator_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"height-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"subspace_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"))}p.isMDXComponent=!0}}]);