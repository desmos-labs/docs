"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[36168],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return o}});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),s=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),g=s(a),o=n,f=g["".concat(d,".").concat(o)]||g[o]||k[o]||l;return a?r.createElement(f,i(i({ref:e},m),{},{components:a})):r.createElement(f,i({ref:e},m))}));function o(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var s=2;s<l;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},65004:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return d},default:function(){return o},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return k}});var r=a(87462),n=a(63366),l=(a(67294),a(3905)),i=["components"],p={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},d="Events",s={unversionedId:"developers/modules/profiles/events",id:"version-4.1.0/developers/modules/profiles/events",title:"Events",description:"The profiles module emits the following events:",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/profiles/05-events.md",sourceDirName:"02-developers/02-modules/profiles",slug:"/developers/modules/profiles/events",permalink:"/developers/modules/profiles/events",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/profiles/05-events.md",tags:[],version:"4.1.0",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/developers/modules/profiles/messages"},next:{title:"Parameters",permalink:"/developers/modules/profiles/params"}},m={},k=[{value:"Handlers",id:"handlers",level:2},{value:"MsgSaveProfile",id:"msgsaveprofile",level:3},{value:"MsgDeleteProfile",id:"msgdeleteprofile",level:2},{value:"MsgRequestDTagTransfer",id:"msgrequestdtagtransfer",level:2},{value:"MsgCancelDTagTransferRequest",id:"msgcanceldtagtransferrequest",level:2},{value:"MsgAcceptDTagTransferRequest",id:"msgacceptdtagtransferrequest",level:2},{value:"MsgRefuseDTagTransferRequest",id:"msgrefusedtagtransferrequest",level:2},{value:"MsgLinkChainAccount",id:"msglinkchainaccount",level:2},{value:"MsgUnlinkChainAccount",id:"msgunlinkchainaccount",level:2},{value:"MsgLinkApplication",id:"msglinkapplication",level:2},{value:"MsgUnlinkApplication",id:"msgunlinkapplication",level:2},{value:"Keeper",id:"keeper",level:2},{value:"Application Link Saved",id:"application-link-saved",level:3}],g={toc:k};function o(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"events"},"Events"),(0,l.kt)("p",null,"The profiles module emits the following events:"),(0,l.kt)("h2",{id:"handlers"},"Handlers"),(0,l.kt)("h3",{id:"msgsaveprofile"},"MsgSaveProfile"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"save_profile"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profile_dtag"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{profileDTag}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"save_profile"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profile_creator"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"save_profile"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profile_creation_time"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{profileCreationTime}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgSaveProfile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h2",{id:"msgdeleteprofile"},"MsgDeleteProfile"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"delete_profile"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profile_creator"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgDeleteProfile")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h2",{id:"msgrequestdtagtransfer"},"MsgRequestDTagTransfer"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"dtag_to_trade"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{dTagToTrade}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"request_sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"create_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"request_receiver"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{requestReceiverAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgRequestDTagTransfer")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")))),(0,l.kt)("h2",{id:"msgcanceldtagtransferrequest"},"MsgCancelDTagTransferRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cancel_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"request_sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cancel_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"request_receiver"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{requestReceiverAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgCancelDTagTransferRequest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h2",{id:"msgacceptdtagtransferrequest"},"MsgAcceptDTagTransferRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accept_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"dtag_to_trade"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{dTagToTrade}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accept_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"new_dtag"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{newDTag}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accept_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"request_sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"accept_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"request_receiver"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{requestReceiverAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgAcceptDTagTransferRequest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h2",{id:"msgrefusedtagtransferrequest"},"MsgRefuseDTagTransferRequest"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"refuse_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"request_sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{requestSenderAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"refuse_dtag_transfer_request"),(0,l.kt)("td",{parentName:"tr",align:"left"},"request_receiver"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{requestReceiverAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgRefuseDTagTransferRequest")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h2",{id:"msglinkchainaccount"},"MsgLinkChainAccount"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_chain_account"),(0,l.kt)("td",{parentName:"tr",align:"left"},"chain_link_account_target"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{targetAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_chain_account"),(0,l.kt)("td",{parentName:"tr",align:"left"},"chain_link_source_chain_name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{chainName}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_chain_account"),(0,l.kt)("td",{parentName:"tr",align:"left"},"chain_link_account_owner"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_chain_account"),(0,l.kt)("td",{parentName:"tr",align:"left"},"chain_link_creation_time"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{creationTime}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgLinkChainAccount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h2",{id:"msgunlinkchainaccount"},"MsgUnlinkChainAccount"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unlink_chain_account"),(0,l.kt)("td",{parentName:"tr",align:"left"},"chain_link_account_target"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{targetAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unlink_chain_account"),(0,l.kt)("td",{parentName:"tr",align:"left"},"chain_link_source_chain_name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{chainName}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unlink_chain_account"),(0,l.kt)("td",{parentName:"tr",align:"left"},"chain_link_account_owner"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgUnlinkChainAccount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h2",{id:"msglinkapplication"},"MsgLinkApplication"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_application"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_application"),(0,l.kt)("td",{parentName:"tr",align:"left"},"application_name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{applicationName}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_application"),(0,l.kt)("td",{parentName:"tr",align:"left"},"application_username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{applicationUsername}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"link_application"),(0,l.kt)("td",{parentName:"tr",align:"left"},"application_link_creation_time"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{creationTime}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgLinkApplication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h2",{id:"msgunlinkapplication"},"MsgUnlinkApplication"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unlink_application"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unlink_application"),(0,l.kt)("td",{parentName:"tr",align:"left"},"application_name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{applicationName}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"unlink_application"),(0,l.kt)("td",{parentName:"tr",align:"left"},"application_username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{applicationUsername}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"module"),(0,l.kt)("td",{parentName:"tr",align:"left"},"profiles")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"action"),(0,l.kt)("td",{parentName:"tr",align:"left"},"desmos.profiles.v2.MsgUnlinkApplication")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"message"),(0,l.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,l.kt)("h2",{id:"keeper"},"Keeper"),(0,l.kt)("h3",{id:"application-link-saved"},"Application Link Saved"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Type")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Key")),(0,l.kt)("th",{parentName:"tr",align:"left"},(0,l.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"application_link_saved"),(0,l.kt)("td",{parentName:"tr",align:"left"},"user"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"application_link_saved"),(0,l.kt)("td",{parentName:"tr",align:"left"},"application_name"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{applicationName}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"application_link_saved"),(0,l.kt)("td",{parentName:"tr",align:"left"},"application_username"),(0,l.kt)("td",{parentName:"tr",align:"left"},"{applicationUsername}")))))}o.isMDXComponent=!0}}]);