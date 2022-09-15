"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13854],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(r),u=s,b=c["".concat(l,".").concat(u)]||c[u]||d[u]||a;return r?n.createElement(b,o(o({ref:t},m),{},{components:r})):n.createElement(b,o({ref:t},m))}));function u(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57192:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const a={id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},o="Permissions",i={unversionedId:"developers/modules/subspaces/permissions",id:"developers/modules/subspaces/permissions",title:"Permissions",description:"Based on which x/subspaces related action your users want to perform, they need to be granted with one or more",source:"@site/docs/02-developers/02-modules/subspaces/06-permissions.md",sourceDirName:"02-developers/02-modules/subspaces",slug:"/developers/modules/subspaces/permissions",permalink:"/next/developers/modules/subspaces/permissions",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/subspaces/06-permissions.md",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:6,frontMatter:{id:"permissions",title:"Permissions",sidebar_label:"Permissions",slug:"permissions"},sidebar:"docs",previous:{title:"Events",permalink:"/next/developers/modules/subspaces/events"},next:{title:"Client",permalink:"/next/developers/modules/subspaces/client"}},l={},p=[],m={toc:p};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"permissions"},"Permissions"),(0,s.kt)("p",null,"Based on which ",(0,s.kt)("inlineCode",{parentName:"p"},"x/subspaces")," related action your users want to perform, they need to be granted with one or more\nof the following permissions."),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"th"},"Permission Value")),(0,s.kt)("th",{parentName:"tr",align:"left"},(0,s.kt)("strong",{parentName:"th"},"Permission Description")))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"EDIT_SUBSPACE")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to change the subspace's information")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"DELETE_SUBSPACE")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to delete a subspace")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"MANAGE_SECTIONS")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to manage the subspace's sections")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"MANAGE_GROUPS")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to manage the subspace's groups")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"SET_PERMISSIONS")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to set other users' permissions except for ",(0,s.kt)("inlineCode",{parentName:"td"},"SET_PERMISSIONS"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"left"},(0,s.kt)("inlineCode",{parentName:"td"},"EVERYTHING")),(0,s.kt)("td",{parentName:"tr",align:"left"},"Allows to do everything")))),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},(0,s.kt)("strong",{parentName:"p"},"Warning"),"\nNote that when setting permission ",(0,s.kt)("inlineCode",{parentName:"p"},"EVERYTHING")," to a user, that user will de facto be the same as the subspace owner, having control over everything and being able to do everything within that subspace. Use this with caution.")))}d.isMDXComponent=!0}}]);