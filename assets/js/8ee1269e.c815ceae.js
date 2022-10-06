"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[76233],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),u=l(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||h[d]||o;return r?n.createElement(g,i(i({ref:e},c),{},{components:r})):n.createElement(g,i({ref:e},c))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44054:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));const o={id:"post-hashtag-arr-rel-insert-input",title:"post_hashtag_arr_rel_insert_input",hide_table_of_contents:!1},i=void 0,s={unversionedId:"graphql/inputs/post-hashtag-arr-rel-insert-input",id:"graphql/inputs/post-hashtag-arr-rel-insert-input",title:"post_hashtag_arr_rel_insert_input",description:'input type for inserting array relation for remote table "post_hashtag"',source:"@site/docs/07-graphql/inputs/post-hashtag-arr-rel-insert-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-hashtag-arr-rel-insert-input",permalink:"/next/graphql/inputs/post-hashtag-arr-rel-insert-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-hashtag-arr-rel-insert-input.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-hashtag-arr-rel-insert-input",title:"post_hashtag_arr_rel_insert_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_hashtag_aggregate_order_by",permalink:"/next/graphql/inputs/post-hashtag-aggregate-order-by"},next:{title:"post_hashtag_avg_order_by",permalink:"/next/graphql/inputs/post-hashtag-avg-order-by"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>data</code> (<code>[post_hashtag_insert_input!]!</code>)",id:"data-post_hashtag_insert_input",level:4},{value:"<code>on_conflict</code> (<code>post_hashtag_on_conflict</code>)",id:"on_conflict-post_hashtag_on_conflict",level:4}],c={toc:l};function h(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'input type for inserting array relation for remote table "post_hashtag"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_hashtag_arr_rel_insert_input {\n  data: [post_hashtag_insert_input!]!\n  on_conflict: post_hashtag_on_conflict\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"data-post_hashtag_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"data"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[post_hashtag_insert_input!]!")),")"),(0,a.kt)("h4",{id:"on_conflict-post_hashtag_on_conflict"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/post-hashtag-on-conflict"},(0,a.kt)("inlineCode",{parentName:"a"},"post_hashtag_on_conflict")),")"),(0,a.kt)("p",null,"on conflict condition"))}h.isMDXComponent=!0}}]);