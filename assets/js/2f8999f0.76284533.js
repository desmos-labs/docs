"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[98576],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>g});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=i(t),g=o,b=u["".concat(s,".").concat(g)]||u[g]||d[g]||a;return t?n.createElement(b,p(p({ref:r},c),{},{components:t})):n.createElement(b,p({ref:r},c))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var i=2;i<a;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},17024:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>i});var n=t(87462),o=(t(67294),t(3905));const a={id:"report-reason-aggregate-order-by",title:"report_reason_aggregate_order_by",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/inputs/report-reason-aggregate-order-by",id:"graphql/inputs/report-reason-aggregate-order-by",title:"report_reason_aggregate_order_by",description:'order by aggregate values of table "report_reason"',source:"@site/docs/07-graphql/inputs/report-reason-aggregate-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/report-reason-aggregate-order-by",permalink:"/next/graphql/inputs/report-reason-aggregate-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/report-reason-aggregate-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"report-reason-aggregate-order-by",title:"report_reason_aggregate_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"report_order_by",permalink:"/next/graphql/inputs/report-order-by"},next:{title:"report_reason_bool_exp",permalink:"/next/graphql/inputs/report-reason-bool-exp"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>count</code> (<code>order_by</code>)",id:"count-order_by",level:4}],c={toc:i};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'order by aggregate values of table "report_reason"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input report_reason_aggregate_order_by {\n  count: order_by\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"count-order_by"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"count"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,o.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}d.isMDXComponent=!0}}]);