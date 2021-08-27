"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[6565],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(n),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},194:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},p="EditParamsProposal",l={unversionedId:"developers/transactions/staging/edit_param_proposal",id:"version-mainnet/developers/transactions/staging/edit_param_proposal",isDocsHomePage:!1,title:"EditParamsProposal",description:"Inside Desmos there are some parameters set for the profiles and posts modules which can be changed by submitting a",source:"@site/versioned_docs/version-mainnet/02-developers/03-transactions/staging/edit_param_proposal.md",sourceDirName:"02-developers/03-transactions/staging",slug:"/developers/transactions/staging/edit_param_proposal",permalink:"/developers/transactions/staging/edit_param_proposal",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/02-developers/03-transactions/staging/edit_param_proposal.md",version:"mainnet",lastUpdatedAt:1630057329,formattedLastUpdatedAt:"8/27/2021",frontMatter:{}},c=[{value:"Structure",id:"structure",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Message action",id:"message-action",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"editparamsproposal"},(0,o.kt)("inlineCode",{parentName:"h1"},"EditParamsProposal")),(0,o.kt)("p",null,"Inside Desmos there are some parameters set for the ",(0,o.kt)("inlineCode",{parentName:"p"},"profiles")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"posts")," modules which can be changed by submitting a\nproposal through the ",(0,o.kt)("inlineCode",{parentName:"p"},"gov")," module of the Cosmos SDK."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/cosmos.gov.v1beta1.MsgSubmitProposal",\n  "content": {\n    "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",\n    "value": {\n      "title": "<Proposal\'s title>",\n      "description": "<Proposal\'s description>",\n      "changes": [\n        {\n          "subspace": "<Module\'s subspace>",\n          "key": "<Parameter\'s key>",\n          "value": "<Parameter\'s value>"\n        }\n      ]\n    }\n  },\n  "initial_deposit": "<Proposal\'s deposit>",\n  "proposer": "<Desmos address of the proposer>"\n}\n')),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"title")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Title of the proposal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"description")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Description of the proposal")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"subspace")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Module's subspace")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"key")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Parameter's store key")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:"center"},"JSON"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Json representation of parameter's object")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"initial_deposit")),(0,o.kt)("td",{parentName:"tr",align:"center"},"Array"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Proposal's initial deposit")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"proposer")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the proposer")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/cosmos.gov.v1beta1.MsgSubmitProposal",\n  "content": {\n    "@type": "/cosmos.params.v1beta1.ParameterChangeProposal",\n    "value": {\n      "title": "Nickname Param Change",\n      "description": "Update nickname lengths",\n      "changes": [\n        {\n          "subspace": "profiles",\n          "key": "nicknameParams",\n          "value": "{\\"type\\": \\"desmos/NicknameParams\\",\\"value\\": {\\"min_nickname_len\\":\\"5\\",\\"max_nickname_len\\":\\"40\\"}}"\n        }\n      ]\n    }\n  },\n  "initial_deposit": [\n    {\n      "denom": "desmos",\n      "amount": "10"\n    }\n  ],\n  "proposer": "desmos19yphj7tdpakp8e55t6y8srk943m0ctf0rc3sqe"\n}\n')),(0,o.kt)("h2",{id:"message-action"},"Message action"),(0,o.kt)("p",null,"The action associated to this message is the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"submit_proposal\n")))}d.isMDXComponent=!0}}]);