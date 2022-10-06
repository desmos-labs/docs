"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[36218],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),m=c(r),u=n,g=m["".concat(d,".").concat(u)]||m[u]||p[u]||i;return r?a.createElement(g,s(s({ref:t},l),{},{components:r})):a.createElement(g,s({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79876:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"subspace-max-fields",title:"subspace_max_fields",hide_table_of_contents:!1},s=void 0,o={unversionedId:"graphql/objects/subspace-max-fields",id:"graphql/objects/subspace-max-fields",title:"subspace_max_fields",description:"aggregate max on columns",source:"@site/docs/07-graphql/objects/subspace-max-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-max-fields",permalink:"/next/graphql/objects/subspace-max-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-max-fields.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"subspace-max-fields",title:"subspace_max_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_free_text_params",permalink:"/next/graphql/objects/subspace-free-text-params"},next:{title:"subspace_min_fields",permalink:"/next/graphql/objects/subspace-min-fields"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>creation_time</code> (<code>timestamp</code>)",id:"creation_time-timestamp",level:4},{value:"<code>creator_address</code> (<code>String</code>)",id:"creator_address-string",level:4},{value:"<code>description</code> (<code>String</code>)",id:"description-string",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>name</code> (<code>String</code>)",id:"name-string",level:4},{value:"<code>owner_address</code> (<code>String</code>)",id:"owner_address-string",level:4},{value:"<code>treasury_address</code> (<code>String</code>)",id:"treasury_address-string",level:4}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"aggregate max on columns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_max_fields {\n  creation_time: timestamp\n  creator_address: String\n  description: String\n  height: bigint\n  id: bigint\n  name: String\n  owner_address: String\n  treasury_address: String\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"creation_time-timestamp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,n.kt)("inlineCode",{parentName:"a"},"timestamp")),")"),(0,n.kt)("h4",{id:"creator_address-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"creator_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"description-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"height-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,n.kt)("h4",{id:"id-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,n.kt)("h4",{id:"name-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"owner_address-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"owner_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,n.kt)("h4",{id:"treasury_address-string"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"treasury_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String")),")"))}p.isMDXComponent=!0}}]);