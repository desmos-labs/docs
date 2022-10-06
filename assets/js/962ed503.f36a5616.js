"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[76276],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>_});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),_=r,h=u["".concat(l,".").concat(_)]||u[_]||f[_]||i;return t?o.createElement(h,a(a({ref:n},s),{},{components:t})):o.createElement(h,a({ref:n},s))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},12729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=t(87462),r=(t(67294),t(3905));const i={id:"insert-chain-link-proof",title:"insert_chain_link_proof",hide_table_of_contents:!1},a=void 0,c={unversionedId:"graphql/mutations/insert-chain-link-proof",id:"graphql/mutations/insert-chain-link-proof",title:"insert_chain_link_proof",description:'insert data into the table: "chainlinkproof"',source:"@site/docs/07-graphql/mutations/insert-chain-link-proof.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-chain-link-proof",permalink:"/next/graphql/mutations/insert-chain-link-proof",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-chain-link-proof.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"insert-chain-link-proof",title:"insert_chain_link_proof",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_chain_link_proof_one",permalink:"/next/graphql/mutations/insert-chain-link-proof-one"},next:{title:"insert_chain_link",permalink:"/next/graphql/mutations/insert-chain-link"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[chain_link_proof_insert_input!]!</code>)",id:"objects-chain_link_proof_insert_input",level:4},{value:"<code>on_conflict</code> (<code>chain_link_proof_on_conflict</code>)",id:"on_conflict-chain_link_proof_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>chain_link_proof_mutation_response</code>",id:"chain_link_proof_mutation_response",level:4}],s={toc:p};function f(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'insert data into the table: "chain_link_proof"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_chain_link_proof(\n  objects: [chain_link_proof_insert_input!]!\n  on_conflict: chain_link_proof_on_conflict\n): chain_link_proof_mutation_response\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"objects-chain_link_proof_insert_input"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-insert-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_insert_input!]!")),")"),(0,r.kt)("p",null,"the rows to be inserted"),(0,r.kt)("h4",{id:"on_conflict-chain_link_proof_on_conflict"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-on-conflict"},(0,r.kt)("inlineCode",{parentName:"a"},"chain_link_proof_on_conflict")),")"),(0,r.kt)("p",null,"on conflict condition"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"chain_link_proof_mutation_response"},(0,r.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-mutation-response"},(0,r.kt)("inlineCode",{parentName:"a"},"chain_link_proof_mutation_response"))),(0,r.kt)("p",null,'response of any mutation on the table "chain_link_proof"'))}f.isMDXComponent=!0}}]);