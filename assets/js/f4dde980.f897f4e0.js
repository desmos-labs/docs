"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[30422],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=o.createContext({}),c=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},i=function(e){var r=c(e.components);return o.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},b=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),b=c(t),u=n,m=b["".concat(l,".").concat(u)]||b[u]||p[u]||a;return t?o.createElement(m,d(d({ref:r},i),{},{components:t})):o.createElement(m,d({ref:r},i))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,d=new Array(a);d[0]=b;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,d[1]=s;for(var c=2;c<a;c++)d[c]=t[c];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}b.displayName="MDXCreateElement"},88663:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=t(87462),n=(t(67294),t(3905));const a={id:"user-block-max-order-by",title:"user_block_max_order_by",hide_table_of_contents:!1},d=void 0,s={unversionedId:"graphql/inputs/user-block-max-order-by",id:"version-4.2.0/graphql/inputs/user-block-max-order-by",title:"user_block_max_order_by",description:'order by max() on columns of table "user_block"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/user-block-max-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-max-order-by",permalink:"/graphql/inputs/user-block-max-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/user-block-max-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"user-block-max-order-by",title:"user_block_max_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_bool_exp",permalink:"/graphql/inputs/user-block-bool-exp"},next:{title:"user_block_min_order_by",permalink:"/graphql/inputs/user-block-min-order-by"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>blocked_user_address</code> (<code>order_by</code>)",id:"blocked_user_address-order_by",level:4},{value:"<code>blocker_address</code> (<code>order_by</code>)",id:"blocker_address-order_by",level:4},{value:"<code>reason</code> (<code>order_by</code>)",id:"reason-order_by",level:4},{value:"<code>subspace</code> (<code>order_by</code>)",id:"subspace-order_by",level:4}],i={toc:c};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by max() on columns of table "user_block"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_max_order_by {\n  blocked_user_address: order_by\n  blocker_address: order_by\n  reason: order_by\n  subspace: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"blocked_user_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"blocked_user_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"blocker_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"blocker_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"reason-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reason"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}p.isMDXComponent=!0}}]);