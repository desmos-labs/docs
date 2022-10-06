"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[16442],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),d=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=d(r),g=n,b=u["".concat(s,".").concat(g)]||u[g]||c[g]||a;return r?o.createElement(b,p(p({ref:t},l),{},{components:r})):o.createElement(b,p({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,p=new Array(a);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var d=2;d<a;d++)p[d]=r[d];return o.createElement.apply(null,p)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},11688:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=r(87462),n=(r(67294),r(3905));const a={id:"post-tag-avg-order-by",title:"post_tag_avg_order_by",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/inputs/post-tag-avg-order-by",id:"graphql/inputs/post-tag-avg-order-by",title:"post_tag_avg_order_by",description:'order by avg() on columns of table "post_tag"',source:"@site/docs/07-graphql/inputs/post-tag-avg-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-tag-avg-order-by",permalink:"/next/graphql/inputs/post-tag-avg-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-tag-avg-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-tag-avg-order-by",title:"post_tag_avg_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_tag_arr_rel_insert_input",permalink:"/next/graphql/inputs/post-tag-arr-rel-insert-input"},next:{title:"post_tag_bool_exp",permalink:"/next/graphql/inputs/post-tag-bool-exp"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>post_row_id</code> (<code>order_by</code>)",id:"post_row_id-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4}],l={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by avg() on columns of table "post_tag"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_tag_avg_order_by {\n  post_row_id: order_by\n  row_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"post_row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);