"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[80583],{3905:function(n,e,i){i.d(e,{Zo:function(){return s},kt:function(){return f}});var t=i(67294);function r(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function a(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,t)}return i}function c(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){r(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function o(n,e){if(null==n)return{};var i,t,r=function(n,e){if(null==n)return{};var i,t,r={},a=Object.keys(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||(r[i]=n[i]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)i=a[t],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(r[i]=n[i])}return r}var l=t.createContext({}),h=function(n){var e=t.useContext(l),i=e;return n&&(i="function"==typeof n?n(e):c(c({},e),n)),i},s=function(n){var e=h(n.components);return t.createElement(l.Provider,{value:e},n.children)},p={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},_=t.forwardRef((function(n,e){var i=n.components,r=n.mdxType,a=n.originalType,l=n.parentName,s=o(n,["components","mdxType","originalType","parentName"]),_=h(i),f=r,d=_["".concat(l,".").concat(f)]||_[f]||p[f]||a;return i?t.createElement(d,c(c({ref:e},s),{},{components:i})):t.createElement(d,c({ref:e},s))}));function f(n,e){var i=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=i.length,c=new Array(a);c[0]=_;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=n,o.mdxType="string"==typeof n?n:r,c[1]=o;for(var h=2;h<a;h++)c[h]=i[h];return t.createElement.apply(null,c)}return t.createElement.apply(null,i)}_.displayName="MDXCreateElement"},27754:function(n,e,i){i.r(e),i.d(e,{assets:function(){return s},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return h},toc:function(){return p}});var t=i(87462),r=i(63366),a=(i(67294),i(3905)),c=["components"],o={id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},l=void 0,h={unversionedId:"graphql/subscriptions/chain-link-chain-config",id:"graphql/subscriptions/chain-link-chain-config",title:"chain_link_chain_config",description:'fetch data from the table: "chainlinkchain_config"',source:"@site/docs/07-graphql/subscriptions/chain-link-chain-config.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/chain-link-chain-config",permalink:"/next/graphql/subscriptions/chain-link-chain-config",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/chain-link-chain-config.mdx",tags:[],version:"current",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link",permalink:"/next/graphql/subscriptions/application-link"},next:{title:"chain_link_proof",permalink:"/next/graphql/subscriptions/chain-link-proof"}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[chain_link_chain_config_select_column!]</code>)",id:"distinct_on-chain_link_chain_config_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[chain_link_chain_config_order_by!]</code>)",id:"order_by-chain_link_chain_config_order_by",level:4},{value:"<code>where</code> (<code>chain_link_chain_config_bool_exp</code>)",id:"where-chain_link_chain_config_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link_chain_config</code>",id:"chain_link_chain_config",level:4}],_={toc:p};function f(n){var e=n.components,i=(0,r.Z)(n,c);return(0,a.kt)("wrapper",(0,t.Z)({},_,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch data from the table: "chain_link_chain_config"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"chain_link_chain_config(\n  distinct_on: [chain_link_chain_config_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [chain_link_chain_config_order_by!]\n  where: chain_link_chain_config_bool_exp\n): [chain_link_chain_config!]!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"distinct_on-chain_link_chain_config_select_column"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/chain-link-chain-config-select-column"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_select_column!]")),")"),(0,a.kt)("p",null,"distinct select on columns"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"limit the number of rows returned"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,a.kt)("h4",{id:"order_by-chain_link_chain_config_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_order_by!]")),")"),(0,a.kt)("p",null,"sort the rows by one or more columns"),(0,a.kt)("h4",{id:"where-chain_link_chain_config_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_bool_exp")),")"),(0,a.kt)("p",null,"filter the rows returned"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"chain_link_chain_config"},(0,a.kt)("a",{parentName:"h4",href:"../objects/chain-link-chain-config"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config"))),(0,a.kt)("p",null,'columns and relationships of "chain_link_chain_config"'))}f.isMDXComponent=!0}}]);