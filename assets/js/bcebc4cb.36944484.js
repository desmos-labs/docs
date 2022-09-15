"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[46256],{3905:(e,a,n)=>{n.d(a,{Zo:()=>o,kt:()=>h});var i=n(67294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d(e,a){if(null==e)return{};var n,i,t=function(e,a){if(null==e)return{};var n,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var c=i.createContext({}),s=function(e){var a=i.useContext(c),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},o=function(e){var a=s(e.components);return i.createElement(c.Provider,{value:a},e.children)},_={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var n=e.components,t=e.mdxType,l=e.originalType,c=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),p=s(n),h=t,k=p["".concat(c,".").concat(h)]||p[h]||_[h]||l;return n?i.createElement(k,r(r({ref:a},o),{},{components:n})):i.createElement(k,r({ref:a},o))}));function h(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=n.length,r=new Array(l);r[0]=p;var d={};for(var c in a)hasOwnProperty.call(a,c)&&(d[c]=a[c]);d.originalType=e,d.mdxType="string"==typeof e?e:t,r[1]=d;for(var s=2;s<l;s++)r[s]=n[s];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30609:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>_,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var i=n(87462),t=(n(67294),n(3905));const l={id:"chain-link-aggregate-fields",title:"chain_link_aggregate_fields",hide_table_of_contents:!1},r=void 0,d={unversionedId:"graphql/objects/chain-link-aggregate-fields",id:"graphql/objects/chain-link-aggregate-fields",title:"chain_link_aggregate_fields",description:'aggregate fields of "chain_link"',source:"@site/docs/07-graphql/objects/chain-link-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/chain-link-aggregate-fields",permalink:"/next/graphql/objects/chain-link-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/chain-link-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"chain-link-aggregate-fields",title:"chain_link_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"block",permalink:"/next/graphql/objects/block"},next:{title:"chain_link_aggregate",permalink:"/next/graphql/objects/chain-link-aggregate"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>chain_link_avg_fields</code>)",id:"avg-chain_link_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>chain_link_max_fields</code>)",id:"max-chain_link_max_fields",level:4},{value:"<code>min</code> (<code>chain_link_min_fields</code>)",id:"min-chain_link_min_fields",level:4},{value:"<code>stddev</code> (<code>chain_link_stddev_fields</code>)",id:"stddev-chain_link_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>chain_link_stddev_pop_fields</code>)",id:"stddev_pop-chain_link_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>chain_link_stddev_samp_fields</code>)",id:"stddev_samp-chain_link_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>chain_link_sum_fields</code>)",id:"sum-chain_link_sum_fields",level:4},{value:"<code>var_pop</code> (<code>chain_link_var_pop_fields</code>)",id:"var_pop-chain_link_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>chain_link_var_samp_fields</code>)",id:"var_samp-chain_link_var_samp_fields",level:4},{value:"<code>variance</code> (<code>chain_link_variance_fields</code>)",id:"variance-chain_link_variance_fields",level:4}],o={toc:s};function _(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",(0,i.Z)({},o,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,'aggregate fields of "chain_link"'),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"type chain_link_aggregate_fields {\n  avg: chain_link_avg_fields\n  count(columns: [chain_link_select_column!], distinct: Boolean): Int!\n  max: chain_link_max_fields\n  min: chain_link_min_fields\n  stddev: chain_link_stddev_fields\n  stddev_pop: chain_link_stddev_pop_fields\n  stddev_samp: chain_link_stddev_samp_fields\n  sum: chain_link_sum_fields\n  var_pop: chain_link_var_pop_fields\n  var_samp: chain_link_var_samp_fields\n  variance: chain_link_variance_fields\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"avg-chain_link_avg_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-avg-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_avg_fields")),")"),(0,t.kt)("h4",{id:"count-int"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,t.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,t.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("h5",{parentName:"li",id:"columns-chain_link_select_column"},(0,t.kt)("a",{parentName:"h5",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,t.kt)("a",{parentName:"h5",href:"../enums/chain-link-select-column"},(0,t.kt)("inlineCode",{parentName:"a"},"[chain_link_select_column!]")),")")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,t.kt)("a",{parentName:"h5",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,t.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,t.kt)("h4",{id:"max-chain_link_max_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-max-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_max_fields")),")"),(0,t.kt)("h4",{id:"min-chain_link_min_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-min-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_min_fields")),")"),(0,t.kt)("h4",{id:"stddev-chain_link_stddev_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-stddev-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_stddev_fields")),")"),(0,t.kt)("h4",{id:"stddev_pop-chain_link_stddev_pop_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-stddev-pop-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_stddev_pop_fields")),")"),(0,t.kt)("h4",{id:"stddev_samp-chain_link_stddev_samp_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-stddev-samp-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_stddev_samp_fields")),")"),(0,t.kt)("h4",{id:"sum-chain_link_sum_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-sum-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_sum_fields")),")"),(0,t.kt)("h4",{id:"var_pop-chain_link_var_pop_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-var-pop-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_var_pop_fields")),")"),(0,t.kt)("h4",{id:"var_samp-chain_link_var_samp_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-var-samp-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_var_samp_fields")),")"),(0,t.kt)("h4",{id:"variance-chain_link_variance_fields"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,t.kt)("a",{parentName:"h4",href:"../objects/chain-link-variance-fields"},(0,t.kt)("inlineCode",{parentName:"a"},"chain_link_variance_fields")),")"))}_.isMDXComponent=!0}}]);