"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[44604],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,b=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?n.createElement(b,o(o({ref:r},l),{},{components:t})):n.createElement(b,o({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},80829:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={id:"subspace-user-group-member-min-fields",title:"subspace_user_group_member_min_fields",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/objects/subspace-user-group-member-min-fields",id:"graphql/objects/subspace-user-group-member-min-fields",title:"subspace_user_group_member_min_fields",description:"aggregate min on columns",source:"@site/docs/07-graphql/objects/subspace-user-group-member-min-fields.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/subspace-user-group-member-min-fields",permalink:"/next/graphql/objects/subspace-user-group-member-min-fields",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/subspace-user-group-member-min-fields.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"subspace-user-group-member-min-fields",title:"subspace_user_group_member_min_fields",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_max_fields",permalink:"/next/graphql/objects/subspace-user-group-member-max-fields"},next:{title:"subspace_user_group_member_mutation_response",permalink:"/next/graphql/objects/subspace-user-group-member-mutation-response"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>group_row_id</code> (<code>bigint</code>)",id:"group_row_id-bigint",level:4},{value:"<code>height</code> (<code>bigint</code>)",id:"height-bigint",level:4},{value:"<code>member_address</code> (<code>String</code>)",id:"member_address-string",level:4},{value:"<code>row_id</code> (<code>Int</code>)",id:"row_id-int",level:4}],l={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"aggregate min on columns"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type subspace_user_group_member_min_fields {\n  group_row_id: bigint\n  height: bigint\n  member_address: String\n  row_id: Int\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"group_row_id-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"group_row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"height-bigint"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,a.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,a.kt)("h4",{id:"member_address-string"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"member_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"row_id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"))}m.isMDXComponent=!0}}]);