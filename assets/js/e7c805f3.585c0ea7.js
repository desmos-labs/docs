"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[91095],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=i.createContext({}),c=function(t){var e=i.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=c(t.components);return i.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,_=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return n?i.createElement(_,r(r({ref:e},s),{},{components:n})):i.createElement(_,r({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},73342:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const o={id:"insert-application-link",title:"insert_application_link",hide_table_of_contents:!1},r=void 0,l={unversionedId:"graphql/mutations/insert-application-link",id:"graphql/mutations/insert-application-link",title:"insert_application_link",description:'insert data into the table: "application_link"',source:"@site/docs/07-graphql/mutations/insert-application-link.mdx",sourceDirName:"07-graphql/mutations",slug:"/graphql/mutations/insert-application-link",permalink:"/next/graphql/mutations/insert-application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/mutations/insert-application-link.mdx",tags:[],version:"current",lastUpdatedAt:1663255817,formattedLastUpdatedAt:"Sep 15, 2022",frontMatter:{id:"insert-application-link",title:"insert_application_link",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"insert_application_link_oracle_request",permalink:"/next/graphql/mutations/insert-application-link-oracle-request"},next:{title:"insert_block_one",permalink:"/next/graphql/mutations/insert-block-one"}},p={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>objects</code> (<code>[application_link_insert_input!]!</code>)",id:"objects-application_link_insert_input",level:4},{value:"<code>on_conflict</code> (<code>application_link_on_conflict</code>)",id:"on_conflict-application_link_on_conflict",level:4},{value:"Type",id:"type",level:3},{value:"<code>application_link_mutation_response</code>",id:"application_link_mutation_response",level:4}],s={toc:c};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,i.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,'insert data into the table: "application_link"'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"insert_application_link(\n  objects: [application_link_insert_input!]!\n  on_conflict: application_link_on_conflict\n): application_link_mutation_response\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"objects-application_link_insert_input"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"objects"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-insert-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[application_link_insert_input!]!")),")"),(0,a.kt)("p",null,"the rows to be inserted"),(0,a.kt)("h4",{id:"on_conflict-application_link_on_conflict"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("inlineCode",{parentName:"a"},"on_conflict"))," (",(0,a.kt)("a",{parentName:"h4",href:"../inputs/application-link-on-conflict"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_on_conflict")),")"),(0,a.kt)("p",null,"on conflict condition"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"application_link_mutation_response"},(0,a.kt)("a",{parentName:"h4",href:"../objects/application-link-mutation-response"},(0,a.kt)("inlineCode",{parentName:"a"},"application_link_mutation_response"))),(0,a.kt)("p",null,'response of any mutation on the table "application_link"'))}u.isMDXComponent=!0}}]);