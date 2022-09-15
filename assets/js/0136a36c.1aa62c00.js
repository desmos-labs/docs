"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[65983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,p(p({ref:t},i),{},{components:n})):a.createElement(h,p({ref:t},i))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<o;c++)p[c]=n[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12963:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={id:"delete-post-attachment",title:"delete_post_attachment",hide_table_of_contents:!1},p=void 0,l={unversionedId:"graphql/mutations/delete-post-attachment",id:"graphql/mutations/delete-post-attachment",title:"delete_post_attachment",description:'delete data from the table: "post_attachment"',source:"@site/docs/07-graphql/mutations/delete-post-attachment.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-post-attachment",permalink:"/next/graphql/mutations/delete-post-attachment",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-post-attachment.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"delete-post-attachment",title:"delete_post_attachment",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_post_attachment_by_pk",permalink:"/next/graphql/mutations/delete-post-attachment-by-pk"},next:{title:"delete_post_by_pk",permalink:"/next/graphql/mutations/delete-post-by-pk"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>post_attachment_bool_exp!</code>)",id:"where-post_attachment_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_attachment_mutation_response</code>",id:"post_attachment_mutation_response",level:4}],i={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'delete data from the table: "post_attachment"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_post_attachment(\n  where: post_attachment_bool_exp!\n): post_attachment_mutation_response\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"where-post_attachment_bool_exp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h4",href:"../inputs/post-attachment-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment_bool_exp!")),")"),(0,r.kt)("p",null,"filter the rows which have to be deleted"),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"post_attachment_mutation_response"},(0,r.kt)("a",{parentName:"h4",href:"../objects/post-attachment-mutation-response"},(0,r.kt)("inlineCode",{parentName:"a"},"post_attachment_mutation_response"))),(0,r.kt)("p",null,'response of any mutation on the table "post_attachment"'))}m.isMDXComponent=!0}}]);