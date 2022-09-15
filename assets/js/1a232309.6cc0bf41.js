"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[88562],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(r),g=i,h=u["".concat(d,".").concat(g)]||u[g]||l[g]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},97227:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={id:"subspace-registered-reaction-set-input",title:"subspace_registered_reaction_set_input",hide_table_of_contents:!1},s=void 0,o={unversionedId:"graphql/inputs/subspace-registered-reaction-set-input",id:"graphql/inputs/subspace-registered-reaction-set-input",title:"subspace_registered_reaction_set_input",description:'input type for updating data in table "subspaceregisteredreaction"',source:"@site/docs/07-graphql/inputs/subspace-registered-reaction-set-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-set-input",permalink:"/next/graphql/inputs/subspace-registered-reaction-set-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-registered-reaction-set-input.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-registered-reaction-set-input",title:"subspace_registered_reaction_set_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_pk_columns_input",permalink:"/next/graphql/inputs/subspace-registered-reaction-pk-columns-input"},next:{title:"subspace_registered_reaction_stddev_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-stddev-order-by"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>display_value</code> (<code>String</code>)",id:"display_value-string",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>bigint</code>)",id:"id-bigint",level:4},{value:"<code>row_id</code> (<code>Int</code>)",id:"row_id-int",level:4},{value:"<code>shorthand_code</code> (<code>String</code>)",id:"shorthand_code-string",level:4},{value:"<code>subspace_id</code> (<code>bigint</code>)",id:"subspace_id-bigint",level:4}],c={toc:p};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'input type for updating data in table "subspace_registered_reaction"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_set_input {\n  display_value: String\n  height: bigint\n  id: bigint\n  row_id: Int\n  shorthand_code: String\n  subspace_id: bigint\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"display_value-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"display_value"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"height-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,i.kt)("h4",{id:"row_id-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"shorthand_code-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"shorthand_code"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"subspace_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint")),")"))}l.isMDXComponent=!0}}]);