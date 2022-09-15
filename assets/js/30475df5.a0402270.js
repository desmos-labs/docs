"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[48577],{3905:(t,e,a)=>{a.d(e,{Zo:()=>o,kt:()=>g});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),d=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},o=function(t){var e=d(t.components);return r.createElement(m.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,o=s(t,["components","mdxType","originalType","parentName"]),k=d(a),g=n,N=k["".concat(m,".").concat(g)]||k[g]||i[g]||l;return a?r.createElement(N,p(p({ref:e},o),{},{components:a})):r.createElement(N,p({ref:e},o))}));function g(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,p=new Array(l);p[0]=k;var s={};for(var m in e)hasOwnProperty.call(e,m)&&(s[m]=e[m]);s.originalType=t,s.mdxType="string"==typeof t?t:n,p[1]=s;for(var d=2;d<l;d++)p[d]=a[d];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},89440:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>p,default:()=>i,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={id:"events",title:"Events",sidebar_label:"Events",slug:"events"},p="Events",s={unversionedId:"developers/modules/posts/events",id:"developers/modules/posts/events",title:"Events",description:"The posts module emits the following events:",source:"@site/docs/02-developers/02-modules/posts/05-events.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/events",permalink:"/next/developers/modules/posts/events",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/posts/05-events.md",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:5,frontMatter:{id:"events",title:"Events",sidebar_label:"Events",slug:"events"},sidebar:"docs",previous:{title:"Messages",permalink:"/next/developers/modules/posts/messages"},next:{title:"Permissions",permalink:"/next/developers/modules/posts/permissions"}},m={},d=[{value:"Handlers",id:"handlers",level:2},{value:"MsgCreatePost",id:"msgcreatepost",level:3},{value:"MsgEditPost",id:"msgeditpost",level:3},{value:"MsgDeletePost",id:"msgdeletepost",level:3},{value:"MsgAddPostAttachment",id:"msgaddpostattachment",level:3},{value:"MsgRemovePostAttachment",id:"msgremovepostattachment",level:3},{value:"MsgAnswerPoll",id:"msganswerpoll",level:3},{value:"Keeper",id:"keeper",level:2}],o={toc:d};function i(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"events"},"Events"),(0,n.kt)("p",null,"The posts module emits the following events:"),(0,n.kt)("h2",{id:"handlers"},"Handlers"),(0,n.kt)("h3",{id:"msgcreatepost"},"MsgCreatePost"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"section_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{sectionID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{postID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"author"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"create_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"creation_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{CreationTime}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"posts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.posts.v2.MsgCreatePost")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgeditpost"},"MsgEditPost"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"edit_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"edit_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{postID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"edit_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"last_edit_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{LastEditTime}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"posts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.posts.v2.MsgEditPost")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgdeletepost"},"MsgDeletePost"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delete_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"delete_post"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{postID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"posts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.posts.v2.MsgDeletePost")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgaddpostattachment"},"MsgAddPostAttachment"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_post_attachment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_post_attachment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{postID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_post_attachment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"attachment_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{attachmentID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"add_post_attachment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"last_edit_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{lastEditTime}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"posts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.posts.v2.MsgAddPostAttachment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msgremovepostattachment"},"MsgRemovePostAttachment"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_post_attachment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_post_attachment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{postID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_post_attachment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"attachment_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{attachmentID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"remove_post_attachment"),(0,n.kt)("td",{parentName:"tr",align:"left"},"last_edit_time"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{lastEditTime}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"posts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.posts.v2.MsgRemovePostAttachment")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h3",{id:"msganswerpoll"},"MsgAnswerPoll"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"answer_poll"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"answer_poll"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{postID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"answer_poll"),(0,n.kt)("td",{parentName:"tr",align:"left"},"poll_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{pollID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"module"),(0,n.kt)("td",{parentName:"tr",align:"left"},"posts")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"action"),(0,n.kt)("td",{parentName:"tr",align:"left"},"desmos.posts.v2.MsgAnswerPoll")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"message"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sender"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{userAddress}")))),(0,n.kt)("h2",{id:"keeper"},"Keeper"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Type")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Key")),(0,n.kt)("th",{parentName:"tr",align:"left"},(0,n.kt)("strong",{parentName:"th"},"Attribute Value")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tally_poll"),(0,n.kt)("td",{parentName:"tr",align:"left"},"subspace_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{subspaceID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tally_poll"),(0,n.kt)("td",{parentName:"tr",align:"left"},"post_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{postID}")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"tally_poll"),(0,n.kt)("td",{parentName:"tr",align:"left"},"poll_id"),(0,n.kt)("td",{parentName:"tr",align:"left"},"{pollID}")))))}i.isMDXComponent=!0}}]);