"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[5698],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),u=o,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1286:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),s=["components"],i={id:"faq",title:"F.A.Q",sidebar_position:6},l="FAQs",c={unversionedId:"developers/faq",id:"developers/faq",isDocsHomePage:!1,title:"F.A.Q",description:"General Concepts",source:"@site/docs/02-developers/06-developer-faq.md",sourceDirName:"02-developers",slug:"/developers/faq",permalink:"/next/developers/faq",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/06-developer-faq.md",version:"current",lastUpdatedAt:1630313787,formattedLastUpdatedAt:"8/30/2021",sidebarPosition:6,frontMatter:{id:"faq",title:"F.A.Q",sidebar_position:6},sidebar:"docs",previous:{title:"Observing data",permalink:"/next/developers/observe-data"},next:{title:"Overview",permalink:"/next/fullnode/overview"}},d=[{value:"General Concepts",id:"general-concepts",children:[{value:"What is a transaction?",id:"what-is-a-transaction",children:[]},{value:"What is a message?",id:"what-is-a-message",children:[]},{value:"How do I send a transaction?",id:"how-do-i-send-a-transaction",children:[]},{value:"How long does transactions take to be executed?",id:"how-long-does-transactions-take-to-be-executed",children:[]},{value:"What&#39;s the best way to know when a transaction is performed?",id:"whats-the-best-way-to-know-when-a-transaction-is-performed",children:[]}]},{value:"Developing applications",id:"developing-applications",children:[{value:"I wrongly did an operation. Can I revert it?",id:"i-wrongly-did-an-operation-can-i-revert-it",children:[]}]}],p={toc:d};function h(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"faqs"},"FAQs"),(0,r.kt)("h2",{id:"general-concepts"},"General Concepts"),(0,r.kt)("h3",{id:"what-is-a-transaction"},"What is a transaction?"),(0,r.kt)("p",null,"As you know, the blockchain can be seen as a decentralized state machine that stores a state. A transaction is the method used by clients to tell the chain that som operations must be taken to change such current state."),(0,r.kt)("p",null,"Every transaction is composed of some common data (such as the account data of the sender, a ",(0,r.kt)("inlineCode",{parentName:"p"},"memo"),", etc.) but the most important parts are ",(0,r.kt)("a",{parentName:"p",href:"#what-is-a-message"},"messages"),". "),(0,r.kt)("h3",{id:"what-is-a-message"},"What is a message?"),(0,r.kt)("p",null,"A (transaction) message is the method that allows you to specify what action(s) should be done inside a transaction to change the current chain state. For example, inside Desmos we can use messages to tell the chain to store a new post, add a like to a post, comment on an existing post and many more."),(0,r.kt)("p",null,"To know more about all the different messages types and the associated actions that allow you to do, please go to the ",(0,r.kt)("strong",{parentName:"p"},"transactions")," section. "),(0,r.kt)("h3",{id:"how-do-i-send-a-transaction"},"How do I send a transaction?"),(0,r.kt)("p",null,"Sending a transaction is pretty straight forward. All what you need to have is access to an instance of an HD wallet associated with a Desmos account having some ",(0,r.kt)("inlineCode",{parentName:"p"},"desmos")," tokens inside. Once you have it, you simply need to: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create the proper JSON object containing the message(s) that you want to send as well as the account information of the sender. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Sign that JSON using the private key associated with the HD wallet of the transaction sender. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Put the signed JSON inside a bigger JSON object containing the un-signed transaction data. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Send the complete JSON to a full node REST API endpoint. "))),(0,r.kt)("p",null,"Please note that when sending transactions you are required to pay a ",(0,r.kt)("strong",{parentName:"p"},"fee")," so that the chain can sustain economically. To avoid paying a higher fee and wasting the user's funds, you should always ",(0,r.kt)("strong",{parentName:"p"},"put multiple messages inside the same transactions"),". This will also decrease the overall execution of all messages and can allow you to save time and provide the users a better UX overall. "),(0,r.kt)("h3",{id:"how-long-does-transactions-take-to-be-executed"},"How long does transactions take to be executed?"),(0,r.kt)("p",null,"Unluckily there is no way to know how long a transaction will take before being executed. The time that passes between it being received by a full node and it's actual execution and verification can vary a lot based on how many messages are inside, how complex each operation to perform is as well as how high the paid fees are. "),(0,r.kt)("p",null,"If you want you can try speeding up the transactions execution by specifying a higher fee to be paid during the execution itself, but this might now change a lot if other users are doing the same."),(0,r.kt)("p",null,"Generally, however, transactions take not a very long time and most of the times they get executed in less than 10 seconds from when they are sent to the chain.  "),(0,r.kt)("h3",{id:"whats-the-best-way-to-know-when-a-transaction-is-performed"},"What's the best way to know when a transaction is performed?"),(0,r.kt)("p",null,"Due to the fact that transactions can take up a different time to be executed (see ",(0,r.kt)("a",{parentName:"p",href:"#how-long-does-transactions-take-to-be-executed"},'"How long does transactions take to be executed"'),"), the best way a client has to stay updated on when a transaction will be executed is by using a ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"Websocket"),". Each and every full node exposes a websocket that can be reached at the following URI: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ws://<full-node-host>/websocket\n")),(0,r.kt)("p",null,"If you want to know more about it, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/next/developers/observe-data"},"websocket page"),"."),(0,r.kt)("h2",{id:"developing-applications"},"Developing applications"),(0,r.kt)("h3",{id:"i-wrongly-did-an-operation-can-i-revert-it"},"I wrongly did an operation. Can I revert it?"),(0,r.kt)("p",null,"Unfortunately, due to the nature of the blockchain itself we cannot allow to revert any operations that have been done. For example, once you send a post to Desmos, it will stay there forever and everyone will be able to read it as it appeared when created.\nEven if you edit a post, the original one will always be there an people will be able to see that you made some changes. It's like trying to editing something that is public and written in a stone that cannot be destroyed. "),(0,r.kt)("p",null,"For this reason, we suggest you to take ",(0,r.kt)("strong",{parentName:"p"},"all the possible precautions")," before sending any transaction to the chain. "),(0,r.kt)("p",null,"As an example, you might not want to send a transaction for every post that the user creates, but instead store the locally created posts offline for a certain amount of time (i.e. 2 minutes) and later send the transactions. During this time, the user will still be able to delete the posts if he wants, but once synced on the chain you will no longer be able to take them down."))}h.isMDXComponent=!0}}]);