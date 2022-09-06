"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[46645],{3905:(e,s,r)=>{r.d(s,{Zo:()=>c,kt:()=>d});var t=r(67294);function n(e,s,r){return s in e?Object.defineProperty(e,s,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[s]=r,e}function i(e,s){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var s=1;s<arguments.length;s++){var r=null!=arguments[s]?arguments[s]:{};s%2?i(Object(r),!0).forEach((function(s){n(e,s,r[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(r,s))}))}return e}function a(e,s){if(null==e)return{};var r,t,n=function(e,s){if(null==e)return{};var r,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],s.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],s.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=t.createContext({}),u=function(e){var s=t.useContext(p),r=s;return e&&(r="function"==typeof e?e(s):o(o({},s),e)),r},c=function(e){var s=u(e.components);return t.createElement(p.Provider,{value:s},e.children)},l={inlineCode:"code",wrapper:function(e){var s=e.children;return t.createElement(t.Fragment,{},s)}},m=t.forwardRef((function(e,s){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,b=m["".concat(p,".").concat(d)]||m[d]||l[d]||i;return r?t.createElement(b,o(o({ref:s},c),{},{components:r})):t.createElement(b,o({ref:s},c))}));function d(e,s){var r=arguments,n=s&&s.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var a={};for(var p in s)hasOwnProperty.call(s,p)&&(a[p]=s[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},65849:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=r(87462),n=(r(67294),r(3905));const i={id:"subspace-user-permission",title:"subspace_user_permission",hide_table_of_contents:!1},o=void 0,a={unversionedId:"graphql/subscriptions/subspace-user-permission",id:"version-4.1.0/graphql/subscriptions/subspace-user-permission",title:"subspace_user_permission",description:'fetch data from the table: "subspaceuserpermission"',source:"@site/versioned_docs/version-4.1.0/07-graphql/subscriptions/subspace-user-permission.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/subspace-user-permission",permalink:"/4.1.0/graphql/subscriptions/subspace-user-permission",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/subscriptions/subspace-user-permission.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-permission",title:"subspace_user_permission",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group",permalink:"/4.1.0/graphql/subscriptions/subspace-user-group"},next:{title:"subspace",permalink:"/4.1.0/graphql/subscriptions/subspace"}},p={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[subspace_user_permission_select_column!]</code>)",id:"distinct_on-subspace_user_permission_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[subspace_user_permission_order_by!]</code>)",id:"order_by-subspace_user_permission_order_by",level:4},{value:"<code>where</code> (<code>subspace_user_permission_bool_exp</code>)",id:"where-subspace_user_permission_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace_user_permission</code>",id:"subspace_user_permission",level:4}],c={toc:u};function l(e){let{components:s,...r}=e;return(0,n.kt)("wrapper",(0,t.Z)({},c,r,{components:s,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch data from the table: "subspace_user_permission"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_user_permission(\n  distinct_on: [subspace_user_permission_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [subspace_user_permission_order_by!]\n  where: subspace_user_permission_bool_exp\n): [subspace_user_permission!]!\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"distinct_on-subspace_user_permission_select_column"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/subspace-user-permission-select-column"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_select_column!]")),")"),(0,n.kt)("p",null,"distinct select on columns"),(0,n.kt)("h4",{id:"limit-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"limit the number of rows returned"),(0,n.kt)("h4",{id:"offset-int"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,n.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,n.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,n.kt)("h4",{id:"order_by-subspace_user_permission_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_order_by!]")),")"),(0,n.kt)("p",null,"sort the rows by one or more columns"),(0,n.kt)("h4",{id:"where-subspace_user_permission_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_bool_exp")),")"),(0,n.kt)("p",null,"filter the rows returned"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"subspace_user_permission"},(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace-user-permission"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_user_permission"))),(0,n.kt)("p",null,'columns and relationships of "subspace_user_permission"'))}l.isMDXComponent=!0}}]);