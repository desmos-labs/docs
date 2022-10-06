"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32589],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>f});var i=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function t(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?t(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,i,o=function(e,a){if(null==e)return{};var n,i,o={},t=Object.keys(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(i=0;i<t.length;i++)n=t[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=i.createContext({}),_=function(e){var a=i.useContext(d),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},p=function(e){var a=_(e.components);return i.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},s=i.forwardRef((function(e,a){var n=e.components,o=e.mdxType,t=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=_(n),f=o,h=s["".concat(d,".").concat(f)]||s[f]||c[f]||t;return n?i.createElement(h,r(r({ref:a},p),{},{components:n})):i.createElement(h,r({ref:a},p))}));function f(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var t=n.length,r=new Array(t);r[0]=s;var l={};for(var d in a)hasOwnProperty.call(a,d)&&(l[d]=a[d]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var _=2;_<t;_++)r[_]=n[_];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},25429:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>t,metadata:()=>l,toc:()=>_});var i=n(87462),o=(n(67294),n(3905));const t={id:"chain-link-proof-aggregate-fields",title:"chain_link_proof_aggregate_fields",hide_table_of_contents:!1},r=void 0,l={unversionedId:"graphql/objects/chain-link-proof-aggregate-fields",id:"graphql/objects/chain-link-proof-aggregate-fields",title:"chain_link_proof_aggregate_fields",description:'aggregate fields of "chainlinkproof"',source:"@site/docs/07-graphql/objects/chain-link-proof-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/chain-link-proof-aggregate-fields",permalink:"/next/graphql/objects/chain-link-proof-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/chain-link-proof-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"chain-link-proof-aggregate-fields",title:"chain_link_proof_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link_mutation_response",permalink:"/next/graphql/objects/chain-link-mutation-response"},next:{title:"chain_link_proof_aggregate",permalink:"/next/graphql/objects/chain-link-proof-aggregate"}},d={},_=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>chain_link_proof_avg_fields</code>)",id:"avg-chain_link_proof_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>chain_link_proof_max_fields</code>)",id:"max-chain_link_proof_max_fields",level:4},{value:"<code>min</code> (<code>chain_link_proof_min_fields</code>)",id:"min-chain_link_proof_min_fields",level:4},{value:"<code>stddev</code> (<code>chain_link_proof_stddev_fields</code>)",id:"stddev-chain_link_proof_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>chain_link_proof_stddev_pop_fields</code>)",id:"stddev_pop-chain_link_proof_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>chain_link_proof_stddev_samp_fields</code>)",id:"stddev_samp-chain_link_proof_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>chain_link_proof_sum_fields</code>)",id:"sum-chain_link_proof_sum_fields",level:4},{value:"<code>var_pop</code> (<code>chain_link_proof_var_pop_fields</code>)",id:"var_pop-chain_link_proof_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>chain_link_proof_var_samp_fields</code>)",id:"var_samp-chain_link_proof_var_samp_fields",level:4},{value:"<code>variance</code> (<code>chain_link_proof_variance_fields</code>)",id:"variance-chain_link_proof_variance_fields",level:4}],p={toc:_};function c(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'aggregate fields of "chain_link_proof"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type chain_link_proof_aggregate_fields {\n  avg: chain_link_proof_avg_fields\n  count(columns: [chain_link_proof_select_column!], distinct: Boolean): Int!\n  max: chain_link_proof_max_fields\n  min: chain_link_proof_min_fields\n  stddev: chain_link_proof_stddev_fields\n  stddev_pop: chain_link_proof_stddev_pop_fields\n  stddev_samp: chain_link_proof_stddev_samp_fields\n  sum: chain_link_proof_sum_fields\n  var_pop: chain_link_proof_var_pop_fields\n  var_samp: chain_link_proof_var_samp_fields\n  variance: chain_link_proof_variance_fields\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"avg-chain_link_proof_avg_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-avg-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_avg_fields")),")"),(0,o.kt)("h4",{id:"count-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"columns-chain_link_proof_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/chain-link-proof-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[chain_link_proof_select_column!]")),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,o.kt)("h4",{id:"max-chain_link_proof_max_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-max-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_max_fields")),")"),(0,o.kt)("h4",{id:"min-chain_link_proof_min_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-min-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_min_fields")),")"),(0,o.kt)("h4",{id:"stddev-chain_link_proof_stddev_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-stddev-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_stddev_fields")),")"),(0,o.kt)("h4",{id:"stddev_pop-chain_link_proof_stddev_pop_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-stddev-pop-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_stddev_pop_fields")),")"),(0,o.kt)("h4",{id:"stddev_samp-chain_link_proof_stddev_samp_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-stddev-samp-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_stddev_samp_fields")),")"),(0,o.kt)("h4",{id:"sum-chain_link_proof_sum_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-sum-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_sum_fields")),")"),(0,o.kt)("h4",{id:"var_pop-chain_link_proof_var_pop_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-var-pop-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_var_pop_fields")),")"),(0,o.kt)("h4",{id:"var_samp-chain_link_proof_var_samp_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-var-samp-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_var_samp_fields")),")"),(0,o.kt)("h4",{id:"variance-chain_link_proof_variance_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/chain-link-proof-variance-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"chain_link_proof_variance_fields")),")"))}c.isMDXComponent=!0}}]);