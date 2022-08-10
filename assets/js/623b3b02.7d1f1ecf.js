"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[78544],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>u});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),f=c(t),u=o,m=f["".concat(p,".").concat(u)]||f[u]||d[u]||i;return t?n.createElement(m,l(l({ref:r},s),{},{components:t})):n.createElement(m,l({ref:r},s))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},96311:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=t(87462),o=(t(67294),t(3905));const i={id:"profile",title:"profile",hide_table_of_contents:!1},l=void 0,a={unversionedId:"graphql/queries/profile",id:"version-4.1.0/graphql/queries/profile",title:"profile",description:'fetch data from the table: "profile"',source:"@site/versioned_docs/version-4.1.0/07-graphql/queries/profile.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/profile",permalink:"/4.1.0/graphql/queries/profile",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/queries/profile.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"profile",title:"profile",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_relationship",permalink:"/4.1.0/graphql/queries/profile-relationship"},next:{title:"profiles_params",permalink:"/4.1.0/graphql/queries/profiles-params"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[profile_select_column!]</code>)",id:"distinct_on-profile_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[profile_order_by!]</code>)",id:"order_by-profile_order_by",level:4},{value:"<code>where</code> (<code>profile_bool_exp</code>)",id:"where-profile_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile</code>",id:"profile",level:4}],s={toc:c};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'fetch data from the table: "profile"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"profile(\n  distinct_on: [profile_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [profile_order_by!]\n  where: profile_bool_exp\n): [profile!]!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"distinct_on-profile_select_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/profile-select-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[profile_select_column!]")),")"),(0,o.kt)("p",null,"distinct select on columns"),(0,o.kt)("h4",{id:"limit-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"limit the number of rows returned"),(0,o.kt)("h4",{id:"offset-int"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,o.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,o.kt)("h4",{id:"order_by-profile_order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"[profile_order_by!]")),")"),(0,o.kt)("p",null,"sort the rows by one or more columns"),(0,o.kt)("h4",{id:"where-profile_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_bool_exp")),")"),(0,o.kt)("p",null,"filter the rows returned"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"profile"},(0,o.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,o.kt)("inlineCode",{parentName:"a"},"profile"))),(0,o.kt)("p",null,'columns and relationships of "profile"'))}d.isMDXComponent=!0}}]);