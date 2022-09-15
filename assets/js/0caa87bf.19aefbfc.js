"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[79464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>d});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),p=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return i.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},k=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),k=p(t),d=a,_=k["".concat(o,".").concat(d)]||k[d]||s[d]||r;return t?i.createElement(_,l(l({ref:n},u),{},{components:t})):i.createElement(_,l({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=k;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}k.displayName="MDXCreateElement"},44488:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=t(87462),a=(t(67294),t(3905));const r={id:"update-chain-link-by-pk",title:"update_chain_link_by_pk",hide_table_of_contents:!1},l=void 0,c={unversionedId:"graphql/mutations/update-chain-link-by-pk",id:"graphql/mutations/update-chain-link-by-pk",title:"update_chain_link_by_pk",description:'update single row of the table: "chain_link"',source:"@site/docs/07-graphql/mutations/update-chain-link-by-pk.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/update-chain-link-by-pk",permalink:"/next/graphql/mutations/update-chain-link-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/update-chain-link-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"update-chain-link-by-pk",title:"update_chain_link_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"update_block",permalink:"/next/graphql/mutations/update-block"},next:{title:"update_chain_link_chain_config_by_pk",permalink:"/next/graphql/mutations/update-chain-link-chain-config-by-pk"}},o={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>_inc</code> (<code>chain_link_inc_input</code>)",id:"_inc-chain_link_inc_input",level:4},{value:"<code>_set</code> (<code>chain_link_set_input</code>)",id:"_set-chain_link_set_input",level:4},{value:"<code>pk_columns</code> (<code>chain_link_pk_columns_input!</code>)",id:"pk_columns-chain_link_pk_columns_input",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link</code>",id:"chain_link",level:4}],u={toc:p};function s(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'update single row of the table: "chain_link"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"update_chain_link_by_pk(\n  _inc: chain_link_inc_input\n  _set: chain_link_set_input\n  pk_columns: chain_link_pk_columns_input!\n): chain_link\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"_inc-chain_link_inc_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_inc"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-inc-input"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_inc_input")),")"),(0,a.kt)("p",null,"increments the numeric columns with given value of the filtered values"),(0,a.kt)("h4",{id:"_set-chain_link_set_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_set"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-set-input"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_set_input")),")"),(0,a.kt)("p",null,"sets the columns of the filtered rows to the given values"),(0,a.kt)("h4",{id:"pk_columns-chain_link_pk_columns_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"pk_columns"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/chain-link-pk-columns-input"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link_pk_columns_input!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"chain_link"},(0,a.kt)("a",{parentName:"h4",href:"../objects/chain-link"},(0,a.kt)("inlineCode",{parentName:"a"},"chain_link"))),(0,a.kt)("p",null,'columns and relationships of "chain_link"'))}s.isMDXComponent=!0}}]);