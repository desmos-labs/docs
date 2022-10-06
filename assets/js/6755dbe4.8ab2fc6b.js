"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[94138],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=s,_=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?n.createElement(_,o(o({ref:t},c),{},{components:r})):n.createElement(_,o({ref:t},c))}));function f(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,o=new Array(a);o[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6703:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),s=(r(67294),r(3905));const a={id:"insert-dtag-transfer-requests",title:"insert_dtag_transfer_requests",hide_table_of_contents:!1},o=void 0,i={unversionedId:"graphql/mutations/insert-dtag-transfer-requests",id:"graphql/mutations/insert-dtag-transfer-requests",title:"insert_dtag_transfer_requests",description:'insert data into the table: "dtagtransferrequests"',source:"@site/docs/07-graphql/mutations/insert-dtag-transfer-requests.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-dtag-transfer-requests",permalink:"/next/graphql/mutations/insert-dtag-transfer-requests",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-dtag-transfer-requests.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"insert-dtag-transfer-requests",title:"insert_dtag_transfer_requests",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_dtag_transfer_requests_one",permalink:"/next/graphql/mutations/insert-dtag-transfer-requests-one"},next:{title:"insert_poll_answer_one",permalink:"/next/graphql/mutations/insert-poll-answer-one"}},u={},l=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[dtag_transfer_requests_insert_input!]!</code>)",id:"objects-dtag_transfer_requests_insert_input",level:4},{value:"<code>on_conflict</code> (<code>dtag_transfer_requests_on_conflict</code>)",id:"on_conflict-dtag_transfer_requests_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>dtag_transfer_requests_mutation_response</code>",id:"dtag_transfer_requests_mutation_response",level:4}],c={toc:l};function d(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'insert data into the table: "dtag_transfer_requests"'),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_dtag_transfer_requests(\n  objects: [dtag_transfer_requests_insert_input!]!\n  on_conflict: dtag_transfer_requests_on_conflict\n): dtag_transfer_requests_mutation_response\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"objects-dtag_transfer_requests_insert_input"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-insert-input"},(0,s.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_insert_input!]!")),")"),(0,s.kt)("p",null,"the rows to be inserted"),(0,s.kt)("h4",{id:"on_conflict-dtag_transfer_requests_on_conflict"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-on-conflict"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_on_conflict")),")"),(0,s.kt)("p",null,"on conflict condition"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"dtag_transfer_requests_mutation_response"},(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests-mutation-response"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_mutation_response"))),(0,s.kt)("p",null,'response of any mutation on the table "dtag_transfer_requests"'))}d.isMDXComponent=!0}}]);