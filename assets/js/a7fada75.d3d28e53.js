"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[91618],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>h});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},l=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=d(n),h=r,g=u["".concat(p,".").concat(h)]||u[h]||c[h]||i;return n?a.createElement(g,o(o({ref:e},l),{},{components:n})):a.createElement(g,o({ref:e},l))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99092:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const i={id:"post-hashtag-set-input",title:"post_hashtag_set_input",hide_table_of_contents:!1},o=void 0,s={unversionedId:"graphql/inputs/post-hashtag-set-input",id:"graphql/inputs/post-hashtag-set-input",title:"post_hashtag_set_input",description:'input type for updating data in table "post_hashtag"',source:"@site/docs/07-graphql/inputs/post-hashtag-set-input.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-hashtag-set-input",permalink:"/next/graphql/inputs/post-hashtag-set-input",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-hashtag-set-input.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-hashtag-set-input",title:"post_hashtag_set_input",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_hashtag_pk_columns_input",permalink:"/next/graphql/inputs/post-hashtag-pk-columns-input"},next:{title:"post_hashtag_stddev_order_by",permalink:"/next/graphql/inputs/post-hashtag-stddev-order-by"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>bigint</code>)",id:"end_index-bigint",level:4},{value:"<code>post_row_id</code> (<code>bigint</code>)",id:"post_row_id-bigint",level:4},{value:"<code>row_id</code> (<code>Int</code>)",id:"row_id-int",level:4},{value:"<code>start_index</code> (<code>bigint</code>)",id:"start_index-bigint",level:4},{value:"<code>tag</code> (<code>String</code>)",id:"tag-string",level:4}],l={toc:d};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'input type for updating data in table "post_hashtag"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_hashtag_set_input {\n  end_index: bigint\n  post_row_id: bigint\n  row_id: Int\n  start_index: bigint\n  tag: String\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"end_index-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"post_row_id-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"post_row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"row_id-int"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,r.kt)("h4",{id:"start_index-bigint"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,r.kt)("inlineCode",{parentName:"a"},"bigint")),")"),(0,r.kt)("h4",{id:"tag-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tag"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"))}c.isMDXComponent=!0}}]);