"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[93518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),l=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?s.createElement(g,i(i({ref:t},c),{},{components:r})):s.createElement(g,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}m.displayName="MDXCreateElement"},96479:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var s=r(87462),n=(r(67294),r(3905));const a={id:"set-user-permissions",title:"Set user permissions",sidebar_label:"Set user permissions",slug:"set-user-permissions"},i="MsgSetUserPermissions",o={unversionedId:"developers/transactions/subspaces/set-user-permissions",id:"version-3/developers/transactions/subspaces/set-user-permissions",title:"Set user permissions",description:"This message allows setting user permissions.",source:"@site/versioned_docs/version-3/02-developers/03-transactions/subspaces/set-user-permissions.md",sourceDirName:"02-developers/03-transactions/subspaces",slug:"/developers/transactions/subspaces/set-user-permissions",permalink:"/3/developers/transactions/subspaces/set-user-permissions",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/03-transactions/subspaces/set-user-permissions.md",tags:[],version:"3",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"set-user-permissions",title:"Set user permissions",sidebar_label:"Set user permissions",slug:"set-user-permissions"},sidebar:"version-3/docs",previous:{title:"Delete subspace",permalink:"/3/developers/transactions/subspaces/delete-subspace"},next:{title:"Create user group",permalink:"/3/developers/transactions/subspaces/create-user-group"}},p={},l=[{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],c={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"msgsetuserpermissions"},(0,n.kt)("inlineCode",{parentName:"h1"},"MsgSetUserPermissions")),(0,n.kt)("p",null,"This message allows setting user permissions."),(0,n.kt)("h3",{id:"attributes"},"Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"subspace_id")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Uint64"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Id of the subspace where the group exists"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"group_id")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Uint32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Id of the group where to add the user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"permissions")),(0,n.kt)("td",{parentName:"tr",align:"center"},"Uint32"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Permissions to be set for a user of the group"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"signer")),(0,n.kt)("td",{parentName:"tr",align:"center"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Address of the user that sign the message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1.MsgSetUserGroupPermissions",\n  "subspace_id": "1",\n  "group_id": 1,\n  "permissions": 1,\n  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"\n}\n')),(0,n.kt)("h2",{id:"message-action"},"Message action"),(0,n.kt)("p",null,"The action associated to this message is the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"set_user_permissions\n")))}u.isMDXComponent=!0}}]);