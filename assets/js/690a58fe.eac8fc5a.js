"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[4844],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,g=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,s[1]=p;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1080:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],p={},i="MsgReportPost",l={unversionedId:"developers/transactions/staging/posts/report-post",id:"version-mainnet/developers/transactions/staging/posts/report-post",isDocsHomePage:!1,title:"MsgReportPost",description:"This message allows you to report a post. If you want to know more about the Report type, you can do so inside",source:"@site/versioned_docs/version-mainnet/02-developers/03-transactions/staging/posts/report-post.md",sourceDirName:"02-developers/03-transactions/staging/posts",slug:"/developers/transactions/staging/posts/report-post",permalink:"/developers/transactions/staging/posts/report-post",editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-mainnet/02-developers/03-transactions/staging/posts/report-post.md",version:"mainnet",lastUpdatedAt:1638520783,formattedLastUpdatedAt:"12/3/2021",frontMatter:{}},c=[{value:"Structure",id:"structure",children:[{value:"Attributes",id:"attributes",children:[]}]},{value:"Example",id:"example",children:[]},{value:"Message action",id:"message-action",children:[]}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"msgreportpost"},(0,o.kt)("inlineCode",{parentName:"h1"},"MsgReportPost")),(0,o.kt)("p",null,"This message allows you to report a post. If you want to know more about the ",(0,o.kt)("inlineCode",{parentName:"p"},"Report")," type, you can do so inside\nthe ",(0,o.kt)("a",{parentName:"p",href:"/developers/types/staging/posts/report"},(0,o.kt)("inlineCode",{parentName:"a"},"Report")," type documentation page"),"."),(0,o.kt)("h2",{id:"structure"},"Structure"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.reports.v1beta1.MsgReportPost",\n  "post_id": "<ID of the post to report>",\n  "report": {\n    "type": "<Report\'s type>",\n    "message": "<Report\'s message>",\n    "user": "<Desmos address that\'s creating the post>"\n  }\n}\n')),(0,o.kt)("h3",{id:"attributes"},"Attributes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Attribute"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"post_id")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"ID of the post to report")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Type of the report")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"message")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Message of the report")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("inlineCode",{parentName:"td"},"user")),(0,o.kt)("td",{parentName:"tr",align:"center"},"String"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Desmos address of the user that is reporting the post.")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"type")," field will only accept the following values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"nudity",  \n"violence",  \n"intimidation",  \n"suicide or self-harm",  \n"fake news",  \n"spam",  \n"unauthorized sale",  \n"hatred incitement",  \n"promotion of drug use",  \n"non-consensual intimate images",  \n"pornography",  \n"children abuse",  \n"animals abuse",  \n"bullying",  \n"scam" \n')),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "@type": "/desmos.reports.v1beta1.MsgReportPost",\n  "post_id": "301921ac3c8e623d8f35aef1886fea20849e49f08ec8ddfdd9b96feaf0c4fd15",\n  "report": {\n    "type": "scam",\n    "message": "it\'s a trap",\n    "user": "desmos1jnntz0xrql68mhjjsp82nlj9jrhgzc9t2ydtd5"\n  }\n}\n')),(0,o.kt)("h2",{id:"message-action"},"Message action"),(0,o.kt)("p",null,"The action associated to this message is the following: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"report_post\n")))}u.isMDXComponent=!0}}]);