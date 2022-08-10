"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[47141],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>k});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),m=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=m(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,s=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),g=m(a),k=n,N=g["".concat(s,".").concat(k)]||g[k]||p[k]||l;return a?r.createElement(N,i(i({ref:e},o),{},{components:a})):r.createElement(N,i({ref:e},o))}));function k(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var d={};for(var s in e)hasOwnProperty.call(e,s)&&(d[s]=e[s]);d.originalType=t,d.mdxType="string"==typeof t?t:n,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},83536:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},i="Events",d={unversionedId:"developers/modules/reactions/events",id:"version-4.2.0/developers/modules/reactions/events",title:"Events",description:"The reactions module emits the following events:",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/reactions/05-events.md",sourceDirName:"02-developers/02-modules/reactions",slug:"/developers/modules/reactions/events",permalink:"/developers/modules/reactions/events",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/reactions/05-events.md",tags:[],version:"4.2.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/developers/modules/reactions/messages"},next:{title:"Permissions",permalink:"/developers/modules/reactions/permissions"}},s={},m=[{value:"Handlers",id:"handlers",level:2},{value:"MsgAddReaction",id:"msgaddreaction",level:3},{value:"MsgRemoveReaction",id:"msgremovereaction",level:3},{value:"MsgAddRegisteredReaction",id:"msgaddregisteredreaction",level:3},{value:"MsgEditRegisteredReaction",id:"msgeditregisteredreaction",level:3},{value:"MsgRemoveRegisteredReaction",id:"msgremoveregisteredreaction",level:3},{value:"MsgSetReactionsParams",id:"msgsetreactionsparams",level:3}],o={toc:m};function p(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"events"},"Events"),(0,n.kt)("p",null,"The reactions module emits the following events:"),(0,n.kt)("h2",{id:"handlers"},"Handlers"),(0,n.kt)("h3",{id:"msgaddreaction"},"MsgAddReaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{postID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reaction_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{reactionID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"user"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reactions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reactions.v1.MsgAddReaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgremovereaction"},"MsgRemoveReaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{postID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reaction_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{reaction_id}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reactions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reactions.v1.MsgRemoveReaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgaddregisteredreaction"},"MsgAddRegisteredReaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_registered_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_registered_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"registered_reaction_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{registeredReactionID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reactions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reactions.v1.MsgAddRegisteredReaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgeditregisteredreaction"},"MsgEditRegisteredReaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"edit_registered_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"edit_registered_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"registered_reaction_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{registeredReactionID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reactions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reactions.v1.MsgEditRegisteredReaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgremoveregisteredreaction"},"MsgRemoveRegisteredReaction"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_registered_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_registered_reaction"),(0,n.kt)("td",{parentName:"tr",align:"left"},"registered_reaction_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{registeredReactionID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reactions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reactions.v1.MsgRemoveRegisteredReaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgsetreactionsparams"},"MsgSetReactionsParams"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"set_reactions_params"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"reactions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.reactions.v1.MsgSetReactionsParams")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))))}p.isMDXComponent=!0}}]);