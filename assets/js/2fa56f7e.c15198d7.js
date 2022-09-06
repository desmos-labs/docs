"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[26882],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>b});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),d=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=d(e.components);return o.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},l=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(t),b=n,m=l["".concat(i,".").concat(b)]||l[b]||u[b]||a;return t?o.createElement(m,s(s({ref:r},c),{},{components:t})):o.createElement(m,s({ref:r},c))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,s=new Array(a);s[0]=l;var p={};for(var i in r)hasOwnProperty.call(r,i)&&(p[i]=r[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,s[1]=p;for(var d=2;d<a;d++)s[d]=t[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}l.displayName="MDXCreateElement"},27234:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var o=t(87462),n=(t(67294),t(3905));const a={id:"subspace-report-reason-sum-order-by",title:"subspace_report_reason_sum_order_by",hide_table_of_contents:!1},s=void 0,p={unversionedId:"graphql/inputs/subspace-report-reason-sum-order-by",id:"version-4.2.0/graphql/inputs/subspace-report-reason-sum-order-by",title:"subspace_report_reason_sum_order_by",description:'order by sum() on columns of table "subspacereportreason"',source:"@site/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-report-reason-sum-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/subspace-report-reason-sum-order-by",permalink:"/graphql/inputs/subspace-report-reason-sum-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/inputs/subspace-report-reason-sum-order-by.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"subspace-report-reason-sum-order-by",title:"subspace_report_reason_sum_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_report_reason_stddev_samp_order_by",permalink:"/graphql/inputs/subspace-report-reason-stddev-samp-order-by"},next:{title:"subspace_report_reason_var_pop_order_by",permalink:"/graphql/inputs/subspace-report-reason-var-pop-order-by"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>subspace_id</code> (<code>order_by</code>)",id:"subspace_id-order_by",level:4}],c={toc:d};function u(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'order by sum() on columns of table "subspace_report_reason"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input subspace_report_reason_sum_order_by {\n  id: order_by\n  subspace_id: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"subspace_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}u.isMDXComponent=!0}}]);