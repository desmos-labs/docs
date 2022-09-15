"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[97741],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),h=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=h(e.components);return a.createElement(c.Provider,{value:n},e.children)},k={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=h(t),d=i,m=s["".concat(c,".").concat(d)]||s[d]||k[d]||r;return t?a.createElement(m,l(l({ref:n},p),{},{components:t})):a.createElement(m,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=s;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var h=2;h<r;h++)l[h]=t[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},69047:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var a=t(87462),i=(t(67294),t(3905));const r={id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/objects/chain-link-chain-config",id:"graphql/objects/chain-link-chain-config",title:"chain_link_chain_config",description:'columns and relationships of "chainlinkchain_config"',source:"@site/docs/07-graphql/objects/chain-link-chain-config.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/chain-link-chain-config",permalink:"/next/graphql/objects/chain-link-chain-config",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/chain-link-chain-config.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"chain-link-chain-config",title:"chain_link_chain_config",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_chain_config_variance_fields",permalink:"/next/graphql/objects/chain-link-chain-config-variance-fields"},next:{title:"chain_link_max_fields",permalink:"/next/graphql/objects/chain-link-max-fields"}},c={},h=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_links</code> (<code>[chain_link!]!</code>)",id:"chain_links-chain_link",level:4},{value:"<code>chain_links_aggregate</code> (<code>chain_link_aggregate!</code>)",id:"chain_links_aggregate-chain_link_aggregate",level:4},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>name</code> (<code>String!</code>)",id:"name-string",level:4}],p={toc:h};function k(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'columns and relationships of "chain_link_chain_config"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type chain_link_chain_config {\n  chain_links(\n    distinct_on: [chain_link_select_column!]\n    limit: Int\n    offset: Int\n    order_by: [chain_link_order_by!]\n    where: chain_link_bool_exp\n  ): [chain_link!]!\n  chain_links_aggregate(\n    distinct_on: [chain_link_select_column!]\n    limit: Int\n    offset: Int\n    order_by: [chain_link_order_by!]\n    where: chain_link_bool_exp\n  ): chain_link_aggregate!\n  id: Int!\n  name: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"chain_links-chain_link"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_links"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/chain-link"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link!]!")),")"),(0,i.kt)("p",null,"An array relationship"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"distinct_on-chain_link_select_column"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h5",href:"../enums/chain-link-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_select_column!]")),")"))),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"offset-int"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"order_by-chain_link_order_by"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h5",href:"../inputs/chain-link-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_order_by!]")),")"))),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-chain_link_bool_exp"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h5",href:"../inputs/chain-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"))),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h4",{id:"chain_links_aggregate-chain_link_aggregate"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_links_aggregate"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/chain-link-aggregate"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_aggregate!")),")"),(0,i.kt)("p",null,"An aggregate relationship"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"distinct_on-chain_link_select_column-1"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h5",href:"../enums/chain-link-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_select_column!]")),")"))),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int-1"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"offset-int-1"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"order_by-chain_link_order_by-1"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h5",href:"../inputs/chain-link-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[chain_link_order_by!]")),")"))),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-chain_link_bool_exp-1"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h5",href:"../inputs/chain-link-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"))),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"))}k.isMDXComponent=!0}}]);