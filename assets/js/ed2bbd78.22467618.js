"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[3023],{3905:(n,e,t)=>{t.d(e,{Zo:()=>_,kt:()=>s});var i=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function o(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function r(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},c=Object.keys(n);for(i=0;i<c.length;i++)t=c[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(i=0;i<c.length;i++)t=c[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=i.createContext({}),p=function(n){var e=i.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):o(o({},e),n)),t},_=function(n){var e=p(n.components);return i.createElement(l.Provider,{value:e},n.children)},h={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,c=n.originalType,l=n.parentName,_=r(n,["components","mdxType","originalType","parentName"]),u=p(t),s=a,f=u["".concat(l,".").concat(s)]||u[s]||h[s]||c;return t?i.createElement(f,o(o({ref:e},_),{},{components:t})):i.createElement(f,o({ref:e},_))}));function s(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var c=t.length,o=new Array(c);o[0]=u;var r={};for(var l in e)hasOwnProperty.call(e,l)&&(r[l]=e[l]);r.originalType=n,r.mdxType="string"==typeof n?n:a,o[1]=r;for(var p=2;p<c;p++)o[p]=t[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12327:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const c={id:"update-chain-link-chain-config",title:"update_chain_link_chain_config",hide_table_of_contents:!1},o=void 0,r={unversionedId:"graphql/mutations/update-chain-link-chain-config",id:"graphql/mutations/update-chain-link-chain-config",title:"update_chain_link_chain_config",description:'update data of the table: "chainlinkchain_config"',source:"@site/docs/07-graphql/mutations/update-chain-link-chain-config.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-chain-link-chain-config",permalink:"/next/graphql/mutations/update-chain-link-chain-config",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-chain-link-chain-config.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"update-chain-link-chain-config",title:"update_chain_link_chain_config",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_chain_link_chain_config_by_pk",permalink:"/next/graphql/mutations/update-chain-link-chain-config-by-pk"},next:{title:"update_chain_link_proof",permalink:"/next/graphql/mutations/update-chain-link-proof"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>chain_link_chain_config_inc_input</code>)",id:"_inc-chain_link_chain_config_inc_input",level:4},{value:"<code>_set</code> (<code>chain_link_chain_config_set_input</code>)",id:"_set-chain_link_chain_config_set_input",level:4},{value:"<code>where</code> (<code>chain_link_chain_config_bool_exp!</code>)",id:"where-chain_link_chain_config_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link_chain_config_mutation_response</code>",id:"chain_link_chain_config_mutation_response",level:4}],_={toc:p};function h(n){let{components:e,...t}=n;return(0,a.kt)("wrapper",(0,i.Z)({},_,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'update data of the table: "chain_link_chain_config"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"update_chain_link_chain_config(\n  _inc: chain_link_chain_config_inc_input\n  _set: chain_link_chain_config_set_input\n  where: chain_link_chain_config_bool_exp!\n): chain_link_chain_config_mutation_response\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"_inc-chain_link_chain_config_inc_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-inc-input"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_inc_input")),")"),(0,a.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,a.kt)("h4",{id:"_set-chain_link_chain_config_set_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-set-input"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_set_input")),")"),(0,a.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,a.kt)("h4",{id:"where-chain_link_chain_config_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-chain-config-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_bool_exp!")),")"),(0,a.kt)("p",null,"filter the rows which have to be updated"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"chain_link_chain_config_mutation_response"},(0,a.kt)("a",{parentName:"h4",href:"../objects/chain-link-chain-config-mutation-response"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_chain_config_mutation_response"))),(0,a.kt)("p",null,'response of any mutation on the table "chain_link_chain_config"'))}h.isMDXComponent=!0}}]);