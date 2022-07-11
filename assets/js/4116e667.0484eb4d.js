"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[86494],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return u}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},c=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=d(t),u=a,g=f["".concat(l,".").concat(u)]||f[u]||p[u]||o;return t?n.createElement(g,s(s({ref:r},c),{},{components:t})):n.createElement(g,s({ref:r},c))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=t[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},19903:function(e,r,t){t.r(r),t.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return p}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={id:"dtag-transfer-requests",title:"dtag_transfer_requests",hide_table_of_contents:!1},l=void 0,d={unversionedId:"graphql/objects/dtag-transfer-requests",id:"graphql/objects/dtag-transfer-requests",title:"dtag_transfer_requests",description:'columns and relationships of "dtagtransferrequests"',source:"@site/docs/07-graphql/objects/dtag-transfer-requests.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/dtag-transfer-requests",permalink:"/next/graphql/objects/dtag-transfer-requests",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/dtag-transfer-requests.mdx",tags:[],version:"current",lastUpdatedAt:1657531086,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"dtag-transfer-requests",title:"dtag_transfer_requests",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link",permalink:"/next/graphql/objects/chain-link"},next:{title:"poll_answer_aggregate_fields",permalink:"/next/graphql/objects/poll-answer-aggregate-fields"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>profile</code> (<code>profile!</code>)",id:"profile-profile",level:4},{value:"<code>profileBySenderAddress</code> (<code>profile!</code>)",id:"profilebysenderaddress-profile",level:4},{value:"<code>receiver_address</code> (<code>String!</code>)",id:"receiver_address-string",level:4},{value:"<code>sender_address</code> (<code>String!</code>)",id:"sender_address-string",level:4}],f={toc:p};function u(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'columns and relationships of "dtag_transfer_requests"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type dtag_transfer_requests {\n  profile: profile!\n  profileBySenderAddress: profile!\n  receiver_address: String!\n  sender_address: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"profile-profile"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,o.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,o.kt)("p",null,"An object relationship"),(0,o.kt)("h4",{id:"profilebysenderaddress-profile"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"profileBySenderAddress"))," (",(0,o.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,o.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,o.kt)("p",null,"An object relationship"),(0,o.kt)("h4",{id:"receiver_address-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"receiver_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"sender_address-string"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("inlineCode",{parentName:"a"},"sender_address"))," (",(0,o.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"))}u.isMDXComponent=!0}}]);