"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[29250],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=s.createContext({}),u=function(e){var t=s.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return s.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return n?s.createElement(f,l(l({ref:t},p),{},{components:n})):s.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return s.createElement.apply(null,l)}return s.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48734:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c}});var s=n(87462),o=n(63366),r=(n(67294),n(3905)),l=["components"],a={id:"state",title:"State",sidebar_label:"State",slug:"state"},i="State",u={unversionedId:"developers/modules/posts/state",id:"developers/modules/posts/state",title:"State",description:"Next Post ID",source:"@site/docs/02-developers/02-modules/posts/03-state.md",sourceDirName:"02-developers/02-modules/posts",slug:"/developers/modules/posts/state",permalink:"/next/developers/modules/posts/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/posts/03-state.md",tags:[],version:"current",lastUpdatedAt:1659012388,formattedLastUpdatedAt:"7/28/2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/next/developers/modules/posts/concepts"},next:{title:"Messages",permalink:"/next/developers/modules/posts/messages"}},p={},c=[{value:"Next Post ID",id:"next-post-id",level:2},{value:"Post",id:"post",level:2},{value:"Post section",id:"post-section",level:2},{value:"Next Attachment ID",id:"next-attachment-id",level:2},{value:"Attachment",id:"attachment",level:2},{value:"User Answer",id:"user-answer",level:2},{value:"Active poll queue",id:"active-poll-queue",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,r.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"state"},"State"),(0,r.kt)("h2",{id:"next-post-id"},"Next Post ID"),(0,r.kt)("p",null,"The next post id is stored tied to the subspace to which it refers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x00 | Subspace ID | ->  bytes(NextPostID)"))),(0,r.kt)("h2",{id:"post"},"Post"),(0,r.kt)("p",null,"A post is stored using the subspace id and its id as the key. This allows to easily query:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"all the posts of a given subspace;"),(0,r.kt)("li",{parentName:"ul"},"a specific post of a given subspace.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x01 | Subspace ID | Post ID | -> ProtocolBuffer(Post)")," ")),(0,r.kt)("h2",{id:"post-section"},"Post section"),(0,r.kt)("p",null,"The section in which a post is placed is stored to enable the possibility of querying posts for a particular subspace's section:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x02 | Subspace ID | Section ID | Post ID | -> 0x01"))),(0,r.kt)("h2",{id:"next-attachment-id"},"Next Attachment ID"),(0,r.kt)("p",null,"The next attachment id is stored tied to the subspace id and the post id to which it refers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x10 | Subspace ID | Post ID | -> bytes(NextAttachmentID)"))),(0,r.kt)("h2",{id:"attachment"},"Attachment"),(0,r.kt)("p",null,"A post attachment is stored using the subspace id, post id and its id as the key. This allows to easily query all the posts' attachments:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x11 | SubspaceID | PostID | Attachment ID | -> ProtocolBuffer(Attachment)"))),(0,r.kt)("h2",{id:"user-answer"},"User Answer"),(0,r.kt)("p",null,"A user answer to a poll is stored using the subspace id, post id and poll id as the key. This allows to easily query all the answers of a specific poll:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x20 | Subspace ID | Post ID | Poll ID | -> ProtocolBuffer(UserAnswer)"))),(0,r.kt)("h2",{id:"active-poll-queue"},"Active poll queue"),(0,r.kt)("p",null,"Active polls are stored using the voting end time, subspace id, post id and poll id as the key. This allows to determine, at each block height, which polls should have their results tallied:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0x21 | End Time | Subspace ID | Post ID | Poll ID | -> bytes(PollID)"))))}m.isMDXComponent=!0}}]);