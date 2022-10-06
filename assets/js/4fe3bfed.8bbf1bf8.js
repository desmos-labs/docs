"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[69238],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(a),u=o,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||s;return a?n.createElement(m,r(r({ref:t},d),{},{components:a})):n.createElement(m,r({ref:t},d))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=a.length,r=new Array(s);r[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var c=2;c<s;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},55903:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const s={id:"faq",title:"F.A.Q",sidebar_label:"F.A.Q",slug:"faq"},r="FAQs",i={unversionedId:"developers/faq",id:"developers/faq",title:"F.A.Q",description:"General Concepts",source:"@site/docs/02-developers/07-faq.md",sourceDirName:"02-developers",slug:"/developers/faq",permalink:"/next/developers/faq",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/07-faq.md",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",sidebarPosition:7,frontMatter:{id:"faq",title:"F.A.Q",sidebar_label:"F.A.Q",slug:"faq"},sidebar:"docs",previous:{title:"Observing data",permalink:"/next/developers/observe-data"},next:{title:"Overview",permalink:"/next/fullnode/overview"}},l={},c=[{value:"General Concepts",id:"general-concepts",level:2},{value:"What is a transaction?",id:"what-is-a-transaction",level:3},{value:"What is a message?",id:"what-is-a-message",level:3},{value:"How do I send a transaction?",id:"how-do-i-send-a-transaction",level:3},{value:"How long does transactions take to be executed?",id:"how-long-does-transactions-take-to-be-executed",level:3},{value:"What&#39;s the best way to know when a transaction is performed?",id:"whats-the-best-way-to-know-when-a-transaction-is-performed",level:3},{value:"Developing applications",id:"developing-applications",level:2},{value:"I wrongly did an operation. Can I revert it?",id:"i-wrongly-did-an-operation-can-i-revert-it",level:3}],d={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faqs"},"FAQs"),(0,o.kt)("h2",{id:"general-concepts"},"General Concepts"),(0,o.kt)("h3",{id:"what-is-a-transaction"},"What is a transaction?"),(0,o.kt)("p",null,"As you know, the blockchain can be seen as a decentralized state machine that stores a state. A transaction is the method used by clients to trigger state-changes inside the blockchain."),(0,o.kt)("p",null,"To know more about transactions inside the cosmos-SDK based blockchains, check the documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/transactions.html"},"here"),"."),(0,o.kt)("h3",{id:"what-is-a-message"},"What is a message?"),(0,o.kt)("p",null,"A (transaction) message is the method that allows you to specify which action(s) should be taken inside a transaction to change the current chain state. For example, inside Desmos we can use messages to tell the chain to create a profile, store a post, report a user, etc.."),(0,o.kt)("p",null,"To know more about all the available messages inside Desmos Modules check the ",(0,o.kt)("strong",{parentName:"p"},"Developers")," section."),(0,o.kt)("h3",{id:"how-do-i-send-a-transaction"},"How do I send a transaction?"),(0,o.kt)("p",null,"Sending a transaction is pretty straight forward. All what you need to have is access to an instance of an HD wallet associated with a Desmos account having some ",(0,o.kt)("inlineCode",{parentName:"p"},"desmos")," tokens inside. Once you have it, you simply need to: "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the proper JSON object containing the message(s) that you want to send as well as the account information of the sender. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Sign that JSON using the private key associated with the HD wallet of the transaction sender. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Put the signed JSON inside a bigger JSON object containing the un-signed transaction data. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Send the complete JSON to a full node GRPC API endpoint. "))),(0,o.kt)("p",null,"Please note that when sending transactions you are required to pay a ",(0,o.kt)("strong",{parentName:"p"},"fee")," so that the chain can sustain economically. To avoid paying a higher fee and wasting the user's funds, you should always ",(0,o.kt)("strong",{parentName:"p"},"put multiple messages inside the same transactions"),". This will also decrease the overall execution of all messages and can allow you to save time and provide the users a better UX overall. "),(0,o.kt)("h3",{id:"how-long-does-transactions-take-to-be-executed"},"How long does transactions take to be executed?"),(0,o.kt)("p",null,"Unluckily there is no way to know how long a transaction will take before being executed. The time that passes between it being received by a full node and it's actual execution and verification can vary a lot based on how many messages are inside, how complex each operation to perform is as well as how high the paid fees are. "),(0,o.kt)("p",null,"If you want you can try speeding up the transactions execution by specifying a higher fee to be paid during the execution itself, but this might now change a lot if other users are doing the same."),(0,o.kt)("p",null,"Generally, however, transactions take not a very long time and most of the times they get executed in less than 10 seconds from when they are sent to the chain.  "),(0,o.kt)("h3",{id:"whats-the-best-way-to-know-when-a-transaction-is-performed"},"What's the best way to know when a transaction is performed?"),(0,o.kt)("p",null,"Due to the fact that transactions can take up a different time to be executed (see ",(0,o.kt)("a",{parentName:"p",href:"#how-long-does-transactions-take-to-be-executed"},'"How long does transactions take to be executed"'),"), the best way a client has to stay updated on when a transaction will be executed is by using a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"Websocket"),". Each and every full node exposes a websocket that can be reached at the following URI: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ws://<full-node-host>/websocket\n")),(0,o.kt)("p",null,"If you want to know more about it, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/next/developers/observe-data"},"websocket page"),"."),(0,o.kt)("h2",{id:"developing-applications"},"Developing applications"),(0,o.kt)("h3",{id:"i-wrongly-did-an-operation-can-i-revert-it"},"I wrongly did an operation. Can I revert it?"),(0,o.kt)("p",null,"Unfortunately, due to the nature of the blockchain itself we cannot allow to revert any operations that have been done. For example, once you send a post to Desmos, it will stay there forever and everyone will be able to read it as it appeared when created.\nEven if you edit or delete a post, the original one will always be inside the chain's history and people will be able to see that you made some changes. It's like trying to edit something that is public and written in a stone that cannot be destroyed. "),(0,o.kt)("p",null,"For this reason, we suggest you to take ",(0,o.kt)("strong",{parentName:"p"},"all the possible precautions")," before sending any transaction to the chain. "),(0,o.kt)("p",null,"As an example, you might not want to send a transaction for every post that the user creates, but instead store the locally created posts offline for a certain amount of time (i.e. 2 minutes) and later send the transactions. During this time, the user will still be able to delete the posts if he wants, but once synced on the chain you will no longer be able to take them down."))}p.isMDXComponent=!0}}]);