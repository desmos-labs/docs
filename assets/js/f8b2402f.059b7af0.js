"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[83065],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},m=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,u=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=i(t),b=o,l=d["".concat(u,".").concat(b)]||d[b]||c[b]||s;return t?n.createElement(l,a(a({ref:r},m),{},{components:t})):n.createElement(l,a({ref:r},m))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=d;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var i=2;i<s;i++)a[i]=t[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},89006:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const s={id:"subspace-user-group-member-min-order-by",title:"subspace_user_group_member_min_order_by",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/inputs/subspace-user-group-member-min-order-by",id:"version-4.1.0/graphql/inputs/subspace-user-group-member-min-order-by",title:"subspace_user_group_member_min_order_by",description:'order by min() on columns of table "subspaceusergroup_member"',source:"@site/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-member-min-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-group-member-min-order-by",permalink:"/4.1.0/graphql/inputs/subspace-user-group-member-min-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/inputs/subspace-user-group-member-min-order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-user-group-member-min-order-by",title:"subspace_user_group_member_min_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_group_member_max_order_by",permalink:"/4.1.0/graphql/inputs/subspace-user-group-member-max-order-by"},next:{title:"subspace_user_group_member_order_by",permalink:"/4.1.0/graphql/inputs/subspace-user-group-member-order-by"}},u={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>member_address</code> (<code>order_by</code>)",id:"member_address-order_by",level:4}],m={toc:i};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by min() on columns of table "subspace_user_group_member"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_group_member_min_order_by {\n  member_address: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"member_address-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"member_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);