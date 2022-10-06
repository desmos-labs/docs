"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[53275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},_=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),_=i(r),f=n,m=_["".concat(c,".").concat(f)]||_[f]||u[f]||s;return r?a.createElement(m,o(o({ref:t},l),{},{components:r})):a.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=_;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var i=2;i<s;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}_.displayName="MDXCreateElement"},89748:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var a=r(87462),n=(r(67294),r(3905));const s={id:"subspace-free-text-params-on-conflict",title:"subspace_free_text_params_on_conflict",hide_table_of_contents:!1},o=void 0,p={unversionedId:"graphql/inputs/subspace-free-text-params-on-conflict",id:"graphql/inputs/subspace-free-text-params-on-conflict",title:"subspace_free_text_params_on_conflict",description:'on conflict condition type for table "subspacefreetext_params"',source:"@site/docs/07-graphql/inputs/subspace-free-text-params-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-free-text-params-on-conflict",permalink:"/next/graphql/inputs/subspace-free-text-params-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-free-text-params-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"subspace-free-text-params-on-conflict",title:"subspace_free_text_params_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_free_text_params_obj_rel_insert_input",permalink:"/next/graphql/inputs/subspace-free-text-params-obj-rel-insert-input"},next:{title:"subspace_free_text_params_order_by",permalink:"/next/graphql/inputs/subspace-free-text-params-order-by"}},c={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>subspace_free_text_params_constraint!</code>)",id:"constraint-subspace_free_text_params_constraint",level:4},{value:"<code>update_columns</code> (<code>[subspace_free_text_params_update_column!]!</code>)",id:"update_columns-subspace_free_text_params_update_column",level:4},{value:"<code>where</code> (<code>subspace_free_text_params_bool_exp</code>)",id:"where-subspace_free_text_params_bool_exp",level:4}],l={toc:i};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'on conflict condition type for table "subspace_free_text_params"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_free_text_params_on_conflict {\n  constraint: subspace_free_text_params_constraint!\n  update_columns: [subspace_free_text_params_update_column!]!\n  where: subspace_free_text_params_bool_exp\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"constraint-subspace_free_text_params_constraint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/subspace-free-text-params-constraint"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_constraint!")),")"),(0,n.kt)("h4",{id:"update_columns-subspace_free_text_params_update_column"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/subspace-free-text-params-update-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_free_text_params_update_column!]!")),")"),(0,n.kt)("h4",{id:"where-subspace_free_text_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-free-text-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_free_text_params_bool_exp")),")"))}u.isMDXComponent=!0}}]);