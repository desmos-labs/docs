"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[17989],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(a),u=r,k=m["".concat(p,".").concat(u)]||m[u]||d[u]||i;return a?n.createElement(k,l(l({ref:t},s),{},{components:a})):n.createElement(k,l({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98676:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={id:"application-link",title:"application_link",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/objects/application-link",id:"graphql/objects/application-link",title:"application_link",description:'columns and relationships of "application_link"',source:"@site/docs/07-graphql/objects/application-link.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/application-link",permalink:"/next/graphql/objects/application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/application-link.mdx",tags:[],version:"current",lastUpdatedAt:1660120715,formattedLastUpdatedAt:"Aug 10, 2022",frontMatter:{id:"application-link",title:"application_link",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request",permalink:"/next/graphql/objects/application-link-oracle-request"},next:{title:"chain_link_chain_config",permalink:"/next/graphql/objects/chain-link-chain-config"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:"<code>application</code> (<code>String!</code>)",id:"application-string",level:4},{value:"<code>application_link_oracle_requests</code> (<code>[application_link_oracle_request!]!</code>)",id:"application_link_oracle_requests-application_link_oracle_request",level:4},{value:"<code>creation_time</code> (<code>timestamp!</code>)",id:"creation_time-timestamp",level:4},{value:"<code>profile</code> (<code>profile!</code>)",id:"profile-profile",level:4},{value:"<code>result</code> (<code>jsonb</code>)",id:"result-jsonb",level:4},{value:"<code>state</code> (<code>String!</code>)",id:"state-string",level:4},{value:"<code>user_address</code> (<code>String!</code>)",id:"user_address-string",level:4},{value:"<code>username</code> (<code>String!</code>)",id:"username-string",level:4}],s={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'columns and relationships of "application_link"'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type application_link {\n  application: String!\n  application_link_oracle_requests(\n  distinct_on: [application_link_oracle_request_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [application_link_oracle_request_order_by!]\n  where: application_link_oracle_request_bool_exp\n): [application_link_oracle_request!]!\n  creation_time: timestamp!\n  profile: profile!\n  result(\n  path: String\n): jsonb\n  state: String!\n  user_address: String!\n  username: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"application-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"application"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,r.kt)("h4",{id:"application_link_oracle_requests-application_link_oracle_request"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"application_link_oracle_requests"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request"},(0,r.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request!]!")),")"),(0,r.kt)("p",null,"An array relationship"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"distinct_on-application_link_oracle_request_select_column"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,r.kt)("a",{parentName:"h5",href:"../enums/application-link-oracle-request-select-column"},(0,r.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_select_column!]")),")"))),(0,r.kt)("p",null,"distinct select on columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"limit-int"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"limit the number of rows returned"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"offset-int"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,r.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"order_by-application_link_oracle_request_order_by"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/application-link-oracle-request-order-by"},(0,r.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_order_by!]")),")"))),(0,r.kt)("p",null,"sort the rows by one or more columns"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"where-application_link_oracle_request_bool_exp"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,r.kt)("a",{parentName:"h5",href:"../inputs/application-link-oracle-request-bool-exp"},(0,r.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"))),(0,r.kt)("p",null,"filter the rows returned"),(0,r.kt)("h4",{id:"creation_time-timestamp"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,r.kt)("inlineCode",{parentName:"a"},"timestamp!")),")"),(0,r.kt)("h4",{id:"profile-profile"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,r.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,r.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,r.kt)("p",null,"An object relationship"),(0,r.kt)("h4",{id:"result-jsonb"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"result"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,r.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("h5",{parentName:"li",id:"path-string"},(0,r.kt)("a",{parentName:"h5",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,r.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,r.kt)("p",null,"JSON select path"),(0,r.kt)("h4",{id:"state-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,r.kt)("h4",{id:"user_address-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,r.kt)("h4",{id:"username-string"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("inlineCode",{parentName:"a"},"username"))," (",(0,r.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!")),")"))}d.isMDXComponent=!0}}]);