"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[15626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var d=2;d<o;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},14545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const o={id:"ante-handlers",title:"Ante Handlers",sidebar_label:"Ante Handlers",slug:"ante-handlers"},s="Ante Handlers",l={unversionedId:"developers/modules/fees/ante-handlers",id:"developers/modules/fees/ante-handlers",title:"Ante Handlers",description:"The fees module presently has no transaction handlers of its own, but does expose the special AnteHandler, used for performing a validity check on a transaction, such that it could be thrown out of the mempool.",source:"@site/docs/02-developers/02-modules/fees/04-ante-handlers.md",sourceDirName:"02-developers/02-modules/fees",slug:"/developers/modules/fees/ante-handlers",permalink:"/next/developers/modules/fees/ante-handlers",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/fees/04-ante-handlers.md",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",sidebarPosition:4,frontMatter:{id:"ante-handlers",title:"Ante Handlers",sidebar_label:"Ante Handlers",slug:"ante-handlers"},sidebar:"docs",previous:{title:"State",permalink:"/next/developers/modules/fees/state"},next:{title:"Parameters",permalink:"/next/developers/modules/fees/params"}},i={},d=[{value:"Decorators",id:"decorators",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ante-handlers"},"Ante Handlers"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"fees")," module presently has no transaction handlers of its own, but does expose the special ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteHandler"),", used for performing a validity check on a transaction, such that it could be thrown out of the mempool.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteHandler")," can be seen as a set of decorators that check transactions within the current context, per ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/cosmos-sdk/blob/v0.43.0-alpha1/docs/architecture/adr-010-modular-antehandler.md"},"ADR 010"),"."),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteHandler")," is called on both ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckTx")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"DeliverTx"),", as Tendermint proposers presently have the ability to include in their proposed block transactions which fail ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckTx"),"."),(0,a.kt)("h2",{id:"decorators"},"Decorators"),(0,a.kt)("p",null,"The fees module provides the following ",(0,a.kt)("inlineCode",{parentName:"p"},"AnteDecorator"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"MinFeeDecorator"),": Checks if the ",(0,a.kt)("inlineCode",{parentName:"li"},"tx")," fee is greater or equal to the minimum fee amount computed looking the messages present inside the transaction itself.")))}p.isMDXComponent=!0}}]);