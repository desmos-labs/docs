"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[79961],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=n.createContext({}),p=function(e){var r=n.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=p(e.components);return n.createElement(d.Provider,{value:r},e.children)},_={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),u=a,y=s["".concat(d,".").concat(u)]||s[u]||_[u]||i;return t?n.createElement(y,o(o({ref:r},c),{},{components:t})):n.createElement(y,o({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},96833:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>o,default:()=>_,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=t(87462),a=(t(67294),t(3905));const i={id:"application-link-oracle-request-order-by",title:"application_link_oracle_request_order_by",hide_table_of_contents:!1},o=void 0,l={unversionedId:"graphql/inputs/application-link-oracle-request-order-by",id:"graphql/inputs/application-link-oracle-request-order-by",title:"application_link_oracle_request_order_by",description:'Ordering options when selecting data from "applicationlinkoracle_request".',source:"@site/docs/07-graphql/inputs/application-link-oracle-request-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/application-link-oracle-request-order-by",permalink:"/next/graphql/inputs/application-link-oracle-request-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/application-link-oracle-request-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"application-link-oracle-request-order-by",title:"application_link_oracle_request_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_on_conflict",permalink:"/next/graphql/inputs/application-link-oracle-request-on-conflict"},next:{title:"application_link_oracle_request_pk_columns_input",permalink:"/next/graphql/inputs/application-link-oracle-request-pk-columns-input"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>application_link</code> (<code>application_link_order_by</code>)",id:"application_link-application_link_order_by",level:4},{value:"<code>application_link_id</code> (<code>order_by</code>)",id:"application_link_id-order_by",level:4},{value:"<code>call_data</code> (<code>order_by</code>)",id:"call_data-order_by",level:4},{value:"<code>client_id</code> (<code>order_by</code>)",id:"client_id-order_by",level:4},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>request_id</code> (<code>order_by</code>)",id:"request_id-order_by",level:4},{value:"<code>script_id</code> (<code>order_by</code>)",id:"script_id-order_by",level:4}],c={toc:p};function _(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "application_link_oracle_request".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input application_link_oracle_request_order_by {\n  application_link: application_link_order_by\n  application_link_id: order_by\n  call_data: order_by\n  client_id: order_by\n  height: order_by\n  id: order_by\n  request_id: order_by\n  script_id: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"application_link-application_link_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_order_by")),")"),(0,a.kt)("h4",{id:"application_link_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"call_data-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"call_data"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"client_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"client_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"height-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"request_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"request_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"script_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"script_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}_.isMDXComponent=!0}}]);