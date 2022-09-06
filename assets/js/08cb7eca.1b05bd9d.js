"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[56039],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(a),m=n,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?r.createElement(f,s(s({ref:t},p),{},{components:a})):r.createElement(f,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<i;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},35613:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={id:"state",title:"State",sidebar_label:"State",slug:"state"},s="State",o={unversionedId:"developers/modules/reactions/state",id:"version-4.2.0/developers/modules/reactions/state",title:"State",description:"Next Registered Reaction ID",source:"@site/versioned_docs/version-4.2.0/02-developers/02-modules/reactions/03-state.md",sourceDirName:"02-developers/02-modules/reactions",slug:"/developers/modules/reactions/state",permalink:"/developers/modules/reactions/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.2.0/02-developers/02-modules/reactions/03-state.md",tags:[],version:"4.2.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/developers/modules/reactions/concepts"},next:{title:"Messages",permalink:"/developers/modules/reactions/messages"}},l={},c=[{value:"Next Registered Reaction ID",id:"next-registered-reaction-id",level:2},{value:"Registered Reaction",id:"registered-reaction",level:2},{value:"Next Reaction ID",id:"next-reaction-id",level:2},{value:"Reaction",id:"reaction",level:2},{value:"Reactions Subspace Params",id:"reactions-subspace-params",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"state"},"State"),(0,n.kt)("h2",{id:"next-registered-reaction-id"},"Next Registered Reaction ID"),(0,n.kt)("p",null,"The next registered reaction id is stored using the associated subspace id as the key:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x01 | Subspace ID | -> bytes(NextRegisteredReactionID)"))),(0,n.kt)("h2",{id:"registered-reaction"},"Registered Reaction"),(0,n.kt)("p",null,"A registered reaction is stored using the associated subspace id and its id as the key. This allows to easily\nquery:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"all the registered reactions of a subspace;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a specific registered reaction.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"0x02 | Subspace ID | Reaction ID | -> ProtocolBuffer(RegisteredReaction)")))),(0,n.kt)("h2",{id:"next-reaction-id"},"Next Reaction ID"),(0,n.kt)("p",null,"The next reaction id is stored using the associated subspace id as the key:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x10 | Subspace ID | -> bytes(NextReactionID)"))),(0,n.kt)("h2",{id:"reaction"},"Reaction"),(0,n.kt)("p",null,"A post reaction is stored using the subspace id, the associated post id and its id combined as the key. This allows to easily query:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"all the reactions of a subspace;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"all the reactions of a post;")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"a specific post's reaction.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"0x11 | Subspace ID | Post ID | Reaction ID | -> ProtocolBuffer(Reaction)")))),(0,n.kt)("h2",{id:"reactions-subspace-params"},"Reactions Subspace Params"),(0,n.kt)("p",null,"The reactions' subspace params are stored using the associated subspace id as the key:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"0x20 | Subspace ID | -> ProtocolBuffer(SubspaceReactionsParams)"))))}d.isMDXComponent=!0}}]);