"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[54280],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(r),c=n,m=f["".concat(l,".").concat(c)]||f[c]||d[c]||s;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<s;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},96247:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const s={id:"refuse-dtag-transfer-request",title:"Refuse DTag transfer request",sidebar_label:"Refuse DTag transfer request",slug:"refuse-dtag-transfer-request"},o="MsgRefuseDTagTransferRequest",i={unversionedId:"developers/transactions/profiles/refuse-dtag-transfer-request",id:"version-2.3/developers/transactions/profiles/refuse-dtag-transfer-request",title:"Refuse DTag transfer request",description:"This message allows you to refuse a DTag transfer request made by a user.",source:"@site/versioned_docs/version-2.3/02-developers/03-transactions/profiles/refuse-dtag-transfer-request.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/refuse-dtag-transfer-request",permalink:"/2.3/developers/transactions/profiles/refuse-dtag-transfer-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/03-transactions/profiles/refuse-dtag-transfer-request.md",tags:[],version:"2.3",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"refuse-dtag-transfer-request",title:"Refuse DTag transfer request",sidebar_label:"Refuse DTag transfer request",slug:"refuse-dtag-transfer-request"},sidebar:"version-2.3/docs",previous:{title:"Accept DTag transfer request",permalink:"/2.3/developers/transactions/profiles/accept-dtag-transfer-request"},next:{title:"Cancel DTag transfer request",permalink:"/2.3/developers/transactions/profiles/cancel-dtag-transfer-request"}},l={},u=[{value:"Structure",id:"structure",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],p={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"msgrefusedtagtransferrequest"},(0,n.kt)("inlineCode",{parentName:"h1"},"MsgRefuseDTagTransferRequest")),(0,n.kt)("p",null,"This message allows you to refuse a ",(0,n.kt)("inlineCode",{parentName:"p"},"DTag")," transfer request made by a user."),(0,n.kt)("h2",{id:"structure"},"Structure"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest",\n  "sender": "<Desmos address that sent the DTag\'s request>",\n  "receiver": "<Desmos address of the DTag owner>"\n}\n')),(0,n.kt)("h3",{id:"attributes"},"Attributes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"sender")),(0,n.kt)("td",{parentName:"tr",align:"center"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that request the ",(0,n.kt)("inlineCode",{parentName:"td"},"DTag")),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("inlineCode",{parentName:"td"},"receiver")),(0,n.kt)("td",{parentName:"tr",align:"center"},"String"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is the owner of the requested ",(0,n.kt)("inlineCode",{parentName:"td"},"DTag")),(0,n.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest",\n  "sender": "desmos1nhgk008jvrxwa9tufr9tcr6zfrhe2uz0v90r2a",\n  "receiver": "desmos1k99c8htyk32srx78efzg7sxm965prtz0j9qrc7"\n}\n')),(0,n.kt)("h2",{id:"message-action"},"Message action"),(0,n.kt)("p",null,"The action associated to this message is the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"refuse_dtag_transfer_request\n")))}d.isMDXComponent=!0}}]);