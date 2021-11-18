"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[3886],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2035:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],l={id:"profile",title:"Profile",sidebar_label:"Profile",slug:"profile"},c="Profile",s={unversionedId:"developers/types/profiles/profile",id:"version-mainnet/developers/types/profiles/profile",isDocsHomePage:!1,title:"Profile",description:"Inside Desmos, profile are the way that users could register their own identity.",source:"@site/versioned_docs/version-mainnet/02-developers/02-types/profiles/profile.md",sourceDirName:"02-developers/02-types/profiles",slug:"/developers/types/profiles/profile",permalink:"/developers/types/profiles/profile",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/02-developers/02-types/profiles/profile.md",version:"mainnet",lastUpdatedAt:1637233457,formattedLastUpdatedAt:"11/18/2021",frontMatter:{id:"profile",title:"Profile",sidebar_label:"Profile",slug:"profile"},sidebar:"version-mainnet/docs",previous:{title:"Overview",permalink:"/developers/overview"},next:{title:"Profile pictures",permalink:"/developers/types/profiles/profile-pictures"}},p=[{value:"Contained data",id:"contained-data",children:[{value:"<code>DTag</code> (<code>string</code>)",id:"dtag-string",children:[]},{value:"<code>Nickname</code> (<code>string</code>)",id:"nickname-string",children:[]},{value:"<code>Bio</code> (<code>string</code>)",id:"bio-string",children:[]},{value:"<code>Pictures</code> (<code>object</code>)",id:"pictures-object",children:[]},{value:"<code>Account</code> (<code>object</code>)",id:"account-object",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"profile"},"Profile"),(0,o.kt)("p",null,"Inside Desmos, profile are the way that users could register their own identity."),(0,o.kt)("p",null,"Since this is a decentralized profile, every data inside it can be omitted except for the ",(0,o.kt)("inlineCode",{parentName:"p"},"DTag")," which could be used\nto identify a desmos ",(0,o.kt)("inlineCode",{parentName:"p"},"bech32addr")," once the profile is created. "),(0,o.kt)("p",null,"Profile can be enriched with some of your personal data that could be verified later on chain by providing\nsome additional information."),(0,o.kt)("h2",{id:"contained-data"},"Contained data"),(0,o.kt)("p",null,"A profile contains different fields. Most of them are optional and can be edited."),(0,o.kt)("h3",{id:"dtag-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"DTag")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DTag")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," of min ",(0,o.kt)("inlineCode",{parentName:"p"},"6")," and max ",(0,o.kt)("inlineCode",{parentName:"p"},"30")," characters that uniquely identifies the user.\nIn order to be valid it needs to match the following RegEx:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"^[A-Za-z0-9_]+$\n")),(0,o.kt)("h3",{id:"nickname-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"Nickname")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Nickname")," represents the name of the user.\nIt can be either a combination of first, second and last name, or a completely invented name.\nAlthough we always suggest setting one, this field is completely optional.\nIf specified, it has to be at least of ",(0,o.kt)("inlineCode",{parentName:"p"},"2")," characters long."),(0,o.kt)("h3",{id:"bio-string"},(0,o.kt)("inlineCode",{parentName:"h3"},"Bio")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Bio")," contains the biography of the user. It can be at most ",(0,o.kt)("inlineCode",{parentName:"p"},"1000")," characters long."),(0,o.kt)("h3",{id:"pictures-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"Pictures")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/developers/types/profiles/profile-pictures"},"Pictures")," contains the pictures of the profile."),(0,o.kt)("h3",{id:"account-object"},(0,o.kt)("inlineCode",{parentName:"h3"},"Account")," (",(0,o.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Account")," represents the base Cosmos account associated with the profile and contains information\nsuch as the user's Bech32 address, public key etc..."))}u.isMDXComponent=!0}}]);