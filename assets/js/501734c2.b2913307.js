"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[8031],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),u=i,k=h["".concat(l,".").concat(u)]||h[u]||p[u]||o;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7735:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return c},default:function(){return h}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),r=["components"],s={id:"chain-link",title:"Chain link",sidebar_label:"Chain link",slug:"chain-link"},l="Chain link",d={unversionedId:"developers/types/profiles/chain-link",id:"developers/types/profiles/chain-link",isDocsHomePage:!1,title:"Chain link",description:'A chain link represents a link to an external chain account that has been created by the user to connect their Desmos profile to such accounts. These links can be created either offline or using IBC following the specification described inside the "Create a chain link" section.',source:"@site/docs/02-developers/02-types/profiles/chain-link.md",sourceDirName:"02-developers/02-types/profiles",slug:"/developers/types/profiles/chain-link",permalink:"/next/developers/types/profiles/chain-link",editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-types/profiles/chain-link.md",version:"current",lastUpdatedAt:1639577951,formattedLastUpdatedAt:"12/15/2021",frontMatter:{id:"chain-link",title:"Chain link",sidebar_label:"Chain link",slug:"chain-link"},sidebar:"docs",previous:{title:"Application link",permalink:"/next/developers/types/profiles/application-link"},next:{title:"Save profile",permalink:"/next/developers/transactions/profiles/save-profile"}},c=[{value:"Contained data",id:"contained-data",children:[{value:"<code>User</code> (<code>string</code>)",id:"user-string",children:[]},{value:"<code>Address</code> (<code>object</code>)",id:"address-object",children:[]},{value:"<code>Proof</code> (<code>object</code>)",id:"proof-object",children:[]},{value:"<code>ChainConfig</code> (<code>object</code>)",id:"chainconfig-object",children:[]},{value:"<code>CreationTime</code> (<code>time</code>)",id:"creationtime-time",children:[]}]},{value:"Create a chain link",id:"create-a-chain-link",children:[{value:"1. Create the ownership proofs",id:"1-create-the-ownership-proofs",children:[]},{value:"2. Create the link",id:"2-create-the-link",children:[]}]}],p={toc:c};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"chain-link"},"Chain link"),(0,o.kt)("p",null,"A chain link represents a link to an external chain account that has been created by the user to connect their Desmos profile to such accounts. These links can be created either offline or using IBC following the specification described inside the ",(0,o.kt)("a",{parentName:"p",href:"#create-a-chain-link"},(0,o.kt)("em",{parentName:"a"},'"Create a chain link"')," section"),"."),(0,o.kt)("h2",{id:"contained-data"},"Contained data"),(0,o.kt)("p",null,"Here follows the data contained inside a chain link."),(0,o.kt)("h3",{id:"user-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"User")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"Represents the Desmos address to which the chain link is associated."),(0,o.kt)("h3",{id:"address-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"Address")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"Contains the data of the external chain address. Currently, it can be of two different types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Bech32Address")," to represent Bech32-based addresses"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Base58Address")," to support Base58-encoded addresses")),(0,o.kt)("h3",{id:"proof-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"Proof")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"Contains the data proving the ownership of the external chain account."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"pubkey-object"},(0,o.kt)("inlineCode",{parentName:"h4"},"PubKey")," (",(0,o.kt)("inlineCode",{parentName:"h4"},"object"),")"),(0,o.kt)("p",{parentName:"li"},"Contains the data of the public key associated with the external address that is used to verify the ownership of such address.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"signature-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"Signature")," (",(0,o.kt)("inlineCode",{parentName:"h4"},"string"),")"),(0,o.kt)("p",{parentName:"li"},"Represents the hex-encoded signature of the plain text that has been created signing it with the private key\nassociated with the provided public key.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"plaintext-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"PlainText")," (",(0,o.kt)("inlineCode",{parentName:"h4"},"string"),")"),(0,o.kt)("p",{parentName:"li"},"Represents the hex-encoded plain text value that has been signed with the private key associated with the\nspecified ",(0,o.kt)("inlineCode",{parentName:"p"},"Address")," in order to generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"signature")," value."))),(0,o.kt)("h3",{id:"chainconfig-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"ChainConfig")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"Contains the details of the external chain to which the link is associated."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"name-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"Name")," (",(0,o.kt)("inlineCode",{parentName:"h4"},"string"),")"),"Represents the human-readable chain name.")),(0,o.kt)("h3",{id:"creationtime-time"},(0,o.kt)("inlineCode",{parentName:"h3"},"CreationTime")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"time"),")"),(0,o.kt)("p",null,"Represents the time in which the link has been created."),(0,o.kt)("h2",{id:"create-a-chain-link"},"Create a chain link"),(0,o.kt)("h3",{id:"1-create-the-ownership-proofs"},"1. Create the ownership proofs"),(0,o.kt)("p",null,"When creating a chain link, you need to provide two different proofs to make sure the link is valid:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The proof that you own the external chain account;"),(0,o.kt)("li",{parentName:"ol"},"The proof that you own the Desmos profile to which you want to link.")),(0,o.kt)("p",null,"In order to create a proof, the following steps are needed:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Get a generic plain text data to sign;"),(0,o.kt)("li",{parentName:"ol"},"Sign the plain text data using your private key;"),(0,o.kt)("li",{parentName:"ol"},"Assemble the signature, plain text and public key into a ",(0,o.kt)("inlineCode",{parentName:"li"},"Proof")," object.")),(0,o.kt)("p",null,"Here is an example of a valid proof object encoded using JSON:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "pub_key": {\n        "@type": "/cosmos.crypto.secp256k1.PubKey",\n        "key": "A58DXR/lXKVkIjLofXgST/OHi+pkOQbVIiOjnTy7Zoqo"\n    },\n    "signature": "ecc6175e730917fb289d3a9f4e49a5630a44b42d972f481342f540e09def2ec5169780d85c4e060d52cc3ffb3d677745a4d56cd385760735bc6db0f1816713be",\n    "plain_text": "cosmos15uc89vnzufu5kuhhsxdkltt38zfx8vcyggzwfm"\n}\n')),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"pub_key")," field must be encoded using Protobuf and must be compatible with the public key types that are\ncurrently supported by Cosmos. You can see a list of such key\ntypes ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/tree/master/proto/cosmos/crypto"},"here"),"."),(0,o.kt)("h3",{id:"2-create-the-link"},"2. Create the link"),(0,o.kt)("p",null,"Once you have created the two ownership proofs, you are now ready to create the link. This can be done in two ways:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#using-ibc"},"Using IBC"),";"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#using-the-cli"},"Using the CLI"),".")),(0,o.kt)("h4",{id:"using-ibc"},"Using IBC"),(0,o.kt)("p",null,"This is the way that you want to use when integrating the Desmos connection from your chain.",(0,o.kt)("br",{parentName:"p"}),"\n","To implement the IBC capability of connecting an external account to a Desmos profile, the ",(0,o.kt)("inlineCode",{parentName:"p"},"x/profiles")," module supports\nthe following packet data type:"),(0,o.kt)("h5",{id:"linkchainaccountpacketdata"},"LinkChainAccountPacketData"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LinkChainAccountPacketData")," defines the object that should be sent inside a\n",(0,o.kt)("inlineCode",{parentName:"p"},"MsgSendPacket")," when wanting to link an external chain to a Desmos profile using IBC."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-golang"},'type LinkChainAccountPacketData struct {\n\n    // SourceAddress contains the details of the external chain address\n    SourceAddress *types.Any `protobuf:"bytes,1,opt,name=source_address,json=sourceAddress,proto3" json:"source_address,omitempty" yaml:"source_address"`\n    \n    // SourceProof represents the proof of ownership of the source address\n    SourceProof Proof `protobuf:"bytes,2,opt,name=source_proof,json=sourceProof,proto3" json:"source_proof" yaml:"source_proof"`\n    \n    // SourceChainConfig contains the details of the source chain\n    SourceChainConfig ChainConfig `protobuf:"bytes,3,opt,name=source_chain_config,json=sourceChainConfig,proto3" json:"source_chain_config" yaml:"source_chain_config"`\n    \n    // DestinationAddress represents the Desmos address of the profile that should\n    // be linked with the external account\n    DestinationAddress string `protobuf:"bytes,4,opt,name=destination_address,json=destinationAddress,proto3" json:"destination_address,omitempty" yaml:"destination_address"`\n    \n    // DestinationProof contains the proof of ownership of the DestinationAddress\n    DestinationProof Proof `protobuf:"bytes,5,opt,name=destination_proof,json=destinationProof,proto3" json:"destination_proof" yaml:"destination_proof"`\n}\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Field"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"SourceAddress")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"AddressData")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Contains the details of the external address to be linked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"SourceProof")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"Proof")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Contains the data to verify the ownership of the external address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"SourceChainConfig")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"ChainConfig")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Contains the data of the external chain to be linked")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"DestinationAddress")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"string")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the profile to which link the external address")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"DestinationProof")),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"Proof")),(0,o.kt)("td",{parentName:"tr",align:"left"},"Proof of ownership of the Desmos profile")))),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceAddress")," field must be one of the currently supported types:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Base58Address")," if the external address is represented by the Base58 encoded public key of the account;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Bech32Address")," if the external address is Bech32 encoded.")),(0,o.kt)("p",null,"The overall view is the following:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"chain-link-ibc",src:n(2250).Z})),(0,o.kt)("h4",{id:"using-the-cli"},"Using the CLI"),(0,o.kt)("p",null,"You can easily create a chain link using the CLI by running two commands:"),(0,o.kt)("p",null,"1.",(0,o.kt)("inlineCode",{parentName:"p"},"desmos create-chain-link-json"),"\nThis will start an interactive prompt session allowing you to generate the proper JSON file containing all the linkage\ninformation."),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"desmos tx profiles link-chain [/path/to/link_file.json]"),"\nThis will effectively link your Desmos profile to the external chain address. The required argument is the (absolute)\npath to the file generated using the ",(0,o.kt)("inlineCode",{parentName:"li"},"create-chain-link-json")," command.")))}h.isMDXComponent=!0},2250:function(e,t,n){t.Z=n.p+"assets/images/desmos-chain-link-ibc-c0f1cea03d37eb943659246475fe9f58.png"}}]);