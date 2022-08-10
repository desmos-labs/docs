"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[17262],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),k=s(i),h=a,m=k["".concat(p,".").concat(h)]||k[h]||d[h]||r;return i?n.createElement(m,l(l({ref:t},c),{},{components:i})):n.createElement(m,l({ref:t},c))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=i[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}k.displayName="MDXCreateElement"},41609:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const r={id:"application-link",title:"Application link",sidebar_label:"Application link",slug:"application-link"},l="Application link",o={unversionedId:"developers/types/profiles/application-link",id:"version-3/developers/types/profiles/application-link",title:"Application link",description:"An application link (abbr. app link) represents a link to an external (and possibly centralized) application.",source:"@site/versioned_docs/version-3/02-developers/02-types/profiles/application-link.md",sourceDirName:"02-developers/02-types/profiles",slug:"/developers/types/profiles/application-link",permalink:"/3/developers/types/profiles/application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-3/02-developers/02-types/profiles/application-link.md",tags:[],version:"3",lastUpdatedAt:1660121663,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"application-link",title:"Application link",sidebar_label:"Application link",slug:"application-link"},sidebar:"version-3/docs",previous:{title:"DTag transfer request",permalink:"/3/developers/types/profiles/dtag-transfer-request"},next:{title:"Chain link",permalink:"/3/developers/types/profiles/chain-link"}},p={},s=[{value:"Attributes",id:"attributes",level:2},{value:"<code>User</code> (<code>string</code>)",id:"user-string",level:3},{value:"<code>Data</code> (<code>object</code>)",id:"data-object",level:3},{value:"<code>State</code> (<code>object</code>)",id:"state-object",level:3},{value:"<code>OracleRequest</code> (<code>object</code>)",id:"oraclerequest-object",level:3},{value:"<code>Result</code> (<code>object</code>)",id:"result-object",level:3},{value:"<code>CreationTime</code> (<code>time</code>)",id:"creationtime-time",level:3},{value:"Create an application link",id:"create-an-application-link",level:2}],c={toc:s};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"application-link"},"Application link"),(0,a.kt)("p",null,"An application link (abbr. ",(0,a.kt)("em",{parentName:"p"},"app link"),") represents a link to an external (and possibly centralized) application."),(0,a.kt)("h2",{id:"attributes"},"Attributes"),(0,a.kt)("p",null,"Here follows the data of an application link."),(0,a.kt)("h3",{id:"user-string"},(0,a.kt)("inlineCode",{parentName:"h3"},"User")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"string"),")"),(0,a.kt)("p",null,"Address of the Desmos profile to which the link is associated. "),(0,a.kt)("h3",{id:"data-object"},(0,a.kt)("inlineCode",{parentName:"h3"},"Data")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,a.kt)("p",null,"It contains the link details:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"application-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"Application")," (",(0,a.kt)("inlineCode",{parentName:"h4"},"string"),")"),(0,a.kt)("p",{parentName:"li"},"Name of the application to which the link refers to (eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"twitter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"github"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"reddit"),", etc). ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"username-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"Username")," (",(0,a.kt)("inlineCode",{parentName:"h4"},"string"),")"),(0,a.kt)("p",{parentName:"li"},"Identifier of the application account which the link refers to (eg. Twitter username, GitHub profile, Reddit username, etc)."))),(0,a.kt)("h3",{id:"state-object"},(0,a.kt)("inlineCode",{parentName:"h3"},"State")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,a.kt)("p",null,"Representation of the current state of the link.",(0,a.kt)("br",{parentName:"p"}),"\n","There can be five different states in which a link can be: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED")," if the link has just been created, and it still needs to be processed; "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_VERIFICATION_STARTED")," if the verification process has started; "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_VERIFICATION_ERROR")," if the verification process ended with an error; "),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_VERIFICATION_SUCCESS")," if the verification process ended with success;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"APPLICATION_LINK_STATE_TIMED_OUT")," if the verification process expired due to a timeout. ")),(0,a.kt)("h3",{id:"oraclerequest-object"},(0,a.kt)("inlineCode",{parentName:"h3"},"OracleRequest")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"OracleRequest")," field contains all the data that has been sent to the oracle script in order to verify the authenticity of the link. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"id-int64"},(0,a.kt)("inlineCode",{parentName:"h4"},"ID")," (",(0,a.kt)("inlineCode",{parentName:"h4"},"int64"),")"),(0,a.kt)("p",{parentName:"li"},"This is the unique id of the request that has been made to verify the link. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"oraclescriptid-int64"},(0,a.kt)("inlineCode",{parentName:"h4"},"OracleScriptID")," (",(0,a.kt)("inlineCode",{parentName:"h4"},"int64"),")"),(0,a.kt)("p",{parentName:"li"},"A unique id of the script that has been called to verify the authenticity of the link. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"calldata-object"},(0,a.kt)("inlineCode",{parentName:"h4"},"CallData")," (",(0,a.kt)("inlineCode",{parentName:"h4"},"object"),")"),(0,a.kt)("p",{parentName:"li"},"Contains the details of the data that will be used to call the oracle script. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"application-string-1"},(0,a.kt)("inlineCode",{parentName:"h5"},"Application")," (",(0,a.kt)("inlineCode",{parentName:"h5"},"string"),")"),(0,a.kt)("p",{parentName:"li"},"Name of the application for which the link is valid (eg. ",(0,a.kt)("inlineCode",{parentName:"p"},"twitter"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"github"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"reddit"),", etc). ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"calldata-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"CallData")," (",(0,a.kt)("inlineCode",{parentName:"h5"},"string"),")"),(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CallData")," field represents the hex-encoded data that will be given to the data source in order to fetch and verify the validity of the link. ")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"clientid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"ClientID")," (",(0,a.kt)("inlineCode",{parentName:"h4"},"string"),")"),(0,a.kt)("p",{parentName:"li"},"  ID of the client that has performed the request."))),(0,a.kt)("h3",{id:"result-object"},(0,a.kt)("inlineCode",{parentName:"h3"},"Result")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"object"),")"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," field contains the effective result of the verification process. This is set only if the link state is either ",(0,a.kt)("inlineCode",{parentName:"p"},"APPLICATION_LINK_STATE_VERIFICATION_SUCCESS")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"APPLICATION_LINK_STATE_VERIFICATION_ERROR"),". "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Result")," field can be of two types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"result_success-object"},(0,a.kt)("inlineCode",{parentName:"h4"},"Result_Success")," (",(0,a.kt)("inlineCode",{parentName:"h4"},"object"),")"),(0,a.kt)("p",{parentName:"li"},"Represents a successful result. It contains two fields: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"value-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"Value")," (",(0,a.kt)("inlineCode",{parentName:"h5"},"string"),")"),(0,a.kt)("p",{parentName:"li"},"Plain text value that has been signed from the user with their Desmos private key to prove the ownership of the Desmos profile. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"signature-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"Signature")," (",(0,a.kt)("inlineCode",{parentName:"h5"},"string"),")"),(0,a.kt)("p",{parentName:"li"},"Hex-encoded result of the plain text value signature. ")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h4",{parentName:"li",id:"result_failed-object"},(0,a.kt)("inlineCode",{parentName:"h4"},"Result_Failed")," (",(0,a.kt)("inlineCode",{parentName:"h4"},"object"),")"),(0,a.kt)("p",{parentName:"li"},"Identifies an error during the verification process. It contains only one field:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h5",{parentName:"li",id:"error-string"},(0,a.kt)("inlineCode",{parentName:"h5"},"Error")," (",(0,a.kt)("inlineCode",{parentName:"h5"},"string"),")"),"Represents the description of the error that has been emitted during the verification process.")))),(0,a.kt)("h3",{id:"creationtime-time"},(0,a.kt)("inlineCode",{parentName:"h3"},"CreationTime")," (",(0,a.kt)("inlineCode",{parentName:"h3"},"time"),")"),(0,a.kt)("p",null,"Contains the time at which the link has been created. "),(0,a.kt)("h2",{id:"create-an-application-link"},"Create an application link"),(0,a.kt)("p",null,"Application links can be created by any user having a Desmos profile, and their validity is checked using a multi-step verification process described inside the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/desmos-labs/themis"},(0,a.kt)("em",{parentName:"a"},'"Themis"')," repository"),"."))}d.isMDXComponent=!0}}]);