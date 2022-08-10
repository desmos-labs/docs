"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[37554],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>c});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,l=e.originalType,i=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=p(r),c=s,v=d["".concat(i,".").concat(c)]||d[c]||u[c]||l;return r?n.createElement(v,a(a({ref:t},m),{},{components:r})):n.createElement(v,a({ref:t},m))}));function c(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=r.length,a=new Array(l);a[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:s,a[1]=o;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},97250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const l={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},a="x/relationships",o={unversionedId:"developers/modules/relationships/overview",id:"developers/modules/relationships/overview",title:"Overview",description:"This document specifies the Relationships module of Desmos.",source:"@site/docs/02-developers/02-modules/relationships/01-overview.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/overview",permalink:"/next/developers/modules/relationships/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/relationships/01-overview.md",tags:[],version:"current",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/next/developers/modules/profiles/client"},next:{title:"Concepts",permalink:"/next/developers/modules/relationships/concepts"}},i={},p=[{value:"Contents",id:"contents",level:2}],m={toc:p};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"xrelationships"},(0,s.kt)("inlineCode",{parentName:"h1"},"x/relationships")),(0,s.kt)("p",null,"This document specifies the Relationships module of Desmos. "),(0,s.kt)("p",null,"The module allows Desmos users to establish relationships between them, and also to block misbehaving users from harassing them in the future.  "),(0,s.kt)("h2",{id:"contents"},"Contents"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/next/developers/modules/relationships/concepts"},"Concepts")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/concepts#relationship"},"Relationship")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/concepts#user-block"},"User Block")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/next/developers/modules/relationships/state"},"State")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/state#relationships"},"Relationship")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/state#user-blocks"},"User Blocks")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/next/developers/modules/relationships/messages"},"Msg Server")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/messages#msgcreaterelationship"},"Msg/CreateRelationship")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/messages#msgdeleterelationship"},"Msg/DeleteRelationship")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/messages#msgblockuser"},"Msg/BlockUser")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/messages#msgunblockuser"},"Msg/UnblockUser")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/next/developers/modules/relationships/events"},"Events")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/events#handlers"},"Handlers")))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("strong",{parentName:"li"},(0,s.kt)("a",{parentName:"strong",href:"/next/developers/modules/relationships/client"},"Client")),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/client#cli"},"CLI")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/client#grpc"},"gRPC")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/next/developers/modules/relationships/client#rest"},"REST"))))))}u.isMDXComponent=!0}}]);