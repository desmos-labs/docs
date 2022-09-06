"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[1219],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),l=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=l(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,u=d["".concat(p,".").concat(f)]||d[f]||m[f]||o;return t?a.createElement(u,s(s({ref:r},c),{},{components:t})):a.createElement(u,s({ref:r},c))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},75759:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(87462),n=(t(67294),t(3905));const o={id:"profiles-params",title:"profiles_params",hide_table_of_contents:!1},s=void 0,i={unversionedId:"graphql/subscriptions/profiles-params",id:"version-4.1.0/graphql/subscriptions/profiles-params",title:"profiles_params",description:'fetch data from the table: "profiles_params"',source:"@site/versioned_docs/version-4.1.0/07-graphql/subscriptions/profiles-params.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/profiles-params",permalink:"/4.1.0/graphql/subscriptions/profiles-params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/subscriptions/profiles-params.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"profiles-params",title:"profiles_params",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile",permalink:"/4.1.0/graphql/subscriptions/profile"},next:{title:"reaction_aggregate",permalink:"/4.1.0/graphql/subscriptions/reaction-aggregate"}},p={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[profiles_params_select_column!]</code>)",id:"distinct_on-profiles_params_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[profiles_params_order_by!]</code>)",id:"order_by-profiles_params_order_by",level:4},{value:"<code>where</code> (<code>profiles_params_bool_exp</code>)",id:"where-profiles_params_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profiles_params</code>",id:"profiles_params",level:4}],c={toc:l};function m(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch data from the table: "profiles_params"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"profiles_params(\n  distinct_on: [profiles_params_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profiles_params_order_by!]\n  where: profiles_params_bool_exp\n): [profiles_params!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"distinct_on-profiles_params_select_column"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/profiles-params-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[profiles_params_select_column!]")),")"),(0,n.kt)("p",null,"distinct select on columns"),(0,n.kt)("h4",{id:"limit-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",{id:"offset-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",{id:"order_by-profiles_params_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[profiles_params_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",{id:"where-profiles_params_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profiles-params-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"profiles_params_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"profiles_params"},(0,n.kt)("a",{parentName:"h4",href:"../objects/profiles-params"},(0,n.kt)("inlineCode",{parentName:"a"},"profiles_params"))),(0,n.kt)("p",null,'columns and relationships of "profiles_params"'))}m.isMDXComponent=!0}}]);