"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[30276],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51819:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var a=n(87462),r=(n(67294),n(3905));const o={id:"post-hashtag-select-column",title:"post_hashtag_select_column",hide_table_of_contents:!1},l=void 0,s={unversionedId:"graphql/enums/post-hashtag-select-column",id:"graphql/enums/post-hashtag-select-column",title:"post_hashtag_select_column",description:'select columns of table "post_hashtag"',source:"@site/docs/07-graphql/enums/post-hashtag-select-column.mdx",sourceDirName:"07-graphql/enums",slug:"/graphql/enums/post-hashtag-select-column",permalink:"/next/graphql/enums/post-hashtag-select-column",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/enums/post-hashtag-select-column.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"post-hashtag-select-column",title:"post_hashtag_select_column",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_hashtag_constraint",permalink:"/next/graphql/enums/post-hashtag-constraint"},next:{title:"post_hashtag_update_column",permalink:"/next/graphql/enums/post-hashtag-update-column"}},c={},i=[{value:"Values",id:"values",level:3},{value:"<code>end_index</code>",id:"end_index",level:4},{value:"<code>post_row_id</code>",id:"post_row_id",level:4},{value:"<code>row_id</code>",id:"row_id",level:4},{value:"<code>start_index</code>",id:"start_index",level:4},{value:"<code>tag</code>",id:"tag",level:4}],p={toc:i};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'select columns of table "post_hashtag"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum post_hashtag_select_column {\n  end_index\n  post_row_id\n  row_id\n  start_index\n  tag\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"end_index"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"end_index"))),(0,r.kt)("p",null,"column name"),(0,r.kt)("h4",{id:"post_row_id"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"post_row_id"))),(0,r.kt)("p",null,"column name"),(0,r.kt)("h4",{id:"row_id"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"row_id"))),(0,r.kt)("p",null,"column name"),(0,r.kt)("h4",{id:"start_index"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"start_index"))),(0,r.kt)("p",null,"column name"),(0,r.kt)("h4",{id:"tag"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"tag"))),(0,r.kt)("p",null,"column name"))}u.isMDXComponent=!0}}]);