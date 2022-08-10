"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[85428],{3905:(e,a,t)=>{t.d(a,{Zo:()=>_,kt:()=>m});var r=t(67294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,r,o=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),l=function(e){var a=r.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},_=function(e){var a=l(e.components);return r.createElement(i.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},b=r.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,_=s(e,["components","mdxType","originalType","parentName"]),b=l(t),m=o,d=b["".concat(i,".").concat(m)]||b[m]||c[m]||n;return t?r.createElement(d,p(p({ref:a},_),{},{components:t})):r.createElement(d,p({ref:a},_))}));function m(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,p=new Array(n);p[0]=b;var s={};for(var i in a)hasOwnProperty.call(a,i)&&(s[i]=a[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var l=2;l<n;l++)p[l]=t[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},96250:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>p,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var r=t(87462),o=(t(67294),t(3905));const n={id:"subspace-free-text-params-bool-exp",title:"subspace_free_text_params_bool_exp",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/inputs/subspace-free-text-params-bool-exp",id:"version-4.2.0/graphql/inputs/subspace-free-text-params-bool-exp",title:"subspace_free_text_params_bool_exp",description:"Boolean expression to filter rows from the table \"subspacefreetext_params\". All fields are combined with a logical 'AND'.",source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-free-text-params-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-free-text-params-bool-exp",permalink:"/graphql/inputs/subspace-free-text-params-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-free-text-params-bool-exp.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-free-text-params-bool-exp",title:"subspace_free_text_params_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_bool_exp",permalink:"/graphql/inputs/subspace-bool-exp"},next:{title:"subspace_free_text_params_order_by",permalink:"/graphql/inputs/subspace-free-text-params-order-by"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[subspace_free_text_params_bool_exp!]</code>)",id:"_and-subspace_free_text_params_bool_exp",level:4},{value:"<code>_not</code> (<code>subspace_free_text_params_bool_exp</code>)",id:"_not-subspace_free_text_params_bool_exp",level:4},{value:"<code>_or</code> (<code>[subspace_free_text_params_bool_exp!]</code>)",id:"_or-subspace_free_text_params_bool_exp",level:4},{value:"<code>enabled</code> (<code>Boolean_comparison_exp</code>)",id:"enabled-boolean_comparison_exp",level:4},{value:"<code>max_length</code> (<code>bigint_comparison_exp</code>)",id:"max_length-bigint_comparison_exp",level:4},{value:"<code>reg_ex</code> (<code>String_comparison_exp</code>)",id:"reg_ex-string_comparison_exp",level:4},{value:"<code>subspace</code> (<code>subspace_bool_exp</code>)",id:"subspace-subspace_bool_exp",level:4},{value:"<code>subspace_id</code> (<code>bigint_comparison_exp</code>)",id:"subspace_id-bigint_comparison_exp",level:4}],_={toc:l};function c(e){let{components:a,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},_,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Boolean expression to filter rows from the table \"subspace_free_text_params\". All fields are combined with a logical 'AND'."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_free_text_params_bool_exp {\n  _and: [subspace_free_text_params_bool_exp!]\n  _not: subspace_free_text_params_bool_exp\n  _or: [subspace_free_text_params_bool_exp!]\n  enabled: Boolean_comparison_exp\n  max_length: bigint_comparison_exp\n  reg_ex: String_comparison_exp\n  subspace: subspace_bool_exp\n  subspace_id: bigint_comparison_exp\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"_and-subspace_free_text_params_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_free_text_params_bool_exp!]")),")"),(0,o.kt)("h4",{id:"_not-subspace_free_text_params_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_bool_exp")),")"),(0,o.kt)("h4",{id:"_or-subspace_free_text_params_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"[subspace_free_text_params_bool_exp!]")),")"),(0,o.kt)("h4",{id:"enabled-boolean_comparison_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"enabled"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/boolean-comparison-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean_comparison_exp")),")"),(0,o.kt)("h4",{id:"max_length-bigint_comparison_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max_length"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,o.kt)("h4",{id:"reg_ex-string_comparison_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"reg_ex"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/string-comparison-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"String_comparison_exp")),")"),(0,o.kt)("h4",{id:"subspace-subspace_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_bool_exp")),")"),(0,o.kt)("h4",{id:"subspace_id-bigint_comparison_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"))}c.isMDXComponent=!0}}]);