"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[41862],{3905:(e,r,t)=>{t.d(r,{Zo:()=>i,kt:()=>g});var a=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function n(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):n(n({},r),e)),t},i=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},l=a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,o=e.originalType,p=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=c(t),g=s,b=l["".concat(p,".").concat(g)]||l[g]||m[g]||o;return t?a.createElement(b,n(n({ref:r},i),{},{components:t})):a.createElement(b,n({ref:r},i))}));function g(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var o=t.length,n=new Array(o);n[0]=l;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:s,n[1]=u;for(var c=2;c<o;c++)n[c]=t[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},30070:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=t(87462),s=(t(67294),t(3905));const o={id:"subspace-user-group-member-aggregate",title:"subspace_user_group_member_aggregate",hide_table_of_contents:!1},n=void 0,u={unversionedId:"graphql/subscriptions/subspace-user-group-member-aggregate",id:"version-4.2.0/graphql/subscriptions/subspace-user-group-member-aggregate",title:"subspace_user_group_member_aggregate",description:'fetch aggregated fields from the table: "subspaceusergroup_member"',source:"@site/versioned_docs/version-4.2.0/07-graphql/subscriptions/subspace-user-group-member-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-user-group-member-aggregate",permalink:"/graphql/subscriptions/subspace-user-group-member-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/subscriptions/subspace-user-group-member-aggregate.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-user-group-member-aggregate",title:"subspace_user_group_member_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_aggregate",permalink:"/graphql/subscriptions/subspace-user-group-aggregate"},next:{title:"subspace_user_group_member",permalink:"/graphql/subscriptions/subspace-user-group-member"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_user_group_member_select_column!]</code>)",id:"distinct_on-subspace_user_group_member_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_user_group_member_order_by!]</code>)",id:"order_by-subspace_user_group_member_order_by",level:4},{value:"<code>where</code> (<code>subspace_user_group_member_bool_exp</code>)",id:"where-subspace_user_group_member_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_group_member_aggregate</code>",id:"subspace_user_group_member_aggregate",level:4}],i={toc:c};function m(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},i,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'fetch aggregated fields from the table: "subspace_user_group_member"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_user_group_member_aggregate(\n  distinct_on: [subspace_user_group_member_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_group_member_order_by!]\n  where: subspace_user_group_member_bool_exp\n): subspace_user_group_member_aggregate!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-subspace_user_group_member_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/subspace-user-group-member-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-subspace_user_group_member_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-subspace_user_group_member_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-group-member-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"subspace_user_group_member_aggregate"},(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member-aggregate"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_aggregate"))),(0,s.kt)("p",null,'aggregated selection of "subspace_user_group_member"'))}m.isMDXComponent=!0}}]);