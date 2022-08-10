"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[52738],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),u=n,v=d["".concat(l,".").concat(u)]||d[u]||m[u]||s;return r?a.createElement(v,o(o({ref:t},c),{},{components:r})):a.createElement(v,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66150:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},o="x/reactions",i={unversionedId:"developers/modules/reactions/overview",id:"version-4.1.0/developers/modules/reactions/overview",title:"Overview",description:"Abstract",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/reactions/01-overview.md",sourceDirName:"02-developers/02-modules/reactions",slug:"/developers/modules/reactions/overview",permalink:"/4.1.0/developers/modules/reactions/overview",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/reactions/01-overview.md",tags:[],version:"4.1.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:1,frontMatter:{id:"overview",title:"Overview",sidebar_label:"Overview",slug:"overview"},sidebar:"docs",previous:{title:"Client",permalink:"/4.1.0/developers/modules/posts/client"},next:{title:"Concepts",permalink:"/4.1.0/developers/modules/reactions/concepts"}},l={},p=[{value:"Abstract",id:"abstract",level:2},{value:"Contents",id:"contents",level:2}],c={toc:p};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"xreactions"},(0,n.kt)("inlineCode",{parentName:"h1"},"x/reactions")),(0,n.kt)("h2",{id:"abstract"},"Abstract"),(0,n.kt)("p",null,"This document specifies the reactions module of Desmos.  "),(0,n.kt)("p",null,"This module gives the possibility to react to contents and customise the reactions experience for you social dApp."),(0,n.kt)("h2",{id:"contents"},"Contents"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/reactions/concepts"},"Concepts")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/concepts#reaction"},"Reaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/concepts#registered-reaction-value"},"Registered Reaction Value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/concepts#free-text-value"},"Free Text Value")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/concepts#subspace-reactions-params"},"Subspace Reactions Params")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/concepts#registered-reaction-value-params"},"Registered Reactions Value Params")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/concepts#free-text-value-params"},"Free Text Value Params")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/reactions/state"},"State")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/state#next-registered-reaction-id"},"Next Registered Reaction ID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/state#registered-reaction"},"Registered Reaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/state#next-reaction-id"},"Next Reaction ID")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/state#reaction"},"Reaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/state#reactions-subspace-params"},"Reactions Subspace Params")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/reactions/messages"},"Msg Service")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/messages#msgaddreaction"},"Msg/AddReaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/messages#msgremovereaction"},"Msg/RemoveReaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/messages#msgaddregisteredreaction"},"Msg/AddRegisteredReaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/messages#msgeditregisteredreaction"},"Msg/EditRegisteredReaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/messages#msgremoveregisteredreaction"},"Msg/RemoveRegisteredReaction")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/messages#msgsetreactionsparams"},"Msg/SetReactionsParams")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/reactions/events"},"Events")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/events#handlers"},"Handlers")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/reactions/permissions"},"Permissions"))," "),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("a",{parentName:"strong",href:"/4.1.0/developers/modules/reactions/client"},"Client")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/client#cli"},"CLI")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/client#grpc"},"gRPC")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/4.1.0/developers/modules/reactions/client#rest"},"REST"))))))}m.isMDXComponent=!0}}]);