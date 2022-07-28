"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[25312],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),_=p(n),d=a,k=_["".concat(c,".").concat(d)]||_[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=_;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},93572:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"application-link-oracle-request",title:"application_link_oracle_request",hide_table_of_contents:!1},c=void 0,p={unversionedId:"graphql/subscriptions/application-link-oracle-request",id:"graphql/subscriptions/application-link-oracle-request",title:"application_link_oracle_request",description:'fetch data from the table: "applicationlinkoracle_request"',source:"@site/docs/07-graphql/subscriptions/application-link-oracle-request.mdx",sourceDirName:"07-graphql/subscriptions",slug:"/graphql/subscriptions/application-link-oracle-request",permalink:"/next/graphql/subscriptions/application-link-oracle-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/subscriptions/application-link-oracle-request.mdx",tags:[],version:"current",lastUpdatedAt:1659007892,formattedLastUpdatedAt:"7/28/2022",frontMatter:{id:"application-link-oracle-request",title:"application_link_oracle_request",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"user_block",permalink:"/next/graphql/queries/user-block"},next:{title:"application_link",permalink:"/next/graphql/subscriptions/application-link"}},s={},u=[{value:"Arguments",id:"arguments",level:3},{value:"<code>distinct_on</code> (<code>[application_link_oracle_request_select_column!]</code>)",id:"distinct_on-application_link_oracle_request_select_column",level:4},{value:"<code>limit</code> (<code>Int</code>)",id:"limit-int",level:4},{value:"<code>offset</code> (<code>Int</code>)",id:"offset-int",level:4},{value:"<code>order_by</code> (<code>[application_link_oracle_request_order_by!]</code>)",id:"order_by-application_link_oracle_request_order_by",level:4},{value:"<code>where</code> (<code>application_link_oracle_request_bool_exp</code>)",id:"where-application_link_oracle_request_bool_exp",level:4},{value:"Type",id:"type",level:3},{value:"<code>application_link_oracle_request</code>",id:"application_link_oracle_request",level:4}],_={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'fetch data from the table: "application_link_oracle_request"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"application_link_oracle_request(\n  distinct_on: [application_link_oracle_request_select_column!]\n  limit: Int\n  offset: Int\n  order_by: [application_link_oracle_request_order_by!]\n  where: application_link_oracle_request_bool_exp\n): [application_link_oracle_request!]!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"distinct_on-application_link_oracle_request_select_column"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"distinct_on"))," (",(0,i.kt)("a",{parentName:"h4",href:"../enums/application-link-oracle-request-select-column"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_select_column!]")),")"),(0,i.kt)("p",null,"distinct select on columns"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"limit"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"limit the number of rows returned"),(0,i.kt)("h4",{id:"offset-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"offset"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("p",null,"skip the first n rows. Use only with order_by"),(0,i.kt)("h4",{id:"order_by-application_link_oracle_request_order_by"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"order_by"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-order-by"},(0,i.kt)("inlineCode",{parentName:"a"},"[application_link_oracle_request_order_by!]")),")"),(0,i.kt)("p",null,"sort the rows by one or more columns"),(0,i.kt)("h4",{id:"where-application_link_oracle_request_bool_exp"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"where"))," (",(0,i.kt)("a",{parentName:"h4",href:"../inputs/application-link-oracle-request-bool-exp"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request_bool_exp")),")"),(0,i.kt)("p",null,"filter the rows returned"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"application_link_oracle_request"},(0,i.kt)("a",{parentName:"h4",href:"../objects/application-link-oracle-request"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_oracle_request"))),(0,i.kt)("p",null,'columns and relationships of "application_link_oracle_request"'))}d.isMDXComponent=!0}}]);