"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[49466],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),f=a,_=p["".concat(l,".").concat(f)]||p[f]||c[f]||s;return r?n.createElement(_,o(o({ref:t},u),{},{components:r})):n.createElement(_,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},56516:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return c}});var n=r(87462),a=r(63366),s=(r(67294),r(3905)),o=["components"],i={id:"dtag-transfer-requests",title:"dtag_transfer_requests",hide_table_of_contents:!1},l=void 0,d={unversionedId:"graphql/queries/dtag-transfer-requests",id:"version-4.1.0/graphql/queries/dtag-transfer-requests",title:"dtag_transfer_requests",description:"An array relationship",source:"@site/versioned_docs/version-4.1.0/07-graphql/queries/dtag-transfer-requests.mdx",sourceDirName:"07-graphql/queries",slug:"/graphql/queries/dtag-transfer-requests",permalink:"/graphql/queries/dtag-transfer-requests",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/versioned_docs/version-4.1.0/07-graphql/queries/dtag-transfer-requests.mdx",tags:[],version:"4.1.0",lastUpdatedAt:1657817134,formattedLastUpdatedAt:"7/14/2022",frontMatter:{id:"dtag-transfer-requests",title:"dtag_transfer_requests",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"chain_link",permalink:"/graphql/queries/chain-link"},next:{title:"poll_answer_aggregate",permalink:"/graphql/queries/poll-answer-aggregate"}},u={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[dtag_transfer_requests_select_column!]</code>)",id:"distinct_on-dtag_transfer_requests_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[dtag_transfer_requests_order_by!]</code>)",id:"order_by-dtag_transfer_requests_order_by",level:4},{value:"<code>where</code> (<code>dtag_transfer_requests_bool_exp</code>)",id:"where-dtag_transfer_requests_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>dtag_transfer_requests</code>",id:"dtag_transfer_requests",level:4}],p={toc:c};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"An array relationship"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"dtag_transfer_requests(\n  distinct_on: [dtag_transfer_requests_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [dtag_transfer_requests_order_by!]\n  where: dtag_transfer_requests_bool_exp\n): [dtag_transfer_requests!]!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"distinct_on-dtag_transfer_requests_select_column"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,s.kt)("a",{parentName:"h4",href:"../enums/dtag-transfer-requests-select-column"},(0,s.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_select_column!]")),")"),(0,s.kt)("p",null,"distinct select on columns"),(0,s.kt)("h4",{id:"limit-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"limit the number of rows returned"),(0,s.kt)("h4",{id:"offset-int"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,s.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,s.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,s.kt)("h4",{id:"order_by-dtag_transfer_requests_order_by"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-order-by"},(0,s.kt)("inlineCode",{parentName:"a"},"[dtag_transfer_requests_order_by!]")),")"),(0,s.kt)("p",null,"sort the rows by one or more columns"),(0,s.kt)("h4",{id:"where-dtag_transfer_requests_bool_exp"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,s.kt)("a",{parentName:"h4",href:"../inputs/dtag-transfer-requests-bool-exp"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests_bool_exp")),")"),(0,s.kt)("p",null,"filter the rows returned"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"dtag_transfer_requests"},(0,s.kt)("a",{parentName:"h4",href:"../objects/dtag-transfer-requests"},(0,s.kt)("inlineCode",{parentName:"a"},"dtag_transfer_requests"))),(0,s.kt)("p",null,'columns and relationships of "dtag_transfer_requests"'))}f.isMDXComponent=!0}}]);