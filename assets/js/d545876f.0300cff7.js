"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[44752],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var i=a.createContext({}),l=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=l(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),u=l(n),d=o,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,c(c({ref:e},s),{},{components:n})):a.createElement(h,c({ref:e},s))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,c=new Array(r);c[0]=u;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:o,c[1]=p;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76437:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={id:"post-attachment-on-conflict",title:"post_attachment_on_conflict",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/inputs/post-attachment-on-conflict",id:"graphql/inputs/post-attachment-on-conflict",title:"post_attachment_on_conflict",description:'on conflict condition type for table "post_attachment"',source:"@site/docs/07-graphql/inputs/post-attachment-on-conflict.mdx",sourceDirName:"07-graphql/inputs",slug:"/graphql/inputs/post-attachment-on-conflict",permalink:"/next/graphql/inputs/post-attachment-on-conflict",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/inputs/post-attachment-on-conflict.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"post-attachment-on-conflict",title:"post_attachment_on_conflict",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"post_attachment_obj_rel_insert_input",permalink:"/next/graphql/inputs/post-attachment-obj-rel-insert-input"},next:{title:"post_attachment_order_by",permalink:"/next/graphql/inputs/post-attachment-order-by"}},i={},l=[{value:"Fields",id:"fields",level:3},{value:"<code>constraint</code> (<code>post_attachment_constraint!</code>)",id:"constraint-post_attachment_constraint",level:4},{value:"<code>update_columns</code> (<code>[post_attachment_update_column!]!</code>)",id:"update_columns-post_attachment_update_column",level:4},{value:"<code>where</code> (<code>post_attachment_bool_exp</code>)",id:"where-post_attachment_bool_exp",level:4}],s={toc:l};function m(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'on conflict condition type for table "post_attachment"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input post_attachment_on_conflict {\n  constraint: post_attachment_constraint!\n  update_columns: [post_attachment_update_column!]!\n  where: post_attachment_bool_exp\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"constraint-post_attachment_constraint"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"constraint"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/post-attachment-constraint"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_constraint!")),")"),(0,o.kt)("h4",{id:"update_columns-post_attachment_update_column"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"update_columns"))," (",(0,o.kt)("a",{parentName:"h4",href:"../enums/post-attachment-update-column"},(0,o.kt)("inlineCode",{parentName:"a"},"[post_attachment_update_column!]!")),")"),(0,o.kt)("h4",{id:"where-post_attachment_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp")),")"))}m.isMDXComponent=!0}}]);