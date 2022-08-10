"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[5458],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,d=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,y=m["".concat(i,".").concat(u)]||m[u]||c[u]||d;return r?n.createElement(y,a(a({ref:t},l),{},{components:r})):n.createElement(y,a({ref:t},l))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var d=r.length,a=new Array(d);a[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<d;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},16443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const d={id:"post-mention-stddev-samp-order-by",title:"post_mention_stddev_samp_order_by",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/inputs/post-mention-stddev-samp-order-by",id:"graphql/inputs/post-mention-stddev-samp-order-by",title:"post_mention_stddev_samp_order_by",description:'order by stddevsamp() on columns of table "postmention"',source:"@site/docs/07-graphql/inputs/post-mention-stddev-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-mention-stddev-samp-order-by",permalink:"/next/graphql/inputs/post-mention-stddev-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-mention-stddev-samp-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"post-mention-stddev-samp-order-by",title:"post_mention_stddev_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_mention_stddev_pop_order_by",permalink:"/next/graphql/inputs/post-mention-stddev-pop-order-by"},next:{title:"post_mention_sum_order_by",permalink:"/next/graphql/inputs/post-mention-sum-order-by"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>order_by</code>)",id:"end_index-order_by",level:4},{value:"<code>start_index</code> (<code>order_by</code>)",id:"start_index-order_by",level:4}],l={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by stddev_samp() on columns of table "post_mention"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_mention_stddev_samp_order_by {\n  end_index: order_by\n  start_index: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"end_index-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"start_index-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);