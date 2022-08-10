"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[42089],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var s=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,s,o=function(e,t){if(null==e)return{};var r,s,o={},n=Object.keys(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)r=n[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=s.createContext({}),c=function(e){var t=s.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return s.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||n;return r?s.createElement(f,a(a({ref:t},p),{},{components:r})):s.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<n;c++)a[c]=r[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,r)}u.displayName="MDXCreateElement"},10428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var s=r(87462),o=(r(67294),r(3905));const n={id:"state",title:"State",sidebar_label:"State",slug:"state"},a="State",l={unversionedId:"developers/modules/relationships/state",id:"version-4.1.0/developers/modules/relationships/state",title:"State",description:"Relationships",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/relationships/03-state.md",sourceDirName:"02-developers/02-modules/relationships",slug:"/developers/modules/relationships/state",permalink:"/4.1.0/developers/modules/relationships/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/relationships/03-state.md",tags:[],version:"4.1.0",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/4.1.0/developers/modules/relationships/concepts"},next:{title:"Messages",permalink:"/4.1.0/developers/modules/relationships/messages"}},i={},c=[{value:"Relationships",id:"relationships",level:2},{value:"User Blocks",id:"user-blocks",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,s.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state"},"State"),(0,o.kt)("h2",{id:"relationships"},"Relationships"),(0,o.kt)("p",null,"Relationships are stored tied to the subspace in which they were created as well as the creator and counterparty addresses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x01 | Subspace ID | Creator address | Counterparty address | -> ProtocolBuffer(Relationship)"))),(0,o.kt)("h2",{id:"user-blocks"},"User Blocks"),(0,o.kt)("p",null,"User blocks are stored tied to the subspace for which they were created, the blocker and blocked addresses:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x02 | Subspace ID | Blocker address | Blocked address | -> ProtocolBuffer(UserBlock)"))))}d.isMDXComponent=!0}}]);