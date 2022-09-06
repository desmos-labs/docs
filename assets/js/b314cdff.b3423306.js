"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[13334],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),f=n,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const s={id:"accept-dtag-transfer-request",title:"Accept DTag transfer request",sidebar_label:"Accept DTag transfer request",slug:"accept-dtag-transfer-request"},o="MsgAcceptDTagTransferRequest",i={unversionedId:"developers/transactions/profiles/accept-dtag-transfer-request",id:"version-3/developers/transactions/profiles/accept-dtag-transfer-request",title:"Accept DTag transfer request",description:"This message allows you to accept a DTag transfer request.",source:"@site/versioned_docs/version-3/02-developers/03-transactions/profiles/accept-dtag-transfer-request.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/accept-dtag-transfer-request",permalink:"/3/developers/transactions/profiles/accept-dtag-transfer-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/03-transactions/profiles/accept-dtag-transfer-request.md",tags:[],version:"3",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",frontMatter:{id:"accept-dtag-transfer-request",title:"Accept DTag transfer request",sidebar_label:"Accept DTag transfer request",slug:"accept-dtag-transfer-request"},sidebar:"version-3/docs",previous:{title:"Request DTag transfer",permalink:"/3/developers/transactions/profiles/request-dtag-transfer"},next:{title:"Refuse DTag transfer request",permalink:"/3/developers/transactions/profiles/refuse-dtag-transfer-request"}},l={},c=[{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"msgacceptdtagtransferrequest"},(0,n.kt)("inlineCode",{parentName:"h1"},"MsgAcceptDTagTransferRequest")),(0,n.kt)("p",null,"This message allows you to accept a ",(0,n.kt)("inlineCode",{parentName:"p"},"DTag")," transfer request."),(0,n.kt)("h3",{id:"attributes"},"Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"new_dtag")),(0,n.kt)("td",{parentName:"tr",align:"center"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The new ",(0,n.kt)("inlineCode",{parentName:"td"},"DTag")," for the current owner profile that will replace the traded one"),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"receiver")),(0,n.kt)("td",{parentName:"tr",align:"center"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is the owner of the requested ",(0,n.kt)("inlineCode",{parentName:"td"},"DTag")),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"sender")),(0,n.kt)("td",{parentName:"tr",align:"center"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that request the ",(0,n.kt)("inlineCode",{parentName:"td"},"DTag")),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v2.MsgAcceptDTagTransferRequest",\n  "new_dtag": "newDTag",\n  "receiver": "desmos1k99c8htyk32srx78efzg7sxm965prtz0j9qrc7",\n  "sender": "desmos1nhgk008jvrxwa9tufr9tcr6zfrhe2uz0v90r2a"\n}\n')),(0,n.kt)("h2",{id:"message-action"},"Message action"),(0,n.kt)("p",null,"The action associated to this message is the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"accept_dtag_transfer_request\n")))}d.isMDXComponent=!0}}]);