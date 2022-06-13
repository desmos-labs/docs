"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[6370],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3071:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"unlink-chain-account",title:"Unlink chain account",sidebar_label:"Unlink chain account",slug:"unlink-chain-account"},c="MsgUnlinkChainAccount",s={unversionedId:"developers/transactions/profiles/unlink-chain-account",id:"version-3/developers/transactions/profiles/unlink-chain-account",title:"Unlink chain account",description:"This message allows you to remove a previously linked chain address from your Desmos profile.",source:"@site/versioned_docs/version-3/02-developers/03-transactions/profiles/unlink-chain-account.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/unlink-chain-account",permalink:"/developers/transactions/profiles/unlink-chain-account",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/03-transactions/profiles/unlink-chain-account.md",tags:[],version:"3",lastUpdatedAt:1655125428,formattedLastUpdatedAt:"6/13/2022",frontMatter:{id:"unlink-chain-account",title:"Unlink chain account",sidebar_label:"Unlink chain account",slug:"unlink-chain-account"},sidebar:"version-3/docs",previous:{title:"Link chain account",permalink:"/developers/transactions/profiles/link-chain-account"},next:{title:"Create Relationship",permalink:"/developers/transactions/relationships/create-relationship"}},p={},u=[{value:"Attributes",id:"attributes",level:3},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"msgunlinkchainaccount"},(0,i.kt)("inlineCode",{parentName:"h1"},"MsgUnlinkChainAccount")),(0,i.kt)("p",null,"This message allows you to remove a previously linked chain address from your Desmos profile."),(0,i.kt)("h3",{id:"attributes"},"Attributes"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"target")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"External address that should be unlinked"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"chain_name")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Name of the target external chain to unlink"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"owner")),(0,i.kt)("td",{parentName:"tr",align:"center"},"String"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the profile that should remove the link"),(0,i.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v2.MsgUnlinkChain",\n  "target": "cosmos13j7p6faa9jr8ty6lvqv0prldprr6m5xenmafnt",\n  "chain_name": "cosmos",\n  "owner": "desmos1qchdngxk8zkl4c4mheqdlpgcegkdrtucmwllpx"\n}\n')),(0,i.kt)("h2",{id:"message-action"},"Message action"),(0,i.kt)("p",null,"The action associated to this message is the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"unlink_chain_account\n")))}m.isMDXComponent=!0}}]);