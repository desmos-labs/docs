"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[80626],{3905:(e,o,t)=>{t.d(o,{Zo:()=>c,kt:()=>f});var r=t(67294);function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function p(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?p(Object(t),!0).forEach((function(o){n(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,r,n=function(e,o){if(null==e)return{};var t,r,n={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],o.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=r.createContext({}),s=function(e){var o=r.useContext(l),t=o;return e&&(t="function"==typeof e?e(o):a(a({},o),e)),t},c=function(e){var o=s(e.components);return r.createElement(l.Provider,{value:o},e.children)},_={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},d=r.forwardRef((function(e,o){var t=e.components,n=e.mdxType,p=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=n,m=d["".concat(l,".").concat(f)]||d[f]||_[f]||p;return t?r.createElement(m,a(a({ref:o},c),{},{components:t})):r.createElement(m,a({ref:o},c))}));function f(e,o){var t=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=d;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<p;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},25952:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>l,contentTitle:()=>a,default:()=>_,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=t(87462),n=(t(67294),t(3905));const p={id:"post-reference-bool-exp",title:"post_reference_bool_exp",hide_table_of_contents:!1},a=void 0,i={unversionedId:"graphql/inputs/post-reference-bool-exp",id:"version-4.1.0/graphql/inputs/post-reference-bool-exp",title:"post_reference_bool_exp",description:"Boolean expression to filter rows from the table \"post_reference\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/post-reference-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-reference-bool-exp",permalink:"/4.1.0/graphql/inputs/post-reference-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/post-reference-bool-exp.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"post-reference-bool-exp",title:"post_reference_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_reference_avg_order_by",permalink:"/4.1.0/graphql/inputs/post-reference-avg-order-by"},next:{title:"post_reference_max_order_by",permalink:"/4.1.0/graphql/inputs/post-reference-max-order-by"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[post_reference_bool_exp!]</code>)",id:"_and-post_reference_bool_exp",level:4},{value:"<code>_not</code> (<code>post_reference_bool_exp</code>)",id:"_not-post_reference_bool_exp",level:4},{value:"<code>_or</code> (<code>[post_reference_bool_exp!]</code>)",id:"_or-post_reference_bool_exp",level:4},{value:"<code>position_index</code> (<code>bigint_comparison_exp</code>)",id:"position_index-bigint_comparison_exp",level:4},{value:"<code>post</code> (<code>post_bool_exp</code>)",id:"post-post_bool_exp",level:4},{value:"<code>reference_id</code> (<code>bigint_comparison_exp</code>)",id:"reference_id-bigint_comparison_exp",level:4},{value:"<code>type</code> (<code>String_comparison_exp</code>)",id:"type-string_comparison_exp",level:4}],c={toc:s};function _(e){let{components:o,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Boolean expression to filter rows from the table \"post_reference\". All fields are combined with a logical 'AND'."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_reference_bool_exp {\n  _and: [post_reference_bool_exp!]\n  _not: post_reference_bool_exp\n  _or: [post_reference_bool_exp!]\n  position_index: bigint_comparison_exp\n  post: post_bool_exp\n  reference_id: bigint_comparison_exp\n  type: String_comparison_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"_and-post_reference_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[post_reference_bool_exp!]")),")"),(0,n.kt)("h4",{id:"_not-post_reference_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_reference_bool_exp")),")"),(0,n.kt)("h4",{id:"_or-post_reference_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-reference-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"[post_reference_bool_exp!]")),")"),(0,n.kt)("h4",{id:"position_index-bigint_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"position_index"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,n.kt)("h4",{id:"post-post_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_bool_exp")),")"),(0,n.kt)("h4",{id:"reference_id-bigint_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"reference_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,n.kt)("h4",{id:"type-string_comparison_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"type"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"))}_.isMDXComponent=!0}}]);