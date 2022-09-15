"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[83078],{3905:(t,e,n)=>{n.d(e,{Zo:()=>l,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),i=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},l=function(t){var e=i(t.components);return r.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=i(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(f,s(s({ref:e},l),{},{components:n})):r.createElement(f,s({ref:e},l))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,s=new Array(o);s[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94979:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={id:"post-attachment-mutation-response",title:"post_attachment_mutation_response",hide_table_of_contents:!1},s=void 0,c={unversionedId:"graphql/objects/post-attachment-mutation-response",id:"graphql/objects/post-attachment-mutation-response",title:"post_attachment_mutation_response",description:'response of any mutation on the table "post_attachment"',source:"@site/docs/07-graphql/objects/post-attachment-mutation-response.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-attachment-mutation-response",permalink:"/next/graphql/objects/post-attachment-mutation-response",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/post-attachment-mutation-response.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"post-attachment-mutation-response",title:"post_attachment_mutation_response",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment_min_fields",permalink:"/next/graphql/objects/post-attachment-min-fields"},next:{title:"post_attachment_stddev_fields",permalink:"/next/graphql/objects/post-attachment-stddev-fields"}},p={},i=[{value:"Fields",id:"fields",level:3},{value:"<code>affected_rows</code> (<code>Int!</code>)",id:"affected_rows-int",level:4},{value:"<code>returning</code> (<code>[post_attachment!]!</code>)",id:"returning-post_attachment",level:4}],l={toc:i};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'response of any mutation on the table "post_attachment"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_attachment_mutation_response {\n  affected_rows: Int!\n  returning: [post_attachment!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"affected_rows-int"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"affected_rows"))," (",(0,a.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("p",null,"number of rows affected by the mutation"),(0,a.kt)("h4",{id:"returning-post_attachment"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"returning"))," (",(0,a.kt)("a",{parentName:"h4",href:"../objects/post-attachment"},(0,a.kt)("inlineCode",{parentName:"a"},"[post_attachment!]!")),")"),(0,a.kt)("p",null,"data from the rows affected by the mutation"))}m.isMDXComponent=!0}}]);