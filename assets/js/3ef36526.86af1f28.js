"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[14778],{3905:(n,e,t)=>{t.d(e,{Zo:()=>f,kt:()=>_});var r=t(67294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function i(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),p=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},f=function(n){var e=p(n.components);return r.createElement(c.Provider,{value:e},n.children)},s={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,i=n.originalType,c=n.parentName,f=l(n,["components","mdxType","originalType","parentName"]),u=p(t),_=o,d=u["".concat(c,".").concat(_)]||u[_]||s[_]||i;return t?r.createElement(d,a(a({ref:e},f),{},{components:t})):r.createElement(d,a({ref:e},f))}));function _(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var i=t.length,a=new Array(i);a[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,a[1]=l;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},57321:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const i={id:"chain-link-proof-obj-rel-insert-input",title:"chain_link_proof_obj_rel_insert_input",hide_table_of_contents:!1},a=void 0,l={unversionedId:"graphql/inputs/chain-link-proof-obj-rel-insert-input",id:"graphql/inputs/chain-link-proof-obj-rel-insert-input",title:"chain_link_proof_obj_rel_insert_input",description:'input type for inserting object relation for remote table "chainlinkproof"',source:"@site/docs/07-graphql/inputs/chain-link-proof-obj-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-proof-obj-rel-insert-input",permalink:"/next/graphql/inputs/chain-link-proof-obj-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-proof-obj-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"chain-link-proof-obj-rel-insert-input",title:"chain_link_proof_obj_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_proof_min_order_by",permalink:"/next/graphql/inputs/chain-link-proof-min-order-by"},next:{title:"chain_link_proof_on_conflict",permalink:"/next/graphql/inputs/chain-link-proof-on-conflict"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>chain_link_proof_insert_input!</code>)",id:"data-chain_link_proof_insert_input",level:4},{value:"<code>on_conflict</code> (<code>chain_link_proof_on_conflict</code>)",id:"on_conflict-chain_link_proof_on_conflict",level:4}],f={toc:p};function s(n){let{components:e,...t}=n;return(0,o.kt)("wrapper",(0,r.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'input type for inserting object relation for remote table "chain_link_proof"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_proof_obj_rel_insert_input {\n  data: chain_link_proof_insert_input!\n  on_conflict: chain_link_proof_on_conflict\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"data-chain_link_proof_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_insert_input!")),")"),(0,o.kt)("h4",{id:"on_conflict-chain_link_proof_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"))}s.isMDXComponent=!0}}]);