"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[9245],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,b=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(b,s(s({ref:t},u),{},{components:r})):n.createElement(b,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1287:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],l={id:"unblock-user",title:"Unblock user",sidebar_label:"Unblock User",slug:"unblock-user"},i="MsgUnblockUser",c={unversionedId:"developers/transactions/profiles/unblock-user",id:"version-2.3/developers/transactions/profiles/unblock-user",title:"Unblock user",description:"This message allows you to unblock a previously blocked user.",source:"@site/versioned_docs/version-2.3/02-developers/03-transactions/profiles/unblock-user.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/unblock-user",permalink:"/2.3/developers/transactions/profiles/unblock-user",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/03-transactions/profiles/unblock-user.md",tags:[],version:"2.3",lastUpdatedAt:1655125428,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"unblock-user",title:"Unblock user",sidebar_label:"Unblock User",slug:"unblock-user"},sidebar:"version-2.3/docs",previous:{title:"Block user",permalink:"/2.3/developers/transactions/profiles/block-user"},next:{title:"Link application",permalink:"/2.3/developers/transactions/profiles/link-application"}},u={},p=[{value:"Structure",id:"structure",level:2},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"msgunblockuser"},(0,o.kt)("inlineCode",{parentName:"h1"},"MsgUnblockUser")),(0,o.kt)("p",null,"This message allows you to unblock a previously blocked user."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgUnblockUser",\n  "blocker": "<Desmos address of the user that is unblocking another user>",\n  "blocked": "<Desmos address of the unblocked user>",\n  "subspace": "<Subspace of the block>"\n}   \n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"blocker")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is blocking someone else"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"blocked")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the unblocked user"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"subspace")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"String that identifies the app for which the block was valid"),(0,o.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgUnblockUser",\n  "blocker": "desmos1j83hlf5yn5839wgpege3z669r8j3lh2ggmtf5u",\n  "blocked": "desmos15ux5mc98jlhsg30dzwwv06ftjs82uy4g3t99ru",\n  "subspace": "4e188d9c17150037d5199bbdb91ae1eb2a78a15aca04cb35530cccb81494b36e"\n}   \n')),(0,o.kt)("h2",{id:"message-action"},"Message action"),(0,o.kt)("p",null,"The action associated to this message is the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"unblock_user\n")))}m.isMDXComponent=!0}}]);