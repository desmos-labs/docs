"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[94093],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=a.createContext({}),c=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=c(r),u=o,m=f["".concat(d,".").concat(u)]||f[u]||p[u]||n;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},13137:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var a=r(87462),o=(r(67294),r(3905));const n={id:"reaction-stddev-fields",title:"reaction_stddev_fields",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/objects/reaction-stddev-fields",id:"graphql/objects/reaction-stddev-fields",title:"reaction_stddev_fields",description:"aggregate stddev on columns",source:"@site/docs/07-graphql/objects/reaction-stddev-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/reaction-stddev-fields",permalink:"/next/graphql/objects/reaction-stddev-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/reaction-stddev-fields.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"reaction-stddev-fields",title:"reaction_stddev_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction_mutation_response",permalink:"/next/graphql/objects/reaction-mutation-response"},next:{title:"reaction_stddev_pop_fields",permalink:"/next/graphql/objects/reaction-stddev-pop-fields"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>Float</code>)",id:"height-float",level:4},{value:"<code>id</code> (<code>Float</code>)",id:"id-float",level:4},{value:"<code>post_row_id</code> (<code>Float</code>)",id:"post_row_id-float",level:4},{value:"<code>row_id</code> (<code>Float</code>)",id:"row_id-float",level:4}],s={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"aggregate stddev on columns"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type reaction_stddev_fields {\n  height: Float\n  id: Float\n  post_row_id: Float\n  row_id: Float\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"height-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"id-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"post_row_id-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,o.kt)("h4",{id:"row_id-float"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float")),")"))}p.isMDXComponent=!0}}]);