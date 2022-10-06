"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[24556],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),i=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):p(p({},e),t)),r},l=function(t){var e=i(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),u=i(r),d=a,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(h,p(p({ref:e},l),{},{components:r})):n.createElement(h,p({ref:e},l))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,p=new Array(o);p[0]=u;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,p[1]=c;for(var i=2;i<o;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},84124:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const o={id:"post-attachment-by-pk",title:"post_attachment_by_pk",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/queries/post-attachment-by-pk",id:"graphql/queries/post-attachment-by-pk",title:"post_attachment_by_pk",description:'fetch data from the table: "post_attachment" using primary key columns',source:"@site/docs/07-graphql/queries/post-attachment-by-pk.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/post-attachment-by-pk",permalink:"/next/graphql/queries/post-attachment-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/post-attachment-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-attachment-by-pk",title:"post_attachment_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment_aggregate",permalink:"/next/graphql/queries/post-attachment-aggregate"},next:{title:"post_attachment",permalink:"/next/graphql/queries/post-attachment"}},s={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>row_id</code> (<code>Int!</code>)",id:"row_id-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_attachment</code>",id:"post_attachment",level:4}],l={toc:i};function m(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch data from the table: "post_attachment" using primary key columns'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"post_attachment_by_pk(\n  row_id: Int!\n): post_attachment\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"row_id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"post_attachment"},(0,a.kt)("a",{parentName:"h4",href:"../objects/post-attachment"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment"))),(0,a.kt)("p",null,'columns and relationships of "post_attachment"'))}m.isMDXComponent=!0}}]);