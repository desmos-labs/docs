"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[7364],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),i=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),f=i(r),m=n,u=f["".concat(l,".").concat(m)]||f[m]||c[m]||a;return r?o.createElement(u,s(s({ref:t},p),{},{components:r})):o.createElement(u,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=f;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:n,s[1]=d;for(var i=2;i<a;i++)s[i]=r[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4063:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var o=r(87462),n=(r(67294),r(3905));const a={id:"post-reference-stddev-samp-fields",title:"post_reference_stddev_samp_fields",hide_table_of_contents:!1},s=void 0,d={unversionedId:"graphql/objects/post-reference-stddev-samp-fields",id:"graphql/objects/post-reference-stddev-samp-fields",title:"post_reference_stddev_samp_fields",description:"aggregate stddev_samp on columns",source:"@site/docs/07-graphql/objects/post-reference-stddev-samp-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-reference-stddev-samp-fields",permalink:"/next/graphql/objects/post-reference-stddev-samp-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-reference-stddev-samp-fields.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-reference-stddev-samp-fields",title:"post_reference_stddev_samp_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_stddev_pop_fields",permalink:"/next/graphql/objects/post-reference-stddev-pop-fields"},next:{title:"post_reference_sum_fields",permalink:"/next/graphql/objects/post-reference-sum-fields"}},l={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>position_index</code> (<code>Float</code>)",id:"position_index-float",level:4},{value:"<code>post_row_id</code> (<code>Float</code>)",id:"post_row_id-float",level:4},{value:"<code>reference_row_id</code> (<code>Float</code>)",id:"reference_row_id-float",level:4},{value:"<code>row_id</code> (<code>Float</code>)",id:"row_id-float",level:4}],p={toc:i};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"aggregate stddev_samp on columns"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_reference_stddev_samp_fields {\n  position_index: Float\n  post_row_id: Float\n  reference_row_id: Float\n  row_id: Float\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"position_index-float"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"post_row_id-float"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"reference_row_id-float"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reference_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,n.kt)("h4",{id:"row_id-float"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,n.kt)("inlineCode",{parentName:"a"},"Float")),")"))}c.isMDXComponent=!0}}]);