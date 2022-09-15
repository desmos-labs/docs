"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[41700],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),b=c(r),d=n,m=b["".concat(o,".").concat(d)]||b[d]||l[d]||s;return r?a.createElement(m,p(p({ref:t},u),{},{components:r})):a.createElement(m,p({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,p=new Array(s);p[0]=b;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<s;c++)p[c]=r[c];return a.createElement.apply(null,p)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},93241:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={id:"subspace-by-pk",title:"subspace_by_pk",hide_table_of_contents:!1},p=void 0,i={unversionedId:"graphql/queries/subspace-by-pk",id:"graphql/queries/subspace-by-pk",title:"subspace_by_pk",description:'fetch data from the table: "subspace" using primary key columns',source:"@site/docs/07-graphql/queries/subspace-by-pk.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/subspace-by-pk",permalink:"/next/graphql/queries/subspace-by-pk",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/queries/subspace-by-pk.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"subspace-by-pk",title:"subspace_by_pk",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"subspace_aggregate",permalink:"/next/graphql/queries/subspace-aggregate"},next:{title:"subspace_free_text_params_aggregate",permalink:"/next/graphql/queries/subspace-free-text-params-aggregate"}},o={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>id</code> (<code>bigint!</code>)",id:"id-bigint",level:4},{value:"Type",id:"type",level:3},{value:"<code>subspace</code>",id:"subspace",level:4}],u={toc:c};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'fetch data from the table: "subspace" using primary key columns'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"subspace_by_pk(\n  id: bigint!\n): subspace\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"id-bigint"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,n.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,n.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"subspace"},(0,n.kt)("a",{parentName:"h4",href:"../objects/subspace"},(0,n.kt)("inlineCode",{parentName:"a"},"subspace"))),(0,n.kt)("p",null,'columns and relationships of "subspace"'))}l.isMDXComponent=!0}}]);