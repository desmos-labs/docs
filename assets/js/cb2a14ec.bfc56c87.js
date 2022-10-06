"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[41124],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),h=o,_=s["".concat(c,".").concat(h)]||s[h]||f[h]||a;return t?r.createElement(_,i(i({ref:n},d),{},{components:t})):r.createElement(_,i({ref:n},d))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},11488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(87462),o=(t(67294),t(3905));const a={id:"chain-link-proof-aggregate",title:"chain_link_proof_aggregate",hide_table_of_contents:!1},i=void 0,l={unversionedId:"graphql/queries/chain-link-proof-aggregate",id:"graphql/queries/chain-link-proof-aggregate",title:"chain_link_proof_aggregate",description:'fetch aggregated fields from the table: "chainlinkproof"',source:"@site/docs/07-graphql/queries/chain-link-proof-aggregate.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/chain-link-proof-aggregate",permalink:"/next/graphql/queries/chain-link-proof-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/chain-link-proof-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"chain-link-proof-aggregate",title:"chain_link_proof_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_chain_config",permalink:"/next/graphql/queries/chain-link-chain-config"},next:{title:"chain_link_proof",permalink:"/next/graphql/queries/chain-link-proof"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[chain_link_proof_select_column!]</code>)",id:"distinct_on-chain_link_proof_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[chain_link_proof_order_by!]</code>)",id:"order_by-chain_link_proof_order_by",level:4},{value:"<code>where</code> (<code>chain_link_proof_bool_exp</code>)",id:"where-chain_link_proof_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link_proof_aggregate</code>",id:"chain_link_proof_aggregate",level:4}],d={toc:p};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch aggregated fields from the table: "chain_link_proof"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"chain_link_proof_aggregate(\n  distinct_on: [chain_link_proof_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [chain_link_proof_order_by!]\n  where: chain_link_proof_bool_exp\n): chain_link_proof_aggregate!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-chain_link_proof_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/chain-link-proof-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-chain_link_proof_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-chain_link_proof_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"chain_link_proof_aggregate"},(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-aggregate"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_aggregate"))),(0,o.kt)("p",null,'aggregated selection of "chain_link_proof"'))}f.isMDXComponent=!0}}]);