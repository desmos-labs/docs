"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[86827],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(r),m=o,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=c;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<s;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},90462:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var n=r(87462),o=r(63366),s=(r(67294),r(3905)),a=["components"],l={id:"state",title:"State",sidebar_label:"State",slug:"state"},i="State",p={unversionedId:"developers/modules/reports/state",id:"version-4.1.0/developers/modules/reports/state",title:"State",description:"Next Report ID",source:"@site/versioned_docs/version-4.1.0/02-developers/02-modules/reports/03-state.md",sourceDirName:"02-developers/02-modules/reports",slug:"/developers/modules/reports/state",permalink:"/developers/modules/reports/state",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/02-developers/02-modules/reports/03-state.md",tags:[],version:"4.1.0",lastUpdatedAt:1657817134,formattedLastUpdatedAt:"7/14/2022",sidebarPosition:3,frontMatter:{id:"state",title:"State",sidebar_label:"State",slug:"state"},sidebar:"docs",previous:{title:"Concepts",permalink:"/developers/modules/reports/concepts"},next:{title:"Messages",permalink:"/developers/modules/reports/messages"}},u={},d=[{value:"Next Report ID",id:"next-report-id",level:2},{value:"Report",id:"report",level:2},{value:"Posts Report",id:"posts-report",level:2},{value:"User Report",id:"user-report",level:2},{value:"Next Reason ID",id:"next-reason-id",level:2},{value:"Reason",id:"reason",level:2}],c={toc:d};function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"state"},"State"),(0,s.kt)("h2",{id:"next-report-id"},"Next Report ID"),(0,s.kt)("p",null,"The next report id is stored using the subspace id that it references as the key:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0x01 | Subspace ID | -> bytes(NextReportID)"))),(0,s.kt)("h2",{id:"report"},"Report"),(0,s.kt)("p",null,"A report is stored using the subspace id and its id combined as the key. This allows to easily query:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"all the reports of a subspace;"),(0,s.kt)("li",{parentName:"ul"},"a specific report in a subspace.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0x02 | Subspace ID | Report ID | -> ProtocolBuffer(Report)"))),(0,s.kt)("h2",{id:"posts-report"},"Posts Report"),(0,s.kt)("p",null,"A post report is stored using the combination of subspace id, post id and reporter address as the key. This allows to easily query all the reports towards a specific post."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0x03 | Subspace ID | Post ID | Reporter | -> bytes(ReportID)"))),(0,s.kt)("h2",{id:"user-report"},"User Report"),(0,s.kt)("p",null,"A user report is stored using the combination of subspace id, post id and reporter address as the key. This allows to easily query all the reports towards a specific user."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0x04 | Subspace ID | User | Reporter | -> bytes(ReportID)"))),(0,s.kt)("h2",{id:"next-reason-id"},"Next Reason ID"),(0,s.kt)("p",null,"The next reason id is stored using the subspace id that it references as the key:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"0x10 | Subspace ID | -> bytes(NextReasonID)"))),(0,s.kt)("h2",{id:"reason"},"Reason"),(0,s.kt)("p",null,"A reporting reason is stored using the subspace id and its own id as the key. This allows to easily query:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"all the reasons of a subspace;"),(0,s.kt)("li",{parentName:"ul"},"a specific reason in a subspace.")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Ox11 | Subspace ID | Reason ID | -> bytes(Reason)"))))}m.isMDXComponent=!0}}]);