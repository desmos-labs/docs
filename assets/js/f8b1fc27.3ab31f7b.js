"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[94426],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>g});var a=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},_=a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,n=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),_=p(t),g=s,u=_["".concat(c,".").concat(g)]||_[g]||l[g]||n;return t?a.createElement(u,i(i({ref:r},d),{},{components:t})):a.createElement(u,i({ref:r},d))}));function g(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var n=t.length,i=new Array(n);i[0]=_;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var p=2;p<n;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},5699:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var a=t(87462),s=(t(67294),t(3905));const n={id:"subspace-registered-reaction-params-aggregate",title:"subspace_registered_reaction_params_aggregate",hide_table_of_contents:!1},i=void 0,o={unversionedId:"graphql/queries/subspace-registered-reaction-params-aggregate",id:"graphql/queries/subspace-registered-reaction-params-aggregate",title:"subspace_registered_reaction_params_aggregate",description:'fetch aggregated fields from the table: "subspaceregisteredreaction_params"',source:"@site/docs/07-graphql/queries/subspace-registered-reaction-params-aggregate.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-registered-reaction-params-aggregate",permalink:"/next/graphql/queries/subspace-registered-reaction-params-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/subspace-registered-reaction-params-aggregate.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"subspace-registered-reaction-params-aggregate",title:"subspace_registered_reaction_params_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_registered_reaction_by_pk",permalink:"/next/graphql/queries/subspace-registered-reaction-by-pk"},next:{title:"subspace_registered_reaction_params_by_pk",permalink:"/next/graphql/queries/subspace-registered-reaction-params-by-pk"}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_registered_reaction_params_select_column!]</code>)",id:"distinct_on-subspace_registered_reaction_params_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_registered_reaction_params_order_by!]</code>)",id:"order_by-subspace_registered_reaction_params_order_by",level:4},{value:"<code>where</code> (<code>subspace_registered_reaction_params_bool_exp</code>)",id:"where-subspace_registered_reaction_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_registered_reaction_params_aggregate</code>",id:"subspace_registered_reaction_params_aggregate",level:4}],d={toc:p};function l(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch aggregated fields from the table: "subspace_registered_reaction_params"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_registered_reaction_params_aggregate(\n  distinct_on: [subspace_registered_reaction_params_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_registered_reaction_params_order_by!]\n  where: subspace_registered_reaction_params_bool_exp\n): subspace_registered_reaction_params_aggregate!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_registered_reaction_params_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-registered-reaction-params-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_params_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_registered_reaction_params_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_registered_reaction_params_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_registered_reaction_params_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-registered-reaction-params-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_registered_reaction_params_aggregate"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-registered-reaction-params-aggregate"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_registered_reaction_params_aggregate"))),(0,s.kt)("p",null,'aggregated selection of "subspace_registered_reaction_params"'))}l.isMDXComponent=!0}}]);