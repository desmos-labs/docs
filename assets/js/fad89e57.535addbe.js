"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[68668],{3905:(n,e,i)=>{i.d(e,{Zo:()=>s,kt:()=>d});var t=i(67294);function a(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function r(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function c(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){a(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function o(n,e){if(null==n)return{};var i,t,a=function(n,e){if(null==n)return{};var i,t,a={},r=Object.keys(n);for(t=0;t<r.length;t++)i=r[t],e.indexOf(i)>=0||(a[i]=n[i]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(t=0;t<r.length;t++)i=r[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(a[i]=n[i])}return a}var l=t.createContext({}),h=function(n){var e=t.useContext(l),i=e;return n&&(i="function"==typeof n?n(e):c(c({},e),n)),i},s=function(n){var e=h(n.components);return t.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},_=t.forwardRef((function(n,e){var i=n.components,a=n.mdxType,r=n.originalType,l=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),_=h(i),d=a,f=_["".concat(l,".").concat(d)]||_[d]||p[d]||r;return i?t.createElement(f,c(c({ref:e},s),{},{components:i})):t.createElement(f,c({ref:e},s))}));function d(n,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=i.length,c=new Array(r);c[0]=_;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:a,c[1]=o;for(var h=2;h<r;h++)c[h]=i[h];return t.createElement.apply(null,c)}return t.createElement.apply(null,i)}_.displayName="MDXCreateElement"},92615:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var t=i(87462),a=(i(67294),i(3905));const r={id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},c=void 0,o={unversionedId:"graphql/subscriptions/chain-link-chain-config",id:"version-4.1.0/graphql/subscriptions/chain-link-chain-config",title:"chain_link_chain_config",description:'fetch data from the table: "chainlinkchain_config"',source:"@site/versioned_docs/version-4.1.0/07-graphql/subscriptions/chain-link-chain-config.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/chain-link-chain-config",permalink:"/4.1.0/graphql/subscriptions/chain-link-chain-config",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/subscriptions/chain-link-chain-config.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link",permalink:"/4.1.0/graphql/subscriptions/application-link"},next:{title:"chain_link_proof",permalink:"/4.1.0/graphql/subscriptions/chain-link-proof"}},l={},h=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[chain_link_chain_config_select_column!]</code>)",id:"distinct_on-chain_link_chain_config_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[chain_link_chain_config_order_by!]</code>)",id:"order_by-chain_link_chain_config_order_by",level:4},{value:"<code>where</code> (<code>chain_link_chain_config_bool_exp</code>)",id:"where-chain_link_chain_config_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link_chain_config</code>",id:"chain_link_chain_config",level:4}],s={toc:h};function p(n){let{components:e,...i}=n;return(0,a.kt)("wrapper",(0,t.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch data from the table: "chain_link_chain_config"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"chain_link_chain_config(\n  distinct_on: [chain_link_chain_config_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [chain_link_chain_config_order_by!]\n  where: chain_link_chain_config_bool_exp\n): [chain_link_chain_config!]!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"distinct_on-chain_link_chain_config_select_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/chain-link-chain-config-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_select_column!]")),")"),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("h4",{id:"order_by-chain_link_chain_config_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_order_by!]")),")"),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("h4",{id:"where-chain_link_chain_config_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_bool_exp")),")"),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"chain_link_chain_config"},(0,a.kt)("a",{parentName:"h4",href:"../objects/chain-link-chain-config"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config"))),(0,a.kt)("p",null,'columns and relationships of "chain_link_chain_config"'))}p.isMDXComponent=!0}}]);