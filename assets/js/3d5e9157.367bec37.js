"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95985],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={id:"insert-profile-one",title:"insert_profile_one",hide_table_of_contents:!1},l=void 0,a={unversionedId:"graphql/mutations/insert-profile-one",id:"graphql/mutations/insert-profile-one",title:"insert_profile_one",description:'insert a single row into the table: "profile"',source:"@site/docs/07-graphql/mutations/insert-profile-one.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-profile-one",permalink:"/next/graphql/mutations/insert-profile-one",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-profile-one.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"insert-profile-one",title:"insert_profile_one",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_posts_params",permalink:"/next/graphql/mutations/insert-posts-params"},next:{title:"insert_profile",permalink:"/next/graphql/mutations/insert-profile"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>object</code> (<code>profile_insert_input!</code>)",id:"object-profile_insert_input",level:4},{value:"<code>on_conflict</code> (<code>profile_on_conflict</code>)",id:"on_conflict-profile_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile</code>",id:"profile",level:4}],s={toc:c};function f(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'insert a single row into the table: "profile"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_profile_one(\n  object: profile_insert_input!\n  on_conflict: profile_on_conflict\n): profile\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"object-profile_insert_input"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"object"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-insert-input"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_insert_input!")),")"),(0,o.kt)("p",null,"the row to be inserted"),(0,o.kt)("h4",{id:"on_conflict-profile_on_conflict"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,o.kt)("a",{parentName:"h4",href:"../inputs/profile-on-conflict"},(0,o.kt)("inlineCode",{parentName:"a"},"profile_on_conflict")),")"),(0,o.kt)("p",null,"on conflict condition"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"profile"},(0,o.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,o.kt)("inlineCode",{parentName:"a"},"profile"))),(0,o.kt)("p",null,'columns and relationships of "profile"'))}f.isMDXComponent=!0}}]);