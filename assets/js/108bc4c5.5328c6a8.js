"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[51236],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>m});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},d=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(t),m=i,_=u["".concat(c,".").concat(m)]||u[m]||s[m]||o;return t?n.createElement(_,a(a({ref:r},d),{},{components:t})):n.createElement(_,a({ref:r},d))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},62632:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(87462),i=(t(67294),t(3905));const o={id:"application-link-oracle-request-min-order-by",title:"application_link_oracle_request_min_order_by",hide_table_of_contents:!1},a=void 0,l={unversionedId:"graphql/inputs/application-link-oracle-request-min-order-by",id:"graphql/inputs/application-link-oracle-request-min-order-by",title:"application_link_oracle_request_min_order_by",description:'order by min() on columns of table "applicationlinkoracle_request"',source:"@site/docs/07-graphql/inputs/application-link-oracle-request-min-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-oracle-request-min-order-by",permalink:"/next/graphql/inputs/application-link-oracle-request-min-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/application-link-oracle-request-min-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"application-link-oracle-request-min-order-by",title:"application_link_oracle_request_min_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_max_order_by",permalink:"/next/graphql/inputs/application-link-oracle-request-max-order-by"},next:{title:"application_link_oracle_request_order_by",permalink:"/next/graphql/inputs/application-link-oracle-request-order-by"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>client_id</code> (<code>order_by</code>)",id:"client_id-order_by",level:4},{value:"<code>request_id</code> (<code>order_by</code>)",id:"request_id-order_by",level:4},{value:"<code>script_id</code> (<code>order_by</code>)",id:"script_id-order_by",level:4}],d={toc:p};function s(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'order by min() on columns of table "application_link_oracle_request"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_oracle_request_min_order_by {\n  client_id: order_by\n  request_id: order_by\n  script_id: order_by\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"client_id-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"client_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,i.kt)("h4",{id:"request_id-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"request_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,i.kt)("h4",{id:"script_id-order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"script_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}s.isMDXComponent=!0}}]);