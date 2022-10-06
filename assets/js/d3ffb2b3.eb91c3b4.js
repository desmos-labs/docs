"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[97093],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>m});var a=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)o=n[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):d(d({},t),e)),o},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=s(o),m=r,u=f["".concat(i,".").concat(m)]||f[m]||c[m]||n;return o?a.createElement(u,d(d({ref:t},p),{},{components:o})):a.createElement(u,d({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=o.length,d=new Array(n);d[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var s=2;s<n;s++)d[s]=o[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,o)}f.displayName="MDXCreateElement"},79175:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var a=o(87462),r=(o(67294),o(3905));const n={id:"post-stddev-pop-fields",title:"post_stddev_pop_fields",hide_table_of_contents:!1},d=void 0,l={unversionedId:"graphql/objects/post-stddev-pop-fields",id:"graphql/objects/post-stddev-pop-fields",title:"post_stddev_pop_fields",description:"aggregate stddev_pop on columns",source:"@site/docs/07-graphql/objects/post-stddev-pop-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-stddev-pop-fields",permalink:"/next/graphql/objects/post-stddev-pop-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-stddev-pop-fields.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-stddev-pop-fields",title:"post_stddev_pop_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_stddev_fields",permalink:"/next/graphql/objects/post-stddev-fields"},next:{title:"post_stddev_samp_fields",permalink:"/next/graphql/objects/post-stddev-samp-fields"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>conversation_row_id</code> (<code>Float</code>)",id:"conversation_row_id-float",level:4},{value:"<code>height</code> (<code>Float</code>)",id:"height-float",level:4},{value:"<code>id</code> (<code>Float</code>)",id:"id-float",level:4},{value:"<code>row_id</code> (<code>Float</code>)",id:"row_id-float",level:4},{value:"<code>section_row_id</code> (<code>Float</code>)",id:"section_row_id-float",level:4},{value:"<code>subspace_id</code> (<code>Float</code>)",id:"subspace_id-float",level:4}],p={toc:s};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"aggregate stddev_pop on columns"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_stddev_pop_fields {\n  conversation_row_id: Float\n  height: Float\n  id: Float\n  row_id: Float\n  section_row_id: Float\n  subspace_id: Float\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"conversation_row_id-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"conversation_row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"height-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"id-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"row_id-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"section_row_id-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"section_row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,r.kt)("h4",{id:"subspace_id-float"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/float"},(0,r.kt)("inlineCode",{parentName:"a"},"Float")),")"))}c.isMDXComponent=!0}}]);