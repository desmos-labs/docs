"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[40471],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var i=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=i.createContext({}),s=function(e){var r=i.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return i.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},f=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=s(t),h=n,u=f["".concat(p,".").concat(h)]||f[h]||d[h]||o;return t?i.createElement(u,l(l({ref:r},c),{},{components:t})):i.createElement(u,l({ref:r},c))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,l[1]=a;for(var s=2;s<o;s++)l[s]=t[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},5371:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var i=t(87462),n=(t(67294),t(3905));const o={id:"profile-relationship",title:"profile_relationship",hide_table_of_contents:!1},l=void 0,a={unversionedId:"graphql/queries/profile-relationship",id:"version-4.1.0/graphql/queries/profile-relationship",title:"profile_relationship",description:'fetch data from the table: "profile_relationship"',source:"@site/versioned_docs/version-4.1.0/07-graphql/queries/profile-relationship.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/profile-relationship",permalink:"/4.1.0/graphql/queries/profile-relationship",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/queries/profile-relationship.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"profile-relationship",title:"profile_relationship",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_relationship_aggregate",permalink:"/4.1.0/graphql/queries/profile-relationship-aggregate"},next:{title:"profile",permalink:"/4.1.0/graphql/queries/profile"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[profile_relationship_select_column!]</code>)",id:"distinct_on-profile_relationship_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[profile_relationship_order_by!]</code>)",id:"order_by-profile_relationship_order_by",level:4},{value:"<code>where</code> (<code>profile_relationship_bool_exp</code>)",id:"where-profile_relationship_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile_relationship</code>",id:"profile_relationship",level:4}],c={toc:s};function d(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch data from the table: "profile_relationship"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"profile_relationship(\n  distinct_on: [profile_relationship_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_relationship_order_by!]\n  where: profile_relationship_bool_exp\n): [profile_relationship!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"distinct_on-profile_relationship_select_column"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/profile-relationship-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"),(0,n.kt)("p",null,"distinct select on columns"),(0,n.kt)("h4",{id:"limit-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",{id:"offset-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",{id:"order_by-profile_relationship_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[profile_relationship_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",{id:"where-profile_relationship_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"profile_relationship"},(0,n.kt)("a",{parentName:"h4",href:"../objects/profile-relationship"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_relationship"))),(0,n.kt)("p",null,'columns and relationships of "profile_relationship"'))}d.isMDXComponent=!0}}]);