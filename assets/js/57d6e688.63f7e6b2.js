"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[28824],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),f=a,m=c["".concat(s,".").concat(f)]||c[f]||u[f]||i;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},42379:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"state",title:"State",sidebar_label:"State",slug:"state"},l="State",o={unversionedId:"developers/modules/profiles/state",id:"version-4.2.0/developers/modules/profiles/state",title:"State",description:"Profile",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/profiles/03-state.md",sourceDirName:"02-developers/02-modules/profiles",slug:"/developers/modules/profiles/state",permalink:"/developers/modules/profiles/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/profiles/03-state.md",tags:[],version:"4.2.0",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/developers/modules/profiles/concepts"},next:{title:"Messages",permalink:"/developers/modules/profiles/messages"}},s={},p=[{value:"Profile",id:"profile",level:2},{value:"DTag Transfer Request",id:"dtag-transfer-request",level:2},{value:"Chain Link",id:"chain-link",level:2},{value:"Default External Address",id:"default-external-address",level:2},{value:"Application Link",id:"application-link",level:2},{value:"IBC Port",id:"ibc-port",level:2}],d={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"state"},"State"),(0,a.kt)("h2",{id:"profile"},"Profile"),(0,a.kt)("p",null,"Since a ",(0,a.kt)("inlineCode",{parentName:"p"},"Profile")," extends the Cosmos SDK ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountI")," interface, we store profiles inside the ",(0,a.kt)("inlineCode",{parentName:"p"},"x/auth")," module using the ",(0,a.kt)("inlineCode",{parentName:"p"},"AccountKeeper"),". For this reason, there will only be a single profile for each on-chain account and having multiple profiles require to have different on-chain accounts for each one."),(0,a.kt)("p",null,"In order to make it possible for users to search a profile based on the DTag, we also store the following reference: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DTag: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x10 | DTag | -> Address"))),(0,a.kt)("h2",{id:"dtag-transfer-request"},"DTag Transfer Request"),(0,a.kt)("p",null,"As DTag transfer requests are more important for those who receive them rather for those who send them, we have decided to store them so that they can be searched by the recipient: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DTag Transfer Request: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x11 | Recipient address | Sender address | -> ProtocolBuffer(DTag Transfer Request)"))),(0,a.kt)("h2",{id:"chain-link"},"Chain Link"),(0,a.kt)("p",null,"To make it possible to query chain links given a user address or given a chain name and an external address, we are using the following keys: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Chain Link: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x12 | User address | Chain name | External address | -> ProtocolBuffer(ChainLink)")),(0,a.kt)("li",{parentName:"ul"},"Chain Link Owner: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x15 | ChainName | 0x00 | External address | 0x00 | User address | -> 0x01 "))),(0,a.kt)("h2",{id:"default-external-address"},"Default External Address"),(0,a.kt)("p",null,"A chain external address is stored using the owner address and the chain name as the key:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Default External Address: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x18 | Owner address | Chain name | -> bytes(ExternalAddress)"))),(0,a.kt)("h2",{id:"application-link"},"Application Link"),(0,a.kt)("p",null,"Storing a single application link requires the usage of three different keys to allow for the following queries: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"application links of a user, given their address;"),(0,a.kt)("li",{parentName:"ul"},"application links given an application name and username (reverse search);"),(0,a.kt)("li",{parentName:"ul"},"application link given a client id (used during the verification process).")),(0,a.kt)("p",null,"So, we use the following keys: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Application Link: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x13 | User address | Application | Username | -> ProtocolBuffer(ApplicationLink)")),(0,a.kt)("li",{parentName:"ul"},"Application Link Client ID: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x14 | Client ID | -> ApplicationLinkKey")),(0,a.kt)("li",{parentName:"ul"},"Application Link Owner: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x16 | Application | 0x00 | Username | 0x00 | User | -> 0x01"))),(0,a.kt)("h2",{id:"ibc-port"},"IBC Port"),(0,a.kt)("p",null,"In order to properly initialize the IBC support for the module, we also store the following data:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IBC Port: ",(0,a.kt)("inlineCode",{parentName:"li"},"0x01 | -> Port ID"))))}u.isMDXComponent=!0}}]);