"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[50857],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var s=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,o=function(e,t){if(null==e)return{};var n,s,o={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||r;return n?s.createElement(f,a(a({ref:t},p),{},{components:n})):s.createElement(f,a({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<r;c++)a[c]=n[c];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},30020:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return d}});var s=n(87462),o=n(63366),r=(n(67294),n(3905)),a=["components"],i={id:"tools-to-build",title:"Tools to build DApps",sidebar_label:"Tools to build DApps",slug:"tools-to-build"},l="Tools to build DApps",c={unversionedId:"developers/tools-to-build",id:"developers/tools-to-build",title:"Tools to build DApps",description:"In order to let developers easily interact with the Desmos blockchain, we have developed a series of tools that will ease the development of DApps.",source:"@site/docs/02-developers/03-tools-to-build.md",sourceDirName:"02-developers",slug:"/developers/tools-to-build",permalink:"/next/developers/tools-to-build",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/03-tools-to-build.md",tags:[],version:"current",lastUpdatedAt:1657531086,formattedLastUpdatedAt:"7/11/2022",sidebarPosition:3,frontMatter:{id:"tools-to-build",title:"Tools to build DApps",sidebar_label:"Tools to build DApps",slug:"tools-to-build"},sidebar:"docs",previous:{title:"Client",permalink:"/next/developers/modules/supply/client"},next:{title:"Query data",permalink:"/next/developers/query-data"}},p={},d=[{value:"DesmJS",id:"desmjs",level:2},{value:"Install DesmJS",id:"install-desmjs",level:2},{value:"Send your first transaction",id:"send-your-first-transaction",level:2},{value:"Example 1: Create a profile",id:"example-1-create-a-profile",level:3},{value:"Example 2: Create a post",id:"example-2-create-a-post",level:3},{value:"Example 3: Sign with wallet connect",id:"example-3-sign-with-wallet-connect",level:3}],m={toc:d};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,r.kt)("wrapper",(0,s.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tools-to-build-dapps"},"Tools to build DApps"),(0,r.kt)("p",null,"In order to let developers easily interact with the Desmos blockchain, we have developed a series of tools that will ease the development of DApps."),(0,r.kt)("h2",{id:"desmjs"},"DesmJS"),(0,r.kt)("p",null,"To make it easy to develop dApps on the top of the Desmos chain we have built a ",(0,r.kt)("inlineCode",{parentName:"p"},"typescript")," framework called ",(0,r.kt)("strong",{parentName:"p"},"DesmJS"),".\nDesmJS is based on to the analog framework for Cosmos based chains ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmjs"},"CosmJS")," but focused on Desmos.\nDesmJS contains 3 different packages, each one with a specific scope:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@desmoslabs/desmjs"},"@desmoslabs/desmjs")," package contains the client that allows to easily create, sign and broadcast transactions containing Desmos (and Cosmos) messages;"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@desmoslabs/desmjs-types"},"@desmoslabs/desmjs-types")," package contains the Desmos types protobuf definitions;"),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/@desmoslabs/desmjs-walletconnect"},"@desmoslabs/desmjs-walletconnect")," package contains a ",(0,r.kt)("inlineCode",{parentName:"li"},"WalletConnectSigner")," which implements ",(0,r.kt)("inlineCode",{parentName:"li"},"@desmoslabs/desmjs")," ",(0,r.kt)("inlineCode",{parentName:"li"},"Signer")," interface by signing transactions through a WalletConnect client.")),(0,r.kt)("p",null,"The above packages can be found on the official ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/desmjs"},"GitHub Repository")," of DesmJS."),(0,r.kt)("h2",{id:"install-desmjs"},"Install DesmJS"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @desmoslabs/desmjs @desmoslabs/desmjs-types\n# or\nyarn add @desmoslabs/desmjs @desmoslabs/desmjs-types\n")),(0,r.kt)("h2",{id:"send-your-first-transaction"},"Send your first transaction"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n    DesmosClient,\n    SigningMode,\n    OfflineSignerAdapter,\n    assertIsDeliverTxSuccess\n} from "@desmoslabs/desmjs";\n\n\nconst mnemonic = "math track fish reopen project latin radio spoon please table between install cheap smile deer glide desk license bench vapor chef sock list case";\nconst rpcEndpoint = "https://rpc.my_tendermint_rpc_node";\nconst signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);\nconst [firstAccount] = await signer.getAccounts();\n\nconst client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);\n\n\nconst recipient = "desmos1ptvq7l4jt7n9sc3fky22mfvc6waf2jd8nuc0jv";\nconst amount = {\n    denom: "udsm",\n    amount: "1337420",\n};\nconst result = await client.sendTokens(firstAccount.address, recipient, [amount], "Have fun with your coins");\nassertIsDeliverTxSuccess(result);\n')),(0,r.kt)("p",null,"This is a very easy example but maybe you want to interact with some of the Desmos modules like the ",(0,r.kt)("strong",{parentName:"p"},"profiles")," or ",(0,r.kt)("strong",{parentName:"p"},"posts"),".\nLet's see an example of profile creation and post creation."),(0,r.kt)("h3",{id:"example-1-create-a-profile"},"Example 1: Create a profile"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { \n    DesmosClient, \n    SigningMode, \n    OfflineSignerAdapter,\n    assertIsDeliverTxSuccess,\n    MsgSaveProfileEncodeObject\n} from "@desmoslabs/desmjs";\nimport {\n    MsgSaveProfile,\n} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_profile";\n\n\nconst mnemonic = "math track fish reopen project latin radio spoon please table between install cheap smile deer glide desk license bench vapor chef sock list case";\nconst rpcEndpoint = "https://rpc.my_tendermint_rpc_node";\nconst signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);\nconst [firstAccount] = await signer.getAccounts();\n\nconst client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);\n\nconst msg: MsgSaveProfileEncodeObject = {\n    typeUrl: "/desmos.profiles.v2.MsgSaveProfile",\n    value: MsgSaveProfile.fromPartial({\n        dtag: "frieza",\n        nickname: "Frieza",\n        bio: "A weakling like you could never overcome me!",\n        profilePicture: "https://link_to_profile_picture",\n        coverPicture: "https://link_to_cover_picture",\n        creator: firstAccount.address,\n    })\n}\n\nconst result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");\nassertIsDeliverTxSuccess(result);\n')),(0,r.kt)("h3",{id:"example-2-create-a-post"},"Example 2: Create a post"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import { \n    DesmosClient, \n    SigningMode, \n    OfflineSignerAdapter, \n    assertIsDeliverTxSuccess, \n    MsgCreatePostEncodeObject \n} from "@desmoslabs/desmjs";\nimport {\n    MsgCreatePost,\n} from "@desmoslabs/desmjs-types/desmos/posts/v2/msgs";\nimport { ReplySetting } from "@desmoslabs/desmjs-types/desmos/posts/v2/models";\nimport Long from "long";\n\n\nconst mnemonic = "math track fish reopen project latin radio spoon please table between install cheap smile deer glide desk license bench vapor chef sock list case";\nconst rpcEndpoint = "https://rpc.my_tendermint_rpc_node";\nconst signer = await OfflineSignerAdapter.fromMnemonic(SigningMode.DIRECT, mnemonic);\nconst [firstAccount] = await signer.getAccounts();\n\nconst client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);\n\nconst msg: MsgCreatePostEncodeObject = {\n    typeUrl: "/desmos.posts.v2.MsgCreatePost",\n    value: MsgCreatePost.fromPartial({\n        subspaceId: Long.fromNumber(1),\n        sectionId: 0,\n        text: "Test post",\n        author: firstAccount.address,\n        replySettings: ReplySettings.REPLY_SETTING_EVERYONE,\n    })\n}\n\nconst result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");\nassertIsDeliverTxSuccess(result);\n')),(0,r.kt)("h3",{id:"example-3-sign-with-wallet-connect"},"Example 3: Sign with wallet connect"),(0,r.kt)("p",null,"make sure to install the wallet connect package with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install @desmoslabs/desmjs-walletconnect\n# or\nyarn add @desmoslabs/desmjs-walletconnect\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import {\n  WalletConnect,\n  QRCodeModal,\n  WalletConnectSigner,\n} from "@desmoslabs/desmjs-walletconnect";\nimport { DesmosClient, SigningMode, assertIsDeliverTxSuccess, MsgSaveProfileEncodeObject } from "@desmoslabs/desmjs";\nimport {\n    MsgSaveProfile,\n} from "@desmoslabs/desmjs-types/desmos/profiles/v2/msgs_profile";\n\n\nconst connector = new WalletConnect({\n    bridge: "https://bridge.walletconnect.org",\n    qrcodeModal: QRCodeModal,\n});\nconst signer = new WalletConnectSigner(this.connector, {\n    signingMode: SigningMode.AMINO,\n});\n\n// Show the walletconnect modal to allow connection from a client\nawait signer.connect();\n\nconst rpcEndpoint = "https://rpc.my_tendermint_rpc_node";\nconst [firstAccount] = await signer.getAccounts();\n\nconst client = await DesmosClient.connectWithSigner(rpcEndpoint, signer);\n\nconst msg: MsgSaveProfileEncodeObject = {\n    typeUrl: "/desmos.profiles.v2.MsgSaveProfile",\n    value: MsgSaveProfile.fromPartial({\n        dtag: "frieza",\n        nickname: "Frieza",\n        bio: "A weakling like you could never overcome me!",\n        profilePicture: "https://link_to_profile_picture",\n        coverPicture: "https://link_to_cover_picture",\n        creator: firstAccount.address,\n    })\n}\n\nconst result = await client.signAndBroadcast(firstAccount.address, [msg], "auto");\nassertIsDeliverTxSuccess(result);\n')))}u.isMDXComponent=!0}}]);