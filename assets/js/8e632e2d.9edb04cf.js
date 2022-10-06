"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[59511],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,b=d["".concat(c,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(b,a(a({ref:t},i),{},{components:r})):n.createElement(b,a({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<l;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73538:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const l={id:"delete-user-block",title:"delete_user_block",hide_table_of_contents:!1},a=void 0,s={unversionedId:"graphql/mutations/delete-user-block",id:"graphql/mutations/delete-user-block",title:"delete_user_block",description:'delete data from the table: "user_block"',source:"@site/docs/07-graphql/mutations/delete-user-block.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-user-block",permalink:"/next/graphql/mutations/delete-user-block",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-user-block.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"delete-user-block",title:"delete_user_block",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_subspace",permalink:"/next/graphql/mutations/delete-subspace"},next:{title:"delete_user_relationship",permalink:"/next/graphql/mutations/delete-user-relationship"}},c={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>user_block_bool_exp!</code>)",id:"where-user_block_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>user_block_mutation_response</code>",id:"user_block_mutation_response",level:4}],i={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'delete data from the table: "user_block"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_user_block(\n  where: user_block_bool_exp!\n): user_block_mutation_response\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"where-user_block_bool_exp"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/user-block-bool-exp"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block_bool_exp!")),")"),(0,o.kt)("p",null,"filter the rows which have to be deleted"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"user_block_mutation_response"},(0,o.kt)("a",{parentName:"h4",href:"../objects/user-block-mutation-response"},(0,o.kt)("inlineCode",{parentName:"a"},"user_block_mutation_response"))),(0,o.kt)("p",null,'response of any mutation on the table "user_block"'))}p.isMDXComponent=!0}}]);