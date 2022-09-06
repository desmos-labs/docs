"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[61186],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>y});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=t.createContext({}),c=function(e){var r=t.useContext(d),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(d.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),y=o,_=u["".concat(d,".").concat(y)]||u[y]||s[y]||i;return n?t.createElement(_,a(a({ref:r},p),{},{components:n})):t.createElement(_,a({ref:r},p))}));function y(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},91432:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=n(87462),o=(n(67294),n(3905));const i={id:"chain-link-proof-order-by",title:"chain_link_proof_order_by",hide_table_of_contents:!1},a=void 0,l={unversionedId:"graphql/inputs/chain-link-proof-order-by",id:"graphql/inputs/chain-link-proof-order-by",title:"chain_link_proof_order_by",description:'Ordering options when selecting data from "chainlinkproof".',source:"@site/docs/07-graphql/inputs/chain-link-proof-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-proof-order-by",permalink:"/next/graphql/inputs/chain-link-proof-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-proof-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-proof-order-by",title:"chain_link_proof_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_proof_min_order_by",permalink:"/next/graphql/inputs/chain-link-proof-min-order-by"},next:{title:"chain_link_stddev_order_by",permalink:"/next/graphql/inputs/chain-link-stddev-order-by"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_link</code> (<code>chain_link_order_by</code>)",id:"chain_link-chain_link_order_by",level:4},{value:"<code>plain_text</code> (<code>order_by</code>)",id:"plain_text-order_by",level:4},{value:"<code>public_key</code> (<code>order_by</code>)",id:"public_key-order_by",level:4},{value:"<code>signature</code> (<code>order_by</code>)",id:"signature-order_by",level:4}],p={toc:c};function s(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Ordering options when selecting data from "chain_link_proof".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_proof_order_by {\n  chain_link: chain_link_order_by\n  plain_text: order_by\n  public_key: order_by\n  signature: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"chain_link-chain_link_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/chain-link-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_order_by")),")"),(0,o.kt)("h4",{id:"plain_text-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"plain_text"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"public_key-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"public_key"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"signature-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"signature"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}s.isMDXComponent=!0}}]);