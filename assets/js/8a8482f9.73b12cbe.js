"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[66133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,s=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(n),m=l,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return n?r.createElement(f,a(a({ref:t},d),{},{components:n})):r.createElement(f,a({ref:t},d))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=n.length,a=new Array(s);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var i=2;i<s;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},97511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>i});var r=n(87462),l=(n(67294),n(3905));const s={id:"order-by",title:"order_by",hide_table_of_contents:!1},a=void 0,o={unversionedId:"graphql/enums/order-by",id:"version-4.1.0/graphql/enums/order-by",title:"order_by",description:"column ordering options",source:"@site/versioned_docs/version-4.1.0/07-graphql/enums/order-by.mdx",sourceDirName:"07-graphql/enums",slug:"/graphql/enums/order-by",permalink:"/4.1.0/graphql/enums/order-by",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/enums/order-by.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"order-by",title:"order_by",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"dtag_transfer_requests_select_column",permalink:"/4.1.0/graphql/enums/dtag-transfer-requests-select-column"},next:{title:"poll_answer_select_column",permalink:"/4.1.0/graphql/enums/poll-answer-select-column"}},c={},i=[{value:"Values",id:"values",level:3},{value:"<code>asc</code>",id:"asc",level:4},{value:"<code>asc_nulls_first</code>",id:"asc_nulls_first",level:4},{value:"<code>asc_nulls_last</code>",id:"asc_nulls_last",level:4},{value:"<code>desc</code>",id:"desc",level:4},{value:"<code>desc_nulls_first</code>",id:"desc_nulls_first",level:4},{value:"<code>desc_nulls_last</code>",id:"desc_nulls_last",level:4}],d={toc:i};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"column ordering options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum order_by {\n  asc\n  asc_nulls_first\n  asc_nulls_last\n  desc\n  desc_nulls_first\n  desc_nulls_last\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"asc"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"asc"))),(0,l.kt)("p",null,"in ascending order, nulls last"),(0,l.kt)("h4",{id:"asc_nulls_first"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"asc_nulls_first"))),(0,l.kt)("p",null,"in ascending order, nulls first"),(0,l.kt)("h4",{id:"asc_nulls_last"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"asc_nulls_last"))),(0,l.kt)("p",null,"in ascending order, nulls last"),(0,l.kt)("h4",{id:"desc"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"desc"))),(0,l.kt)("p",null,"in descending order, nulls first"),(0,l.kt)("h4",{id:"desc_nulls_first"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"desc_nulls_first"))),(0,l.kt)("p",null,"in descending order, nulls first"),(0,l.kt)("h4",{id:"desc_nulls_last"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("inlineCode",{parentName:"a"},"desc_nulls_last"))),(0,l.kt)("p",null,"in descending order, nulls last"))}u.isMDXComponent=!0}}]);