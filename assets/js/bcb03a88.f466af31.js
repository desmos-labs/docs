"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[93337],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=i.createContext({}),p=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(c.Provider,{value:n},e.children)},h={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),k=p(t),d=a,m=k["".concat(c,".").concat(d)]||k[d]||h[d]||r;return t?i.createElement(m,l(l({ref:n},s),{},{components:t})):i.createElement(m,l({ref:n},s))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=k;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},68268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/objects/chain-link-chain-config",id:"version-4.1.0/graphql/objects/chain-link-chain-config",title:"chain_link_chain_config",description:'columns and relationships of "chainlinkchain_config"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/chain-link-chain-config.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/chain-link-chain-config",permalink:"/4.1.0/graphql/objects/chain-link-chain-config",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/chain-link-chain-config.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link",permalink:"/4.1.0/graphql/objects/application-link"},next:{title:"chain_link_proof",permalink:"/4.1.0/graphql/objects/chain-link-proof"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_links</code> (<code>[chain_link!]!</code>)",id:"chain_links-chain_link",level:4},{value:"<code>name</code> (<code>String!</code>)",id:"name-string",level:4}],s={toc:p};function h(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'columns and relationships of "chain_link_chain_config"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type chain_link_chain_config {\n  chain_links(\n  distinct_on: [chain_link_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [chain_link_order_by!]\n  where: chain_link_bool_exp\n): [chain_link!]!\n  name: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"chain_links-chain_link"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_links"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/chain-link"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link!]!")),")"),(0,a.kt)("p",null,"An array relationship"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"distinct_on-chain_link_select_column"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h5",href:"../enums/chain-link-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_select_column!]")),")"))),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"limit-int"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"offset-int"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"order_by-chain_link_order_by"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h5",href:"../inputs/chain-link-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_order_by!]")),")"))),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"where-chain_link_bool_exp"},(0,a.kt)("a",{parentName:"h5",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h5",href:"../inputs/chain-link-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"))),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"))}h.isMDXComponent=!0}}]);