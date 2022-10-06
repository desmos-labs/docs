"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[58367],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},i=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?o.createElement(f,a(a({ref:t},i),{},{components:r})):o.createElement(f,a({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:n,a[1]=p;for(var u=2;u<l;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5391:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const l={id:"delete-post-url",title:"delete_post_url",hide_table_of_contents:!1},a=void 0,p={unversionedId:"graphql/mutations/delete-post-url",id:"graphql/mutations/delete-post-url",title:"delete_post_url",description:'delete data from the table: "post_url"',source:"@site/docs/07-graphql/mutations/delete-post-url.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-post-url",permalink:"/next/graphql/mutations/delete-post-url",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-post-url.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"delete-post-url",title:"delete_post_url",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_post_url_by_pk",permalink:"/next/graphql/mutations/delete-post-url-by-pk"},next:{title:"delete_post",permalink:"/next/graphql/mutations/delete-post"}},s={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>post_url_bool_exp!</code>)",id:"where-post_url_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>post_url_mutation_response</code>",id:"post_url_mutation_response",level:4}],i={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'delete data from the table: "post_url"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_post_url(\n  where: post_url_bool_exp!\n): post_url_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"where-post_url_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/post-url-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"post_url_bool_exp!")),")"),(0,n.kt)("p",null,"filter the rows which have to be deleted"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"post_url_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/post-url-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"post_url_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "post_url"'))}c.isMDXComponent=!0}}]);