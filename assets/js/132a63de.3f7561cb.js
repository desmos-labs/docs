"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[77663],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>h});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),c=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=c(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),h=r,k=u["".concat(p,".").concat(h)]||u[h]||d[h]||a;return t?i.createElement(k,o(o({ref:n},s),{},{components:t})):i.createElement(k,o({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=u;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=t[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},73305:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=t(87462),r=(t(67294),t(3905));const a={id:"chain-link-proof-insert-input",title:"chain_link_proof_insert_input",hide_table_of_contents:!1},o=void 0,l={unversionedId:"graphql/inputs/chain-link-proof-insert-input",id:"graphql/inputs/chain-link-proof-insert-input",title:"chain_link_proof_insert_input",description:'input type for inserting data into table "chainlinkproof"',source:"@site/docs/07-graphql/inputs/chain-link-proof-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-proof-insert-input",permalink:"/next/graphql/inputs/chain-link-proof-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-proof-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"chain-link-proof-insert-input",title:"chain_link_proof_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_proof_inc_input",permalink:"/next/graphql/inputs/chain-link-proof-inc-input"},next:{title:"chain_link_proof_max_order_by",permalink:"/next/graphql/inputs/chain-link-proof-max-order-by"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>chain_link</code> (<code>chain_link_obj_rel_insert_input</code>)",id:"chain_link-chain_link_obj_rel_insert_input",level:4},{value:"<code>chain_link_id</code> (<code>bigint</code>)",id:"chain_link_id-bigint",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>Int</code>)",id:"id-int",level:4},{value:"<code>plain_text</code> (<code>String</code>)",id:"plain_text-string",level:4},{value:"<code>public_key</code> (<code>jsonb</code>)",id:"public_key-jsonb",level:4},{value:"<code>signature</code> (<code>String</code>)",id:"signature-string",level:4}],s={toc:c};function d(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'input type for inserting data into table "chain_link_proof"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_proof_insert_input {\n  chain_link: chain_link_obj_rel_insert_input\n  chain_link_id: bigint\n  height: bigint\n  id: Int\n  plain_text: String\n  public_key: jsonb\n  signature: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"chain_link-chain_link_obj_rel_insert_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"chain_link"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/chain-link-obj-rel-insert-input"},(0,r.kt)("inlineCode",{parentName:"a"},"chain_link_obj_rel_insert_input")),")"),(0,r.kt)("h4",{id:"chain_link_id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"chain_link_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"height-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"id-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("h4",{id:"plain_text-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"plain_text"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,r.kt)("h4",{id:"public_key-jsonb"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"public_key"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,r.kt)("h4",{id:"signature-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"signature"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"))}d.isMDXComponent=!0}}]);