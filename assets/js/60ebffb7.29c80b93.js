"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[36349],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},l=Object.keys(e);for(s=0;s<l.length;s++)r=l[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=s.createContext({}),p=function(e){var t=s.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=p(e.components);return s.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),d=p(r),c=n,v=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return r?s.createElement(v,o(o({ref:t},m),{},{components:r})):s.createElement(v,o({ref:t},m))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,o[1]=a;for(var p=2;p<l;p++)o[p]=r[p];return s.createElement.apply(null,o)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},74742:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var s=r(87462),n=(r(67294),r(3905));const l={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},o="x/relationships",a={unversionedId:"developers/modules/relationships/overview",id:"version-4.2.0/developers/modules/relationships/overview",title:"Overview",description:"This document specifies the Relationships module of Desmos.",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/relationships/01-overview.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/overview",permalink:"/developers/modules/relationships/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/relationships/01-overview.md",tags:[],version:"4.2.0",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/developers/modules/profiles/client"},next:{title:"Concepts",permalink:"/developers/modules/relationships/concepts"}},i={},p=[{value:"Contents",id:"contents",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"xrelationships"},(0,n.kt)("inlineCode",{parentName:"h1"},"x/relationships")),(0,n.kt)("p",null,"This document specifies the Relationships module of Desmos. "),(0,n.kt)("p",null,"The module allows Desmos users to establish relationships between them, and also to block misbehaving users from harassing them in the future.  "),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/relationships/concepts"},"Concepts")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/concepts#relationship"},"Relationship")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/concepts#user-block"},"User Block")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/relationships/state"},"State")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/state#relationships"},"Relationship")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/state#user-blocks"},"User Blocks")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/relationships/messages"},"Msg Server")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/messages#msgcreaterelationship"},"Msg/CreateRelationship")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/messages#msgdeleterelationship"},"Msg/DeleteRelationship")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/messages#msgblockuser"},"Msg/BlockUser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/messages#msgunblockuser"},"Msg/UnblockUser")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/relationships/events"},"Events")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/events#handlers"},"Handlers")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/developers/modules/relationships/client"},"Client")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/client#cli"},"CLI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/client#grpc"},"gRPC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/developers/modules/relationships/client#rest"},"REST"))))))}u.isMDXComponent=!0}}]);