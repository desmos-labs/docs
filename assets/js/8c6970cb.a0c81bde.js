"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[53097],{3905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>u});var r=s(67294);function a(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function n(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?n(Object(s),!0).forEach((function(t){a(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function i(e,t){if(null==e)return{};var s,r,a=function(e,t){if(null==e)return{};var s,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||(a[s]=e[s]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)s=n[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(a[s]=e[s])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):o(o({},t),e)),s},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var s=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(s),u=a,g=m["".concat(l,".").concat(u)]||m[u]||p[u]||n;return s?r.createElement(g,o(o({ref:t},c),{},{components:s})):r.createElement(g,o({ref:t},c))}));function u(e,t){var s=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=s.length,o=new Array(n);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<n;d++)o[d]=s[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,s)}m.displayName="MDXCreateElement"},12957:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=s(87462),a=(s(67294),s(3905));const n={id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},o="Msg Service",i={unversionedId:"developers/modules/reactions/messages",id:"version-4.1.0/developers/modules/reactions/messages",title:"Messages",description:"Msg/AddReaction",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/reactions/04-messages.md",sourceDirName:"02-developers/02-modules/reactions",slug:"/developers/modules/reactions/messages",permalink:"/4.1.0/developers/modules/reactions/messages",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/reactions/04-messages.md",tags:[],version:"4.1.0",lastUpdatedAt:1662464705,formattedLastUpdatedAt:"Sep 6, 2022",sidebarPosition:4,frontMatter:{id:"messages",title:"Messages",sidebar_label:"Messages",slug:"messages"},sidebar:"docs",previous:{title:"State",permalink:"/4.1.0/developers/modules/reactions/state"},next:{title:"Events",permalink:"/4.1.0/developers/modules/reactions/events"}},l={},d=[{value:"Msg/AddReaction",id:"msgaddreaction",level:2},{value:"Msg/RemoveReaction",id:"msgremovereaction",level:2},{value:"Msg/AddRegisteredReaction",id:"msgaddregisteredreaction",level:2},{value:"Msg/EditRegisteredReaction",id:"msgeditregisteredreaction",level:2},{value:"Msg/RemoveRegisteredReaction",id:"msgremoveregisteredreaction",level:2},{value:"Msg/SetReactionsParams",id:"msgsetreactionsparams",level:2}],c={toc:d};function p(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"msg-service"},"Msg Service"),(0,a.kt)("h2",{id:"msgaddreaction"},"Msg/AddReaction"),(0,a.kt)("p",null,"A post reaction can be added with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAddReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reactions/v1/msgs.proto#L38-L60\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the user does not have a profile;"),(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post author has blocked the user within the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to react to posts inside the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the reaction's value is not valid;"),(0,a.kt)("li",{parentName:"ul"},"the reaction already exists.")),(0,a.kt)("h2",{id:"msgremovereaction"},"Msg/RemoveReaction"),(0,a.kt)("p",null,"A reaction can be removed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRemoveReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reactions/v1/msgs.proto#L71-L94\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the post does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the reaction does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to remove reactions within the subspace.")),(0,a.kt)("h2",{id:"msgaddregisteredreaction"},"Msg/AddRegisteredReaction"),(0,a.kt)("p",null,"A registered reaction can be added to a subspace with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAddRegisteredReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reactions/v1/msgs.proto#L99-L117\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to register a reaction within the subspace;"),(0,a.kt)("li",{parentName:"ul"},"the provided shorthand code is either blank or empty; "),(0,a.kt)("li",{parentName:"ul"},"the provided display value is either blank or empty.")),(0,a.kt)("h2",{id:"msgeditregisteredreaction"},"Msg/EditRegisteredReaction"),(0,a.kt)("p",null,"A registered reaction can be edited with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgEditRegisteredReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reactions/v1/msgs.proto#L129-L153\n")),(0,a.kt)("p",null,"it's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the registered reaction does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to manage registered reactions;"),(0,a.kt)("li",{parentName:"ul"},"the new shorthand code or display value are invalid.")),(0,a.kt)("h2",{id:"msgremoveregisteredreaction"},"Msg/RemoveRegisteredReaction"),(0,a.kt)("p",null,"A registered reaction ca be removed with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRemoveRegisteredReaction"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reactions/v1/msgs.proto#L159-L176\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the registered reaction does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to manage registered reactions.")),(0,a.kt)("h2",{id:"msgsetreactionsparams"},"Msg/SetReactionsParams"),(0,a.kt)("p",null,"A subspace's reaction params can be set with the ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgSetReactionsParams"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:"reference",reference:!0},"https://github.com/desmos-labs/desmos/blob/v4.1.0/proto/desmos/reactions/v1/msgs.proto#L182-L205\n")),(0,a.kt)("p",null,"It's expected to fail if:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the specified subspace does not exist;"),(0,a.kt)("li",{parentName:"ul"},"the user has no permission to manage the reactions params;"),(0,a.kt)("li",{parentName:"ul"},"the provided params are invalid.")))}p.isMDXComponent=!0}}]);