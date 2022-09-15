"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[89891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=i(r),u=o,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||a;return r?n.createElement(m,s(s({ref:t},l),{},{components:r})):n.createElement(m,s({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},13191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={id:"post-reference-mutation-response",title:"post_reference_mutation_response",hide_table_of_contents:!1},s=void 0,c={unversionedId:"graphql/objects/post-reference-mutation-response",id:"graphql/objects/post-reference-mutation-response",title:"post_reference_mutation_response",description:'response of any mutation on the table "post_reference"',source:"@site/docs/07-graphql/objects/post-reference-mutation-response.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-reference-mutation-response",permalink:"/next/graphql/objects/post-reference-mutation-response",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-reference-mutation-response.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"post-reference-mutation-response",title:"post_reference_mutation_response",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_min_fields",permalink:"/next/graphql/objects/post-reference-min-fields"},next:{title:"post_reference_stddev_fields",permalink:"/next/graphql/objects/post-reference-stddev-fields"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>affected_rows</code> (<code>Int!</code>)",id:"affected_rows-int",level:4},{value:"<code>returning</code> (<code>[post_reference!]!</code>)",id:"returning-post_reference",level:4}],l={toc:i};function f(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'response of any mutation on the table "post_reference"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_reference_mutation_response {\n  affected_rows: Int!\n  returning: [post_reference!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"affected_rows-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"affected_rows"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("p",null,"number of rows affected by the mutation"),(0,o.kt)("h4",{id:"returning-post_reference"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"returning"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-reference"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_reference!]!")),")"),(0,o.kt)("p",null,"data from the rows affected by the mutation"))}f.isMDXComponent=!0}}]);