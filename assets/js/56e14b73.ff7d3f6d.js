"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[52237],{3905:function(e,r,n){n.d(r,{Zo:function(){return d},kt:function(){return _}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},d=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),f=p(n),_=o,s=f["".concat(l,".").concat(_)]||f[_]||u[_]||a;return n?t.createElement(s,i(i({ref:r},d),{},{components:n})):t.createElement(s,i({ref:r},d))}));function _(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48249:function(e,r,n){n.r(r),n.d(r,{assets:function(){return d},contentTitle:function(){return l},default:function(){return _},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var t=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"chain-link-proof-aggregate-order-by",title:"chain_link_proof_aggregate_order_by",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/inputs/chain-link-proof-aggregate-order-by",id:"graphql/inputs/chain-link-proof-aggregate-order-by",title:"chain_link_proof_aggregate_order_by",description:'order by aggregate values of table "chainlinkproof"',source:"@site/docs/07-graphql/inputs/chain-link-proof-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-proof-aggregate-order-by",permalink:"/next/graphql/inputs/chain-link-proof-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-proof-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1657817134,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"chain-link-proof-aggregate-order-by",title:"chain_link_proof_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_order_by",permalink:"/next/graphql/inputs/chain-link-order-by"},next:{title:"chain_link_proof_bool_exp",permalink:"/next/graphql/inputs/chain-link-proof-bool-exp"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>chain_link_proof_max_order_by</code>)",id:"max-chain_link_proof_max_order_by",level:4},{value:"<code>min</code> (<code>chain_link_proof_min_order_by</code>)",id:"min-chain_link_proof_min_order_by",level:4}],f={toc:u};function _(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'order by aggregate values of table "chain_link_proof"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_proof_aggregate_order_by {\n  count: order_by\n  max: chain_link_proof_max_order_by\n  min: chain_link_proof_min_order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"count-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"max-chain_link_proof_max_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-max-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_proof_max_order_by")),")"),(0,a.kt)("h4",{id:"min-chain_link_proof_min_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-min-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_proof_min_order_by")),")"))}_.isMDXComponent=!0}}]);