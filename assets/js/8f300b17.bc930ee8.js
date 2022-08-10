"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[47033],{3905:(e,r,t)=>{t.d(r,{Zo:()=>b,kt:()=>d});var a=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),m=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},b=function(e){var r=m(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},i=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,b=u(e,["components","mdxType","originalType","parentName"]),i=m(t),d=o,_=i["".concat(p,".").concat(d)]||i[d]||c[d]||n;return t?a.createElement(_,s(s({ref:r},b),{},{components:t})):a.createElement(_,s({ref:r},b))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,s=new Array(n);s[0]=i;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var m=2;m<n;m++)s[m]=t[m];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}i.displayName="MDXCreateElement"},71181:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>u,toc:()=>m});var a=t(87462),o=(t(67294),t(3905));const n={id:"subspace-user-group-member-aggregate-order-by",title:"subspace_user_group_member_aggregate_order_by",hide_table_of_contents:!1},s=void 0,u={unversionedId:"graphql/inputs/subspace-user-group-member-aggregate-order-by",id:"version-4.2.0/graphql/inputs/subspace-user-group-member-aggregate-order-by",title:"subspace_user_group_member_aggregate_order_by",description:'order by aggregate values of table "subspaceusergroup_member"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-user-group-member-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-aggregate-order-by",permalink:"/graphql/inputs/subspace-user-group-member-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-user-group-member-aggregate-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-user-group-member-aggregate-order-by",title:"subspace_user_group_member_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_max_order_by",permalink:"/graphql/inputs/subspace-user-group-max-order-by"},next:{title:"subspace_user_group_member_bool_exp",permalink:"/graphql/inputs/subspace-user-group-member-bool-exp"}},p={},m=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>subspace_user_group_member_max_order_by</code>)",id:"max-subspace_user_group_member_max_order_by",level:4},{value:"<code>min</code> (<code>subspace_user_group_member_min_order_by</code>)",id:"min-subspace_user_group_member_min_order_by",level:4}],b={toc:m};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by aggregate values of table "subspace_user_group_member"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_member_aggregate_order_by {\n  count: order_by\n  max: subspace_user_group_member_max_order_by\n  min: subspace_user_group_member_min_order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"count-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,o.kt)("h4",{id:"max-subspace_user_group_member_max_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-max-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_max_order_by")),")"),(0,o.kt)("h4",{id:"min-subspace_user_group_member_min_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-min-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_min_order_by")),")"))}c.isMDXComponent=!0}}]);