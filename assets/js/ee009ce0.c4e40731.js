"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[53151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var o=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},_=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),_=c(r),u=a,b=_["".concat(s,".").concat(u)]||_[u]||l[u]||n;return r?o.createElement(b,i(i({ref:t},d),{},{components:r})):o.createElement(b,i({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=_;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}_.displayName="MDXCreateElement"},57625:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var o=r(87462),a=(r(67294),r(3905));const n={id:"subspace-registered-reaction-bool-exp",title:"subspace_registered_reaction_bool_exp",hide_table_of_contents:!1},i=void 0,p={unversionedId:"graphql/inputs/subspace-registered-reaction-bool-exp",id:"graphql/inputs/subspace-registered-reaction-bool-exp",title:"subspace_registered_reaction_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceregisteredreaction\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/subspace-registered-reaction-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-bool-exp",permalink:"/next/graphql/inputs/subspace-registered-reaction-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-registered-reaction-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"subspace-registered-reaction-bool-exp",title:"subspace_registered_reaction_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_avg_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-avg-order-by"},next:{title:"subspace_registered_reaction_inc_input",permalink:"/next/graphql/inputs/subspace-registered-reaction-inc-input"}},s={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_registered_reaction_bool_exp!]</code>)",id:"_and-subspace_registered_reaction_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_registered_reaction_bool_exp</code>)",id:"_not-subspace_registered_reaction_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_registered_reaction_bool_exp!]</code>)",id:"_or-subspace_registered_reaction_bool_exp",level:4},{value:"<code>display_value</code> (<code>String_comparison_exp</code>)",id:"display_value-string_comparison_exp",level:4},{value:"<code>height</code> (<code>bigint_comparison_exp</code>)",id:"height-bigint_comparison_exp",level:4},{value:"<code>id</code> (<code>bigint_comparison_exp</code>)",id:"id-bigint_comparison_exp",level:4},{value:"<code>row_id</code> (<code>Int_comparison_exp</code>)",id:"row_id-int_comparison_exp",level:4},{value:"<code>shorthand_code</code> (<code>String_comparison_exp</code>)",id:"shorthand_code-string_comparison_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4}],d={toc:c};function l(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_registered_reaction\". All fields are combined with a logical 'AND'."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_bool_exp {\n  _and: [subspace_registered_reaction_bool_exp!]\n  _not: subspace_registered_reaction_bool_exp\n  _or: [subspace_registered_reaction_bool_exp!]\n  display_value: String_comparison_exp\n  height: bigint_comparison_exp\n  id: bigint_comparison_exp\n  row_id: Int_comparison_exp\n  shorthand_code: String_comparison_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"_and-subspace_registered_reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_bool_exp!]")),")"),(0,a.kt)("h4",{id:"_not-subspace_registered_reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_bool_exp")),")"),(0,a.kt)("h4",{id:"_or-subspace_registered_reaction_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_bool_exp!]")),")"),(0,a.kt)("h4",{id:"display_value-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"display_value"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"height-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,a.kt)("h4",{id:"row_id-int_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/int-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"Int_comparison_exp")),")"),(0,a.kt)("h4",{id:"shorthand_code-string_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"shorthand_code"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,a.kt)("h4",{id:"subspace-subspace_bool_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,a.kt)("h4",{id:"subspace_id-bigint_comparison_exp"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}l.isMDXComponent=!0}}]);