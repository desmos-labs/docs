"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[12937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=i.createContext({}),s=function(e){var t=i.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),h=o,g=f["".concat(p,".").concat(h)]||f[h]||d[h]||n;return r?i.createElement(g,a(a({ref:t},c),{},{components:r})):i.createElement(g,a({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<n;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},10359:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var i=r(87462),o=(r(67294),r(3905));const n={id:"profile-relationship-aggregate",title:"profile_relationship_aggregate",hide_table_of_contents:!1},a=void 0,l={unversionedId:"graphql/subscriptions/profile-relationship-aggregate",id:"version-4.2.0/graphql/subscriptions/profile-relationship-aggregate",title:"profile_relationship_aggregate",description:'fetch aggregated fields from the table: "profile_relationship"',source:"@site/versioned_docs/version-4.2.0/07-graphql/subscriptions/profile-relationship-aggregate.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/profile-relationship-aggregate",permalink:"/graphql/subscriptions/profile-relationship-aggregate",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/subscriptions/profile-relationship-aggregate.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"profile-relationship-aggregate",title:"profile_relationship_aggregate",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_by_pk",permalink:"/graphql/subscriptions/profile-by-pk"},next:{title:"profile_relationship",permalink:"/graphql/subscriptions/profile-relationship"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[profile_relationship_select_column!]</code>)",id:"distinct_on-profile_relationship_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[profile_relationship_order_by!]</code>)",id:"order_by-profile_relationship_order_by",level:4},{value:"<code>where</code> (<code>profile_relationship_bool_exp</code>)",id:"where-profile_relationship_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile_relationship_aggregate</code>",id:"profile_relationship_aggregate",level:4}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch aggregated fields from the table: "profile_relationship"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"profile_relationship_aggregate(\n  distinct_on: [profile_relationship_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_relationship_order_by!]\n  where: profile_relationship_bool_exp\n): profile_relationship_aggregate!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-profile_relationship_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/profile-relationship-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[profile_relationship_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-profile_relationship_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[profile_relationship_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-profile_relationship_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_relationship_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"profile_relationship_aggregate"},(0,o.kt)("a",{parentName:"h4",href:"../objects/profile-relationship-aggregate"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_relationship_aggregate"))),(0,o.kt)("p",null,'aggregated selection of "profile_relationship"'))}d.isMDXComponent=!0}}]);