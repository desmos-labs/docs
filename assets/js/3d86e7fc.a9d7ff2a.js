"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[3518],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(r),d=s,f=m["".concat(p,".").concat(d)]||m[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:s,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6479:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return c}});var n=r(7462),s=r(3366),a=(r(7294),r(3905)),i=["components"],o={id:"set-user-permissions",title:"Set user permissions",sidebar_label:"Set user permissions",slug:"set-user-permissions"},p="MsgSetUserPermissions",l={unversionedId:"developers/transactions/subspaces/set-user-permissions",id:"version-3/developers/transactions/subspaces/set-user-permissions",title:"Set user permissions",description:"This message allows setting user permissions.",source:"@site/versioned_docs/version-3/02-developers/03-transactions/subspaces/set-user-permissions.md",sourceDirName:"02-developers/03-transactions/subspaces",slug:"/developers/transactions/subspaces/set-user-permissions",permalink:"/developers/transactions/subspaces/set-user-permissions",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/03-transactions/subspaces/set-user-permissions.md",tags:[],version:"3",lastUpdatedAt:1655125428,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"set-user-permissions",title:"Set user permissions",sidebar_label:"Set user permissions",slug:"set-user-permissions"},sidebar:"version-3/docs",previous:{title:"Delete subspace",permalink:"/developers/transactions/subspaces/delete-subspace"},next:{title:"Create user group",permalink:"/developers/transactions/subspaces/create-user-group"}},u={},c=[{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],m={toc:c};function d(e){var t=e.components,r=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"msgsetuserpermissions"},(0,a.kt)("inlineCode",{parentName:"h1"},"MsgSetUserPermissions")),(0,a.kt)("p",null,"This message allows setting user permissions."),(0,a.kt)("h3",{id:"attributes"},"Attributes"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"subspace_id")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Uint64"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Id of the subspace where the group exists"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"group_id")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Uint32"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Id of the group where to add the user"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"permissions")),(0,a.kt)("td",{parentName:"tr",align:"center"},"Uint32"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Permissions to be set for a user of the group"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"signer")),(0,a.kt)("td",{parentName:"tr",align:"center"},"String"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Address of the user that sign the message"),(0,a.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.subspaces.v1.MsgSetUserGroupPermissions",\n  "subspace_id": "1",\n  "group_id": 1,\n  "permissions": 1,\n  "signer": "desmos1nwp8gxrnmrsrzjdhvk47vvmthzxjtphgxp5ftc"\n}\n')),(0,a.kt)("h2",{id:"message-action"},"Message action"),(0,a.kt)("p",null,"The action associated to this message is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"set_user_permissions\n")))}d.isMDXComponent=!0}}]);