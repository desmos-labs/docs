"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[28202],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>m});var l=s(67294);function o(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,l)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){o(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,l,o=function(e,t){if(null==e)return{};var s,l,o={},n=Object.keys(e);for(l=0;l<n.length;l++)s=n[l],t.indexOf(s)>=0||(o[s]=e[s]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)s=n[l],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(o[s]=e[s])}return o}var i=l.createContext({}),p=function(e){var t=l.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},u=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var s=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(s),m=o,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||n;return s?l.createElement(h,a(a({ref:t},u),{},{components:s})):l.createElement(h,a({ref:t},u))}));function m(e,t){var s=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=s.length,a=new Array(n);a[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var p=2;p<n;p++)a[p]=s[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,s)}d.displayName="MDXCreateElement"},68154:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>n,metadata:()=>r,toc:()=>p});var l=s(87462),o=(s(67294),s(3905));const n={id:"state",title:"State",sidebar_label:"State",slug:"state"},a="State",r={unversionedId:"developers/modules/posts/state",id:"version-4.2.0/developers/modules/posts/state",title:"State",description:"Next Post ID",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/posts/03-state.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/state",permalink:"/developers/modules/posts/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/posts/03-state.md",tags:[],version:"4.2.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/developers/modules/posts/concepts"},next:{title:"Messages",permalink:"/developers/modules/posts/messages"}},i={},p=[{value:"Next Post ID",id:"next-post-id",level:2},{value:"Post",id:"post",level:2},{value:"Post section",id:"post-section",level:2},{value:"Next Attachment ID",id:"next-attachment-id",level:2},{value:"Attachment",id:"attachment",level:2},{value:"User Answer",id:"user-answer",level:2},{value:"Active poll queue",id:"active-poll-queue",level:2}],u={toc:p};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,l.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"state"},"State"),(0,o.kt)("h2",{id:"next-post-id"},"Next Post ID"),(0,o.kt)("p",null,"The next post id is stored tied to the subspace to which it refers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x00 | Subspace ID | ->  bytes(NextPostID)"))),(0,o.kt)("h2",{id:"post"},"Post"),(0,o.kt)("p",null,"A post is stored using the subspace id and its id as the key. This allows to easily query:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"all the posts of a given subspace;"),(0,o.kt)("li",{parentName:"ul"},"a specific post of a given subspace.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x01 | Subspace ID | Post ID | -> ProtocolBuffer(Post)")," ")),(0,o.kt)("h2",{id:"post-section"},"Post section"),(0,o.kt)("p",null,"The section in which a post is placed is stored to enable the possibility of querying posts for a particular subspace's section:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x02 | Subspace ID | Section ID | Post ID | -> 0x01"))),(0,o.kt)("h2",{id:"next-attachment-id"},"Next Attachment ID"),(0,o.kt)("p",null,"The next attachment id is stored tied to the subspace id and the post id to which it refers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x10 | Subspace ID | Post ID | -> bytes(NextAttachmentID)"))),(0,o.kt)("h2",{id:"attachment"},"Attachment"),(0,o.kt)("p",null,"A post attachment is stored using the subspace id, post id and its id as the key. This allows to easily query all the posts' attachments:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x11 | SubspaceID | PostID | Attachment ID | -> ProtocolBuffer(Attachment)"))),(0,o.kt)("h2",{id:"user-answer"},"User Answer"),(0,o.kt)("p",null,"A user answer to a poll is stored using the subspace id, post id and poll id as the key. This allows to easily query all the answers of a specific poll:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x20 | Subspace ID | Post ID | Poll ID | -> ProtocolBuffer(UserAnswer)"))),(0,o.kt)("h2",{id:"active-poll-queue"},"Active poll queue"),(0,o.kt)("p",null,"Active polls are stored using the voting end time, subspace id, post id and poll id as the key. This allows to determine, at each block height, which polls should have their results tallied:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"0x21 | End Time | Subspace ID | Post ID | Poll ID | -> bytes(PollID)"))))}c.isMDXComponent=!0}}]);