"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[94040],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>b});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),l=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},s=function(e){var r=l(e.components);return o.createElement(d.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),b=n,y=u["".concat(d,".").concat(b)]||u[b]||c[b]||a;return t?o.createElement(y,p(p({ref:r},s),{},{components:t})):o.createElement(y,p({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=u;var i={};for(var d in r)hasOwnProperty.call(r,d)&&(i[d]=r[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var l=2;l<a;l++)p[l]=t[l];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8358:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>p,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const a={id:"report-avg-order-by",title:"report_avg_order_by",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/inputs/report-avg-order-by",id:"version-4.2.0/graphql/inputs/report-avg-order-by",title:"report_avg_order_by",description:'order by avg() on columns of table "report"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/report-avg-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-avg-order-by",permalink:"/graphql/inputs/report-avg-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/report-avg-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"report-avg-order-by",title:"report_avg_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_aggregate_order_by",permalink:"/graphql/inputs/report-aggregate-order-by"},next:{title:"report_bool_exp",permalink:"/graphql/inputs/report-bool-exp"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],s={toc:l};function c(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by avg() on columns of table "report"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_avg_order_by {\n  id: order_by\n  subspace_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);