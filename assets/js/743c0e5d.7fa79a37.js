"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[92094],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=i(r),f=s,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=c;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:s,o[1]=d;for(var i=2;i<a;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},61006:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>i});var n=r(87462),s=(r(67294),r(3905));const a={id:"dtag-transfer-requests-stddev-samp-order-by",title:"dtag_transfer_requests_stddev_samp_order_by",hide_table_of_contents:!1},o=void 0,d={unversionedId:"graphql/inputs/dtag-transfer-requests-stddev-samp-order-by",id:"graphql/inputs/dtag-transfer-requests-stddev-samp-order-by",title:"dtag_transfer_requests_stddev_samp_order_by",description:'order by stddevsamp() on columns of table "dtagtransfer_requests"',source:"@site/docs/07-graphql/inputs/dtag-transfer-requests-stddev-samp-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/dtag-transfer-requests-stddev-samp-order-by",permalink:"/next/graphql/inputs/dtag-transfer-requests-stddev-samp-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/dtag-transfer-requests-stddev-samp-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"dtag-transfer-requests-stddev-samp-order-by",title:"dtag_transfer_requests_stddev_samp_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_stddev_pop_order_by",permalink:"/next/graphql/inputs/dtag-transfer-requests-stddev-pop-order-by"},next:{title:"dtag_transfer_requests_sum_order_by",permalink:"/next/graphql/inputs/dtag-transfer-requests-sum-order-by"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4}],l={toc:i};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'order by stddev_samp() on columns of table "dtag_transfer_requests"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input dtag_transfer_requests_stddev_samp_order_by {\n  height: order_by\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"height-order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}u.isMDXComponent=!0}}]);