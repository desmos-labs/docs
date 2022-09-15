"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[48324],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>y});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),l=function(e){var r=o.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):d(d({},r),e)),t},c=function(e){var r=l(e.components);return o.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),y=n,b=u["".concat(p,".").concat(y)]||u[y]||s[y]||a;return t?o.createElement(b,d(d({ref:r},c),{},{components:t})):o.createElement(b,d({ref:r},c))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,d=new Array(a);d[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var l=2;l<a;l++)d[l]=t[l];return o.createElement.apply(null,d)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},76028:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>d,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(87462),n=(t(67294),t(3905));const a={id:"reaction-order-by",title:"reaction_order_by",hide_table_of_contents:!1},d=void 0,i={unversionedId:"graphql/inputs/reaction-order-by",id:"graphql/inputs/reaction-order-by",title:"reaction_order_by",description:'Ordering options when selecting data from "reaction".',source:"@site/docs/07-graphql/inputs/reaction-order-by.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/reaction-order-by",permalink:"/next/graphql/inputs/reaction-order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/reaction-order-by.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"reaction-order-by",title:"reaction_order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"reaction_on_conflict",permalink:"/next/graphql/inputs/reaction-on-conflict"},next:{title:"reaction_pk_columns_input",permalink:"/next/graphql/inputs/reaction-pk-columns-input"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>author</code> (<code>profile_order_by</code>)",id:"author-profile_order_by",level:4},{value:"<code>author_address</code> (<code>order_by</code>)",id:"author_address-order_by",level:4},{value:"<code>height</code> (<code>order_by</code>)",id:"height-order_by",level:4},{value:"<code>id</code> (<code>order_by</code>)",id:"id-order_by",level:4},{value:"<code>post</code> (<code>post_order_by</code>)",id:"post-post_order_by",level:4},{value:"<code>post_row_id</code> (<code>order_by</code>)",id:"post_row_id-order_by",level:4},{value:"<code>row_id</code> (<code>order_by</code>)",id:"row_id-order_by",level:4},{value:"<code>value</code> (<code>order_by</code>)",id:"value-order_by",level:4}],c={toc:l};function s(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'Ordering options when selecting data from "reaction".'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"input reaction_order_by {\n  author: profile_order_by\n  author_address: order_by\n  height: order_by\n  id: order_by\n  post: post_order_by\n  post_row_id: order_by\n  row_id: order_by\n  value: order_by\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"author-profile_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"author"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profile-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_order_by")),")"),(0,n.kt)("h4",{id:"author_address-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"author_address"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"height-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"post-post_order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"post_order_by")),")"),(0,n.kt)("h4",{id:"post_row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"row_id-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"),(0,n.kt)("h4",{id:"value-order_by"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"value"))," (",(0,n.kt)("a",{parentName:"h4",href:"../enums/order-by"},(0,n.kt)("inlineCode",{parentName:"a"},"order_by")),")"))}s.isMDXComponent=!0}}]);