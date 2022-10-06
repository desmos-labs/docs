"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[36692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>_});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),_=i,f=u["".concat(s,".").concat(_)]||u[_]||d[_]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function _(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={id:"post-reference-insert-input",title:"post_reference_insert_input",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/inputs/post-reference-insert-input",id:"graphql/inputs/post-reference-insert-input",title:"post_reference_insert_input",description:'input type for inserting data into table "post_reference"',source:"@site/docs/07-graphql/inputs/post-reference-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-insert-input",permalink:"/next/graphql/inputs/post-reference-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-reference-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-reference-insert-input",title:"post_reference_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_inc_input",permalink:"/next/graphql/inputs/post-reference-inc-input"},next:{title:"post_reference_max_order_by",permalink:"/next/graphql/inputs/post-reference-max-order-by"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>position_index</code> (<code>bigint</code>)",id:"position_index-bigint",level:4},{value:"<code>post</code> (<code>post_obj_rel_insert_input</code>)",id:"post-post_obj_rel_insert_input",level:4},{value:"<code>post_row_id</code> (<code>bigint</code>)",id:"post_row_id-bigint",level:4},{value:"<code>reference</code> (<code>post_obj_rel_insert_input</code>)",id:"reference-post_obj_rel_insert_input",level:4},{value:"<code>reference_row_id</code> (<code>bigint</code>)",id:"reference_row_id-bigint",level:4},{value:"<code>row_id</code> (<code>Int</code>)",id:"row_id-int",level:4},{value:"<code>type</code> (<code>String</code>)",id:"type-string",level:4}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'input type for inserting data into table "post_reference"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_insert_input {\n  position_index: bigint\n  post: post_obj_rel_insert_input\n  post_row_id: bigint\n  reference: post_obj_rel_insert_input\n  reference_row_id: bigint\n  row_id: Int\n  type: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"position_index-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"post-post_obj_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/post-obj-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"post_obj_rel_insert_input")),")"),(0,i.kt)("h4",{id:"post_row_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"reference-post_obj_rel_insert_input"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"reference"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/post-obj-rel-insert-input"},(0,i.kt)("inlineCode",{parentName:"a"},"post_obj_rel_insert_input")),")"),(0,i.kt)("h4",{id:"reference_row_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"reference_row_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"row_id-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"type-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}d.isMDXComponent=!0}}]);