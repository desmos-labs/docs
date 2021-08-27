"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[4038],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),d=a,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||s;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},451:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(7462),a=r(3366),s=(r(7294),r(3905)),o=["components"],i={id:"refuse-dtag-transfer-request",title:"Refuse DTag transfer request",sidebar_label:"Refuse DTag transfer request",slug:"03-transactions/profiles/refuse-dtag-transfer-request"},u="MsgRefuseDTagTransferRequest",l={unversionedId:"developers/transactions/profiles/refuse-dtag-transfer-request",id:"version-mainnet/developers/transactions/profiles/refuse-dtag-transfer-request",isDocsHomePage:!1,title:"Refuse DTag transfer request",description:"This message allows you to refuse a DTag transfer request made by a user.",source:"@site/versioned_docs/version-mainnet/02-developers/03-transactions/profiles/refuse-dtag-transfer-request.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/03-transactions/profiles/refuse-dtag-transfer-request",permalink:"/developers/transactions/profiles/03-transactions/profiles/refuse-dtag-transfer-request",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/02-developers/03-transactions/profiles/refuse-dtag-transfer-request.md",version:"mainnet",lastUpdatedAt:1630057329,formattedLastUpdatedAt:"8/27/2021",frontMatter:{id:"refuse-dtag-transfer-request",title:"Refuse DTag transfer request",sidebar_label:"Refuse DTag transfer request",slug:"03-transactions/profiles/refuse-dtag-transfer-request"},sidebar:"version-mainnet/docs",previous:{title:"Accept DTag transfer request",permalink:"/developers/transactions/profiles/03-transactions/profiles/accept-dtag-transfer-request"},next:{title:"Cancel DTag transfer request",permalink:"/developers/transactions/profiles/03-transactions/profiles/cancel-dtag-transfer-request"}},c=[{value:"Structure",id:"structure",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Message action",id:"message-action",children:[]}],f={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"msgrefusedtagtransferrequest"},(0,s.kt)("inlineCode",{parentName:"h1"},"MsgRefuseDTagTransferRequest")),(0,s.kt)("p",null,"This message allows you to refuse a ",(0,s.kt)("inlineCode",{parentName:"p"},"DTag")," transfer request made by a user."),(0,s.kt)("h2",{id:"structure"},"Structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest",\n  "sender": "<Desmos address that sent the DTag\'s request>",\n  "receiver": "<Desmos address of the DTag owner>"\n}\n')),(0,s.kt)("h3",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"sender")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that request the ",(0,s.kt)("inlineCode",{parentName:"td"},"DTag")),(0,s.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"receiver")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is the owner of the requested ",(0,s.kt)("inlineCode",{parentName:"td"},"DTag")),(0,s.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgRefuseDTagTransferRequest",\n  "sender": "desmos1nhgk008jvrxwa9tufr9tcr6zfrhe2uz0v90r2a",\n  "receiver": "desmos1k99c8htyk32srx78efzg7sxm965prtz0j9qrc7"\n}\n')),(0,s.kt)("h2",{id:"message-action"},"Message action"),(0,s.kt)("p",null,"The action associated to this message is the following:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"refuse_dtag_transfer_request\n")))}p.isMDXComponent=!0}}]);