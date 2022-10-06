"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[65993],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var s=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)t=o[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=s.createContext({}),p=function(e){var r=s.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=p(e.components);return s.createElement(d.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},l=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=p(t),m=n,b=l["".concat(d,".").concat(m)]||l[m]||u[m]||o;return t?s.createElement(b,a(a({ref:r},c),{},{components:t})):s.createElement(b,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=l;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var p=2;p<o;p++)a[p]=t[p];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}l.displayName="MDXCreateElement"},75976:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var s=t(87462),n=(t(67294),t(3905));const o={id:"subspace-user-permission-stddev-samp-order-by",title:"subspace_user_permission_stddev_samp_order_by",hide_table_of_contents:!1},a=void 0,i={unversionedId:"graphql/inputs/subspace-user-permission-stddev-samp-order-by",id:"graphql/inputs/subspace-user-permission-stddev-samp-order-by",title:"subspace_user_permission_stddev_samp_order_by",description:'order by stddevsamp() on columns of table "subspaceuser_permission"',source:"@site/docs/07-graphql/inputs/subspace-user-permission-stddev-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-user-permission-stddev-samp-order-by",permalink:"/next/graphql/inputs/subspace-user-permission-stddev-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/subspace-user-permission-stddev-samp-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"subspace-user-permission-stddev-samp-order-by",title:"subspace_user_permission_stddev_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_user_permission_stddev_pop_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-stddev-pop-order-by"},next:{title:"subspace_user_permission_sum_order_by",permalink:"/next/graphql/inputs/subspace-user-permission-sum-order-by"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4},{value:"<code>section_row_id</code> (<code>order_by</code>)",id:"section_row_id-order_by",level:4}],c={toc:p};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by stddev_samp() on columns of table "subspace_user_permission"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_user_permission_stddev_samp_order_by {\n  height: order_by\n  row_id: order_by\n  section_row_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"height-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"section_row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"section_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}u.isMDXComponent=!0}}]);