"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[17989],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98676:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"application-link",title:"application_link",hide_table_of_contents:!1},p=void 0,c={unversionedId:"graphql/objects/application-link",id:"graphql/objects/application-link",title:"application_link",description:'columns and relationships of "application_link"',source:"@site/docs/07-graphql/objects/application-link.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/application-link",permalink:"/next/graphql/objects/application-link",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/application-link.mdx",tags:[],version:"current",lastUpdatedAt:1657531086,formattedLastUpdatedAt:"7/11/2022",frontMatter:{id:"application-link",title:"application_link",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request",permalink:"/next/graphql/objects/application-link-oracle-request"},next:{title:"chain_link_chain_config",permalink:"/next/graphql/objects/chain-link-chain-config"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:"<code>application</code> (<code>String!</code>)",id:"application-string",level:4},{value:"<code>application_link_oracle_requests</code> (<code>[application_link_oracle_request!]!</code>)",id:"application_link_oracle_requests-application_link_oracle_request",level:4},{value:"<code>creation_time</code> (<code>timestamp!</code>)",id:"creation_time-timestamp",level:4},{value:"<code>profile</code> (<code>profile!</code>)",id:"profile-profile",level:4},{value:"<code>result</code> (<code>jsonb</code>)",id:"result-jsonb",level:4},{value:"<code>state</code> (<code>String!</code>)",id:"state-string",level:4},{value:"<code>user_address</code> (<code>String!</code>)",id:"user_address-string",level:4},{value:"<code>username</code> (<code>String!</code>)",id:"username-string",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'columns and relationships of "application_link"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type application_link {\n  application: String!\n  application_link_oracle_requests(\n  distinct_on: [application_link_oracle_request_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [application_link_oracle_request_order_by!]\n  where: application_link_oracle_request_bool_exp\n): [application_link_oracle_request!]!\n  creation_time: timestamp!\n  profile: profile!\n  result(\n  path: String\n): jsonb\n  state: String!\n  user_address: String!\n  username: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"application-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"application_link_oracle_requests-application_link_oracle_request"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_requests"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request!]!")),")"),(0,i.kt)("p",null,"An array relationship"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"distinct_on-application_link_oracle_request_select_column"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h5",href:"../enums/application-link-oracle-request-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_select_column!]")),")"))),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"offset-int"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"))),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"order_by-application_link_oracle_request_order_by"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h5",href:"../inputs/application-link-oracle-request-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_order_by!]")),")"))),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"where-application_link_oracle_request_bool_exp"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h5",href:"../inputs/application-link-oracle-request-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"))),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h4",{id:"creation_time-timestamp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"creation_time"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/timestamp"},(0,i.kt)("inlineCode",{parentName:"a"},"timestamp!")),")"),(0,i.kt)("h4",{id:"profile-profile"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"profile"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/profile"},(0,i.kt)("inlineCode",{parentName:"a"},"profile!")),")"),(0,i.kt)("p",null,"An object relationship"),(0,i.kt)("h4",{id:"result-jsonb"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"result"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,i.kt)("inlineCode",{parentName:"a"},"jsonb")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"path-string"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"JSON select path"),(0,i.kt)("h4",{id:"state-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"state"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"user_address-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"user_address"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"username-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"username"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"))}m.isMDXComponent=!0}}]);