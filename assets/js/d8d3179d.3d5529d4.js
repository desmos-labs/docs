"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[57114],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),l=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),c=a,g=p["".concat(m,".").concat(c)]||p[c]||d[c]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},14024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="KMS - Key Management System",s={unversionedId:"mainnet/kms/kms",id:"version-2.3/mainnet/kms/kms",title:"KMS - Key Management System",description:"Tendermint KMS is a key management sytem that allows separating",source:"@site/versioned_docs/version-2.3/06-mainnet/kms/kms.md",sourceDirName:"06-mainnet/kms",slug:"/mainnet/kms/",permalink:"/2.3/mainnet/kms/",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/06-mainnet/kms/kms.md",tags:[],version:"2.3",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{}},m={},l=[{value:"Building",id:"building",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Using a YubiHSM",id:"using-a-yubihsm",level:3},{value:"Using a Ledger device running the Tendermint app",id:"using-a-ledger-device-running-the-tendermint-app",level:3},{value:"Using the Softsign feature with tmkms",id:"using-the-softsign-feature-with-tmkms",level:3}],u={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kms---key-management-system"},"KMS - Key Management System"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms"},"Tendermint KMS")," is a key management sytem that allows separating\nkey management from Tendermint nodes. In addition, it provides other advantages such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Improved security and risk management policies"),(0,a.kt)("li",{parentName:"ul"},"Unified API and support for various HSM (hardware security modules)"),(0,a.kt)("li",{parentName:"ul"},"Double signing protection (software or hardware based)")),(0,a.kt)("p",null,"It is recommended that the KMS service runs in a separate physical hosts."),(0,a.kt)("h2",{id:"building"},"Building"),(0,a.kt)("p",null,"Detailed build instructions can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms#installation"},"here"),"."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"When compiling the KMS, ensure you have enabled the applicable features:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Backend"),(0,a.kt)("th",{parentName:"tr",align:null},"Recommended Command line"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"YubiHSM"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cargo build --features yubihsm"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Ledger+Tendermint App"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cargo build --features ledgertm"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Softsign (software-only)"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cargo build --features softsign"))))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"A KMS can be configured in various ways:"),(0,a.kt)("h3",{id:"using-a-yubihsm"},"Using a YubiHSM"),(0,a.kt)("p",null,"Detailed information on how to setup a KMS with YubiHSM2 can be\nfound ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iqlusioninc/tmkms/blob/main/README.yubihsm.md"},"here")),(0,a.kt)("h3",{id:"using-a-ledger-device-running-the-tendermint-app"},"Using a Ledger device running the Tendermint app"),(0,a.kt)("p",null,"Detailed information on how to setup a KMS with Ledger Tendermint App can be found ",(0,a.kt)("a",{parentName:"p",href:"/2.3/mainnet/kms/kms_ledger"},"here")),(0,a.kt)("h3",{id:"using-the-softsign-feature-with-tmkms"},"Using the Softsign feature with tmkms"),(0,a.kt)("p",null,"Softsign is not recommended for production.",(0,a.kt)("br",{parentName:"p"}),"\n","Otherwise, it could be a good way in order to become familiar with the tendermint kms\nand understand the concepts behind it.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"/2.3/mainnet/kms/kms_softsign"},"Here")," you can find out how to setup it (e.g in a testnet)."))}d.isMDXComponent=!0}}]);