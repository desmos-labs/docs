"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29250],{3905:(e,t,s)=>{s.d(t,{Zo:()=>u,kt:()=>m});var l=s(67294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function o(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,l)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?o(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):o(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function r(e,t){if(null==e)return{};var s,l,n=function(e,t){if(null==e)return{};var s,l,n={},o=Object.keys(e);for(l=0;l<o.length;l++)s=o[l],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)s=o[l],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var i=l.createContext({}),p=function(e){var t=l.useContext(i),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},u=function(e){var t=p(e.components);return l.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var s=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=p(s),m=n,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return s?l.createElement(h,a(a({ref:t},u),{},{components:s})):l.createElement(h,a({ref:t},u))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=s.length,a=new Array(o);a[0]=d;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r.mdxType="string"==typeof e?e:n,a[1]=r;for(var p=2;p<o;p++)a[p]=s[p];return l.createElement.apply(null,a)}return l.createElement.apply(null,s)}d.displayName="MDXCreateElement"},48734:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var l=s(87462),n=(s(67294),s(3905));const o={id:"state",title:"State",sidebar_label:"State",slug:"state"},a="State",r={unversionedId:"developers/modules/posts/state",id:"developers/modules/posts/state",title:"State",description:"Next Post ID",source:"@site/docs/02-developers/02-modules/posts/03-state.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/state",permalink:"/next/developers/modules/posts/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/posts/03-state.md",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/next/developers/modules/posts/concepts"},next:{title:"Messages",permalink:"/next/developers/modules/posts/messages"}},i={},p=[{value:"Next Post ID",id:"next-post-id",level:2},{value:"Post",id:"post",level:2},{value:"Post section",id:"post-section",level:2},{value:"Next Attachment ID",id:"next-attachment-id",level:2},{value:"Attachment",id:"attachment",level:2},{value:"User Answer",id:"user-answer",level:2},{value:"Active poll queue",id:"active-poll-queue",level:2}],u={toc:p};function c(e){let{components:t,...s}=e;return(0,n.kt)("wrapper",(0,l.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"state"},"State"),(0,n.kt)("h2",{id:"next-post-id"},"Next Post ID"),(0,n.kt)("p",null,"The next post id is stored tied to the subspace to which it refers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x00 | Subspace ID | ->  bytes(NextPostID)"))),(0,n.kt)("h2",{id:"post"},"Post"),(0,n.kt)("p",null,"A post is stored using the subspace id and its id as the key. This allows to easily query:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"all the posts of a given subspace;"),(0,n.kt)("li",{parentName:"ul"},"a specific post of a given subspace.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x01 | Subspace ID | Post ID | -> ProtocolBuffer(Post)")," ")),(0,n.kt)("h2",{id:"post-section"},"Post section"),(0,n.kt)("p",null,"The section in which a post is placed is stored to enable the possibility of querying posts for a particular subspace's section:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x02 | Subspace ID | Section ID | Post ID | -> 0x01"))),(0,n.kt)("h2",{id:"next-attachment-id"},"Next Attachment ID"),(0,n.kt)("p",null,"The next attachment id is stored tied to the subspace id and the post id to which it refers:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x10 | Subspace ID | Post ID | -> bytes(NextAttachmentID)"))),(0,n.kt)("h2",{id:"attachment"},"Attachment"),(0,n.kt)("p",null,"A post attachment is stored using the subspace id, post id and its id as the key. This allows to easily query all the posts' attachments:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x11 | SubspaceID | PostID | Attachment ID | -> ProtocolBuffer(Attachment)"))),(0,n.kt)("h2",{id:"user-answer"},"User Answer"),(0,n.kt)("p",null,"A user answer to a poll is stored using the subspace id, post id and poll id as the key. This allows to easily query all the answers of a specific poll:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x20 | Subspace ID | Post ID | Poll ID | -> ProtocolBuffer(UserAnswer)"))),(0,n.kt)("h2",{id:"active-poll-queue"},"Active poll queue"),(0,n.kt)("p",null,"Active polls are stored using the voting end time, subspace id, post id and poll id as the key. This allows to determine, at each block height, which polls should have their results tallied:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x21 | End Time | Subspace ID | Post ID | Poll ID | -> bytes(PollID)"))))}c.isMDXComponent=!0}}]);