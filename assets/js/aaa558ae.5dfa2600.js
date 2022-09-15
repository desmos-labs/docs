"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[44088],{3905:(e,n,o)=>{o.d(n,{Zo:()=>_,kt:()=>h});var i=o(67294);function t(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function a(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,i)}return o}function r(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?a(Object(o),!0).forEach((function(n){t(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function p(e,n){if(null==e)return{};var o,i,t=function(e,n){if(null==e)return{};var o,i,t={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],n.indexOf(o)>=0||(t[o]=e[o]);return t}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)o=a[i],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=i.createContext({}),c=function(e){var n=i.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):r(r({},n),e)),o},_=function(e){var n=c(e.components);return i.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},s=i.forwardRef((function(e,n){var o=e.components,t=e.mdxType,a=e.originalType,l=e.parentName,_=p(e,["components","mdxType","originalType","parentName"]),s=c(o),h=t,m=s["".concat(l,".").concat(h)]||s[h]||d[h]||a;return o?i.createElement(m,r(r({ref:n},_),{},{components:o})):i.createElement(m,r({ref:n},_))}));function h(e,n){var o=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=o.length,r=new Array(a);r[0]=s;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:t,r[1]=p;for(var c=2;c<a;c++)r[c]=o[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,o)}s.displayName="MDXCreateElement"},62176:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=o(87462),t=(o(67294),o(3905));const a={id:"chain-link-proof-bool-exp",title:"chain_link_proof_bool_exp",hide_table_of_contents:!1},r=void 0,p={unversionedId:"graphql/inputs/chain-link-proof-bool-exp",id:"graphql/inputs/chain-link-proof-bool-exp",title:"chain_link_proof_bool_exp",description:"Boolean expression to filter rows from the table \"chainlinkproof\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/chain-link-proof-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/chain-link-proof-bool-exp",permalink:"/next/graphql/inputs/chain-link-proof-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/chain-link-proof-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"chain-link-proof-bool-exp",title:"chain_link_proof_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_proof_avg_order_by",permalink:"/next/graphql/inputs/chain-link-proof-avg-order-by"},next:{title:"chain_link_proof_delete_at_path_input",permalink:"/next/graphql/inputs/chain-link-proof-delete-at-path-input"}},l={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[chain_link_proof_bool_exp!]</code>)",id:"_and-chain_link_proof_bool_exp",level:4},{value:"<code>_not</code> (<code>chain_link_proof_bool_exp</code>)",id:"_not-chain_link_proof_bool_exp",level:4},{value:"<code>_or</code> (<code>[chain_link_proof_bool_exp!]</code>)",id:"_or-chain_link_proof_bool_exp",level:4},{value:"<code>chain_link</code> (<code>chain_link_bool_exp</code>)",id:"chain_link-chain_link_bool_exp",level:4},{value:"<code>chain_link_id</code> (<code>bigint_comparison_exp</code>)",id:"chain_link_id-bigint_comparison_exp",level:4},{value:"<code>height</code> (<code>bigint_comparison_exp</code>)",id:"height-bigint_comparison_exp",level:4},{value:"<code>id</code> (<code>Int_comparison_exp</code>)",id:"id-int_comparison_exp",level:4},{value:"<code>plain_text</code> (<code>String_comparison_exp</code>)",id:"plain_text-string_comparison_exp",level:4},{value:"<code>public_key</code> (<code>jsonb_comparison_exp</code>)",id:"public_key-jsonb_comparison_exp",level:4},{value:"<code>signature</code> (<code>String_comparison_exp</code>)",id:"signature-string_comparison_exp",level:4}],_={toc:c};function d(e){let{components:n,...o}=e;return(0,t.kt)("wrapper",(0,i.Z)({},_,o,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to filter rows from the table \"chain_link_proof\". All fields are combined with a logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input chain_link_proof_bool_exp {\n  _and: [chain_link_proof_bool_exp!]\n  _not: chain_link_proof_bool_exp\n  _or: [chain_link_proof_bool_exp!]\n  chain_link: chain_link_bool_exp\n  chain_link_id: bigint_comparison_exp\n  height: bigint_comparison_exp\n  id: Int_comparison_exp\n  plain_text: String_comparison_exp\n  public_key: jsonb_comparison_exp\n  signature: String_comparison_exp\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"_and-chain_link_proof_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_bool_exp!]")),")"),(0,t.kt)("h4",{id:"_not-chain_link_proof_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_proof_bool_exp")),")"),(0,t.kt)("h4",{id:"_or-chain_link_proof_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-proof-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_bool_exp!]")),")"),(0,t.kt)("h4",{id:"chain_link-chain_link_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/chain-link-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_bool_exp")),")"),(0,t.kt)("h4",{id:"chain_link_id-bigint_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_id"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,t.kt)("h4",{id:"height-bigint_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,t.kt)("h4",{id:"id-int_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/int-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"Int_comparison_exp")),")"),(0,t.kt)("h4",{id:"plain_text-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"plain_text"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,t.kt)("h4",{id:"public_key-jsonb_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"public_key"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"),(0,t.kt)("h4",{id:"signature-string_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"signature"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}d.isMDXComponent=!0}}]);