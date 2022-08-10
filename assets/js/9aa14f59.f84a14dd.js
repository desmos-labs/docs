"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[99361],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),s=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=s(e.components);return o.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},f=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=s(t),u=n,m=f["".concat(p,".").concat(u)]||f[u]||c[u]||i;return t?o.createElement(m,a(a({ref:r},d),{},{components:t})):o.createElement(m,a({ref:r},d))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=f;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},10327:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=t(87462),n=(t(67294),t(3905));const i={id:"profile-relationship-aggregate-order-by",title:"profile_relationship_aggregate_order_by",hide_table_of_contents:!1},a=void 0,l={unversionedId:"graphql/inputs/profile-relationship-aggregate-order-by",id:"version-4.1.0/graphql/inputs/profile-relationship-aggregate-order-by",title:"profile_relationship_aggregate_order_by",description:'order by aggregate values of table "profile_relationship"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/profile-relationship-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/profile-relationship-aggregate-order-by",permalink:"/4.1.0/graphql/inputs/profile-relationship-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/profile-relationship-aggregate-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"profile-relationship-aggregate-order-by",title:"profile_relationship_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"profile_order_by",permalink:"/4.1.0/graphql/inputs/profile-order-by"},next:{title:"profile_relationship_bool_exp",permalink:"/4.1.0/graphql/inputs/profile-relationship-bool-exp"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4},{value:"<code>max</code> (<code>profile_relationship_max_order_by</code>)",id:"max-profile_relationship_max_order_by",level:4},{value:"<code>min</code> (<code>profile_relationship_min_order_by</code>)",id:"min-profile_relationship_min_order_by",level:4}],d={toc:s};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by aggregate values of table "profile_relationship"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input profile_relationship_aggregate_order_by {\n  count: order_by\n  max: profile_relationship_max_order_by\n  min: profile_relationship_min_order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"count-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"max-profile_relationship_max_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"max"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-max-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_relationship_max_order_by")),")"),(0,n.kt)("h4",{id:"min-profile_relationship_min_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"min"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profile-relationship-min-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_relationship_min_order_by")),")"))}c.isMDXComponent=!0}}]);