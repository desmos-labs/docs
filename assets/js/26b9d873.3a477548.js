"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[91485],{3905:(e,a,r)=>{r.d(a,{Zo:()=>l,kt:()=>b});var t=r(67294);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function p(e,a){if(null==e)return{};var r,t,o=function(e,a){if(null==e)return{};var r,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)r=n[t],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=t.createContext({}),c=function(e){var a=t.useContext(i),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},l=function(e){var a=c(e.components);return t.createElement(i.Provider,{value:a},e.children)},_={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},d=t.forwardRef((function(e,a){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),b=o,u=d["".concat(i,".").concat(b)]||d[b]||_[b]||n;return r?t.createElement(u,s(s({ref:a},l),{},{components:r})):t.createElement(u,s({ref:a},l))}));function b(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var p={};for(var i in a)hasOwnProperty.call(a,i)&&(p[i]=a[i]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var c=2;c<n;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74970:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>_,frontMatter:()=>n,metadata:()=>p,toc:()=>c});var t=r(87462),o=(r(67294),r(3905));const n={id:"subspace-registered-reaction-params-bool-exp",title:"subspace_registered_reaction_params_bool_exp",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/subspace-registered-reaction-params-bool-exp",id:"graphql/inputs/subspace-registered-reaction-params-bool-exp",title:"subspace_registered_reaction_params_bool_exp",description:"Boolean expression to filter rows from the table \"subspaceregisteredreaction_params\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/subspace-registered-reaction-params-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-registered-reaction-params-bool-exp",permalink:"/next/graphql/inputs/subspace-registered-reaction-params-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-registered-reaction-params-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-registered-reaction-params-bool-exp",title:"subspace_registered_reaction_params_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_order_by",permalink:"/next/graphql/inputs/subspace-registered-reaction-order-by"},next:{title:"subspace_registered_reaction_params_inc_input",permalink:"/next/graphql/inputs/subspace-registered-reaction-params-inc-input"}},i={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_registered_reaction_params_bool_exp!]</code>)",id:"_and-subspace_registered_reaction_params_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_registered_reaction_params_bool_exp</code>)",id:"_not-subspace_registered_reaction_params_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_registered_reaction_params_bool_exp!]</code>)",id:"_or-subspace_registered_reaction_params_bool_exp",level:4},{value:"<code>enabled</code> (<code>Boolean_comparison_exp</code>)",id:"enabled-boolean_comparison_exp",level:4},{value:"<code>height</code> (<code>bigint_comparison_exp</code>)",id:"height-bigint_comparison_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4}],l={toc:c};function _(e){let{components:a,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_registered_reaction_params\". All fields are combined with a logical 'AND'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_registered_reaction_params_bool_exp {\n  _and: [subspace_registered_reaction_params_bool_exp!]\n  _not: subspace_registered_reaction_params_bool_exp\n  _or: [subspace_registered_reaction_params_bool_exp!]\n  enabled: Boolean_comparison_exp\n  height: bigint_comparison_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"_and-subspace_registered_reaction_params_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_params_bool_exp!]")),")"),(0,o.kt)("h4",{id:"_not-subspace_registered_reaction_params_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_bool_exp")),")"),(0,o.kt)("h4",{id:"_or-subspace_registered_reaction_params_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_params_bool_exp!]")),")"),(0,o.kt)("h4",{id:"enabled-boolean_comparison_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"enabled"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/boolean-comparison-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean_comparison_exp")),")"),(0,o.kt)("h4",{id:"height-bigint_comparison_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,o.kt)("h4",{id:"subspace-subspace_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,o.kt)("h4",{id:"subspace_id-bigint_comparison_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}_.isMDXComponent=!0}}]);