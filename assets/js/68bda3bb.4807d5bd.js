"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[32957],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34960:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={id:"link-application",title:"Link application",sidebar_label:"Link application",slug:"link-application"},l="MsgLinkApplication",o={unversionedId:"developers/transactions/profiles/link-application",id:"version-2.3/developers/transactions/profiles/link-application",title:"Link application",description:"This message allows you to start the process that will verify",source:"@site/versioned_docs/version-2.3/02-developers/03-transactions/profiles/link-application.md",sourceDirName:"02-developers/03-transactions/profiles",slug:"/developers/transactions/profiles/link-application",permalink:"/2.3/developers/transactions/profiles/link-application",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-2.3/02-developers/03-transactions/profiles/link-application.md",tags:[],version:"2.3",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"link-application",title:"Link application",sidebar_label:"Link application",slug:"link-application"},sidebar:"version-2.3/docs",previous:{title:"Unblock User",permalink:"/2.3/developers/transactions/profiles/unblock-user"},next:{title:"Unlink application",permalink:"/2.3/developers/transactions/profiles/unlink-application"}},p={},s=[{value:"Structure",id:"structure",level:2},{value:"Attributes",id:"attributes",level:3},{value:"Note",id:"note",level:4},{value:"Example",id:"example",level:2},{value:"Message action",id:"message-action",level:2}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"msglinkapplication"},(0,r.kt)("inlineCode",{parentName:"h1"},"MsgLinkApplication")),(0,r.kt)("p",null,"This message allows you to start the process that will verify\nan ",(0,r.kt)("a",{parentName:"p",href:"/2.3/developers/types/profiles/application-link#contained-data"},"application link")," and add it to your Desmos profile."),(0,r.kt)("h2",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgLinkApplication",\n  "link_data": {\n    "application": "<Name of the application to link>",\n    "username": "<Username of the application account to link>"\n  },\n  "call_data": "<Hex encoded call data for the data source>",\n  "source_channel": "<IBC channel to be used>",\n  "source_port": "<IBC port to be used>",\n  "sender": "<Desmos address of the profile to which link the application>"\n}\n')),(0,r.kt)("h3",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"link_data")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("a",{parentName:"td",href:"/2.3/developers/types/profiles/application-link#contained-data"},"Data")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Data of the link to be verified"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"call_data")),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Hex encoded data that will be sent to the data source to verify the link"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"source_channel")),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID of the IBC channel to be used in order to send the packet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"source_port")),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"ID of the IBC port to be used in order to send the packet"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"sender")),(0,r.kt)("td",{parentName:"tr",align:"center"},"String"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the profile to which the link will be associated"),(0,r.kt)("td",{parentName:"tr",align:"left"},"yes")))),(0,r.kt)("h4",{id:"note"},"Note"),(0,r.kt)("p",null,"You can also specify an optional timeout after which the request will be marked as invalid. This can be done using the\nappropriate fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"height")," (",(0,r.kt)("inlineCode",{parentName:"li"},"int64"),"), or"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout_timestamp")," (nanoseconds).")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.profiles.v1beta1.MsgLinkApplication",\n  "link_data": {\n    "application": "github",\n    "username": "RiccardoM"\n  },\n  "call_data": "7B22757365726E616D65223A22526963636172646F4D222C22676973745F6964223A223732306530303732333930613930316262383065353966643630643766646564227D",\n  "source_channel": "channel-0",\n  "source_port": "profiles",\n  "sender": "desmos1qchdngxk8zkl4c4mheqdlpgcegkdrtucmwllpx"\n} \n')),(0,r.kt)("h2",{id:"message-action"},"Message action"),(0,r.kt)("p",null,"The action associated to this message is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"link_application\n")))}d.isMDXComponent=!0}}]);