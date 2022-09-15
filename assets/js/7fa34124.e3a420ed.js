"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32623],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var p=n.createContext({}),u=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},_=n.forwardRef((function(e,r){var t=e.components,s=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),_=u(t),m=s,d=_["".concat(p,".").concat(m)]||_[m]||l[m]||i;return t?n.createElement(d,a(a({ref:r},c),{},{components:t})):n.createElement(d,a({ref:r},c))}));function m(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var i=t.length,a=new Array(i);a[0]=_;var o={};for(var p in r)hasOwnProperty.call(r,p)&&(o[p]=r[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},91770:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=t(87462),s=(t(67294),t(3905));const i={id:"subspace-user-permission-arr-rel-insert-input",title:"subspace_user_permission_arr_rel_insert_input",hide_table_of_contents:!1},a=void 0,o={unversionedId:"graphql/inputs/subspace-user-permission-arr-rel-insert-input",id:"graphql/inputs/subspace-user-permission-arr-rel-insert-input",title:"subspace_user_permission_arr_rel_insert_input",description:'input type for inserting array relation for remote table "subspaceuserpermission"',source:"@site/docs/07-graphql/inputs/subspace-user-permission-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-permission-arr-rel-insert-input",permalink:"/next/graphql/inputs/subspace-user-permission-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-permission-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-user-permission-arr-rel-insert-input",title:"subspace_user_permission_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission_aggregate_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-aggregate-order-by"},next:{title:"subspace_user_permission_avg_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-avg-order-by"}},p={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[subspace_user_permission_insert_input!]!</code>)",id:"data-subspace_user_permission_insert_input",level:4},{value:"<code>on_conflict</code> (<code>subspace_user_permission_on_conflict</code>)",id:"on_conflict-subspace_user_permission_on_conflict",level:4}],c={toc:u};function l(e){let{components:r,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'input type for inserting array relation for remote table "subspace_user_permission"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_permission_arr_rel_insert_input {\n  data: [subspace_user_permission_insert_input!]!\n  on_conflict: subspace_user_permission_on_conflict\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"data-subspace_user_permission_insert_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-insert-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[subspace_user_permission_insert_input!]!")),")"),(0,s.kt)("h4",{id:"on_conflict-subspace_user_permission_on_conflict"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/subspace-user-permission-on-conflict"},(0,s.kt)("inlineCode",{parentName:"a"},"subspace_user_permission_on_conflict")),")"),(0,s.kt)("p",null,"on conflict condition"))}l.isMDXComponent=!0}}]);