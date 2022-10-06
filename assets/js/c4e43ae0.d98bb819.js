"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[73991],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),i=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(c.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(t),b=o,m=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return t?n.createElement(m,s(s({ref:r},u),{},{components:t})):n.createElement(m,s({ref:r},u))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=p;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<a;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},87428:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={id:"user-block-sum-order-by",title:"user_block_sum_order_by",hide_table_of_contents:!1},s=void 0,l={unversionedId:"graphql/inputs/user-block-sum-order-by",id:"graphql/inputs/user-block-sum-order-by",title:"user_block_sum_order_by",description:'order by sum() on columns of table "user_block"',source:"@site/docs/07-graphql/inputs/user-block-sum-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/user-block-sum-order-by",permalink:"/next/graphql/inputs/user-block-sum-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/user-block-sum-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"user-block-sum-order-by",title:"user_block_sum_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block_stddev_samp_order_by",permalink:"/next/graphql/inputs/user-block-stddev-samp-order-by"},next:{title:"user_block_var_pop_order_by",permalink:"/next/graphql/inputs/user-block-var-pop-order-by"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],u={toc:i};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by sum() on columns of table "user_block"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input user_block_sum_order_by {\n  height: order_by\n  subspace_id: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"height-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"subspace_id-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}d.isMDXComponent=!0}}]);