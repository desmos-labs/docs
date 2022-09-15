"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[5843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>c});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),_=p(n),c=o,f=_["".concat(d,".").concat(c)]||_[c]||m[c]||i;return n?a.createElement(f,s(s({ref:t},l),{},{components:n})):a.createElement(f,s({ref:t},l))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=_;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r.mdxType="string"==typeof e?e:o,s[1]=r;for(var p=2;p<i;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}_.displayName="MDXCreateElement"},47246:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const i={id:"post-mention-aggregate-fields",title:"post_mention_aggregate_fields",hide_table_of_contents:!1},s=void 0,r={unversionedId:"graphql/objects/post-mention-aggregate-fields",id:"graphql/objects/post-mention-aggregate-fields",title:"post_mention_aggregate_fields",description:'aggregate fields of "post_mention"',source:"@site/docs/07-graphql/objects/post-mention-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-mention-aggregate-fields",permalink:"/next/graphql/objects/post-mention-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-mention-aggregate-fields.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"post-mention-aggregate-fields",title:"post_mention_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_max_fields",permalink:"/next/graphql/objects/post-max-fields"},next:{title:"post_mention_aggregate",permalink:"/next/graphql/objects/post-mention-aggregate"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>avg</code> (<code>post_mention_avg_fields</code>)",id:"avg-post_mention_avg_fields",level:4},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>post_mention_max_fields</code>)",id:"max-post_mention_max_fields",level:4},{value:"<code>min</code> (<code>post_mention_min_fields</code>)",id:"min-post_mention_min_fields",level:4},{value:"<code>stddev</code> (<code>post_mention_stddev_fields</code>)",id:"stddev-post_mention_stddev_fields",level:4},{value:"<code>stddev_pop</code> (<code>post_mention_stddev_pop_fields</code>)",id:"stddev_pop-post_mention_stddev_pop_fields",level:4},{value:"<code>stddev_samp</code> (<code>post_mention_stddev_samp_fields</code>)",id:"stddev_samp-post_mention_stddev_samp_fields",level:4},{value:"<code>sum</code> (<code>post_mention_sum_fields</code>)",id:"sum-post_mention_sum_fields",level:4},{value:"<code>var_pop</code> (<code>post_mention_var_pop_fields</code>)",id:"var_pop-post_mention_var_pop_fields",level:4},{value:"<code>var_samp</code> (<code>post_mention_var_samp_fields</code>)",id:"var_samp-post_mention_var_samp_fields",level:4},{value:"<code>variance</code> (<code>post_mention_variance_fields</code>)",id:"variance-post_mention_variance_fields",level:4}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'aggregate fields of "post_mention"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_mention_aggregate_fields {\n  avg: post_mention_avg_fields\n  count(columns: [post_mention_select_column!], distinct: Boolean): Int!\n  max: post_mention_max_fields\n  min: post_mention_min_fields\n  stddev: post_mention_stddev_fields\n  stddev_pop: post_mention_stddev_pop_fields\n  stddev_samp: post_mention_stddev_samp_fields\n  sum: post_mention_sum_fields\n  var_pop: post_mention_var_pop_fields\n  var_samp: post_mention_var_samp_fields\n  variance: post_mention_variance_fields\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"avg-post_mention_avg_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"avg"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-avg-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_avg_fields")),")"),(0,o.kt)("h4",{id:"count-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"columns-post_mention_select_column"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,o.kt)("a",{parentName:"h5",href:"../enums/post-mention-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_mention_select_column!]")),")")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,o.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,o.kt)("h4",{id:"max-post_mention_max_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-max-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_max_fields")),")"),(0,o.kt)("h4",{id:"min-post_mention_min_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-min-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_min_fields")),")"),(0,o.kt)("h4",{id:"stddev-post_mention_stddev_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-stddev-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_stddev_fields")),")"),(0,o.kt)("h4",{id:"stddev_pop-post_mention_stddev_pop_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-stddev-pop-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_stddev_pop_fields")),")"),(0,o.kt)("h4",{id:"stddev_samp-post_mention_stddev_samp_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"stddev_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-stddev-samp-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_stddev_samp_fields")),")"),(0,o.kt)("h4",{id:"sum-post_mention_sum_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sum"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-sum-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_sum_fields")),")"),(0,o.kt)("h4",{id:"var_pop-post_mention_var_pop_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_pop"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-var-pop-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_var_pop_fields")),")"),(0,o.kt)("h4",{id:"var_samp-post_mention_var_samp_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"var_samp"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-var-samp-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_var_samp_fields")),")"),(0,o.kt)("h4",{id:"variance-post_mention_variance_fields"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"variance"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post-mention-variance-fields"},(0,o.kt)("inlineCode",{parentName:"a"},"post_mention_variance_fields")),")"))}m.isMDXComponent=!0}}]);