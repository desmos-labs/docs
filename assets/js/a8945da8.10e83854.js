"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[53101],{3905:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>d});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),s=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},f=function(e){var n=s(e.components);return i.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),h=s(t),d=r,u=h["".concat(l,".").concat(d)]||h[d]||p[d]||a;return t?i.createElement(u,o(o({ref:n},f),{},{components:t})):i.createElement(u,o({ref:n},f))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},50020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=t(87462),r=(t(67294),t(3905));const a={id:"chain-link-chain-config-mutation-response",title:"chain_link_chain_config_mutation_response",hide_table_of_contents:!1},o=void 0,c={unversionedId:"graphql/objects/chain-link-chain-config-mutation-response",id:"graphql/objects/chain-link-chain-config-mutation-response",title:"chain_link_chain_config_mutation_response",description:'response of any mutation on the table "chainlinkchain_config"',source:"@site/docs/07-graphql/objects/chain-link-chain-config-mutation-response.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/chain-link-chain-config-mutation-response",permalink:"/next/graphql/objects/chain-link-chain-config-mutation-response",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/chain-link-chain-config-mutation-response.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"chain-link-chain-config-mutation-response",title:"chain_link_chain_config_mutation_response",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_chain_config_min_fields",permalink:"/next/graphql/objects/chain-link-chain-config-min-fields"},next:{title:"chain_link_chain_config_stddev_fields",permalink:"/next/graphql/objects/chain-link-chain-config-stddev-fields"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>affected_rows</code> (<code>Int!</code>)",id:"affected_rows-int",level:4},{value:"<code>returning</code> (<code>[chain_link_chain_config!]!</code>)",id:"returning-chain_link_chain_config",level:4}],f={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'response of any mutation on the table "chain_link_chain_config"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type chain_link_chain_config_mutation_response {\n  affected_rows: Int!\n  returning: [chain_link_chain_config!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"affected_rows-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"affected_rows"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,r.kt)("p",null,"number of rows affected by the mutation"),(0,r.kt)("h4",{id:"returning-chain_link_chain_config"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"returning"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/chain-link-chain-config"},(0,r.kt)("inlineCode",{parentName:"a"},"[chain_link_chain_config!]!")),")"),(0,r.kt)("p",null,"data from the rows affected by the mutation"))}p.isMDXComponent=!0}}]);