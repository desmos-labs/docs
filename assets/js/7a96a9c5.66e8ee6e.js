"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[81116],{3905:function(n,e,i){i.d(e,{Zo:function(){return _},kt:function(){return s}});var o=i(67294);function a(n,e,i){return e in n?Object.defineProperty(n,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):n[e]=i,n}function t(n,e){var i=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),i.push.apply(i,o)}return i}function r(n){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?t(Object(i),!0).forEach((function(e){a(n,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(i,e))}))}return n}function c(n,e){if(null==n)return{};var i,o,a=function(n,e){if(null==n)return{};var i,o,a={},t=Object.keys(n);for(o=0;o<t.length;o++)i=t[o],e.indexOf(i)>=0||(a[i]=n[i]);return a}(n,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);for(o=0;o<t.length;o++)i=t[o],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(n,i)&&(a[i]=n[i])}return a}var l=o.createContext({}),p=function(n){var e=o.useContext(l),i=e;return n&&(i="function"==typeof n?n(e):r(r({},e),n)),i},_=function(n){var e=p(n.components);return o.createElement(l.Provider,{value:e},n.children)},h={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(n,e){var i=n.components,a=n.mdxType,t=n.originalType,l=n.parentName,_=c(n,["components","mdxType","originalType","parentName"]),f=p(i),s=a,d=f["".concat(l,".").concat(s)]||f[s]||h[s]||t;return i?o.createElement(d,r(r({ref:e},_),{},{components:i})):o.createElement(d,r({ref:e},_))}));function s(n,e){var i=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var t=i.length,r=new Array(t);r[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:a,r[1]=c;for(var p=2;p<t;p++)r[p]=i[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,i)}f.displayName="MDXCreateElement"},73883:function(n,e,i){i.r(e),i.d(e,{assets:function(){return _},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return h}});var o=i(87462),a=i(63366),t=(i(67294),i(3905)),r=["components"],c={id:"chain-link-chain-config-bool-exp",title:"chain_link_chain_config_bool_exp",hide_table_of_contents:!1},l=void 0,p={unversionedId:"graphql/inputs/chain-link-chain-config-bool-exp",id:"version-4.1.0/graphql/inputs/chain-link-chain-config-bool-exp",title:"chain_link_chain_config_bool_exp",description:"Boolean expression to filter rows from the table \"chainlinkchain_config\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/chain-link-chain-config-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-chain-config-bool-exp",permalink:"/graphql/inputs/chain-link-chain-config-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/chain-link-chain-config-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"chain-link-chain-config-bool-exp",title:"chain_link_chain_config_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_bool_exp",permalink:"/graphql/inputs/chain-link-bool-exp"},next:{title:"chain_link_chain_config_order_by",permalink:"/graphql/inputs/chain-link-chain-config-order-by"}},_={},h=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[chain_link_chain_config_bool_exp!]</code>)",id:"_and-chain_link_chain_config_bool_exp",level:4},{value:"<code>_not</code> (<code>chain_link_chain_config_bool_exp</code>)",id:"_not-chain_link_chain_config_bool_exp",level:4},{value:"<code>_or</code> (<code>[chain_link_chain_config_bool_exp!]</code>)",id:"_or-chain_link_chain_config_bool_exp",level:4},{value:"<code>chain_links</code> (<code>chain_link_bool_exp</code>)",id:"chain_links-chain_link_bool_exp",level:4},{value:"<code>name</code> (<code>String_comparison_exp</code>)",id:"name-string_comparison_exp",level:4}],f={toc:h};function s(n){var e=n.components,i=(0,a.Z)(n,r);return(0,t.kt)("wrapper",(0,o.Z)({},f,i,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to filter rows from the table \"chain_link_chain_config\". All fields are combined with a logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_chain_config_bool_exp {\n  _and: [chain_link_chain_config_bool_exp!]\n  _not: chain_link_chain_config_bool_exp\n  _or: [chain_link_chain_config_bool_exp!]\n  chain_links: chain_link_bool_exp\n  name: String_comparison_exp\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"_and-chain_link_chain_config_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_bool_exp!]")),")"),(0,t.kt)("h4",{id:"_not-chain_link_chain_config_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_bool_exp")),")"),(0,t.kt)("h4",{id:"_or-chain_link_chain_config_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config_bool_exp!]")),")"),(0,t.kt)("h4",{id:"chain_links-chain_link_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_links"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"),(0,t.kt)("h4",{id:"name-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}s.isMDXComponent=!0}}]);