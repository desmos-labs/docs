"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[21649],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(i,".").concat(d)]||c[d]||u[d]||o;return n?r.createElement(f,l(l({ref:t},m),{},{components:n})):r.createElement(f,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},52562:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],s={id:"params",title:"Parameters",sidebar_label:"Parameters",slug:"params"},i="Parameters",p={unversionedId:"developers/modules/fees/params",id:"developers/modules/fees/params",title:"Parameters",description:"The fees module contains the following parameters:",source:"@site/docs/02-developers/02-modules/fees/05-params.md",sourceDirName:"02-developers/02-modules/fees",slug:"/developers/modules/fees/params",permalink:"/next/developers/modules/fees/params",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/02-developers/02-modules/fees/05-params.md",tags:[],version:"current",lastUpdatedAt:1657817134,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:5,frontMatter:{id:"params",title:"Parameters",sidebar_label:"Parameters",slug:"params"},sidebar:"docs",previous:{title:"Ante Handlers",permalink:"/next/developers/modules/fees/ante-handlers"},next:{title:"Client",permalink:"/next/developers/modules/fees/client"}},m={},u=[{value:"MinFees",id:"minfees",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"The fees module contains the following parameters:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MinFees"),(0,o.kt)("td",{parentName:"tr",align:null},"[]MinFee"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},'[{ "message_type": "/desmos.profiles.v2.SaveProfile", "amount": [ { "amount": "100", "denom": "tokenA" } ] }]'))))),(0,o.kt)("h2",{id:"minfees"},"MinFees"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"MinFees")," is an array of ",(0,o.kt)("inlineCode",{parentName:"p"},"MinFee")," object, each one made of two different fields: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"MessageType")," (string), representing the type url of the message which the min fees refer to "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Amount")," (",(0,o.kt)("inlineCode",{parentName:"li"},"[]Coin"),"), representing the amount of min fees associated with the message")),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"MinFees"),", there can only be a single entry for each ",(0,o.kt)("inlineCode",{parentName:"p"},"MessageType"),"."))}d.isMDXComponent=!0}}]);