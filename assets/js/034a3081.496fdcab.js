"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[80131],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),l=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},c=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),c=l(r),m=n,f=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return r?s.createElement(f,o(o({ref:t},d),{},{components:r})):s.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var l=2;l<i;l++)o[l]=r[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}c.displayName="MDXCreateElement"},93589:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=r(87462),n=(r(67294),r(3905));const i={},o="Permission detail",a={unversionedId:"developers/types/subspaces/permission-detail",id:"version-3/developers/types/subspaces/permission-detail",title:"Permission detail",description:"A permission detail contains the data of a permission.",source:"@site/versioned_docs/version-3/02-developers/02-types/subspaces/permission-detail.md",sourceDirName:"02-developers/02-types/subspaces",slug:"/developers/types/subspaces/permission-detail",permalink:"/3/developers/types/subspaces/permission-detail",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/02-types/subspaces/permission-detail.md",tags:[],version:"3",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{},sidebar:"version-3/docs",previous:{title:"User group",permalink:"/3/developers/types/subspaces/user-group"},next:{title:"Save profile",permalink:"/3/developers/transactions/profiles/save-profile"}},p={},l=[{value:"<code>User</code>",id:"user",level:3},{value:"Attributes",id:"attributes",level:4},{value:"<code>User</code>",id:"user-1",level:5},{value:"<code>Permission</code>",id:"permission",level:5},{value:"<code>Group</code>",id:"group",level:3},{value:"Attributes",id:"attributes-1",level:4},{value:"<code>GroupID</code>",id:"groupid",level:5},{value:"<code>Permission</code>",id:"permission-1",level:5}],d={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"permission-detail"},"Permission detail"),(0,n.kt)("p",null,"A permission detail contains the data of a permission."),(0,n.kt)("h3",{id:"user"},(0,n.kt)("inlineCode",{parentName:"h3"},"User")),(0,n.kt)("p",null,"It represents a user permission."),(0,n.kt)("h4",{id:"attributes"},"Attributes"),(0,n.kt)("p",null,"The following attributes defines a ",(0,n.kt)("inlineCode",{parentName:"p"},"User")," permission."),(0,n.kt)("h5",{id:"user-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"User")),(0,n.kt)("p",null,"The Bech32 address of the user for which the permission is set."),(0,n.kt)("h5",{id:"permission"},(0,n.kt)("inlineCode",{parentName:"h5"},"Permission")),(0,n.kt)("p",null,"The permission set to the user."),(0,n.kt)("h3",{id:"group"},(0,n.kt)("inlineCode",{parentName:"h3"},"Group")),(0,n.kt)("p",null,"It represents a group permission."),(0,n.kt)("h4",{id:"attributes-1"},"Attributes"),(0,n.kt)("p",null,"The following attributes defines a ",(0,n.kt)("inlineCode",{parentName:"p"},"Group")," permission."),(0,n.kt)("h5",{id:"groupid"},(0,n.kt)("inlineCode",{parentName:"h5"},"GroupID")),(0,n.kt)("p",null,"Group ID associated with the permission."),(0,n.kt)("h5",{id:"permission-1"},(0,n.kt)("inlineCode",{parentName:"h5"},"Permission")),(0,n.kt)("p",null,"The permission set to the group."))}u.isMDXComponent=!0}}]);