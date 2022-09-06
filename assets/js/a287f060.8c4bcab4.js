"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[40061],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),i=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=i(e.components);return o.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},l=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=i(t),b=n,m=l["".concat(d,".").concat(b)]||l[b]||c[b]||a;return t?o.createElement(m,s(s({ref:r},u),{},{components:t})):o.createElement(m,s({ref:r},u))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=l;var p={};for(var d in r)hasOwnProperty.call(r,d)&&(p[d]=r[d]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var i=2;i<a;i++)s[i]=t[i];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},43542:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const a={id:"subspace-user-group-max-order-by",title:"subspace_user_group_max_order_by",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/subspace-user-group-max-order-by",id:"version-4.1.0/graphql/inputs/subspace-user-group-max-order-by",title:"subspace_user_group_max_order_by",description:'order by max() on columns of table "subspaceusergroup"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-max-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-max-order-by",permalink:"/4.1.0/graphql/inputs/subspace-user-group-max-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-max-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-group-max-order-by",title:"subspace_user_group_max_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_bool_exp",permalink:"/4.1.0/graphql/inputs/subspace-user-group-bool-exp"},next:{title:"subspace_user_group_member_aggregate_order_by",permalink:"/4.1.0/graphql/inputs/subspace-user-group-member-aggregate-order-by"}},d={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>description</code> (<code>order_by</code>)",id:"description-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>name</code> (<code>order_by</code>)",id:"name-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],u={toc:i};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by max() on columns of table "subspace_user_group"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_max_order_by {\n  description: order_by\n  id: order_by\n  name: order_by\n  subspace_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"description-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"description"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"name-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"name"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);