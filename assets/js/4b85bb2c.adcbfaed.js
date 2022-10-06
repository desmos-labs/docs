"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[16152],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),i=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},l=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=i(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(h,p(p({ref:e},l),{},{components:n})):r.createElement(h,p({ref:e},l))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,p[1]=s;for(var i=2;i<o;i++)p[i]=n[i];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84234:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={id:"post-attachment-by-pk",title:"post_attachment_by_pk",hide_table_of_contents:!1},p=void 0,s={unversionedId:"graphql/subscriptions/post-attachment-by-pk",id:"graphql/subscriptions/post-attachment-by-pk",title:"post_attachment_by_pk",description:'fetch data from the table: "post_attachment" using primary key columns',source:"@site/docs/07-graphql/subscriptions/post-attachment-by-pk.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/post-attachment-by-pk",permalink:"/next/graphql/subscriptions/post-attachment-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/post-attachment-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-attachment-by-pk",title:"post_attachment_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment_aggregate",permalink:"/next/graphql/subscriptions/post-attachment-aggregate"},next:{title:"post_attachment",permalink:"/next/graphql/subscriptions/post-attachment"}},c={},i=[{value:"Arguments",id:"arguments",level:3},{value:"<code>row_id</code> (<code>Int!</code>)",id:"row_id-int",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_attachment</code>",id:"post_attachment",level:4}],l={toc:i};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'fetch data from the table: "post_attachment" using primary key columns'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"post_attachment_by_pk(\n  row_id: Int!\n): post_attachment\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"row_id-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"row_id"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"post_attachment"},(0,a.kt)("a",{parentName:"h4",href:"../objects/post-attachment"},(0,a.kt)("inlineCode",{parentName:"a"},"post_attachment"))),(0,a.kt)("p",null,'columns and relationships of "post_attachment"'))}m.isMDXComponent=!0}}]);