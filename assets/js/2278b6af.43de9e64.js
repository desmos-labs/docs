"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[22700],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),s=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(i.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},_=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),_=s(t),m=a,u=_["".concat(i,".").concat(m)]||_[m]||c[m]||o;return t?n.createElement(u,d(d({ref:r},p),{},{components:t})):n.createElement(u,d({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,d=new Array(o);d[0]=_;var l={};for(var i in r)hasOwnProperty.call(r,i)&&(l[i]=r[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,d[1]=l;for(var s=2;s<o;s++)d[s]=t[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},84032:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>d,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=t(87462),a=(t(67294),t(3905));const o={id:"poll-answer-order-by",title:"poll_answer_order_by",hide_table_of_contents:!1},d=void 0,l={unversionedId:"graphql/inputs/poll-answer-order-by",id:"graphql/inputs/poll-answer-order-by",title:"poll_answer_order_by",description:'Ordering options when selecting data from "poll_answer".',source:"@site/docs/07-graphql/inputs/poll-answer-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/poll-answer-order-by",permalink:"/next/graphql/inputs/poll-answer-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/poll-answer-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"poll-answer-order-by",title:"poll_answer_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"poll_answer_on_conflict",permalink:"/next/graphql/inputs/poll-answer-on-conflict"},next:{title:"poll_answer_pk_columns_input",permalink:"/next/graphql/inputs/poll-answer-pk-columns-input"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:"<code>answers_indexes</code> (<code>order_by</code>)",id:"answers_indexes-order_by",level:4},{value:"<code>attachment_row_id</code> (<code>order_by</code>)",id:"attachment_row_id-order_by",level:4},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>post_attachment</code> (<code>post_attachment_order_by</code>)",id:"post_attachment-post_attachment_order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4},{value:"<code>user_address</code> (<code>order_by</code>)",id:"user_address-order_by",level:4}],p={toc:s};function c(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'Ordering options when selecting data from "poll_answer".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input poll_answer_order_by {\n  answers_indexes: order_by\n  attachment_row_id: order_by\n  height: order_by\n  post_attachment: post_attachment_order_by\n  row_id: order_by\n  user_address: order_by\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"answers_indexes-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"answers_indexes"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"attachment_row_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"attachment_row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"height-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"post_attachment-post_attachment_order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment_order_by")),")"),(0,a.kt)("h4",{id:"row_id-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,a.kt)("h4",{id:"user_address-order_by"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,a.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,a.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}c.isMDXComponent=!0}}]);