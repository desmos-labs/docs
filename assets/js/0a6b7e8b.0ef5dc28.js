"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[54598],{3905:(e,o,r)=>{r.d(o,{Zo:()=>m,kt:()=>d});var a=r(67294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function n(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?n(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function i(e,o){if(null==e)return{};var r,a,t=function(e,o){if(null==e)return{};var r,a,t={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var l=a.createContext({}),s=function(e){var o=a.useContext(l),r=o;return e&&(r="function"==typeof e?e(o):p(p({},o),e)),r},m=function(e){var o=s(e.components);return a.createElement(l.Provider,{value:o},e.children)},_={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},c=a.forwardRef((function(e,o){var r=e.components,t=e.mdxType,n=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(r),d=t,f=c["".concat(l,".").concat(d)]||c[d]||_[d]||n;return r?a.createElement(f,p(p({ref:o},m),{},{components:r})):a.createElement(f,p({ref:o},m))}));function d(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var n=r.length,p=new Array(n);p[0]=c;var i={};for(var l in o)hasOwnProperty.call(o,l)&&(i[l]=o[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,p[1]=i;for(var s=2;s<n;s++)p[s]=r[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},7490:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>l,contentTitle:()=>p,default:()=>_,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(87462),t=(r(67294),r(3905));const n={id:"profiles-params-bool-exp",title:"profiles_params_bool_exp",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/inputs/profiles-params-bool-exp",id:"graphql/inputs/profiles-params-bool-exp",title:"profiles_params_bool_exp",description:"Boolean expression to filter rows from the table \"profiles_params\". All fields are combined with a logical 'AND'.",source:"@site/docs/07-graphql/inputs/profiles-params-bool-exp.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/profiles-params-bool-exp",permalink:"/next/graphql/inputs/profiles-params-bool-exp",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/profiles-params-bool-exp.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"profiles-params-bool-exp",title:"profiles_params_bool_exp",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profiles_params_append_input",permalink:"/next/graphql/inputs/profiles-params-append-input"},next:{title:"profiles_params_delete_at_path_input",permalink:"/next/graphql/inputs/profiles-params-delete-at-path-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>_and</code> (<code>[profiles_params_bool_exp!]</code>)",id:"_and-profiles_params_bool_exp",level:4},{value:"<code>_not</code> (<code>profiles_params_bool_exp</code>)",id:"_not-profiles_params_bool_exp",level:4},{value:"<code>_or</code> (<code>[profiles_params_bool_exp!]</code>)",id:"_or-profiles_params_bool_exp",level:4},{value:"<code>height</code> (<code>bigint_comparison_exp</code>)",id:"height-bigint_comparison_exp",level:4},{value:"<code>one_row_id</code> (<code>Boolean_comparison_exp</code>)",id:"one_row_id-boolean_comparison_exp",level:4},{value:"<code>params</code> (<code>jsonb_comparison_exp</code>)",id:"params-jsonb_comparison_exp",level:4}],m={toc:s};function _(e){let{components:o,...r}=e;return(0,t.kt)("wrapper",(0,a.Z)({},m,r,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Boolean expression to filter rows from the table \"profiles_params\". All fields are combined with a logical 'AND'."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-graphql"},"input profiles_params_bool_exp {\n  _and: [profiles_params_bool_exp!]\n  _not: profiles_params_bool_exp\n  _or: [profiles_params_bool_exp!]\n  height: bigint_comparison_exp\n  one_row_id: Boolean_comparison_exp\n  params: jsonb_comparison_exp\n}\n")),(0,t.kt)("h3",{id:"fields"},"Fields"),(0,t.kt)("h4",{id:"_and-profiles_params_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_and"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[profiles_params_bool_exp!]")),")"),(0,t.kt)("h4",{id:"_not-profiles_params_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_not"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"profiles_params_bool_exp")),")"),(0,t.kt)("h4",{id:"_or-profiles_params_bool_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"_or"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"[profiles_params_bool_exp!]")),")"),(0,t.kt)("h4",{id:"height-bigint_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/bigint-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"bigint_comparison_exp")),")"),(0,t.kt)("h4",{id:"one_row_id-boolean_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"one_row_id"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/boolean-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"Boolean_comparison_exp")),")"),(0,t.kt)("h4",{id:"params-jsonb_comparison_exp"},(0,t.kt)("a",{parentName:"h4",href:"#"},(0,t.kt)("inlineCode",{parentName:"a"},"params"))," (",(0,t.kt)("a",{parentName:"h4",href:"../inputs/jsonb-comparison-exp"},(0,t.kt)("inlineCode",{parentName:"a"},"jsonb_comparison_exp")),")"))}_.isMDXComponent=!0}}]);