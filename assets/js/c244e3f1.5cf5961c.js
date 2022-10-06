"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[33105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(n),f=o,u=m["".concat(p,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(u,a(a({ref:t},d),{},{components:n})):r.createElement(u,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78539:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={id:"post-mention",title:"post_mention",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/objects/post-mention",id:"version-4.2.0/graphql/objects/post-mention",title:"post_mention",description:'columns and relationships of "post_mention"',source:"@site/versioned_docs/version-4.2.0/07-graphql/objects/post-mention.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/post-mention",permalink:"/graphql/objects/post-mention",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/07-graphql/objects/post-mention.mdx",tags:[],version:"4.2.0",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-mention",title:"post_mention",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_max_fields",permalink:"/graphql/objects/post-max-fields"},next:{title:"post_min_fields",permalink:"/graphql/objects/post-min-fields"}},p={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>end_index</code> (<code>bigint!</code>)",id:"end_index-bigint",level:4},{value:"<code>mention</code> (<code>profile</code>)",id:"mention-profile",level:4},{value:"<code>mention_address</code> (<code>String!</code>)",id:"mention_address-string",level:4},{value:"<code>post</code> (<code>post!</code>)",id:"post-post",level:4},{value:"<code>start_index</code> (<code>bigint!</code>)",id:"start_index-bigint",level:4}],d={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'columns and relationships of "post_mention"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type post_mention {\n  end_index: bigint!\n  mention: profile\n  mention_address: String!\n  post: post!\n  start_index: bigint!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"end_index-bigint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"end_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,o.kt)("h4",{id:"mention-profile"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"mention"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,o.kt)("inlineCode",{parentName:"a"},"profile")),")"),(0,o.kt)("p",null,"An object relationship"),(0,o.kt)("h4",{id:"mention_address-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"mention_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"post-post"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"post"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/post"},(0,o.kt)("inlineCode",{parentName:"a"},"post!")),")"),(0,o.kt)("p",null,"An object relationship"),(0,o.kt)("h4",{id:"start_index-bigint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"start_index"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,o.kt)("inlineCode",{parentName:"a"},"bigint!")),")"))}c.isMDXComponent=!0}}]);