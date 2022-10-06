"use strict";(self.webpackChunkdesmos_docs=self.webpackChunkdesmos_docs||[]).push([[57212],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),k=p(n),u=i,h=k["".concat(c,".").concat(u)]||k[u]||s[u]||r;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=k;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},89537:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(87462),i=(n(67294),n(3905));const r={id:"application-link-oracle-request",title:"application_link_oracle_request",hide_table_of_contents:!1},l=void 0,o={unversionedId:"graphql/objects/application-link-oracle-request",id:"graphql/objects/application-link-oracle-request",title:"application_link_oracle_request",description:'columns and relationships of "applicationlinkoracle_request"',source:"@site/docs/07-graphql/objects/application-link-oracle-request.mdx",sourceDirName:"07-graphql/objects",slug:"/graphql/objects/application-link-oracle-request",permalink:"/next/graphql/objects/application-link-oracle-request",draft:!1,editUrl:"https://github.com/desmos-labs/docs/master/docs/07-graphql/objects/application-link-oracle-request.mdx",tags:[],version:"current",lastUpdatedAt:1665071081,formattedLastUpdatedAt:"Oct 6, 2022",frontMatter:{id:"application-link-oracle-request",title:"application_link_oracle_request",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"application_link_oracle_request_variance_fields",permalink:"/next/graphql/objects/application-link-oracle-request-variance-fields"},next:{title:"application_link_stddev_fields",permalink:"/next/graphql/objects/application-link-stddev-fields"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:"<code>application_link</code> (<code>application_link!</code>)",id:"application_link-application_link",level:4},{value:"<code>application_link_id</code> (<code>bigint!</code>)",id:"application_link_id-bigint",level:4},{value:"<code>call_data</code> (<code>jsonb!</code>)",id:"call_data-jsonb",level:4},{value:"<code>client_id</code> (<code>String!</code>)",id:"client_id-string",level:4},{value:"<code>height</code> (<code>bigint!</code>)",id:"height-bigint",level:4},{value:"<code>id</code> (<code>Int!</code>)",id:"id-int",level:4},{value:"<code>request_id</code> (<code>String!</code>)",id:"request_id-string",level:4},{value:"<code>script_id</code> (<code>String!</code>)",id:"script_id-string",level:4}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'columns and relationships of "application_link_oracle_request"'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type application_link_oracle_request {\n  application_link: application_link!\n  application_link_id: bigint!\n  call_data(path: String): jsonb!\n  client_id: String!\n  height: bigint!\n  id: Int!\n  request_id: String!\n  script_id: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"application_link-application_link"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link"))," (",(0,i.kt)("a",{parentName:"h4",href:"../objects/application-link"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link!")),")"),(0,i.kt)("p",null,"An object relationship"),(0,i.kt)("h4",{id:"application_link_id-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"application_link_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,i.kt)("h4",{id:"call_data-jsonb"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"call_data"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/jsonb"},(0,i.kt)("inlineCode",{parentName:"a"},"jsonb!")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"path-string"},(0,i.kt)("a",{parentName:"h5",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"path"))," (",(0,i.kt)("a",{parentName:"h5",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))),(0,i.kt)("p",null,"JSON select path"),(0,i.kt)("h4",{id:"client_id-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"client_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"height-bigint"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"height"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/bigint"},(0,i.kt)("inlineCode",{parentName:"a"},"bigint!")),")"),(0,i.kt)("h4",{id:"id-int"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("h4",{id:"request_id-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"request_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"script_id-string"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("inlineCode",{parentName:"a"},"script_id"))," (",(0,i.kt)("a",{parentName:"h4",href:"../scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"))}s.isMDXComponent=!0}}]);