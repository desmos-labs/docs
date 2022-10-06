"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[95152],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(r),u=n,m=f["".concat(p,".").concat(u)]||f[u]||d[u]||l;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var s=2;s<l;s++)a[s]=r[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}f.displayName="MDXCreateElement"},51070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var o=r(87462),n=(r(67294),r(3905));const l={id:"delete-profile",title:"delete_profile",hide_table_of_contents:!1},a=void 0,i={unversionedId:"graphql/mutations/delete-profile",id:"graphql/mutations/delete-profile",title:"delete_profile",description:'delete data from the table: "profile"',source:"@site/docs/07-graphql/mutations/delete-profile.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/delete-profile",permalink:"/next/graphql/mutations/delete-profile",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/delete-profile.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"delete-profile",title:"delete_profile",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"delete_profile_by_pk",permalink:"/next/graphql/mutations/delete-profile-by-pk"},next:{title:"delete_profiles_params_by_pk",permalink:"/next/graphql/mutations/delete-profiles-params-by-pk"}},p={},s=[{value:"Arguments",id:"arguments",level:3},{value:"<code>where</code> (<code>profile_bool_exp!</code>)",id:"where-profile_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>profile_mutation_response</code>",id:"profile_mutation_response",level:4}],c={toc:s};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,'delete data from the table: "profile"'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"delete_profile(\n  where: profile_bool_exp!\n): profile_mutation_response\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"where-profile_bool_exp"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,n.kt)("a",{parentName:"h4",href:"../inputs/profile-bool-exp"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_bool_exp!")),")"),(0,n.kt)("p",null,"filter the rows which have to be deleted"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"profile_mutation_response"},(0,n.kt)("a",{parentName:"h4",href:"../objects/profile-mutation-response"},(0,n.kt)("inlineCode",{parentName:"a"},"profile_mutation_response"))),(0,n.kt)("p",null,'response of any mutation on the table "profile"'))}d.isMDXComponent=!0}}]);