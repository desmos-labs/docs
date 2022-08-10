"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[6984],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var a=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=a.createContext({}),i=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=i(e.components);return a.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,n=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),c=i(t),d=s,g=c["".concat(p,".").concat(d)]||c[d]||m[d]||n;return t?a.createElement(g,o(o({ref:r},l),{},{components:t})):a.createElement(g,o({ref:r},l))}));function d(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var n=t.length,o=new Array(n);o[0]=c;var u={};for(var p in r)hasOwnProperty.call(r,p)&&(u[p]=r[p]);u.originalType=e,u.mdxType="string"==typeof e?e:s,o[1]=u;for(var i=2;i<n;i++)o[i]=t[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65898:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>u,toc:()=>i});var a=t(87462),s=(t(67294),t(3905));const n={id:"subspace-user-group-member-aggregate-fields",title:"subspace_user_group_member_aggregate_fields",hide_table_of_contents:!1},o=void 0,u={unversionedId:"graphql/objects/subspace-user-group-member-aggregate-fields",id:"version-4.1.0/graphql/objects/subspace-user-group-member-aggregate-fields",title:"subspace_user_group_member_aggregate_fields",description:'aggregate fields of "subspaceusergroup_member"',source:"@site/versioned_docs/version-4.1.0/07-graphql/objects/subspace-user-group-member-aggregate-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-group-member-aggregate-fields",permalink:"/4.1.0/graphql/objects/subspace-user-group-member-aggregate-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/objects/subspace-user-group-member-aggregate-fields.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"subspace-user-group-member-aggregate-fields",title:"subspace_user_group_member_aggregate_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_max_fields",permalink:"/4.1.0/graphql/objects/subspace-user-group-max-fields"},next:{title:"subspace_user_group_member_aggregate",permalink:"/4.1.0/graphql/objects/subspace-user-group-member-aggregate"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>Int!</code>)",id:"count-int",level:4},{value:"<code>max</code> (<code>subspace_user_group_member_max_fields</code>)",id:"max-subspace_user_group_member_max_fields",level:4},{value:"<code>min</code> (<code>subspace_user_group_member_min_fields</code>)",id:"min-subspace_user_group_member_min_fields",level:4}],l={toc:i};function m(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'aggregate fields of "subspace_user_group_member"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_group_member_aggregate_fields {\n  count(\n  columns: [subspace_user_group_member_select_column!]\n  distinct: Boolean\n): Int!\n  max: subspace_user_group_member_max_fields\n  min: subspace_user_group_member_min_fields\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"count-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"columns-subspace_user_group_member_select_column"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"columns"))," (",(0,s.kt)("a",{parentName:"h5",href:"../enums/subspace-user-group-member-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_group_member_select_column!]")),")"))),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("h5",{parentName:"li",id:"distinct-boolean"},(0,s.kt)("a",{parentName:"h5",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct"))," (",(0,s.kt)("a",{parentName:"h5",href:"../scalars/boolean"},(0,s.kt)("inlineCode",{parentName:"a"},"Boolean")),")"))),(0,s.kt)("h4",{id:"max-subspace_user_group_member_max_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member-max-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_max_fields")),")"),(0,s.kt)("h4",{id:"min-subspace_user_group_member_min_fields"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,s.kt)("a",{parentName:"h4",href:"../objects/subspace-user-group-member-min-fields"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_group_member_min_fields")),")"))}m.isMDXComponent=!0}}]);