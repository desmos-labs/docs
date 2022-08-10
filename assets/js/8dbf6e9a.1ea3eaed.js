"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[70323],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=i(r),h=o,y=u["".concat(p,".").concat(h)]||u[h]||c[h]||a;return r?n.createElement(y,d(d({ref:t},l),{},{components:r})):n.createElement(y,d({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,d=new Array(a);d[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,d[1]=s;for(var i=2;i<a;i++)d[i]=r[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6841:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(87462),o=(r(67294),r(3905));const a={id:"post-hashtag-stddev-pop-order-by",title:"post_hashtag_stddev_pop_order_by",hide_table_of_contents:!1},d=void 0,s={unversionedId:"graphql/inputs/post-hashtag-stddev-pop-order-by",id:"version-4.2.0/graphql/inputs/post-hashtag-stddev-pop-order-by",title:"post_hashtag_stddev_pop_order_by",description:'order by stddevpop() on columns of table "posthashtag"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/post-hashtag-stddev-pop-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-hashtag-stddev-pop-order-by",permalink:"/graphql/inputs/post-hashtag-stddev-pop-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/post-hashtag-stddev-pop-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"post-hashtag-stddev-pop-order-by",title:"post_hashtag_stddev_pop_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_hashtag_stddev_order_by",permalink:"/graphql/inputs/post-hashtag-stddev-order-by"},next:{title:"post_hashtag_stddev_samp_order_by",permalink:"/graphql/inputs/post-hashtag-stddev-samp-order-by"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>order_by</code>)",id:"end_index-order_by",level:4},{value:"<code>start_index</code> (<code>order_by</code>)",id:"start_index-order_by",level:4}],l={toc:i};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by stddev_pop() on columns of table "post_hashtag"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_hashtag_stddev_pop_order_by {\n  end_index: order_by\n  start_index: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"end_index-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"start_index-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);