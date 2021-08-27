"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[6175],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},s=Object.keys(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)n=s[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var l=a.createContext({}),p=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,s=t.originalType,l=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),m=p(n),u=r,g=m["".concat(l,".").concat(u)]||m[u]||c[u]||s;return n?a.createElement(g,o(o({ref:e},d),{},{components:n})):a.createElement(g,o({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1102:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return d},default:function(){return m}});var a=n(7462),r=n(3366),s=(n(7294),n(3905)),o=["components"],i={},l="MsgEditPost",p={unversionedId:"developers/transactions/staging/posts/edit-post",id:"developers/transactions/staging/posts/edit-post",isDocsHomePage:!1,title:"MsgEditPost",description:"This message allows you to edit the message of a previously published public post.",source:"@site/docs/02-developers/03-transactions/staging/posts/edit-post.md",sourceDirName:"02-developers/03-transactions/staging/posts",slug:"/developers/transactions/staging/posts/edit-post",permalink:"/next/developers/transactions/staging/posts/edit-post",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-transactions/staging/posts/edit-post.md",version:"current",lastUpdatedAt:1630057329,formattedLastUpdatedAt:"8/27/2021",frontMatter:{}},d=[{value:"Structure",id:"structure",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"Example",id:"example",children:[{value:"Without attachments and pollData",id:"without-attachments-and-polldata",children:[]},{value:"With attachments and pollData",id:"with-attachments-and-polldata",children:[]}]},{value:"Message action",id:"message-action",children:[]}],c={toc:d};function m(t){var e=t.components,n=(0,r.Z)(t,o);return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"msgeditpost"},(0,s.kt)("inlineCode",{parentName:"h1"},"MsgEditPost")),(0,s.kt)("p",null,"This message allows you to edit the message of a previously published public post."),(0,s.kt)("h2",{id:"structure"},"Structure"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.posts.v1beta1.MsgEditPost",\n  "post_id": "<ID of the post to be edited>",\n  "message": "<New post message>",\n  "comments_state": "<Indicates if the post allows comments or not>",\n  "attachments": "<Attachment\'s array that contains all the attachments associated with the post",\n  "poll": "<Poll contains all useful data of the poll\'s post>", \n  "editor": "<Desmos address of the user editing the message>"\n}\n')),(0,s.kt)("h3",{id:"attributes"},"Attributes"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,s.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,s.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"post_id")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"ID of the post to edit")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"message")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"New message that should be set as the post message")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"comments_state")),(0,s.kt)("td",{parentName:"tr",align:"center"},"Enum"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Tells whenever the post will allow other posts to reference to it as parent or not")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"attachments")),(0,s.kt)("td",{parentName:"tr",align:"center"},"Array"),(0,s.kt)("td",{parentName:"tr",align:"left"},"(Optional) Array containing all the attachments related to the post")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"poll")),(0,s.kt)("td",{parentName:"tr",align:"center"},"Object"),(0,s.kt)("td",{parentName:"tr",align:"left"},"(Optional) Object containing all the information related to post's poll, if exists")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:"center"},(0,s.kt)("inlineCode",{parentName:"td"},"editor")),(0,s.kt)("td",{parentName:"tr",align:"center"},"String"),(0,s.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is editing the post. This must be the same address of the original post creator.")))),(0,s.kt)("h2",{id:"example"},"Example"),(0,s.kt)("h3",{id:"without-attachments-and-polldata"},"Without attachments and pollData"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.posts.v1beta1.MsgEditPost",\n  "post_id": "a4469741bb0c0622627810082a5f2e4e54fbbb888f25a4771a5eebc697d30cfc",\n  "message": "Desmos you rock!",\n  "editor": "desmos1w3fe8zq5jrxd4nz49hllg75sw7m24qyc7tnaax"\n}\n')),(0,s.kt)("h3",{id:"with-attachments-and-polldata"},"With attachments and pollData"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.posts.v1beta1.MsgEditPost",\n  "post_id": "a4469741bb0c0622627810082a5f2e4e54fbbb888f25a4771a5eebc697d30cfc",\n  "message": "Desmos you rock!",\n  "comments_state": "blocked",\n  "attachments": [\n    {\n      "uri": "https://example.com/media1",\n      "mime_type": "text/plain",\n      "tags": [\n        "desmos1cjf97gpzwmaf30pzvaargfgr884mpp5ak8f7ns",\n        "desmos15ux5mc98jlhsg30dzwwv06ftjs82uy4g3t99ru"\n      ]\n    },\n    {\n      "uri": "https://example.com/media2",\n      "mime_type": "application/json"\n    }\n  ],\n  "poll": {\n    "question": "Which dog do you prefer?",\n    "provided_answers": [\n      {\n        "answer_id": 0,\n        "text": "Beagle"\n      },\n      {\n        "answer_id": 1,\n        "text": "Pug"\n      },\n      {\n        "answer_id": 2,\n        "text": "German Sheperd"\n      }\n    ],\n    "end_date": "2020-02-10T15:00:00Z",\n    "is_open": true,\n    "allows_multiple_answers": true,\n    "allows_answer_edits": true\n  },\n  "editor": "desmos1w3fe8zq5jrxd4nz49hllg75sw7m24qyc7tnaax"\n}\n')),(0,s.kt)("h2",{id:"message-action"},"Message action"),(0,s.kt)("p",null,"The action associated to this message is the following: "),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"edit_post\n")))}m.isMDXComponent=!0}}]);