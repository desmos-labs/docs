"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[11848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},o=Object.keys(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)r=o[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),u=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return s.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return r?s.createElement(f,i(i({ref:t},l),{},{components:r})):s.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var s=r(87462),n=(r(67294),r(3905));const o={},i="User group",a={unversionedId:"developers/types/subspaces/user-group",id:"version-3/developers/types/subspaces/user-group",title:"User group",description:"A User group lives inside a subspace and represents a group of users.",source:"@site/versioned_docs/version-3/02-developers/02-types/subspaces/user-group.md",sourceDirName:"02-developers/02-types/subspaces",slug:"/developers/types/subspaces/user-group",permalink:"/3/developers/types/subspaces/user-group",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/02-types/subspaces/user-group.md",tags:[],version:"3",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{},sidebar:"version-3/docs",previous:{title:"Subspace",permalink:"/3/developers/types/subspaces/subspace"},next:{title:"Permission detail",permalink:"/3/developers/types/subspaces/permission-detail"}},p={},u=[{value:"Attributes",id:"attributes",level:2},{value:"<code>SubspaceID</code>",id:"subspaceid",level:3},{value:"<code>ID</code>",id:"id",level:3},{value:"<code>Name</code>",id:"name",level:3},{value:"<code>Description</code>",id:"description",level:3},{value:"<code>Permissions</code>",id:"permissions",level:3}],l={toc:u};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"user-group"},"User group"),(0,n.kt)("p",null,"A User group lives inside a subspace and represents a group of users."),(0,n.kt)("h2",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,"The following attributes defines a user group."),(0,n.kt)("h3",{id:"subspaceid"},(0,n.kt)("inlineCode",{parentName:"h3"},"SubspaceID")),(0,n.kt)("p",null,"The ID of the subspace inside which the group exists."),(0,n.kt)("h3",{id:"id"},(0,n.kt)("inlineCode",{parentName:"h3"},"ID")),(0,n.kt)("p",null,"The ID that uniquely identifies the group inside the subspace."),(0,n.kt)("h3",{id:"name"},(0,n.kt)("inlineCode",{parentName:"h3"},"Name")),(0,n.kt)("p",null,"Human-readable name of the group."),(0,n.kt)("h3",{id:"description"},(0,n.kt)("inlineCode",{parentName:"h3"},"Description")),(0,n.kt)("p",null,"Optional description of the group."),(0,n.kt)("h3",{id:"permissions"},(0,n.kt)("inlineCode",{parentName:"h3"},"Permissions")),(0,n.kt)("p",null,"Permissions that will be granted to all the users that are part of the group."))}c.isMDXComponent=!0}}]);