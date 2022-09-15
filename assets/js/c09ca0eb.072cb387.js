"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[45317],{3905:(e,t,o)=>{o.d(t,{Zo:()=>_,kt:()=>h});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},_=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,_=i(e,["components","mdxType","originalType","parentName"]),c=l(o),h=n,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||r;return o?a.createElement(m,p(p({ref:t},_),{},{components:o})):a.createElement(m,p({ref:t},_))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,p=new Array(r);p[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<r;l++)p[l]=o[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,o)}c.displayName="MDXCreateElement"},59257:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var a=o(87462),n=(o(67294),o(3905));const r={id:"post-hashtag-bool-exp",title:"post_hashtag_bool_exp",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/inputs/post-hashtag-bool-exp",id:"graphql/inputs/post-hashtag-bool-exp",title:"post_hashtag_bool_exp",description:"Boolean expression to filter rows from the table \"post_hashtag\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/post-hashtag-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-hashtag-bool-exp",permalink:"/next/graphql/inputs/post-hashtag-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-hashtag-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"post-hashtag-bool-exp",title:"post_hashtag_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_hashtag_avg_order_by",permalink:"/next/graphql/inputs/post-hashtag-avg-order-by"},next:{title:"post_hashtag_inc_input",permalink:"/next/graphql/inputs/post-hashtag-inc-input"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_hashtag_bool_exp!]</code>)",id:"_and-post_hashtag_bool_exp",level:4},{value:"<code>_not</code> (<code>post_hashtag_bool_exp</code>)",id:"_not-post_hashtag_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_hashtag_bool_exp!]</code>)",id:"_or-post_hashtag_bool_exp",level:4},{value:"<code>end_index</code> (<code>bigint_comparison_exp</code>)",id:"end_index-bigint_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>post_row_id</code> (<code>bigint_comparison_exp</code>)",id:"post_row_id-bigint_comparison_exp",level:4},{value:"<code>row_id</code> (<code>Int_comparison_exp</code>)",id:"row_id-int_comparison_exp",level:4},{value:"<code>start_index</code> (<code>bigint_comparison_exp</code>)",id:"start_index-bigint_comparison_exp",level:4},{value:"<code>tag</code> (<code>String_comparison_exp</code>)",id:"tag-string_comparison_exp",level:4}],_={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},_,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boolean expression to filter rows from the table \"post_hashtag\". All fields are combined with a logical 'AND'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_hashtag_bool_exp {\n  _and: [post_hashtag_bool_exp!]\n  _not: post_hashtag_bool_exp\n  _or: [post_hashtag_bool_exp!]\n  end_index: bigint_comparison_exp\n  post: post_bool_exp\n  post_row_id: bigint_comparison_exp\n  row_id: Int_comparison_exp\n  start_index: bigint_comparison_exp\n  tag: String_comparison_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"_and-post_hashtag_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[post_hashtag_bool_exp!]")),")"),(0,n.kt)("h4",{id:"_not-post_hashtag_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_hashtag_bool_exp")),")"),(0,n.kt)("h4",{id:"_or-post_hashtag_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[post_hashtag_bool_exp!]")),")"),(0,n.kt)("h4",{id:"end_index-bigint_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,n.kt)("h4",{id:"post-post_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,n.kt)("h4",{id:"post_row_id-bigint_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,n.kt)("h4",{id:"row_id-int_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/int-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"Int_comparison_exp")),")"),(0,n.kt)("h4",{id:"start_index-bigint_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,n.kt)("h4",{id:"tag-string_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"tag"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}d.isMDXComponent=!0}}]);