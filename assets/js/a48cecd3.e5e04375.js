"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[65680],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),u=a,m=f["".concat(s,".").concat(u)]||f[u]||d[u]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},83006:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={id:"save-profile",title:"Save profile",sidebar_label:"Save profile",slug:"save-profile"},s="MsgSaveProfile",p={unversionedId:"developers/transactions/profiles/save-profile",id:"version-2.3/developers/transactions/profiles/save-profile",title:"Save profile",description:"This message allows you to save a new profile or edit an existent one.",source:"@site/versioned_docs/version-2.3/02-developers/03-transactions/profiles/save-profile.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/save-profile",permalink:"/2.3/developers/transactions/profiles/save-profile",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/03-transactions/profiles/save-profile.md",tags:[],version:"2.3",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"save-profile",title:"Save profile",sidebar_label:"Save profile",slug:"save-profile"},sidebar:"version-2.3/docs",previous:{title:"Chain link",permalink:"/2.3/developers/types/profiles/chain-link"},next:{title:"Delete profile",permalink:"/2.3/developers/transactions/profiles/delete-profile"}},c={},d=[{value:"Structure",id:"structure",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],f={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"msgsaveprofile"},(0,i.kt)("inlineCode",{parentName:"h1"},"MsgSaveProfile")),(0,i.kt)("p",null,"This message allows you to save a new profile or edit an existent one."),(0,i.kt)("h2",{id:"structure"},"Structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgSaveProfile",\n  "dtag": "<Profile dtag>",\n  "nickname": "<Profile nickname>",\n  "bio": "<Profile biography>",  \n  "profile_picture": "<URI of the profile account\'s picture>",\n  "cover_picture": "<URI of the profile cover picture>",\n  "creator": "<Desmos address that\'s creating the profile>"\n}\n')),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"dtag")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"DTag of the user"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"nickname")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Nickname of the user"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"bio")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Biography of the user"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"profile_picture")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL to the user profile picture"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"cover_picture")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"URL to the user cover picture"),(0,i.kt)("td",{parentName:"tr",align:"left"},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"creator")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is editing the profile"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("p",null,"If you are editing an existing profile and do not want to edit some fields, you can use the special\nvalue ",(0,i.kt)("inlineCode",{parentName:"p"},"[do-not-modify]"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgSaveProfile",\n  "dtag": "Eva00",\n  "nickname": "Rei Ayanami",\n  "bio": "The real pilot",\n  "profile_picture": "[do-not-modify]",\n  "cover_picture": "https://shorturl.at/cgpyF",\n  "creator": "desmos12a2y7fflz6g4e5gn0mh0n9dkrzllj0q5vx7c6t"\n}\n')),(0,i.kt)("h2",{id:"message-action"},"Message action"),(0,i.kt)("p",null,"The action associated to this message is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"save_profile\n")))}u.isMDXComponent=!0}}]);